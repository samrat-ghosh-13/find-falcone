// react
import React from "react";

// prop-types
import { node, string, bool, func, oneOf } from "prop-types";

/**
 * @name Button
 * @description method to create the button component
 * @param classname
 * @param appearance
 * @param size
 * @param children
 * @param disabled
 * @param handleClick
 * @param ...props (custom props)
 * @returns button component
 */
const Button = ({
  appearance,
  classname,
  children,
  disabled,
  size,
  handleClick,
  ...props
}) => (
  <button
    data-testid="button"
    className={` button ${classname} ${appearance} ${
      disabled ? "button--disabled" : ""
    } ${size}`}
    disabled={disabled}
    onClick={(event) => handleClick(event)}
    {...props}
  >
    <span className="button__text" data-testid="button__text">
      {children}
    </span>
  </button>
);

Button.propTypes = {
  children: node.isRequired,
  disabled: bool,
  handleClick: func.isRequired,
  classname: string,
  appearance: string,
  size: oneOf([
    "button--medium",
    "button--large",
    "button--extra-large",
    "button--small",
    "button--extra-small",
  ]),
};

Button.defaultProps = {
  disabled: false,
  classname: "",
  appearance: "",
  size: "button--medium",
};

export default Button;
