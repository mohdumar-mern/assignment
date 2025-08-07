import React from "react";
import "./Button.scss";

const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary", // 'primary', 'secondary', 'danger'
  size = "md",         // 'sm', 'md', 'lg'
  disabled = false,
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
