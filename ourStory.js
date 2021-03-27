import React from "react";
import { link } from "react-router-dom";
import "./ourStory.styles.css";
import { Button } from "reactstrap";

const OurStory = () => (
  <div ClassName="container">
    <div className="row">
      <div className="col-md-4 text-center">
        <div className="story-title">
          <h2 className="mt-3">Our Story</h2>
          <div className="underline mb-5"></div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-10 mx-auto">
        <p>
          The Ulti-Meat Pantry was founded over 60 years ago in 1960 our
          facility sits on 25 acres of land. We are a restaurant, catering with
          banquet all rental services and a Culinary arts school all family
          owned. Our passion is to provide our customers with high quality food
          and Service. We love family and strive to make your time with us
          special. We are a one stop shop for delectable , delicious, delights
          and deserts. Whether you are dining in for a meal or reserving a
          special event for our catering & banquet hall rental services we want
          you to know we are here for you to make your event a total pleasant
          experience and a success.
        </p>
        <p>
          Cooking is a way of life for us. We love it and want to share with our
          guest and our students our love for cooking. For those of you who have
          an interest in expanding your cooking skills and your life's
          opportunity check out what we have to offer in our Culinary Art
          School.
        </p>
        <p>To learn more click the button below. </p>
        <p>
          <a className="btn btn-green mb-5" href="../culinary">
            Culinary School
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default OurStory;
