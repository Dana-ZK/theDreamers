import React from 'react';

import classes from './Regastration.module.css';
import RegisterForm from 'components/register/RegisterForm';

const Registration = () => {

  return (
   <div className={classes.form_login}>
    <h1>Registration</h1>
    <RegisterForm/>
   </div>
  );
};

export default Registration;