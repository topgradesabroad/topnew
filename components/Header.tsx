"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

type Country = {
  code: string;
  name: string;
  flag: string;
};

type CountryLinkProps = {
  country: Country;
  onClick?: () => void;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  country: string;
  course: string;
};

const COUNTRIES: Country[] = [
  { code: "usa", name: "United States of America", flag: "/flags/us.svg" },
  { code: "uk", name: "United Kingdom", flag: "/flags/gb.svg" },
  { code: "australia", name: "Australia", flag: "/flags/au.svg" },
  { code: "canada", name: "Canada", flag: "/flags/ca.svg" },
  { code: "nz", name: "New Zealand", flag: "/flags/nz.svg" },
  { code: "germany", name: "Germany", flag: "/flags/de.svg" },
  { code: "france", name: "France", flag: "/flags/fr.svg" },
  { code: "dubai", name: "Dubai", flag: "/flags/ae.svg" }
];

const CountryLink = ({ country, onClick }: CountryLinkProps) => (
  <Link 
    href={`/countries/${country.code}`}
    className="flex items-center px-4 py-2 hover:bg-gray-100 space-x-8"
    onClick={onClick}
  >
    <img 
      src={country.flag} 
      alt={`${country.name} flag`} 
      className="w-6 h-4 object-cover"
      loading="lazy"
    />
    <span>{country.name}</span>
  </Link>
);

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    course: ""
  });

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowCountries(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCountries(false);
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Show success message immediately
    setSubmitStatus({
      success: true,
      message: "Thank you for your application! We'll be in touch soon."
    });

    // Send the form data in the background
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <header className="z-50 sticky top-0 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex-shrink-0" aria-label="Home">
            <img 
              src="/logo11.svg" 
              alt="Topgrades Abroad" 
              className="h-10 md:h-12 w-auto max-w-[150px]" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-black font-dm-Sans">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center space-x-1 hover:text-gray-800">
                <span>Countries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showCountries && (
                <div className="absolute left-0 mt-6 w-64 bg-white shadow-md rounded-lg py-2 z-50">
                  {COUNTRIES.map(country => (
                    <CountryLink 
                      key={country.code} 
                      country={country}
                    />
                  ))}
                </div>
              )}
            </div>

            <Link href="/courses" className="hover:text-gray-800">Courses</Link>
            <Link href="/blog" className="hover:text-gray-800">Blog</Link>
            <Link href="/resources" className="hover:text-gray-800">Resources</Link>
          </nav>

          <button
            className="hidden md:flex px-4 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700
              text-white shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => setIsPopupOpen(true)}
          >
            Start Your Journey
          </button>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              className="px-2 py-2 text-sm rounded-md bg-blue-700 hover:bg-blue-800
                text-white shadow-md transition-all duration-200"
              onClick={() => setIsPopupOpen(true)}
            >
              Start Your Journey
            </button>
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Contact Form Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-5xl mx-4 relative flex flex-col md:flex-row max-h-[90vh] overflow-auto">
            {/* Left Column - Image (Desktop Only) */}
            <div className="hidden md:block w-1/2 relative">
              <img 
                src="/study-abroad-image.jpg" 
                alt="Study Abroad"
                className="w-full h-full object-cover rounded-l-lg"
                style={{ maxHeight: '580px' }}
              />
            </div>

            {/* Right Column - Form */}
            <div className="w-full md:w-1/2 p-8 relative">
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              
              {submitStatus?.success ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="bg-green-50 text-green-800 p-6 rounded-lg max-w-md">
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-lg">{submitStatus.message}</p>
                    <p className="mt-4 text-sm text-green-600">You can close this window now</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Start Your Journey</h3>
                  
                  {submitStatus?.success === false && (
                    <div className="p-4 rounded-md mb-4 bg-red-50 text-red-800">
                      <p>{submitStatus.message}</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Country</option>
                        {COUNTRIES.map(country => (
                          <option key={country.code} value={country.code}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Course Interest</label>
                      <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Business Management, Computer Science"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-800 
                      transition-all duration-200 font-medium disabled:bg-blue-400"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[57px] bg-white shadow-lg py-4 px-6 z-40">
          <button
            className="flex items-center justify-between w-full px-4 py-2"
            onClick={() => setIsCountriesOpen(!isCountriesOpen)}
          >
            <span className="font-medium">Countries</span>
            <ChevronDown 
              className={`w-5 h-5 transform transition-transform ${isCountriesOpen ? 'rotate-180' : ''}`}
            />
          </button>
          
          {isCountriesOpen && (
            <div className="mt-2 space-y-1">
              {COUNTRIES.map(country => (
                <Link 
                  key={country.code}
                  href={`/countries/${country.code}`}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 space-x-8 no-underline"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCountriesOpen(false);
                  }}
                >
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`} 
                    className="w-6 h-4 object-cover"
                    loading="lazy"
                  />
                  <span>{country.name}</span>
                </Link>
              ))}
            </div>
          )}
          
          <div className="border-t mt-4 pt-4 space-y-4">
            <Link 
              href="/courses" 
              className="block px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              href="/blog" 
              className="block px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/resources" 
              className="block px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
