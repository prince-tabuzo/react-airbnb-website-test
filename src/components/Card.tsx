import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card-div-state">
        <p className="card-state">SOLD OUT</p>
      </div>
      <img
        className="card-content-image"
        src="src/assets/card_content_image_1.png"
      ></img>
      <div className="card-div-rating">
        <img className="card-star" src="src/assets/card_star.png"></img>
        <p className="card-rating-1">5.0</p>
        <p className="card-rating-2">(6)●USA</p>
      </div>
      <div className="card-div-title">
        <p className="card-content-title">Life lessons with Katie Zaferes</p>
      </div>
      <div className="card-div-price">
        <p className="card-price-1">From $136</p>
        <p className="card-price-2">/</p>
        <p className="card-price-2">person</p>
      </div>
    </div>
  );
}

export default Card;
