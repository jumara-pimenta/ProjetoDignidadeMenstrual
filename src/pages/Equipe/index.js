import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import imgJumara from "../../assets/imgJumara.png";
import imgFernanda from "../../assets/imgFernanda.png";
import imgKlinger from "../../assets/imgKlinger.png";
import imgBreno from "../../assets/imgBreno.png";
import imgCamilly from "../../assets/imgCamilly.png";

import "./styles.css";

const Equipe = () => {
  return (
    <>
      <Menu />
      <div className="main-equipe">
        <p className="tituloEquipe">Conheça a equipe do projeto</p>
        <div className="card--equipe">

          <div className="card--integrante">
          <a href="https://www.linkedin.com/in/jumara-souza-pimenta/" target="_blank" rel="noreferrer">
            <img
              className="img--card"
              src={imgJumara}
              alt="foto de perfil da idealizadora do projeto"
            />
          </a>
            <p className="titulo--card">Jumara Pimenta</p>
            <p className="descricao--integrante">Co-idealizadora, administradora e responsável pelo desenvolvimento front-end do site do projeto</p>
          </div>

          <div className="card--integrante">
            <a href="https://www.linkedin.com/in/klinger-santos/" target="_blank" rel="noreferrer">
            <img
              className="img--card"
              src={imgKlinger}
              alt="foto participante do projeto"
            />
            </a>
            <p className="titulo--card">Klinger Santos</p>
            <p className="descricao--integrante">Co-idealizador, product designer e responsável pela pesquisa do projeto social</p>
          </div>

          <div className="card--integrante">
            <a href="https://www.linkedin.com/in/fernanda-pimenta-aa710719a/" target="_blank" rel="noreferrer">
            <img
              className="img--card"
              src={imgFernanda}
              alt="foto participante do projeto"
            />
            </a>
            <p className="titulo--card">Fernanda Pimenta</p>
            <p className="descricao--integrante">Publicitária, responsável pela comunicação do projeto</p>
          </div>  
          <div className="card--integrante">
            <a href="https://www.instagram.com/brenobigi/" target="_blank" rel="noreferrer">
            <img 
              className="img--card" 
              src={imgBreno} 
              alt="foto participante" 
            />
            </a>
            <p className="titulo--card">Breno Bigi</p>
            <p className="descricao--integrante">Publicitário, responsável pelo audiovisual do projeto</p>
          </div>

          <div className="card--integrante">
            <a href="https://www.linkedin.com/in/camilly-cardoso-9a7878214/" target="_blank" rel="noreferrer">
            <img
              className="img--card"
              src={imgCamilly}
              alt="foto participante"
            />
            </a>
            <p className="titulo--card">Camilly Cardoso</p>
            <p className="descricao--integrante">Responsável pela arrecadação de itens e pela prospecção de voluntários</p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Equipe;
