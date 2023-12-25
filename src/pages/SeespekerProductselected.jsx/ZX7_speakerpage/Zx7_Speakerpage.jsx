import React from "react";

import { useContext } from "react";
import DataContext from "../../../Context/DataContext";
import Goback from "../../SeeheadphoneProductsection.jsx/Goback";
import Ambassador from "../../1.home/Ambassador";
import Footer from "../../../components/Footer";
import Extraspeakers from "../Extraspeakers";
import { ToastContainer } from "react-toastify";
const Zx7_Speakerpage = () => {
  const { final, Add, add, Minus, AddtoCart } = useContext(DataContext);
  return (
    <div>
      <div>
        <Goback />

        {final == undefined ? (
          <h1>wait</h1>
        ) : (
          <div>
            {final.map((item, index) => {
              return (
                <div
                  className="borderfull pt-10 pb-[4rem] pr-[10rem] pl-[2em] flex justify-center items-center lg:gap-20 gap-10 productpage"
                  key={index}
                >
                  <div className="lg:w-[500px] ">
                    <img
                      className="h-[100%] w-[100%] rounded-lg"
                      src={item.imgSrc}
                    />
                  </div>
                  <div className="lg:py-[6.5625rem] py-[0.5625rem] lg:w-[450px] text-left  lg:px-0">
                    <h3 className="text-[ 0.875rem] text-[#d87d4a] tracking-[0.625rem] uppercase font-normal">
                      {item.isNew}
                    </h3>

                    <h1 className=" text-[2.5rem] leading-[1.1] py-3 font-bold break-keep ">
                      {item.productName}
                    </h1>

                    <p className="text-[0.9375rem] leading-[1.7] font-normal pb-5 text-[rgba(0,0,0,0.5)] break-normal">
                      {item.productDes}
                    </p>

                    <span className="pb-[2rem] text-[1.125rem] text-[#191919] font-bold flex">
                      <p>{`$ ${item.price}`} </p>
                    </span>
                    <span className="flex space-x-5">
                      <div className="flex items-center bg-[#f1f1f1] ">
                        <button
                          className="calc-hover  inline-block py-3 px-5 font-bold uppercase text-[ 0.8125rem]"
                          onClick={() => {
                            Minus();
                          }}
                        >
                          -
                        </button>
                        <p className="  inline-block py-3 px-5 font-bold text-[ 0.8125rem]">
                          {add}
                        </p>
                        <button
                          className="calc-hover  inline-block py-3 px-5 font-bold uppercase text-[ 0.8125rem]"
                          onClick={() => {
                            Add();
                          }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btnhovertwo py-4 px-6 bg-[#d87d4a] font-bold uppercase text-[0.8125rem] text-white"
                        onClick={() => {
                          AddtoCart(item);
                        }}
                      >
                        add to cart
                      </button>
                      <ToastContainer/>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className=" borderfull pt-10 pb-[4rem] pr-[10rem] pl-[4em] flex  gap-20 product-content">
        <div className="features">
          <h2 className="font-bold text-[2rem] mb-4">FEATURES</h2>
          <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)] font-normal">
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital
            <br />
            coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you
            to have up to five
            <br />
            wired source devices connected for easy switching. Improved
            bluetooth technology
            <br />
            offers near lossless audio quality at up to 328ft (100m).
          </p>
          <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)] font-normal mt-[1.5rem]">
            Discover clear, more natural sounding highs than the competition
            with ZX9’s signature
            <br />
            planar diaphragm tweeter. Equally important is its powerful
            room-shaking bass courtesy
            <br />
            of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal
            sound quality whether in a
            <br />
            large room or small den. Furthermore, you will experience new
            sensations from old songs
            <br />
            since it can respond to even the subtle waveforms.
            <br />
          </p>
        </div>

        <div className="inthebox">
          <h2 className="font-bold text-[2rem] mb-4">IN THE BOX</h2>

          <div className=" space-y-2">
            <div className="flex items-center">
              <li className="text-[#d87d4a] font-bold list-none mr-3">2x</li>
              <p className="text-[rgba(0,0,0,0.5)]">Speaker Unit</p>
            </div>

            <div className="flex items-center">
              <li className="text-[#d87d4a] font-bold list-none mr-3">2x</li>
              <p className="text-[rgba(0,0,0,0.5)]">Speaker Cloth Panel</p>
            </div>

            <div className="flex items-center">
              <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
              <p className="text-[rgba(0,0,0,0.5)]">User Manual</p>
            </div>

            <div className="flex items-center">
              <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
              <p className="text-[rgba(0,0,0,0.5)]">3.5mm 7.5m Audio Cable</p>
            </div>
            <div className="flex items-center">
              <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
              <p className="text-[rgba(0,0,0,0.5)]">7.5m Optical Cable</p>
            </div>
          </div>
        </div>
      </div>

      <Extraspeakers />

      <div className="parent borderfull pt-10 pb-[4rem] pr-[10rem] pl-[4em] relative h-[100%] grid lg:grid-cols-[auto,auto] grid-cols-[auto] gap-3 mt-5 product-gallery">
        <div className="speaker speaker2 relative h-[100%] overflow-hidden">
          <img
            className="lg:h-[100%] w-[auto] rounded-lg hidden"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx7-speaker/desktop/image-gallery-1.jpg"
          />

          <img
            className="h-[100%] w-[auto] rounded-lg phone-image"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx7-speaker/mobile/image-gallery-1.jpg"
          />
        </div>

        <div className="speaker speaker2  relative h-[100%] overflow-hidden row-span-2">
          <img
            className="lg:h-[100%] w-[auto] rounded-lg hidden"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx7-speaker/desktop/image-gallery-3.jpg"
          />

          <img
            className="h-[100%] w-[auto] rounded-lg phone-image"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx7-speaker/mobile/image-gallery-2.jpg"
          />
        </div>

        <div className="speaker speaker2 speaker2w-[100%] relative h-[100%] overflow-hidden ">
          <img
            className="lg:h-[100%] w-[auto] rounded-lg hidden"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx7-speaker/desktop/image-gallery-2.jpg"
          />

          <img
            className="h-[100%] w-[auto] rounded-lg phone-image"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx7-speaker/mobile/image-gallery-3.jpg"
          />
        </div>
      </div>

      <Ambassador />
      <Footer />
    </div>
  );
};

export default Zx7_Speakerpage;
