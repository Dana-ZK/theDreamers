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
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };
  return (
    <form className={classes.form_login} onSubmit={handleSubmit}>
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
      <div >
      <p> Still don't have an account? Please,click here</p>
      <Link to="/registration" className={classes.link}> <p> for registration </p> </Link>
      </div>
    </form>
  );
};

export default LoginForm;