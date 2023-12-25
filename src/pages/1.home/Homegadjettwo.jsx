import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext";
export const Homegadjettwo = () => {
  const { setUserselect, btn } = useContext(DataContext);

  const Show = (stocks) => {
    setUserselect(stocks);
  };
  const Itemsdetails = [
    {
      id: "ZX7",
      imgSrc:
        "https://audiophile-ecommerce-mbart13.vercel.app/images/home/desktop/image-speaker-zx7.jpg",
      productName: "  ZX7 SPEAKER",
    },
  ];

  return (
    <div>
      {Itemsdetails.map((item, index) => {
        return (
          <div
            className="borderfull pb-28 lg:pr-[8rem] lg:pl-[4rem]"
            key={index}
          >
            <div className="bigs2 lg:mt-[-10rem] mt-[-3rem]">
              <div className="h-auto relative -z-30 lg:p-0 px-[1rem]">
                <img
                  className="h-[100%] w-[100%] top-[5em] relative rounded-lg pic-scren lg:hidden"
                  src=" https://audiophile-ecommerce-mbart13.vercel.app/images/home/mobile/image-speaker-zx7.jpg"
                />
                <img
                  className="h-[100%] w-[100%] top-[5em] relative rounded-lg  pic-lg"
                  src="https://audiophile-ecommerce-mbart13.vercel.app/images/home/desktop/image-speaker-zx7.jpg"
                />
              </div>
              <div className="words2 mt-[-12em] ml-[70px] pt-12">
                <h2 className="text-[1.995rem] text-[#191919] font-semibold ">
                  ZX7 SPEAKER
                </h2>
                <span className="mt-5 block">
                  <Link to={"/zx7speakers_details"}>
                    <button
                      className="btnhovertwo bg-less py-3 px-11 text-lg bg-transparent uppercase "
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
            </div>
          </div>
        );
      })}
    </div>
  );
};
