/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Amenities from "./Components/Amenities/Amenities";
import Footer from "./Components/Footer/Footer";
import Legacy from "./Components/Legacy/Legacy";
import BookVisit from "./Components/Book Visit/BookVisit";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import PriceList from "./Components/PriceList/PriceList";
import FloorPlan from "./Components/FloorPlan/FloorPlan";
import MasterPlan from "./Components/MasterPlan/MasterPlan";
import Map from "./Components/Map/Map";
import CmpFaq from "./Components/FAQs/CmpFaq";
import HomeCarousel from "./Components/Hero/HomeCarousel";
import TopUpButton from "./Components/TopUpButton/TopUpButton";
// import Faqs from "./Components/FAQs/Faqs";
function App() {
  return (
    <div>
      <Header />
      <HomeCarousel />
      <About />
      <Amenities />
      <ImageGallery />
      <PriceList />
      <FloorPlan />
      <MasterPlan />
      <CmpFaq />
      <Map />
      <BookVisit />
      <Legacy />
      <Footer />
      <TopUpButton />
    </div>
  );
}

export default App;
