import React from 'react';
import Button from 'components/Button';

import classes from './Regastration.module.css';

const Registration = (props) => {
  return (
    <form className={classes.form_login}>
    <h1>Registration</h1>
    <div className={classes.box_loginForm}>
      <label htmlFor="text" className={classes.title}>
        Enter your name
      </label>
      <input type="text" id="text" className={classes.input} required />
    </div>
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
        Login
      </Button>
      <Button onClick={props.onClick} className={classes.btn + " " + classes.btn_alt} outlined>
        Cancel
      </Button>
    </div>
  </form>
  );
};

export default Registration;