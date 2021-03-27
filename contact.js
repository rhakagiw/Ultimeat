// Contact.js

import React, { Component } from 'react';
import ContactBanner from './Contact/contactBanner';
import ContactBannerForm from './Contact/contactBannerForm';
import UempBanner from './Home/uempBanner';
import ContactTeam from './Contact/contactTeam';
import RegistrationForm from './Contact/registrationForm';

class Contact extends Component {
  render() {
    return (
        <div>
          <ContactBanner/>
          <ContactBannerForm/>
          <RegistrationForm/>
             <UempBanner/>
             <ContactTeam/>
        </div>
    );
  }
}

export default Contact;