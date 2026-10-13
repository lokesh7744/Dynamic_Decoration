// 

import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      {/* 1. SERVICES HERO SECTION (Dark Theme) */}
      <section className="w-full bg-[#111111] pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Top Accent Tag */}
          <p className="text-[11px] md:text-xs tracking-[0.25em] text-[#c59d5f] uppercase font-semibold mb-6">
            SERVICES
          </p>

          {/* Main Big Heading (Updated with Sir's Content) */}
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif font-light text-neutral-100 leading-[1.1] mb-8">
            Services Designed Around <br className="hidden md:inline" /> Your Project
          </h1>

          {/* Description Paragraph (Updated with Sir's Content) */}
          <p className="text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl font-light">
            Different commercial spaces require different combinations of design, construction and building services. Explore our service areas to understand how each may support your project.
          </p>

        </div>
      </section>

      {/* ========================================= */}
      {/* SERVICE 01: COMMERCIAL FIT-OUT */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              <img 
                src="/trunky_fit_out.jpg" 
                alt="Turnkey Fit-Out Interior" 
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <span className="relative z-10 px-6 py-5 text-[10px] md:text-xs tracking-[0.2em] text-neutral-300 uppercase font-medium">
                TURNKEY FIT-OUT IN PROGRESS
              </span>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
              <div className="mb-6">
                <span className="text-lg md:text-xl font-serif text-[#a47e3b] font-light block mb-2">01</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1c1a17] tracking-tight">
                  Commercial Fit-Out
                </h2>
              </div>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                Interior layouts, finishes and fit-out activities considered around the intended use and requirements of the space.
              </p>

              {/* 2-Column Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Space planning & concept design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Category A & B fit-out</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">FF&E procurement & install</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Authority & mall approvals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Project & cost management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Snagging, testing & handover</span>
                  </div>
                </div>
              </div>

              {/* Sir's CTA */}
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-[#a47e3b] hover:text-[#1c1a17] transition-colors">
                Explore Fit-Out <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* SERVICE 02: MEP WORKS */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32 border-t border-[#d8d0c5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
              <div className="mb-6">
                <span className="text-lg md:text-xl font-serif text-[#a47e3b] font-light block mb-2">02</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1c1a17] tracking-tight leading-[1.15]">
                  MEP Solutions
                </h2>
              </div>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                Mechanical, electrical and plumbing services aligned with applicable project requirements and coordination needs.
              </p>

              {/* 2-Column Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">HVAC load calculation & redesign</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Ducting, diffusers & balancing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Electrical & lighting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Fire fighting & alarm</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Chilled water, VRF & split systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Kitchen exhaust & fresh air</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Plumbing, drainage & grease traps</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">DEWA / ADDC / SEWA coordination</span>
                  </div>
                </div>
              </div>

              {/* Sir's CTA */}
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-[#a47e3b] hover:text-[#1c1a17] transition-colors">
                Explore MEP <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Right Side: Image */}
            <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              <img 
                src="./MEP Works & Air-Conditioning Enhancement.jpg" 
                alt="MEP Works HVAC Upgrade" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <span className="relative z-10 px-6 py-5 text-[10px] md:text-xs tracking-[0.2em] text-neutral-300 uppercase font-medium">
                HVAC DUCTING UPGRADE
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* SERVICE 03: CIVIL WORKS */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32 border-t border-[#d8d0c5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              <img 
                src="./Civil Works.jpg"
                alt="Civil & Structural Works" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <span className="relative z-10 px-6 py-5 text-[10px] md:text-xs tracking-[0.2em] text-neutral-300 uppercase font-medium">
                CIVIL & STRUCTURAL WORKS
              </span>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
              <div className="mb-6">
                <span className="text-lg md:text-xl font-serif text-[#a47e3b] font-light block mb-2">03</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1c1a17] tracking-tight">
                  Civil Works
                </h2>
              </div>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                Construction, alteration and refurbishment activities within the confirmed project scope.
              </p>

              {/* 2-Column Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Blockwork & partitions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Screeding & levelling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Tiling, stone & flooring</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Structural openings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Waterproofing & insulation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">External & façade works</span>
                  </div>
                </div>
              </div>

              {/* Sir's CTA */}
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-[#a47e3b] hover:text-[#1c1a17] transition-colors">
                Explore Civil Works <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* SERVICE 04: ACOUSTIC SOLUTIONS */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32 border-t border-[#d8d0c5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
              <div className="mb-6">
                <span className="text-lg md:text-xl font-serif text-[#a47e3b] font-light block mb-2">04</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1c1a17] tracking-tight leading-[1.15]">
                  Acoustic Solutions
                </h2>
              </div>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                Acoustic solutions for commercial environments, including sound absorption, noise management, and solutions tailored to each space's specific needs.
              </p>

              {/* 2-Column Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Acoustic survey & measurement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Sound isolation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Home cinemas & meeting rooms</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Absorptive wall & ceiling panels</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">MEP noise & vibration control</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Post-install verification</span>
                  </div>
                </div>
              </div>

              {/* Sir's CTA */}
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-[#a47e3b] hover:text-[#1c1a17] transition-colors">
                Explore Acoustic Solutions <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Right Side: Image */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              <img 
                src="./Acoustic Treatment.jpg" 
                alt="Acoustic Ceiling in Restaurant" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <span className="relative z-10 px-6 py-5 text-[10px] md:text-xs tracking-[0.2em] text-neutral-300 uppercase font-medium">
                ACOUSTIC CEILING IN RESTAURANT
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* SERVICE 05: INTERIOR DESIGN & JOINERY (Kept to match flow) */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32 border-t border-[#d8d0c5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              <img 
                src="./interior house Viemo.jpeg" 
                alt="Bespoke Joinery & Interior" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <span className="relative z-10 px-6 py-5 text-[10px] md:text-xs tracking-[0.2em] text-neutral-300 uppercase font-medium">
                BESPOKE JOINERY & INTERIOR
              </span>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
              <div className="mb-6">
                <span className="text-lg md:text-xl font-serif text-[#a47e3b] font-light block mb-2">05</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1c1a17] tracking-tight leading-[1.15]">
                  Interior Design <span className="italic">&</span> Joinery
                </h2>
              </div>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                Interiors that reflect your brand and survive heavy daily use. From mood boards and 3D renders to site-fitted joinery and final styling.
              </p>

              {/* 2-Column Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Concept & 3D visualisation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Bespoke joinery & counters</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Lighting design</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Gypsum & feature ceilings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Wall finishes & cladding</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Signage & brand elements</span>
                  </div>
                </div>
              </div>

              {/* Added CTA to match flow */}
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-[#a47e3b] hover:text-[#1c1a17] transition-colors">
                Explore Interior Design <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* SERVICE 06: MAINTENANCE & FACILITY SUPPORT */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32 border-t border-[#d8d0c5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
              <div className="mb-6">
                <span className="text-lg md:text-xl font-serif text-[#a47e3b] font-light block mb-2">06</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1c1a17] tracking-tight leading-[1.15]">
                  Maintenance <span className="italic">&</span> Facility Support
                </h2>
              </div>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                Maintenance services focused on the operational needs and upkeep requirements of commercial properties.
              </p>

              {/* 2-Column Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">HVAC servicing & coil cleaning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Painting & joinery repair</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Asset registers & reports</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Electrical & plumbing repairs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">24/7 emergency response</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Night-time works</span>
                  </div>
                </div>
              </div>

              {/* Sir's CTA */}
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-[#a47e3b] hover:text-[#1c1a17] transition-colors">
                Explore Maintenance <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Right Side: Image */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              <img 
                src="./maintainance.jpeg" 
                alt="Maintenance Technician" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <span className="relative z-10 px-6 py-5 text-[10px] md:text-xs tracking-[0.2em] text-neutral-300 uppercase font-medium">
                MAINTENANCE TECHNICIAN ON SITE
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* BOTTOM CTA BANNER (Golden Theme) */}
      {/* ========================================= */}
      <div className="w-full bg-[#b58c56] text-[#1c1a17] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-[44px] font-serif font-light text-[#1c1a17] leading-tight max-w-3xl">
            Not sure which service you need? Start with a survey.
          </h2>

          {/* Action Button */}
          <Link to="/contact" className="bg-[#111111] hover:bg-black text-white text-sm md:text-base font-medium px-8 py-4 rounded-sm tracking-wide transition-colors duration-200 shadow-lg flex-shrink-0 text-center leading-snug">
            Book a Site <br /> Survey
          </Link>

        </div>
      </div>

    </>
  );
}