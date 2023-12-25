import React from "react";
import Itens from "./Items";
import Itemsg from "./Itemsg";
import Itemsw from "./Itemsw";
import HomeGadget from "../1.home/HomeGadget";
import Ambassador from "../1.home/Ambassador";
import Footer from "../../components/Footer";

const Headphones = () => {
  return (
    <div>
      <div className="sec2-headphone ">
        <div className="container2 pt-[5rem] lg:pr-[7em] pr-[0] lg:pb-[6em] pb-[3em] w-[100%] flex justify-center items-center  text-white">
          <div className="homeb1">
            <h1 className="text-[3.5rem] leading-[1.1] tracking-[0.125rem] py-3 font-semibold">
              HEADPHONES
            </h1>
          </div>
        </div>
      </div>

      <Itens />
      <Itemsg />
      <Itemsw />
      <HomeGadget />
      <Ambassador />
      <Footer />
    </div>
  );
};

export default Headphones;
