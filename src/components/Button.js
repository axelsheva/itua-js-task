import React from "react";

const Button = ({ children, className, ...props }) => (
  <button type="button" className={`btn ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
