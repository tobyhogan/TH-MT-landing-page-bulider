export function downloadPageAsHtml() {
    const textContent = getClonedAndFilteredTextContent();

    // Create a Blob with the text content
    const blob = new Blob([textContent], { type: "text/html" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor element to trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "my-landing-page.html";

    // Trigger the download
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

function getCssContent() {
    return Array.from(document.styleSheets)
        .filter(sheet => sheet.href?.includes("assets/") || (sheet.ownerNode instanceof HTMLElement && sheet.ownerNode.dataset.viteDevId)) // Exclude external stylesheets
        .map(sheet => [
            ...sheet.cssRules
        ].map(rule => rule.cssText).join("\n"))
        .join("\n");
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
