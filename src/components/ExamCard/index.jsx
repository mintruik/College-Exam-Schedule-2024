import React from 'react';
import './styles.css';

const ExamCard = ({ exam }) => (
  <div className="exam-card">
    <h3>{exam.Subject}</h3>
    <div className="exam-info">
      <p>
        <span>Programme:</span>
        <span>{exam.Programme}</span>
      </p>
      <p>
        <span>Semester:</span>
        <span>{exam.Sem}</span>
      </p>
      <p>
        <span>Date:</span>
        <span>{exam.Date}</span>
      </p>
      <p>
        <span>Session:</span>
        <span className={`session-tag session-${exam.Session.toLowerCase()}`}>
          {exam.Session}
        </span>
      </p>
      <p>
        <span>Paper ID:</span>
        <span>{exam.PaperId}</span>
      </p>
    </div>
  </div>
);

export default ExamCard;