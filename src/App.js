import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {motion} from 'framer-motion'
import './App.css';
// Components:
import ImageSlider from './components/slider'
import Blurb from './components/blurb'

const App = () => {
  return (
    <div className="wrapperRelative">
      <div className="bg">
        <div className="wrapper">
          <p className="kaffee">
            kaffeeklatsch
          </p>
        </div>
        <div className="line"></div>
        <div className="wrapper">
          <p className="blurb">
            Today, I got coffee with my friend Jake. 
            <br></br>He mentioned a friend in UI/UX design who spent the prior week writing three total lines of CSS. 
            <br></br>While not wanting to come off as overconfident or entitled, I may have said something to the effect of being able to manage that myself. Perhaps even four lines a week. 
            <br></br>Following coffee, I built and deployed this portfolio of mockups to showcase my frontend design abilities. If you're interested, contact me. 
            <br></br>Thanks for looking.
          </p>
          <div className="wrapperRelative">
          <ImageSlider />
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
