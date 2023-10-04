import "./Home.css";
import { Card } from "../Card/Card";
import { Nav } from "../Nav/Nav";

function Home() {
  return (
    <>
      <Nav />
      <div className="pokemon">
        <Card />
      </div>
    </>
  );
}

export { Home };
