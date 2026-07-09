import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Dropdown list data with correct path mappings
  const pergolaDropdownItems = [
    { name: 'Plain Modern Free-Standing Pergolas', path: '/plain-modern-free-standing' },
    { name: 'Free-Standing Pergolas', path: '/plain-modern-free-standing' },
    { name: 'Mounted Pergolas on Brackets', path: '/mounted-on-brackets' },
    { name: 'Outdoor Kitchens', path: '/outdoor-kitchens' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full shadow-sm select-none">
      
      {/* ================= TOP ANNOUNCEMENT BAR ================= */}
      <div className="w-full bg-black text-white text-[11px] sm:text-xs py-2.5 px-4 sm:px-8 lg:px-16 relative flex items-center justify-center font-normal tracking-wide">
        <div className="text-center">
          Winter Sale on All Pergolas with Free Express Delivery - 50% OFF!
        </div>
        
        <div className="hidden md:flex items-center gap-1.5 cursor-pointer hover:text-neutral-300 transition-colors absolute right-4 sm:right-8 lg:right-16">
          <img 
            src="/flag.png" 
            alt="US Flag" 
            className="w-4 h-auto object-contain rounded-sm shadow-sm"
          />
          <span>English</span>
          <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ================= MAIN WHITE NAVBAR ================= */}
      <nav className="w-full bg-white border-b border-neutral-100 px-4 py-4 md:px-8 lg:px-16 text-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight text-black shrink-0">
            <img src="/f-1.png" alt="Pergolas Logo" className="h-7 w-auto object-contain" />
            <span className="text-xl font-bold tracking-tight">Pergolas</span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-neutral-800 text-sm font-medium">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <Link to="/our-story" className="hover:text-black transition-colors">Our Story</Link>
            
            {/* INTERACTIVE DROPDOWN CONTAINER */}
            <div 
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="hover:text-black transition-colors flex items-center gap-1 text-neutral-800">
                Pergolas
                <svg className={`w-3 h-3 text-neutral-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {/* DROPDOWN MENU GRID PANEL */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-black text-white text-xs w-64 flex flex-col border border-neutral-800 shadow-xl z-50">
                  {pergolaDropdownItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="px-4 py-3 text-left border-b border-neutral-900 last:border-b-0 hover:bg-neutral-900 transition-colors font-sans text-[13px] text-neutral-200 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
            <Link to="/inspiration-gallery" className="hover:text-black transition-colors">Inspiration Gallery</Link>
            <Link to="/contact-us" className="hover:text-black transition-colors">Contact Us</Link>
          </div>

          {/* Right: Search Box & Icon Utilities */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <div className="relative w-48 lg:w-56 xl:w-64 bg-[#F5F5F5] rounded-md flex items-center px-3 py-2">
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="w-full bg-transparent text-xs text-black placeholder-neutral-500 focus:outline-none pr-6"
              />
              <svg className="w-4 h-4 text-neutral-800 absolute right-3 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="flex items-center gap-4">
              {/* Cart Link */}
              <Link to="/cart" className="relative text-black hover:text-neutral-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                  0
                </span>
              </Link>

              {/* Profile Account Icon */}
              <Link to="/my-account" className="text-black hover:text-neutral-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile View Toggle */}
          <div className="flex lg:hidden items-center gap-4 shrink-0">
            <Link to="/cart" className="relative text-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                0
              </span>
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="focus:outline-none p-1 shrink-0"
              aria-label="Toggle Menu"
            >
              <img src="/2.png" alt="Menu Trigger" className="w-6 h-6 object-contain invert" />
            </button>
          </div>

        </div>

        {/* Mobile Flyout Drawer Panel */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-100 shadow-xl px-6 py-6 flex flex-col gap-4 animate-fadeIn text-black z-50 text-left">
            <div className="relative w-full bg-[#F5F5F5] rounded-md flex items-center px-3 py-2 mb-2">
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="w-full bg-transparent text-xs text-black placeholder-neutral-500 focus:outline-none pr-6"
              />
              <svg className="w-4 h-4 text-neutral-800 absolute right-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-semibold border-b border-neutral-100 pb-2 hover:text-neutral-600">Home</Link>
            <Link to="/our-story" onClick={() => setIsOpen(false)} className="text-sm font-semibold border-b border-neutral-100 pb-2 hover:text-neutral-600">Our Story</Link>
            
            {/* Mobile Expanded Dropdown Elements Map */}
            <div className="flex flex-col gap-2 border-b border-neutral-100 pb-2">
              <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Pergolas Pages</span>
              {pergolaDropdownItems.map((item, idx) => (
                <Link 
                  key={idx} 
                  to={item.path} 
                  onClick={() => setIsOpen(false)} 
                  className="text-xs font-medium pl-3 text-neutral-700 hover:text-black py-0.5"
                >
                  — {item.name}
                </Link>
              ))}
            </div>

            <Link to="/shop" onClick={() => setIsOpen(false)} className="text-sm font-semibold border-b border-neutral-100 pb-2 hover:text-neutral-600">Shop</Link>
            <Link to="/inspiration-gallery" onClick={() => setIsOpen(false)} className="text-sm font-semibold border-b border-neutral-100 pb-2 hover:text-neutral-600">Inspiration Gallery</Link>
            <Link to="/contact-us" onClick={() => setIsOpen(false)} className="text-sm font-semibold border-b border-neutral-100 pb-2 hover:text-neutral-600">Contact Us</Link>
            <Link to="/my-account" onClick={() => setIsOpen(false)} className="text-sm font-semibold hover:text-neutral-600 flex items-center gap-2 pt-1">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              My Account
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;