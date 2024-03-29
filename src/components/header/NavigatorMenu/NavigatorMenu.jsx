import React from 'react';
import {FaFacebookSquare, FaYoutube,FaSpotify,FaApple,FaTiktok,FaInstagram,FaSoundcloud, FaUserAstronaut} from 'react-icons/fa'
import {RiLoginBoxLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from 'images/logo.png';
import  Hamburger_icon from 'images/Hamburger_icon.png';
import Cart from 'components/cart/Cart';
import classes from './NavigatorMenu.module.css';



const NavigatorMenu = () => {
  return (
    <div className={classes.menu}>
      <div className={classes.social}>
        <FaYoutube className={classes.socialItem}/>
        <FaSpotify className={classes.socialItem}/>
        <FaSoundcloud className={classes.socialItem}/>
        <FaApple className={classes.socialItem}/>
        <FaFacebookSquare className={classes.socialItem}/>
        <FaTiktok className={classes.socialItem}/>
        <FaInstagram className={classes.socialItem}/>
        <div>
          <Link to='/account' ><FaUserAstronaut className={classes.socialItem}/></Link>
        </div>
      </div>
      <div className={classes.menu_logo}>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
      </div>
      <div id="div_burger">
        <input type="checkbox" id="burger" className={classes.burger} />
        <label htmlFor="burger" className={classes.burger_menu}>
          <img src={Hamburger_icon} alt="burger_menu" className={classes.burger_img} />
        </label>
        <nav className={classes.menu_items}>
          
          <ul>
            <li>
            <Link to='/login' className={classes.link}> <RiLoginBoxLine />  LogIn</Link>
            </li>
            <li>
            <Link to='/tour' className={classes.link}> Tour </Link>
            </li>
            <li>
              <Link to='/store'className={classes.link}> Store </Link>
            </li>
            <li>
            <Link to='/video'className={classes.link}> Video </Link>
            </li>
            <li>
            <Link to='/music'className={classes.link}> Music</Link>
            </li>
            <li>
            <Link to='/about'className={classes.link} >About</Link>
            </li>
            <li className={classes.linkLast}><Cart/>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigatorMenu;