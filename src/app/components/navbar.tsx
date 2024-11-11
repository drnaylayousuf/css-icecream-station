
"use client";

// navbar.tsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';  // Import the custom CSS file

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-left">
                    <Image
                        src="/navbarimage.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="navbar-logo"
                    />
                    <span className="navbar-title">Ice Cream Station</span>
                </div>

                <div className="hamburger-container">
                    <button onClick={() => setIsOpen(!isOpen)} className="hamburger-button">
                        <div className={`hamburger-line ${isOpen ? 'line-1-open' : ''}`}></div>
                        <div className={`hamburger-line ${isOpen ? 'line-2-open' : ''}`}></div>
                        <div className={`hamburger-line ${isOpen ? 'line-3-open' : ''}`}></div>
                    </button>
                </div>

                <div className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}>
                    <Link href="/" className="navbar-link">Home</Link>
                    <Link href="/product" className="navbar-link">Product</Link>
                    <Link href="/location" className="navbar-link">Our Location</Link>
                </div>
            </nav>
        </div>
    );
}
