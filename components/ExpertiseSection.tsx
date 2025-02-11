'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, BookOpen, GraduationCap, Landmark, Stamp, 
  Home, Plane, HeartPulse, Briefcase, ArrowUpRight
} from 'lucide-react';

const services = [
  {
    title: "Counselling",
    description: "Expert guidance for your academic journey",
    icon: <Users className="w-6 h-6 text-gray-700" />,
    accentColor: "bg-gradient-to-br from-blue-500/20 to-violet-500/20"
  },
  {
    title: "Test Prep",
    description: "IELTS, TOEFL & PTE preparation",
    icon: <BookOpen className="w-6 h-6 text-gray-700" />,
    accentColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Admissions",
    description: "University selection & applications",
    icon: <GraduationCap className="w-6 h-6 text-gray-700" />,
    accentColor: "bg-gradient-to-br from-pink-500/20 to-rose-500/20"
  },
  {
    title: "Education Loan",
    description: "Financial assistance & planning",
    icon: <Landmark className="w-6 h-6 text-gray-700" />,
    accentColor: "bg-gradient-to-br from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Visa Help",
    description: "Seamless visa application process",
    icon: <Stamp className="w-6 h-6 text-gray-700" />,
    accentColor: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Housing",
    description: "Find your perfect accommodation",
    icon: <Home className="w-6 h-6 text-gray-700" />,
    accentColor: "bg-gradient-to-br from-cyan-500/20 to-sky-500/20"
  },
  {
    title: "Travel",
    description: "Flight & pre-departure support",
    icon: <Plane className="w-6 h-6 text-gray-700" />,
    accentColor: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "Insurance",
    description: "Health & travel coverage",
    icon: <HeartPulse className="w-6 h-6 text-gray-700" />,
    accentColor: "bg-gradient-to-br from-rose-500/20 to-pink-500/20"
  },
  {
    title: "Jobs",
    description: "Career support abroad",
    icon: <Briefcase className="w-6 h-6 text-gray-700" />,
    accentColor: "bg-gradient-to-br from-violet-500/20 to-purple-500/20"
  }
];

const ExpertiseSection = () => {
  return (
    <section className="mt-10 pt-10 pb-10 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50">

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto relative">
              Your Journey, Our Expertise
              
            </h2>
          </div>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg md:text-md text-purple-600 leading-relaxed">
              End-to-end solutions designed to make your international education journey seamless and successful
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 bg-white backdrop-blur-sm rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`absolute inset-0 ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                <div className="relative flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 mb-1 flex items-center">
                      {service.title}
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;