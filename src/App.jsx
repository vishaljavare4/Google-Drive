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
  
`;

function App() {
  const [user, setUser] = useState(null);

  const signIn = () => {
    console.log('SignIn function called'); 
    auth.signInWithPopup(provider)
      .then(({ user }) => {
        console.log('User signed in:', user); 
        setUser(user);
      })
      .catch(err => {
        console.error('Sign in error:', err); 
        alert(err);
      });
  };

  console.log('App component rendered with user:', user); 

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
