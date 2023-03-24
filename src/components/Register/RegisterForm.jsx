import React, { useEffect, useState } from 'react';
import { auth, googleProvider } from 'firebase-config';
import { createUserWithEmailAndPassword, signInWithPopup,signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import { UserAuth } from 'components/authContext/authContext';

import classes from './RegisterForm.module.css'

const RegisterForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const [user, setUser] = useState(auth.currentUser);
  return (
    <div>
      <div>
      <p className='py-2'>
          Already have an account yet?{' '}
          <Link to='/login' className='underline'>
            Sign in.
          </Link>
          </p>
      </div>
    <h4> Welcome: </h4>
      {user != null ? <>{user.email}</>: <>user</>}
    <form  onSubmit={handleSubmit}>
    <div className={classes.box_loginForm}>
      <label htmlFor="email" className={classes.title}>
        Your email
      </label>
      <input 
      type="email" 
      id="email" 
      required 
      className={classes.input}   onChange={(e) => setEmail(e.target.value)}
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
      onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div>
      <Button
      // onClick={register} 
      className={classes.btn} 
      filled
      >
        Create account
      </Button>
      <Button 
        outlined
        // onClick={registerWithGoogle}
        >
        Registrate with Google
      </Button>
    </div>
  </form>
        </div>
  );
};

export default RegisterForm;