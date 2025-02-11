'use client'
import React from 'react'
import { PhoneCall, Calendar, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen md:min-h-[87vh] flex flex-col md:flex-row">
      {/* Background gradient - only visible on desktop */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-rose-50 via-pink-100 via-blue-50 to-purple-300 z-0" />

      {/* Left Column - Content */}
      <div className="md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center order-2 md:order-1 bg-white md:bg-transparent relative z-1">
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 space-x-2 bg-indigo-200 md:bg-white/10 backdrop-blur-sm rounded-full w-fit border border-gray-50 md:border-white/20 shadow-xl mx-auto md:mx-0">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600">Your Future Starts Here</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold font-dm-sans text-gray-900 leading-[1] tracking-tight">
            Make Your Study-Abroad Dream a Reality
          </h1>

          {/* Description */}
          <p className="text-base text-gray-700 max-w-xl leading-relaxed md:leading-loose text-center md:text-justify mx-auto md:mx-0">
            From selecting the right programs and crafting strong applications to test preparation and visa support, we offer end-to-end assistance tailored to each student's goals, ensuring a smooth and successful study abroad journey.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pb-6 md:pb-0">
            <button className="group px-6 py-3 md:px-8 md:py-4 text-base font-medium text-white rounded-xl
              bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500
              shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-600/20
              transform hover:-translate-y-0.5 transition-all duration-200 
              flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5" />
              <span>Book Consultation</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            <button className="group px-6 py-3 md:px-8 md:py-4 text-base font-medium text-white rounded-xl
              bg-gradient-to-r from-green-600 via-green-500 to-teal-400 hover:from-green-700 hover:via-green-600 hover:to-teal-500
              shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-600/20
              transform hover:-translate-y-0.5 transition-all duration-200
              flex items-center justify-center gap-3">
              <PhoneCall className="w-5 h-5" />
              <span>Contact Us</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="relative w-full md:w-1/2 min-h-[300px] md:h-auto order-1 md:order-2">
        {/* Mobile-only gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-pink-50/50 md:hidden" />
        <Image
          src="/hero71.png"
          alt="Students studying abroad"
          fill
          className="object-cover object-left"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={90}
        />
      </div>
    </section>
  )
}