import React from "react";
//import "./ProductGallery.css";

const ProductGallery = () => {
  const galleryImages = [
    { id: 1, emoji: "💄", label: "Lipsticks" },
    { id: 2, emoji: "🧴", label: "Skincare" },
    { id: 3, emoji: "👁️", label: "Eye Makeup" },
    { id: 4, emoji: "🌸", label: "Fragrance" },
    { id: 5, emoji: "🎨", label: "Foundation" },
    { id: 6, emoji: "🧼", label: "Cleansers" },
  ];

  return (
    <section className="product-gallery">
      <div className="container">
        <h2 className="gallery-title">Explore Our Categories</h2>
        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-emoji">{item.emoji}</div>
              <h3 className="gallery-label">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
