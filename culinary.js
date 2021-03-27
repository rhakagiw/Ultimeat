import React, { Component } from 'react';
import CulinaryBanner from './Home/Culinary/culinaryBanner';
import CulinaryAbout from './Home/Culinary/culinaryAbout';
import CulinaryClasses from './Home/Culinary/culinaryClasses';

class Culinary extends Component {
  render() {
    return (
         <div>
        <CulinaryBanner/>
        <CulinaryAbout/>
        <CulinaryClasses/>
         </div>





    );
  }
}

export default Culinary;