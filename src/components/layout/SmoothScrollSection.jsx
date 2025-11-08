import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const SmoothScrollSection = ({ 
  children, 
  className = '',
  effect = 'parallax' // parallax, fade3d, slide3d, rotate3d, scale3d, reveal
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Effets selon le type choisi
  const effects = {
    parallax: {
      y: useTransform(smoothProgress, [0, 1], [100, -100]),
      opacity: useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    },
    fade3d: {
      opacity: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
      scale: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]),
      rotateX: useTransform(smoothProgress, [0, 0.5, 1], [45, 0, -45])
    },
    slide3d: {
      x: useTransform(smoothProgress, [0, 0.5, 1], [-200, 0, 200]),
      opacity: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
      rotateY: useTransform(smoothProgress, [0, 0.5, 1], [-30, 0, 30])
    },
    rotate3d: {
      opacity: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
      scale: useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1, 0.5]),
      rotateZ: useTransform(smoothProgress, [0, 1], [0, 360])
    },
    scale3d: {
      opacity: useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
      scale: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.3, 1.1, 1.1, 0.3]),
      y: useTransform(smoothProgress, [0, 0.5, 1], [200, 0, -200])
    },
    reveal: {
      opacity: useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 1]),
      clipPath: useTransform(
        smoothProgress,
        [0, 0.4, 0.6, 1],
        [
          'inset(100% 0% 0% 0%)',
          'inset(0% 0% 0% 0%)',
          'inset(0% 0% 0% 0%)',
          'inset(0% 0% 100% 0%)'
        ]
      )
    }
  };

  const selectedEffect = effects[effect] || effects.parallax;

  return (
    <motion.div
      ref={ref}
      style={{
        ...selectedEffect,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScrollSection;
