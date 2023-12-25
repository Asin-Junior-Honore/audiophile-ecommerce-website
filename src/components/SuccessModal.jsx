import React from "react";
import { MdCheckCircle } from "react-icons/md";
import DataContext from "../Context/DataContext";
import { useContext } from "react";
import PlentyOrder from "./PlentyOrder";
import { Link } from "react-router-dom";
import SingleOrder from "./SingleOrder";

const SuccessModal = () => {
  const { debt, showmore, cart, setShowmore, ClearCart } =
    useContext(DataContext);
  return (
    <div
      className="succes-modal flex  lg:p-[2rem] flex-col bg-[#fff] p-[1rem] rounded-md lg:w-[auto] w-[385px] "
      onClick={(e) => e.stopPropagation()}
    >
      <div className="">
        <MdCheckCircle className="icons text-[#d87d4a] h-[50px] w-[50px] mb-[1.5rem]" />
      </div>

      <h2 className="text-[1.5rem] mb-[1.125rem] leading-[1.125] font-bold">
        THANK YOU
        <br />
        FOR YOUR ORDER
      </h2>

      <p className="text-[0.9375rem] leading-[1.66] text-[rgba(0,0,0,0.5)] mb-[1.89rem]">
        You will receive an email confirmation shortly.
      </p>

      <div className="final-order-summary flex">
        {cart.length < 2 ? (
          <></>
        ) : (
          <p
            className={
              showmore
                ? " hidden"
                : " text-[rgba(0,0,0,0.5)] text-[0.95rem] lg:top-[62%] top-[52%] my-4 left-[35%] cursor-pointer absolute tracking-[0.0625rem] hover:underline"
            }
            onClick={() => {
              setShowmore(true);
            }}
          >
            {` and ${cart.length - 1} other item(s)`}
          </p>
        )}

        {showmore ? <PlentyOrder /> : <SingleOrder />}

        <div className="flex items-start justify-between  flex-col bg-[#191919] basis-[50%] py-[2.625rem] px-[2rem] rounded-e-md">
          <p className="text-[0.9375rem] text-[rgba(255,255,255,0.5)] mb-[0.5rem] leading-[1.77]">
            GRAND TOTAL
          </p>
          <p className="text-[1.125rem] text-[#fff] font-bold leading-[1.66]">
            $ {`${debt.fgrandtotal}`}
          </p>
        </div>
      </div>

      <div>
        <Link to="/">
          <button
            onClick={() => {
              ClearCart();
            }}
            className="checkout-pay-btn btnhovertwo text-white font-semibold mt-[4rem]"
          >
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessModal;
