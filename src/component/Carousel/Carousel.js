/**
Author : Rishabh Tyagi
utility : to make a Carousel  of components by passing them in as props.content in this component
*/

import React from 'react';
import '../css/main.css';

const Carousels = (props) => {

    return (
      <div
        className={props.popular == 1 ? "padding" : "containers"}
      >
        <img
          loading="lazy"
          src={props.articleImage}
          className={props.popular == 1 ? "popularImage" : "gridImage"}
          alt="banner"
        />
        <div className={props.popular == 1 ? "textDiv" : "hide"}>
          <div className="capText">{props.title}</div>
          <div className="bottomText">{props.subTitle}</div>
        </div>
      </div>
    );
}

export default Carousels;