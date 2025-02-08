'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, BookOpen, GraduationCap, Landmark, Stamp, Home, Plane, HeartPulse, Briefcase } from 'lucide-react';

const services = [
  {
    title: "Counselling Services",
    description: "Personalized guidance to shape your academic journey abroad",
    icon: <Users className="w-12 h-12" />,
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Test Preparation",
    description: "Comprehensive coaching for IELTS, TOEFL, PTE & more",
    icon: <BookOpen className="w-12 h-12" />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "University Admission",
    description: "End-to-end assistance with university selection & applications",
    icon: <GraduationCap className="w-12 h-12" />,
    gradient: "from-pink-500 to-red-500"
  },
  {
    title: "Education Loan",
    description: "Hassle-free education loan guidance with partner banks",
    icon: <Landmark className="w-12 h-12" />,
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "Visa Processing",
    description: "Expert guidance for successful visa applications",
    icon: <Stamp className="w-12 h-12" />,
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    title: "Accommodation",
    description: "Finding your perfect home away from home",
    icon: <Home className="w-12 h-12" />,
    gradient: "from-yellow-500 to-green-500"
  },
  {
    title: "Travel Planning",
    description: "Flight bookings & pre-departure support",
    icon: <Plane className="w-12 h-12" />,
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Student Insurance",
    description: "Comprehensive health & travel insurance solutions",
    icon: <HeartPulse className="w-12 h-12" />,
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Job Assistance",
    description: "Career guidance & placement support abroad",
    icon: <Briefcase className="w-12 h-12" />,
    gradient: "from-cyan-500 to-blue-500"
  }
];

const ExpertiseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= services.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? services.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="pt-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 lg:text-left text-center">
              <h2 className="text-4xl font-bold mb-6 text-">
                Our Expertise in Global Education
              </h2>
              <p className="text-gray-600 mb-8">
                From test preparation to settling abroad, our expertise covers every aspect of your international education journey. We're committed to making your study abroad dreams a seamless reality.
              </p>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-xs mx-auto md:max-w-none">
                {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-64"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                    
                    <div className="relative p-8 flex flex-col items-center h-full">
                      <div className="mb-6 text-gray-800 group-hover:scale-110 transform transition-transform">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm text-center">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Centrally aligned navigation buttons */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                  onClick={prev}
                  className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 group"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                </button>
                <button
                  onClick={next}
                  className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 group"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;