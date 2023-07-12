import React from "react";
import capa from "../../assets/capa.jpg";
import rua from "../../assets/rua.jpg";
import "./styles.css";

const Banner = () => {
  return (
    <>
      <section className="main">
        <div>
          <h1>Conheça o menstRUA</h1>
          <p>
            O menstRUA é um projeto de impacto social que atua no combate à
            pobreza menstrual no estado do Amazonas, realizando rodas de
            conversas e oficinas sobre educação menstrual e distribuição de kits
            menstruais para pessoas que vivem em situação de rua ou em contextos
            vulnerabilizados.
          </p>
        </div>
        <div>
          <img
            src={capa}
            alt="Foto com várias pessoas voluntárias do projeto"
          />
        </div>
      </section>
      <section className="sectionTwo">
        <h3>Mas você sabe o que é a pobreza menstrual?</h3>
        <p>
          A pobreza menstrual é caracterizada pela falta de acesso a recursos,
          infraestrutura e conhecimento por parte de pessoas que menstruam em
          relação a cuidados envolvendo a própria menstruação.
        </p>
      </section>
      <section className="sectionThree">
        <hr></hr>
        <p>
          Segundo o estudo “Pobreza Menstrual no Brasil: desigualdade e
          violações de direitos”, realizado pela{" "}
          <a
            href="https://www.unicef.org/brazil/relatorios/pobreza-menstrual-no-brasil-desigualdade-e-violacoes-de-direitos"
            target="_blank"
            rel="noreferrer"
            className="link-externo"
          >
            UNICEF (2021)
          </a>
          , 713 mil meninas vivem sem acesso a banheiro ou chuveiro em seu
          domicílio e mais de 4 milhões não têm acesso a itens mínimos de
          cuidados menstruais nas escolas.
        </p>
        <hr></hr>
      </section>
      <section className="sectionFour">
        <div>
          <p>
            As pessoas que menstruam e vivem em situação de rua são diretamente
            afetadas pela pobreza menstrual.
          </p>
          <p>
            Além de todas as dificuldades de quem não tem onde morar, elas têm
            de lidar com as exigências do período menstrual sem dinheiro, água,
            privacidade ou atendimento médico apropriados.
          </p>
        </div>
        <div>
          <img src={rua} alt="imagem de uma praça com algumas pessoas" />
          <h2>Foto: menstRUA</h2>
        </div>
      </section>
      <section className="sectionFive">
        <p>
          Levando esses fatores em consideração o menstRUA traz a proposta de
          arrecadar produtos para gerenciamento da menstruação, principalmente
          absorventes, para serem distribuídos a pesssoas que vivem em situação
          de rua ou em contextos vulneráveis, além de promover oficinas e rodas
          de conversa como forma de levar educação menstrual a todas as pessoas
          que menstruam.
        </p>
      </section>
    </>
  );
};

export default Banner;
