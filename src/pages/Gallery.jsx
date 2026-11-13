
import React, { useState } from "react";
import "./Gallery.css";
import wedding1 from "../images/wedding1.jpeg"
import wedding2 from "../images/wedding2.jpeg"
import wedding3 from "../images/wedding3.jpg"
import wedding4 from "../images/wedding4.jpg"
import wedding5 from "../images/wedding5.jpg"
import wedding6 from "../images/wedding6.jpg"
import weddingcover from "../images/weddingcover.jpg"
import PrewedCover from "../images/pre-wedCover.jpg"
import prewed1 from "../images/pre-wed1.jpg"
import prewed2 from "../images/pre-wed2.jpg"
import prewed3 from "../images/pre-wed3.jpg"
import prewed4 from "../images/pre-wed4.jpg"
import prewed5 from "../images/pre-wed5.jpg"
import prewed6 from "../images/pre-wed6.jpg"
import RecepCover from "../images/Recep-cover.jpg"
import Recep1 from "../images/Recep1.jpg"
import Recep2 from "../images/Recep2.jpg"
import Recep3 from "../images/Recep3.avif"
import Recep4 from "../images/Recep4.jpg"
import Recep5 from "../images/Recep5.jpg"
import Recep6 from "../images/Recep6.jpg"
import candidCover from "../images/candid-cover.jpg"
import candid1 from "../images/candid1.jpg"
import candid2 from "../images/candid2.jpg"
import candid3 from "../images/candid3.jpg"
import candid4 from "../images/candid4.jpg"
import candid5 from "../images/candid5.jpg"
import candid6 from "../images/candid6.jpg"
import candid7 from "../images/candid7.jpg"
import candid8 from "../images/candid8.jpg"

const categories = [
  {
    name: "Wedding",
    // cover: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700"
    cover: weddingcover
  },
  {
    name: "Reception",
    cover: RecepCover
  },
  {
    name: "Pre-Wedding",
    cover: PrewedCover
  },
  {
    name: "Candid",
    cover: candidCover
  }
];

const photos = [
  // Wedding Photos
  {
    // image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
    image: wedding1,
    category: "Wedding"
  },
  {
    image: wedding2,
    category: "Wedding"
  },
  {
    image: wedding3,
    category: "Wedding"
  },
  {
    image: wedding4,
    category: "Wedding"
  },
  {
    image: wedding5,
    category: "Wedding"
  },
   {
    image: wedding6,
    category: "Wedding"
  },

  // Reception Photos
  {
    image: Recep1,
    category: "Reception"
  },
  {
    image: Recep2,
    category: "Reception"
  },
  {
    image: Recep3,
    category: "Reception"
  },
  {
    image: Recep4,
    category: "Reception"
  },
  {
    image: Recep5,
    category: "Reception"
  },
  {
    image: Recep6,
    category: "Reception"
  },

  // Pre-Wedding Photos
  {
    image: prewed1,
    category: "Pre-Wedding"
  },
  {
    image: prewed2,
    category: "Pre-Wedding"
  },
  {
    image: prewed3,
    category: "Pre-Wedding"
  },
  {
    image: prewed4,
    category: "Pre-Wedding"
  },
  {
    image: prewed5,
    category: "Pre-Wedding"
  },
  {
    image: prewed6,
    category: "Pre-Wedding"
  },

  // Candid Photos
  {
    image: candid1,
    category: "Candid"
  },
  {
    image: candid2,
    category: "Candid"
  },
  {
    image: candid3,
    category: "Candid"
  },
  {
    image: candid4,
    category: "Candid"
  },
  {
    image: candid5,
    category: "Candid"
  },
  
  {
    image: candid6,
    category: "Candid"
  },

  
  {
    image: candid7,
    category: "Candid"
  },
  
  {
    image: candid8,
    category: "Candid"
  },
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
