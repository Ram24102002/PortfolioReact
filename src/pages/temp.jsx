import { useEffect, useRef, useState } from "react";

export default function temp() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // fade in only once
        }
      },
      { threshold: 0.1 } // trigger when 10% is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <p
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      I will fade in when I enter the screen 👋
    </p>
  );
}
