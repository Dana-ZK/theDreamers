import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Tour from './pages/Tour/Tour';
import Store from './pages/Store/Store';
import Video from './pages/Video/Video';
import About from './pages/About/About';
import Music from './pages/Music/Music';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import NavigatorMenu from 'components/header/NavigatorMenu/NavigatorMenu';
import Cart from 'components/cart/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <ErrorBoundary>
  <Router>
     <Routes>
            <Route path='/' exact element={<Home/>}> </Route>
                <Route path='/tour' element={<> <NavigatorMenu/><Tour/> <Footer/></>}/>
                <Route path='/store' element={<> <NavigatorMenu/><Store/><Footer/></>}/>
                <Route path='/video' element={<> <NavigatorMenu/><Video/><Footer/></>}/>
                <Route path='/about' element={<> <NavigatorMenu/><About/><Footer/></>}/>
                <Route path='/music' element={<> <NavigatorMenu/><Music/><Footer/></>}/>
                <Route path='/cart' element={<> <NavigatorMenu/><Cart/><Footer/></>}/>
           
        </Routes>
  </Router>
  </ErrorBoundary>
);

reportWebVitals();