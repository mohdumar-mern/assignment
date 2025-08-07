import './SkillCard.scss';

const SkillCard = ({ title, description, percentage }) => {
  return (
    <div className="skill-card">
      <div className="skill-card__circle">
        <svg>
          <circle cx="50%" cy="50%" r="45"></circle>
          <circle
            cx="50%"
            cy="50%"
            r="45"
            style={{ strokeDashoffset: `calc(282.6 - (282.6 * ${percentage}) / 100)` }}
          ></circle>
        </svg>
        <span>{percentage}%</span>
      </div>
      <div className="skill-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
