import { SearchIcon } from '@assets/svg';
import React, { useState, useEffect, useRef } from 'react';
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
    setIsExpanded((prev) => !prev); // Toggle input expansion on icon click
  };

  // Handle clicks outside the search bar to close the search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false); // Close the search input if clicked outside
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
        ref={searchRef} // Reference to the search container
        style={{
          backgroundColor: '#F0F0F0',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          width: isExpanded ? 400 : 55, // Initially narrow, expands when clicked
          height: 45,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
          gap:isExpanded ? "10px" : "" // Smooth transition for container width
        }}
      >
        {/* Icon on the left inside the input */}
        <SearchIcon
          onClick={handleIconClick} // Click icon to toggle expansion
          style={{
            width: '35px',
            height: '35px',
            cursor: 'pointer',
            marginLeft: '4px',
          }}
        />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by Transaction ID"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            backgroundColor: 'transparent',
            width: isExpanded ? '100%' : 0, // Adjust input width based on state
            height: '100%',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            borderRadius: '8px',
            transition: 'width 0.3s ease', // Smooth transition for input width
          }}
        />
      </div>
    </form>
  );
};

export default Search;
