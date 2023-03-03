import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import MainPage from './main/MainPage';


function Home() {
  return (
    <>
      <Header/>
      <MainPage/>
      <Footer/>
    </>
  );
}

export default Home;