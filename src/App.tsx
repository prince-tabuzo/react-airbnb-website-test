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
      </div>
    </div>
  );
}

export default App;
