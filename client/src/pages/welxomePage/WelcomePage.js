import React, { useState } from "react";
import Slider from "react-slick";
import "./welcomePage.css";

function WelcomePage() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://i.ibb.co/2ZzrVT4/but5.jpg",
    "https://i.ibb.co/fnk4DjB/btn1.jpg",
    "https://i.ibb.co/3FmDVb6/round1.jpg",
    "https://i.ibb.co/yWY0Qd4/card1.jpg",
    "https://i.ibb.co/hKyWJgS/btn3.jpg",
    "https://i.ibb.co/WNh39Zy/card3.jpg",
    "https://i.ibb.co/C04FPgD/Screenshot-2022-02-11-141622.jpg",
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
