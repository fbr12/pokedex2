import { createContext, useEffect, useState } from "react";

export const PokeContext = createContext();

export function PokeContextProvider({ children }) {
  const [data, setData] = useState([]);
  const pokemonApi = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  useEffect(() => {
    fetch(pokemonApi)
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);
  return <PokeContext.Provider value={data}>{children}</PokeContext.Provider>;
}
