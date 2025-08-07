import React from 'react';
import './HeroSection.scss';
import SocialIcons from '../components/Ui/SocialIcons/SocialIcons';
import Button from './Ui/Button/Button';

const HeroSection = () => {
    const socialLinks = [
        { platform: "instagram", url: "https://instagram.com/yourprofile" },
        { platform: "figma", url: "https://figma.com/@yourprofile" },
        { platform: "linkedin", url: "https://linkedin.com/in/yourprofile" },
        { platform: "twitter", url: "https://twitter.com/yourhandle" },
        { platform: "telegram", url: "https://t.me/yourprofile" },
        { platform: "website", url: "https://yourportfolio.com" },
    ];

    return (
        <section className="home">
            <article className="home__text">
                <div className="home__titles">
                    <h2>PRODUCT</h2>
                    <h2>DESIGNER</h2>
                    <h3>CRISTIAN MUNOZ</h3>
                </div>

                <div className="home__social">
                    <SocialIcons links={socialLinks} size={30} />
                </div>

                <div className="home__cta">
                    <Button variant="secondary" size="4xl" onClick={() => alert("Downloading CV...")}>
                        Download Curriculum Vitae →
                    </Button>
                </div>
            </article>

            <figure className="home__image">
                <img src="images/heroImage.jpg" alt="Designer Workspace" />
            </figure>
        </section>
    );
};

export default HeroSection;
