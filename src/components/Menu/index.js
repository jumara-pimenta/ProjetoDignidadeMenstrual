import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgLogo.svg";

import "./styles.css";

const Menu = () => {
  return (
    <div className="header">
      <div>
          <Link className="link" to="/">
          <img className="imgLogo" src={logo} alt="logo do projeto" />          
          </Link>
      </div>
      <div className="menu--principal">
        <ul className="menu">
          <li>
            <Link className="link" to="/">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="link" to="/contribua">
              Contribua
            </Link>
          </li>
          <li>
            <Link className="link" to="/voluntariado">
              Voluntariado
            </Link>
          </li>
          <li>
            <Link className="link" to="/equipe">
              Equipe
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
