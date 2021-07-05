import React from "react";
import imgVitrine from "../../assets/vitrine.jpg";
import "./styles.css";

const Banner = () => {
  return (
    <section className="main">
      <div>
        <h1>Conheça o menstRUA.</h1>
        <p>
          O menstRUA. é um projeto social criado com a intenção de ajudar, mesmo que minimamente, as pessoas que menstruam e vivem em situação de rua a terem um período menstrual com mais dignidade. A realidade dessas pessoas e de milhares de outras que se encontram em situação de vulnerabilidade social no Brasil é a pobreza menstrual. Mas você sabe o que é pobreza menstrual? 
        </p>
        <p>
        A pobreza menstrual é caracterizada pela falta de acesso a recursos, infraestrutura e até conhecimento por parte de pessoas que menstruam em relação a cuidados envolvendo a própria menstruação.
        </p>

        <p>
        Segundo o estudo “Pobreza Menstrual no Brasil: desigualdade e violações de direitos”, realizado pela <a href="https://www.unicef.org/brazil/relatorios/pobreza-menstrual-no-brasil-desigualdade-e-violacoes-de-direitos" target="_blank" rel="noreferrer">UNICEF (2021)</a>, 713 mil meninas vivem sem acesso a banheiro ou chuveiro em seu domicílio e mais de 4 milhões não têm acesso a itens mínimos de cuidados menstruais nas escolas.
        </p>
        <p>
          As pessoas que menstruam e vivem em situação de rua são diretamente afetadas pela pobreza menstrual. Além de todas as dificuldades de quem não tem onde morar, elas têm de lidar com as exigências do período menstrual sem dinheiro, água, privacidade ou atendimento médico apropriados.
        </p>
        <p>Levando esses fatores em consideração o menstRUA. traz a proposta de arrecadar produtos de higiene pessoal, principalmente absorventes, para serem distribuídos a pessoas que menstruam e vivem em situação de rua.</p>
      </div>
      <div>
       <img
        src={imgVitrine}
        alt="Ilustração de uma menina olhando uma vitrine com absorventes"
       />
      </div>
      <div className="cards">

      </div>
    </section>
  );
};

export default Banner;
