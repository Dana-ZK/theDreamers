import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import classes from './LoginForm.module.css'
import { UserAuth } from 'components/authContext/authContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn, user } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      if(!user){ return alert('You need to registrate')}
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
      alert(`Your email or password is incorrect, please check your data, ${e.message}`)
    }
  };
  return (
    <form className={classes.form_login} onSubmit={handleSubmit}>
      <div >
      <p> Don't have an account? Please,click here
      <Link to="/registration" className={classes.link}> for registration </Link>
      </p>
      </div>
      <div className={classes.box_loginForm}>
        <label htmlFor="email" className={classes.title}>
          Your email
        </label>
        <input type="email" id="email" required className={classes.input} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className={classes.box_loginForm}>
        <label htmlFor="password" className={classes.title}>
          Your password
        </label>
        <input type="password" id="password" minLength="6" className={classes.input} required onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div>
        <Button  className={classes.btn} filled>
          {" "}
          Login
        </Button>

      </div>
       <Link to="/forgot-password" className={classes.link}> Forgot password?</Link>
    </form>
  );
};

export default LoginForm;