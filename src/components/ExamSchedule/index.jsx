import React, { useState, useEffect } from 'react';
import Header from '../Header';
import SearchBar from '../SearchBar';
import Filters from '../Filters';
import ExamList from '../ExamList';
import './styles.css';

const ExamSchedule = ({ examData }) => {
  const [searchType, setSearchType] = useState('programme');
  const [searchValue, setSearchValue] = useState('');
  const [sessionFilter, setSessionFilter] = useState('all');
  const [semesterFilter, setSemesterFilter] = useState('all');
  const [filteredExams, setFilteredExams] = useState(examData);

  useEffect(() => {
    filterExams();
  }, [searchType, searchValue, sessionFilter, semesterFilter]);

  const filterExams = () => {
    let filtered = examData.filter(exam => {
      const sessionMatch = sessionFilter === 'all' || exam.Session === sessionFilter;
      let searchMatch = false;
      let semesterMatch = true;

      if (searchType === 'subject') {
        searchMatch = exam.Subject.toLowerCase().includes(searchValue.toLowerCase());
      } else if (searchType === 'programme') {
        searchMatch = exam.Programme.toLowerCase().includes(searchValue.toLowerCase());
        if (semesterFilter !== 'all') {
          semesterMatch = exam.Sem.toString() === semesterFilter;
        }
      } else if (searchType === 'sem') {
        searchMatch = exam.Sem.toString().toLowerCase().includes(searchValue.toLowerCase());
      }

      return searchMatch && sessionMatch && semesterMatch;
    });

    // Remove duplicates
    filtered = filtered.reduce((acc, current) => {
      const isDuplicate = acc.find(item => item.PaperId === current.PaperId);
      if (!isDuplicate) {
        acc.push(current);
      }
      return acc;
    }, []);

    setFilteredExams(filtered);
  };

  const resetFilters = () => {
    setSearchType('programme');
    setSearchValue('');
    setSessionFilter('all');
    setSemesterFilter('all');
  };

  return (
    <div>
      <Header />
      <SearchBar 
        searchType={searchType}
        setSearchType={setSearchType}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        examData={examData}
      />
      <Filters 
        sessionFilter={sessionFilter}
        setSessionFilter={setSessionFilter}
        semesterFilter={semesterFilter}
        setSemesterFilter={setSemesterFilter}
        searchType={searchType}
        resetFilters={resetFilters}
      />
      <ExamList exams={filteredExams} />
    </div>
  );
};

export default ExamSchedule; 