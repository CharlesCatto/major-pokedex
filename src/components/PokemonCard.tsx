function PokemonCard() {
  const pokemon = pokemonList[0].imgSrc ? (
    <img src={pokemonList[0].imgSrc} alt={pokemonList[0].name} />
  ) : (
    <p>???</p>
  );

  return (
    <figure>
      {pokemon}
      <figcaption>{pokemonList[0].name}</figcaption>
    </figure>
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

export default PokemonCard;
