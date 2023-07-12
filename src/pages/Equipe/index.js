import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import imgJumara from "../../assets/imgJumara.png";
import imgFernanda from "../../assets/imgFernanda.png";

import "./styles.css";

const Equipe = () => {
  return (
    <>
      <Menu />
      <div className="main-equipe">
        <p className="tituloEquipe">Conheça a equipe</p>
        <div className="card--equipe">
          <div className="card--integrante">
            <a
              href="https://www.linkedin.com/in/jumara-souza-pimenta/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img--card"
                src={imgJumara}
                alt="foto de perfil da idealizadora do projeto"
              />
            </a>
            <p className="titulo--card">Jumara Pimenta</p>
            <p className="descricao--integrante">
              Idealizadora e responsável pela coordenação do projeto.
              Administradora, desenvolvedora de software, ativista e educadora
              menstrual.
            </p>
          </div>

          <div className="card--integrante">
            <a
              href="https://www.linkedin.com/in/fernanda-pimenta-aa710719a/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img--card"
                src={imgFernanda}
                alt="foto participante do projeto"
              />
            </a>
            <p className="titulo--card">Fernanda Pimenta</p>
            <p className="descricao--integrante">
              Responsável pela coordenação do projeto. Publicitária, gestora de
              projetos e ativista menstrual.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Equipe;
