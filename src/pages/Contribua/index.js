import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import PicPay from "../../assets/imgPicpay.png";
import Pix from "../../assets/imgPix.png";
import Transferencia from "../../assets/imgBradesco.png";

import "./styles.css";

const Contribua = () => {
  return (
    <>
      <Menu />

      <section className="main--contribua">
        <div className="texto--contribua">
          <p>
            Ajude as pessoas que menstruam e vivem em situação de rua a
            possuírem os produtos básicos de higiene pessoal durante seu ciclo
            menstrual. Contribua com o nosso projeto e seja um agente de mudança
            nessa causa.
          </p>
        </div>
        <div className="formasDePagamento">
          <img
            src={PicPay}
            alt="Card com QR Code para pagamento por PicPay"
            className="imgPagamento"
          />
          <img
            src={Pix}
            alt="Card com QR Code para pagamento por Pix"
            className="imgPagamento"
          />
          <img
            src={Transferencia}
            alt="Card com QR Code para pagamento por Transferência"
            className="imgPagamento"
          />
        </div>
        <div className="texto--contribua">
          <p>
            Você também pode nos ajudar doando os produtos necessários em um
            ponto de coleta do projeto.
          </p>
          <p>Entre em contato com a gente através das
            nossas redes sociais.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contribua;
