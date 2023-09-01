import React from "react";

function Editor({ IsAuth }) {
    return (
        <div className="editorPage">
            <iframe
                src="https://validator.m-winkler.at"
                title="Validator"
                className="editorIframe"
            ></iframe>
        </div>
    );
}

export default Editor;
