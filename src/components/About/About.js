import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Beauty Bliss</h2>

        <div className="about-content">
          {/* Column 1: Main Story */}
          <div className="about-column">
            <div className="about-card main-story">
              <h3>Your Journey to Radiance Starts Here</h3>
              <p>
                At Beauty Bliss, we believe that beauty is about self-expression
                and confidence. Founded in South Africa, we're passionate about
                bringing you the finest quality cosmetics and skincare products
                that celebrate your unique beauty.
              </p>
              <p>
                Our mission is to empower individuals to express their inner
                beauty through high-quality, cruelty-free products that are good
                for you and the planet.
              </p>
            </div>
          </div>

          {/* Column 2: Features */}
          <div className="about-column">
            <div className="about-card features">
              <h4>Why Choose Us</h4>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">🌿</span>
                  <div className="feature-text">
                    <h5>Cruelty-Free</h5>
                    <p>All our products are never tested on animals</p>
                  </div>
                </div>

                <div className="feature-item">
                  <span className="feature-icon">💝</span>
                  <div className="feature-text">
                    <h5>Quality Assured</h5>
                    <p>Premium ingredients for your skin</p>
                  </div>
                </div>

                <div className="feature-item">
                  <span className="feature-icon">🇿🇦</span>
                  <div className="feature-text">
                    <h5>Proudly South African</h5>
                    <p>Supporting local communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Stats */}
          <div className="about-column">
            <div className="about-card stats">
              <h4>Our Impact</h4>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-emoji">💄</div>
                  <div className="stat-content">
                    <div className="stat-number">100+</div>
                    <div className="stat-label">Makeup Products</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-emoji">🧴</div>
                  <div className="stat-content">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Skincare Items</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-emoji">⭐</div>
                  <div className="stat-content">
                    <div className="stat-number">4.8/5</div>
                    <div className="stat-label">Customer Rating</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-emoji">🚚</div>
                  <div className="stat-content">
                    <div className="stat-number">24hr</div>
                    <div className="stat-label">Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
