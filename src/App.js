import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExamSchedule from './components/ExamSchedule';
import SubjectsBrief from './components/Bachelor of Arts (Honors Economics)/Semester - III - Eco - Honour/Subjects_Brief';
import EconomicHistory from './components/Bachelor of Arts (Honors Economics)/Semester - III - Eco - Honour/Economic History of India 1857-1947';
import { examData } from './data/examData';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
              <ExamSchedule examData={examData} />
              <SubjectsBrief />
            </>
          } />
          <Route path="/subjects/economic-history" element={<EconomicHistory />} />
          {/* Add other subject routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; 