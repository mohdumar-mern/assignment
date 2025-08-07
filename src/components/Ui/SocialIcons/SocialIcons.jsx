import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaFigma,
  FaTelegram,
} from "react-icons/fa";
import "./SocialIcons.scss";

const ICON_MAP = {
  instagram: FaInstagram,
  figma: FaFigma,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  telegram: FaTelegram,
  website: FaGlobe,
};

const SocialIcons = ({ links = [], size = 24 }) => {
  return (
    <div className="social-icons">
      {links.map(({ platform, url }, index) => {
        const IconComponent = ICON_MAP[platform.toLowerCase()];
        if (!IconComponent) return null;
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons__link"
          >
            <IconComponent size={size} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
