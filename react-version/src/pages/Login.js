import React from 'react';
import { db, auth, provider} from '../firebase-config'
import { signInWithPopup, getAdditionalUserInfo} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';

function Login({setIsAuth}) {

    const usersCollectionRef = collection(db, "users");
    const sitesCollectionRef = collection(db, "sites");

    async function addNewUserToFirestore() {
        await addDoc(usersCollectionRef, {id: auth.currentUser.uid, displayName: auth.currentUser.displayName, plan: "free"});
    }

    async function addNewSiteToFirestore(siteName, siteData) {
        await addDoc(sitesCollectionRef, {owner: auth.currentUser.uid, ownerDisplayName: auth.currentUser.displayName, name: siteName, data: siteData});
    }


    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);

            navigate("/");

            const {isNewUser} = getAdditionalUserInfo(result);

            console.log(isNewUser);

            if (isNewUser) {
                addNewUserToFirestore();
                addNewSiteToFirestore("Untitled Site", "");
            }
        });
    }



  return (
    <div className='loginPage'>
        <p>
            Sign in with Google
        </p>
        <button className='login-with-google' onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    </div>
  )
}

export default Login