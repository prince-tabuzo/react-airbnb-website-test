import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";

//

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <div className="card-div">
        <div>
          <Card
            state="SOLD OUT"
            img="src/assets/card_content_image_1.png"
            title="Life lessons with Katie Zaferes"
            rating="5.0"
            rating_num="6"
            price="136"
          />
        </div>
        <div>
          <Card
            state="AVAILABLE"
            img="src/assets/card_content_image_2.png"
            title="Learn wedding photography"
            rating="5.0"
            rating_num="30"
            price="125"
          />
        </div>
        <div>
          <Card
            state="SOLD OUT"
            img="src/assets/card_content_image_3.png"
            title="Creative Cooking"
            rating="4.7"
            rating_num="26"
            price="140"
          />
        </div>
        <div>
          <Card
            state="AVAILABLE"
            img="src/assets/card_content_image_4.png"
            title="Mastering Meditation"
            rating="4.5"
            rating_num="12"
            price="175"
          />
        </div>
        <div>
          <Card
            state="SOLD OUT"
            img="src/assets/card_content_image_5.png"
            title="Gardening Guidance"
            rating="4.3"
            rating_num="23"
            price="100"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
