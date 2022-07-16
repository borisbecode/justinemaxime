import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./formulaire.css";

function Formulaire() {
  return (
    <>
      <div id="formulaire" class="container-fluid">
        {" "}
        <div id="title" class="row justify-content-center">
          {" "}
          <h2>Le formulaire</h2>
        </div>
        <div class="row justify-content-center mt-3 ">
          {" "}
          <Card
            className="textformulaire"
            style={{
              width: "50rem",
              margin: "0",
              padding: "0",
              paddingTop: "15px",
              paddingBottom: "15px",
              height: "auto",
            }}
          >
            <Card.Text>
              <h4>
                Pour notre organisation,
                <br></br> Merci de remplir le formulaire avant le xx/xx/xx
                <br></br> en cliquant sur le bouton ci-dessous
              </h4>
            </Card.Text>
            <button id="button" type="button" class="btn mb-1">
              Le formulaire
            </button>
          </Card>
        </div>
        <div class="row justify-content-center mt-5 ">
          {" "}
          <Card
            className="card"
            style={{ width: "50rem", margin: "0", padding: "0" }}
          >
            <Card.Img
              variant="top"
              src="https://zupimages.net/up/22/28/8319.jpg"
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Formulaire;
