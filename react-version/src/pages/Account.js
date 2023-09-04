import React from 'react';
import { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';

import { addDoc, collection, getDocs, getDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
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

  //hello new world

  async function getData() {
    const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.data());

      var data = doc.data();

      var Element = document.getElementById("yourPlanTag");

      Element.innerHTML = "Your Plan: " + data.plan;

    });

  }

  getData();

  //console.log("test5");



  return (
    <div className='accountPage'>
      <h3 class="text-2xl font-bold dark:text-white">Welcome to Your Account</h3>
      <img src={auth.currentUser.photoURL} alt='hello world'/>
      <h4>Your Name: {auth.currentUser.displayName}</h4>
      <h4>Your Email Address: {auth.currentUser.email}</h4>
      <h4 id='yourPlanTag'>Your Plan: {"404"}</h4>
    </div>
  )

}

export default Account;