import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148697385.jpg",
    "https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148706052.jpg",
    "https://i.pinimg.com/736x/a4/20/ca/a420ca5cabb4357cd6c112aff0330e81.jpg",
    "https://i.pinimg.com/736x/ec/9e/02/ec9e02c3deaf55997921a845428b7557.jpg",
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      clearInterval(slideInterval);
    }, 0);

    return () => {
      clearInterval(slideInterval);
      clearTimeout(timer);
    };
  }, [images.length]);

  const slideStyles = {
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: "transform 1s ease-in-out",
  };

  return (
    <div className="container">
      <div className="slider-container">
        <div className="slider" style={slideStyles}>
          {images.map((img, index) => (
            <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
              <img src={img} alt={`Slide ${index}`} className="slide-image" />
            </div>
          ))}
        </div>
      </div>
      <div className="descriptionContainer">
        <div className="imageOverlay">
          <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className="slide-image" />
        </div>
        <h2 className="heading">Selamat datang ke Restoran Kami</h2>
        <p className="paragraph">
          Selamat datang di website kami. Kami adalah restoran yang menyediakan berbagai macam hidangan lezat. Kami berharap Anda akan menikmati waktu bersama kami.
        </p>
        <div className="buttonContainer">
          <div className="buttonWrapper">
            <a href="http://localhost:3000/Menu">
              <button className="button">Lihat Menu</button>
            </a>
            <a href="http://localhost:3000/AboutMe">
              <button className="button">Tentang Kami</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
