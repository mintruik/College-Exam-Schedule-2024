import React, { useState, useEffect, useRef } from 'react';
import rough from 'roughjs';
import EconomicHistory from '../Economic History of India 1857-1947';
import MacroEconomics from '../Macro Economics-I';
import DevelopmentEconomics_I from '../Development Economics - I_';
import WelfareEconomics from '../Welfare Economics-I';
import StatisticsEconomics from '../Statistics for Economic Analysis-I';
import './index.css';

const SubjectsBrief = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const handleSubjectClick = (code) => {
    if (code === 'III.1') {
      setSelectedSubject({
        code: "III.1",
        name: "Economic History of India 1857-1947",
        component: <EconomicHistory />
      });
    } else if (code === 'III.2') {
      setSelectedSubject({
        code: "III.2",
        name: "Macro Economics-I",
        component: <MacroEconomics />
      });
    } else if (code === 'III.3') {
      setSelectedSubject({
        code: "III.3",
        name: "Development Economics - I",
        component: <DevelopmentEconomics_I />
      });
    } else if (code === 'III.4') {
      setSelectedSubject({
        code: "III.4",
        name: "Welfare Economics-I",
        component: <WelfareEconomics />
      });
    } else if (code === 'III.5') {
      setSelectedSubject({
        code: "III.5",
        name: "Statistics for Economic Analysis-I",
        component: <StatisticsEconomics />
      });
    }
  };

  const handleCloseModal = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="subjects-brief-container" ref={containerRef}>
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="content-wrapper">
        <h2>Semester-III (2016-17)</h2>
        <div className="subjects-table">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Subject Name</th>
                <th>Theory</th>
                <th>Internal</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => handleSubjectClick('III.1')} className="subject-row">
                <td>III.1</td>
                <td>Economic History of India 1857-1947</td>
                <td>80</td>
                <td>20</td>
                <td>100</td>
              </tr>
              <tr onClick={() => handleSubjectClick('III.2')} className="subject-row">
                <td>III.2</td>
                <td>Macro Economics-I</td>
                <td>80</td>
                <td>20</td>
                <td>100</td>
              </tr>
              <tr onClick={() => handleSubjectClick('III.3')} className="subject-row">
                <td>III.3</td>
                <td>Development Economics – I</td>
                <td>80</td>
                <td>20</td>
                <td>100</td>
              </tr>
              <tr onClick={() => handleSubjectClick('III.4')} className="subject-row">
                <td>III.4</td>
                <td>Welfare Economics-I</td>
                <td>80</td>
                <td>20</td>
                <td>100</td>
              </tr>
              <tr onClick={() => handleSubjectClick('III.5')} className="subject-row">
                <td>III.5</td>
                <td>Statistics for Economic Analysis-I</td>
                <td>80</td>
                <td>20</td>
                <td>100</td>
              </tr>
              <tr className="total-row">
                <td colSpan="2">Total</td>
                <td>400</td>
                <td>100</td>
                <td>500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {selectedSubject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <div className="modal-body">
              {selectedSubject.component}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectsBrief;
