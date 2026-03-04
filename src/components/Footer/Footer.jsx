import React from "react";
import csLogo from "../../assets/logo.png";
import xImg from "../../assets/x.png"
import iImg from "../../assets/i.png"
import fImg from "../../assets/f.png"
import gImg from "../../assets/m.png"

const Footer = () => {
  return (
    <div className="bg-black py-20">
      <div className="w-11/12 mx-auto  flex flex-col md:flex-row justify-between gap-10">
        <div className="space-y-3 flex-2 text-justify">
          <a className="font-bold text-2xl text-center justify-center md:justify-start md:text-start w-full flex items-center gap-2">
            <img className="w-8" src={csLogo} alt="" />
            <p className="text-white">CS — Ticket System</p>
          </a>
          <p className="text-[#A1A1AA]">
            Our Customer Support Zone is dedicated to providing quick and
            reliable assistance for all your service needs. We aim to resolve
            issues efficiently and ensure a smooth experience for every
            customer. Our support team is available to guide you through ticket
            submissions, updates, and solutions. Your satisfaction is our
            priority, and we continuously work to improve our services. Thank
            you for trusting our platform to support your concerns.
          </p>
        </div>
        <div className="text-[#A1A1AA] space-y-3 flex-1">
            <h1 className="font-bold text-white">Company</h1>
            <p>About Us</p>
            <p>Our Vision</p>
            <p>Contact Sales</p>
        </div>
        <div className="text-[#A1A1AA] space-y-3 flex-1">
            <h1 className="font-bold text-white">Services</h1>
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
        </div>
        <div className="text-[#A1A1AA] space-y-3 flex-1">
            <h1 className="font-bold text-white">Information</h1>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Join Us</p>
        </div>
        <div className="text-[#A1A1AA] space-y-3 flex-1">
            <h1 className="font-bold text-white">Social Links</h1>
            <div className="flex items-center justify-start gap-2">
                <img src={xImg} alt="" />
                <p>@CS — Ticket System</p>
            </div>
            <div className="flex items-center justify-start gap-2">
                <img src={iImg} alt="" />
                <p>@CS — Ticket System</p>
            </div>
            <div className="flex items-center justify-start gap-2">
                <img src={fImg} alt="" />
                <p>@CS — Ticket System</p>
            </div>
            <div className="flex items-center justify-start gap-2">
                <img src={gImg} alt="" />
                <p>support@csz.com</p>
            </div>
        </div>
      </div>
      <hr className="w-11/12 mx-auto border-gray-800 my-10" />
      <div className="text-center">
            <small className="text-gray-400">&copy; 2026 CS — Ticket System. All Rights Reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
