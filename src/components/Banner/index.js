import React from "react";
import imgVitrine from "../../assets/vitrine.jpg";
import "./styles.css";

const Banner = () => {
  return (
    <div className="main">
      <div>
        <h1>Conheça o Projeto</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum felis sed elit vulputate viverra. Vivamus et justo ac leo
          rutrum lacinia a vehicula nibh. Sed a mauris eget justo porta suscipit
          tempor a sem. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Curabitur gravida non urna et
          venenatis. In in lacus vitae nisi convallis fermentum. Maecenas cursus
          lacinia consequat. In hac habitasse platea dictumst. Phasellus
          ultricies gravida velit, non euismod erat lobortis eget. Mauris justo
          felis, dignissim at orci at, vehicula tempor sapien. Curabitur ut leo
          et tellus dignissim mattis. Integer ac metus turpis. Integer dapibus
          massa vitae felis venenatis, nec pellentesque nisi facilisis. Sed
          dignissim, metus ut ornare hendrerit, sem ipsum gravida felis, quis
          maximus quam urna eu diam. Vivamus mattis ligula vel ipsum tincidunt
          condimentum.
        </p>

        <p>
          Proin sit amet sapien eget elit volutpat hendrerit. Sed in enim elit.
          Integer mattis iaculis nunc, id consectetur nisi porttitor in. Vivamus
          condimentum egestas mauris ut varius. Sed convallis mauris urna.
          Vivamus tristique ac nulla at tempor. Nulla facilisi. Nulla vitae
          metus condimentum, mollis dolor vitae, interdum diam. Nullam eleifend
          ligula sit amet diam pharetra, nec auctor tellus consectetur. Aenean
          ex nisl, varius eget augue eu, laoreet sagittis ligula. Vestibulum nec
          turpis quis ex eleifend condimentum quis eu elit. Nullam porta justo
          ac libero venenatis posuere. Suspendisse cursus tristique nisl sit
          amet molestie. Praesent eget neque sit amet diam dignissim dictum nec
          ut ligula.
        </p>
      </div>

      <img
        src={imgVitrine}
        alt="Ilustração de uma menina olhando uma vitrine com absorventes"
      />
    </div>
  );
};

export default Banner;
