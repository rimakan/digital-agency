import React from "react";
import s from "./Wrapper.module.scss";
import background from "../../../assets/img/background.svg";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className={s.wrapper}>
      <img className={s.wrapper__img} src={background}></img>
      {children}
    </div>
  );
};

export default Wrapper;
