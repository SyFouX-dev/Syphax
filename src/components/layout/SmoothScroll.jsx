import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const SmoothScroll = ({ 
  children, 
  className = '',
  parallaxIntensity = 100,
  scaleEffect = false,
  rotateEffect = false,
  opacityEffect = true
}) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effect
  const y = useTransform(
    smoothProgress, 
    [0, 1], 
    [parallaxIntensity, -parallaxIntensity]
  );

  // Scale effect - toujours créer le hook
  const scaleTransform = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const scale = scaleEffect ? scaleTransform : 1;

  // Rotate effect - toujours créer le hook
  const rotateTransform = useTransform(smoothProgress, [0, 0.5, 1], [-5, 0, 5]);
  const rotate = rotateEffect ? rotateTransform : 0;

  // Opacity effect - toujours créer le hook
  const opacityTransform = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const opacity = opacityEffect ? opacityTransform : 1;

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, rotate, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
