import React from "react";
import { link } from "react-router-dom";
import '../banquetBanner.styles.css';



const BanquetBannerFooter = () => (

  <div ClassName="container" id="bg-orange-green">
     <div class="row viewport-40 pt-5 align-middle">
      <div class="col text-center text-white">
        <h2>Are You Looking for a career change!</h2>
        <p class="lead"> Get the education and skills to take you to the next level.</p>

        <hr className="m-y-2" />
        <p>Take a look at what (UMEP) Culinary Arts School has to Offer!</p>

        <p>
          <a class="btn btn-green-white" role="button" href="./Culinary">Learn More</a>
        </p>
      </div>
    
    </div>
  </div>
  );

export default BanquetBannerFooter;