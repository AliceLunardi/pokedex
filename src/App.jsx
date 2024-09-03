import React, { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import Modal from './components/Modal';
import SearchBox from './components/SearchBox';
import logo from './assets/logo.png';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');
      const data = await response.json();

      const allPokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      setPokemons(allPokemonDetails);
    }

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pokemon.id.toString() === searchTerm
  );

  return (
    <div className="app-container">
      <div><img src={logo} alt="Pokédex" className="logo"></img></div>
      <SearchBox setSearchTerm={setSearchTerm} />
      <div className="pokemon-grid">
        {filteredPokemons.map(pokemon => (
          <PokemonCard 
            key={pokemon.id} 
            pokemon={pokemon}
            onClick={() => setSelectedPokemon(pokemon)} 
          />
        ))}
      </div>

      {selectedPokemon && (
        <Modal 
          pokemon={selectedPokemon} 
          onClose={() => setSelectedPokemon(null)} 
        />
      )}
    </div>
  );
}

export default App;
