import "./Card.css";
import React from "react";

interface props {
  state: string;
  img: string;
  title: string;
  rating: number;
  rating_num: number;
  price: number;
}

function Card({ state, img, title, rating, rating_num, price }: props) {
  return (
    <div className="card">
      <div className="card-div-state">
        <p className="card-state">{state}</p>
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
        <p className="card-rating-2">({rating_num})●USA</p>
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
