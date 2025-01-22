"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "Working with this team was an absolute pleasure. Their attention to detail and innovative solutions exceeded our expectations.",
    avatar: "/img/Person1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Director, GrowthCo",
    content:
      "The results speak for themselves. Our online presence has significantly improved since we started working together.",
    avatar: "/img/Person2.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Founder, StartupX",
    content:
      "I'm impressed by their ability to translate complex ideas into user-friendly designs. Highly recommended!",
    avatar: "/img/Person3.jpg",
  },
];

const Testimony = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimony" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-4 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg shadow-xl p-8 mx-auto max-w-full sm:max-w-md"
            >
              <div className="flex items-center mb-6">
                <img
                  src={
                    testimonials[currentTestimonial].avatar ||
                    "/placeholder.svg"
                  }
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg italic">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="mt-4 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-4">
            <button
              onClick={prevTestimonial}
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
