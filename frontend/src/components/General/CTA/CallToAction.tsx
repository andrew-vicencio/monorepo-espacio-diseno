'use client';

import React, { useState } from 'react';
import type { SanityImageSource } from '@sanity/image-url';
import { urlFor } from '@/lib/sanityImage';

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import ContactForm from '../contact-form/index';

interface CallToActionProps {
  ctaImage?: (SanityImageSource & { alt?: string }) | null
}

const CallToAction = ({ ctaImage }: CallToActionProps) => {
  const imageSrc = ctaImage
    ? urlFor(ctaImage).width(900).format('webp').quality(80).url()
    : '/images/CTA.jpg'
  const imageAlt = ctaImage?.alt ?? 'Espacio Diseño interior design consultation'
  let [open, setIsOpen] = useState(false)

  return (
    <>
      <section
        className="bg-espacio-red py-16 px-6 md:py-20 md:px-12 lg:px-36 lg:py-20"
        aria-label="Book a consultation"
      >
        <div className="flex flex-col lg:flex-row text-slate-50 gap-10 lg:gap-16 items-center">
          <div className='w-full lg:w-2/5 flex flex-col gap-6'>
            <div>
              <p className="font-source-sans uppercase tracking-[0.2em] text-sm font-semibold text-white/70 mb-3">
                Ready to Start?
              </p>
              <h2 className='font-montserrat font-bold leading-none text-5xl md:text-6xl xl:text-7xl'>
                Let&apos;s discuss your space.
              </h2>
            </div>
            <p className="font-source-sans text-white/85 leading-relaxed text-lg">
              Whether it&apos;s an expansion, relocation, or renovation — our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                className='font-source-sans font-semibold uppercase tracking-wider text-sm text-espacio-red bg-white rounded-md px-7 py-4 border-2 border-white hover:bg-transparent hover:text-white transition-colors duration-200'
                onClick={() => setIsOpen(true)}
              >
                Book a Consultation
              </button>
            </div>
          </div>
          <div className="flex-1 max-h-[40vh] w-full rounded-tl-xl rounded-tr-[90px] rounded-br-xl rounded-bl-[90px] overflow-hidden shadow-2xl border-2 border-white/20">
            <img
              src={imageSrc}
              alt={imageAlt}
              className='w-full max-h-[40vh] object-cover object-[50%_80%]'
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Dialog open={open} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <DialogPanel className="w-full max-w-2xl space-y-6 bg-espacio-red p-6 py-10 md:p-12 text-white rounded-2xl shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="font-montserrat font-bold text-2xl md:text-4xl uppercase">
                  Reach Out for a Consultation
                </DialogTitle>
                <Description className="mt-2 font-source-sans text-white/80 text-sm md:text-base">
                  Let&apos;s dive into an exploratory discussion on your plan for expansion, relocation, or renovation.
                </Description>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white text-2xl ml-4 flex-shrink-0 transition-colors"
                aria-label="Close dialog"
              >
                ×
              </button>
            </div>
            <ContactForm secondary close={() => setIsOpen(false)} />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default CallToAction;
