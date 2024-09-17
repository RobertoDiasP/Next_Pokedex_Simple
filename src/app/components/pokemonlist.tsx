"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListProps {
  searchTerm: string;
}

export default function PokemonList({ searchTerm }: PokemonListProps) {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        setPokemon(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
      }
    };
    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-4 gap-4 justify-center">
      {filteredPokemon.map((poke, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md w-48 h-48 flex flex-col items-center justify-center"
        >
          <h2 className="text-lg text-gray-800 capitalize">{poke.name}</h2>
        </div>
      ))}
    </div>
  );
}
