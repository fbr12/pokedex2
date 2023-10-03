import { useState } from "react";
import "./Card.css";
import { useContext } from "react";
import { PokeContext } from "../../Context/PokeContext";

function Card() {
  const pokemonData = useContext(PokeContext);
  const [entryValue, setEntryValue] = useState("");
  console.log(pokemonData);

  function handleChange(e) {
    setEntryValue(e.target.value);
  }

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
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index +
                    1}.png`}
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
