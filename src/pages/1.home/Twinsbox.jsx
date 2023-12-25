import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import { Link } from "react-router-dom";
const Twinsbox = () => {
  const { setUserselect, btn } = useContext(DataContext);
  const Show = (stocks) => {
    setUserselect(stocks);
  };

  const Itemsdetails = [
    {
      id: "YX1",
      imgSrc:
        "https://audiophile-ecommerce-mbart13.vercel.app/images/home/desktop/image-earphones-yx1.jpg",
      productName: "YX1 EARPHONES",
    },
  ];

  return (
    <div>
      {Itemsdetails.map((item, index) => {
        return (
          <div
            className="borderfull pt-10 pb-[4rem] pr-[8rem] pl-[4rem]  grid grid-cols-2 gap-9 homeearpods"
            key={index}
          >
            <div className="w-[auto]">
              <img
                className="h-[100%] w-[100%] top-[5em] rounded-lg"
                src={item.imgSrc}
              />
            </div>
            <div className="bg-[#f1f1f1] py-[6.5625rem]  pl-[5.5rem] h-[100%] rounded-lg">
              <h3 className="font-bold text-[#191919] text-[1.75rem]">
                {item.productName}
              </h3>
              <span className="mt-7 block">
                <Link to="/earphones_seeproduct">
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
        );
      })}
    </div>
  );
};

export default Twinsbox;
