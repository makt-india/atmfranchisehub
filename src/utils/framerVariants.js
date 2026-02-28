// --- Framer Motion Variants (Optimized for "Financial Trust" Feel) ---

// Page Transition: Smooth Fade & Slide (No Bounce)
export const pageTransitionVariants = {
  initial: { opacity: 0, y: 10 }, // Reduced y distance for subtlety
  in: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] } // "cubic-bezier" for premium feel
  },
  out: { 
    opacity: 0, 
    y: -10, 
    transition: { duration: 0.2, ease: "easeIn" } 
  }
};

// Container: Controls the Staggering of Children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delays each child by 0.1s
      delayChildren: 0.1,
      when: "beforeChildren",
    }
  }
};

// Items (Cards, Text): Professional "Slide Up" (Increased Damping = No Bounce)
export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 80, // Lower stiffness = Slower, more deliberate
      damping: 20    // Higher damping = No "wobble" at the end (Critical for Trust)
    }
  }
};

// Hero Text: Slow, Dramatic Entry
export const heroTextVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

// Hero Image: Subtle Scale (Removed the "Rotate" which looks unprofessional)
export const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: "easeOut" } 
  }
};

// Button Hover: Tactile Feedback
export const buttonHover = {
  scale: 1.02,
  y: -2,
  boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)", // Red-600 shadow to match brand
  transition: { type: "spring", stiffness: 400, damping: 25 }
};