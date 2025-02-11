'use client';

import React, { useEffect, useState } from 'react';
import { Users, BookOpen, GraduationCap, Globe, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Seeded random number generator for consistent SSR/CSR
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

interface FloatingShapeProps {
  index: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ index }) => {
  const top = seededRandom(index) * 100;
  const left = seededRandom(index + 1) * 100;
  const width = 120 + seededRandom(index + 2) * 200;
  const height = 120 + seededRandom(index + 3) * 200;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${width}px`,
        height: `${height}px`
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.1, 0],
        scale: [0, 1, 0],
        y: ["0%", "100%"]
      }}
      transition={{
        duration: 8 + index * 0.5,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-[40px]" />
    </motion.div>
  );
};

const ImpactStats = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const statsData = [
    {
      icon: Users,
      number: "10",
      text: "Years Experience",
      color: "#3B82F6"
    },
    {
      icon: BookOpen,
      number: "10,000+",
      text: "Courses To Choose From",
      color: "#10B981"
    },
    {
      icon: GraduationCap,
      number: "5000+",
      text: "Happy Students",
      color: "#F59E0B"
    },
    {
      icon: Globe,
      number: "12",
      text: "Countries Served",
      color: "#8B5CF6"
    },
    {
      icon: CheckCircle,
      number: "100%",
      text: "Visa Success",
      color: "#EC4899"
    }
  ];

  return (
    <section className="pt-12 md:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Client-only floating elements */}
      {isMounted && [...Array(8)].map((_, i) => (
        <FloatingShape key={i} index={i} />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 max-w-2xl mx-auto">
            Your Successful Career Begins With Our Proven Expertise
            <span className="block mt-4 text-lg md:text-md text-purple-600 font-normal">
              Trusted by thousands of students worldwide
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-xs mx-auto md:max-w-none">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-6 bg-white rounded-xl border border-gray-200/80 hover:border-transparent transition-all duration-300 hover:shadow-lg flex flex-col items-center">
                <div className="relative mb-6 w-full flex justify-center">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-xl bg-gray-100/50">
                    <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                  {stat.number}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  {stat.text}
                </p>

                <div className="w-12 h-1 bg-gray-200 rounded-full mt-auto group-hover:w-16 group-hover:bg-blue-500 transition-all duration-300" />
              </div>

              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        
        
      </div>
    </section>
  );
};

export default ImpactStats;