"use client"; // Include this if you're using React hooks
import Image from "next/image";
import "./product.css"; // Import the custom CSS

export default function ProductPage() {
  return (
    <div className="product-page">
      {/* First Background Section */}
      <div
        className="hero-banner"
        style={{
          backgroundImage: "url('/product1bg.jpg')", // Replace with your image path
        }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Our Best Ice Cream</h1>
          <p className="hero-description">
            Indulge in our delicious and creamy ice creams, crafted with the finest ingredients. 
            Whether you prefer classic flavors like vanilla and chocolate or adventurous options like 
            mango chili and lavender, we have something to satisfy every craving. 
            Come and experience the delightful world of ice cream like never before!
          </p>
        </div>
      </div>

      {/* Second Background Section with Ice Cream Cards */}
      <div
        className="flavor-section"
        style={{
          backgroundImage: "url('/productbg2.webp')", // Replace with your new image path
        }}
      >
        <div className="container">
          <h2 className="section-title">Ice Cream Flavors</h2>
          <div className="flavor-grid">
            {/* Sample ice cream products */}
            {[
              { name: "Vanilla", image: "/card1.jpg" },
              { name: "Chocolate", image: "/card2.jpg" },
              { name: "Mango Chili", image: "/card3.jpg" },
              { name: "Lavender", image: "/card4.jpg" },
              { name: "Strawberry", image: "/card5.png" },
              { name: "Pistachio", image: "/card6.png" },
              { name: "Cookies & Cream", image: "/card7.jpg" },
              { name: "Mint Chocolate Chip", image: "/card8.jpeg" },
              { name: "Coffee", image: "/card9.jpg" },
              { name: "Caramel Swirl", image: "/card10.jpg" },
              { name: "Peanut Butter Cup", image: "/card11.jpeg" },
              { name: "Rocky Road", image: "/card12.webp" },
              { name: "Matcha", image: "/card13.jpg" },
              { name: "Mango Sorbet", image: "/card14.jpg" },
            ].map((iceCream, index) => (
              <div key={index} className="flavor-card">
                <Image
                  src={iceCream.image} // Replace with your ice cream images
                  alt={iceCream.name}
                  width={300}
                  height={200}
                  className="card-image"
                />
                <div className="card-info">
                  <span className="card-title">{iceCream.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
