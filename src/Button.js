import React from "react";

function formatBrandName(brandName) {
  return brandName
    .toLowerCase() // convert to lower case
    .replace(/'/g, "") // remove '
    .replace(/&/g, "e") // replace & with e
    .replace(/[^a-z0-9]/g, "-") // replace non-alphanumeric characters with hyphens
    .replace(/-+/g, "-") // replace consecutive hyphens with one
    .replace(/^-|-$/g, ""); // remove leading and trailing hyphens
}

function BrandButton({ brand, logo, link }) {
  return (
    <a
      className={`btn btn-${formatBrandName(brand)}`}
      href={link}
      role="button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="btn-content">
        <span className="btn-brand-text">{brand}</span>
        <img src={logo} className="btn-logo" alt={brand} />
      </div>
    </a>
  );
}

export default BrandButton;
