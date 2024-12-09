import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import rough from 'roughjs';
import './index.css';

const SubjectsBrief = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && containerRef.current) {
      const rc = rough.canvas(canvasRef.current);
      const container = containerRef.current;
      
      canvasRef.current.width = container.offsetWidth;
      canvasRef.current.height = container.offsetHeight;
      
      // Draw decorative frame
      rc.rectangle(10, 10, container.offsetWidth - 20, container.offsetHeight - 20, {
        stroke: '#4CAF50',
        strokeWidth: 2,
        roughness: 1.5,
        fill: 'rgba(76, 175, 80, 0.02)'
      });

      // Draw table decoration
      const tableTop = 150;
      rc.line(40, tableTop, container.offsetWidth - 40, tableTop, {
        stroke: '#4CAF50',
        strokeWidth: 2,
        roughness: 1
      });
    }
  }, []);

  const subjects = [
    {
      code: "III.1",
      name: "Economic History of India 1857-1947",
      theory: 80,
      internal: 20,
      total: 100,
      path: "/subjects/economic-history"
    },
    {
      code: "III.2",
      name: "Macro Economics-I",
      theory: 80,
      internal: 20,
      total: 100,
      path: "/subjects/macro-economics"
    },
    {
      code: "III.3",
      name: "Development Economics – I",
      theory: 80,
      internal: 20,
      total: 100,
      path: "/subjects/development-economics"
    },
    {
      code: "III.4",
      name: "Welfare Economics-I",
      theory: 80,
      internal: 20,
      total: 100,
      path: "/subjects/welfare-economics"
    },
    {
      code: "III.5",
      name: "Statistics for Economic Analysis-I",
      theory: 80,
      internal: 20,
      total: 100,
      path: "/subjects/statistics-analysis"
    }
  ];

  const handleSubjectClick = (path) => {
    navigate(path);
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
              {subjects.map((subject) => (
                <tr 
                  key={subject.code} 
                  onClick={() => handleSubjectClick(subject.path)}
                  className="subject-row"
                >
                  <td>{subject.code}</td>
                  <td>{subject.name}</td>
                  <td>{subject.theory}</td>
                  <td>{subject.internal}</td>
                  <td>{subject.total}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan="4">Total</td>
                <td>500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="semester-total">Total of I, II & III Semester = 1500</p>
      </div>
    </div>
  );
};

export default SubjectsBrief;
