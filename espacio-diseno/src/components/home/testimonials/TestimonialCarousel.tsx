'use client';

import React from "react";
import Testimonial from './Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';

export interface ITestimonial {
  name: string;
  position: string;
  organization: string;
  quote: string[];
}

const TestimonialCarousel = () => {
  const quotes: ITestimonial[] = [
    {
      name: "Ms. Nina Alejandro",
      position: "Logistic Head",
      organization: "Joy Nostalj",
      quote: [
        "Espacio Disenio's customer focus and after support is bar none. Expectations on price and timely project completion were met during office renovation of our 3 operating companies -HLB, Starcom and Alpha 245. And even when I transferred to Santos Knight Frank- realty firm, we engaged Espacio's service. Excellent service was consistently provided. Regular updates on project status were given. Project Manager was really on top. Supply of materials and services for various site offices were mostly completed ahead of time."
      ]
    },
    {
      name: "Lovell Gopez",
      position: "President",
      organization: "Toyota Silang Cavite",
      quote: [
        "Espacio Diseño has been our go-to supply of quality office furniture. Because of their attention to customer service, planning/design all the way to delivery and installation was professionally attended to by Mr. Paolo Sagun. We never really had any difficulty as communication was great and we were regularly updated on progress. After sales service was also excellent since we had some minor repair to be done and Mr. Sagun was able to attend to the matter immediately. No follow up needed, which is something very much appreciated."
      ]
    },
    {
      name: "Jun Cudiamat",
      position: "President",
      organization: "Labrador",
      quote: [
        "Espacio Diseño, Inc., through its COO Mr. Paolo Sagun, has exemplified the highest level of professionalism and integrity in a difficult and challenging construction and interior design industry. Whether it is a small scope of minor renovation or a full blown fit-out of a new space, their expertise and sincere desire to fulfill the requirements of their customers make them a cut above the rest. The personal engagement of Mr. Sagun even during meetings is a testament to their company's mission of customer satisfaction and world-class service. Truly a dependable partner for your construction needs!"
      ]
    }
  ]

  return (
    <section className="w-full bg-iced-green py-16 lg:py-20" aria-label="Client testimonials">
      <div className="px-6 md:px-12 lg:px-36 mb-8">
        <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-2">
          Testimonials
        </p>
        <h2 className="font-montserrat font-light text-3xl md:text-4xl tracking-wide">
          What Our Clients Say
        </h2>
      </div>
      <Swiper
        modules={[A11y, Autoplay, Navigation]}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true
        }}
        navigation
        className="testimonial-swiper"
      >
        {quotes.map((quote, i) => (
          <SwiperSlide key={i}>
            <Testimonial testimonial={quote} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TestimonialCarousel;
