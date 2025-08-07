import React from 'react';
import SkillCard from '../components/SkillCard';
import './SkillSection.scss';

const SkillSection = () => {
  const skills = [
    {
      title: 'UX Design',
      description:
        'UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.',
      percentage: 90,
    },
    {
      title: 'UI Design',
      description:
        'UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.',
      percentage: 100,
    },
    {
      title: 'UX Design',
      description:
        'UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.',
      percentage: 85,
    },
    {
      title: 'UX Design',
      description:
        'UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.',
      percentage: 97,
    },
  ];

  return (
    <section className="skills">
      <h2 className="skills__title">SKILLS</h2>
      <div className="skills__grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>

      {/* Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5f6d" />
            <stop offset="100%" stopColor="#ffc371" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default SkillSection;
