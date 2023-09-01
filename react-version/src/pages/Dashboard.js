import { auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from "../firebase-config";

function Dashboard({IsAuth}) {

  return (
    <div className='dashboardPage'>
       <h3 class="text-2xl font-bold dark:text-white">Welcome to your dashboard</h3>
        <h2>
          Your Sites:
        </h2>
        <p><a href='/editor?site=YourSite2'>YourSite2</a> | Up @ www.yoursite.com | Hosting ✅ Mail Lists ❌</p>
        <p><a href='/editor'>YourSite1</a> | Up @ www.yoursite.com | Hosting ❌ Mail Lists ✅</p>
        <p><a href='/editor'>YourSite3</a> | Up @ www.yoursite.com | Hosting ❌ Mail Lists ❌ </p>
        <p><a href='/editor'>YourSite4</a> | Up @ www.yoursite.com | Hosting ✅ Mail Lists ✅</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create New Site
        </button>
    </div>
  )
}

export default Dashboard;