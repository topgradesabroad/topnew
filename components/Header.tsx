"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import PopupForm from '@/components/popupForm';

// Define type for course categories to improve type safety
type CourseCategory = {
  name: string;
  sub: string[];
};

// Constants for study abroad countries and course categories
const STUDY_ABROAD_COUNTRIES = [
  "USA", "United Kingdom", "Australia", "Canada", 
  "New Zealand", "Germany", "France", "Dubai"
];

const COURSE_CATEGORIES: CourseCategory[] = [
  { 
    name: "Management", 
    sub: ["Finance", "Accounting", "HR", "Marketing", "International Business", "Supply Chain"] 
  },
  { 
    name: "Computer Science", 
    sub: ["AI", "Data Science", "Software Engg", "Cybersecurity", "IT Management"] 
  },
  { 
    name: "Healthcare", 
    sub: ["Medicine", "Nursing", "Pharmacy", "Public Health", "Biotechnology"] 
  },
  { 
    name: "Engineering", 
    sub: ["Mechanical", "Civil", "Electrical", "AI & Robotics", "Environmental Engg"] 
  },
  { 
    name: "Beauty & Fashion", 
    sub: ["Fashion Design", "Cosmetology", "Interior Design", "Luxury Brand Mgmt"] 
  }
];

const Header = () => {
  // State management for header interactions
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(""); 

  // Toggle popup form
  const togglePopup = () => {
    setIsPopupOpen(prev => !prev);
  };

  return (
    <>
      <header 
        className="z-50 sticky top-0 bg-white shadow-sm" 
        role="banner"
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3 bg-white">
          {/* Logo with responsive sizing and accessibility */}
          <Link 
            href="/" 
            className="flex-shrink-0"
            aria-label="Home Page"
          >
            <img 
              src="/logo11.svg" 
              alt="Topgrades Abroad" 
              className="h-10 md:h-12 w-auto max-w-[150px]" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex space-x-6 text-black font-dm-Sans"
            aria-label="Main Navigation"
          >
            {/* Study Abroad Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen("study")}
              onMouseLeave={() => setDropdownOpen("")}
            >
              <button 
                className="flex items-center hover:text-gray-800"
                aria-haspopup="true"
                aria-expanded={dropdownOpen === "study"}
              >
                Study Abroad
                <span className="ml-2">
                  {dropdownOpen === "study" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              {dropdownOpen === "study" && (
                <div 
                  className="absolute left-0 mt-[-2] w-48 bg-white shadow-md rounded-lg"
                  role="menu"
                >
                  {STUDY_ABROAD_COUNTRIES.map((country) => (
                    <Link 
                      key={country} 
                      href={`/study-abroad/${country.toLowerCase()}`} 
                      className="block px-4 py-2 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {country}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Courses Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen("courses")}
              onMouseLeave={() => setDropdownOpen("")}
            >
              <button 
                className="flex items-center hover:text-gray-800"
                aria-haspopup="true"
                aria-expanded={dropdownOpen === "courses"}
              >
                Courses
                <span className="ml-2">
                  {dropdownOpen === "courses" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              {dropdownOpen === "courses" && (
                <div 
                  className="absolute left-[-350px] mt-[-2] w-[900px] max-w-screen-xl bg-white shadow-md rounded-lg grid grid-cols-5 gap-2 p-4"
                  role="menu"
                >
                  {COURSE_CATEGORIES.map((category) => (
                    <div key={category.name} className="border-b col-span-1">
                      <p className="px-4 py-2 font-semibold">{category.name}</p>
                      {category.sub.map((course) => (
                        <Link 
                          key={course} 
                          href={`/courses/${course.toLowerCase()}`} 
                          className="block px-6 py-2 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {course}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Static Navigation Links */}
            <Link href="/services" className="hover:text-gray-800">Our Expertise</Link>
            <Link href="/blog" className="hover:text-gray-800">Blog</Link>
            <Link href="/resources" className="hover:text-gray-800">Resources</Link>
          </nav>

          {/* Desktop Call-to-Action Button */}
          <button
            className="hidden md:flex items-center gap-4 px-4 py-3 rounded-md cursor-pointer
              bg-blue-700 hover:bg-blue-800
              text-white shadow-lg hover:shadow-xl transition-all duration-200" 
            onClick={togglePopup}
            aria-label="Open Contact Form"
          >
            <span>Start Your Journey</span>
          </button>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile CTA Button */}
            <button
              className="flex items-center px-2 py-2 text-sm rounded-md cursor-pointer
                bg-blue-700 hover:bg-blue-800
                text-white shadow-md transition-all duration-200"
              onClick={togglePopup}
              aria-label="Open Contact Form"
            >
              <span className="truncate">Start Your Journey</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="flex items-center z-50"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Popup Form */}
      {isPopupOpen && (
        <PopupForm 
          isOpen={isPopupOpen} 
          onClose={togglePopup} 
        />
      )}

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden 
            bg-white 
            fixed inset-x-0 top-[57px] 
            shadow-lg 
            py-4 px-6 
            z-40"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <Link 
            href="/study-abroad" 
            className="block py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-md transition-colors" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Study Abroad
          </Link>
          <Link 
            href="/courses" 
            className="block py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-md transition-colors" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Courses
          </Link>
          <Link 
            href="/services" 
            className="block py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-md transition-colors" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Expertise
          </Link>
          <Link 
            href="/blog" 
            className="block py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-md transition-colors" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/resources" 
            className="block py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-md transition-colors" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Resources
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;