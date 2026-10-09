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

          {/* Main Big Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif font-light text-neutral-100 leading-[1.1] mb-8">
            Six disciplines. One accountable <br className="hidden md:inline" />
            team.
          </h1>

          {/* Description Paragraph */}
          <p className="text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
            Take a single service or the full turnkey package. Every engagement starts with a site diagnosis and ends with a documented handover.
          </p>

        </div>
      </section>

      {/* ========================================= */}
      {/* SERVICE 01: TURNKEY FIT-OUT */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZj9RLf3mGSfPx9f047lncFBcXxk0eftLjYqnryvGadP_zvOvHPCeBDQ&s=10" 
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
                  Turnkey Fit-Out
                </h2>
              </div>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                We take your space from shell & core or an existing layout to a fully operational venue. Design, engineering, approvals, construction, FF&E and handover — delivered to a fixed programme.
              </p>

              {/* 2-Column Feature List (TEXT MADE NORMAL) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
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
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* SERVICE 02: MEP WORKS (Line Added & Text Normal) */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32 border-t border-[#d8d0c5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
              <div className="mb-6">
                <span className="text-lg md:text-xl font-serif text-[#a47e3b] font-light block mb-2">02</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1c1a17] tracking-tight leading-[1.15]">
                  MEP Works <span className="italic">&</span> Air-Conditioning Enhancement
                </h2>
              </div>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                Cooling is the most common complaint in UAE venues. We audit heat loads, airflow and equipment condition, then upgrade systems so guests stay comfortable at peak occupancy — often while you keep trading.
              </p>

              {/* 2-Column Feature List (TEXT MADE NORMAL) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
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
                    <span className="text-neutral-800 text-sm md:text-base">Fire fighting & alarm (Civil Defence)</span>
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
            </div>

            {/* Right Side: Image */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=1000" 
                alt="MEP Works HVAC Upgrade" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale"
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
      {/* SERVICE 03: CIVIL WORKS (Image Left, Text Right) */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32 border-t border-[#d8d0c5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Image / Placeholder */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              {/* Construction/Civil placeholder image */}
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomZvKP9Ff24wvOmFhcMeULF-bIa1PFvFMFFZ9pJt04g&s=10" 
                alt="Civil & Structural Works" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Bottom Label inside Image Area */}
              <span className="relative z-10 px-6 py-5 text-[10px] md:text-xs tracking-[0.2em] text-neutral-300 uppercase font-medium">
                CIVIL & STRUCTURAL WORKS
              </span>
            </div>

            {/* Right Side: Content & Lists */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
              
              {/* Number and Title */}
              <div className="mb-6">
                <span className="text-lg md:text-xl font-serif text-[#a47e3b] font-light block mb-2">
                  03
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1c1a17] tracking-tight">
                  Civil Works
                </h2>
              </div>

              {/* Main Description */}
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                The groundwork behind every finish. Our civil crews prepare, modify and protect the building fabric to the standards your interiors depend on.
              </p>

              {/* 2-Column Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                
                {/* Column 1 */}
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

                {/* Column 2 */}
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Structural openings & strengthening</span>
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
              
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* SERVICE 04: ACOUSTIC TREATMENT (Text Left, Image Right) */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32 border-t border-[#d8d0c5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
              <div className="mb-6">
                <span className="text-lg md:text-xl font-serif text-[#a47e3b] font-light block mb-2">04</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1c1a17] tracking-tight leading-[1.15]">
                  Acoustic Treatment
                </h2>
              </div>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                Noisy restaurants lose covers; echoing ballrooms lose events. We measure reverberation and noise transfer, then design treatments that disappear into the interior.
              </p>

              {/* 2-Column Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Acoustic survey & measurement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Sound isolation between spaces</span>
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
            </div>

            {/* Right Side: Image Placeholder */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000" 
                alt="Acoustic Ceiling in Restaurant" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale"
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
      {/* SERVICE 05: INTERIOR DESIGN & JOINERY (Image Left, Text Right) */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32 border-t border-[#d8d0c5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Image / Placeholder */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
                alt="Bespoke Joinery & Interior" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* Bottom Label inside Image Area */}
              <span className="relative z-10 px-6 py-5 text-[10px] md:text-xs tracking-[0.2em] text-neutral-300 uppercase font-medium">
                BESPOKE JOINERY & INTERIOR
              </span>
            </div>

            {/* Right Side: Content & Lists */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
              
              {/* Number and Title */}
              <div className="mb-6">
                <span className="text-lg md:text-xl font-serif text-[#a47e3b] font-light block mb-2">
                  05
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1c1a17] tracking-tight leading-[1.15]">
                  Interior Design <span className="italic">&</span> Joinery
                </h2>
              </div>

              {/* Main Description */}
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                Interiors that reflect your brand and survive heavy daily use. From mood boards and 3D renders to site-fitted joinery and final styling.
              </p>

              {/* 2-Column Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                
                {/* Column 1 */}
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

                {/* Column 2 */}
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
              
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* SERVICE 06: MAINTENANCE & AMC (Text Left, Image Right) */}
      {/* ========================================= */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-32 border-t border-[#d8d0c5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
              <div className="mb-6">
                <span className="text-lg md:text-xl font-serif text-[#a47e3b] font-light block mb-2">06</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1c1a17] tracking-tight leading-[1.15]">
                  Maintenance <span className="italic">&</span> AMC
                </h2>
              </div>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light mb-10 max-w-lg">
                Keep your venue opening-day fresh. Annual maintenance contracts combine scheduled servicing with rapid reactive call-outs across the Emirates.
              </p>

              {/* 2-Column Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">HVAC servicing & coil cleaning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">—</span>
                    <span className="text-neutral-800 text-sm md:text-base">Painting, touch-ups & joinery repair</span>
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
                    <span className="text-neutral-800 text-sm md:text-base">Night-time works for live venues</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Image Placeholder */}
            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[300px] sm:h-[400px] md:h-[450px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1000" 
                alt="Maintenance Technician" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale"
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

          {/* Action Button - Text aligned left with break inside */}
          <button className="bg-[#111111] hover:bg-black text-white text-sm md:text-base font-medium px-8 py-4 rounded-sm tracking-wide transition-colors duration-200 shadow-lg flex-shrink-0 text-left leading-snug">
            Book a Site <br /> Survey
          </button>

        </div>
      </div>

</>
  );
}