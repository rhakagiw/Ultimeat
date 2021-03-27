import React, { Component } from "react";
import BanquetBanner from "./banquetBanner";
import BanquetGallery from "./banquetGallery";
import Guidelines from "./Menu/guidlines";
import BanquetMenu from "./Menu/banquetMenu";
import BanquetBannerFooter from "./Menu/banquetBannerFooter";



class Banquet extends Component {
  render() {
    return (
      <div>
        <BanquetBanner />
        <BanquetGallery />
        <Guidelines />
        <BanquetMenu />
        <BanquetBannerFooter/>
      </div>
    );
  }
}

export default Banquet;
