import React from "react";
import { link } from "react-router-dom";
import "./contactBanner.styles.css";

const ContactBannerForm = () => (
  <div>
    <div ClassName="container">
      <div className="row mt-5">
        <div className="col-md-6 mx-auto text-center">
          <h2 className="text-dark">UEMP Culinary Art School Registration</h2>
        </div>
      </div>
    </div>
    <div className="container py-3" id="contact">
      <div className="col-md-12">
        <div className="card p-4" id="card-contact2">
          <div className="card-body">
            <h3 className="text-center">
              Register for Classes & Apply for UEMP Scholarship
            </h3>
            <hr />
            <form className="mb-5">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="firstname">First Name</label>
                  <input type="name" class="form-control" id="firstname" />
                </div>
                <div className="form-group col-md-6">
                  <label for="lastname">Last Name</label>
                  <input type="name" class="form-control" id="lastname" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div className="form-group col-md-6">
                  <label for="phone number">Phone Number</label>
                  <input type="phone" class="form-control" id="phoneNumber" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>Michigan</option>
                    <option>Ohio</option>
                    <option>Wisconsin</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
              </div>
              <div class="form-row">
                <div className="form-group col-md-12">
                  <label for="inputState">Classes</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>Homemade Pasta</option>
                    <option>Wedding Menu Planning</option>
                    <option>Cake Decorating 101</option>
                    <option>Learn how to cook Mexican Food</option>
                    <option>Delicious Recipes for Morrocan food</option>
                    <option>10 Recipes for Salads</option>
                    <option>Event Planning 101</option>
                    <option>Fining Dining Etiquette</option>
                    <option>Photography 101</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className="form-row">
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />

                    <label class="form-check-label" for="gridCheck">
                      Apply for Scholarship
                    </label>
                  </div>
                </div>
              </div>{" "}
              <div>
                <h5>
                  In order to be considered for the UEMP Scholarship you will
                  need to write a 250 word essay. Your essay should be about why
                  you should recieve the scholarship. Please upload your essay
                  below.
                </h5>
              </div>
              <br />
              <div className="form-group">
                <label for="exampleFormControlFile1">
                  Upload Scholarship Essay
                </label>
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
              <br />
              <button
                type="submit"
                value="Submit"
                class="btn btn-green mt-5 btn-block mb-3"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactBannerForm;
