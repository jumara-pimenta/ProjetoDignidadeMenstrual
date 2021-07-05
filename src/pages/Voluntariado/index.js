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
          <p>
            Ficou interessado? Quer participar do projeto? Clica no botão abaixo, preencha o formulário, aguarde nosso contato e vem fazer mudança com a gente.
          </p>
        </div>
        <div>
        <a class="button" href="https://docs.google.com/forms/d/1pNY12nVF_LBgrftO35WW_PbWdVKwyjsbyjSmpkh6pwI/edit" rel="noreferrer" target="_blank">Venha ser um voluntário!</a>       
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Voluntariado;
