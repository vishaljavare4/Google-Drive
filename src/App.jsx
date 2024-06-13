import React, { useState } from 'react';
import styled from 'styled-components';
import Data from "./Components/Data";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import { auth, provider } from './firebase';

const LoginWrapper = styled.div`
  background: lightgrey;
  padding: 20px;
  width: 400px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  img {
    width: 100px;
  }
  button {
    width: 100%;
    background: darkmagenta;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
`;

function App() {
  const [user, setUser] = useState(null);

  const signIn = () => {
    console.log('SignIn function called'); // Debug log
    auth.signInWithPopup(provider)
      .then(({ user }) => {
        console.log('User signed in:', user); // Debug log
        setUser(user);
      })
      .catch(err => {
        console.error('Sign in error:', err); // Debug log
        alert(err);
      });
  };

  console.log('App component rendered with user:', user); // Debug log

  return (
    <>
      {user ? (
        <>
          <Header photoURL={user.photoURL} />
          <div className="App">
            <Sidebar />
            <Data />
          </div>
        </>
      ) : (
        <Home signIn={signIn} />
      )}
    </>
  );
}

export default App;
