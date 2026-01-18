import { useEffect, useRef, useState } from 'react';

/**
 * useScrollAnimation - Intersection Observer hook for scroll-triggered animations
 *
 * Usage:
 * 1. Add ref to element: <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
 * 2. Or use the className helper: <div ref={ref} className={className}>
 *
 * Options:
 * - threshold: How much of element must be visible (0-1, default 0.1)
 * - rootMargin: Margin around viewport (default '-50px')
 * - triggerOnce: Only animate once (default true)
 * - baseClass: Base animation class (default 'reveal')
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '-50px',
    triggerOnce = true,
    baseClass = 'reveal'
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  // Helper to generate className
  const className = `${baseClass} ${isVisible ? 'visible' : ''}`;

  return { ref, isVisible, className };
}

/**
 * useScrollAnimationGroup - For staggered animations on multiple elements
 *
 * Usage:
 * const { containerRef, getItemProps } = useScrollAnimationGroup();
 *
 * <div ref={containerRef}>
 *   {items.map((item, i) => (
 *     <div {...getItemProps(i)}>{item}</div>
 *   ))}
 * </div>
 */
export function useScrollAnimationGroup(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '-50px',
    staggerDelay = 0.1, // seconds between each item
    baseClass = 'reveal'
  } = options;

  const containerRef = useRef(null);
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContainerVisible(true);
          observer.unobserve(container);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const getItemProps = (index) => ({
    className: `${baseClass} ${isContainerVisible ? 'visible' : ''}`,
    style: {
      transitionDelay: isContainerVisible ? `${index * staggerDelay}s` : '0s'
    }
  });

  return { containerRef, isContainerVisible, getItemProps };
}

export default useScrollAnimation;
