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
            id="card"
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
                <br></br> Merci de remplir le formulaire,
                <br></br> en cliquant sur le bouton ci-dessous
              </h4>
            </Card.Text>
            <a
              target="_blank"
              id="button"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdwidkIZEIEIeNOmj5EdC5lF9rGOey3cZ-ukA_2A26aDjGFrg/viewform?fbclid=IwAR2cYgV7BltdoNV0zf6Ik0FXcUC0Zth_1LoOXmVt2n8YlN0EWlPxSO-gxiQ"
            >
              <button id="button" type="button" class="btn btn-info">
                Le formulaire
              </button>
            </a>
          </Card>
        </div>
        <div class="row justify-content-center mt-5 ">
          {" "}
          <Card
            id="card"
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
