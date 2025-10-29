import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about-title">About Beauty Bliss</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>Your Journey to Radiance Starts Here</h3>
            <p>
              At Beauty Bliss, we believe that beauty is about self-expression
              and confidence. Founded in South Africa, we're passionate about
              bringing you the finest quality cosmetics and skincare products
              that celebrate your unique beauty.
            </p>

            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🌿</span>
                <div>
                  <h4>Cruelty-Free</h4>
                  <p>
                    All our products are cruelty-free and never tested on
                    animals
                  </p>
                </div>
              </div>

              <div className="feature">
                <span className="feature-icon">💝</span>
                <div>
                  <h4>Quality Assured</h4>
                  <p>Premium ingredients carefully selected for your skin</p>
                </div>
              </div>

              <div className="feature">
                <span className="feature-icon">🇿🇦</span>
                <div>
                  <h4>Proudly South African</h4>
                  <p>Supporting local communities and businesses</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visuals">
            <div className="visual-item">
              <div className="visual-emoji">💄</div>
              <p>100+ Makeup Products</p>
            </div>
            <div className="visual-item">
              <div className="visual-emoji">🧴</div>
              <p>50+ Skincare Items</p>
            </div>
            <div className="visual-item">
              <div className="visual-emoji">⭐</div>
              <p>4.8/5 Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
