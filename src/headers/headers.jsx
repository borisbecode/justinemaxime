import React from "react";

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
              <a class="nav-link active" aria-current="page" href="#">
                Accueil
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#domaine">
                Lieu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#formulaire">
                Formulaire
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#programme">
                Programme
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#info">
                Infos pratiques
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Cagnotte
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Headers;
