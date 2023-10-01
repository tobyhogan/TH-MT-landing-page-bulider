import supabase from "@/supabaseClient";

export function downloadPageAsHtml() {
    const textContent = getClonedAndFilteredTextContent();
    const blob = new Blob([textContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    // Create an anchor element to trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "my-landing-page.html";

    link.click();

    // Clean up: release the Blob URL
    URL.revokeObjectURL(url);
}

export function openPreviewInNewTab() {
    const textContent = getClonedAndFilteredTextContent();
    const newTab = window.open();

    if (newTab === null) {
        return;
    }

    newTab.document.open();
    newTab.document.write(textContent);
    newTab.document.close();
}

export async function uploadPageToSupabase(pageName: string) {
    const textContent = getClonedAndFilteredTextContent();
    const blob = new Blob([textContent], { type: "text/html" });
    const escapedPageName = pageName.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");

    const { error } = await supabase.storage.from("landing-pages").upload(`${escapedPageName}.html`, blob);

    if (error) {
        const { error: updateError } = await supabase.storage.from("landing-pages").update(`${escapedPageName}.html`, blob);

        if (updateError) {
            throw error;
        }
    }

    return true;
}

function getClonedAndFilteredTextContent() {
    const htmlContent = getClonedAndFilteredDocument().body.innerHTML;
    const cssContent = getCssContent();

    // Create text content combining HTML and Tailwind CSS
    return `
        ${htmlContent}
        <style>
            ${cssContent}
        </style>
        `;
}

function getClonedAndFilteredDocument() {
    let clonedDocument = document.cloneNode(true) as Document;

    clonedDocument = removeEditElements(clonedDocument);
    clonedDocument = removeEditClickEvents(clonedDocument);

    const scripts = clonedDocument.getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].getAttribute("src")?.includes("main.ts")) {
            scripts[i].remove();
        }
    }

    return clonedDocument;
}

function getAllCSSVariableNames() {
    const root: HTMLElement | null = document.querySelector(":root");

    if (!root) {
        return [];
    }

    return root.style.cssText;
}


function getCssContent() {
    const customCssVariables = getAllCSSVariableNames();

    const cssContent = Array.from(document.styleSheets)
        .filter(sheet => sheet.href?.includes("assets/") || (sheet.ownerNode instanceof HTMLElement && sheet.ownerNode.dataset.viteDevId)) // Exclude external stylesheets
        .map(sheet => [
            ...sheet.cssRules
        ].map(rule => rule.cssText).join("\n"))
        .join("\n");

    return `${cssContent} *, ::before, ::after { ${customCssVariables} }`;
}

function removeEditElements(clonedDocument: Document) {
    const elementsToRemove = clonedDocument.querySelectorAll("[data-dont-export]");

    elementsToRemove.forEach((element: Element) => element.remove());

    return clonedDocument;
}

function removeEditClickEvents(clonedDocument: Document) {
    const editElements = clonedDocument.querySelectorAll("[data-remove-before-export]");

    editElements.forEach((element: Element) => {
        const clonedElement: HTMLElement = element.cloneNode(true) as HTMLElement;

        if ((clonedElement instanceof HTMLAnchorElement) === false) {
            clonedElement.classList.remove("cursor-pointer");
        }

        clonedElement.removeAttribute("contentEditable");

        element.parentNode?.replaceChild(clonedElement, element);
    });

    return clonedDocument;
}
