import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext";
const Extraheadphones = () => {
  const { setUserselect, btn } = useContext(DataContext);

  const Show = (stocks) => {
    setUserselect(stocks);
  };
  const Itemsdetails = [
    {
      id: "XX99 MARK I",
      imgSrc:
        "https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-xx99-mark-one-headphones.jpg",
      productName: "XX99 MARK I",
      href: "/xx9headpone_details",
    },

    {
      id: "XX59",
      imgSrc:
        "https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-xx59-headphones.jpg",
      productName: "XX59",
      href: "/xx59headpone_details",
    },
    {
      id: "Zx9",
      imgSrc:
        "https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-zx9-speaker.jpg",
      productName: "ZX9 SPEAKER",
      href: "/speakers_details",
    },
  ];

  return (
    <div className="">
      <div>
        <h1 className="text-center font-bold text-[2rem] leading-[1.33] mt-7">
          YOU MAY ALSO LIKE
        </h1>
      </div>
      <div className="parent borderfull pt-10 pb-[4rem] pr-[10rem] pl-[4em] flex gap-10 mt-[2.5rem] extras ">
        {Itemsdetails.map((item, index) => {
          return (
            <div className="text-center" key={index}>
              <div className="lg:h-[300px] h-auto">
                <img
                  className="h-[100%] w-[100%] rounded-lg"
                  src={item.imgSrc}
                  alt="goldheadphone"
                />
              </div>
              <h3 className="font-bold text-[1.5rem] my-[1.5rem] tracking-[0.1069rem]">
                {item.productName}
              </h3>
              <span>
                <Link to={item.href}>
                <button
                  className="btnhovertwo py-2 px-6 bg-[#d87d4a] font-bold uppercase text-[ 0.8125rem] text-white"
                  onClick={() => {
                    Show(item.id);
                    btn();
                  }}
                >
                  see produt
                </button>
                </Link>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Extraheadphones;
