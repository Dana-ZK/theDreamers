import Button from 'components/Button';
import React from 'react';
import {FaFacebookSquare, FaYoutube,FaTwitterSquare,FaSpotify,FaApple,FaTiktok,FaInstagram,FaAmazon,FaSoundcloud} from 'react-icons/fa'
import classes from './Footer.module.css'


const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.socialContainer}>
       <div className={classes.social}>
        <FaFacebookSquare className={classes.socialItem}/>
        <FaYoutube className={classes.socialItem}/>
        <FaTwitterSquare className={classes.socialItem}/>
        <FaSpotify className={classes.socialItem}/>
        <FaApple className={classes.socialItem}/>
        <FaTiktok className={classes.socialItem}/>
        <FaInstagram className={classes.socialItem}/>
        <FaAmazon className={classes.socialItem}/>
        <FaSoundcloud className={classes.socialItem}/>
      </div>
        <section className={classes.subscribeContainer}>
          <p>Follow us</p>
          <section className={classes.subscribe}>
          <input type="email" name="follow us" placeholder='email' id="" />
          <Button outlined>Subscribe</Button>
          </section>
        </section>
      </div>
      <p>© {new Date().getFullYear()} The Dreamers is an unreal band. Project created for personal use.</p>
    </footer>
  );
};

export default Footer;
