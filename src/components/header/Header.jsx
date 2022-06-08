import React from "react";
import style from "./header.module.css";
import IthsLogo from '../../assets/iths-logo.png'

const Header = () => {
  return (
    <div className={style.wrapper}>
      <img src={IthsLogo} alt="" />
    </div>
  );
};

export default Header;
