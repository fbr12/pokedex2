import "./App.css";
import { Card } from "./Components/Card/Card";
import { Nav } from "./Components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="pokemon">
        <Card />
      </div>
    </>
  );
}

export default App;
