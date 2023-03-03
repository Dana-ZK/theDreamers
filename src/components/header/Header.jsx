import React from 'react';
import classes from './Header.module.css';
import HeaderContent from './headerContent/HeaderContent';
import NavigatorMenu from './NavigatorMenu/NavigatorMenu';

function Header() {
  return (
      <header className={classes.header}>
      <NavigatorMenu/>

      <HeaderContent/>
      </header>
  );
}

export default Header;