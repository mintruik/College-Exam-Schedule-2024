import React from 'react';
import './styles.css';

const SearchBar = ({ searchType, setSearchType, searchValue, setSearchValue, examData }) => {
  const getSearchSuggestions = () => {
    const values = examData.map(exam => exam[searchType.charAt(0).toUpperCase() + searchType.slice(1)]);
    return [...new Set(values)];
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <select 
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="subject">Search by Subject</option>
          <option value="programme">Search by Programme</option>
          <option value="sem">Search by Semester</option>
        </select>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Enter your search..."
          list="searchSuggestions"
        />
        <datalist id="searchSuggestions">
          {getSearchSuggestions().map((suggestion, index) => (
            <option key={index} value={suggestion} />
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default SearchBar;