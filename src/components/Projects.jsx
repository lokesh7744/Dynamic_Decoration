import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  // Ye state filter buttons ko active/inactive karne ke liye hai
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Categories ki list
  const filters = ["All", "Hospitality", "Retail", "F&B", "MEP", "Acoustics"];

  return (
    <>
      {/* ========================================= */}
      {/* PROJECTS HERO & FILTER SECTION (Dark Theme) */}
      {/* ========================================= */}
      <section className="w-full bg-[#111111] pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Eyebrow Tag */}
          <p className="text-[11px] md:text-xs tracking-[0.25em] text-[#c59d5f] uppercase font-semibold mb-6">
            PORTFOLIO
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif font-light text-neutral-100 leading-[1.1] mb-12 max-w-5xl">
            Problems found. Solutions delivered.
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 text-sm transition-colors duration-200 ${
                  activeFilter === filter
                    ? "bg-[#c59d5f] text-neutral-950 font-semibold border border-[#c59d5f]"
                    : "bg-transparent text-neutral-300 border border-neutral-700 hover:border-neutral-400 hover:text-white font-medium"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

        </div>
      </section>
      
      {/* ========================================= */}
      {/* CASE STUDY 01 (Image Left, Details Right) */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Image / Placeholder */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[450px] md:h-[600px] lg:h-[700px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              {/* HVAC/MEP Placeholder Image */}
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=1200" 
                alt="Hotel HVAC Enhancement" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
              />
              
              {/* Dark gradient for label readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              
              {/* Bottom Label inside Image Area */}
              <span className="relative z-10 px-6 py-5 text-[10px] md:text-xs tracking-[0.2em] text-neutral-300 uppercase font-medium">
                BEFORE / AFTER — HOTEL HVAC ENHANCEMENT
              </span>
            </div>

            {/* Right Side: Case Study Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              
              {/* Eyebrow Tag */}
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-6 block">
                CASE STUDY · HOSPITALITY · MEP
              </span>
              
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-serif font-light text-[#1c1a17] leading-[1.1] mb-10">
                Air-Conditioning Enhancement, [Hotel Name], [Emirate]
              </h2>
              
              {/* Detailed Breakdown */}
              <div className="space-y-8 text-base md:text-lg text-neutral-700 font-light">
                
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">The problem</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    [Describe the issue — e.g. guest complaints of warm rooms and humidity during summer peak occupancy.]
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Our diagnosis</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    [e.g. heat-load survey, airflow measurement, inspection of FCUs, ducting and controls.]
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">The solution</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    [e.g. re-sized units, duct modifications, re-balancing and new controls — phased floor by floor at night.]
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">The result</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    [Measured outcome — temperature achieved, complaints reduced, energy impact.]
                  </p>
                </div>

              </div>

              {/* Project Stats Footer */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#d8d0c5]">
                
                <div>
                  <span className="block text-sm font-semibold text-neutral-900 mb-1">Duration</span>
                  <span className="block text-sm text-neutral-600">[X weeks]</span>
                </div>
                
                <div>
                  <span className="block text-sm font-semibold text-neutral-900 mb-1">Scope</span>
                  <span className="block text-sm text-neutral-600">MEP · Civil · Finishes</span>
                </div>
                
                <div>
                  <span className="block text-sm font-semibold text-neutral-900 mb-1">Delivery</span>
                  <span className="block text-sm text-neutral-600">Live hotel, no closures</span>
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* ========================================= */}
      {/* PORTFOLIO GRID SECTION (6 Cards) */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] py-10 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            
            {/* Project 1: Restaurant */}
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-[280px] md:h-[320px] bg-[#1e1e1e] overflow-hidden rounded-sm mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" 
                  alt="Restaurant Fit-out" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.15em] text-neutral-300 uppercase font-medium z-10">
                  RESTAURANT FIT-OUT
                </span>
              </div>
              <span className="text-[10px] tracking-[0.15em] text-[#a47e3b] uppercase font-semibold mb-2">
                F&B · TURNKEY
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-[#1c1a17] mb-3">
                [Restaurant Name], [Location]
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Full fit-out including kitchen extraction, bar joinery and acoustic ceiling.
              </p>
            </div>

            {/* Project 2: Retail */}
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-[280px] md:h-[320px] bg-[#1e1e1e] overflow-hidden rounded-sm mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800" 
                  alt="Retail Store" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.15em] text-neutral-300 uppercase font-medium z-10">
                  RETAIL STORE
                </span>
              </div>
              <span className="text-[10px] tracking-[0.15em] text-[#a47e3b] uppercase font-semibold mb-2">
                RETAIL · FIT-OUT
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-[#1c1a17] mb-3">
                [Brand] Store, [Mall Name]
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Shopfront, display joinery and MEP delivered to landlord criteria.
              </p>
            </div>

            {/* Project 3: Acoustics */}
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-[280px] md:h-[320px] bg-[#1e1e1e] overflow-hidden rounded-sm mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" 
                  alt="Ballroom Acoustics" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.15em] text-neutral-300 uppercase font-medium z-10">
                  BALLROOM ACOUSTICS
                </span>
              </div>
              <span className="text-[10px] tracking-[0.15em] text-[#a47e3b] uppercase font-semibold mb-2">
                HOSPITALITY · ACOUSTICS
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-[#1c1a17] mb-3">
                Ballroom Acoustic Upgrade, [Hotel]
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Reverberation control with concealed absorptive panels.
              </p>
            </div>

            {/* Project 4: Cafe */}
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-[280px] md:h-[320px] bg-[#1e1e1e] overflow-hidden rounded-sm mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" 
                  alt="Cafe Interior" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.15em] text-neutral-300 uppercase font-medium z-10">
                  CAFÉ
                </span>
              </div>
              <span className="text-[10px] tracking-[0.15em] text-[#a47e3b] uppercase font-semibold mb-2">
                F&B · INTERIORS
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-[#1c1a17] mb-3">
                [Café Name], [Location]
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Concept-to-opening interior with bespoke counter and terrace.
              </p>
            </div>

            {/* Project 5: Refurbishment */}
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-[280px] md:h-[320px] bg-[#1e1e1e] overflow-hidden rounded-sm mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800" 
                  alt="Guest Room Refurbishment" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.15em] text-neutral-300 uppercase font-medium z-10">
                  GUEST ROOM REFURBISHMENT
                </span>
              </div>
              <span className="text-[10px] tracking-[0.15em] text-[#a47e3b] uppercase font-semibold mb-2">
                HOSPITALITY · REFURB
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-[#1c1a17] mb-3">
                Guest Room Refurbishment, [Hotel]
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Phased refurbishment of [XX] keys while the hotel remained open.
              </p>
            </div>

            {/* Project 6: Maintenance */}
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-[280px] md:h-[320px] bg-[#1e1e1e] overflow-hidden rounded-sm mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                  alt="Maintenance Contract" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.15em] text-neutral-300 uppercase font-medium z-10">
                  MAINTENANCE CONTRACT
                </span>
              </div>
              <span className="text-[10px] tracking-[0.15em] text-[#a47e3b] uppercase font-semibold mb-2">
                MAINTENANCE · AMC
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-[#1c1a17] mb-3">
                Multi-Site AMC, [Client]
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Preventive and reactive maintenance across [X] outlets.
              </p>
            </div>

          </div>
        </div>
      </div>
      {/* ========================================= */}
      {/* BOTTOM CTA BANNER (Golden Theme) */}
      {/* ========================================= */}
      <div className="w-full bg-[#b58c56] text-[#1c1a17] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-[44px] font-serif font-light text-[#1c1a17] leading-tight">
            Your project could be next.
          </h2>

          {/* Action Button */}
          {/* Dhyan rakhein ki top par import { Link } from "react-router-dom"; add kiya ho */}
          <Link 
            to="/contact" 
            className="bg-[#111111] hover:bg-black text-white text-sm md:text-base font-medium px-8 py-4 rounded-sm tracking-wide transition-colors duration-200 shadow-lg flex-shrink-0"
          >
            Get a Proposal
          </Link>

        </div>
      </div>
    </>
  );
}