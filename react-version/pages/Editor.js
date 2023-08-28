import React from 'react';
import { auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

function Editor({IsAuth}) {

  return (
    <div className='loginPage'>
        <p>
            This is the editor test1
            This is the editor

            test1234
        </p>
    </div>
  )
}

export default Editor