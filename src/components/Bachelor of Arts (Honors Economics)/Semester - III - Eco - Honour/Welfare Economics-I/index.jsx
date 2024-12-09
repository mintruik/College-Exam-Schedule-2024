import React from 'react';
import './index.css';

const WelfareEconomics = () => {
  return (
    <div className="subject-content">
      <h2>Welfare Economics-I</h2>
      
      <div className="course-info">
        <p><strong>Max Marks:</strong> 100</p>
        <p><strong>Time:</strong> 3 Hrs.</p>
        <p><strong>Written Exam:</strong> 80</p>
        <p><strong>Internal Assessment:</strong> 20</p>
      </div>

      <div className="units">
        <div className="unit">
          <h3>Unit-I</h3>
          <p>Benthamite Approach to Aggregate Welfare; Optimum Resource Allocation and Welfare Maximization.</p>
        </div>

        <div className="unit">
          <h3>Unit-II</h3>
          <p>Assumption of Uniform Income – Utility Function of Individuals; Questions of Income Distribution; Issue of Interpersonal Comparisons of Utility.</p>
        </div>

        <div className="unit">
          <h3>Unit-III</h3>
          <p>Marshallian Welfare Economics; Consumer's Surplus; Measurement of Consumer's Surplus - Difficulties involved; Criticism.</p>
        </div>

        <div className="unit">
          <h3>Unit-IV</h3>
          <p>Principle of Compensating Variation; Hicks's Surplus; Concept of Consumer's Surplus; Consumer's Surplus and Tax-Bounty Analysis</p>
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
            <li>Baumol, W.J. (ed.) (2001), Welfare Economics, Edward Elgar Publishing Ltd., U.K.</li>
            <li>Broadway, R.W. and N. Bruce (1984), Welfare Economics, Basil Blackwell, Oxford.</li>
            <li>Pigou, A.C. (1962), The Economics of Welfare(4thEdition), Macmillan.</li>
            <li>Hicks, J.R. (1939), A Classical in Economic Theory, Clarendon Press, Oxford.</li>
            <li>Little, I.M.D. (1946), The Foundations of Welfare Economics, Oxford Economic Papers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelfareEconomics;
