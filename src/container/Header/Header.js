import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cart = <FontAwesomeIcon icon={faCartPlus} />;
function Header() {
  return (
    <div className={classes.Header}>
      <ul>
        <Link to="/">
          <li className={classes.title}>SHOP</li>
        </Link>
        <li className={classes.menu}>
          <span>{cart}</span>
        </li>
        <li className={classes.menu}>
          <span>Sign In</span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
