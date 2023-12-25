import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import DataContext from "../Context/DataContext";
import { Link } from "react-router-dom";
const ItemsinCart = () => {
  const {
    cart,
    cartIsvisible,
    ShowCart,
    ClearCart,
    IncrementQuantity,
    DecremtQuantity,
  } = useContext(DataContext);

  return (
    <div className="modal relative">
      {cartIsvisible ? (
        <div
          className=" bg-[rgba(0,0,0,0.5)] z-50 h-screen overflow-y-auto w-full fixed left-0 top-0"
          onClick={() => ShowCart()}
        >
          {cart == 0 ? (
            <div className="empty bg bg-white h-[190px] w-[350px] rounded-lg lg:right-0 flex justify-center flex-col absolute lg:left-[40em] left-[1.30rem] right-[1.80rem] top-[5em] items-center">
              <p className="pb-5 font-bold text-lg">Your cart is empty</p>
              <span className="text-6xl">
                <IoCartOutline />
              </span>
            </div>
          ) : (
            <div
              className="un-empty  bg flex bg-[#fff] py-[2em] lg:px-[2em] px-[1em] rounded-lg   justify-between flex-col absolute lg:left-[40em] top-[5em] items-center left-[10px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex justify-between items-center lg:gap-44">
                  <h3>
                    CART (
                    {cart.reduce(
                      (value, product) => value + product.quantity,
                      0
                    )}
                    )
                  </h3>
                  <p
                    className="underline text-lg cursor-pointer"
                    onClick={() => {
                      ClearCart();
                    }}
                  >
                    Remove All
                  </p>
                </div>

                {cart.map((product, index) => {
                  return (
                    <div
                      className=" flex justify-center items-center lg:gap-20"
                      key={index}
                    >
                      <div className="flex justify-center items-center lg:gap-20">
                        <div className="flex justify-center items-center gap-5 py-5">
                          <div className="lg:h-[80px] h-[60px]">
                            <img
                              src={product.imgSrc}
                              alt=""
                              className="h-[100%] w-[100%] rounded-md"
                            />
                          </div>
                          <div className="w-[190px]">
                            <h4 className="text-[15px]">
                              {product.ShortName}{" "}
                            </h4>
                            <p>{`$ ${product.price}`} </p>
                          </div>
                        </div>

                        <span className="flex space-x-5">
                          <div className="flex items-center bg-[#f1f1f1] ">
                            <button
                              className=" calc-hover inline-block py-2 px-3 font-bold uppercase text-[ 0.8125rem]"
                              onClick={() => {
                                DecremtQuantity(product.id);
                              }}
                            >
                              -
                            </button>
                            <p className="  inline-block py-2 px-3 font-bold text-[ 0.8125rem]">
                              {product.quantity}
                            </p>
                            <button
                              className="calc-hover  inline-block py-2 px-3 font-bold uppercase text-[ 0.8125rem]"
                              onClick={() => {
                                IncrementQuantity(product);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-between gap-56">
                  <p>TOTAL</p>
                  <p className="font-bold text-lg ">
                    {`$ ${cart.reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    )}`}
                  </p>
                </div>

                <Link to={"/checkout"}>
                  <div
                    className="checkout btnhovertwo"
                    onClick={() => {
                      ShowCart();
                    }}
                  >
                    <button className=" cursor-pointer">check-out</button>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ItemsinCart;
