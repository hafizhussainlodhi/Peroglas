import { useState } from 'react';

import Footer from '../Component/Footer';

const BlogDetails = () => {
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
           
         
            <p className="leading-relaxed text-white/80">
              Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
            </p>
          </div>

        

        </div>
      </main>
{/* ================= SECTION: SINGLE BLOG POST READ LAYOUT (PERFECTLY CENTERED) ================= */}
      <section className="w-full bg-white py-16 px-4 sm:px-8 text-black font-sans antialiased">
        <div className="max-w-3xl mx-auto flex flex-col items-center w-full">
          
          {/* Top Centered Meta Block */}
          <div className="flex items-center justify-center gap-3 text-xs font-bold text-neutral-400 select-none mb-8 w-full border-b border-neutral-100 pb-4">
            <span>08.08.2021</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <span>4 minutes read</span>
          </div>

          {/* Article Body Content Wrapper */}
          <div className="flex flex-col gap-6 text-sm sm:text-base text-neutral-700 leading-relaxed text-left sm:text-justify w-full font-normal">
            
            <p>
              Seamlessly syndicate cutting-edge architectures rather than collaborative collaboration and idea-sharing. Proactively incubate visionary interfaces whereas premium benefits. Seamlessly negotiate ubiquitous leadership skills rather than parallel steps. Dramatically visualize superior interfaces for best-of-breed alignments. Synergistically formulate performance-based users through customized relationships. Interactively deliver cross-platform ROI via granular systems. Intrinsicly enhance effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously monetize market-driven opportunities with multifunctional users. Collaboratively enhance customers opportunities through revolutionary schemas. Progressively network just in time customer service without real-time scenarios.
            </p>
            
            <p>
              Synergistically drive e-business leadership with unique synergy. Compellingly seize market positioning fifth-generation brick-and-click e-markets. Proactively myocardinate timely platforms through distributed systems. Professionally optimize multi-core competencies for leading-edge sources. Professionally enhance stand-alone leadership with innovative synergy. Rapidiously generate backward experiences vis-a-vis long-term high-impact relationships.
            </p>

            {/* Mid Images Grid (Centered 2-Columns Matrix) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 w-full">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)]">
                <img src="/mountain.webp" alt="Article Visual Slot 1" className="w-full h-full object-cover hover:scale-102 transition-transform duration-300" />
              </div>
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)]">
                <img src="/mountain.webp" alt="Article Visual Slot 2" className="w-full h-full object-cover hover:scale-102 transition-transform duration-300" />
              </div>
            </div>

            <p>
              Efficiently empower seamless meta-services with impactful opportunities. Distinctively transition virtual outsourcing with focused e-tailers.
            </p>

            {/* Orange Highlighted Blockquote Section (Centered Focus) */}
            <div className="my-6 py-4 text-center border-t border-b border-neutral-100">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 tracking-tight leading-snug max-w-2xl mx-auto">
                " Monotonectally seize superior mindshare rather than efficient technology. "
              </h4>
            </div>

            <p>
              Compellingly enforce seamless resources through competitive content. Continually actualize 24/365 segments for resource-leveling platforms. Energistically enhance high-standards in models and professional expertise. Intrinsicly iterate extensible mindshare preparative opportunities. Continually develop leading-edge experiences through quality e-services.
            </p>

            {/* Article Content Lower Filter Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-6 select-none justify-start">
              <span className="text-[10px] font-bold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-sm uppercase tracking-wider">ADVENTURE</span>
              <span className="text-[10px] font-bold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-sm uppercase tracking-wider">PHOTO</span>
              <span className="text-[10px] font-bold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-sm uppercase tracking-wider">DESIGN</span>
            </div>

            {/* Solid Horizontal Layout Border Split Divider Line */}
            <hr className="border-neutral-100 w-full my-6" />

            {/* Bottom Profile Author Footer Unit Card */}
            <div className="flex items-center gap-4 text-left w-full mt-2">
              {/* Profile Avatar Circle Image Placeholder */}
              <div className="w-12 h-12 rounded-full bg-neutral-200 flex-shrink-0 border border-neutral-100" />
              
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">
                  By Jennifer Lawrence
                </span>
                <span className="text-[10px] sm:text-xs text-neutral-400 font-medium mt-0.5">
                  Thinker & Designer
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
{/* ================= SECTION: RELATED POSTS SECTION ================= */}
      {/* Light off-white background to break the screen sequence and match the template view */}
      <section className="w-full bg-[#F9F9F9] py-16 px-6 sm:px-12 lg:px-16 text-black font-sans antialiased border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-8">
            Related Posts
          </h2>

          {/* 4-Columns Card Matrix Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 w-full">
            
            {[
              { tag: "ADVENTURE", title: "Thins to know before visiting Cave in Germany" },
              { tag: "FASHION", title: "Nina Smith vibrant work collab with Nike Dunk" },
              { tag: "ADVENTURE", title: "Richard Norton photorealistic rendering as real photos" },
              { tag: "FASHION", title: "25 quality collectors toys inspired by famous films" }
            ].map((post, idx) => (
              
              <div key={idx} className="flex flex-col items-start w-full group cursor-pointer">
                
                {/* Thumbnail image wrapper layout */}
                <div className="relative w-full aspect-square bg-neutral-200 rounded-lg overflow-hidden mb-4 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.04)]">
                  <img 
                    src="/mountain.webp" 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-300"
                  />

                  {/* Absolute Badge Category Tag */}
                  <span className="absolute top-3 right-3 text-[8px] font-bold tracking-wider text-white/90 bg-black/25 backdrop-blur-xs px-2 py-0.5 rounded-sm uppercase">
                    {post.tag}
                  </span>
                </div>

                {/* Card Meta Row */}
                <span className="text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide mb-1.5">
                  08.08.2021
                </span>

                {/* Post Main Title Heading */}
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-neutral-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Post Short Excerpt text description line */}
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed font-normal line-clamp-3">
                  Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data with flexible schemas.
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetails;