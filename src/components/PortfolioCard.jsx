import React from 'react';
import './PortfolioCard.scss';
import Button from './Ui/Button/Button';

const PortfolioCard = ({ image, title, tags }) => {
    return (
        <div className="portfolio-card">
            <img src={image} alt={title} className="portfolio-card__image" />

            <h3 className="portfolio-card__title">{title}</h3>

            <div className="portfolio-card__tags">
                {tags.map((tag, i) => (
                    <span key={i} className="portfolio-card__tag">
                        {tag}
                    </span>
                ))}
            </div>

            <Button variant="secondary" size="auto" onClick={() => alert("Downloading CV...")}>
                View Product&nbsp;&nbsp;Detail
            </Button>
        </div>
    );
};

export default PortfolioCard;
