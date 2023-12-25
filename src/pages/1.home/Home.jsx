import React, { useContext } from "react";
import HomeGadget from "./HomeGadget";
import Bigspeaker from "./Bigspeaker";
import { Homegadjettwo } from "./Homegadjettwo";
import Twinsbox from "./twinsbox";
import Ambassador from "./Ambassador";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext";

const Home = () => {
  const { setUserselect, btn } = useContext(DataContext);
  const Show = (stocks) => {
    setUserselect(stocks);
  };

  const Itemsdetails = [
    {
      id: "XX99",

      productName: (
        <>
          {"XX99 MARK II"} <br /> {"HEADPHONES"}
        </>
      ),
    },
  ];

  return (
    <>
      <div className="sec1-home">
        <div className="container pt-[11rem] pr-[7em] pb-[6em] w-[50%] flex justify-around text-white">
          {Itemsdetails.map((item, index) => {
            return (
              <div className="homeb1" key={index}>
                <h3 className="text-[ 0.875rem] text-[#938686] tracking-[0.625rem] uppercase font-bold">
                  New product
                </h3>
                <h1 className=" text-[3.5rem] leading-[1.1] py-3 font-bold">
                  {item.productName}
                </h1>
                <p className="homeheadpara text-[ 0.9375rem] leading-[1.7] font-normal pb-5 text-[rgba(255,255,255,0.5)]">
                  Experience natural lifelike audio and exceptional
                  <br />
                  quality made for the pasionate music <br />
                  enthusiast
                </p>
                <span>
                  <Link to={"/headphones_seeproduct"}>
                    <button
                      className="btnhover py-2 px-6 bg-[#d87d4a] font-bold uppercase text-[ 0.8125rem]"
                      onClick={() => {
                        Show(item.id);
                        btn();
                      }}
                    >
                      see produt
                    </button>
                  </Link>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <HomeGadget />
      <Bigspeaker />
      <Homegadjettwo />
      <Twinsbox />
      <Ambassador />
      <Footer />
    </>
  );
};

export default Home;
