import { useState } from 'react';
import Footer from '../Component/Footer';

const Shop = () => {
  // Mock product dynamic state wrapper matching figma values
  const products = [
    { id: 1, title: 'Attached modern pergolas', price: 370, oldPrice: 400, sale: '-30%', rating: 5, reviews: 90 },
    { id: 2, title: 'Attached modern pergolas', price: 120, oldPrice: 168, sale: '-40%', rating: 4, reviews: 44 },
    { id: 3, title: 'Attached modern pergolas', price: 980, oldPrice: 1180, sale: '-25%', rating: 5, reviews: 95 },
    { id: 4, title: 'Attached modern pergolas', price: 950, oldPrice: 1150, sale: '-35%', rating: 5, reviews: 70 },
    { id: 5, title: 'Attached modern pergolas', price: 370, oldPrice: 400, sale: '-30%', rating: 5, reviews: 90 },
    { id: 6, title: 'Attached modern pergolas', price: 120, oldPrice: 168, sale: '-40%', rating: 4, reviews: 44 },
    { id: 7, title: 'Attached modern pergolas', price: 980, oldPrice: 1180, sale: '-25%', rating: 5, reviews: 95 },
    { id: 8, title: 'Attached modern pergolas', price: 950, oldPrice: 1150, sale: '-35%', rating: 5, reviews: 70 },
    { id: 9, title: 'Attached modern pergolas', price: 370, oldPrice: 400, sale: '-30%', rating: 5, reviews: 90 },
    { id: 10, title: 'Attached modern pergolas', price: 120, oldPrice: 168, sale: '-40%', rating: 4, reviews: 44 },
    { id: 11, title: 'Attached modern pergolas', price: 980, oldPrice: 1180, sale: '-25%', rating: 5, reviews: 95 },
    { id: 12, title: 'Attached modern pergolas', price: 950, oldPrice: 1150, sale: '-35%', rating: 5, reviews: 70 },
  ];

  const categories = ['Gas Grills', 'Charcoal Grills', 'pellet grills', 'Gas Griddles'];

  return (
<>
    <div className="w-full bg-white text-black font-sans antialiased min-h-screen px-4 sm:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 pt-[120px]">
        
        {/* ================= LEFT SIDE: SIDEBAR FILTERS ================= */}
        <aside className="col-span-1 lg:col-span-3 flex flex-col gap-8 border-r border-neutral-100 pr-0 lg:pr-6">
          <div>
            <h2 className="text-xl font-bold mb-4 tracking-tight">Filter</h2>
            
            {/* Price Filter Box */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Price</span>
              <div className="flex items-center gap-2">
                <input type="text" placeholder="0" className="w-20 bg-[#F5F5F5] text-xs px-3 py-2 rounded-sm focus:outline-none border-none text-center" />
                <span className="text-neutral-400">—</span>
                <input type="text" placeholder="50" className="w-20 bg-[#F5F5F5] text-xs px-3 py-2 rounded-sm focus:outline-none border-none text-center" />
                <button className="bg-neutral-200 text-black text-xs font-bold px-4 py-2 rounded-sm hover:bg-neutral-300 transition-colors ml-auto">Filter</button>
              </div>
              <span className="text-xs font-medium text-neutral-600 mt-1">Price: $0 — $50</span>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Product Categories</h3>
            <div className="flex flex-col gap-2.5">
              {categories.map((cat, idx) => (
                <label key={idx} className="flex items-center gap-2.5 text-sm font-medium text-neutral-800 cursor-pointer select-none">
                  <input type="checkbox" defaultChecked={idx === 0} className="w-4 h-4 text-emerald-700 bg-neutral-100 border-neutral-300 rounded accent-emerald-800 focus:ring-0" />
                  <span className={idx === 0 ? "text-[#005B52] font-semibold" : ""}>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter By Color */}
          <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Filter By Color</h3>
            <div className="flex items-center justify-between text-sm text-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#5C4033] inline-block shadow-inner" />
                <span className="font-medium">Bronze</span>
              </div>
              <span className="text-xs text-neutral-400 font-medium">(1)</span>
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Size</h3>
            <div className="flex items-center justify-between text-sm text-neutral-800">
              <label className="flex items-center gap-2.5 font-medium cursor-pointer">
                <input type="checkbox" className="w-4 h-4 bg-neutral-100 border-neutral-300 rounded focus:ring-0 accent-black" />
                <span>10' x 13'</span>
              </label>
              <span className="text-xs text-neutral-400 font-medium">(1)</span>
            </div>
          </div>

          {/* Product Status */}
          <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Product Status</h3>
            <div className="flex flex-col gap-2.5 text-sm text-neutral-800">
              <label className="flex items-center gap-2.5 font-medium cursor-pointer">
                <input type="checkbox" className="w-4 h-4 bg-neutral-100 border-neutral-300 rounded focus:ring-0 accent-black" />
                <span>In Stock</span>
              </label>
              <label className="flex items-center gap-2.5 font-medium cursor-pointer">
                <input type="checkbox" className="w-4 h-4 bg-neutral-100 border-neutral-300 rounded focus:ring-0 accent-black" />
                <span>On Sale</span>
              </label>
            </div>
          </div>
        </aside>

        {/* ================= RIGHT SIDE: PRODUCTS CATALOG MATRIX ================= */}
        <main className="col-span-1 lg:col-span-9 flex flex-col gap-6">
          
          {/* Top Sorting Bar Panel */}
          <div className="w-full bg-[#F5F5F5] px-4 py-3 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-medium text-neutral-600">
            <div>Showing all 12 results</div>
            <div className="flex items-center gap-4 ml-auto sm:ml-0">
              <div className="flex items-center gap-1.5">
                <span>Sort:</span>
                <span className="text-black font-bold cursor-pointer">Sort by latest</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>Show:</span>
                <span className="text-black font-bold cursor-pointer">12 items</span>
              </div>
            </div>
          </div>

          {/* Symmetrical Products Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 mt-4">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col w-full relative cursor-pointer">
                
                {/* Product Media Container */}
                <div className="w-full aspect-[280/260] bg-neutral-100 rounded-sm overflow-hidden shadow-sm relative mb-3 border border-neutral-100">
                  <img 
                    src="/shop.png" 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none" 
                  />
                  {/* Absolute Badge Tag */}
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-sm z-10">
                    {product.sale}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-neutral-900 tracking-tight leading-tight line-clamp-1 mb-1">
                  {product.title}
                </h3>

                {/* Dynamic Rating Matrix */}
                <div className="flex items-center gap-1 mb-1.5">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(product.rating)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400 font-bold ml-0.5">({product.reviews})</span>
                </div>

                {/* Price Matrix block */}
                <div className="flex items-center gap-2 text-sm font-bold">
                  <span className="text-red-500">${product.price}</span>
                  <span className="text-neutral-400 line-through font-normal text-xs">${product.oldPrice}</span>
                </div>

              </div>
            ))}
          </div>

          {/* ================= BOTTOM PAGINATION BLOCK ================= */}
          <div className="flex items-center justify-center gap-2 mt-12 mb-6">
            <button className="w-8 h-8 rounded-md flex items-center justify-center border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors">
              &lt;
            </button>
            <button className="w-8 h-8 rounded-md flex items-center justify-center bg-[#005B52] text-white font-bold text-xs">
              1
            </button>
            <button className="w-8 h-8 rounded-md flex items-center justify-center border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors font-semibold text-xs">
              2
            </button>
            <span className="text-neutral-400 px-1 text-xs font-bold">...</span>
            <button className="w-8 h-8 rounded-md flex items-center justify-center border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors font-semibold text-xs">
              9
            </button>
            <button className="w-8 h-8 rounded-md flex items-center justify-center border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors font-semibold text-xs">
              10
            </button>
            <button className="w-8 h-8 rounded-md flex items-center justify-center border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors">
              &gt;
            </button>
          </div>

        </main>
      </div>
    </div>
<Footer/>

</>
  );
};

export default Shop;