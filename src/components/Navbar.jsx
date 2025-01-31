import { useState } from 'react';
import down_arrow from '../assets/icons/down_arrow.png';
import logo from '../assets/logo/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className={`bg-white shadow-md py-3 relative`}>
      <div className={`flex flex-col ${isMenuOpen ? 'h-fit' : 'h-20'} overflow-hidden  duration-700`}>
        
        <div className='container mx-auto flex justify-between items-center px-4 border-b border-zinc-300'>
            <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-20" />
            </div>

            <div className="md:hidden flex items-center">
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-gray-700 text-sm font-semibold">
            <li className="group relative">
                <a href="#" className="hover:text-[#ED5E24] flex items-center gap-2">
                About Us
                <img src={down_arrow} className="h-4" alt="downarrow" />
                </a>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-40 z-20">
                <li className="p-2 hover:bg-gray-100"><a href="#">Our Team</a></li>
                <li className="p-2 hover:bg-gray-100"><a href="#">Our Vision</a></li>
                </ul>
            </li>
            <li className="group relative">
                <a href="#" className="hover:text-[#ED5E24] flex items-center gap-2">
                Products
                <img src={down_arrow} className="h-4" alt="downarrow" />
                </a>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-40">
                <li className="p-2 hover:bg-gray-100"><a href="#">Parking Lifts</a></li>
                <li className="p-2 hover:bg-gray-100"><a href="#">Elevators</a></li>
                </ul>
            </li>
            <li><a href="#" className="hover:text-[#ED5E24]">Blogs</a></li>
            <li><a href="#" className="hover:text-[#ED5E24] flex items-center gap-2">Parking Consultancy <img src={down_arrow} className="h-4" alt="downarrow" /></a></li>
            <li><a href="#" className="hover:text-[#ED5E24] flex items-center gap-2">Client Insights <img src={down_arrow} className="h-4" alt="downarrow" /></a></li>
            <li><a href="#" className="hover:text-[#ED5E24]">Calculator</a></li>
            <li><a href="#" className="hover:text-[#ED5E24]">Career</a></li>
            <li><a href="#" className="hover:text-[#ED5E24]">Contact Us</a></li>
            </ul>
        </div>

        {/* Mobile Menu */}
        <div>
            <ul className={`md:hidden w-full px-10 mt-2 space-y-4 text-gray-700 text-sm font-semibold`}>
            <li><a href="#" className="hover:text-[#ED5E24]">About Us</a></li>
            <li><a href="#" className="hover:text-[#ED5E24]">Products</a></li>
            <li><a href="#" className="hover:text-[#ED5E24]">Blogs</a></li>
            <li><a href="#" className="hover:text-[#ED5E24]">Parking Consultancy</a></li>
            <li><a href="#" className="hover:text-[#ED5E24]">Client Insights</a></li>
            <li><a href="#" className="hover:text-[#ED5E24]">Calculator</a></li>
            <li><a href="#" className="hover:text-[#ED5E24]">Career</a></li>
            <li><a href="#" className="hover:text-[#ED5E24]">Contact Us</a></li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
