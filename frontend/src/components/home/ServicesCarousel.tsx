import * as React from "react";
import Link from "next/link";
import LongRoundedCard, { ServiceType } from '@/components/General/cards/LongRoundedCard';

const ServicesCarousel = () => {
  const ServicesArr: ServiceType[] = [
    {
      title: 'Design & Planning',
      url: '/images/services/Service 1 - Design & Planning.jpg'
    },
    {
      title: 'Interior Fit-Out & Project Management',
      url: '/images/services/Service 2 - Interior Fit-Out & Proj Mgt.jpg'
    },
    {
      title: 'Office Systems Furniture & Customization',
      url: '/images/services/Service 3 - Office Systems Furniture & Customization.jpg'
    },
    {
      title: 'Allied Facilities Management Services',
      url: '/images/services/Service 4 - Allied Facilities Mgt Services.jpg'
    },
  ]

  return (
    <section className="py-16 md:px-12 xl:px-24 2xl:px-36" aria-label="Our Services">
      <div className="px-6 md:px-0 mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-2">
            What We Do
          </p>
          <h2 className="font-montserrat font-light text-3xl md:text-4xl tracking-wide">
            Our Services
          </h2>
        </div>
        <Link
          href="/services"
          className="font-source-sans text-sm font-semibold uppercase tracking-wider text-espacio-red hover:underline underline-offset-4 whitespace-nowrap"
        >
          View All Services →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {ServicesArr.map(({ title, subtitle, url }, i) => (
          <LongRoundedCard key={i} title={title} subtitle={subtitle} url={url} />
        ))}
      </div>
    </section>
  )
}

export default ServicesCarousel;
