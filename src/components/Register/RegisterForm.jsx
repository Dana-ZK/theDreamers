import Button from 'components/Button';
import { auth, googleProvider } from 'firebase-config';
import { createUserWithEmailAndPassword, signInWithPopup,signOut } from 'firebase/auth';
import React, { useState } from 'react';


import classes from './RegisterForm.module.css'

const RegisterForm = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // const [user, setUser] = useState({});
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });


  const register = async ()=>{
    try {
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    } catch (err) {
      console.error(err);
    }
  }
  const registerWithGoogle = async ()=>{
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  }
  const logOut = async ()=>{
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  }

console.log(auth?.currentUser?.email);

  return (
    <form >
    <h4> Welcome: </h4>
      {auth?.currentUser?.email}
    <div className={classes.box_loginForm}>
      <label htmlFor="text" className={classes.title}>
        Enter your name
      </label>
      <input 
      type="text" 
      id="text" 
      className={classes.input} 
      required  
      />
    </div>
    <div className={classes.box_loginForm}>
      <label htmlFor="email" className={classes.title}>
        Your email
      </label>
      <input 
      type="email" 
      id="email" 
      required 
      className={classes.input} 
      onChange={event => {setRegisterEmail(event.target.value)}}
      />
    </div>
    <div className={classes.box_loginForm}>
      <label htmlFor="password" className={classes.title}>
        Your password
      </label>
      <input 
      type="password" 
      id="password" 
      minLength="6" 
      className={classes.input} 
      required  
      onChange={event => {setRegisterPassword(event.target.value)}}
      />
    </div>
    <div>
      <Button
      onClick={register} 
      className={classes.btn} 
      filled
      >
        Create account
      </Button>
      <Button 
        outlined
        onClick={registerWithGoogle}
      >
        Registrate with Google
      </Button>
      <Button 
        outlined
        onClick={logOut}
      >
        LogOut
      </Button>
    </div>
  </form>
  );
};

export default RegisterForm;