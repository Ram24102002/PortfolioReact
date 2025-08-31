import React from 'react';
import ScrollFadeIn from '../../Animations/ScrollFadeIn';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Custom Web Design",
      description: "I design sleek, user-friendly websites tailored to your brand's identity and goals. From wireframes to final launch, every detail is crafted to ensure a seamless user experience and high engagement.",
      features: [
        "Unique, responsive design",
        "Mobile & SEO-friendly structure", 
        "Optimized for speed & performance",
        "Designed for conversions & engagement"
      ]
    },
    {
      id: 2,
      title: "Landing Page Design",
      description: "High-converting landing pages that capture attention and drive action. Perfect for product launches, marketing campaigns, or lead generation with compelling design and strategic placement of call-to-action elements.",
      features: [
        "Conversion-focused design",
        "A/B testing ready structure",
        "Fast loading & mobile optimized",
        "Clear call-to-action placement"
      ]
    },
    {
      id: 3,
      title: "Website Redesign & Optimization",
      description: "Revamp your outdated website with a fresh, modern design that enhances user experience and boosts performance. I analyze and refine key elements to improve engagement, speed, and conversions.",
      features: [
        "Modern & responsive redesign",
        "UI/UX improvements for better navigation",
        "SEO optimization for better rankings",
        "Speed & performance enhancements"
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
        
      {/* Header */}
      <div className="max-w-7xl mx-auto  md:px-10">
        <div className="flex justify-between items-start mb-16">
          <h1 className="text-4xl md:text-6xl font-bold">My Services</h1>
        </div>

        {/* Services */}
        
        <div className="space-y-16">
          {services.map((service) => (
            <ScrollFadeIn>
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-2xl font-bold text-green-400">{service.id}.</span>
                  <h2 className="text-2xl md:text-4xl font-bold">{service.title}</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
              
                
          {/* <hr className='border-gray-500 w-100 mt-7' /> */}

              {/* Right Column - Features and Price */}
              <div className="space-y-6 md:mt-10">
                
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;