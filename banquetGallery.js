import React from 'react';
import { link } from 'react-router-dom';
import './banquetGallery.styles.css';




const BanquetGallery = () => (

  <div ClassName="container">
  <div className ="container">
  <div className="row text-center mt-5">
    <div className="col-lg-4 mb-2">
      <img src="images/banquetAsmall.jpg" alt="banquet A" class="img-fluid"/>
      <h3 className="banquet-text mt-2">Banquet Room A</h3>
      <p>Banquet Hall Room A will accomodate for a guest capacity of up to 75 guests.</p>
    </div>
    
    <div className="col-lg-4 mb-2">
      <img src="images/banquetBsmall.jpg" alt="banquet B" class="img-fluid"/>
      <h3 className="banquet-text mt-2">Banquet Room B</h3>
      <p>This banquet room will accomodate for guest capacity of up to 175 guests.</p>

    </div>
    

    <div className="col-lg-4 mb-2">
      <img src="images/banquet-csmall.jpg" alt="banquet c" class="img-fluid"/>
      <h3 className="banquet-text mt-2">Banquet Room C</h3>
      <p>This banquet room will accomodate for guest capacity of up to 400 guests.
      </p>
    </div>
    </div>
  

  <div className="row text-center">
    <div className="col-lg-4 mb-2">
      <img src="images/tent-pond.jpg" alt="tent A " class="img-fluid"/>
      <h3 className="banquet-text mt-2">Tent A</h3>
      <p>This tent will accomodate for a guest capacity of up to 300 guests. It is located on our grounds with a beautiful pond view.</p>
    </div>
    
    <div className="col-lg-4 mb-2">
      <img src="images/tent-table1.jpg" alt="tent B" class="img-fluid"/>
      <h3 class="banquet-text mt-2">Tent B</h3>
      <p>This tent will accomodate for guest capacity of up to 600 guests. It is located on our grounds with a tranquil view of the creek.</p>

    </div>
    

    <div className="col-lg-4 mb-2">
      <img src="images/table.jpg" alt="tent " class="img-fluid"/>
      <h3 className="banquet-text mt-2">Tent C</h3>
      <p>This banquet room will accomodate for guest capacity of up to 800 guests.It is located on our grounds with breath taking views of the Lake.</p>
      
    </div>

  </div>

</div>
</div>











    



  );

export default BanquetGallery;