import React from "react";
import { link } from "react-router-dom";
import './uempBanner.styles.css';



const UempBanner = () => (

  <div ClassName="container">
    <div class="py-5 bg-tomatoe">
  <div class="container-fluid">
    <div class="row viewport-60 align-items-center">
      <div class="col-lg-6 text-center mb-5">
        <h2 class=" text-white">(UEMP)Give Back Scholarship</h2>
        <p class="lead text-white paragraph-color w-75 mx-auto">Ulti-Meat Eats Pantry gives away every year 25 tution free scholarships to attend the (UEMP) Culinary Arts School.</p>
           <a href="../culinary" class="btn btn-green-white btn-lg mr-3">Learn More</a>
            </div>
          <div class="col-lg-6 d-none d-sm-block"> 
         <img src="images/m1.jpg" alt="" class="img-fluid"/>
        </div>
    </div>
  </div>
</div>
</div>






  );

export default UempBanner;