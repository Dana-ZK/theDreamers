import React, { useEffect, useState } from 'react';
import { banners } from 'data/banners';
import './Slider.css'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Slider = () => {
  const [bannerSet, setBannerSet] = useState(banners);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const lastIndex = bannerSet.length -1;
    if (currentIndex<0) {
      setCurrentIndex(lastIndex)
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0)
    }
  },[currentIndex,bannerSet])

  useEffect(()=>{
    let slider = setInterval(()=>setCurrentIndex(prevState => prevState + 1), 10000);
    return()=>{
      clearInterval(slider)
    }
  },[currentIndex])

  return (
    <section className='section'>
      {bannerSet.map((banner, bannerIndex)=>{
        const {id, image, name} = banner;
        let position = 'nextSlide';
        if(bannerIndex === currentIndex){
          position = 'activeSlide' ;
        }
        else if(bannerIndex  === currentIndex-1 || (currentIndex ===0 && bannerIndex === bannerSet.length-1)){
          position='lastSlide' ;
        }
        return (
          <article className={position} key={id}>
              <img src={image} alt= {name} className='banner'/>
          </article>
        )
      })}
      <button 
        className='prev' 
        onClick={()=>setCurrentIndex(prevState => prevState-1)}>
            <FiChevronLeft/>
        </button>
      <button 
        className='next' 
        onClick={()=>setCurrentIndex(prevState => prevState + 1)}>
            <FiChevronRight/>
        </button>
    </section>
  );
};

export default Slider;