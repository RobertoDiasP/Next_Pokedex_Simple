interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
  }
  
  export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
    return (
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Pokémon"
          className="px-4 py-2 border text-gray-800 border-gray-800 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  }
  