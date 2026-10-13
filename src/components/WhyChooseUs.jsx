import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#111111] py-20 md:py-32 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs tracking-[0.25em] text-[#c59d5f] uppercase font-semibold mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-neutral-100 leading-tight max-w-2xl">
            A Practical Approach to Every Detail
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-20">
          
          {/* Feature 1 */}
          <div className="group">
            <h3 className="text-xl font-serif font-medium text-neutral-200 mb-4 group-hover:text-[#c59d5f] transition-colors">
              Understanding the Scope
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              A clear understanding of project requirements helps establish the work involved and the priorities that matter.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group">
            <h3 className="text-xl font-serif font-medium text-neutral-200 mb-4 group-hover:text-[#c59d5f] transition-colors">
              Coordination Across Services
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              Fit-out, MEP, civil, and acoustic requirements may intersect. Considering these relationships helps identify coordination needs during planning.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group">
            <h3 className="text-xl font-serif font-medium text-neutral-200 mb-4 group-hover:text-[#c59d5f] transition-colors">
              Attention to Specifications
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              Materials, finishes and technical requirements should be considered against the agreed scope and applicable specifications.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group">
            <h3 className="text-xl font-serif font-medium text-neutral-200 mb-4 group-hover:text-[#c59d5f] transition-colors">
              Commercially Minded Decisions
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              The intended use of a space influences layout, functionality, maintenance considerations, and the overall project approach.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group lg:col-span-2">
            <h3 className="text-xl font-serif font-medium text-neutral-200 mb-4 group-hover:text-[#c59d5f] transition-colors">
              Planning Beyond the Finish
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed max-w-2xl">
              Where maintenance services are required, operational and upkeep considerations can form part of the wider project discussion.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div>
          <Link 
            to="/contact" 
            className="inline-block border border-[#c59d5f] text-[#c59d5f] hover:bg-[#c59d5f] hover:text-neutral-950 text-sm md:text-base font-semibold px-8 py-4 rounded-sm tracking-wide transition-all duration-300"
          >
            Discuss Your Requirements
          </Link>
        </div>

      </div>
    </section>
  );
}