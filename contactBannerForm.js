
import React from 'react';
import { link } from 'react-router-dom';
import './contactBanner.styles.css';



const ContactBannerForm = () => (
         <div>
  <div ClassName="container">
<div className="row mt-5">
      <div className="col-md-6 mx-auto text-center">
          <h2 className="text-dark">Contact / Registration</h2>
        </div>
      </div>
     </div>
   <div className="container py-3" id="contact">
      <div className="row">
        <div className="col-md-4">
          <div className="card p-2" id="card-contact1">
            <div className="card-body">
              <h4>Get In Touch</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio!</p>
              <h4>Address</h4>
            <p>12323 Sample Bvd. Belleville, Mi 00000</p>
              <h4>Email</h4>
              <p><span><a className="text-dark" href="mailto:rwebdesigns@outlook.com" target="_top">ultimeateatpantry@test</a></span></p>
              <h4>Phone</h4>
              <p><span><a href="tel+123-456-7890">(123)456-7890</a></span></p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card p-4"id="card-contact2">
            <div className="card-body">
              <h3 className="text-center">Please fill out this form to contact us.</h3>
              <hr/>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" class="form-control" placeholder="First Name"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" class="form-control" placeholder="Last Name"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" class="form-control" placeholder="Email"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" class="form-control" placeholder="Phone Number"/>
                  
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea class="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="submit" value="Submit" class="btn btn-green btn-block"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  </div>
  </div>
);

export default ContactBannerForm;