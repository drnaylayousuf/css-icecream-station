// page.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import './styles.css';  // Import the CSS file for styles
import Image from "next/image";

export default function Homepage() {
  // Array of images for the carousel
  const images = [
    "/homeimage1.jpg", // Replace with your image paths
    "/homeimage2.webp",
    "/homeimage3.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  // Carousel effect to change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const currentIndex = images.indexOf(prev);
        return images[(currentIndex + 1) % images.length];
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="homepage-container">
      {/* Carousel Section */}
      <div className="carousel-container" style={{ backgroundImage: `url(${currentImage})` }}>
        <div className="overlay">
          {/* Heading */}
          <h1 className="heading">
            Welcome to Ice Cream Station
          </h1>

          {/* Button to navigate to product page */}
          <Link href="/product">
            <button className="order-btn">
              <span>🛒</span>
              <span className="btn-text">
                Order Now
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* New Arrival Section with Background Image */}
      <div className="new-arrival-section" style={{ backgroundImage: `url('/arrivalbgimage.jpg')` }}>
        {/* Left Side: New Arrivals Heading and Flavors */}
        <div className="new-arrival-left">
          <h2 className="new-arrival-heading">
            New Arrivals
          </h2>
          <ul className="new-arrival-list">
            <li className="new-arrival-item">🍦 Mango Delight</li>
            <li className="new-arrival-item">🍦 Raspberry Ripple</li>
            <li className="new-arrival-item">🍦 Chocolate Fudge</li>
            <li className="new-arrival-item">🍦 Caramel Swirl</li>
            <li className="new-arrival-item">🍦 Minty Fresh</li>
          </ul>
        </div>

        {/* Right Side: Image of New Arrival */}
        <div className="new-arrival-right">
          <Image
            src="/arrivalimage.jpg" // Replace with your image path
            alt="New Arrival Ice Cream"
            className="new-arrival-image"
            width={500} height={33}
          />
        </div>
      </div>
    </div>
  );
}
