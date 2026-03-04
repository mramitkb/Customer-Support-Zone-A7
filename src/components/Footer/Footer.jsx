import React from 'react';
import csLogo from "../../assets/logo.png";
const Footer = () => {
    return (
        <div>
            <div>
                <a className="font-bold text-2xl text-center md:text-start w-full flex items-center gap-2">
                            <img className="w-8" src={csLogo} alt="" />
                            <p>CS — Ticket System</p>
                            </a>
            </div>
        </div>
    );
};

export default Footer;