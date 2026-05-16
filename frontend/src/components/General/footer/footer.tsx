import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Projects', href: '/portfolio' },
    { label: 'Insights', href: '/insights' },
    { label: 'Careers', href: '/careers' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  const socialLinks = [
    {
      icon: faInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/espaciodisenoinc',
    },
    {
      icon: faFacebookSquare,
      label: 'Facebook',
      href: 'https://www.facebook.com/p/Espacio-Dise%C3%B1o-Inc-100065583576897/',
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/espacio-dise%C5%84o-inc-9ba58270/',
    },
    {
      icon: faTiktok,
      label: 'TikTok',
      href: '#',
    },
  ];

  return (
    <footer className="bg-black text-slate-300">
      {/* Main footer grid */}
      <div className="px-6 py-14 md:px-12 lg:px-36 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-6 xl:col-span-1">
          <Link href="/" aria-label="Espacio Diseño home">
            <img
              src="/logo.png"
              alt="Espacio Diseño"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="font-source-sans text-slate-400 text-sm leading-relaxed font-light">
            A proudly homegrown Filipino interior design and fit-out contractor,
            specializing in corporate offices and commercial environments across the Philippines.
          </p>
          {/* Social icons */}
          <div className="flex gap-5 mt-2">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-slate-400 hover:text-white transition-colors duration-200 text-xl"
                target={href !== '#' ? '_blank' : undefined}
                rel={href !== '#' ? 'noopener noreferrer' : undefined}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="font-montserrat text-white text-sm font-semibold uppercase tracking-widest">
            Navigation
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="font-source-sans text-slate-400 text-sm font-light tracking-wide hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-4">
          <h3 className="font-montserrat text-white text-sm font-semibold uppercase tracking-widest">
            Contact
          </h3>
          <address className="not-italic flex flex-col gap-4">
            <p className="font-source-sans text-slate-400 text-sm font-light leading-relaxed">
              22nd Floor, Mega Tower,<br />
              Edsa, corner Julia Vargas,<br />
              Mandaluyong City
            </p>
            <a
              href="tel:09568673872"
              className="font-source-sans text-espacio-green text-sm hover:text-espacio-green/75 transition-colors"
            >
              09568673872
            </a>
            <a
              href="mailto:info@espaciodiseno.com.ph"
              className="font-source-sans text-espacio-green text-sm hover:text-espacio-green/75 transition-colors"
            >
              info@espaciodiseno.com.ph
            </a>
          </address>
        </div>

        {/* Map */}
        <div className="flex flex-col gap-4">
          <h3 className="font-montserrat text-white text-sm font-semibold uppercase tracking-widest">
            Find Us
          </h3>
          <div className="w-full h-44 rounded-lg overflow-hidden bg-slate-800">
            <iframe
              className="border-0 h-full w-full"
              src="https://www.google.com/maps/embed/v1/place?q=22nd+Floor,+Mega+Tower,+Edsa,+corner+Julia+Vargas,+Mandaluyong+City&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              title="Espacio Diseño office location"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-5 md:px-12 lg:px-36 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-source-sans text-slate-500 text-xs">
          © {new Date().getFullYear()} Espacio Diseño, Inc. All rights reserved.
        </p>
        <p className="font-source-sans text-slate-500 text-xs">
          Interior Design &amp; Fit-Out · Philippines
        </p>
      </div>
    </footer>
  )
}

export default Footer;
