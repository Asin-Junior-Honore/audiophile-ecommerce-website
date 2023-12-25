import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
const HomeGadget = () => {
  return (
    <div>
      <div className="gadejet borderfull pt-24 pb-28 flex pr-[12em] pl-[8em] items-center gadget">
        <Link to="/headphones">
          <div className="headphone">
            <div className="acessories w-[180px] relative ">
              <img
                src="https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-headphones.png"
                className="h-[100%] w-[100%] "
              />
            </div>
            <p className="para text-lg font-medium">Headphone</p>

            <p className="itemslinks text-sm flex items-center justify-center">
              shop
              <span className=" inline-block pl-[5px]">
                <IoChevronForward />
              </span>
            </p>
          </div>
        </Link>
        <Link to="/speakers">
          <div className="speakers mx-[10em] ml-[11em] mr-[12em] speaker">
            <div className=" w-[180px] acessories relative ">
              <img
                src="https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-speakers.png"
                className="h-[100%] w-[100%] "
              />
            </div>
            <p className="para text-lg font-medium">Speaker</p>

            <p className="itemslinks text-sm flex items-center justify-center">
              shop
              <span className=" inline-block pl-[5px]">
                <IoChevronForward />
              </span>
            </p>
          </div>
        </Link>

        <Link to="/earphones">
          <div className="earphones ">
            <div className=" w-[180px] acessories relative ">
              <img
                className="h-[100%] w-[100%] "
                src="https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-earphones.png"
              />
            </div>
            <p className="para text-lg font-medium">Earphone</p>

            <p className="itemslinks text-sm flex items-center justify-center">
              shop
              <span className=" inline-block pl-[5px]">
                <IoChevronForward />
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeGadget;
