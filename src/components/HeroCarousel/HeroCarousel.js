import React, { useState, useEffect } from "react";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "🌸",
      title: "Summer Glow Collection",
      description: "Get ready for summer with our new radiant collection",
    },
    {
      id: 2,
      image: "💄",
      title: "Matte Perfection",
      description: "Long-lasting matte lipsticks in 12 stunning shades",
    },
    {
      id: 3,
      image: "🧴",
      title: "Skincare Essentials",
      description: "Professional skincare for your daily routine",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <div className="slide-content">
              <div className="slide-image">{slide.image}</div>
              <div className="slide-text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className="shop-now-btn">Shop Now</button>
              </div>
            </div>
          </div>
        ))}

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
