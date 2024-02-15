import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-div-image">
        <img className="hero-image" src="src/assets/hero_image.png"></img>
      </div>
      <div className="hero-div-paragraph">
        <h1 className="hero-header">Online Experiences</h1>
        <p className="hero-paragraph">
          Join unique interactive activities led by <br />
          one-of-a-kind hosts—all without leaving <br />
          home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
