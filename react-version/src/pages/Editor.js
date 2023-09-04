
import React, { useEffect } from 'react'
import { auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

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
