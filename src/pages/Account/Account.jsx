import { UserAuth } from 'components/authContext/authContext';
import Button from 'components/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Account.module.css';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={classes.accountPage}>
      <h1 className={classes.title}>Account</h1>
      <p className={classes.text}>User Email: {user && user.email}</p>

      <Button onClick={handleLogout} outlined>
        Logout
      </Button>
    </div>
  );
};

export default Account;