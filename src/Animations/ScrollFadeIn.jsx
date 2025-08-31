import React, { useEffect, useRef } from 'react';

function ScrollFadeIn({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && ref.current) {
            ref.current.classList.add('animate-fadein');
          }else{
            ref.current.classList.remove('animate-fadein');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
}

export default ScrollFadeIn;
