import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import { UserAuth } from 'components/authContext/authContext';

import classes from './RegisterForm.module.css'

const RegisterForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser, loginWithGoogle } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      if(!password){ return alert('Wrong password')}
      if(!email){ return alert('Wrong email')}
      alert('Welcome!')
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert(`Email is already in use, sign in or use other email, ${e.message}`)
      
    }
  };

  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await loginWithGoogle();
      alert('Welcome!')
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert(`Email is already in use, sign in or use other email, ${e.message}`)
      
    }
  };
  return (
    <div>
      <div>
      <p>
          Already have an account yet?{' '}
          <Link to='/login'>
            Sign in.
          </Link>
          </p>
      </div>
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
      className={classes.btn} 
      filled
      >
        Create account
      </Button>
    </div>
  </form>
      <Button 
        outlined
        onClick = {handleLoginWithGoogle}
        >
        Registrate with Google
      </Button>
        </div>
  );
};

export default RegisterForm;