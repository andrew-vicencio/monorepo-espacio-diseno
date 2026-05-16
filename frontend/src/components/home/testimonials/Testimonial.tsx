import React from "react";
import { ITestimonial } from "./TestimonialCarousel";

const Testimonial = ({ testimonial }: { testimonial: ITestimonial }) => {
  const { name, position, organization, quote } = testimonial;
  const initials = name
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="flex flex-col gap-8 px-6 py-10 md:px-16 lg:px-20 md:py-14 max-w-4xl mx-auto">
      {/* Quote mark */}
      <div className="text-espacio-red text-6xl font-serif leading-none select-none" aria-hidden="true">
        &ldquo;
      </div>
      {/* Quote text */}
      <div className="flex flex-col gap-4">
        {quote && quote.map((paragraph, i) => (
          <p
            key={i}
            className="font-source-sans text-dark-grey leading-8 tracking-wide text-lg md:text-xl font-light"
          >
            {paragraph}
          </p>
        ))}
      </div>
      {/* Attribution */}
      <div className="flex items-center gap-4 mt-2">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-full bg-espacio-green flex items-center justify-center text-white font-montserrat font-semibold text-base uppercase"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <p className="font-montserrat font-semibold text-black text-base">{name}</p>
          <p className="font-source-sans text-dark-grey text-sm font-light">
            {position}, <span className="font-medium">{organization}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
