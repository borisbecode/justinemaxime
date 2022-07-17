import React from "react";
import "./info.css";
import { BiTrain } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TbPlane } from "react-icons/tb";

function Infos() {
  return (
    <>
      <div id="info" class="container-fluid mt-5">
        <div id="title" class="row justify-content-center">
          {" "}
          <h2>Infos pratiques</h2>
        </div>
        <div class="container ">
          <div class="row align-items-start">
            <div
              id="align"
              class="col-lg-3 col-md-12  justify-content-center pt-3 pb-3 mt-5"
            >
              <h3>
                {" "}
                <BiTrain /> Train
              </h3>
              <br></br>
              <div class="text-start">
                {" "}
                <h6>
                  - Distance gare Montpellier <AiOutlineArrowRight /> Le domaine
                  : 47km
                </h6>
                <br></br>
                <h6>
                  - Distance gare Béziers <AiOutlineArrowRight /> Le domaine :
                  37km
                </h6>
              </div>
            </div>
            <div class="col bg-danger "></div>
            <div
              id="align"
              class="col-lg-3 col-md-12  justify-content-center pt-3 pb-3 mt-5"
            >
              <h3>
                {" "}
                <TbPlane /> Avion
              </h3>
              <br></br>
              <div class="text-start">
                {" "}
                <h6>
                  - Distance aéroport Montpellier <AiOutlineArrowRight /> Le
                  domaine : 52km
                </h6>
                <br></br>
                <h6>
                  - Distance aéroport Béziers <AiOutlineArrowRight /> Le domaine
                  : 37km
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Infos;
