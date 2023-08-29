import React from 'react';
import { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';

import { addDoc, collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';

function Account({IsAuth}) {

/*  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };
  }, [])

  */

  /* {users.map((user) => {
        return (
          <div>
            <p>Welcome to your account</p>
            <img src={auth.currentUser.photoURL} alt='hello world'/>
            <h4>Your Name : {auth.currentUser.displayName}</h4>
            <h4>Your Email Address: {auth.currentUser.email}</h4>
            <h4>Your Plan: {"test"}</h4>
          </div>
        );
      })}

    */

  /* v8????====> db.collection('users').doc(auth.currentUser.uid).get().then(doc => {
    console.log(doc.data().plan);
  })
  */

  /*const docRef = doc(db, "users", "OIb9JJhqv4AG2hKPS9HG");
  const docSnap = await getDoc(docRef);

  console.log(docSnap.data()); */

  /*async function getUserInfo() {
    const docRef = doc(db, "users", "OIb9JJhqv4AG2hKPS9HG");
    const docSnap = await getDoc(docRef);

    return docSnap;
  }


  const docSnap = getUserInfo();

  console.log(docSnap); */

  return (
    <div className='loginPage'>
      <p>Welcome to your account</p>
      <img src={auth.currentUser.photoURL} alt='hello world'/>
      <h4>Your Name : {auth.currentUser.displayName}</h4>
      <h4>Your Email Address: {auth.currentUser.email}</h4>
      <h4>Your Plan: {"test"}</h4>
    </div>
  )

}

export default Account;