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
            className="card"
            style={{ width: "30rem", margin: "0", padding: "0" }}
          >
            <Card.Img
              variant="top"
              src="https://zupimages.net/up/22/28/iibq.jpg"
            />
          </Card>
        </div>
        <div id="card" class="row justify-content-center mt-5 ">
          {" "}
          <Card style={{ width: "30rem", margin: "0", padding: "0" }}>
            <Card.Text className="backacc">
              <h4>
                Avec leur famille, <br></br> Justine & Maxime, <br></br> Vous
                invite a celebrer leur mariage{" "}
              </h4>
            </Card.Text>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Accueil;
