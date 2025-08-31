import { Star } from "lucide-react";

const TestimonialCard = ({
  name,
  title,
  company,
  rating,
  testimonial,
  avatar,
}) => {
  return (
    <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg text-white  hover:shadow-xl transition-shadow duration-300 w-[320px] sm:w-[360px] md:w-[400px] flex-shrink-0 flex flex-col justify-around">
      {/* Profile Section */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className=" text-xs lg:text-sm line-clamp-1">
            {title}, {company}
          </p>
        </div>
      </div>

      {/* Star Rating */}
      {/* <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div> */}

      {/* Testimonial Text */}
      <blockquote className=" p-5 leading-relaxed line-clamp-4">
        "{testimonial}"
      </blockquote>
    </div>
  );
};

const ClientTestimonials = () => {
  const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Fashion Enthusiast",
    company: "Mumbai",
    rating: 5,
    testimonial:
      "Absolutely love the quality of these t-shirts! The fabric feels premium and fits perfectly. I've already ordered more!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    title: "College Student",
    company: "Delhi",
    rating: 5,
    testimonial:
      "The anime designs are so unique and vibrant! I've gotten so many compliments every time I wear one. Totally worth it!",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Rohan Desai",
    title: "Graphic Designer",
    company: "Bangalore",
    rating: 5,
    testimonial:
      "As someone who values aesthetics, I must say the prints are crisp and detailed. Plus, the material is super breathable!",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Sneha Patel",
    title: "Content Creator",
    company: "Ahmedabad",
    rating: 5,
    testimonial:
      "Fast delivery, excellent packaging, and top-notch quality. I'm impressed by the attention to detail in both design and stitching.",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
  },
];


  return (
    <section className=" my-15 mr-3 ml-3 mx-auto overflow-x-hidden hide-scrollbar py-10 w-full">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className=" text-white  lg:text-4xl  text-2xl font-bold text-gray-900  mb-4 ">
          Client Testimonials
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div
        className="gap-8 overflow-x-auto pb-5 hide-scrollbar scroll-smooth snap-x inline-flex  p-6 rounded-lg 
                h-[290px] sm:h-[300px] lg:h-[300px] 
                 text-sm sm:text-base animate-scroll "
      >
        {[...testimonials, ...testimonials, ...testimonials].map(
          (testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          )
        )}
      </div>
      {/* Left fade */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent"></div>

  {/* Right fade */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent"></div>

    </section>
  );
};

export default ClientTestimonials;
