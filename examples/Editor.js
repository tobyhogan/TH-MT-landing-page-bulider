import React from 'react';
import { auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

function Editor({IsAuth}) {

  return (
    <div className='loginPage'>
        <p>
            This is the editor
        </p>
    </div>
  )
}

export default Editor