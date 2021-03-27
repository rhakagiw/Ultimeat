import React from "react";
import { link } from "react-router-dom";
import "./homeBanner.styles.css";
import { Button } from 'reactstrap';

const Banner = () => (

  <div ClassName="container">
    <div className="banner">
      <div className="backgroundh">
      <div className="banner-wrapper">
        <h1 className="display-4"> Delectable bites made just right!</h1>
        <h4>Dine in, Reserve a Banquet, or Register for Our Culinary Arts School.</h4>
      <h5>What ever you choose it will be a Win Win Situation!</h5>
      <p>To learn more click the button  <br/><a class="btn btn-green-white mb-5 mt-3" href="">About Us</a></p>
      </div>
      </div>
    </div>
  </div>
);

export default Banner;
