import { useState } from 'react';
import down_arrow from '../assets/icons/down_arrow.png';
import logo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom';



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  
  return (
    <nav className={`bg-white/90 shadow-md py-3 relative overflow-hidden md:overflow-visible`}>
      <div className={`flex flex-col ${isMenuOpen ? 'h-fit' : 'h-20 lg:h-24'} duration-700`}>
        
        <div className='container  mx-auto flex justify-between items-center px-4 md:border-none border-b border-zinc-300'>
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-20 lg:h-24" />
            </div>

            <div className="md:hidden flex items-center">
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-black focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden bg-transparent md:flex space-x-6 text-black text-base md:text-base font-semibold">
              {/* About Us Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className="hover:text-[#ED5E24] flex items-center gap-2"
                >
                  About Us
                  <img src={down_arrow} className="h-4" alt="downarrow" />
                </button>
                {openDropdown === "about" && (
                  <ul className="absolute bg-[#F8F9FB] shadow-lg text-[#6F6F6F] mt-12 w-50 z-auto">
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Company Overview</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Certification</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Events</Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Products Dropdown */}
              <li className="">
                <button
                  onClick={() => toggleDropdown("products")}
                  className="hover:text-[#ED5E24] flex items-center gap-2"
                >
                  Products
                  <img src={down_arrow} className="h-4" alt="downarrow" />
                </button>
                {openDropdown === "products" && (
                  <ul className="absolute duration-700 left-8 w-[95vw] bg-[#F8F9FB] shadow-lg text-[#6F6F6F] mt-12 grid grid-cols-2 ga md:grid-cols-4 py-4 pl-14 z-auto">
                  {/* Column 1 */}
                  <li className="p-2">
                    <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >
                      <h3 className="text-[#ED5E24] font-bold text-base">Stack Parking System</h3>
                    </Link>
                    <ul className="space-y-1 mt-1 text-sm">
                      <li><Link to='/icube-parking/products/stack-parking/two-post-two-stack-parking' onClick={() => setOpenDropdown(null)} >2 Post 2 Level Stack Parking System</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking/two-post-three-stack-parking' onClick={() => setOpenDropdown(null)} >2 Post 3 Level Stack Parking System</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >4 Post 2 Level Stack Parking System</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking/four-post-three-stack-parking' onClick={() => setOpenDropdown(null)} >4 Post 3 Level Stack Parking System</Link></li>
                    </ul>
                  </li>
                
                  {/* Column 2 */}
                  <li className="p-2">
                    <h3 className="text-[#ED5E24] font-bold text-base">Suspended Parking System</h3>
                    <ul className="space-y-1 mt-1 text-sm">
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Frame Mount Suspended Parking System</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Ceiling Mount Suspended Parking System</Link></li>
                    </ul>
                  </li>
                
                  {/* Column 3 */}
                  <li className="p-2">
                    <h3 className="text-[#ED5E24] font-bold text-base">Pit Parking System</h3>
                    <ul className="space-y-1 mt-1 text-sm">
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >2 Level Pit Parking System</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >3 Level Pit Parking System</Link></li>
                    </ul>
                  </li>
                
                  {/* Column 4 */}
                  <li className="p-2 mb-10">
                    <h3 className="text-[#ED5E24] font-bold text-base">Puzzle Parking System</h3>
                    <ul className="space-y-1 mt-1 text-sm">
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >2 Level Pit Puzzle Parking System</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >3 Level Pit Puzzle Parking System</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >2 Level Puzzle Parking System</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Multilevel Puzzle Parking System</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Combined Puzzle Parking System</Link></li>
                    </ul>
                  </li>
                
                  {/* Additional Categories */}
                  <li className="p-2">
                    <h3 className="text-[#ED5E24] font-bold text-base">Two-Wheeler Parking System</h3>
                    <ul className="space-y-1 mt-1 text-sm">
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Single Two-Wheeler Stack Parking System</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Group Two-Wheeler Stack Parking System</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Carasoul Two-Wheeler Parking System</Link></li>
                    </ul>
                  </li>
                
                  <li className="p-2">
                    <h3 className="text-[#ED5E24] font-bold text-base">EV Charging Solution</h3>
                    <ul className="space-y-1 mt-1 text-sm">
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Integrated with Parking EV Charger</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Prepaid EV Chargers</Link></li>
                      <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Integrated EV Charger</Link></li>
                    </ul>
                  </li>
                
                  <li className="p-2">
                    <h3 className="text-[#ED5E24] font-bold text-base">Rotary Parking System</h3>
                    <h3 className="text-[#ED5E24] font-bold text-base">Tower Parking System</h3>
                    <h3 className="text-[#ED5E24] font-bold text-base">Customized Parking System</h3>
                    <h3 className="text-[#ED5E24] font-bold text-base">Accessories</h3>
                  </li>
                </ul>
                
                )}
              </li>

              {/* Other Menu Items */}
              <li>
                <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">
                  Blogs
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("pc")}
                  className="hover:text-[#ED5E24] flex items-center gap-2"
                >
                  Parking Cunsultancy
                  <img src={down_arrow} className="h-4" alt="downarrow" />
                </button>
                {openDropdown === "pc" && (
                  <ul className="absolute bg-[#F8F9FB] shadow-lg text-[#6F6F6F] mt-12 w-96 z-auto">
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Parking Planning & Designing</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Parking Allotment</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Car Parking Simulation</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Analyze Parking Demand</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Basement Interiors</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Parking Strategy & Design Review</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Revenue Models & Finance Feasibility</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >BOQ And Vendor Selection</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Parking Management System</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >IOT Based Solution For Parking</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("ci")}
                  className="hover:text-[#ED5E24] flex items-center gap-2"
                >
                  Client Insights
                  <img src={down_arrow} className="h-4" alt="downarrow" />
                </button>
                {openDropdown === "ci" && (
                  <ul className="absolute bg-[#F8F9FB] shadow-lg text-[#6F6F6F] mt-12 min-w-50 z-auto">
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Projects</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Testimonial</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Do’s & Don’t</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >FAQ</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Appreciation letters</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Gallery</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Downloads</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Case Studies</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >AMC</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} >Mobile Application</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">Calculator</Link>
              </li>
              <li>
                <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">Career</Link>
              </li>
              <li>
                <Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">Contact Us</Link>
              </li>
            </ul>
        </div>

        {/* Mobile Menu */}
        <div>
            <ul className={`md:hidden w-full px-10 mt-2 space-y-4 text-black text-sm font-semibold`}>
            <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">About Us</Link></li>
            <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">Products</Link></li>
            <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">Blogs</Link></li>
            <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">Parking Consultancy</Link></li>
            <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">Client Insights</Link></li>
            <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">Calculator</Link></li>
            <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">Career</Link></li>
            <li><Link to='/icube-parking/products/stack-parking' onClick={() => setOpenDropdown(null)} className="hover:text-[#ED5E24]">Contact Us</Link></li>
            </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;