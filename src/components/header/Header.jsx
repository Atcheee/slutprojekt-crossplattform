import React from "react";
import style from "./header.module.css";
import IthsLogo from "../../assets/iths-logo.png";

const Header = ({ onlineState }) => {
  return (
    <div className={style.wrapper}>
      <h3>{onlineState ? "Your are online" : "You are offline"} </h3>
      <img src={IthsLogo} alt="" />
    </div>
  );
};

export default Header;
