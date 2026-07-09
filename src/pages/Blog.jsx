import { Link } from 'react-router-dom';
import Footer from '../Component/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/b2.png',
      date: '08.08.2021',
      title: 'Dream destinations to visit this year in Paris',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize seamless data with flexible schemas.'
    },
    {
      id: 2,
      image: '/b3.png',
      date: '08.08.2021',
      title: 'Breathtaking first-person photos around Europe',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize seamless data with flexible schemas.'
    },
    {
      id: 3,
      image: '/b4.png',
      date: '08.08.2021',
      title: 'What collectors need to know about authenticity',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize seamless data with flexible schemas.'
    },
    {
      id: 4,
      image: '/b5.png',
      date: '08.08.2021',
      title: 'Instagram artists with great photography skills',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize seamless data with flexible schemas.'
    },
    {
      id: 5,
      image: '/b6.png',
      date: '08.08.2021',
      title: 'Things to know before visiting Cave in Germany',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize seamless data with flexible schemas.'
    },
    {
      id: 6,
      image: '/b7.png',
      date: '08.08.2021',
      title: 'Nina Smith vibrant work collab with Nike Dunk',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize seamless data with flexible schemas.'
    },
    {
      id: 7,
      image: '/b8.png',
      date: '08.08.2021',
      title: 'Richard Norton photorealistic rendering as real photos',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize seamless data with flexible schemas.'
    },
    {
      id: 8,
      image: '/b9.png',
      date: '08.08.2021',
      title: '25 quality collectors toys inspired by famous films',
      desc: 'Progressively leanwides cooperative systems through technically sound functionalities. Credibly productize seamless data with flexible schemas.'
    }
  ];

  return (
    <div className="w-full bg-white text-black font-sans antialiased">

      {/* ================= HERO FEATURED POST BANNER ================= */}
      <main
        className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full flex items-end justify-start overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/b1.png')" }}
      >
        {/* Soft Dark Vignette for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" />

        {/* Hero Content Block */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pb-12 sm:pb-16 text-left flex flex-col items-start gap-3">
          <span className="text-neutral-300 text-xs sm:text-sm font-medium tracking-wide">
            08.08.2021 — Progressively leanwides cooperative systems through technically sound functionalities. The creditry productize seamless data.
          </span>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            Richird Norton photorealistic rendering as real photos
          </h1>
        </div>
      </main>

      {/* ================= MAIN BLOG GRID CATALOG ================= */}
      <section className="w-full py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          {/* 4-Column Responsive Grid Row */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group flex flex-col items-start text-left w-full cursor-pointer"
              >
                {/* Post Image Container */}
                <div className="w-full aspect-[4/3] rounded-md overflow-hidden bg-neutral-100 shadow-sm mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                    loading="lazy"
                  />
                </div>

                {/* Date stamp */}
                <span className="text-neutral-400 text-[11px] font-medium mb-1">
                  {post.date}
                </span>

                {/* Title */}
                <h3 className="text-neutral-900 font-bold text-base tracking-tight leading-snug mb-2 group-hover:text-neutral-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Brief description text */}
                <p className="text-neutral-500 text-xs leading-relaxed font-normal line-clamp-3">
                  {post.desc}
                </p>
              </Link>
            ))}
          </div>

          {/* Bottom Show More Control Trigger */}
          <button className="mt-16 bg-black text-white text-xs sm:text-sm font-bold py-2.5 px-8 rounded-sm hover:bg-neutral-800 transition-all tracking-wide shadow-sm">
            Show More
          </button>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;