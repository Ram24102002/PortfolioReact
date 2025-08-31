import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import WhiteBoy from '../../assets/TestimonialProfiles/WhiteBoy.png';
import Girl1 from '../../assets/TestimonialProfiles/Girl1.png';
import DarkBoy from '../../assets/TestimonialProfiles/DarkBoy.png';
import DarkGirl from '../../assets/TestimonialProfiles/DarkGirl.png';
import Seenu from '../../assets/TestimonialProfiles/Seenu.png';

const TestimonialsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Bharath",
      role: "Asan Devnest",
      rating: 4.9,
      avatar: WhiteBoy,
      text: "“He transformed our ideas into a smooth, user-friendly web experience.”"
    },
    {
      id: 2,
      name: "Deepika",
      role: "VOID Fashion",
      rating: 4.7,
      avatar: Girl1,
      text: "“Clean code, great communication, and on-time delivery — highly recommended.”"
    },
    {
      id: 3,
      name: "Janakiraman",
      role: "Meha Mind",
      rating: 4.9,
      avatar: DarkBoy,
      text: "“Ram built us a fast, modern website that boosted our online presence instantly.”"
    },
    {
      id: 4,
      name: "Seenu",
      role: "Tech CEO",
      rating: 5.0,
      avatar: Seenu,
      text: "“Ram blends design and functionality perfectly — our site looks great and works flawlessly.”"
    },
    {
      id: 5,
      name: "Karuna",
      role: "Asan Devnest",
      rating: 4.8,
      avatar: DarkGirl,
      text: "“Ram is a skilled developer who always delivers quality and performance.”"
    }
  ];

  const totalSlides = testimonials.length;
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Calculate max index based on screen size
  const getMaxIndex = () => {
    if (isMobile) return totalSlides - 1; // Show 1 at a time
    if (isTablet) return totalSlides - 2; // Show 2 at a time
    return totalSlides - 3; // Show 3 at a time (desktop)
  };

  const maxIndex = getMaxIndex();

  // Calculate translation percentage based on screen size
  const getTranslateX = () => {
    if (isMobile) return currentIndex * 100; // 100% per slide
    if (isTablet) return currentIndex * 50; // 50% per slide
    return currentIndex * (100/3); // 33.33% per slide
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? prevIndex : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleWheel = (e) => {
    e.preventDefault();
    
    // Prevent multiple rapid scroll events
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Only respond to significant scroll movements
    const scrollThreshold = 50;
    
    if (Math.abs(e.deltaY) > scrollThreshold || Math.abs(e.deltaX) > scrollThreshold) {
      // Determine scroll direction - treat vertical scroll as horizontal navigation
      if (e.deltaY > 0 || e.deltaX > 0) {
        // Scrolling down or right - move to next
        nextTestimonial();
      } else if (e.deltaY < 0 || e.deltaX < 0) {
        // Scrolling up or left - move to previous
        prevTestimonial();
      }
    }
    
    // Reset scrolling flag after a delay
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black text-white py-10 md:py-30 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full relative">
        {/* Navigation Arrow Left */}
        <button
          onClick={prevTestimonial}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        </button>

        {/* Testimonials Container */}
        <div 
          className="overflow-hidden px-4 md:px-8 lg:px-12 cursor-grab active:cursor-grabbing"
          onWheel={handleWheel}
          style={{ userSelect: 'none' }}
        >
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ 
              transform: `translateX(-${getTranslateX()}%)`,
              gap: isMobile ? '0rem' : isTablet ? '1rem' : '1.5rem'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`flex-shrink-0 ${
                isMobile ? 'w-full px-2' : isTablet ? 'w-1/2 px-2' : 'w-1/3 px-3'
              }`}>
                <div className="bg-gray-900 rounded-2xl p-4 md:p-6 h-64 md:h-80 flex flex-col justify-between hover:bg-gray-800 transition-colors duration-300 w-full">
                  {/* Testimonial Text */}
                  <div className="flex-1">
                    <p className="text-gray-300 p-6 mt-10 text-balance text-center text-sm md:text-base leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  {/* User Info */}
                  <div className="flex items-center mt-4 md:mt-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4"
                    />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-base md:text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <span className="text-white font-medium text-sm md:text-base">
                        {testimonial.rating}/5
                      </span>
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrow Right */}
        <button
          onClick={nextTestimonial}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 shadow-lg"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 md:mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-3 md:mt-4">
          <p className="text-gray-500 text-xs md:text-sm">
             {currentIndex + 1} of {maxIndex + 1} views
          </p>
        </div>
        
     {/* Left fade */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-15 bg-gradient-to-r from-black to-transparent"></div>

  {/* Right fade */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-15 bg-gradient-to-l from-black to-transparent"></div>

      </div>
    </div>
  );
};

export default TestimonialsComponent;