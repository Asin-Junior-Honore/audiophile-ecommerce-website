import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Goback = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:py-[5rem] lg:pr-[8rem] lg:pl-[5rem]  lg:pb-[3rem] pb-[1rem]  pt-[3rem] px-[1em] ">
      <h4
        className="text-[0.9375rem] font-normal text-[rgba(0,0,0,0.5)] cursor-pointer inline-block tracking-[0.0625rem] hover:underline"
        onClick={() => navigate(-1)}
      >
        GO BACK
      </h4>
    </div>
  );
};

export default Goback;
