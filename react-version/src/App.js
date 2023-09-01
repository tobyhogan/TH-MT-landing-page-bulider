import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Editor from './pages/Editor';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config.js';

function App() {

  const [isAuth, setIsAuth] = useState(false); // used to check if the user is logged in already or not

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  };

  return (
    <Router>
        <nav>
          <div id='links-container'>
            <Link to="/" className='nav-link'><p class="text-3xl text-gray-900 dark:text-white"><u><i>Landing Page Builder</i></u></p></Link>
            <div className='spacer'></div>
            {!isAuth ? (
            <Link to="/login" className='nav-link'> <p class="text-3xl text-gray-900 dark:text-white"><u> Login </u></p> </Link>
            ) : (
              <>

                <Link to="/dashboard" className='nav-link'> Dashboard </Link>
                <Link to="/account" className='nav-link'> Account </Link>
                <button onClick={signUserOut} className='nav-link'> Log Out </button>
              </>
            )}
          </div>
        </nav>
        <hr></hr>
      <Routes>
        <Route path="/" element={ <Home isAuth={isAuth}/>} />
        <Route path="/editor" element={ <Editor isAuth={isAuth}/>} />
        <Route path="/login" element={ <Login setIsAuth={setIsAuth} />} />
        <Route path="/dashboard" element={ <Dashboard setIsAuth={setIsAuth} />} />
        <Route path="/account" element={ <Account setIsAuth={setIsAuth} />} />
      </Routes>
      <footer>
        <hr></hr>
        <div id='footerContainer'>
          <a href="#" class="font-medium text-white underline dark:white-blue-500 hover:no-underline">Instagram</a>
          <p class="font-medium text-base text-blue-900 dark:text-white">Contact: hello@landingpage.com</p>
        </div>
          <h3>&copy; Landing Page Builder 2023</h3>
      </footer>

    </Router>
  );
}

export default App;
