/* import React from "react";

function Headers() {
  return (
    <nav class="navbar navbar-expand-lg mx-auto sticky-top ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
                aria-current="page"
                href="/"
              >
                Accueil
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#programme">
                Programme
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#formulaire">
                Formulaire
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#domaine">
                Lieu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#info">
                Infos pratiques
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#cagnotte">
                Voyage de noces
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Headers;
 */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Headers() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle id="navbarnew1" aria-controls="responsive-navbar-nav">
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav mx-auto">
          <Nav className="me-auto ms-auto">
            <Nav.Link id="navbarnew" href="#accueil">
              Accueil
            </Nav.Link>
            <Nav.Link id="navbarnew" href="#programme">
              Programme
            </Nav.Link>
            <Nav.Link id="navbarnew" href="#formulaire">
              Formulaire
            </Nav.Link>
            <Nav.Link id="navbarnew" href="#domaine">
              Lieu
            </Nav.Link>
            <Nav.Link id="navbarnew" href="#info">
              Infos pratiques
            </Nav.Link>
            <Nav.Link id="navbarnew" href="#cagnotte">
              Voyage de noces
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers;
