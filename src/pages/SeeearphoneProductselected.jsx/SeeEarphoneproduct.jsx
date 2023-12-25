import React from "react";
import { Link } from "react-router-dom";
import Selectedearphone from "./Selectedearphone";
import EarphoneContent from "./EarphoneContent";
import Goback from "../SeeheadphoneProductsection.jsx/Goback";
import EarphoneGallery from "./EarphoneGallery";
import ExtraearPhone from "./ExtraearPhone";
import HomeGadget from "../1.home/HomeGadget";
import Ambassador from "../1.home/Ambassador";
import Footer from "../../components/Footer";
const SeeEarphoneproduct = () => {
  return (
    <div>
      <Link to={"/"}>
        <Goback />
      </Link>
      <Selectedearphone />
      <EarphoneContent />
      <EarphoneGallery />
      <ExtraearPhone />
      <HomeGadget />
      <Ambassador />
      <Footer />
    </div>
  );
};

export default SeeEarphoneproduct;
