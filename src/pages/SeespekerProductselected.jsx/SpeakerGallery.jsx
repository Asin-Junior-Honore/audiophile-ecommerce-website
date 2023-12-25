import React from "react";

const SpeakerGallery = () => {
  return (
    <div className="parent borderfull pt-10 pb-[4rem] pr-[10rem] pl-[4em] relative h-[100%] grid lg:grid-cols-[auto,auto] grid-cols-[auto] gap-3 mt-5 product-gallery">
      <div className="speaker speaker2 relative h-[100%] overflow-hidden">
        <img
          className="lg:h-[100%] w-[auto] rounded-lg hidden"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx9-speaker/desktop/image-gallery-1.jpg"
        />

        <img
          className="h-[100%] w-[auto] rounded-lg phone-image"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx9-speaker/mobile/image-gallery-1.jpg"
        />
      </div>

      <div className="speaker speaker2  relative h-[100%] overflow-hidden row-span-2">
        <img
          className="lg:h-[100%] w-[auto] rounded-lg hidden"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx9-speaker/desktop/image-gallery-3.jpg"
        />

        <img
          className="h-[100%] w-[auto] rounded-lg phone-image"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx9-speaker/mobile/image-gallery-2.jpg"
        />
      </div>

      <div className="speaker speaker2 w-[100%] relative h-[100%] overflow-hidden ">
        <img
          className="lg:h-[100%] w-[auto] rounded-lg hidden"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx9-speaker/desktop/image-gallery-2.jpg"
        />
        <img
          className="h-[100%] w-[auto] rounded-lg phone-image"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx9-speaker/mobile/image-gallery-3.jpg"
        />
      </div>
    </div>
  );
};

export default SpeakerGallery;
