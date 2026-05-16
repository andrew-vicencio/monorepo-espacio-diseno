'use client';

import React, { useState, useEffect } from 'react';

import NavMenu from './nav-menu';

import './styles.css';
import { IMenu } from '@/types/IMenu.d';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import clsx from 'clsx';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navMap: IMenu[] = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Services',
      submenus: [
        {
          name: 'services',
          url: '/services'
        },
        {
          name: 'portfolio',
          url: '/portfolio'
        }
      ]
    },
    {
      name: 'Products',
      url: '/products',
      submenus: [
        {
          name: 'seating',
          url: '/products/seating'
        },
        {
          name: 'panels',
          url: '/products/panels'
        },
        {
          name: 'desking',
          url: '/products/desking'
        },
        {
          name: 'storage',
          url: '/products/storage'
        },
        {
          name: 'custom',
          url: '/products/custom'
        }
      ]
    },
    {
      name: 'About',
      submenus: [
        {
          name: 'about us',
          url: '/about-us'
        },
        {
          name: 'insights',
          url: '/insights'
        },
        {
          name: 'careers',
          url: '/careers'
        },
      ]
    }
  ]

  return (
    <motion.header
      className={clsx(
        'sticky top-0 z-50 w-full transition-all duration-300',
        'flex flex-col md:flex-row gap-4 md:gap-14 items-center justify-between',
        'px-6 py-4 md:px-12 lg:px-36',
        scrolled
          ? 'bg-white shadow-md py-3 md:py-4'
          : 'bg-slate-100 py-4 md:py-5 lg:py-6'
      )}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className='flex w-full md:w-auto items-center justify-between gap-6'>
        <Link href="/" aria-label="Espacio Diseño home">
          <img
            src="/logo.png"
            alt="Espacio Diseño logo"
            className='h-10 md:h-12 w-auto object-contain'
          />
        </Link>
        <button
          className='md:hidden p-2 text-dark-grey hover:text-black transition-colors'
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className='hidden md:flex items-center gap-8 lg:gap-10 text-base font-light tracking-wide'>
        {navMap.map((navItem, i) => (
          <NavMenu menu={navItem} key={i} />
        ))}
        <Link
          href="/contact-us"
          className={clsx(
            'font-source-sans font-semibold tracking-wide text-sm uppercase',
            'text-white bg-espacio-red',
            'rounded-md px-5 py-2.5 border-2 border-espacio-red',
            'hover:bg-white hover:text-espacio-red transition-colors duration-200',
            'whitespace-nowrap'
          )}
        >
          Talk to Us
        </Link>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-nav"
            className='flex md:hidden flex-col w-full gap-1 pb-4'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className='flex flex-col text-base font-light tracking-wide gap-1'>
              {navMap.map((navItem, i) => (
                <div key={i} className='border-b border-slate-200 py-1' onClick={() => setIsOpen(false)}>
                  <NavMenu menu={navItem} />
                </div>
              ))}
            </div>
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className={clsx(
                'mt-3 w-full text-center font-semibold tracking-wide text-sm uppercase',
                'text-white bg-espacio-red',
                'rounded-md px-5 py-3 border-2 border-espacio-red',
                'hover:bg-white hover:text-espacio-red transition-colors duration-200'
              )}
            >
              Talk to Us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default NavBar;
