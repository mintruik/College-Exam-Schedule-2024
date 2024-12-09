import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const EconomicHistory = () => {
  const navigate = useNavigate();

  const suggestedReadings = [
    {
      author: "G. Kaushal",
      title: "Economic History of India- 1757 to 1966",
      publisher: "Kalyani Publishers, New Delhi"
    },
    {
      author: "V.B Singh (ed.)",
      title: "Economic History of India 1857-1956",
      publisher: "Allied Publications Private Limited, Bombay"
    }
  ];

  const units = [
    {
      title: "UNIT – I",
      content: "Why study economic history, the problems in interpreting India's past, the state of the Indian Economy on the eve of independence, Indian Economy in the mid-nineteenth century, growth of the empire and systems of administration in the Colonial India."
    },
    {
      title: "UNIT – II",
      content: "Transformation of the traditional village – economy during the British rule, Commercialization of agriculture – its causes and consequences, Emergence of agricultural labour as a category, movement of agricultural wages and prices during the period – problems of rural indebtedness."
    },
    {
      title: "UNIT – III",
      content: "The state of industrial development in mid-nineteenth century India, the de-industrialization thesis – its statement and validity, emergence of modern capitalist industrial enterprise in India – Textile (Jute and Cotton), Iron & Steel, Cement, Coal, Tea."
    },
    {
      title: "UNIT – IV",
      content: "Foreign capital in Colonial India – its extent and impact, foreign-trade-growth andcomposition; 'guided under-development' of India under the British rule; evolution of provincial finance, the nature and problem of public debt – drain from India – form, extent and consequences."
    }
  ];

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="course-container">
      <button onClick={handleBack} className="back-button">
        ← Back to Subjects
      </button>
      <header className="course-header">
        <h1>III.1 ECONOMIC HISTORY OF INDIA: 1857 – 1947</h1>
        <div className="course-meta">
          <div className="meta-item">
            <span>Max. Marks:</span>
            <span>100</span>
          </div>
          <div className="meta-item">
            <span>Time:</span>
            <span>3 Hrs.</span>
          </div>
          <div className="meta-item">
            <span>Written Exam:</span>
            <span>80</span>
          </div>
          <div className="meta-item">
            <span>Internal Assessment:</span>
            <span>20</span>
          </div>
        </div>
      </header>

      <section className="course-content">
        <div className="units">
          {units.map((unit, index) => (
            <div key={index} className="unit">
              <h2>{unit.title}</h2>
              <p>{unit.content}</p>
            </div>
          ))}
        </div>

        <div className="note-section">
          <h3>Note:</h3>
          <ul>
            <li>Nine questions would be set in all.</li>
            <li>Question No. 1 based on the entire syllabus, would be compulsory. It would contain eight short answer questions of two marks each.</li>
            <li>There would be two questions (16 marks each) from each of four units.</li>
            <li>Candidates would be required to attend five questions (one compulsory and selecting one from each unit).</li>
          </ul>
        </div>

        <div className="readings-section">
          <h3>Suggested Readings:</h3>
          <ul>
            {suggestedReadings.map((book, index) => (
              <li key={index}>
                <span className="author">{book.author}</span>
                <span className="separator">:</span>
                <span className="title">{book.title}</span>
                <span className="publisher">{book.publisher}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EconomicHistory;
