import { useEffect, useState } from "react";
import "./Card.css";

function Card() {
  const [pokemonData, setPokemonData] = useState([]);
  const pokemonApi = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  const [entryValue, setEntryValue] = useState("");

  function handleChange(e) {
    setEntryValue(e.target.value);
  }

  useEffect(() => {
    fetch(pokemonApi)
      .then((response) => response.json())
      .then((data) => setPokemonData(data.results));
  });

  return (
    <>
      <div className="searchBar">
        <input
          className="search"
          type="text"
          placeholder="Search Pokemon"
          onChange={(event) => handleChange(event)}
        />
      </div>
      <section className="pokemons">
        {pokemonData.map((pokemon, index) => {
          if (pokemon.name.toLowerCase().includes(entryValue.toLowerCase())) {
            return (
              <div className="card" key={index}>
                <img
                  className="pokemonImg"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    index + 1
                  }.png`}
                  alt={pokemon.name}
                />
                <h2 className="pokemonName">{pokemon.name}</h2>
              </div>
            );
          }
        })}
      </section>
    </>
  );
}
export { Card };
