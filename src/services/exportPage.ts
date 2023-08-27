export function downloadPageAsHtml() {
    let clonedDocument = document.cloneNode(true) as Document;

    clonedDocument = RemoveEditElements(clonedDocument);
    clonedDocument = removeEditClickEvents(clonedDocument);

    const htmlContent = clonedDocument.body.innerHTML;
    const cssContent = Array.from(document.styleSheets)
                .filter(sheet => sheet.href?.includes("assets/") || (sheet.ownerNode instanceof HTMLElement && sheet.ownerNode.dataset.viteDevId)) // Exclude external stylesheets
                .map(sheet => [...sheet.cssRules].map(rule => rule.cssText).join('\n'))
                .join('\n');

    // Create text content combining HTML and Tailwind CSS
    const textContent = `
    ${htmlContent}
    <style>
        ${cssContent}
    </style>
    `;

    // Create a Blob with the text content
    const blob = new Blob([textContent], { type: 'text/plain' });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor element to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-landing-page.html';

    // Trigger the download
    link.click();

    // Clean up: release the Blob URL
    URL.revokeObjectURL(url);
}

function RemoveEditElements(clonedDocument: Document) {
    const elementsToRemove = clonedDocument.querySelectorAll('[data-dont-export]');

    elementsToRemove.forEach((element: Element) => element.remove());

    return clonedDocument;
}

function removeEditClickEvents(clonedDocument: Document) {
    const editElements = clonedDocument.querySelectorAll('[data-remove-click-event]');

    editElements.forEach((element: Element) => {
        const clonedElement: HTMLElement = element.cloneNode(true) as HTMLElement;

        if ((clonedElement instanceof HTMLAnchorElement) === false) {
            clonedElement.classList.remove('cursor-pointer');
        }

        clonedElement.removeAttribute('contentEditable');

        element.parentNode?.replaceChild(clonedElement, element);
    });

    return clonedDocument;
}
