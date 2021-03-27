import React, { Component } from 'react';
import Header from './header';
import Banner from '../components/Home/banner';
import OurStory from './Home/ourStory';
import MiniGallery from './Home/miniGallery';
import FavoriteBanner from './Home/favoriteBanner';
import FavoriteGallery from './Home/favoriteGallery';
import UempBanner from './Home/uempBanner';



class Home extends Component {
  render() {
    return (
    
        <div>
        <Banner/>
        <OurStory/>
        <MiniGallery/>
        <FavoriteBanner/>
        <FavoriteGallery/>
        <UempBanner/>
    </div>
    );
  }
}

export default Home;