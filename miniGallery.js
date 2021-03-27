import React from "react";
import { link } from "react-router-dom";
import "./miniGallery.styles.css";


const MiniGallery = () => (

  <div ClassName="container">

    <div class="row d-flex h-100 align-self-center">
      <div class="col-lg-4 bg-breakfast text-center pt-5 text-white"> <a href="../Menu/index.js">
          <h3>Breakfast</h3>
        </a></div>
      <div class="col-lg-4 bg-lunch text-center pt-5 text-white"><a href="../Menu/index.js">
          <h3>Lunch</h3>
        </a></div>
      <div class="col-lg-4 bg-dinner text-center pt-5 text-white"><a href="../Menu/index.js">
          <h3>Entree</h3>
        </a>
      </div>
    </div>

  </div>
   
  
);







  export default MiniGallery;