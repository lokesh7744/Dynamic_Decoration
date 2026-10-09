export default function Contact() {
  return (
    <>
      {/* ========================================= */}
      {/* CONTACT HERO SECTION (Dark Theme) */}
      {/* ========================================= */}
      <section className="w-full bg-[#111111] pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          
          <p className="text-[11px] md:text-xs tracking-[0.25em] text-[#c59d5f] uppercase font-semibold mb-6">
            CONTACT
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif font-light text-neutral-100 leading-[1.1] mb-8 max-w-4xl">
            Tell us about your space.
          </h1>

          <p className="text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
            Share a few details and our team will arrange a free site survey, typically within [XX] working hours.
          </p>

        </div>
      </section>

      {/* ========================================= */}
      {/* CONTACT FORM & INFO SECTION (Light Theme) */}
      {/* ========================================= */}
      <section className="w-full bg-[#f3ede4] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT SIDE: FORM */}
          <div className="w-full lg:w-[60%]">
            <form className="w-full flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] md:text-xs tracking-wider text-neutral-600 uppercase font-semibold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full bg-white border border-neutral-300 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#c59d5f] text-neutral-800 placeholder-neutral-400 transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] md:text-xs tracking-wider text-neutral-600 uppercase font-semibold mb-2">Company</label>
                  <input 
                    type="text" 
                    placeholder="Company / brand" 
                    className="w-full bg-white border border-neutral-300 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#c59d5f] text-neutral-800 placeholder-neutral-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] md:text-xs tracking-wider text-neutral-600 uppercase font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="name@company.ae" 
                    className="w-full bg-white border border-neutral-300 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#c59d5f] text-neutral-800 placeholder-neutral-400 transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] md:text-xs tracking-wider text-neutral-600 uppercase font-semibold mb-2">Phone</label>
                  <input 
                    type="text" 
                    placeholder="+971" 
                    className="w-full bg-white border border-neutral-300 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#c59d5f] text-neutral-800 placeholder-neutral-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] md:text-xs tracking-wider text-neutral-600 uppercase font-semibold mb-2">Sector</label>
                  <select className="w-full bg-white border border-neutral-300 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#c59d5f] text-neutral-800 appearance-none cursor-pointer">
                    <option>Hospitality</option>
                    <option>Retail</option>
                    <option>F&B</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] md:text-xs tracking-wider text-neutral-600 uppercase font-semibold mb-2">Emirate</label>
                  <select className="w-full bg-white border border-neutral-300 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#c59d5f] text-neutral-800 appearance-none cursor-pointer">
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] md:text-xs tracking-wider text-neutral-600 uppercase font-semibold mb-2">Service Required</label>
                <select className="w-full bg-white border border-neutral-300 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#c59d5f] text-neutral-800 appearance-none cursor-pointer">
                  <option>Turnkey fit-out</option>
                  <option>MEP Services</option>
                  <option>Acoustics</option>
                  <option>Maintenance</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] md:text-xs tracking-wider text-neutral-600 uppercase font-semibold mb-2">Describe the project or issue</label>
                <textarea 
                  rows="5"
                  placeholder="Area (sq ft), timeline, current problems..." 
                  className="w-full bg-white border border-neutral-300 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#c59d5f] text-neutral-800 placeholder-neutral-400 transition-colors resize-y"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="bg-[#b58c56] hover:bg-[#a07a48] text-[#1c1a17] text-sm font-semibold px-8 py-4 rounded-sm tracking-wide transition-colors duration-200 mt-4 w-full sm:w-[220px] text-center leading-snug"
              >
                Request Free Site<br />Survey
              </button>

            </form>
          </div>

          {/* RIGHT SIDE: CONTACT INFO */}
          <div className="w-full lg:w-[40%] flex flex-col gap-10 lg:pl-10">
            <div>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-2 block">
                HEAD OFFICE
              </span>
              <p className="text-[#1c1a17] text-base md:text-lg leading-relaxed">
                [Building, Street, Area]<br />
                Dubai, United Arab Emirates
              </p>
            </div>
            <div>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-2 block">
                CALL / WHATSAPP
              </span>
              <p className="text-[#1c1a17] text-base md:text-lg leading-relaxed">
                +971 [X] [XXX XXXX]
              </p>
            </div>
            <div>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-2 block">
                EMAIL
              </span>
              <p className="text-[#1c1a17] text-base md:text-lg leading-relaxed">
                [info@domain.ae]
              </p>
            </div>
            <div>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-2 block">
                24/7 MAINTENANCE HOTLINE
              </span>
              <p className="text-[#1c1a17] text-base md:text-lg leading-relaxed">
                +971 [X] [XXX XXXX]
              </p>
            </div>
            <div>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#a47e3b] uppercase font-semibold mb-2 block">
                HOURS
              </span>
              <p className="text-[#1c1a17] text-base md:text-lg leading-relaxed">
                Mon – Sat, 8:00 – 18:00
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* GOOGLE MAP EMBED SECTION */}
      {/* ========================================= */}
      <section className="w-full bg-[#f3ede4] pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-[400px] md:h-[500px] bg-[#1e1e1e] relative rounded-sm overflow-hidden flex flex-col justify-end">
            
            {/* Live Interactive Map - Grayscale Filter Applied */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115509.39009893952!2d55.15570081397839!3d25.12727829768224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(100%) opacity(70%)" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0"
            ></iframe>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10"></div>
            
            <span className="relative z-20 px-6 py-5 text-[10px] tracking-[0.2em] text-neutral-300 uppercase font-medium drop-shadow-md">
              GOOGLE MAP EMBED — OFFICE LOCATION
            </span>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      {/* ========================================= */}
      <section className="w-full bg-[#e8e3d8] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12 md:gap-16">
          
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-light text-[#1c1a17] leading-tight">
            Frequently asked
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            
            {/* FAQ 1 */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-[#1c1a17] mb-2">
                Do you handle authority approvals?
              </h3>
              <p className="text-neutral-700 font-light leading-relaxed">
                Yes — Municipality, Civil Defence, DEWA/ADDC and mall/landlord approvals are included in turnkey scope.
              </p>
            </div>

            {/* FAQ 2 */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-[#1c1a17] mb-2">
                Can you work while we stay open?
              </h3>
              <p className="text-neutral-700 font-light leading-relaxed">
                Yes. We plan night shifts and phased works for live hotels, restaurants and stores.
              </p>
            </div>

            {/* FAQ 3 */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-[#1c1a17] mb-2">
                Is the site survey really free?
              </h3>
              <p className="text-neutral-700 font-light leading-relaxed">
                Yes, for projects within the UAE. You receive findings and a recommended solution.
              </p>
            </div>

            {/* FAQ 4 */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-[#1c1a17] mb-2">
                What warranty do you provide?
              </h3>
              <p className="text-neutral-700 font-light leading-relaxed">
                [Defects liability period] plus manufacturer warranties, with optional AMC.
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}