import { Link } from 'react-router-dom';

const TalkTo = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-12 px-4 sm:px-8 lg:px-16 flex items-center justify-center">
      {/* Main Dark Banner Container */}
      <div className="w-full max-w-7xl bg-[#333333] rounded-sm py-16 px-6 sm:px-12 text-center flex flex-col items-center justify-center min-h-[260px] shadow-sm">
        
        {/* Main Title Heading */}
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
          Talk to an Expert
        </h2>
        
        {/* Subtitle Description */}
        <p className="text-white/80 text-xs sm:text-sm md:text-base font-normal mt-2 tracking-wide max-w-md">
          Real in-house experts on the phone ready to help
        </p>

        {/* Action Button CTA */}
        <Link 
          to="/contact-us" 
          className="mt-6 bg-white text-black font-semibold text-xs sm:text-sm py-3 px-6 sm:px-8 rounded-sm hover:bg-neutral-200 transition-all duration-300 shadow-md tracking-wide"
        >
          Connect With An Expert
        </Link>

      </div>
    </section>
  );
};

export default TalkTo;