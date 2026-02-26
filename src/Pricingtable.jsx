import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import "./Travel.css"; 

const Pricingtable = () => {
  const pricingPlans = [
    { title: "Basic Plan", price: 10, features: ["5 Travel Bookings", "Basic Support", "1 Destination Guide"] },
    { title: "Standard Plan", price: 25, features: ["10 Travel Bookings", "Priority Support", "5 Destination Guides"] },
    { title: "Premium Plan", price: 50, features: ["Unlimited Bookings", "24/7 Support", "Personalized Travel Assistant"] }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Our Pricing Plans</h1>
      <div className="pricing-container"> 
        {pricingPlans.map((plan, index) => (
          <Card key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricingtable;