import React from "react";

const Ambassador = () => {
  return (
    <div>
      <div className="borderfull ambassador pt-10 pb-[4rem] pr-[8rem] pl-[4rem] flex flex-row-reverse items-center gap-9">
        <div className="w-[auto] h-auto">
          <img
            className="h-[100%] w-[100%] rounded-lg"
            src="https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-best-gear.jpg"
          />
        </div>

        <div className="py-[6.5625rem]">
          <h2 className="font-bold text-[#191919] text-[2.25rem] mb-[2.25rem]">
            BRINGING YOU THE <span className="text-[#d87d4a]">BEST</span>
            <br />
            AUDIO GEAR
          </h2>
          <p className="text-[0.9575rem] text-[rgba(0,0,0,0.5)] leading-[1.66]">
            Located at the heart of New York City, Audiophile is the premier
            store for
            <br /> high end headphones, earphones,speakers,and audio
            accessories. We
            <br /> have a large showroom and luxury demonstration rooms
            available for
            <br /> you to browse and experience a wide range of our products.
            Stop by our
            <br /> store to meet some of the fantastic people who make
            Audiophile the
            <br /> best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ambassador;
