import React from "react";
import N1_poster from "../neck-lines/N1_poster.png";
import N2_poster from "../neck-lines/N2_poster.png";
import N3_poster from "../neck-lines/N3_poster.png";
import N4_poster from "../neck-lines/N4_poster.png";
import N5_poster from "../neck-lines/N5_poster.png";
import N6_poster from "../neck-lines/N6_poster.png";
import N7_poster from "../neck-lines/N7_poster.png";
import N8_poster from "../neck-lines/N8_poster.png";
import N9_poster from "../neck-lines/N9_poster.png";
import N10_poster from "../neck-lines/N10_poster.png";
import N11_poster from "../neck-lines/N11_poster.png";
import N12_poster from "../neck-lines/N12_poster.png";
import N13_poster from "../neck-lines/N13_poster.png";
import N14_poster from "../neck-lines/N14_poster.png";
import N15_poster from "../neck-lines/N15_poster.png";

const Images = ({ onImageSelect }) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <button className="button" onClick={() => onImageSelect(N1_poster)}>
            <img src={N1_poster} height={50} width={50} alt="one" />
          </button>
        </div>

        <div className="col">
          <button className="button" onClick={() => onImageSelect(N2_poster)}>
            <img src={N2_poster} height={50} width={50} alt="two" />
          </button>
        </div>

        <div className="col">
          <button className="button" onClick={() => onImageSelect(N3_poster)}>
            <img src={N2_poster} height={50} width={50} alt="three" />
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <button className="button" onClick={() => onImageSelect(N4_poster)}>
            <img src={N4_poster} height={50} width={50} alt="four" />
          </button>
        </div>

        <div className="col">
          <button className="button" onClick={() => onImageSelect(N5_poster)}>
            <img src={N5_poster} height={50} width={50} alt="five" />
          </button>
        </div>

        <div className="col">
          <button className="button" onClick={() => onImageSelect(N6_poster)}>
            <img src={N6_poster} height={50} width={50} alt="six" />
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <button className="button" onClick={() => onImageSelect(N7_poster)}>
            <img src={N7_poster} height={50} width={50} alt="seven" />
          </button>
        </div>

        <div className="col">
          <button className="button" onClick={() => onImageSelect(N8_poster)}>
            <img src={N8_poster} height={50} width={50} alt="eight" />
          </button>
        </div>

        <div className="col">
          <button className="button" onClick={() => onImageSelect(N9_poster)}>
            <img src={N9_poster} height={50} width={50} alt="nine" />
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <button className="button" onClick={() => onImageSelect(N10_poster)}>
            <img src={N10_poster} height={50} width={50} alt="ten" />
          </button>
        </div>

        <div className="col">
          <button className="button" onClick={() => onImageSelect(N11_poster)}>
            <img src={N11_poster} height={50} width={50} alt="eleven" />
          </button>
        </div>

        <div className="col">
          <button className="button" onClick={() => onImageSelect(N12_poster)}>
            <img src={N12_poster} height={50} width={50} alt="twelve" />
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <button className="button" onClick={() => onImageSelect(N13_poster)}>
            <img src={N13_poster} height={50} width={50} alt="thirteen" />
          </button>
        </div>

        <div className="col">
          <button className="button" onClick={() => onImageSelect(N14_poster)}>
            <img src={N14_poster} height={50} width={50} alt="fourteen" />
          </button>
        </div>

        <div className="col">
          <button className="button" onClick={() => onImageSelect(N15_poster)}>
            <img src={N15_poster} height={50} width={50} alt="fifteen" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Images;
