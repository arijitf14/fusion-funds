import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import SearchIcon from "@assets/svg/search.svg?react"; // Assuming you're using an SVG as a React component

type SearchProps = {
  onSearch?: (query: string) => void;
};

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // onSearch(searchQuery); // Call the onSearch prop to pass the query
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      {/* Container for the whole search bar */}
      <div
        style={{
          backgroundColor: '#F0F0F0',
          borderRadius: 8,
          display: 'flex',
          borderWidth: 1,
          alignItems: 'center',
          padding: '0 10px', // Padding for the whole container
          width: 400,
          height: 45,
          boxSizing: 'border-box', // Ensures padding doesn't affect overall size
        }}
      >
        {/* Icon on the left inside the input */}
        <SearchIcon style={{ width: '20px', height: '20px', marginRight: '10px' }} />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by Transaction ID"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            backgroundColor: 'transparent', // Make input background transparent to match container
            width: '100%',
            height: '100%',
            border: 'none', // Remove input border
            outline: 'none', // Remove focus outline
            fontSize: '16px',
            // paddingLeft: '10px', // Space for the icon
            borderRadius: '8px', // Match container radius
          }}
        />
      </div>
    </form>
  );
};

export default Search;
