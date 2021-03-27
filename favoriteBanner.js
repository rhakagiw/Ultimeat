import React from "react";
import { link } from "react-router-dom";
import './favoriteBanner.css';



const FavoriteBanner = () => (

  <div ClassName="container" id="bg-orange-green">
     <div class="row viewport-40 pt-5 align-middle">
      <div class="col text-center text-white">
        <h2> Favorites Customers Love!</h2>
        <p class="lead"> We have a dish for you to love as well.</p>

        <hr className="m-y-2" />
        <p>See what our customers enjoyed most!</p>

        <p>
          <a class="btn btn-green-white" role="button" href="#favorite">Favorites</a>
        </p>
      </div>
    
    </div>
  </div>
  );

export default FavoriteBanner;