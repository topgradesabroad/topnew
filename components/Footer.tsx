'use client';

import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Send } from "lucide-react";

const Footer = () => {
  const countries = ['USA', 'UK', 'Canada', 'Australia', 'New Zealand', 'Germany', 'France', 'Ireland'];
  const mainPages = ['Countries', 'Our Expertise', 'Blog', 'Resources'];
  const legalPages = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'];
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-black">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <img src="/logo11.svg" alt="TopGrades Abroad" className="h-12 w-auto" />
          <p className="text-sm">
            Your trusted partner in international education consulting. We help students achieve their dreams of studying abroad with comprehensive guidance and support.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Study Destinations */}
        <div>
          <h3 className="text-blue-800 text-lg font-semibold mb-4">Study Destinations</h3>
          <ul className="space-y-2">
            {countries.map((country) => (
              <li key={country}>
                <a href={`/countries/${country.toLowerCase()}`} className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {country}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-blue-800 text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {mainPages.map((page) => (
              <li key={page}>
                <a href={`/${page.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {page}
                </a>
              </li>
            ))}
            {legalPages.map((page) => (
              <li key={page}>
                <a href={`/${page.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-blue-800 text-lg font-semibold mb-4">Quick Contact</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact Information */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h4 className="text-blue-800 font-semibold">Head Office</h4>
                <p className="text-sm">A 9 C, Karni Nagar, Pawanpuri, Bikaner, Rajasthan, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h4 className="text-blue-800 font-semibold">Branch Office</h4>
                <p className="text-sm">50, Jaswant Nagar, Khatipura, Jaipur, Rajasthan, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="space-y-2">
                <a href="mailto:apply@topgradesabroad.com" className="flex items-center hover:text-white transition-colors">
                  <Mail className="h-6 w-6 text-blue-500 mr-4" />
                  apply@topgradesabroad.com
                </a>
                <a href="tel:+919660372374" className="flex items-center hover:text-white transition-colors">
                  <Phone className="h-6 w-6 text-blue-500 mr-4" />
                  +91-9660372374
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} TopGrades Abroad. All rights reserved.
            </p>
            <p className="text-sm flex items-center">
              Made with 
              <svg className="h-4 w-4 text-red-500 mx-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              in Bikaner
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;