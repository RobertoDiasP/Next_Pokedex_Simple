"use client";

import { useState } from 'react';
import PokemonList from './components/pokemonlist';
import SearchBar from './components/seachBar';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Pokedex</h1>
      
      {/* Campo de pesquisa */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <PokemonList searchTerm={searchTerm} />
    </div>
  );
}
