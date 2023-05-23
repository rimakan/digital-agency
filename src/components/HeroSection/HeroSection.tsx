import React from "react";
import s from "./HeroSection.module.scss";
import Button from "../UI/Button/Button";
import heroImg from "../../assets/img/hero-img.svg";

const HeroSection = () => {
  return (
    <section className={s.heroSection}>
      <div className={s.container}>
        <h1 className={s.container__header}>
          <span>Make</span> a Creative solutions for your Creative{" "}
          <span>ideas.</span>
        </h1>
        <p className={s.container__text}>
          We are here to give you effective ideas. We help the brands to become
          what they want.
        </p>
        <Button type="main">Get started</Button>
      </div>
      <img src={heroImg} alt="lady image" />
    </section>
  );
};

export default HeroSection;
