import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
export function PokeList() {
  const [allPokemons, setAllPokemons] = useState([]);
  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
    );
    const data = await res.json();
    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        allPokemons.sort((a, b) => {
          a.id - b.id;
        });
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id.toString().padStart(3, "0")}
              name={pokemon.name}
              image={pokemon.sprites.other["official-artwork"].front_default}
              type={pokemon.types[0].type.name}
              weight={pokemon.weight}
              height={pokemon.height}
              stats={pokemon.stats.map((stat)=> stat.base_stat).slice(0,3)}
              statsName={pokemon.stats.map((stat)=>stat.stat.name).slice(0,3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
