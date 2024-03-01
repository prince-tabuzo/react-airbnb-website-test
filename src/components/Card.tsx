import "./Card.css";
import React from "react";

interface props {
  img: string;
  title: string;
  rating: number;
  rating_num: number;
  location: string;
  price: number;
  slots: number;
}

function Card({
  img,
  title,
  rating,
  rating_num,
  location,
  price,
  slots,
}: props) {
  let badgeText;
  if (slots === 0) {
    badgeText = "Sold Out";
  } else if (location === "Online") {
    badgeText = "Online";
  } else {
    badgeText = location;
  }
  return (
    <div className="card">
      <div className="card-div-state">
        <p className="card-state">{badgeText}</p>
      </div>
      <img
        alt="Card content image."
        className="card-content-image"
        src={`src/assets/${img}`}
      ></img>
      <div className="card-div-rating">
        <img
          alt="Star icaon."
          className="card-star"
          src="src/assets/card_star.png"
        ></img>
        <p className="card-rating-1">{rating}</p>
        <p className="card-rating-2">
          ({rating_num})●{location}
        </p>
      </div>
      <div className="card-div-title">
        <h2 className="card-content-title">{title}</h2>
      </div>
      <div className="card-div-price">
        <p className="card-price-1">From ${price}</p>
        <p className="card-price-2">/</p>
        <p className="card-price-2">person</p>
      </div>
    </div>
  );
}

export default Card;
