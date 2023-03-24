import React from 'react';
import LoginForm from 'components/login/LoginForm';
import classes from './Login.module.css';

const Login = () => {
  return (
    <div className={classes.form_login}>
      <h1>Login:</h1>
      <LoginForm/>
    </div>
  );
};

export default Login;