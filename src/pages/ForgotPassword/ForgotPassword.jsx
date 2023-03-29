import { UserAuth } from 'components/authContext/authContext';
import Button from 'components/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './ForgotPassword.module.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { resetPassword } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await resetPassword(email)
      alert("Please, check your email to change your password.")
    } catch (e) {
      setError(e.message)
      console.log(e.message)
      alert(`Your email or password is incorrect, please check your data, ${e.message}`)
    }
  };

  return (
    <form className={classes.form_login} onSubmit={handleSubmit}>
      <div className={classes.box_loginForm}>
        <label htmlFor="email" className={classes.title}>
          Your email
        </label>
        <input type="email" id="email" required className={classes.input} onChange={(e) => setEmail(e.target.value)}/>
        <Button  className={classes.btn} filled>
          {" "}
          Reset password
        </Button>
      </div>
     
       <Link to="/login" className={classes.link}> Want to Login?</Link>
    </form>
  )
};

export default ForgotPassword;