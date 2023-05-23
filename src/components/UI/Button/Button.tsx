import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  type: string;
  children: string;
}

const Button = ({ type, children }: ButtonProps) => {
  const className = type ? `button__${type}` : '';
  return <button className={`${s.button} ${s[className]}`}>{children}</button>;
};

export default Button;
