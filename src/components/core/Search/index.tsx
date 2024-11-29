import { SearchIcon } from '@assets/svg';
import React, { useState, useEffect, useRef } from 'react';
import './search.css';

type SearchProps = {
  onSearch?: (query: string) => void;
};

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

 // Ref to keep track of the search input container
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // onSearch(searchQuery); // Call the onSearch prop to pass the query
  };

  const handleIconClick = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    // Add the event listener on mount
    document.addEventListener('mousedown', handleClickOutside);

   // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <form onSubmit={handleSearchSubmit}>
      {/* Container for the whole search bar */}
      <div
        ref={searchRef}
        className={`search-container d-flex align-items-center ${isExpanded ? 'expanded' : ''}`}
      >
        {/* Icon on the left inside the input */}
        <SearchIcon
          onClick={handleIconClick}
          className="search-icon"
        />
         {/* Search Input */}
        <input
          type="text"
          placeholder="Search by Transaction ID"
          value={searchQuery}
          onChange={handleSearchChange}
          className={`search-input ${isExpanded ? 'visible' : 'hidden'}`}
        />
      </div>
    </form>
  );
};

export default Search;
