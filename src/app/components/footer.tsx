// components/Footer.tsx

import React from 'react';
import './footer.css'; // Import the CSS file
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2>Stay Connected</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/location">Our Location</Link>
          </li>
          <li>
            <Link href="/product">Products</Link>
          </li>
          <li>
            <Link href="/information">Information</Link>
          </li>
        </ul>
        <div>
          <h3>Contact Us</h3>
          <p>Email: contact@icecreamstation.com</p>
          <p>Phone: (0300) 1234567</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Ice Cream Station. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;