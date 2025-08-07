import React from 'react';
import './StatsSection.scss';

const stats = [
  {
    number: '90%',
    description: 'Job Success\nScore on Upwork',
  },
  {
    number: '>25.000',
    description: 'Duplicates on Figma\nCommunity',
  },
  {
    number: '>2K',
    description: 'In Finished\nWorks',
  },
];

const StatsSection = () => {
  return (
    <section className="stats">
      <div className="stats__container">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="stats__item">
              <h2>{stat.number}</h2>
              <p>{stat.description}</p>
            </div>
            {index !== stats.length - 1 && (
              <div className="stats__separator">
                <span className="spark">✺</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
