'use client';

import React from 'react';
import { Users, BookOpen, GraduationCap, Globe, CheckCircle } from 'lucide-react';

const statsData = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "10",
    text: "Years Experience"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    number: "10,000+",
    text: "Courses To Choose From"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    number: "5000+",
    text: "Happy Students"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    number: "12",
    text: "Countries Served"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    number: "100%",
    text: "Visa Success"
  }
];

const ImpactStats = () => {
  return (
    <section className="pt-48 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 max-w-2xl mx-auto">
            Your Successful Career Begins With Our Proven Expertise
          </h2>
          <p className="md:text-lg lg:text-base text-gray-600 max-w-3xl mx-auto">
            With over 10 years of expertise in international education consulting, we've helped thousands of students achieve their study abroad dreams with our personalized guidance and 100% visa success rate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-xs mx-auto md:max-w-none">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl group hover:scale-105 transition-transform duration-300"
            >
              {/* Gradient border with higher opacity */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-100" />
              <div className="absolute inset-[2px] rounded-xl bg-white" />
              
              <div className="relative flex flex-col items-center">
                <div className="text-gray-800 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;