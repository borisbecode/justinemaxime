import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import "./lieu.css";
function Lieu() {
  return (
    <>
      <div id="domaine" class="container-fluid mt-5">
        <div id="title" class="row justify-content-center">
          {" "}
          <h2>Le domaine</h2>
        </div>

        <div id="lieu" class="container mt-5">
          <div class="row justify-content-center">
            <div id="lieu1" class="col-lg-6 col-sm-12  mt-5">
              <div>
                <h1>
                  <AiOutlineHome />
                </h1>
                <h4 class="mt-3">Domaine de la Grangette </h4>
                <h4 class="mt-3">Route de villeveyrac</h4>
                <h4 class="mt-3">34530 Montagnac</h4>
                <button id="button" type="button" class="btn mt-3 mb-5">
                  Plus d'information ici
                </button>
              </div>
            </div>
            <div id="lieu2" class="col-lg-6 col-sm-12 bg-light p-0 mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.5023147243437!2d3.518887215783538!3d43.49185567086635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b14695fbc779bd%3A0x4bbf7b0f5988671a!2sDomaine%20de%20la%20Grangette%20%C3%A0%20Montagnac!5e0!3m2!1sfr!2sbe!4v1657984905849!5m2!1sfr!2sbe"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Lieu;