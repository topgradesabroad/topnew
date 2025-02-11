'use client';
import React, { useState } from 'react';
import { GraduationCap, BookOpen, Quote, Sparkles } from 'lucide-react';

interface Testimonial {
  name: string;
  university: string;
  course: string;
  year: string;
  quote: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:-translate-y-1 transition-transform duration-300 relative">
    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
      <Sparkles className="w-4 h-4 text-purple-400" />
    </div>
    
    <div className="relative">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
        <GraduationCap className="w-6 h-6 text-white" />
      </div>
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-24 h-24 rounded-xl object-cover mx-auto mb-4 ring-4 ring-purple-50"
      />
    </div>

    <div className="text-center mb-4">
      <h3 className="text-xl font-bold text-gray-900 mb-1">
        {testimonial.name}
      </h3>
      <div className="flex items-center justify-center space-x-2 text-purple-600 mb-1">
        <BookOpen className="w-4 h-4" />
        <span className="font-medium text-sm">{testimonial.course}</span>
      </div>
      <p className="text-gray-600 text-sm">{testimonial.university}</p>
      <p className="text-sm text-gray-500">Class of {testimonial.year}</p>
    </div>

    <div className="relative">
      <Quote className="w-6 h-6 text-purple-200 absolute -top-2 -left-2" />
      <p className="text-gray-600 italic leading-relaxed text-sm">
        {testimonial.quote}
      </p>
    </div>
  </div>
);

const TestimonialSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const testimonials = [
    {
      name: "Maya Patel",
      university: "Stanford University",
      course: "MSc Computer Science",
      year: "2023",
      quote: "The advanced algorithms course completely transformed my understanding of problem-solving. The project-based learning approach helped me land my dream internship at Google!",
      image: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&h=400&fit=crop"
    },
    {
      name: "James Wilson",
      university: "MIT",
      course: "BSc Artificial Intelligence",
      year: "2024",
      quote: "The practical assignments and real-world projects gave me hands-on experience that truly matters. The mentorship program was incredibly valuable for my professional growth.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Chen",
      university: "UC Berkeley",
      course: "BSc Data Science",
      year: "2023",
      quote: "The collaborative environment and cutting-edge curriculum helped me develop both technical skills and leadership abilities. I'm now confidently leading data science projects!",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop"
    },
    {
      name: "Alex Thompson",
      university: "Georgia Tech",
      course: "BSc Machine Learning",
      year: "2024",
      quote: "The hands-on approach to machine learning concepts made complex topics accessible. I particularly enjoyed the collaborative projects and industry partnerships.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Emma Davis",
      university: "CMU",
      course: "BSc Software Engineering",
      year: "2023",
      quote: "The mentorship program and industry partnerships opened doors I never thought possible. I've grown both technically and professionally.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    }
  ];

  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="relative bg-gray-50 py-16 overflow-hidden">
      {/* Static Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute -right-8 top-1/4 w-24 h-24 bg-pink-100 rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Student Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our talented students about their learning journey and how they're achieving their academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Simplified Navigation */}
        <div className="flex justify-center mt-10">
          {[...Array(pageCount)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`mx-1 transition-all duration-300 ${
                index === currentPage
                  ? 'w-8 h-2 bg-purple-500'
                  : 'w-2 h-2 bg-purple-200 hover:bg-purple-300'
              } rounded-full`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;