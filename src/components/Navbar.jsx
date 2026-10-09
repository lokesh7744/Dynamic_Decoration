import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinkStyle = ({ isActive }) =>
    isActive 
      ? "text-[#c59d5f] font-medium transition-colors" 
      : "text-neutral-300 hover:text-[#c59d5f] transition-colors";

  const mobileNavLinkStyle = ({ isActive }) =>
    isActive 
      ? "text-[#c59d5f] text-lg font-medium transition-colors" 
      : "text-neutral-300 hover:text-[#c59d5f] text-lg font-light transition-colors";

  return (
    <>
      {/* PERFECT FIX: fixed, top-0, left-0, w-full ekdum NavbarHome jaisa */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          <Link to="/" className="flex items-baseline gap-2 cursor-pointer z-50 relative">
            <span className="text-2xl md:text-[28px] font-serif text-white font-normal leading-none">
              Dynamics
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-medium">
              Design & Decoration
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-[15px]">
            <NavLink to="/" className={navLinkStyle}>Home</NavLink>
            <NavLink to="/services" className={navLinkStyle}>Services</NavLink>
            <NavLink to="/sectors" className={navLinkStyle}>Sectors</NavLink>
            <NavLink to="/projects" className={navLinkStyle}>Projects</NavLink>
            <NavLink to="/about" className={navLinkStyle}>About</NavLink>
            <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          </div>

          <div className="hidden lg:block">
            <Link 
              to="/contact" 
              className="bg-[#c59d5f] hover:bg-[#b08b4e] text-neutral-950 text-sm font-semibold px-7 py-3 rounded-sm tracking-wide transition-all inline-block"
            >
              Request a Site Survey
            </Link>
          </div>

          <div className="lg:hidden z-50 relative">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white hover:text-[#c59d5f] focus:outline-none p-2 transition-colors"
            >
              <span className="text-3xl font-bold">☰</span>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div 
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-[#111111] z-50 transform transition-transform duration-300 ease-in-out flex flex-col border-l border-neutral-800 shadow-2xl lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-6 border-b border-neutral-800">
          <button 
            onClick={() => setIsOpen(false)}
            className="text-neutral-400 hover:text-white transition-colors p-2"
          >
            <span className="text-2xl font-bold">✕</span>
          </button>
        </div>
        
        <div className="flex flex-col gap-6 px-8 py-8 overflow-y-auto">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>Home</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>Services</NavLink>
          <NavLink to="/sectors" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>Sectors</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>Projects</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>Contact</NavLink>
          
          <div className="mt-8 pt-8 border-t border-neutral-800">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="bg-[#c59d5f] hover:bg-[#b08b4e] text-neutral-950 text-sm font-semibold px-4 py-3.5 rounded-sm uppercase tracking-wider w-full transition-all block text-center"
            >
              Request a Site Survey
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}