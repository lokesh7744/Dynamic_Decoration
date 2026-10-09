import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 1. MAIN HERO CONTENT */}
      <div className="bg-[#111111] text-white pt-32 md:pt-40 lg:pt-48 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col space-y-6">
            <p className="text-[11px] md:text-xs text-[#c59d5f] tracking-[0.25em] uppercase font-medium">
              FIT-OUT • MEP • CIVIL • ACOUSTICS • MAINTENANCE – UAE
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] text-neutral-100">
              Spaces engineered <br />
              to perform. <br />
              <span className="italic font-serif font-normal text-[#c59d5f]">
                Finished to impress.
              </span>
            </h1>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl">
              Dynamics Design & Decoration delivers complete turnkey fit-out
              across Dubai, Abu Dhabi and the Northern Emirates — from MEP and
              civil works to acoustic treatment, bespoke interiors and long-term
              maintenance. One team. One contract. One point of accountability.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* BUTTONS CHANGED TO LINKS */}
              <Link to="/contact" className="bg-[#c59d5f] hover:bg-[#b08b4e] text-neutral-950 text-xs md:text-sm font-semibold px-7 py-3.5 rounded-sm tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer block text-center">
                Start Your Project
              </Link>
              <Link to="/projects" className="border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/50 text-neutral-200 text-xs md:text-sm font-medium px-7 py-3.5 rounded-sm tracking-wider uppercase transition-all duration-200 cursor-pointer block text-center">
                View Our Work
              </Link>
            </div>
          </div>

          <div className="w-full h-80 lg:h-[480px] rounded-sm relative overflow-hidden border border-neutral-800 shadow-2xl group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" 
              alt="Restaurant Interior Fit-out" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

        </div>
      </div>

      {/* 2. STATS STRIP */}
      <div className="w-full border-t border-neutral-800 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-800/80">
          <div className="flex flex-col justify-center pr-4">
            <span className="text-3xl md:text-4xl font-serif text-white font-light tracking-tight">[XX]+</span>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-light">Years in UAE construction</span>
          </div>
          <div className="flex flex-col justify-center pt-6 md:pt-0 md:pl-8 pr-4">
            <span className="text-3xl md:text-4xl font-serif text-white font-light tracking-tight">[XXX]+</span>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-light">Projects delivered</span>
          </div>
          <div className="flex flex-col justify-center pt-6 md:pt-0 md:pl-8 pr-4">
            <span className="text-3xl md:text-4xl font-serif text-white font-light tracking-tight">7</span>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-light">Emirates served</span>
          </div>
          <div className="flex flex-col justify-center pt-6 md:pt-0 md:pl-8">
            <span className="text-3xl md:text-4xl font-serif text-white font-light tracking-tight">24/7</span>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-light">Maintenance response</span>
          </div>
        </div>
      </div>

      {/* 3. LIGHT SECTION: TRUSTED BY + WHO WE ARE */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17]">
        <div className="border-b border-[#e4dcce] py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-[11px] md:text-xs tracking-[0.25em] uppercase font-semibold text-[#8b8277] whitespace-nowrap">
              TRUSTED BY
            </div>

            <div className="w-full flex items-center justify-between overflow-x-auto gap-8 scrollbar-hide py-1">
              <span className="text-xs md:text-sm font-mono tracking-wider text-[#6e675e] whitespace-nowrap">[CLIENT LOGO]</span>
              <span className="text-xs md:text-sm font-mono tracking-wider text-[#6e675e] whitespace-nowrap">[CLIENT LOGO]</span>
              <span className="text-xs md:text-sm font-mono tracking-wider text-[#6e675e] whitespace-nowrap">[CLIENT LOGO]</span>
              <span className="text-xs md:text-sm font-mono tracking-wider text-[#6e675e] whitespace-nowrap">[CLIENT LOGO]</span>
              <span className="text-xs md:text-sm font-mono tracking-wider text-[#6e675e] whitespace-nowrap">[CLIENT LOGO]</span>
              <span className="text-xs md:text-sm font-mono tracking-wider text-[#6e675e] whitespace-nowrap">[CLIENT LOGO]</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs tracking-[0.25em] text-[#a47e3b] uppercase font-semibold mb-6">
                WHO WE ARE
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.15] text-[#1c1a17]">
                We find the problem <br />
                before we build the <br />
                solution.
              </h2>
            </div>

            <div className="flex flex-col space-y-6 pt-2 lg:pt-8 text-neutral-700 text-base md:text-lg leading-relaxed">
              <p>
                Most fit-out problems in the UAE are not aesthetic — they are hidden.
                Undersized cooling in a packed restaurant. A hotel ballroom that echoes.
                A retail unit whose drainage fails the mall's inspection a week before opening.
              </p>

              <p>
                Our engineers and designers start every project with a site diagnosis,
                then design a customised solution and deliver it end-to-end: authority
                approvals, MEP, civil, joinery, finishes, handover and aftercare — all under one roof.
              </p>

              <div className="pt-2">
                {/* LINK ADDED FOR ABOUT PAGE */}
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[#a47e3b] hover:text-[#805e26] font-medium transition-all group"
                >
                  <span>Our story</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SERVICES SECTION */}
      <div className="w-full bg-[#111111] text-white pt-24 pb-28 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-neutral-100 tracking-tight">
              Everything under one contract
            </h2>
            
            {/* LINK ADDED FOR SERVICES PAGE */}
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-wider text-[#c59d5f] hover:text-[#e0b675] font-medium transition-colors"
            >
              <span>All services</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Card 01 */}
            <div className="p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between lg:border-b lg:border-neutral-500 max-lg:border-b max-lg:border-neutral-500 hover:bg-neutral-900/40 transition-colors">
              <div>
                <span className="text-xs md:text-sm font-serif tracking-widest text-[#c59d5f] font-light block mb-3">01</span>
                <h3 className="text-xl md:text-2xl font-serif text-white font-normal">Turnkey Fit-Out</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mt-4">
                Shell & core to handover for hotels, restaurants, retail and offices — design, approvals, build and snagging managed by one team.
              </p>
            </div>

            {/* Card 02 */}
            <div className="p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between lg:border-b lg:border-l lg:border-neutral-500 max-lg:border-b max-lg:border-neutral-500 hover:bg-neutral-900/40 transition-colors">
              <div>
                <span className="text-xs md:text-sm font-serif tracking-widest text-[#c59d5f] font-light block mb-3">02</span>
                <h3 className="text-xl md:text-2xl font-serif text-white font-normal">MEP Works</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mt-4">
                HVAC design and enhancement, electrical, plumbing, drainage, fire fighting and alarm systems — compliant with DEWA, ADDC and Civil Defence.
              </p>
            </div>

            {/* Card 03 */}
            <div className="p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between lg:border-b lg:border-l lg:border-neutral-500 max-lg:border-b max-lg:border-neutral-500 hover:bg-neutral-900/40 transition-colors">
              <div>
                <span className="text-xs md:text-sm font-serif tracking-widest text-[#c59d5f] font-light block mb-3">03</span>
                <h3 className="text-xl md:text-2xl font-serif text-white font-normal">Civil Works</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mt-4">
                Blockwork, partitions, structural modifications, screeding, waterproofing, flooring and façade works.
              </p>
            </div>

            {/* Card 04 */}
            <div className="p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between max-lg:border-b max-lg:border-neutral-500 hover:bg-neutral-900/40 transition-colors">
              <div>
                <span className="text-xs md:text-sm font-serif tracking-widest text-[#c59d5f] font-light block mb-3">04</span>
                <h3 className="text-xl md:text-2xl font-serif text-white font-normal">Acoustic Treatment</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mt-4">
                Sound measurement, absorption panels, isolation, acoustic ceilings and noise control for restaurants, ballrooms and offices.
              </p>
            </div>

            {/* Card 05 */}
            <div className="p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between lg:border-l lg:border-neutral-500 max-lg:border-b max-lg:border-neutral-500 hover:bg-neutral-900/40 transition-colors">
              <div>
                <span className="text-xs md:text-sm font-serif tracking-widest text-[#c59d5f] font-light block mb-3">05</span>
                <h3 className="text-xl md:text-2xl font-serif text-white font-normal">Interior Design & Joinery</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mt-4">
                Concept design, 3D visualisation, bespoke joinery, gypsum ceilings, lighting design and FF&E.
              </p>
            </div>

            {/* Card 06 */}
            <div className="p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between lg:border-l lg:border-neutral-500 hover:bg-neutral-900/40 transition-colors">
              <div>
                <span className="text-xs md:text-sm font-serif tracking-widest text-[#c59d5f] font-light block mb-3">06</span>
                <h3 className="text-xl md:text-2xl font-serif text-white font-normal">Maintenance (AMC)</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mt-4">
                Planned preventive and reactive maintenance contracts that keep HVAC, electrical and finishes performing year-round.
              </p>
            </div>

          </div>

        </div>
      </div>
      
      {/* 5. HOW WE WORK SECTION */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-20 md:py-28 border-t border-[#e2d8c9]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-16">
            <p className="text-xs tracking-[0.25em] text-[#a47e3b] uppercase font-semibold mb-4">
              HOW WE WORK
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1c1a17] tracking-tight">
              From diagnosis to handover
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            
            <div className="border-t border-neutral-400 pt-6 flex flex-col justify-start">
              <span className="text-4xl md:text-5xl font-serif text-[#a47e3b] font-light mb-4 block">1</span>
              <h3 className="text-lg font-semibold text-[#1c1a17] mb-2">Site Survey</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-normal">Free inspection, load checks and issue identification.</p>
            </div>

            <div className="border-t border-neutral-400 pt-6 flex flex-col justify-start">
              <span className="text-4xl md:text-5xl font-serif text-[#a47e3b] font-light mb-4 block">2</span>
              <h3 className="text-lg font-semibold text-[#1c1a17] mb-2">Custom Solution</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-normal">Design, engineering and a transparent, itemised BOQ.</p>
            </div>

            <div className="border-t border-neutral-400 pt-6 flex flex-col justify-start">
              <span className="text-4xl md:text-5xl font-serif text-[#a47e3b] font-light mb-4 block">3</span>
              <h3 className="text-lg font-semibold text-[#1c1a17] mb-2">Approvals</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-normal">Municipality, Civil Defence, DEWA/ADDC, mall and landlord NOCs.</p>
            </div>

            <div className="border-t border-neutral-400 pt-6 flex flex-col justify-start">
              <span className="text-4xl md:text-5xl font-serif text-[#a47e3b] font-light mb-4 block">4</span>
              <h3 className="text-lg font-semibold text-[#1c1a17] mb-2">Build</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-normal">In-house teams, weekly reports, programme-driven delivery.</p>
            </div>

            <div className="border-t border-neutral-400 pt-6 flex flex-col justify-start">
              <span className="text-4xl md:text-5xl font-serif text-[#a47e3b] font-light mb-4 block">5</span>
              <h3 className="text-lg font-semibold text-[#1c1a17] mb-2">Handover & Care</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-normal">Testing, commissioning, as-builts, warranty and AMC.</p>
            </div>

          </div>

        </div>
      </div>
      
      {/* 6. SELECTED PROJECTS SECTION - WITH IMAGES */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1c1a17] tracking-tight">
              Selected projects
            </h2>
            
            {/* LINK ADDED FOR PROJECTS PAGE */}
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs md:text-sm text-neutral-600 hover:text-black transition-colors font-medium group"
            >
              <span className="text-[#c59d5f]">View portfolio</span>
              <span className="group-hover:translate-x-1 transition-transform text-[#c59d5f]">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* LEFT: Large Main Project */}
            <div className="lg:col-span-2 flex flex-col h-[420px] md:h-[500px] bg-[#1a1a1a] rounded-sm overflow-hidden border border-neutral-800 shadow-md group cursor-pointer">
              
              <div className="relative flex-1 flex flex-col justify-end p-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Hotel Fit-out" 
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent pointer-events-none"></div>
                <span className="relative z-10 text-[10px] md:text-xs tracking-[0.2em] text-[#e3e3e3] uppercase font-semibold drop-shadow-lg">
                  HOTEL AIR-CONDITIONING ENHANCEMENT
                </span>
              </div>

              <div className="bg-[#111111] px-6 py-5 border-t border-neutral-800">
                <span className="text-[10px] md:text-[11px] tracking-widest text-[#c59d5f] uppercase block mb-1 font-medium">
                  HOSPITALITY • MEP
                </span>
                <h3 className="text-base md:text-lg font-serif text-white font-normal">
                  Air-Conditioning Enhancement — [Hotel Name], Dubai
                </h3>
              </div>

            </div>

            {/* RIGHT: 2 Stacked Projects */}
            <div className="flex flex-col gap-6 h-[420px] md:h-[500px]">
              
              {/* Right Top Card (Restaurant) */}
              <div className="flex-1 flex flex-col bg-[#1a1a1a] rounded-sm overflow-hidden border border-neutral-800 shadow-md group cursor-pointer">
                <div className="relative flex-1 flex flex-col justify-end p-5 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" 
                    alt="Restaurant Fit-out" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent pointer-events-none"></div>
                  <span className="relative z-10 text-[10px] md:text-[11px] tracking-[0.2em] text-[#e3e3e3] uppercase font-semibold drop-shadow-lg">
                    RESTAURANT FIT-OUT
                  </span>
                </div>
                <div className="bg-[#111111] px-5 py-4 border-t border-neutral-800">
                  <span className="text-[9px] md:text-[10px] tracking-widest text-[#c59d5f] uppercase block mb-0.5 font-medium">
                    F&B • TURNKEY
                  </span>
                  <h3 className="text-sm md:text-base font-serif text-white font-normal">
                    [Restaurant Name], [Location]
                  </h3>
                </div>
              </div>

              {/* Right Bottom Card (Retail) */}
              <div className="flex-1 flex flex-col bg-[#1a1a1a] rounded-sm overflow-hidden border border-neutral-800 shadow-md group cursor-pointer">
                <div className="relative flex-1 flex flex-col justify-end p-5 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800" 
                    alt="Retail Store Fit-out" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent pointer-events-none"></div>
                  <span className="relative z-10 text-[10px] md:text-[11px] tracking-[0.2em] text-[#e3e3e3] uppercase font-semibold drop-shadow-lg">
                    RETAIL STORE FIT-OUT
                  </span>
                </div>
                <div className="bg-[#111111] px-5 py-4 border-t border-neutral-800">
                  <span className="text-[9px] md:text-[10px] tracking-widest text-[#c59d5f] uppercase block mb-0.5 font-medium">
                    RETAIL • FIT-OUT
                  </span>
                  <h3 className="text-sm md:text-base font-serif text-white font-normal">
                    [Brand] Store, [Mall Name]
                  </h3>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 7. WHY OPERATORS CHOOSE DYNAMICS SECTION */}
      <div className="w-full bg-[#ede6db] text-[#1c1a17] py-24 md:py-32 border-t border-[#e2d8c9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1c1a17] leading-[1.15] tracking-tight">
                Why UAE operators <br className="hidden sm:inline" />
                choose Dynamics
              </h2>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#1c1a17]">Single point of responsibility</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">Design, MEP, civil and interiors under one contract — no finger-pointing between trades.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#1c1a17]">Approval specialists</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">We handle authority and mall submissions so you open on schedule.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#1c1a17]">Operates while you trade</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">Night shifts and phased works for live hotels, restaurants and stores.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#1c1a17]">Transparent pricing</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">Itemised BOQs, fixed-price options and no surprise variations.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#1c1a17]">Built for the climate</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">Cooling, humidity and material choices engineered for Gulf summers.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#1c1a17]">Aftercare that lasts</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">Defects liability, warranties and optional AMC from day one.</p>
              </div>

            </div>

          </div>
        </div>
      </div>
      
      {/* 8. CLIENT TESTIMONIAL SECTION */}
      <div className="w-full bg-[#f3ede4] text-[#1c1a17] py-24 md:py-32 border-t border-[#e2d8c9]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-light leading-[1.35] text-[#1c1a17]">
            “[Client testimonial — e.g. how Dynamics solved a cooling problem <br className="hidden lg:inline" />
            in a live hotel without disrupting guests.]”
          </blockquote>

          <p className="mt-8 text-[11px] md:text-xs tracking-[0.25em] uppercase text-neutral-600 font-mono">
            [NAME] • [TITLE], [COMPANY]
          </p>

        </div>
      </div>

      {/* 9. BOTTOM CTA BANNER */}
      <div className="w-full bg-[#b88548] text-[#1c1a17] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1c1a17] leading-tight max-w-2xl">
            Planning a fit-out or fixing a <br className="hidden sm:inline" />
            problem space?
          </h2>

          {/* BOTTOM CTA CHANGED TO LINK */}
          <Link to="/contact" className="bg-[#111111] hover:bg-black text-white text-xs md:text-sm font-medium px-8 py-4 rounded-sm tracking-wider uppercase transition-colors duration-200 shadow-lg whitespace-nowrap cursor-pointer">
            Book a Free Site Survey
          </Link>

        </div>
      </div>
    </section>
  );
}