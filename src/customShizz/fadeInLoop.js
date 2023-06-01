import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export const useFadeInScaleAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, transition: {duration:3} });
      return controls.start({
        scale: [1, 1.0175, 1],
        color: ["#3b3b3b", "#1a1b1c", "#6e6e6e", "#3b3b3b"],
        transition: { duration: 5, ease:"linear", repeat: Infinity }
      });
    }
    
    sequence();
  }, [controls]);

  return controls;
};
