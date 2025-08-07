import React from 'react';
import './PortfolioSection.scss';
import PortfolioCard from '../components/PortfolioCard';

const sampleTags = ['UX Design', 'Angular', 'JavaScript'];

const PortfolioSection = () => {
  const items = new Array(8).fill({
    image: '/images/cardbanner.jpg',
    title: 'Chaintech Product',
    tags: sampleTags,
  });

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">PORTFOLIO</h2>
      <div className="portfolio__grid">
        {items.map((item, index) => (
          <PortfolioCard
            key={index}
            image={item.image}
            title={item.title}
            tags={item.tags}
            buttonStyle={index === 0 ? 'outline' : 'default'}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
