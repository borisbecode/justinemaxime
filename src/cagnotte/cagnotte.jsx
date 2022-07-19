import React from "react";
import "./cagnotte.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cagnotte() {
  return (
    <>
      <div id="cagnotte" class="container-fluid ">
        <div id="title" class="row justify-content-center">
          {" "}
          <h2>Voyage de noces</h2>
        </div>
        <div class="row justify-content-center mt-5 ">
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
                {" "}
                Merci encore pour votre présence à notre mariage ❤️ <br></br>
                <br></br>
                Si vous souhaitez participer à notre voyage de noces : <br></br>
                <br></br>
              </h4>
              <div class="row">
                <div id="aligncagnotte" class="col-lg-6 col-md-12">
                  {" "}
                  <h6 class="text-start"> Une urne sera sur place</h6>{" "}
                </div>
                <div id="aligncagnotte2" class="col-lg-6 col-md-12">
                  <h6 class="text-end">
                    {" "}
                    <a
                      id="cagnottebutton"
                      target="_blank"
                      href="https://lydia-app.com/collect/36907-voyage-de-noces-juju-max/fr?fbclid=IwAR35fyYK_v1CrgROPw2hbTDYDWqvYZGHviCGzkhcFNBV-Vwa00OFqf5TT8s"
                    >
                      Je fais un don en cliquant ici
                    </a>{" "}
                  </h6>{" "}
                </div>
              </div>
            </Card.Text>
          </Card>
        </div>
        <div class="row justify-content-center mt-5 mb-3">
          {" "}
          <Card
            id="card"
            className="card"
            style={{ width: "25rem", margin: "0", padding: "0" }}
          >
            <Card.Img
              variant="top"
              src="https://zupimages.net/up/22/29/y8i2.jpg"
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Cagnotte;
