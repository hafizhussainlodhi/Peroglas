import { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons wrapper/SVGs for Search and Cart matching the design
const SearchIcon = () => (
  <svg className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CartIcon = () => (
  <div className="relative cursor-pointer group">
    <svg className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black border border-black">
      0
    </span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px] px-4 py-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 text-white font-medium text-lg tracking-wide">
          <img src="/logo.png" alt="Pergolas Logo" className="h-6 w-auto object-contain" />
          <span>Pergolas</span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-white/90 text-sm font-medium">
          <Link to="/pergolas" className="hover:text-white transition-colors flex items-center gap-1">
            Pergolas 
            <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </Link>
          <Link to="/outdoor-kitchens" className="hover:text-white transition-colors">Outdoor Kitchens</Link>
          <Link to="/inspiration-gallery" className="hover:text-white transition-colors">Inspiration Gallery</Link>
          <Link to="/our-story" className="hover:text-white transition-colors">Our Story</Link>
          <Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link>
        </div>

        {/* Right: Desktop CTA & Utilities */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/schedule" className="border border-white text-white px-5 py-2 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
            Schedule A Conversation
          </Link>
          <div className="flex items-center gap-4">
            <SearchIcon />
            <CartIcon />
          </div>
        </div>

        {/* Mobile View: Right side actions (Search, Cart & Hamburger) */}
        <div className="flex md:hidden items-center gap-4">
          <SearchIcon />
          <CartIcon />
          
          {/* Hamburger Icon using 2.png */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <img src="/2.png" alt="Menu" className="w-6 h-6 object-contain inverse turn-white" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          <Link to="/pergolas" onClick={() => setIsOpen(false)} className="text-white text-base font-medium border-b border-white/5 pb-2">Pergolas</Link>
          <Link to="/outdoor-kitchens" onClick={() => setIsOpen(false)} className="text-white text-base font-medium border-b border-white/5 pb-2">Outdoor Kitchens</Link>
          <Link to="/inspiration-gallery" onClick={() => setIsOpen(false)} className="text-white text-base font-medium border-b border-white/5 pb-2">Inspiration Gallery</Link>
          <Link to="/our-story" onClick={() => setIsOpen(false)} className="text-white text-base font-medium border-b border-white/5 pb-2">Our Story</Link>
          <Link to="/contact-us" onClick={() => setIsOpen(false)} className="text-white text-base font-medium border-b border-white/5 pb-2">Contact Us</Link>
          <Link to="/schedule" onClick={() => setIsOpen(false)} className="mt-2 block text-center border border-white text-white py-2 text-sm font-medium rounded-sm">
            Schedule A Conversation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;