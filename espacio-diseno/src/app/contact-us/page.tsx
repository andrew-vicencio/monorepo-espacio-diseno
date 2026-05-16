import type { Metadata } from "next";
import React from "react";
import ContactForm from "@/components/General/contact-form/index";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Espacio Diseño for a free consultation on your office fit-out or interior design project in the Philippines. Talk to us about expansion, relocation, or renovation.",
  alternates: {
    canonical: "https://espaciodiseno.com.ph/contact-us",
  },
  openGraph: {
    title: "Contact Us | Espacio Diseño",
    description:
      "Get in touch with Espacio Diseño for a free consultation on your office fit-out or interior design project in the Philippines. Talk to us about expansion, relocation, or renovation.",
    url: "https://espaciodiseno.com.ph/contact-us",
    images: [
      {
        url: "/images/lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Espacio Diseño lounge interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Form side */}
      <div className="flex-1 flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20 xl:px-28 bg-white">
        <div className="max-w-xl w-full mx-auto lg:mx-0 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold">
              Get in Touch
            </p>
            <h1 className="font-montserrat text-4xl md:text-5xl font-light leading-tight">
              Reach Out for a Consultation
            </h1>
            <p className="font-source-sans leading-7 font-light tracking-wide text-dark-grey text-lg">
              Let&apos;s dive into an exploratory discussion on your plan for
              expansion, relocation, or renovation. Allow us to transform your
              space.
            </p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-3 text-dark-grey font-source-sans text-sm">
            <div className="flex items-start gap-3">
              <span className="text-espacio-red mt-0.5">📍</span>
              <span>22nd Floor, Mega Tower, Edsa, corner Julia Vargas, Mandaluyong City</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-espacio-red">📞</span>
              <a href="tel:09568673872" className="text-espacio-green hover:underline">09568673872</a>
            </div>
          </div>

          <ContactForm
            primary
            className="border border-slate-200 focus:border-espacio-green text-black rounded-md"
          />
        </div>
      </div>

      {/* Image side */}
      <div className="hidden lg:block relative w-[45%] flex-shrink-0">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/images/lounge.jpg"
          alt="Espacio Diseño lounge interior design"
        />
        {/* Overlay with brand message */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)' }}
        />
        <div className="absolute bottom-12 left-10 right-10 text-white">
          <p className="font-montserrat text-2xl font-light leading-snug">
            &ldquo;Your Space, Our Masterpiece.&rdquo;
          </p>
          <p className="font-source-sans text-white/70 text-sm mt-2">
            — Espacio Diseño
          </p>
        </div>
      </div>
    </div>
  );
}
