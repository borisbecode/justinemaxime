import React from "react";
import "./info.css";
import { BiTrain, BiBus, BiTaxi } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TbPlane } from "react-icons/tb";
import { FaMapSigns } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

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
              class="col-lg-4 col-md-12  justify-content-center pt-3 pb-3 mt-5"
            >
              <h3>
                {" "}
                <BiTrain /> Train
              </h3>
              <br></br>
              <div class="text-start">
                {" "}
                <h6>
                  - Distance gare Montpellier <AiOutlineArrowRight />{" "}
                  <span></span> Le domaine : 47km
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
              class="col-lg-4 col-md-12  justify-content-center pt-3 pb-3 mt-5"
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
          {/* DEUXIEME PARTIE************************************************************************ */}
          <div class="row align-items-start">
            <div
              id="alignbus"
              class="col-lg-4 col-md-12  justify-content-center pt-3 pb-3 mt-5"
            >
              <h3>
                {" "}
                <BiBus /> Bus
              </h3>
              <br></br>
              <div class="text-start">
                {" "}
                <h6>
                  - Apres le train ou l'avion prendre la ligne de bus :{" "}
                  <br></br>
                  <br></br>
                  <p class="justify-content-center text-center mt-2">
                    N°603-604 : <span></span> Montpellier <FaMapSigns /> Béziers
                  </p>
                  <p class="justify-content-center text-center mt-2">
                    Arret Montagnac centre{" "}
                  </p>
                  <p class="justify-content-center text-center mt-2">
                    Durée +- 1 heure
                  </p>
                </h6>
                <p class="justify-content-center text-center mt-2">
                  <a
                    class="text-center"
                    target="_blank"
                    id="button"
                    href="https://www.herault-transport.fr/lignes-regulieres/603-604?fbclid=IwAR3rS5jDFqjgZrKIi2mBcVhN4lD3gfWZQ-Un-vFjZX7BUyZPIJgt85-jD9c#"
                  >
                    <button
                      id="button"
                      type="button"
                      class="btn btn-info text-center"
                    >
                      Plus d'informations ici
                    </button>
                  </a>
                </p>
              </div>
            </div>
            <div class="col bg-danger "></div>
            {/*  DOMAINE ************************************ */}
            <div
              id="align"
              class="col-lg-4 col-md-12  justify-content-center pt-3 pb-3 mt-5"
            >
              <h3>
                {" "}
                <AiOutlineHome /> Sur le domaine
              </h3>
              <br></br>
              <div class="text-start">
                {" "}
                <h6>- Pour ceux qui dorment sur le domaine :</h6>
                <p class="justify-content-center text-center mt-2">
                  Draps et serviettes fournis
                </p>
                <p class="justify-content-center text-center mt-2">
                  Petit déjeuner inclus
                </p>
                <p class="justify-content-center text-center mt-2">
                  Hébergement à régler directement sur place à votre arrivée en
                  espèces ou en CB
                </p>
              </div>
              <a
                target="_blank"
                id="button"
                href="http://www.domainedelagrangette.fr/chambre-d-hotes.html"
              >
                <button id="button" type="button" class="btn btn-info">
                  Plus d'informations ici
                </button>
              </a>
            </div>
            {/*   TAXI ************ */}
            <div
              id="alignbus"
              class="col-lg-12 col-md-12  justify-content-center pt-3 pb-2 mt-5 mb-3"
            >
              <h3>
                {" "}
                <BiTaxi /> Taxi
              </h3>
              <div class="row">
                <div class="col-lg-6 col-md-12">
                  {" "}
                  <h6 class="text-start">
                    {" "}
                    - Distance Montagnac centre <AiOutlineArrowRight /> Le
                    domaine : 4.5km
                  </h6>{" "}
                </div>
                <div class="col-lg-6 col-md-12">
                  {" "}
                  <a
                    target="_blank"
                    href="https://www.google.com/localservices/prolist?g2lbs=AL1YbfWqxDzl-QnqPhEcikrkZLr3r0zoruC8irR8Sb7FLYePqUpV_830PURuCcYGmCF66KHPoyd2ekSJaQvggMZXCEqlLqUAzQ%3D%3D&hl=fr-BE&gl=be&ssta=1&q=taxis+montagnac&oq=taxis+montagnac&scp=ChFnY2lkOnRheGlfc2VydmljZRI9EhIJ4UkwdxZBsRIRLFOr3actihMiEU1vbnRhZ25hYywgRnJhbmNlKhQNS2ziGRXAwA0CHfLX7xklk2sgAhoFdGF4aXMiD3RheGlzIG1vbnRhZ25hYyoPU2VydmljZSBkZSB0YXhp&slp=MgBSAggC&src=2&origin=https://www.google.com&spp=CgsvZy8xdGxyMXQ4aA%3D%3D&lrlstt=1658148711293&ved=2ahUKEwi44KHxvIL5AhXGvKQKHWirDzcQvS56BAgIEAE"
                  >
                    <h6 id="fabien" class="text-end">
                      {" "}
                      - Fabien Tuffou 0033680085952
                    </h6>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Infos;
