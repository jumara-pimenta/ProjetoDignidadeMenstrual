import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import "./styles.css";

const Voluntariado = () => {
  return (
    <>
      <Menu />
      <section className="main--voluntario">
        <div className="texto--voluntariado">
          <h1>Ficou interessado? Quer participar do projeto?</h1>
          <p>
            Clica no botão abaixo, preencha o formulário, aguarde nosso contato
            e vem fazer mudança com a gente.
          </p>
        </div>
        <div>
          <a
            class="button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeJpmgymcGejyXieBIai6CLnrx5am_TeNvDoUnRGCJBQiJTBQ/closedform"
            rel="noreferrer"
            target="_blank"
          >
            QUERO ME VOLUNTARIAR!
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Voluntariado;
