import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import { Link } from "react-router-dom";
const Bigspeaker = () => {
  const { setUserselect, btn } = useContext(DataContext);
  const Show = (stocks) => {
    setUserselect(stocks);
  };

  const Itemsdetails = [
    {
      id: "Zx9",
      imgSrc:
        "https://audiophile-ecommerce-mbart13.vercel.app/images/home/desktop/image-speaker-zx9.png",
      isNew: "New product",
      productName: (
        <>
          {"ZX9"} <br /> {"SPEAKER"}
        </>
      ),
      productDes: (
        <>
          {"Upgrade to premium speakers that are"}
          <br /> {"phenomenally built to deliver truly remarkable"}
          <br />
          {"sound."}
        </>
      ),
    },
  ];

  return (
    <div>
      {Itemsdetails.map((item, index) => {
        return (
          <div
            className="borderfull  lg:mt-[-6rem] pt-24  pb-28 pr-[8rem] pl-[4rem] bigspeaker"
            key={index}
          >
            <div className="bigs ">
              <div className="lg:h-[600px] h-[15.995rem]">
                <img
                  className="h-[100%] w-[100%] top-[5em] relative"
                  src={item.imgSrc}
                />
              </div>
              <div className="words mt-[3em] ml-[70px] pt-12">
                <h2 className="text-[3.25rem] tracking-[1] text-white font-medium ">
                  {item.productName}
                </h2>
                <p className="text-[0.9995rem] tracking-[1.56] font-light py-6 text-gray-200 ">
                  {item.productDes}
                </p>
                <span>
                  <Link to={"/speakers_details"}>
                    <button
                      className="btnhover py-3 px-7 text-lg text-white bg-[#191919] uppercase"
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

export default Bigspeaker;
