import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
      <div>
        <button type="button" onClick={handleClickPrevious}>
          Précédent
        </button>
        <button type="button" onClick={handleClickNext}>
          Suivant
        </button>
      </div>
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "mew",
  },
];

export default App;
