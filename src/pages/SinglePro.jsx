import { useState } from 'react';
import Footer from '../Component/Footer';

const SinglePro = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('reviews');

    const reviews = [
        { name: "Samantha D.", date: "August 16, 2025", rating: 5, comment: "It did completely upgrade the backyard lounge! Simple to design and clear layout data. Strongly recommended!", verified: true },
        { name: "Ethan R.", date: "August 15, 2025", rating: 4, comment: "Great pergola kit. The manual was crisp. Took us around 4 hours to finish up everything perfectly.", verified: true },
        { name: "Alex M.", date: "August 15, 2025", rating: 5, comment: "The design matrix fits my patio space. Materials feel premium and robust against rain and sun.", verified: true },
        { name: "Olivia P.", date: "August 14, 2025", rating: 5, comment: "Absolutely marvelous piece! Clean lines and great design aesthetic. Customer support helped with sizes.", verified: true },
        { name: "Alex M.", date: "August 15, 2025", rating: 5, comment: "The design matrix fits my patio space. Materials feel premium and robust against rain and sun.", verified: true },
        { name: "Samantha D.", date: "August 16, 2025", rating: 5, comment: "It did completely upgrade the backyard lounge! Simple to design and clear layout data. Strongly recommended!", verified: true },
    ];

    const relatedProducts = [
        { id: 1, title: 'Attached modern pergolas', price: 370, oldPrice: 400, sale: '-30%', rating: 5 },
        { id: 2, title: 'Attached modern pergolas', price: 120, oldPrice: 168, sale: '-40%', rating: 5 },
        { id: 3, title: 'Attached modern pergolas', price: 980, oldPrice: 1180, sale: '-25%', rating: 4 },
        { id: 4, title: 'Attached modern pergolas', price: 950, oldPrice: 1150, sale: '-35%', rating: 5 },
    ];

    return (
        <>
            <div className="w-full bg-white text-black font-sans antialiased min-h-screen px-4 sm:px-8 lg:px-16 py-12 select-none">
                <div className="max-w-7xl mx-auto pt-[120px] flex flex-col gap-12">

                    {/* ================= TOP SECTION: PRODUCT INFO SPLIT ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

                        {/* Left Side: Media Gallery */}
                        <div className="flex flex-col gap-4 w-full">
                            <div className="w-full aspect-[4/3] bg-neutral-50 rounded-sm overflow-hidden border border-neutral-100 shadow-sm">
                                <img src="/single.png" alt="Main Product View" className="w-full h-full object-cover" />
                            </div>
                            {/* Gallery Thumbnails Loop Row */}
                            <div className="grid grid-cols-4 gap-2.5">
                                {[...Array(4)].map((_, idx) => (
                                    <div key={idx} className={`aspect-[4/3] rounded-sm overflow-hidden bg-neutral-50 border cursor-pointer ${idx === 0 ? 'border-emerald-700 ring-1 ring-emerald-700' : 'border-neutral-200'}`}>
                                        <img src="/single.png" alt="Thumbnail" className="w-full h-full object-cover opacity-80" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Configuration Panel */}
                        <div className="flex flex-col text-left">
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Attached modern pergolas</h1>

                            {/* Rating Summary block */}
                            <div className="flex items-center gap-2 mt-2 text-xs font-medium text-neutral-500">
                                <div className="flex items-center text-amber-500 gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <span>(123 reviews)</span>
                                <span>|</span>
                                <span className="text-emerald-700 font-semibold">In Stock</span>
                            </div>

                            <div className="text-2xl font-black mt-4 text-neutral-900">$182.00</div>

                            <p className="text-xs sm:text-sm text-neutral-500 mt-4 leading-relaxed font-normal border-b border-neutral-100 pb-5">
                                Engineered & constructed with high-quality rust-resistant alloy. All segments parameters are locked to match maximum performance and robust architectural aesthetics.
                            </p>

                            {/* Colors Option Selection */}
                            <div className="flex flex-col gap-2 mt-5">
                                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Colors:</span>
                                <div className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-neutral-800 ring-2 ring-offset-2 ring-black cursor-pointer" />
                                    <span className="w-5 h-5 rounded-full bg-teal-500 cursor-pointer" />
                                </div>
                            </div>

                            {/* Size Dropdown Selection */}
                            <div className="flex flex-col gap-2 mt-5">
                                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Size:</span>
                                <select className="w-36 bg-[#F5F5F5] text-xs font-semibold py-2 px-3 rounded-sm border-none focus:outline-none">
                                    <option>10' x 13'</option>
                                    <option>12' x 14'</option>
                                </select>
                            </div>

                            {/* Controls Row */}
                            <div className="flex items-center gap-3 mt-6 flex-wrap">
                                <div className="flex items-center bg-[#F5F5F5] rounded-sm py-1.5 px-3 font-bold text-sm">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 text-neutral-500 hover:text-black">-</button>
                                    <span className="px-3 min-w-[24px] text-center">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="px-2 text-neutral-500 hover:text-black">+</button>
                                </div>
                                <button className="bg-[#005B52] text-white font-bold text-xs py-3 px-6 rounded-sm hover:bg-teal-900 transition-colors uppercase tracking-wider">Add to cart</button>
                                <button className="bg-black text-white font-bold text-xs py-3 px-6 rounded-sm hover:bg-neutral-800 transition-colors uppercase tracking-wider">Buy Now</button>
                            </div>

                            {/* Shipping Info Bars */}
                            <div className="flex flex-col gap-2 mt-8 border-t border-neutral-100 pt-6 text-xs text-neutral-600 font-medium">
                                <div className="flex items-center gap-3 bg-[#F9F9F9] p-3 rounded-sm">
                                    <i className="fas fa-truck text-neutral-800 text-sm" />
                                    <span>Free Delivery — 100% Insurance wrap and tracking Available</span>
                                </div>
                                <div className="flex items-center gap-3 bg-[#F9F9F9] p-3 rounded-sm">
                                    <i className="fas fa-undo text-neutral-800 text-sm" />
                                    <span>Return Policy — 30-day hassle-free replacement index matrix</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ================= CENTER SECTION: TABS INTERACTIVE SYSTEM ================= */}
                    <div className="w-full border-b border-neutral-100 flex items-center justify-center gap-8 mt-6">
                        <button onClick={() => setActiveTab('info')} className={`pb-3 text-sm font-bold tracking-wide transition-all border-b-2 ${activeTab === 'info' ? 'border-black text-black' : 'border-transparent text-neutral-400'}`}>Product Summary</button>
                        <button onClick={() => setActiveTab('reviews')} className={`pb-3 text-sm font-bold tracking-wide transition-all border-b-2 ${activeTab === 'reviews' ? 'border-black text-black' : 'border-transparent text-neutral-400'}`}>Rating & Reviews</button>
                    </div>

                    {/* Tab Panel Render Layer */}
                    {activeTab === 'reviews' && (
                        <div className="w-full flex flex-col gap-8 animate-fadeIn">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <h2 className="text-xl font-bold tracking-tight text-neutral-900">All Reviews <span className="text-neutral-400 text-sm font-medium">(4)</span></h2>
                                <button className="bg-black text-white text-xs font-bold py-2.5 px-5 rounded-md hover:bg-neutral-800 transition-colors">Write a Review</button>
                            </div>

                            {/* Reviews Symmetrical Cards Matrix Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                {reviews.map((rev, idx) => (
                                    <div key={idx} className="bg-white rounded-md p-5 border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col gap-2.5 text-left">
                                        <div className="flex items-center text-amber-400 gap-0.5">
                                            {[...Array(rev.rating)].map((_, i) => (
                                                <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-1.5 font-bold text-sm text-neutral-900">
                                            <span>{rev.name}</span>
                                            {rev.verified && <span className="text-emerald-600 text-xs inline-flex items-center">✓</span>}
                                        </div>
                                        <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">"{rev.comment}"</p>
                                        <span className="text-[10px] text-neutral-400 font-semibold mt-auto">Posted on {rev.date}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="bg-white border border-neutral-200 text-neutral-800 text-xs font-bold py-2 px-6 rounded-md hover:bg-neutral-50 transition-colors mx-auto mt-2 shadow-sm">Load More Reviews</button>
                        </div>
                    )}

                    {/* ================= BOTTOM SECTION: RELATED PRODUCTS ================= */}
                    <div className="w-full flex flex-col items-start gap-6 border-t border-neutral-100 pt-10 mt-6">
                        <div className="flex items-center gap-2 text-sm font-bold tracking-tight text-neutral-900">
                            <span className="w-2 h-4 bg-[#005B52] rounded-xs inline-block" />
                            <h2>Related Products</h2>
                        </div>

                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                            {relatedProducts.map((item) => (
                                <div key={item.id} className="group flex flex-col text-left relative cursor-pointer">
                                    <div className="w-full aspect-[4/3] bg-neutral-50 rounded-sm overflow-hidden border border-neutral-100 relative mb-3">
                                        <img src="/shop.png" alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <span className="absolute top-2 left-2 bg-red-500 text-white text-[9px] font-black px-1 py-0.5 rounded-sm">{item.sale}</span>
                                    </div>
                                    <h3 className="text-xs sm:text-sm font-bold text-neutral-900 truncate mb-1">{item.title}</h3>
                                    <div className="flex items-center gap-1.5 text-xs font-bold">
                                        <span className="text-red-500">${item.price}</span>
                                        <span className="text-neutral-400 line-through font-normal text-[11px]">${item.oldPrice}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default SinglePro;