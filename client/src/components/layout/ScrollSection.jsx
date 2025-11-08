import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const ScrollSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  variant = 'fadeUp',
  duration = 0.8,
  threshold = 0.1 
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  });

  const variants = {
    fadeUp: {
      hidden: { 
        opacity: 0, 
        y: 60,
      },
      visible: { 
        opacity: 1, 
        y: 0,
      }
    },
    fadeIn: {
      hidden: { 
        opacity: 0,
      },
      visible: { 
        opacity: 1,
      }
    },
    scale: {
      hidden: { 
        opacity: 0, 
        scale: 0.8,
      },
      visible: { 
        opacity: 1, 
        scale: 1,
      }
    },
    slideLeft: {
      hidden: { 
        opacity: 0, 
        x: -60,
      },
      visible: { 
        opacity: 1, 
        x: 0,
      }
    },
    slideRight: {
      hidden: { 
        opacity: 0, 
        x: 60,
      },
      visible: { 
        opacity: 1, 
        x: 0,
      }
    },
    zoomIn: {
      hidden: { 
        opacity: 0, 
        scale: 0.5,
      },
      visible: { 
        opacity: 1, 
        scale: 1,
      }
    },
    blur: {
      hidden: {
        opacity: 0,
        filter: 'blur(10px)',
      },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
      }
    },
    rotate: {
      hidden: {
        opacity: 0,
        rotate: -10,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
