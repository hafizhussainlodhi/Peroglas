import { useState } from 'react';

import Footer from '../Component/Footer';

const Blog = () => {
  // Active slide state (Figma bottom slider indicators ke liye)
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      {/* ================= MAIN HERO SECTION ================= */}
      <main className="relative min-h-[75vh] sm:min-h-[80vh] w-full bg-[#1A1E21] flex flex-col justify-end overflow-hidden pb-16 pt-24">
        
        {/* Subtle vignette layer overlay for premium look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-0" />
        
        {/* Main Content Layout Wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col items-start justify-end text-left text-white">
          
          {/* Badge Tag category indicator */}
          <span className="bg-white/10 text-white/90 text-[10px] sm:text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-md mb-5 backdrop-blur-sm select-none border border-white/5">
            ADVENTURE
          </span>

          {/* Core Feature Post Title Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1] text-white">
            Richird Norton photorealistic rendering as real photos
          </h1>

          {/* Metadata Meta Rows Row info block */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/60 font-medium max-w-2xl">
            <span className="tracking-wide flex-shrink-0 select-none">
              08.08.2021
            </span>
            
            {/* Horizontal line divider break pattern inside Figma template */}
            <span className="hidden sm:inline-block w-12 h-[1px] bg-white/40 flex-shrink-0" />
            
            <p className="leading-relaxed text-white/80">
              Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
            </p>
          </div>

          {/* Slider Pagination Dot System Indicator Layout */}
          <div className="flex items-center gap-2.5 mt-12 select-none">
            {[0, 1, 2].map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setActiveSlide(dotIndex)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === dotIndex 
                    ? 'w-6 bg-white' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>

        </div>
      </main>

      {/* ================= LOWER BLOG ARTICLES ARCHIVE AREA ================= */}
      {/* Is white space area me tumhare normal articles columns grid load honge future me */}
      <section className="w-full bg-white py-16 px-6 sm:px-12 lg:px-16 text-black min-h-[40vh]">
        <div className="max-w-7xl mx-auto">
          {/* Grid setup ready for content insertion */}
        </div>
      </section>
{/* ================= LOWER BLOG ARTICLES ARCHIVE AREA ================= */}
      <section className="w-full bg-white py-16 px-6 sm:px-12 lg:px-16 text-black font-sans antialiased">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Main Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Popular topics
          </h2>

          {/* Interactive Category Tabs List */}
          {/* Mobile par yeh horizontally scrollable ho jayegi automatic */}
          <div className="flex items-center gap-4 sm:gap-6 mt-6 overflow-x-auto whitespace-nowrap pb-3 border-b border-neutral-100 scrollbar-none text-xs sm:text-sm font-medium text-neutral-500">
            <button className="text-orange-500 font-bold border-b-2 border-orange-500 pb-2 -mb-[13px]">All</button>
            <button className="hover:text-black pb-2 transition-colors">Adventure</button>
            <button className="hover:text-black pb-2 transition-colors">Travel</button>
            <button className="hover:text-black pb-2 transition-colors">Fashion</button>
            <button className="hover:text-black pb-2 transition-colors">Technology</button>
            <button className="hover:text-black pb-2 transition-colors">Branding</button>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 mt-12 w-full">
            
            {/* Array Map Loop Iteration */}
            {[
              { tag: "ADVENTURE", title: "Dream destinations to visit this year in Paris" },
              { tag: "TRAVEL", title: "Breathtaking first-person photos around Europe" },
              { tag: "TECHNOLOGY", title: "What collectors need to know about authenticity" },
              { tag: "FASHION", title: "Instagram artists with great photography skills" },
              { tag: "ADVENTURE", title: "Thins to know before visiting Cave in Germany" },
              { tag: "FASHION", title: "Nina Smith vibrant work collab with Nike Dunk" },
              { tag: "ADVENTURE", title: "Richard Norton photorealistic rendering as real photos" },
              { tag: "FASHION", title: "25 quality collectors toys inspired by famous films" }
            ].map((article, idx) => (
              
              <article key={idx} className="flex flex-col items-start w-full group cursor-pointer">
                
                {/* Card Thumbnail Box Container */}
                <div className="relative w-full aspect-square bg-neutral-100 rounded-lg overflow-hidden mb-4 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)]">
                  {/* FIXED: Saare cards me ab custom mountain image apply kar di hai */}
                  <img 
                    src="/mountain.webp" 
                    alt={article.title} 
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-300"
                  />

                  {/* Absolute Badge Overlay */}
                  <span className="absolute top-3 right-3 text-[9px] font-bold tracking-wider text-white/90 bg-black/25 backdrop-blur-xs px-2 py-0.5 rounded-sm uppercase">
                    {article.tag}
                  </span>
                </div>

                {/* Card Meta Row */}
                <span className="text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide mb-1.5">
                  08.08.2021
                </span>

                {/* Article Post Main Heading */}
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-neutral-700 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Short Paragraph Line Summary */}
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed font-normal line-clamp-3">
                  Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data with flexible solutions.
                </p>

              </article>
            ))}

          </div>

          {/* Center Aligned Load/Show More CTA Button */}
          <div className="w-full flex items-center justify-center mt-16">
            <button className="bg-black text-white text-xs sm:text-sm font-bold px-10 py-3 rounded-md hover:bg-neutral-800 transition-all shadow-md tracking-wide">
              Show More
            </button>
          </div>

        </div>
      </section>

      {/* ================= SECTION: CENTERED DARK CALLOUT ================= */}
      <section className="w-full bg-[#2B3034] py-20 px-6 text-center text-white flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-3">
          
          {/* Tag Badge */}
          <span className="bg-white/10 text-white/90 text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-sm backdrop-blur-sm border border-white/5">
            FASHION
          </span>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight max-w-2xl mt-2 leading-tight">
            Richird Norton photorealistic rendering as real photos
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-white/70 max-w-xl leading-relaxed mt-1 font-normal">
            Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
          </p>

          {/* Decorative Divider Line */}
          <span className="w-10 h-[1px] bg-white/40 mt-4" />

          {/* Date */}
          <span className="text-[10px] sm:text-xs text-white/50 tracking-wide font-medium mt-1">
            08.08.2021
          </span>

        </div>
      </section>

      {/* ================= SECTION: EDITOR'S PICK GRID ================= */}
      <section className="w-full bg-white py-16 px-6 sm:px-12 lg:px-16 text-black font-sans antialiased">
        <div className="max-w-7xl mx-auto">
          
          {/* Grid Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-8">
            Editor's Pick
          </h2>

          {/* 3-Columns Dark Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {[0, 1, 2].map((cardIdx) => (
              
              <div 
                key={cardIdx} 
                className="bg-[#2B3034] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-end items-start text-left min-h-[320px] sm:min-h-[360px] relative overflow-hidden group cursor-pointer shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.2)] transition-all duration-300"
              >
                {/* Subtle dark pattern overlay texture */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-0 pointer-events-none" />

                <div className="relative z-10 w-full flex flex-col items-start">
                  
                  {/* Absolute Card Absolute Badge */}
                  <span className="absolute top-0 right-0 text-[8px] sm:text-[9px] font-bold tracking-wider text-white/80 bg-white/10 border border-white/5 backdrop-blur-sm px-2 py-0.5 rounded-sm uppercase select-none">
                    FASHION
                  </span>

                  {/* Card Meta Date */}
                  <span className="text-[10px] sm:text-xs text-white/50 font-medium tracking-wide mb-2 select-none">
                    08.08.2021
                  </span>

                  {/* Card Post Heading */}
                  <h3 className="text-base sm:text-lg font-bold tracking-tight leading-snug group-hover:text-white/80 transition-colors line-clamp-2">
                    Richird Norton photorealistic rendering as real photos
                  </h3>

                  {/* Short Paragraph Summary */}
                  <p className="mt-2 text-xs text-white/60 leading-relaxed font-normal line-clamp-3">
                    Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                  </p>
                  
                </div>
              </div>

            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;