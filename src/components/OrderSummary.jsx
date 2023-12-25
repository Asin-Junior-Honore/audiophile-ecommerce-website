import { useContext } from "react";
import DataContext from "../Context/DataContext";
const OrderSummary = () => {
  const { cart, debt, setSuccessmodal } = useContext(DataContext);
  return (
    <>
      <div className="inthebox bg-white rounded-md  py-[1.5rem] px-[1rem] w-[100%] h-[100%]">
        <h2 className="font-bold text-[1.125rem] tracking-[0.0806rem]  mb-4">
          SUMMARY
        </h2>

        {cart == 0 ? (
          <div className="mb-4 ">
            <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)] text-center">
              No Items in cart
            </p>
          </div>
        ) : (
          <div className="mb-4 ">
            {cart.map((product, index) => {
              return (
                <div
                  className="flex justify-center items-center gap-5 py-5"
                  key={index}
                >
                  <div className="h-[80px] w-[80px]">
                    <img
                      src={product.imgSrc}
                      alt=""
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
          </div>
        )}

        <div className=" space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)]">TOTAL</p>
            <p className="text-[1.125rem] text-[#191919] font-bold leading-[1.66]">
              {`$ ${cart.reduce(
                (total, product) => total + product.price * product.quantity,
                0
              )}`}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)]">SHIPPING</p>
            <p className="text-[1.125rem] text-[#191919] font-bold leading-[1.66]">
              $ 50
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)]">
              VAT (INCLUDED)
            </p>
            <p className="text-[1.125rem] text-[#191919] font-bold leading-[1.66]">
              $ {`${debt.fvat}`}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)]">
              GRAND TOTAL
            </p>
            <p className="text-[1.125rem] text-[#d87d4a] font-bold leading-[1.66]">
              $ {`${debt.fgrandtotal}`}
            </p>
          </div>
        </div>
        <div>
          <button
            type="submit"
            form="form"
            className={
              cart == 0
                ? "checkout-pay-btn btnhovernever text-white font-bold"
                : "checkout-pay-btn btnhovertwo text-white font-bold"
            }
            onClick={() => {
             
            }}
          >
            continue & pay
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
