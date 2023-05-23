import React from "react";
import Logo from "../../assets/img/Logo.svg";
import Button from "../UI/Button/Button";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={s.navigation}>
      <img src={Logo} alt="logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">The Team</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">The Team</a>
        </li>
      </ul>
      <Button type="secondary">Sign Up</Button>
    </nav>
  );
};

export default Header;
