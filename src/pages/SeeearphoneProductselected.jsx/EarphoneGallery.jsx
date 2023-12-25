import React from "react";

const EarphoneGallery = () => {
  return (
    <div className="parent borderfull pt-10 pb-[4rem] pr-[10rem] pl-[4em] relative h-[100%] grid lg:grid-cols-[auto,auto] grid-cols-[auto] gap-3 mt-5 product-gallery">
      <div className="person  relative h-[100%] overflow-hidden speaker speaker2">
        <img
          className="lg:h-[100%] w-[auto] rounded-lg hidden"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-yx1-earphones/desktop/image-gallery-1.jpg"
        />
        <img
          className="h-[100%] w-[auto] rounded-lg phone-image"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-yx1-earphones/mobile/image-gallery-1.jpg"
        />
      </div>

      <div className="headphone  relative h-[100%] overflow-hidden row-span-2 speaker speaker2">
        <img
          className="lg:h-[100%] w-[auto] rounded-lg hidden"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-yx1-earphones/desktop/image-gallery-3.jpg"
        />
        <img
          className="h-[100%] w-[auto] rounded-lg phone-image"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-yx1-earphones/mobile/image-gallery-2.jpg"
        />
      </div>

      <div className="swagg w-[100%] relative h-[100%] overflow-hidden speaker speaker2 ">
        <img
          className="lg:h-[100%] w-[auto] rounded-lg hidden"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-yx1-earphones/desktop/image-gallery-2.jpg"
        />
        <img
          className="h-[100%] w-[auto] rounded-lg phone-image"
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-yx1-earphones/mobile/image-gallery-3.jpg"
        />
      </div>
    </div>
  );
};

export default EarphoneGallery;
