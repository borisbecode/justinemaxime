import React from "react";
import "./programme.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Programme() {
  return (
    <>
      <div id="programme" class="container-fluid mt-5">
        <div id="title" class="row justify-content-center">
          {" "}
          <h2>Le programme</h2>
        </div>
        <div class="row justify-content-center">
          {" "}
          <div id="mardi" class="col-lg-5 col-sm-12  mt-5">
            <Card id="cardmardi" style={{ width: "30rem" }}>
              <Card.Img
                variant="top"
                src="https://zupimages.net/up/22/28/3tc0.jpg"
              />
              <Card.Body>
                <Card.Title id="mardititle">Mardi 30 aout</Card.Title>
                <Card.Text>
                  - 17h Cérémonie laique <br></br>- 18h30 Cocktail & diner{" "}
                  <br></br>- Soirée
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div id="mardi" class="col-lg-5 col-sm-12  mt-5">
            <Card id="cardmardi" style={{ width: "30rem" }}>
              <Card.Img
                variant="top"
                src="https://zupimages.net/up/22/28/hn7n.jpg"
              />
              <Card.Body>
                <Card.Title id="mardititle">Mercredi 31 aout</Card.Title>
                <Card.Text>
                  - 12h Brunch <br></br>- Apres midi baignade & chill <br></br>-
                  Barbecue & Soirée
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div class="row justify-content-center no-gutters g-0">
          <div id="cardmardi" class="col-lg-5 col-sm-5  mt-5">
            {" "}
          </div>
          <div id="mardi" class="col-lg-5 col-sm-5  mt-5">
            {" "}
            <img
              src="https://zupimages.net/up/22/28/hn7n.jpg"
              class="img-fluid"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programme;
