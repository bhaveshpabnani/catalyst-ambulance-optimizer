
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Heart Surgery Patient",
    content: "The Catalyst ambulance service arrived within minutes of our emergency call. Their swift response and professional care during transport to the hospital was truly lifesaving. I can't thank the team enough for their exceptional service.",
    image: "/lovable-uploads/4cec834c-0a51-45b7-97b2-7ac3bdd0fe7f.png",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Accident Victim",
    content: "After my car accident, I was in critical condition. The paramedics from Catalyst not only provided immediate medical attention but also ensured I remained calm during the journey. Their advanced equipment and expertise made all the difference.",
  },
  {
    id: 3,
    name: "Emily Parker",
    role: "Event Organizer",
    content: "We hired Catalyst's ambulance services for our annual marathon event. Their team was professional, alert, and ready to respond to any emergency. The peace of mind they provided allowed us to focus on running a successful event.",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Elderly Care Patient",
    content: "As someone with chronic health issues, I've used many ambulance services over the years. Catalyst stands out for their compassionate approach, careful handling, and the way they communicate every step of the transport process.",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-catalyst-600 font-semibold uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Happy Customers</h2>
          <div className="w-20 h-1 bg-catalyst-500 mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Hear what our customers have to say about their experience with our ambulance services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-[340px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 bg-white rounded-xl shadow-lg p-8 flex flex-col
                  ${index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
              >
                <div className="mb-6 text-catalyst-500">
                  <Quote size={48} className="opacity-20" />
                </div>
                <p className="text-gray-700 italic mb-6 flex-grow">{testimonial.content}</p>
                <div className="flex items-center">
                  {testimonial.image ? (
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-catalyst-100 text-catalyst-500 flex items-center justify-center mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-catalyst-500" : "w-2.5 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md text-catalyst-500 hover:bg-catalyst-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md text-catalyst-500 hover:bg-catalyst-50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
