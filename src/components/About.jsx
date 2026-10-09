import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* ========================================= */}
      {/* ABOUT US HERO SECTION (Dark Theme) */}
      {/* ========================================= */}
      <section className="w-full bg-[#111111] pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-1/2">
              <span className="text-[11px] md:text-xs tracking-[0.25em] text-[#c59d5f] uppercase font-semibold mb-6 block">
                ABOUT US
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif font-light text-neutral-100 leading-[1.1] mb-8">
                Built in the UAE, for<br className="hidden md:block" /> the UAE.
              </h1>
              <p className="text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg font-light">
                Founded in [YEAR], Dynamics Design & Decoration brings designers, MEP engineers, civil teams and craftsmen together under one roof — so clients get one partner who owns the outcome.
              </p>
            </div>

            <div className="w-full lg:w-1/2 relative bg-[#1e1e1e] h-[400px] md:h-[500px] shadow-lg rounded-sm overflow-hidden flex flex-col justify-end mt-8 lg:mt-0">
              <img 
                src="https://plus.unsplash.com/premium_photo-1683121325304-444b731d146c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFib3V0JTIwdXMlMjBwYWdlfGVufDB8fDB8fHww" 
                alt="Team on Site" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <span className="relative z-10 px-6 py-5 text-[10px] tracking-[0.2em] text-neutral-300 uppercase font-medium">
                TEAM ON SITE
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* MISSION, VISION, VALUES SECTION (Light Theme) */}
      {/* ========================================= */}
      <section className="w-full bg-[#f3ede4] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            <div>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-6 block">
                MISSION
              </span>
              <p className="text-[22px] md:text-2xl lg:text-[28px] font-serif text-[#1c1a17] leading-relaxed">
                To solve the real problems inside every space and deliver finished environments that work from day one.
              </p>
            </div>

            <div>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-6 block">
                VISION
              </span>
              <p className="text-[22px] md:text-2xl lg:text-[28px] font-serif text-[#1c1a17] leading-relaxed">
                To be the UAE's most trusted end-to-end fit-out partner for hospitality, retail and F&B.
              </p>
            </div>

            <div>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-6 block">
                VALUES
              </span>
              <ul className="space-y-3 text-[#33312e] font-light text-base md:text-lg">
                <li>Accountability</li>
                <li>Engineering honesty</li>
                <li>Craftsmanship</li>
                <li>Safety first</li>
                <li>On-time delivery</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* LEADERSHIP SECTION (Slightly Darker Beige Theme) */}
      {/* ========================================= */}
      <section className="w-full bg-[#e8e3d8] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1c1a17] mb-12 md:mb-16">
            Leadership
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-square bg-[#1e1e1e] overflow-hidden mb-4 rounded-sm">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Managing Director" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                 <span className="absolute bottom-4 left-4 text-[9px] tracking-[0.2em] text-neutral-300 uppercase font-medium z-10">PORTRAIT</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1c1a17]">[Name]</h3>
              <p className="text-sm text-neutral-600 font-light mt-1">Managing Director</p>
            </div>

            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-square bg-[#1e1e1e] overflow-hidden mb-4 rounded-sm">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Head of MEP" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                 <span className="absolute bottom-4 left-4 text-[9px] tracking-[0.2em] text-neutral-300 uppercase font-medium z-10">PORTRAIT</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1c1a17]">[Name]</h3>
              <p className="text-sm text-neutral-600 font-light mt-1">Head of MEP</p>
            </div>

            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-square bg-[#1e1e1e] overflow-hidden mb-4 rounded-sm">
                 <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" alt="Design Director" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                 <span className="absolute bottom-4 left-4 text-[9px] tracking-[0.2em] text-neutral-300 uppercase font-medium z-10">PORTRAIT</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1c1a17]">[Name]</h3>
              <p className="text-sm text-neutral-600 font-light mt-1">Design Director</p>
            </div>

            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-square bg-[#1e1e1e] overflow-hidden mb-4 rounded-sm">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" alt="Operations & Maintenance" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                 <span className="absolute bottom-4 left-4 text-[9px] tracking-[0.2em] text-neutral-300 uppercase font-medium z-10">PORTRAIT</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1c1a17]">[Name]</h3>
              <p className="text-sm text-neutral-600 font-light mt-1">Operations & Maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* LICENSES & ACCOUNTABILITY SECTION (Light Theme) */}
      {/* ========================================= */}
      <section className="w-full bg-[#f3ede4] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          {/* Left Side: Main Heading */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-light text-[#1c1a17] leading-[1.1]">
              Licensed, approved <span className="italic">&</span> accountable
            </h2>
          </div>

          {/* Right Side: Grid Data */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1 text-base md:text-lg">Trade licence</h3>
              <p className="text-neutral-600 font-light text-sm md:text-base">[Licence No. & issuing authority]</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1 text-base md:text-lg">Civil Defence</h3>
              <p className="text-neutral-600 font-light text-sm md:text-base">[Approved contractor status]</p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-900 mb-1 text-base md:text-lg">Utilities</h3>
              <p className="text-neutral-600 font-light text-sm md:text-base">[DEWA / ADDC registration]</p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-900 mb-1 text-base md:text-lg">Quality & safety</h3>
              <p className="text-neutral-600 font-light text-sm md:text-base">[ISO 9001 / 14001 / 45001 if held]</p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-900 mb-1 text-base md:text-lg">Insurance</h3>
              <p className="text-neutral-600 font-light text-sm md:text-base">CAR & third-party liability cover</p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-900 mb-1 text-base md:text-lg">Coverage</h3>
              <p className="text-neutral-600 font-light text-sm md:text-base leading-relaxed">
                Dubai, Abu Dhabi, Sharjah & Northern Emirates
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* BOTTOM CTA BANNER: CAREERS (Dark Theme) */}
      {/* ========================================= */}
      <div className="w-full bg-[#111111] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <h2 className="text-3xl md:text-[44px] font-serif font-light text-neutral-100 leading-tight">
            Join our team — we're hiring on-site talent.
          </h2>

          <Link 
            to="/contact" 
            className="bg-[#c59d5f] hover:bg-[#b08b4e] text-neutral-950 text-sm md:text-base font-semibold px-8 py-3.5 rounded-sm tracking-wide transition-colors duration-200 flex-shrink-0"
          >
            Careers
          </Link>

        </div>
      </div>

    </>
  );
}