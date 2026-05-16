import { easeIn, Variants } from "framer-motion"

export const StaggeredFadeIn: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    }
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 0.2,
      ease: easeIn
    }
  }
}

export const FadeIn: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    }
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.4,
      duration: 0.3,
      ease: easeIn
    }
  }
}

export const SlideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeIn }}
}

export const SlideDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeIn }}
}

export const SlideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: easeIn }}
}

export const SlideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: easeIn }}
}