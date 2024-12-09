import React from 'react';
import './index.css';

const StatisticsEconomics = () => {
  return (
    <div className="subject-content">
      <h2>STATISTICS FOR ECONOMIC ANALYSIS-I</h2>
      
      <div className="course-info">
        <p><strong>Max Marks:</strong> 100</p>
        <p><strong>Time:</strong> 3 Hrs.</p>
        <p><strong>Written Exam:</strong> 80</p>
        <p><strong>Internal Assessment:</strong> 20</p>
      </div>

      <div className="units">
        <div className="unit">
          <h3>Unit-I</h3>
          <p>Introduction : Basic concepts: Population, Sample, Parameter, Statistic, frequency distribution, Cumulative frequency distribution; Graphic and diagrammatic representation of data; Techniques of data collection: Census and Sampling method : Sampling and Non-Sampling Errors,Primary and secondary data.</p>
        </div>

        <div className="unit">
          <h3>Unit-II</h3>
          <p>Measures of Central Tendency: A.M., G.M., H.M., Median, Quartiles, Deciles, Percentiles, Mode</p>
        </div>

        <div className="unit">
          <h3>Unit-III</h3>
          <p>Measures of dispersion: range, inter-quartile range, quartile deviation, mean deviation, variance, standard deviation; Lorenz curve, skewness and Kurtosis, moments</p>
        </div>

        <div className="unit">
          <h3>Unit-IV</h3>
          <p>Index numbers : Concept, price relative, quantity relative and value relative, Laspeyer's, Paasche's and Fisher's index numbers; Family budget method; Problems in the construction and Limitations of index numbers; Tests of an ideal index number. Chain indices or Chain base Index Numbers. Base Shifting, and Deflating of Index Numbers .Cost of Living Index Numbers.</p>
        </div>

        <div className="exam-pattern">
          <h3>Note:</h3>
          <p>(A) Nine questions would be set in all.</p>
          <p>(B) Question No. 1 based on the entire syllabus, would be compulsory. It would contain eight short answer questions of two marks each.</p>
          <p>(C) There would be two questions (16 marks each) from each of four units.</p>
          <p>(D) Candidates would be required to attend five questions ( on compulsory and selecting one from each unit.</p>
        </div>

        <div className="readings">
          <h3>Reading List:</h3>
          <ul>
            <li>Gupta S.C. "Fundamentals of Statistics" S. Chand & Sons New Delhi (1993)</li>
            <li>Spiegel, Murry R "Theory and problems of Statistics" (Schaum's outline series, McGraw Hill,1992)</li>
            <li>Karmal P.H. and Polasek M. "Applied Statistics for Economists (4<sup>th</sup> edition), Pitman, Australia.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatisticsEconomics;
