import DataContext from "../Context/DataContext";
import Goback from "../pages/SeeheadphoneProductsection.jsx/Goback";
import Footer from "../components/Footer";
import Form from "./Form";
import { useContext } from "react";
import OrderSummary from "./OrderSummary";
import SuccessModal from "./SuccessModal";
const Check_Out = () => {
  const { Successmodal, ClearCart, setSuccessmodal } = useContext(DataContext);

  return (
    <>
      <div className=" bg-[#f5f5f5]">
        {Successmodal ? (
          <div
            className=" h-screen overflow-y-auto w-full fixed left-0 top-0 flex justify-center items-center z-50 bg-[rgba(0,0,0,0.55)]"
            onClick={() => {
              ClearCart();
              setSuccessmodal(false);
            }}
          >
            <SuccessModal />
          </div>
        ) : (
          <></>
        )}
        <Goback />
        <div className="user-info_checkout flex gap-10 pt-10 pb-[4rem] pr-[8rem] pl-[5rem]">
          <div className=" pt-10 pb-[4rem] pr-[2rem] pl-[2rem] flex flex-col bg-white rounded-md ">
            <div className="inline-block">
              <h1 className="mb-2rem text-[1.80rem] font-bold">CHECKOUT</h1>
            </div>
            <div>
              <Form />
            </div>
          </div>

          <div className="inthebox bg-white rounded-md  py-[1.5rem] px-[1rem] w-[100%] h-[100%]">
            <OrderSummary />
          </div>
        </div>
        <div className=" mt-[10rem]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Check_Out;
