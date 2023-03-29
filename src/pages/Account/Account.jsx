import { UserAuth } from 'components/authContext/authContext';
import Button from 'components/Button';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Account.module.css';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      alert('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={classes.accountPage}>
    <div>
      <h1 className={classes.title}>Account</h1>
      <p className={classes.text}>User Email: {user && user.email}</p>
    </div>
  <div className={classes.accountContainer}>
    <div className={classes.accountButtons}>
      <Button onClick={handleLogout} outlined>
        Logout
      </Button>
      <Button outlined>
        <Link to='/forgot-password'> Reset password</Link>
      </Button>
    </div>

<div>
  <h2>Info about user</h2>
  </div>  
  </div>

    </div>
  );
};

export default Account;