"use client"; // Include this if you're using React hooks

import "./location.css"; // Import the custom CSS

export default function LocationPage() {
  const locations = [
    {
      city: "Karachi",
      details: [
        {
          address: "DHA - Phase 6 -Bukhari Commercial",
          contact: "0300-7881371",
          description:
            "Shop 6, Building 5-C, Street 16th Khayaban-e-Bukhari, Bukhari Commercial Area Phase 6 Defence Housing Authority, Karachi City",
        },
        {
          address: "Tipu Sultan , Block A",
          contact: "0343-2249763",
          description:
            "Shop # 4, Tipu Sultan Rd, Kathiawar Society, Block A, Karachi City",
        },
        {
          address: "Gulshan - Block 4",
          contact: "0345-4098383",
          description:
            "Near Regency Apartments, Gulshan-e-Iqbal, near Maskan Chowrangi, Karachi City",
        },
        {
          address: "North Nazimabad- Block H",
          contact: "0343-2249763",
          description:
            "Shahrah-e-Jahangir Rd, Sheikh Heights, North Nazimabad Town, Karachi City",
        },
        {
          address: "Shell Sunset Pump - DHA Phase 2 Ext",
          contact: "0300-0600159",
          description: "39-B, Sunset Blvd Road",
        },
        {
          address: "Dolmen Mall - Clifton",
          contact: "0345-5874767",
          description: "2nd Floor, Food Court",
        },
        {
          address: "Clifton - Block 7",
          contact: "0343 2249763",
          description: "DC 9/7 Clifton Road",
        },
      ],
    },
    {
      city: "Faisalabad",
      details: [
        {
          address: "Ice Cream Station Faisalabad",
          contact: "0301-1179158",
          description:
            "Lyallpur Galleria 3rd Floor Food Court Area",
        },
        {
          address: "Ice Cream Station West Canal",
          contact: "0301-1179158",
          description:
            "Faisal Town Near Khayyam Restaurant Faisalabad",
        },
        {
          address: "Ice Cream Station D-Ground",
          contact: "0301-1179158",
          description:
            "Chen One Road Near Shiblee College Faisalabad",
        },
      ],
    },
    {
      city: "Islamabad",
      details: [
        {
          address: "Ice Cream Station Islamabad - F 10",
          contact: "03011179158",
          description:
            "F10 Markaz Sermad Filling Station Total Parco",
        },
        {
          address: "Ice Cream Station Central Park",
          contact: "03011179158",
          description: "Central Park, DHA Phase-2, Islamabad",
        },
      ],
    },
    {
      city: "Lahore",
      details: [
        {
          address: "G1 Johar Town",
          contact: "03011179158",
          description: "Opposite Euro Store, Lahore",
        },
        {
          address: "Ice Cream Station DHA Phase 5",
          contact: "03011179158",
          description: "Penta Square Ground Floor, Lahore",
        },
        {
          address: "Shell Petrol Pump Askari 11",
          contact: "03011179158",
          description: "Sector B, Lahore",
        },
        {
          address: "Valencia",
          contact: "0300-0303013",
          description: "Plot 57, Block A",
        },
      ],
    },
    {
      city: "Rawalpindi",
      details: [
        {
          address: "Ice Cream Station Jinnah Park",
          contact: "0301-1179158",
          description: "Rawalpindi Near Parsley Restaurant",
        },
        {
          address: "Ice Cream Station Bahria PH7",
          contact: "0301-1179158",
          description: "Warraich Plaza Near Layers Bakers Rawalpindi",
        },
      ],
    },
    {
      city: "Peshawar",
      details: [
        {
          address: "Peshawar Rd - Westridge 1",
          contact: "0300-0600179",
          description: "Peshawar Rd, Westridge 1, Rawalpindi",
        },
      ],
    },
  ];

  return (
    <div className="location-page">
      {/* Hero Section */}
      <div
        className="hero-banner"
        style={{
          backgroundImage: "url('/locationimage1.jpg')", // Replace with your image path
        }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Find Us</h1>
          <p className="hero-description">
            Visit us at any of our locations across the country. We can’t wait to serve you our delicious ice cream!
          </p>
        </div>
      </div>

      {/* Locations Section */}
      <div className="locations-section">
        <div className="container">
          <h2 className="locations-header">Our Locations</h2>
          <div className="locations-list">
            {locations.map((location, index) => (
              <div key={index} className="location">
                <h3 className="location-city">{location.city}</h3>
                {location.details.map((detail, idx) => (
                  <div key={idx} className="location-detail">
                    <p className="location-address">{detail.address}</p>
                    <p className="location-description">{detail.description}</p>
                    <p className="location-contact">{detail.contact}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
