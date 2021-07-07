import React from "react";
import { Link } from "react-router-dom";
import ImgFace from "../../assets/facebook.svg";
import ImgInsta from "../../assets/instagram.svg";
import ImgIN from "../../assets/linkedin.svg";
import Logo from "../../assets/imgLogo.svg";

import "./styles.css";

const Footer = () => {
  return (
    <>
      <div className="rodape">
        <div>
          <ul className="menuFooter">
            <li className ="menu-item">
              <Link className="link" to="/">
                Sobre
              </Link>
            </li>
            <li className ="menu-item">
              <Link className="link" to="/contribua">
                Contribua
              </Link>
            </li>
            <li className ="menu-item">
              <Link className="link" to="/voluntariado">
                Voluntariado
              </Link>
            </li>
            <li className ="menu-item">
              <Link className="link" to="/equipe">
                Equipe
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <img className="logo" src={Logo} alt="Logo do projeto" />
        </div>
        <div className="imgFooter">
          <div>
            <p className="titulo--redes">Siga-nos:</p>
          </div>
          <div>
            <a href="https://www.facebook.com/projetomenstrua" target="_blank" rel="noreferrer">
              <img src={ImgFace} alt="Imagem da logo do Facebook" />
            </a>
            <a href="https://www.instagram.com/projetomenstrua/" target="_blank" rel="noreferrer">
              <img src={ImgInsta} alt="Imagem da logo do Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/menstrua" target="_blank" rel="noreferrer">
              <img src={ImgIN} alt="Imagem da logo do LinkedIN" />
            </a>
          </div>
        </div>
      </div>

      <div className="rodape__cc">
        <p> 2021 | Site desenvolvido por <a className="autora" href="https://github.com/jumara-pimenta" target="_blank" rel="noreferrer">Jumara Pimenta</a></p>
      </div>
    </>
  );
};

export default Footer;
