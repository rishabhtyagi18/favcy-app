/**
Author : Rishabh Tyagi
utility : to make a slider scroll or Carousel  of components by passing them in as props.content in this component
*/

import React from 'react';
import '../css/CarouselSlider.css';
import Arrow from './rightArrow.svg';


export default function CarouselSlider(props) {
  
    let container = null;
    let scrollElement = null;
  
    function sideScrollLeft(element,direction,speed,distance,step){
      var scrollAmount = 0;
      scrollElement.insertBefore(scrollElement.lastChild,scrollElement.firstChild)
  
      var slideTimer = setInterval(function(){
          element.scrollLeft -= step;
          scrollAmount += step;
          if(scrollAmount >= distance){
              window.clearInterval(slideTimer);
          }
      }, speed);
    }
  
  
    function sideScrollRight(element,direction,speed,distance,step){
      scrollElement.appendChild(scrollElement.firstChild) 
      var scrollAmount = 0;
  
      var slideTimer = setInterval(function(){
          element.scrollLeft += step;
          scrollAmount += step;
          if(scrollAmount >= distance){
              window.clearInterval(slideTimer);
          }
      }, speed);
    }
  
  
    return (
        <div className={ props.popular == 1 ? "flex2" : "flex"} style = { props.style ? props.style : null}>
  
        {props.scrollButtons
        && (
          <div
            onClick={() => {
              sideScrollLeft(container,'right',25,300,10);
            }}
            style={props.arrowContainerStyle ? { ...props.arrowContainerStyle } : {}}
          >
            <img style={props.leftArrowStyle ? { ...props.leftArrowStyle } : {}}  className="leftArrow" src={Arrow} alt="Left arrow" />
          </div>
        )}
  
  
        <div
        className="container"
        ref={(el) => {
          container = el;
        }}
        >
        <div
          className={ props.popular == 1 ? "flexScroll2" : "flexScroll"}
          ref={(el) => {
            scrollElement = el;
          }}
        >
           {props.content}
        </div>
        </div>
  
        {props.scrollButtons
        && (
          <div
            onClick={() => {
              sideScrollRight(container,'right',25,300,10);
            }}
            style={props.arrowContainerStyle ? { ...props.arrowContainerStyle } : {}}
          >
            <img style={props.rightArrowStyle ? { ...props.rightArrowStyle } : {}} className="rightArrow" src={Arrow} alt="Left arrow" />
          </div>
        )}
        </div>
    );
  }