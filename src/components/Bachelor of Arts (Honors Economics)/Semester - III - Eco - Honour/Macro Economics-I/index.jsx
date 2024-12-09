import React from 'react';
import './index.css';

const MacroEconomics = () => {
  return (
    <div className="course-container">
      <h1>III.2 - MACRO ECONOMICS - I</h1>

      <div className="course-meta">
        <div>Max. Marks: 100</div>
        <div>Time: 3 Hrs.</div>
        <div>Written Exam: 80</div>
        <div>Internal Assessment: 20</div>
      </div>

      <section className="units">
        <div className="unit">
          <h2>Unit-I</h2>
          <div className="unit-content">
            <p><strong>Introduction:</strong> Nature and Scope of Macro Economics, Difference between Micro and Macro Economics and Importance of Macro Economics.</p>
            <p><strong>National Income:</strong> Concepts, Measurement and limitations of National Income Statistics, Circular flow of income in two, three and four sector economy.</p>
          </div>
        </div>

        <div className="unit">
          <h2>Unit-II</h2>
          <div className="unit-content">
            <p><strong>Determination of Income and Employment:</strong> Classical theory of Income and Employment determination, Keynes objections to Classical Theory, Keynesian Theory of Income and Employment determination.</p>
          </div>
        </div>

        <div className="unit">
          <h2>Unit-III</h2>
          <div className="unit-content">
            <p><strong>Consumption:</strong> Consumption Function, Technical Attributes of Consumption, Keynesian Psychological Law of consumption and its Implications.</p>
            <p><strong>Income – Consumption Relationship:</strong> Absolute and Relative Income Hypothesis and Permanent Income Hypothesis.</p>
          </div>
        </div>

        <div className="unit">
          <h2>Unit-IV</h2>
          <div className="unit-content">
            <p><strong>Investment Function:</strong> Types of Investment, Determination of level of Investment, Marginal Efficiency of Capital (MEC).</p>
            <p><strong>Theories of Investment:</strong> Classical and Keynesian Theory of Investment (Marginal Efficiency of Investment), Saving - Investment Equality.</p>
          </div>
        </div>
      </section>

      <section className="note-section">
        <h3>Note:</h3>
        <ul>
          <li>(A) Nine questions would be set in all.</li>
          <li>(B) Question No. 1 based on the entire syllabus, would be compulsory. It would contain eight short answer questions of two marks each.</li>
          <li>(C) There would be two questions (16 marks each) from each of four units.</li>
          <li>(D) Candidates would be required to attend five questions (one compulsory and selecting one from each unit).</li>
        </ul>
      </section>

      <section className="readings">
        <h3>Suggested Readings:</h3>
        <ul>
          <li>Lipsey R.G. and K.A. Christal (1999) "Principles of Economics" 9<sup>th</sup> Ed., Oxford University Press.</li>
          <li>Ackley, G (1978), "Macroeconomics: Theory and Policy", Macmillan, New York.</li>
          <li>Branson, W. A. (1989), "Macroeconomics: Theory and Policy," 3<sup>rd</sup> ed. Harper and Harper and Row, New York.</li>
          <li>Shapiro, E (1996), "Macroeconomics: Analysis" Galgotia Publication, New Delhi.</li>
          <li>Stiglitz J. E. and Carl E. Walsh (2002), Principles of Macroeconomics, W.W. Norton and Company, New York.</li>
          <li>Paul Samuelson and Nordhaus: (2005) "Economics" (18<sup>th</sup> Ed.) Tata Hill Publishing Company, New York.</li>
          <li>Mankiw N. Gregory: (2007) "Principles of Economics," Thomson, Indian Reprint.</li>
          <li>Lipsey R.G. and K.A. Chrystal (2007) "Economics", Oxford University Press, Oxford.</li>
        </ul>
      </section>
    </div>
  );
};

export default MacroEconomics;

