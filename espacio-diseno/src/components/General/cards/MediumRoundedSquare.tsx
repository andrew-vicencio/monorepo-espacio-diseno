import * as React from 'react';
import { motion } from 'framer-motion';

const MediumRoundedSquare = ({ order }: { order: number }) => {
  return (
    <motion.div
      className="flex-none w-1/5 h-56 bg-slate-300 rounded-xl"
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0, transition: { ease: 'easeIn' }}}
      whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
      transition={{ duration: 0.8, ease: 'linear' }}
    >
      
    </motion.div>
  )
}

export default MediumRoundedSquare;