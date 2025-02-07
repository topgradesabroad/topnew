"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"; // Arrow icons for dropdown
import PopupForm from '@/components/popupForm'; // Import the PopupForm

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(""); // Track which dropdown is open

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <header className="bg-lightgrey z-40 relative">
        <div className="container mx-auto flex items-center justify-between px-6 pt-4">
          {/* Logo */}
          <Link href="/">
            <img src="/logo.svg" alt="Topgrades Abroad" className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-black font-dmSans">
            {/* Study Abroad Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen("study")}
              onMouseLeave={() => setDropdownOpen("")}
            >
              <button className="flex items-center hover:text-gray-800">
                Study Abroad
                <span className="ml-2">
                  {dropdownOpen === "study" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              {dropdownOpen === "study" && (
                <div className="absolute left-0 mt-[-2] w-48 bg-white shadow-md rounded-lg">
                  {["USA", "United Kingdom", "Australia", "Canada", "New Zealand", "Germany", "France", "Dubai"].map((country) => (
                    <Link key={country} href={`/study-abroad/${country.toLowerCase()}`} className="block px-4 py-2 hover:bg-gray-100">
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
              <button className="flex items-center hover:text-gray-800">
                Courses
                <span className="ml-2">
                  {dropdownOpen === "courses" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              {dropdownOpen === "courses" && (
                <div className="absolute left-[-350px] mt-[-2] w-[900px] max-w-screen-xl bg-white shadow-md rounded-lg grid grid-cols-5 gap-2 p-4">
                  {[ 
                    { name: "Management", sub: ["Finance", "Accounting", "HR", "Marketing", "International Business", "Supply Chain"] },
                    { name: "Computer Science", sub: ["AI", "Data Science", "Software Engg", "Cybersecurity", "IT Management"] },
                    { name: "Healthcare", sub: ["Medicine", "Nursing", "Pharmacy", "Public Health", "Biotechnology"] },
                    { name: "Engineering", sub: ["Mechanical", "Civil", "Electrical", "AI & Robotics", "Environmental Engg"] },
                    { name: "Beauty & Fashion", sub: ["Fashion Design", "Cosmetology", "Interior Design", "Luxury Brand Mgmt"] }
                  ].map((category) => (
                    <div key={category.name} className="border-b col-span-1">
                      <p className="px-4 py-2 font-semibold">{category.name}</p>
                      {category.sub.map((course) => (
                        <Link key={course} href={`/courses/${course.toLowerCase()}`} className="block px-6 py-2 hover:bg-gray-100">
                          {course}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other Menu Items */}
            <Link href="/services" className="hover:text-gray-800">Our Expertise</Link>
            <Link href="/blog" className="hover:text-gray-800">Blog</Link>
            <Link href="/resources" className="hover:text-gray-800">Resources</Link>
          </nav>

          {/* Button (Visible in desktop and mobile view) */}
          <button
            className="bg-black text-white px-4 py-3 rounded-md hidden md:block"
            onClick={togglePopup}
          >
            Start Your Journey
          </button>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Button */}
            <button
              className="bg-black text-white px-4 py-2 rounded-md order-1"
              onClick={togglePopup}
            >
              Start Your Journey
            </button>

            {/* Hamburger Icon */}
            <button
              className="flex items-center z-50 order-2"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Popup Form */}
      {isPopupOpen && (
        <PopupForm isOpen={isPopupOpen} onClose={togglePopup} />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6">
          <Link href="/study-abroad" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Study Abroad</Link>
          <Link href="/courses" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
          <Link href="/services" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Our Expertise</Link>
          <Link href="/blog" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link href="/resources" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
        </div>
      )}
    </>
  );
};

export default Header;













