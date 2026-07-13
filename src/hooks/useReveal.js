import { useEffect, useRef, useState } from 'react';

export const useReveal = ({ threshold = 0.2, rootMargin = '0px', triggerOnce = false } = {}) => {
  const ref = useRef(null);
  const [prefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  
  const [isRevealed, setIsRevealed] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    // Use an array of thresholds: 0 to detect full exit, and the target threshold for reveal
    const targetThreshold = Array.isArray(threshold) ? threshold[0] : threshold;
    const uniqueThresholds = [...new Set([0, targetThreshold])].sort();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= targetThreshold) {
          setIsRevealed(true);
          if (triggerOnce) observer.disconnect();
        } else if (!entry.isIntersecting) {
          if (!triggerOnce) setIsRevealed(false);
        }
      },
      { threshold: uniqueThresholds, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, prefersReducedMotion]);

  return { ref, isRevealed };
};
