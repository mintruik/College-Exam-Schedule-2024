import React from 'react';
import './styles.css';

const Filters = ({ 
  sessionFilter, 
  setSessionFilter, 
  semesterFilter, 
  setSemesterFilter, 
  searchType,
  resetFilters 
}) => {
  return (
    <div className="filters">
      <div className="filter-group">
        <label>Session:</label>
        <select 
          value={sessionFilter}
          onChange={(e) => setSessionFilter(e.target.value)}
        >
          <option value="all">All Sessions</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>
      </div>
      
      {searchType === 'programme' && (
        <div className="filter-group" id="programSemFilter">
          <label>Semester:</label>
          <select 
            value={semesterFilter}
            onChange={(e) => setSemesterFilter(e.target.value)}
          >
            <option value="all">All Semesters</option>
            <option value="Semester 3">Semester 3</option>
            <option value="Semester 5">Semester 5</option>
          </select>
        </div>
      )}
      
      <button onClick={resetFilters} className="reset-btn">
        Reset All
      </button>
    </div>
  );
};

export default Filters; 