import React from "react";

const SpeakerContent = () => {
  return (
    <div className=" borderfull pt-10 pb-[4rem] pr-[10rem] pl-[4em] flex  gap-20 product-content">
      <div className="features">
        <h2 className="font-bold text-[2rem] mb-4">FEATURES</h2>
        <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)] font-normal">
          Connect via Bluetooth or nearly any wired source. This speaker
          features optical, digital
          <br />
          coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you
          to have up to five
          <br />
          wired source devices connected for easy switching. Improved bluetooth
          technology
          <br />
          offers near lossless audio quality at up to 328ft (100m).
        </p>
        <p className="text-[0.9375rem] text-[rgba(0,0,0,0.5)] font-normal mt-[1.5rem]">
          Discover clear, more natural sounding highs than the competition with
          ZX9’s signature
          <br />
          planar diaphragm tweeter. Equally important is its powerful
          room-shaking bass courtesy
          <br />
          of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal
          sound quality whether in a
          <br />
          large room or small den. Furthermore, you will experience new
          sensations from old songs
          <br />
          since it can respond to even the subtle waveforms.
          <br />
        </p>
      </div>

      <div className="inthebox">
        <h2 className="font-bold text-[2rem] mb-4">IN THE BOX</h2>

        <div className=" space-y-2">
          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">2x</li>
            <p className="text-[rgba(0,0,0,0.5)]">Speaker Unit</p>
          </div>

          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">2x</li>
            <p className="text-[rgba(0,0,0,0.5)]">Speaker Cloth Panel</p>
          </div>

          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
            <p className="text-[rgba(0,0,0,0.5)]">User Manual</p>
          </div>

          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
            <p className="text-[rgba(0,0,0,0.5)]">3.5mm 10m Audio Cable</p>
          </div>
          <div className="flex items-center">
            <li className="text-[#d87d4a] font-bold list-none mr-3">1x</li>
            <p className="text-[rgba(0,0,0,0.5)]">10m Optical Cable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerContent;
