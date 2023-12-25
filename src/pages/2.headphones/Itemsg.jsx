import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import { Link } from "react-router-dom";
const Itemsg = () => {
  const { setUserselect, btn } = useContext(DataContext);
  const Show = (stocks) => {
    setUserselect(stocks);
  };

  const Itemsdetails = [
    {
      id: "XX99 MARK I",
      imgSrc:
        "https://audiophile-ecommerce-mbart13.vercel.app/images/category-headphones/desktop/image-xx99-mark-one.jpg",
      isNew: "New product",
      productName: (
        <>
          {"XX99 MARK I"} <br /> {"HEADPHONES "}
        </>
      ),
      productDes: (
        <>
          {" As the gold standard for headphones, the classic XX99 Mark I"}
          <br />{" "}
          {" offers detailed and accurate audio reproduction for audiophiles,"}
          <br />
          {"  mixing engineers, and music aficionados alike in studios and on"}
          <br />
          {"the go."}
        </>
      ),
    },
  ];

  return (
    <div>
      {Itemsdetails.map((item, index) => {
        return (
          <div
            className="borderfull pt-10 pb-[4rem] pr-[8rem] pl-[4rem] flex justify-center flex-row-reverse items-center lg:gap-20 gap-10 hedaphone"
            key={index}
          >
            <div className=" lg:w-[550px] ">
              <img className="h-[100%] w-[100%] rounded-lg" src={item.imgSrc} />
            </div>
            <div className="lg:py-[6.5625rem] py-[0.5625rem] para2 text-[1.7rem]">
              <h3 className="lg:text-[0.875rem] text-[#d87d4a] tracking-[0.625rem] uppercase font-normal">
                {item.isNew}
              </h3>
              <h1 className=" lg:text-[2.5rem] leading-[1.1] py-3 font-normal lg:my-0 my-6">
                <>{item.productName}</>
              </h1>
              <p className="lg:text-[0.9375rem] text-[0.8823rem] leading-[1.7] font-normal pb-5 text-[rgba(0,0,0,0.5)]">
                {item.productDes}
              </p>
              <span>
                <Link to={"/xx9headpone_details"}>
                  <button
                    className="btnhovertwo py-2 px-6 bg-[#d87d4a] font-bold uppercase text-[0.8125rem] text-white"
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
        );
      })}
    </div>
  );
};

export default Itemsg;
