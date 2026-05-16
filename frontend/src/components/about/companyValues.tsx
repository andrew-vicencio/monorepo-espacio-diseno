'use client';

import React from "react";
import { motion } from 'framer-motion';
import { SlideUp, StaggeredFadeIn } from "@/components/animations/animations";

const values = [
  {
    title: 'Integrity & Transparency',
    description: 'We uphold ethical practices in everything that we do.',
    icon: '⚖️',
  },
  {
    title: 'Creativity & Innovation',
    description: 'We apply our expertise and strategic thinking in providing original ideas & creative designs.',
    icon: '✦',
  },
  {
    title: 'Reliability & Trustworthiness',
    description: 'We consistently deliver our commitments, and meet deadlines on time.',
    icon: '◎',
  },
  {
    title: 'Teamwork',
    description: 'We collaborate in unity & harmony towards a happy working environment.',
    icon: '⬡',
  },
  {
    title: 'We Care',
    description: 'We care for our company, our customers, our employees, the environment and our communities.',
    icon: '♡',
    fullWidth: true,
  },
];

const CompanyValues = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-14">
      <div>
        <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-3">
          What We Stand For
        </p>
        <h2 className='font-montserrat text-3xl lg:text-5xl font-light'>Our Company Values</h2>
      </div>
      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
        variants={StaggeredFadeIn}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
      >
        {values.map(({ title, description, icon, fullWidth }, i) => (
          <motion.li
            key={i}
            className={`flex flex-col gap-3 p-8 rounded-xl bg-iced-green border border-espacio-green/20 hover:border-espacio-green/40 transition-colors duration-200 ${fullWidth ? 'sm:col-span-2' : ''}`}
            variants={SlideUp}
          >
            <span className="text-2xl font-sans text-espacio-green" aria-hidden="true">
              {icon}
            </span>
            <h3 className='font-montserrat text-xl font-medium'>{title}</h3>
            <p className='font-source-sans text-dark-grey leading-relaxed'>{description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default CompanyValues;
