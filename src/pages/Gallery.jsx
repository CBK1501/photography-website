
import React, { useState } from "react";
import "./Gallery.css";

const categories = [
  {
    name: "Wedding",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700"
  },
  {
    name: "Reception",
    cover: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700"
  },
  {
    name: "Pre-Wedding",
    cover: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700"
  },
  {
    name: "Candid",
    cover: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=700"
  }
];

const photos = [
  // Wedding Photos
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
    category: "Wedding"
  },
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",
    category: "Wedding"
  },
  {
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900",
    category: "Wedding"
  },
  {
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
    category: "Wedding"
  },
  {
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900",
    category: "Wedding"
  },

  // Reception Photos
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",
    category: "Reception"
  },
  {
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
    category: "Reception"
  },
  {
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900",
    category: "Reception"
  },

  // Pre-Wedding Photos
  {
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900",
    category: "Pre-Wedding"
  },
  {
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=900",
    category: "Pre-Wedding"
  },

  // Candid Photos
  {
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=900",
    category: "Candid"
  },
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
    category: "Candid"
  }
];

function Gallery() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Filter photos according to selected category
  const filteredPhotos = photos.filter(
    (photo) => photo.category === selectedCategory
  );

  // Close image preview
  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  // Show previous photo
  const showPreviousImage = (e) => {
    e.stopPropagation();

    setSelectedImageIndex((previousIndex) =>
      (previousIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  };

  // Show next photo
  const showNextImage = (e) => {
    e.stopPropagation();

    setSelectedImageIndex((previousIndex) =>
      (previousIndex + 1) % filteredPhotos.length
    );
  };

  return (
    <div className="gallery">

      {/* Gallery Heading */}
      <div className="gallery-heading">
        <p>OUR PORTFOLIO</p>
        <h1>Our Photography Gallery</h1>
        <span>Every photograph tells a beautiful story.</span>
      </div>

      {/* Category Section */}
      {!selectedCategory ? (

        <div className="category-container">

          {categories.map((category) => (
            <div
              className="category-card"
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
            >

              <img
                src={category.cover}
                alt={category.name}
              />

              <div className="category-overlay">
                <h2>{category.name} Photography</h2>
                <span>View Photos →</span>
              </div>

            </div>
          ))}

        </div>

      ) : (

        /* Selected Category Album */
        <div className="album-section">

          <button
            className="back-btn"
            onClick={() => setSelectedCategory(null)}
          >
            ← Back to Categories
          </button>

          <h2>{selectedCategory} Photography</h2>

          <p>
            Explore our beautiful {selectedCategory.toLowerCase()} moments.
          </p>

          {/* Photos Grid */}
          <div className="gallery-container">

            {filteredPhotos.map((photo, index) => (
              <div
                className="gallery-card"
                key={index}
                onClick={() => setSelectedImageIndex(index)}
              >

                <img
                  src={photo.image}
                  alt={`${selectedCategory} ${index + 1}`}
                />

              </div>
            ))}

          </div>

        </div>

      )}

      {/* Full Screen Image Preview */}
      {selectedImageIndex !== null && (

        <div
          className="image-modal"
          onClick={closeImage}
        >

          {/* Close Button */}
          <button
            className="modal-close"
            onClick={closeImage}
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            className="modal-nav prev-btn"
            onClick={showPreviousImage}
          >
            ❮
          </button>

          {/* Selected Photo */}
          <img
            src={filteredPhotos[selectedImageIndex].image}
            alt="Selected photography"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next Button */}
          <button
            className="modal-nav next-btn"
            onClick={showNextImage}
          >
            ❯
          </button>

          {/* Image Count */}
          <p className="image-count">
            {selectedImageIndex + 1} / {filteredPhotos.length}
          </p>

        </div>

      )}

    </div>
  );
}

export default Gallery;
