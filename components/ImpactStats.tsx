'use client';

import React from 'react';
import { 
  Globe2, 
  GraduationCap, 
  Award, 
  Users, 
  BarChart3,
  Building2
} from 'lucide-react';

const ImpactStats = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8 stroke-1 text-gray-800" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <GraduationCap className="w-8 h-8 stroke-1 text-gray-800" />,
      value: "10,000+",
      label: "Courses",
    },
    {
      icon: <BarChart3 className="w-8 h-8 stroke-1 text-gray-800" />,
      value: "100%",
      label: "Visa Success",
      
    },
    {
      icon: <Globe2 className="w-8 h-8 stroke-1 text-gray-800" />,
      value: "12+",
      label: "Countries",
      
    },
    {
      icon: <Users className="w-8 h-8 stroke-1 text-gray-800" />,
      value: "5,000+",
      label: "Happy Students",
      
    },
    {
      icon: <Building2 className="w-8 h-8 stroke-1 text-gray-800" />,
      value: "500+",
      label: "Partner Universities",
      
    }
  ];

  return (
    <section className="relative w-full py-24 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-indigo-800 to-blue-900 mt-40 md:mt-0"> {/* Added margin top for mobile */}
      {/* Enhanced background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Transforming Dreams Into Global Success
          </h2>
          <p className="text-base text-gray-800 max-w-2xl mx-auto">
            With over 15 years of expertise in international education consulting, 
            we've helped thousands of students achieve their study abroad dreams 
            with our personalized guidance and 100% visa success rate.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-2 md:px-12"> {/* Changed grid-cols for mobile */}
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative backdrop-blur-xl bg-white/10 rounded-xl p-3 md:p-6 
                border border-white/20 hover:border-white/30
                shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.6)]
                transition-all duration-300 overflow-hidden"
            >
              {/* Enhanced glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
              
              {/* Shine effect on hover */}
              <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
              
              {/* Content */}
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-2 md:mb-3 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-3xl font-bold text-black mb-1 md:mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;