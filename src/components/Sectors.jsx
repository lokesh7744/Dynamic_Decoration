import { Link } from "react-router-dom";

export default function Sectors() {
  return (
    <>
      {/* ========================================= */}
      {/* SECTORS HERO SECTION (Dark Theme) */}
      {/* ========================================= */}
      <section className="w-full bg-[#111111] pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          
          <p className="text-[11px] md:text-xs tracking-[0.25em] text-[#c59d5f] uppercase font-semibold mb-6">
            SECTORS
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif font-light text-neutral-100 leading-[1.1] mb-8 max-w-4xl">
            We understand how your space earns money.
          </h1>

          <p className="text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
            Guest comfort, footfall, table turns, brand standards — each sector has its own pressures. Our solutions are built around them.
          </p>

        </div>
      </section>

      {/* ========================================= */}
      {/* SECTOR 01: HOSPITALITY (50/50 Split Layout) */}
      {/* ========================================= */}
      <div className="w-full flex flex-col lg:flex-row">
        
        {/* Left Side: Full-height Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] bg-[#1e1e1e]">
          {/* Hotel Lobby / Guest Room Placeholder Image */}
          <img 
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200" 
            alt="Hotel Lobby & Guest Room" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
          />
          
          {/* Dark gradient at the bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          {/* Bottom Left Label */}
          <span className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[10px] tracking-[0.2em] text-neutral-300 uppercase font-medium z-10">
            HOTEL LOBBY / GUEST ROOM
          </span>
        </div>

        {/* Right Side: Content Box */}
        <div className="w-full lg:w-1/2 bg-[#f3ede4] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 lg:py-24">
          
          {/* Eyebrow Tag */}
          <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-6 block">
            HOSPITALITY
          </span>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1c1a17] leading-[1.1] mb-8">
            Hotels, resorts <span className="italic">&</span><br className="hidden md:block" /> serviced apartments
          </h2>
          
          {/* Paragraphs */}
          <div className="text-neutral-700 font-light space-y-6 text-base md:text-lg max-w-xl">
            <p>
              We refurbish and upgrade live hotels floor by floor, keeping guests undisturbed and rooms revenue-ready.
            </p>
            
            <p>
              <strong className="font-semibold text-neutral-900">Common issues we solve:</strong> rooms that won't cool, condensation and odours, noisy corridors and ballrooms, tired finishes.
            </p>
            
            <p>
              <strong className="font-semibold text-neutral-900">What we deliver:</strong> guest room & corridor refurbishments, lobby and ballroom fit-out, HVAC enhancement, acoustic upgrades, back-of-house and kitchen works, AMC.
            </p>
          </div>

        </div>
      </div>

      {/* ========================================= */}
      {/* SECTOR 02: RETAIL (Text Left, Image Right) */}
      {/* ========================================= */}
      {/* flex-col-reverse lg:flex-row se mobile par image upar aayegi */}
      <div className="w-full flex flex-col-reverse lg:flex-row">
        
        {/* Left Side: Content Box */}
        <div className="w-full lg:w-1/2 bg-[#f3ede4] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 lg:py-24">
          
          {/* Eyebrow Tag */}
          <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-6 block">
            RETAIL
          </span>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1c1a17] leading-[1.1] mb-8">
            Mall units, flagships <span className="italic">&</span><br className="hidden md:block" /> kiosks
          </h2>
          
          {/* Paragraphs */}
          <div className="text-neutral-700 font-light space-y-6 text-base md:text-lg max-w-xl">
            <p>
              Mall fit-outs run on unforgiving deadlines. We know landlord design criteria and approval processes across UAE malls, and build to open on the date you announced.
            </p>
            
            <p>
              <strong className="font-semibold text-neutral-900">Common issues we solve:</strong> failed landlord inspections, delayed NOCs, poor display lighting, rollouts across multiple locations.
            </p>
            
            <p>
              <strong className="font-semibold text-neutral-900">What we deliver:</strong> shopfronts, display joinery, lighting, storage, MEP to mall specification, multi-site rollouts and store refreshes.
            </p>
          </div>

        </div>

        {/* Right Side: Full-height Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] bg-[#1e1e1e]">
          {/* Retail Store Placeholder Image */}
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" 
            alt="Retail Store Interior" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
          />
          
          {/* Dark gradient at the bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          {/* Bottom Left Label */}
          <span className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[10px] tracking-[0.2em] text-neutral-300 uppercase font-medium z-10">
            RETAIL STORE INTERIOR
          </span>
        </div>
        
      </div>

      {/* ========================================= */}
      {/* SECTOR 03: F & B (Image Left, Text Right) */}
      {/* ========================================= */}
      <div className="w-full flex flex-col lg:flex-row">
        
        {/* Left Side: Full-height Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] bg-[#1e1e1e]">
          {/* Restaurant / Open Kitchen Placeholder Image */}
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200" 
            alt="Restaurant Dining Room and Open Kitchen" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
          />
          
          {/* Dark gradient at the bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          {/* Bottom Left Label */}
          <span className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[10px] tracking-[0.2em] text-neutral-300 uppercase font-medium z-10">
            RESTAURANT DINING ROOM / OPEN KITCHEN
          </span>
        </div>

        {/* Right Side: Content Box */}
        <div className="w-full lg:w-1/2 bg-[#f3ede4] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 lg:py-24">
          
          {/* Eyebrow Tag */}
          <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-6 block">
            F & B
          </span>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1c1a17] leading-[1.1] mb-8">
            Restaurants, cafés <span className="italic">&</span><br className="hidden md:block" /> lounges
          </h2>
          
          {/* Paragraphs */}
          <div className="text-neutral-700 font-light space-y-6 text-base md:text-lg max-w-xl">
            <p>
              A great restaurant is as much engineering as atmosphere. We balance kitchen extraction, cooling, acoustics and design so diners stay longer and come back.
            </p>
            
            <p>
              <strong className="font-semibold text-neutral-900">Common issues we solve:</strong> hot dining rooms, smoke and odour spill, loud rooms, grease trap and drainage failures, food-safety compliance.
            </p>
            
            <p>
              <strong className="font-semibold text-neutral-900">What we deliver:</strong> front- and back-of-house fit-out, kitchen exhaust & fresh air, gas and drainage, acoustic ceilings, bars, terraces and signage.
            </p>
          </div>

        </div>
      </div>

      {/* ========================================= */}
      {/* BOTTOM CTA BANNER (Dark Theme) */}
      {/* ========================================= */}
      <div className="w-full bg-[#111111] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Left Text */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-neutral-100 tracking-wide">
            Also serving offices, clinics and residential villas.
          </h3>

          {/* Right Button */}
          <Link 
            to="/contact" 
            className="bg-[#c59d5f] hover:bg-[#b08b4e] text-neutral-950 text-sm font-semibold px-8 py-3.5 rounded-sm transition-colors duration-200 whitespace-nowrap flex-shrink-0"
          >
            Discuss Your Space
          </Link>
          
        </div>
      </div>

    </>
  );
}