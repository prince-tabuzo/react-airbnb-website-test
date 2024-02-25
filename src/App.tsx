import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import CardData from "./components/CardData";

//

function App() {
  const cardElements = CardData.map((cardData) => {
    return (
      <Card
        state={cardData.state}
        img={cardData.img}
        title={cardData.title}
        rating={cardData.rating}
        rating_num={cardData.rating_num}
        price={cardData.price}
      />
    );
  });

  return (
    <div className="app">
      <Nav />
      <Hero />
      <div className="card-div">{cardElements}</div>
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
