import React from "react";
import "./ProductGallery.css";

const ProductGallery = () => {
  const galleryImages = [
    { id: 1, emoji: "💄", label: "Lipsticks", price: "From R449" },
    { id: 2, emoji: "🧴", label: "Skincare", price: "From R249" },
    { id: 3, emoji: "👁️", label: "Eye Makeup", price: "From R349" },
    { id: 4, emoji: "🌸", label: "Fragrance", price: "From R299" },
    { id: 5, emoji: "🎨", label: "Foundation", price: "From R599" },
    { id: 6, emoji: "🧼", label: "Cleansers", price: "From R249" },
  ];

  return (
    <section className="product-gallery" id="categories">
      <div className="container">
        <h2 className="section-title">Explore Our Categories</h2>
        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div key={item.id} className="gallery-card">
              <div className="gallery-emoji">{item.emoji}</div>
              <h3 className="gallery-label">{item.label}</h3>
              <p className="gallery-price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
