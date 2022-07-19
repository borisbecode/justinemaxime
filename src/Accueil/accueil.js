import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Accueil() {
  return (
    <>
      <div id="accueil" class="container-fluid">
        <div class="row justify-content-center mt-5 ">
          {" "}
          <Card
            id="card"
            className="card"
            style={{ width: "30rem", margin: "0", padding: "0" }}
          >
            <Card.Img
              variant="top"
              src="https://zupimages.net/up/22/28/iibq.jpg"
            />
          </Card>
        </div>
        <div class="row justify-content-center mt-5 ">
          {" "}
          <Card id="card" style={{ width: "30rem", margin: "0", padding: "0" }}>
            <Card.Text className="backacc">
              <h4 id="insidecard">
                Avec leur famille, <br></br>{" "}
                <span id="ecriture">Justine & Maxime </span> <br></br> Vous
                invitent à celebrer leur mariage, <br></br> le 30 août 2022
              </h4>
            </Card.Text>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Accueil;
