import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Pokemon } from "./Components/Pokemon/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon/:id" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
