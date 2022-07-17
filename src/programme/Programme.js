import React from "react";
import "./programme.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Programme() {
  return (
    <>
      <div id="programme" class="container-fluid ">
        <div id="title" class="row justify-content-center">
          {" "}
          <h2>Le programme</h2>
        </div>
        <div class="row justify-content-center">
          {" "}
          <div id="mardi" class="col-lg-5 col-sm-12  mt-2">
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
          <div id="mardi" class="col-lg-5 col-sm-12  mt-2">
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

        <div class="row justify-content-center g-0 ">
          <div id="cardleft" class="card mb-3 mt-5 d-none d-lg-block">
            <div id="cardmardi" class="row g-0">
              <div class="col-md-8">
                <div class="card-body">
                  <h5 id="mardititle" class="card-title">
                    Jeudi 1 Septembre{" "}
                  </h5>
                  <div class="mid">
                    - Départ pour ceux qui veulent <br></br>- Poursuite des
                    festivités pour les autres
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <img
                  id="flamandrose"
                  src="https://zupimages.net/up/22/28/ykte.jpg"
                  class="img-fluid rounded-start"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
          <div
            id="mardi"
            class="col-lg-5 col-sm-12  mt-2 d-lg-none d-xl-block d-xl-none d-xxl-block d-xxl-none "
          >
            <Card id="cardmardi" style={{ width: "30rem" }}>
              <Card.Img
                style={{ height: "35vh" }}
                variant="top"
                src="https://zupimages.net/up/22/28/ykte.jpg"
              />
              <Card.Body>
                <Card.Title id="mardititle">Jeudi 1 Septembre</Card.Title>
                <Card.Text>
                  - Départ pour ceux qui veulent <br></br>- Poursuite des
                  festivités pour les autres
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programme;
