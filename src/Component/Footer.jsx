import { Link } from 'react-router-dom';

// Simple round social icon wrappers matching the Figma design
const SocialIcon = ({ children, to }) => (
  <a 
    href={to} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-neutral-200 transition-colors duration-200"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-neutral-900 pt-16 pb-8 px-4 sm:px-8 lg:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= TOP BLOCK: LINKS & INFO ================= */}
        {/* Figma design contains 4 distinct columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 lg:gap-16 items-start text-center sm:text-left pb-12 border-b border-neutral-800">
          
          {/* Column 1: Brand Intro & Socials */}
          <div className="flex flex-col items-center sm:items-start max-w-sm mx-auto sm:mx-0">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-wide text-white">
              <img src="/logo.png" alt="Pergolas Logo" className="h-6 w-auto object-contain invert brightness-0" />
              <span>Pergolas</span>
            </Link>
            <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              Our family designed The Luxury Pergola with the intent to make lifetime-lasting louvered pergola as accessible for all homeowners.
            </p>
            
            {/* Social Icons Stack */}
            <div className="flex items-center gap-3 mt-6">
              {/* Facebook */}
              <SocialIcon to="https://facebook.com">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/></svg>
              </SocialIcon>
              {/* X (Twitter) */}
              <SocialIcon to="https://x.com">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </SocialIcon>
              {/* Instagram */}
              <SocialIcon to="https://instagram.com">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </SocialIcon>
              {/* YouTube */}
              <SocialIcon to="https://youtube.com">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.872.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-base font-bold tracking-wide text-white mb-4">Quick Link</h3>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-400 font-normal">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of service</Link>
              <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
              <Link to="/warranty" className="hover:text-white transition-colors">Lifetime Warranty</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>

          {/* Column 3: Account Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-base font-bold tracking-wide text-white mb-4">Account</h3>
          <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-400 font-normal">
  <Link to="/my-account" className="hover:text-white transition-colors">My Account</Link>
  
  {/* UI aur styles bilkul same hain, bas clickable areas alag ho gaye hain */}
  <span className="transition-colors">
    <Link to="/login" className="hover:text-white">Login</Link>
    <span> / </span>
    <Link to="/signup" className="hover:text-white">Register</Link>
  </span>

  <Link to="/cart" className="hover:text-white transition-colors">Cart</Link>
  <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
</div>
          </div>

          {/* Column 4: Contact Address & Phone details */}
          <div className="flex flex-col items-center sm:items-start text-xs sm:text-sm text-neutral-400">
            <h3 className="text-base font-bold tracking-wide text-white mb-3">Address</h3>
            <p className="leading-relaxed font-normal text-neutral-400">
              8762 SW 133rd Street<br />
              Miami, FL. 33176
            </p>

            <h3 className="text-base font-bold tracking-wide text-white mt-6 mb-2">Phone</h3>
            <p className="font-normal text-neutral-300 tracking-wide">
              +1 (786) 278-4406
            </p>
          </div>

        </div>

        {/* ================= BOTTOM BLOCK: COPYRIGHT ================= */}
        <div className="pt-8 flex items-center justify-center text-center text-xs text-neutral-500 font-normal">
          <div>
            © Copyright pergolas 2025. All right reserved
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;