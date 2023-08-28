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
        <Link to="/"> Home </Link>
        <Link to="/editor"> Edito 1234 r </Link>
        {!isAuth ? (
        <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut}> Log Out </button>
          </>
         )}
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
