import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Headphones", href: "/headphones", current: false },
    { name: "Speakers", href: "/speakers", current: false },
    { name: "Earphones", href: "/earphones", current: false },
  ];
  return (
    <div>
      <div className="borderfull pb-10 pr-[8rem] pl-[4rem] bg-[#191919] footer">
        <div className="text-white">
          <div className="flex justify-between items-center w-[100%] py-10">
            <div className="flex items-center">
              <h2 className=" text-white text-3xl font-bold">audiophile</h2>
            </div>
            <ul className="flex items-center lg:space-x-5 cursor-pointer">
              {navigation.map((navs, index) => {
                return (
                  <li
                    className="font-semibold text-[0.985rem] tracking-[0.125em] text-sm footerli"
                    key={index}
                  >
                    <Link to={navs.href}>{navs.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[rgba(255,255,255,0.5)] font-normal leading-[1.66] text-[0.9375rem]">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of
                <br />
                music lovers and sound specialists who are devoted to helping
                you get the most
                <br /> out of personal audio. Come and visit our demo facility -
                we’re open 7 days a<br />
                week.
              </p>
            </div>
            <span className="flex space-x-3 items-baseline mt-8 lg:mt-0">
              <FaSquareFacebook className="social" />
              <FaTwitter className="social" />
              <FaInstagram className="social" />
            </span>
          </div>
          <div className=" mt-8 text-[rgba(255,255,255,0.5)] font-normal leading-[1.66] text-[0.9375rem]">
            <p>Copyright 2021. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
