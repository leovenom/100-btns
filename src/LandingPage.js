import "./App.css";
import React from "react";
import BrandButton from "./Button";
import { brands } from "./Brands";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="brand-buttons-container">
        {brands.map((brand, index) => (
          <BrandButton key={index} brand={brand.name} link={brand.link} />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
