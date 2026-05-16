import * as React from "react";
import Link from "next/link";

export interface ServiceType {
  title: string;
  subtitle?: string;
  image?: string;
  url?: string;
  href?: string;
}

const LongRoundedCard = ({ title, subtitle, url, href }: ServiceType) => {
  const background = { backgroundImage: `url('${url}')` };

  const content = (
    <div
      className="relative h-[60vh] md:rounded-xl bg-cover bg-center bg-no-repeat overflow-hidden shadow-lg group cursor-pointer"
      style={background}
    >
      {/* Bottom gradient for text contrast */}
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 100%)' }}
      />
      {/* Title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
        <h3 className="font-montserrat text-xl text-white font-medium leading-snug">{title}</h3>
        {subtitle && (
          <p className="font-source-sans text-slate-200 text-sm mt-1 font-light">{subtitle}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export default LongRoundedCard;
