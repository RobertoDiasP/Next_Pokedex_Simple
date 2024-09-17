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
    <div>
      <ul className="list-none mx-auto max-w-md">
        {filteredPokemon.map((poke, index) => (
          <li key={index} className="text-lg text-gray-800 capitalize">
            {poke.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
