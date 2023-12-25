import React from "react";

const EarphoneContent = () => {
  return (
    <div className=" borderfull pt-10 pb-[4rem] pr-[10rem] pl-[4em] flex  gap-20 product-content">
      <div className="features">
        <h2 className="font-bold text-[2rem] mb-4">FEATURES</h2>
        <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)] font-normal">
          Experience unrivalled stereo sound thanks to innovative acoustic
          technology. With
          <br />
          improved ergonomics designed for full day wearing, these revolutionary
          earphones have
          <br />
          been finely crafted to provide you with the perfect fit, delivering
          complete comfort all day
          <br />
          long while enjoying exceptional noise isolation and truly immersive
          sound.
        </p>
        <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)] font-normal mt-[1.5rem]">
          The YX1 Wireless Earphones features customizable controls for volume,
          music, calls, and
          <br />
          voice assistants built into both earbuds. The new 7-hour battery life
          can be extended up
          <br />
          to 28 hours with the charging case, giving you uninterrupted play
          time. Exquisite
          <br />
          craftsmanship with a splash resistant design now available in an all
          new white and grey
          <br />
          color scheme as well as the popular classic black.
          <br />
        </p>
      </div>

      <div className="inthebox">
        <h2 className="font-bold text-[2rem] mb-4">IN THE BOX</h2>

        <div className=" space-y-2">
          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">2x</li>
            <p className="text-[rgba(0,0,0,0.5)]">Earphone Unit</p>
          </div>

          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">6x</li>
            <p className="text-[rgba(0,0,0,0.5)]">Multi-Size Earplugsl</p>
          </div>

          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
            <p className="text-[rgba(0,0,0,0.5)]">User Manual</p>
          </div>

          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
            <p className="text-[rgba(0,0,0,0.5)]">USB-C Charging Cable</p>
          </div>
          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
            <p className="text-[rgba(0,0,0,0.5)]">Travel Pouch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarphoneContent;
