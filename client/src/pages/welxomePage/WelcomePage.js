import React, { useState } from "react";
import Slider from "react-slick";
import "./welcomePage.css";

function WelcomePage() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://i.ibb.co/fnk4DjB/btn1.jpg",
    "https://i.ibb.co/3FmDVb6/round1.jpg",
    "https://i.ibb.co/yWY0Qd4/card1.jpg",
    "https://images.unsplash.com/photo-1518799937599-77763326c394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1631849800674-b3a956469bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1605106715994-18d3fecffb98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNoYXBlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  ];
  
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        {">"}
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        {"<"}
      </div>
    );
  };

  const settings = {
    infinate: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="welcome-page_container">
      <div className="slider_container">
        <Slider {...settings}>
          {images.map((img, idx) => {
            return (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <img src={img} alt="img" />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="welcome-animation">
        <h1>Hello There, Be Creative!</h1>
        <p className="subtitle">Welcome to my website!</p>
        <p className="subtitle-description">Here You can style your own components, <br/> create components collections, <br/> 
        Save your components to your profile <br/> and enjoy using them later.</p>
      </div>
    </div>
  );
}

export default WelcomePage;
