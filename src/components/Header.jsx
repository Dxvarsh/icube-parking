import React from 'react';
import call from '../assets/icons/call.png';
import facebook from '../assets/icons/facebook-f.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';
import mail from '../assets/icons/mail.png';
import twitter from '../assets/icons/twitter.png';
import Navbar from './Navbar';


export default function Header() {
  
  return (
    <div className="fixed z-50 top-0 left-0 right-0">
      {/* Top Bar */}
      <div className="hidden md:flex open-sans text-white text-xs md:text-sm font-semibold bg-[#ED5E24] flex-col md:flex-row justify-between">
        <div className="flex w-full md:w-fit bg-[#767576] p-4 pr-10 clip-custom-left items-center space-x-4">
          <span className='whitespace-nowrap tracking-wider flex gap-4 items-center pr-4'>
            <img src={call} className='h-4' alt="call" />
            Call Us: +91-95581 37093
          </span>
          <span className='tracking-wider flex gap-4 items-center'>
            <img src={mail} className='h-4' alt="mail" />
            info@icubeelevators.com
          </span>
        </div>
        <div className="flex w-full md:w-[40%] p-4 justify-end items-center space-x-4">
          <span className='tracking-widest'>Follow Us:</span>
          <a href="#" className="">
            <img src={linkedin} className='w-5' alt="linkedin" />
          </a>
          <a href="#" className="">
            <img src={facebook} className='w-5' alt="facebook" />
          </a>
          <a href="#" className="">
            <img src={instagram} className='w-5' alt="instagram" />
          </a>
          <a href="#" className="">
            <img src={twitter} className='w-5' alt="twitter" />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
}
