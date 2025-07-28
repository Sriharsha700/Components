import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  buttonColor: String;
}

const Button = ({ children, onClick, buttonColor }: Props) => {
  return (
    <button className={"btn btn-" + buttonColor} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

/*Factors to be considered in buttons are
1. color of button
2. On click --> IT should either subimt the form or let the parent know that the button is clicked
*/
