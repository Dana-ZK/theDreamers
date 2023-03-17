import React from 'react';
import Button from 'components/Button';
import classes from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
    <form className={classes.form_login}>
      <h1>Login</h1>
      <div className={classes.box_loginForm}>
        <label htmlFor="email" className={classes.title}>
          Your email
        </label>
        <input type="email" id="email" required className={classes.input}/>
      </div>
      <div className={classes.box_loginForm}>
        <label htmlFor="password" className={classes.title}>
          Your password
        </label>
        <input type="password" id="password" minLength="6" className={classes.input} required />
      </div>
      <div>
        <Button onClick={props.onClick} className={classes.btn} filled>
          {" "}
          Login
        </Button>
        <Button onClick={props.onClick} className={classes.btn + " " + classes.btn_alt} outlined>
          {" "}
          Cancel
        </Button>
      </div>
      <div >
      <p> Still don't have an account? Please,click here</p>
      <Link to="/registration" className={classes.link}> <p> for registration </p> </Link>
      </div>
    </form>
  );
};

export default Login;