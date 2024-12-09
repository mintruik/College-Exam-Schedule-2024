import React from 'react';
import ExamCard from '../ExamCard';
import './styles.css';

const ExamList = ({ exams }) => (
  <div className="results">
    {exams.length === 0 ? (
      <div className="no-results">
        <p>No exams found matching your search criteria.</p>
      </div>
    ) : (
      exams.map((exam, index) => (
        <ExamCard key={`${exam.PaperId}-${index}`} exam={exam} />
      ))
    )}
  </div>
);

export default ExamList; 