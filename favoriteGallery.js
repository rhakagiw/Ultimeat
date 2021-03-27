import React from "react";
import { link } from "react-router-dom";
import './favoriteGallery.styles.css';



const FavoriteGallery = () => (

  <div ClassName="container" id="favs">
    
    <div className="container pt-5 pb-5">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-3">
          <div class="card text-white">
            <img class="card-img" src="images/fav1.jpg" alt="Card image"/>
            <div class="card-img-overlay overlay">
              <h4 class="card-title">Ahi Tuna</h4>
              <p class="card-text">The Ahi Tuna is a yellow fin tuna soft an tender delicious treat to eat.
                </p>
              <p class="card-text">$13.99</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-3">
          <div class="card text-white">
            <img class="card-img" src="images/fav2.jpg" alt="Card image"/>
            <div class="card-img-overlay overlay">
              <h4 class="card-title">Sushi Roll</h4>
              <p class="card-text"> Our california rolls comes in all diffrent types of sea food & vegetables.</p>
              <p class="card-text">$11.99</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-3">
          <div class="card text-white">
            <img class="card-img" src="images/fav3.jpg" alt="Card image"/>
            <div class="card-img-overlay overlay">
              <h4 class="card-title">Wild Salmon</h4>
              <p class="card-text">Our salmon is marininaded in our special sauce.</p>
              <p class="card-text">$17.99 </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-3">
          <div class="card text-white">
            <img class="card-img" src="images/fav4.jpg" alt="Card image"/>
            <div class="card-img-overlay overlay">
              <h4 class="card-title">Chicken Poi</h4>
              <p class="card-text">This chicken dish is made with , sweet and spicy sauce.</p>
              <p class="card-text">$9.99</p>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-3">
          <div class="card text-white">
            <img class="card-img" src="images/fav5.jpg" alt="Card image"/>
            <div class="card-img-overlay overlay">
              <h4 class="card-title">Hot Wings</h4>
              <p class="card-text">Spicy Hot Wings filled with flavorful spices with the option of 20 dipping sauces.</p>
              <p class="card-text">$7.99</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-3">
          <div class="card text-white">
            <img class="card-img" src="images/fav6.jpg" alt="Card image"/>
            <div class="card-img-overlay overlay">
              <h4 class="card-title">Fenel Roasted Chicken</h4>
              <p class="card-text">This is a natural herb seasoned dish.</p>
              <p class="card-text">$9.99</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-3">
          <div class="card text-white">
            <img class="card-img" src="images/fav7.jpg" alt="Card image"/>
            <div class="card-img-overlay overlay">
              <h4 class="card-title">Tenderloin</h4>
              <p class="card-text">Tender tenderloin prepared with fresh herbs and spices with a stuffed red pepper and asparagus.</p>
              <p class="card-text">$23.99</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-3">
          <div class="card text-white">
            <img class="card-img" src="images/fav8.jpg" alt="Card image"/>
            <div class="card-img-overlay overlay">
              <h4 class="card-title">Ribeye</h4>
              <p class="card-text">The ribeye is a major size platter made special for meatlovers.</p>
              <p class="card-text">$20.99</p>
            </div>
            
          </div>
          
        </div>

      </div>

    </div>
     </div>
  </div>


  
  );

export default FavoriteGallery;