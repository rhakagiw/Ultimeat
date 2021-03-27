

import React, { Component } from 'react';
 import TentBanner from './tentBanner.js';
import MenuGallery from './Menu/menuGallery.js';
import MenuBannerFooter from './Menu/menuBannerFooter.js';





class Menu extends Component {
  render() {
    return (
        <div>
        
          <TentBanner/>
          <MenuGallery/>
  
          <MenuBannerFooter/>
        </div>
    );
  }
}

export default Menu;