import React from "react";
import DataContext from "../Context/DataContext";
import { useContext } from "react";
const SingleOrder = () => {
  const { cart } = useContext(DataContext);
  return (
    <div className="bg-[#f1f1f1] rounded-md toshow ">
      <div className="p-details flex justify-center w-[100%] items-center gap-5 p-[1.5rem]">
        <div className="h-[80px]">
          <img src={cart[0]?.imgSrc} className="h-[100%] w-[100%] rounded-md" />
        </div>

        <div className="w-[190px]">
          <h4>{cart[0]?.ShortName} </h4>
          <p>{`$ ${cart[0]?.price}`} </p>
        </div>

        <p className="  inline-block py-2 px-3 font-bold text-[ 0.8125rem]">
          {`x${cart[0]?.quantity}`}
        </p>
      </div>
    </div>
  );
};

export default SingleOrder;
