import { auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from "../firebase-config";

function Dashboard({IsAuth}) {

  return (
    <div className='dashboardPage'>
        <h1>
            This is your dashboard!
        </h1>
        <h2>
          Your Sites:
        </h2>
        <p><a href='/editor?site=site1'>YourSite1</a></p>
        <p><a href='/editor'>YourSite2</a></p>
        <p><a href='/editor'>YourSite3</a></p>
        <p><a href='/editor'>Basic site 3</a></p>
        <button>Create New Site</button>
    </div>
  )
}

export default Dashboard;