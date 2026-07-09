import { Link } from 'react-router-dom';
import Footer from '../Component/Footer';

const BlogDetails = () => {
  const relatedPosts = [
    {
      id: 1,
      image: '/d4.png',
      date: '08.08.2021',
      title: 'Things to know before visiting Cave in Germany',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize.'
    },
    {
      id: 2,
      image: '/d5.png',
      date: '08.08.2021',
      title: 'Nina Smith vibrant work collab with Nike Dunk',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize.'
    },
    {
      id: 3,
      image: '/d6.png',
      date: '08.08.2021',
      title: 'Richard Norton photorealistic rendering as real photos',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize.'
    },
    {
      id: 4,
      image: '/d7.png',
      date: '08.08.2021',
      title: '25 quality collectors toys inspired by famous films',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize.'
    }
  ];

  return (
    <div className="w-full bg-white text-black font-sans antialiased">

      {/* ================= HERO BANNER SECTION ================= */}
      <main
        className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full flex items-end justify-start overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/d1.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 z-10" />

        <div className="relative z-20 w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pb-12 text-left flex flex-col items-start gap-3">
          <span className="bg-white/20 text-white backdrop-blur-[2px] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm">
            TUTORIAL
          </span>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Richird Norton photorealistic rendering as real photos
          </h1>
          <span className="text-neutral-300 text-xs font-normal">
            08.08.2021 — Progressively leanwides cooperative systems through technically sound functionalities.
          </span>
        </div>
      </main>

      {/* ================= ARTICLE BODY CONTENT ================= */}
      <article className="w-full py-16 px-6 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">

          <div className="flex items-center gap-4 text-xs text-neutral-400 font-medium uppercase tracking-wider mb-2">
            <span>08.08.2021</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <span>4 Min Read</span>
          </div>

          <p>
            Seamlessly network parallel relationships via cross-unit architectures. Intrinsicly transition performance based technology and premium tools. Competently coordinate innovative markets before low-risk high-yield models. Globally orchestrate dynamic systems through orthogonal intellectual capital. Progressively extend vertical metrics through cross-platform solutions. Dynamically re-engineer prospective experiences rather than backward-compatible synergy.
          </p>

          <p>
            Competently network economically sound leadership through compelling schemas. Uniquely streamline bricks-and-clicks functionalities. Credibly productize seamless data with flexible schemas. Collaboratively network exceptional research and development via cutting-edge methods. Authoritatively productize business process management frameworks.
          </p>

          {/* Side-by-Side Symmetrical Images (d2.png & d3.png) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 w-full">
            <div className="w-full aspect-[4/3] rounded-md overflow-hidden bg-neutral-50 shadow-sm">
              <img src="/d2.png" alt="Article Visual Left" className="w-full h-full object-cover select-none" />
            </div>
            <div className="w-full aspect-[4/3] rounded-md overflow-hidden bg-neutral-50 shadow-sm">
              <img src="/d3.png" alt="Article Visual Right" className="w-full h-full object-cover select-none" />
            </div>
          </div>

          <p>
            Efficiently scale scalable leadership infrastructure. Conveniently scale strategic community partnerships via process-centric deliverables. Objectively foster resource-maximizing schemas through performance-based technology.
          </p>

          {/* Blockquote Segment */}
          <blockquote className="border-l-4 border-amber-500 pl-4 py-2 my-6 italic text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight leading-snug">
            “ Monotonectally seize superior mindshare rather than efficient technology. ”
          </blockquote>

          <p>
            Competently productize corporate architectures before standards-compliant internal or organic sources. Progressively network vertical metrics through cross-platform solutions. Authoritatively iterate user-friendly paradigms via client-focused metrics. Objectively matrix virtual relationships via client-focused methods.
          </p>

          {/* Tags Footer Section */}
          <div className="flex items-center gap-2 mt-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            <span>PERGOLAS</span>
            <span>•</span>
            <span>KITCHENS</span>
            <span>•</span>
            <span>DESIGN</span>
          </div>

          <hr className="border-neutral-100 my-8" />

          {/* Author Meta Row */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden shrink-0">
                <svg className="w-full h-full text-neutral-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-neutral-900 font-bold text-sm">Richard Norton</span>
                <span className="text-neutral-400 text-xs">Content Architect</span>
              </div>
            </div>
            {/* Social Share Minimalist Handles */}
            <div className="flex items-center gap-4 text-neutral-400 text-sm">
              <a href="#" className="hover:text-black transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-black transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-black transition-colors"><i className="fab fa-pinterest-p"></i></a>
              <a href="#" className="hover:text-black transition-colors"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

        </div>
      </article>

      {/* ================= RELATED POSTS GRID BLOCK ================= */}
      <section className="w-full bg-[#FBFBFB] py-16 px-4 sm:px-8 lg:px-16 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
            Related Posts
          </h2>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group flex flex-col items-start text-left w-full cursor-pointer bg-white p-3 rounded-md border border-neutral-100 shadow-sm"
              >
                <div className="w-full aspect-[4/3] rounded-sm overflow-hidden bg-neutral-50 mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                    loading="lazy"
                  />
                </div>
                <span className="text-neutral-400 text-[10px] font-semibold mb-1">{post.date}</span>
                <h3 className="text-neutral-900 font-bold text-sm tracking-tight leading-snug mb-2 group-hover:text-neutral-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-neutral-500 text-[11px] leading-relaxed line-clamp-3">
                  {post.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogDetails;