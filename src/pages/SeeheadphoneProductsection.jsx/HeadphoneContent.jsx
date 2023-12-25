import React from "react";

const HeadphoneContent = () => {
  return (
    <div className=" borderfull pt-10 pb-[4rem] pr-[10rem] pl-[4em] flex  gap-20 product-content">
      <div className="features">
        <h2 className="font-bold text-[2rem] mb-4">FEATURES</h2>
        <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)] font-normal">
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver
          <br />
          superior comfort for those who like to enjoy endless listening. It
          includes intuitive
          <br />
          controls designed for any situation. Whether you’re taking a business
          call or just in your
          <br />
          own personal space, the auto on/off and pause features ensure that
          you’ll never miss a<br /> beat.
        </p>
        <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)] font-normal mt-[1.5rem]">
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience
          <br />
          your audio world on your terms. It lets you enjoy your audio in peace,
          but quickly interact
          <br />
          with your surroundings when you need to. Combined with Bluetooth 5. 0
          compliant
          <br />
          connectivity and 17 hour battery life, the XX99 Mark II headphones
          gives you superior
          <br />
          sound, cutting-edge technology, and a modern design aesthetic.
          <br />
        </p>
      </div>

      <div className="inthebox">
        <h2 className="font-bold text-[2rem] mb-4">IN THE BOX</h2>

        <div className=" space-y-2">
          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
            <p className="text-[rgba(0,0,0,0.5)]">Headphone Unit</p>
          </div>

          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">2x</li>
            <p className="text-[rgba(0,0,0,0.5)]">Replacement Earcups</p>
          </div>

          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
            <p className="text-[rgba(0,0,0,0.5)]">User Manual</p>
          </div>

          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
            <p className="text-[rgba(0,0,0,0.5)]">3.5mm 5m Audio Cable</p>
          </div>
          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
            <p className="text-[rgba(0,0,0,0.5)]">Travel Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadphoneContent;
