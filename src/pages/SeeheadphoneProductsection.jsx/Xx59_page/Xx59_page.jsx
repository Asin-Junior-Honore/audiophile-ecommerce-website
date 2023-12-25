import React from "react";
import Goback from "../Goback";
import Ambassador from "../../1.home/Ambassador";
import DataContext from "../../../Context/DataContext";
import { useContext } from "react";
import HomeGadget from "../../1.home/HomeGadget";
import Footer from "../../../components/Footer";
import ExtraearPhone from "../../SeeearphoneProductselected.jsx/ExtraearPhone";
import { ToastContainer } from "react-toastify";

const Xx59_page = () => {
  const { final, Add, add, Minus, AddtoCart } = useContext(DataContext);
  return (
    <div>
      <Goback />

      <div>
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
                  <div className="lg:w-[500px] w-[auto]">
                    <img
                      className="h-[100%] w-[100%] rounded-lg"
                      src={item.imgSrc}
                    />
                  </div>
                  <div className="lg:py-[6.5625rem] py-[0.5625rem] lg:w-[450px]  w-auto text-left  lg:px-0">
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
                      <ToastContainer />
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
            These headphones have been created from durable, high-quality
            materials tough
            <br />
            enough to take anywhere. Its compact folding design fuses comfort
            and minimalist style
            <br />
            making it perfect for travel. Flawless transmission is assured by
            the latest wireless
            <br />
            technology engineered for audio synchronization with videos.
          </p>
          <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)] font-normal mt-[1.5rem]">
            More than a simple pair of headphones, this headset features a pair
            of built-in
            <br />
            microphones for clear, hands-free calling when paired with a
            compatible smartphone.
            <br />
            Controlling music and calls is also intuitive thanks to easy-access
            touch buttons on the
            <br />
            earcups. Regardless of how you use the XX59 headphones, you can do
            so all day thanks
            <br />
            to an impressive 30-hour battery life that can be rapidly recharged
            via USB-C.
            <br />
          </p>
        </div>

        <div className="inthebox">
          <h2 className="font-bold text-[2rem] mb-4">IN THE BOX</h2>

          <div className=" space-y-2">
            <div className="flex items-center">
              <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
              <p className="text-[rgba(0,0,0,0.5)]">Headphone Unit</p>
            </div>

            <div className="flex items-center">
              <li className="text-[#d87d4a] font-bold list-none mr-3">2x</li>
              <p className="text-[rgba(0,0,0,0.5)]">Replacement Earcups</p>
            </div>

            <div className="flex items-center">
              <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
              <p className="text-[rgba(0,0,0,0.5)]">User Manual</p>
            </div>

            <div className="flex items-center">
              <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
              <p className="text-[rgba(0,0,0,0.5)]">3.5mm 5m Audio Cable</p>
            </div>
          </div>
        </div>
      </div>

      <div className="parent borderfull pt-10 pb-[4rem] pr-[10rem] pl-[4em] relative h-[100%] grid lg:grid-cols-[auto,auto] grid-cols-[auto] gap-3 mt-5 product-gallery">
        <div className="speaker speaker2 relative h-[100%] overflow-hidden">
          <img
            className="lg:h-[100%] w-[auto] rounded-lg hidden"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-xx59-headphones/desktop/image-gallery-1.jpg"
          />

          <img
            className="h-[100%] w-[auto] rounded-lg phone-image"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-xx59-headphones/mobile/image-gallery-1.jpg"
          />
        </div>

        <div className="speaker  speaker2 relative h-[100%] overflow-hidden row-span-2">
          <img
            className="lg:h-[100%] w-[auto] rounded-lg hidden"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-xx59-headphones/desktop/image-gallery-3.jpg"
          />
          <img
            className="h-[100%] w-[auto] rounded-lg phone-image"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-xx59-headphones/mobile/image-gallery-2.jpg"
          />
        </div>

        <div className="speaker speaker2 w-[100%] relative h-[100%] overflow-hidden ">
          <img
            className="lg:h-[100%] w-[auto] rounded-lg hidden"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-xx59-headphones/desktop/image-gallery-2.jpg"
          />
          <img
            className="h-[100%] w-[auto] rounded-lg phone-image"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-xx59-headphones/mobile/image-gallery-3.jpg"
          />
        </div>
      </div>
      <Ambassador />
      <ExtraearPhone />
      <HomeGadget />
      <Footer />
    </div>
  );
};

export default Xx59_page;
