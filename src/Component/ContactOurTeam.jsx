import { Link } from 'react-router-dom';

const ContactOurTeam = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-20 px-6 sm:px-12 lg:px-16 text-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight text-center mb-12">
          Contact Our Team
        </h2>

        {/* Cards Wrapper Layout */}
        {/* FIXED: grid layouts ko update kiya hai max width aur standard aspect locks ke sath */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl justify-center items-center">
          
          {/* Card 1: Install Resources */}
          <Link 
            to="/manual" 
            className="w-full bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 min-h-[175px] md:min-h-[190px] group border border-neutral-100/30"
          >
            {/* Pergola Outline SVG Icon */}
            <div className="h-16 flex items-center justify-center mb-4">
              <svg className="w-14 h-14 text-neutral-800 transform group-hover:scale-105 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M4 6v13h16V6M2 19h20M7 6v13M12 6v13M17 6v13M3 9h18M3 13h18" />
              </svg>
            </div>
            <span className="text-sm sm:text-base font-bold tracking-tight text-neutral-900">
              Install Resources
            </span>
          </Link>

          {/* Card 2: Call an Expert */}
          <a 
            href="tel:+17862784406" 
            className="w-full bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 min-h-[175px] md:min-h-[190px] group border border-neutral-100/30"
          >
            {/* Call Icon from public folder */}
            <div className="h-16 flex items-center justify-center mb-4">
              <img 
                src="/call.png" 
                alt="Call an Expert" 
                className="h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-200" 
              />
            </div>
            <span className="text-sm sm:text-base font-bold tracking-tight text-neutral-900">
              Call an expert
            </span>
          </a>

          {/* Card 3: Contact Form */}
          <Link 
            to="/contact-us" 
            className="w-full bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 min-h-[175px] md:min-h-[190px] group border border-neutral-100/30"
          >
            {/* Document/Form Edit Line SVG Icon */}
            <div className="h-16 flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-neutral-800 transform group-hover:scale-105 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l-4 4" />
              </svg>
            </div>
            <span className="text-sm sm:text-base font-bold tracking-tight text-neutral-900">
              Contact Form
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ContactOurTeam;