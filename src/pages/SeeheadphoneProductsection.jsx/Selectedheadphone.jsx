import React, { useContext, useEffect } from "react";
import DataContext from "../../Context/DataContext";
import { ToastContainer } from "react-toastify";
const Selectedheadphone = () => {
  const { final, Add, add, Minus, AddtoCart } = useContext(DataContext);

  return (
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
                <div className="lg:py-[6.5625rem] py-[0.5625rem] lg:w-[450px] w-[auto] text-left  lg:px-0">
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
                      className="btnhovertwo py-4 px-6 bg-[#d87d4a] font-bold uppercase text-[ 0.8125rem] text-white"
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
  );
};

export default Selectedheadphone;
