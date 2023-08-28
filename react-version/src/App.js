import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import Editor from './pages/Editor';
import { useState } from 'react';
import { signOut } from 'firebase/auth';

import { auth } from './firebase-config';

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
            <Link to="/" className='nav-link'> Landing Page Builder </Link>
            <div className='spacer'></div>
            {!isAuth ? (
            <Link to="/login" className='nav-link'> Login </Link>
            ) : (
              <>
                <Link to="/editor" className='nav-link'> Editor </Link>
                <Link to="/createpost" className='nav-link'> Create Post </Link>
                <button onClick={signUserOut} className='nav-link'> Log Out </button>
              </>
            )}
          </div>
        </nav>
      <Routes>
        <Route path="/" element={ <Home isAuth={isAuth}/>} />
        <Route path="/editor" element={ <Editor isAuth={isAuth}/>} />
        <Route path="/createpost" element={ <CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={ <Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
