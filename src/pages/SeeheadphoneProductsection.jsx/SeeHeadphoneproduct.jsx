import React from "react";
import Goback from "./Goback";
import Selectedheadphone from "./Selectedheadphone";
import HeadphoneContent from "./HeadphoneContent";
import Galllery from "./Galllery";
import Extraheadphones from "./Extraheadphones";
import HomeGadget from "../1.home/HomeGadget";
import Ambassador from "../1.home/Ambassador";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const SeeHeadphoneproduct = () => {
  return (
    <div>
      <Link to={"/"}>
        <Goback />
      </Link>
      <Selectedheadphone />
      <HeadphoneContent />
      <Galllery />
      <Extraheadphones />
      <HomeGadget />
      <Ambassador />
      <Footer />
    </div>
  );
};

export default SeeHeadphoneproduct;
