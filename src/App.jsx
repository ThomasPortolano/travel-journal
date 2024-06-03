import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import Data from "./data.js";

export default function App() {
  const cardArray = Data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div>
      <Navbar />
      <div className="card-list">{cardArray}</div>
    </div>
  );
}
