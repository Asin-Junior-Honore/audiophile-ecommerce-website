import React from "react";
import { Link } from "react-router-dom";
import Goback from "../SeeheadphoneProductsection.jsx/Goback";
import SelectedSpeaker from "./SelectedSpeaker";
import SpeakerContent from "./SpeakerContent";
import SpeakerGallery from "./SpeakerGallery";
import Extraspeakers from "./Extraspeakers";
import HomeGadget from "../1.home/HomeGadget";
import Ambassador from "../1.home/Ambassador";
import Footer from "../../components/Footer";
const SeespeakerProductselect = () => {
  return (
    <div>
      <Link to={"/"}>
        <Goback />
      </Link>
      <SelectedSpeaker />
      <SpeakerContent />
      <SpeakerGallery />
      <Extraspeakers />
      <HomeGadget />
      <Ambassador />
      <Footer />
    </div>
  );
};

export default SeespeakerProductselect;
