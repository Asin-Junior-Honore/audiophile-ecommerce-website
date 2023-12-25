import React from "react";
import DataContext from "../Context/DataContext";
import { useContext } from "react";

const PlentyOrder = () => {
  const { cart, setShowmore } = useContext(DataContext);
  return (
    <div className="bg-[#f1f1f1] rounded-md toshow">
      {cart.map((product, index) => {
        return (
          <div
            className="p-details flex justify-center w-[100%] items-center gap-5 p-[1.5rem]"
            key={index}
          >
            <div className="h-[80px]">
              <img
                src={product.imgSrc}
                className="h-[100%] w-[100%] rounded-md"
              />
            </div>

            <div className="w-[190px]">
              <h4>{product.ShortName} </h4>
              <p>{`$ ${product.price}`} </p>
            </div>

            <p className="  inline-block py-2 px-3 font-bold text-[ 0.8125rem]">
              {`x${product.quantity}`}
            </p>
          </div>
        );
      })}
      <span className=" flex flex-col items-center">
        <hr className=" mb-[0.5rem] h-[2px] bg-[rgba(0,0,0,0.1)] w-[80%]" />
        <p
          className=" text-[rgba(0,0,0,0.5)] text-[0.95rem] pb-5 cursor-pointer  tracking-[0.0625rem] hover:underline"
          onClick={() => {
            setShowmore(false);
          }}
        >
          view less
        </p>
      </span>
    </div>
  );
};

export default PlentyOrder;
