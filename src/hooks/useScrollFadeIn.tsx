import { useCallback, useEffect, useRef } from "react";

interface useScrollFadeInProps {
  duration: number;
  delay: number;
}

export default function useScrollFadeIn({
  duration,
  delay,
}: useScrollFadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = elementRef;

      if (current === null) {
        return;
      }

      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (elementRef.current !== null) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.3 });
      observer.observe(elementRef.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: elementRef,
    style: { opacity: 0, transform: "translate3d(-50%, 0, 0)" },
  };
}
