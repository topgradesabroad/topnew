// components/StudyDestinations.tsx
'use client';
import Image, { StaticImageData } from 'next/image';
import { ReactElement, useRef, useState } from 'react';

interface CountryCard {
  name: string;
  slug: string;
  image: string | StaticImageData;
  programs: string[];
  color: string;
}

const countries: CountryCard[] = [
  { 
    name: 'United States', 
    slug: 'usa',
    image: '/Countries/USA.jpg',
    programs: ['MBA Specializations', 'AI Research Programs', 'Film Production Degrees', 'Space Technology Courses'],
    color: 'bg-blue-100/30'
  },
  // Add other countries with unique programs...
  { 
    name: 'United Kingdom', 
    slug: 'UK',
    image: '/Countries/UK.jpg',
    programs: ['Arctic Engineering', 'Renewable Energy Masters', 'AI Ethics Programs', 'Forestry Management'],
    color: 'bg-red-100/30'
  },
    { 
        name: 'Australia', 
        slug: 'australia',
        image: '/Countries/Australia.jpg',
        programs: ['Arctic Engineering', 'Renewable Energy Masters', 'AI Ethics Programs', 'Forestry Management'],
        color: 'bg-red-100/30'
    },

  { 
    name: 'Canada', 
    slug: 'canada',
    image: '/Countries/Canada.jpg',
    programs: ['Arctic Engineering', 'Renewable Energy Masters', 'AI Ethics Programs', 'Forestry Management'],
    color: 'bg-red-100/30'
  },
  
  { 
    name: 'New Zealand', 
    slug: 'new zealand',
    image: '/Countries/NewZealand.jpg',
    programs: ['Arctic Engineering', 'Renewable Energy Masters', 'AI Ethics Programs', 'Forestry Management'],
    color: 'bg-red-100/30'
  },
  { 
    name: 'Ireland', 
    slug: 'ireland',
    image: '/Countries/Ireland.jpg',
    programs: ['Arctic Engineering', 'Renewable Energy Masters', 'AI Ethics Programs', 'Forestry Management'],
    color: 'bg-red-100/30'
  },
  { 
    name: 'Germany', 
    slug: 'germany',
    image: '/Countries/Germany.jpg',
    programs: ['Arctic Engineering', 'Renewable Energy Masters', 'AI Ethics Programs', 'Forestry Management'],
    color: 'bg-red-100/30'
  },
  { 
    name: 'France', 
    slug: 'france',
    image: '/Countries/France.jpg',
    programs: ['Arctic Engineering', 'Renewable Energy Masters', 'AI Ethics Programs', 'Forestry Management'],
    color: 'bg-red-100/30'
    },
];

export default function StudyDestinations(): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * 0.8;
      const newPosition = direction === 'right' 
        ? scrollPosition + scrollAmount 
        : scrollPosition - scrollAmount;
      
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 to-cyan-50 py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Explore Study Destinations
        </h2>

        {/* Navigation Buttons */}
        <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 px-4">
          <button
            onClick={() => scroll('left')}
            className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Cards Container */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x snap-mandatory"
        >
          {countries.map((country) => (
            <div 
              key={country.slug}
              className="relative min-w-[300px] md:min-w-[400px] h-[400px] snap-center flex-shrink-0 group"
            >
              {/* Main Card */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={country.image}
                  alt={`${country.name} landscape`}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Color Overlay */}
                <div className={`absolute inset-0 ${country.color} mix-blend-soft-light`} />
                
                {/* Country Name */}
                <h3 className="absolute top-6 left-6 text-2xl font-medium text-white drop-shadow-lg">
                  {country.name}
                </h3>
              </div>

              {/* Parallax Program Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end space-y-4">
                <h4 className="text-white text-lg font-semibold mb-4">
                  Popular Programs:
                </h4>
                
                <ul className="space-y-3">
                  {country.programs.map((program, index) => (
                    <li 
                      key={index}
                      className="text-gray-200 text-sm font-medium pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full"
                    >
                      {program}
                    </li>
                  ))}
                </ul>

                <a
                  href={`/destinations/${country.slug}`}
                  className="mt-6 inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors text-sm font-medium"
                >
                  Explore {country.name}
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}