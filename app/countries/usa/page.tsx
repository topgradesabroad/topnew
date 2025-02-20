// pages/usa.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BookOpen, Globe, Heart, Star, Zap, Users, School, GraduationCap, DollarSign, Briefcase } from 'lucide-react';

// Define types for props
type FactCardProps = {
  icon: React.ElementType;
  title: string;
  description?: string;
};

// Compact Fact Card for Hero Section
const CompactFactCard: React.FC<FactCardProps> = ({ icon, title, description }) => {
  const Icon = icon;
  return (
    <div className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-lg p-3 text-white shadow-lg w-[150px] backdrop-blur-sm bg-opacity-90">
      <div className="flex flex-col items-center text-center">
        <Icon className="h-8 w-8 text-purple-200 mb-1" />
        <h3 className="text-lg font-bold">{title}</h3>
        {description && <p className="text-xs text-purple-200">{description}</p>}
      </div>
    </div>
  );
};

type UniversityCardProps = {
  name: string;
  image: string;
  ranking: number;
  tuition: number;
  salary: number;
  acceptance: number;
};

// University Card Component
const UniversityCard: React.FC<UniversityCardProps> = ({ name, image, ranking, tuition, salary, acceptance }) => {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-transparent opacity-60"></div>
        <button 
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10"
        >
          <Heart className={`h-5 w-5 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
        <div className="absolute bottom-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
          Rank #{ranking}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3 text-indigo-900">{name}</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center border-r border-gray-200">
            <DollarSign className="h-4 w-4 text-amber-500 mx-auto mb-1" />
            <p className="text-xs text-gray-500">Tuition</p>
            <p className="font-semibold">${tuition}k</p>
          </div>
          <div className="text-center border-r border-gray-200">
            <Briefcase className="h-4 w-4 text-amber-500 mx-auto mb-1" />
            <p className="text-xs text-gray-500">Avg. Salary</p>
            <p className="font-semibold">${salary}k</p>
          </div>
          <div className="text-center">
            <Star className="h-4 w-4 text-amber-500 mx-auto mb-1" />
            <p className="text-xs text-gray-500">Acceptance</p>
            <p className="font-semibold">{acceptance}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Benefit Card Component
const BenefitCard: React.FC<FactCardProps> = ({ icon, title, description }) => {
  const Icon = icon;
  
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-white to-purple-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-purple-100 transition-all"
    >
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2" />
      <div className="p-6">
        <div className="mb-4 bg-purple-100 p-3 inline-block rounded-full">
          <Icon className="h-8 w-8 text-indigo-600" />
        </div>
        <h3 className="text-lg font-bold mb-3 text-indigo-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

type ScholarshipCardProps = {
  number: number;
  title: string;
  description: string;
  detailedInfo: string;
  amount: string;
  deadline: string;
  eligibility: string;
  
};

// Scholarship Card Component
const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  number,
  title,
  description,
  detailedInfo,
  amount,
  deadline,
  eligibility,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-purple-100 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div
        className="flex items-center p-4 cursor-pointer bg-gradient-to-r from-white to-purple-50 group-hover:from-purple-50 group-hover:to-purple-100 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-shrink-0 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
          {number}
        </div>
        <h3 className="font-semibold flex-grow text-indigo-900">{title}</h3>
        <ArrowRight
          className={`h-5 w-5 text-purple-600 transform transition-transform duration-300 ${
            expanded ? "rotate-90" : ""
          }`}
        />
      </div>
      {expanded && (
        <div className="p-4 border-t border-purple-100 bg-gradient-to-br from-white via-white to-purple-50">
          <p className="text-gray-700 mb-3">{description}</p>
          <p className="text-gray-600 text-sm mb-3">{detailedInfo}</p>
          <div className="grid md:grid-cols-3 gap-3 mt-4">
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-xs text-purple-600 font-medium mb-1">
                Award Amount
              </p>
              <p className="font-semibold text-indigo-900">{amount}</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-xs text-purple-600 font-medium mb-1">
                Application Deadline
              </p>
              <p className="font-semibold text-indigo-900">{deadline}</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-xs text-purple-600 font-medium mb-1">
                Eligibility
              </p>
              <p className="font-semibold text-indigo-900">{eligibility}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

type CourseCardProps = {
  title: string;
  icon: React.ElementType;
  description: string;
  universities: number;
  duration: string; 
  level: string;
};

// Course Card Component
const CourseCard: React.FC<CourseCardProps> = ({ title, icon, description, universities, duration, level }) => {
  const Icon = icon;
  
  return (
    <div className="bg-gradient-to-br from-white to-purple-50 rounded-lg shadow-md p-5 border-t-4 border-indigo-600 hover:shadow-xl transition-all duration-300 group">
      <div className="mb-4 relative">
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-indigo-100 transform -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-purple-100 transform -translate-x-1/4 -translate-y-1/4"></div>
        <Icon className="h-9 w-9 text-indigo-600 relative z-10" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-indigo-900 group-hover:text-indigo-700">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <div className="flex items-center text-xs text-gray-500 mb-2">
        <School className="h-3 w-3 mr-1 text-amber-500" />
        <span>{universities}+ universities offer this program</span>
      </div>
      <div className="flex items-center text-xs text-gray-500 mb-2">
        <GraduationCap className="h-3 w-3 mr-1 text-amber-500" />
        <span>Level: {level}</span>
      </div>
      <div className="flex items-center text-xs text-gray-500 mb-4">
        <Clock className="h-3 w-3 mr-1 text-amber-500" />
        <span>Duration: {duration}</span>
      </div>
      
      <button className="text-indigo-600 font-medium flex items-center text-sm hover:text-indigo-800 group-hover:translate-x-1 transition-transform">
        Learn more <ArrowRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  );
};

// Consultation Form Component (Right Column)
const ConsultationForm: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-purple-50 rounded-lg shadow-md p-6 sticky top-24 border border-purple-100">
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-indigo-400/30 to-purple-300/30 rounded-full blur-xl"></div>
      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-pink-300/20 rounded-full blur-xl"></div>
      
      <h3 className="text-xl font-bold mb-2 text-indigo-900">Get Free Consultation</h3>
      <p className="text-sm text-gray-600 mb-6">Our experts will guide you through the entire process</p>
      
      <form>
        <div className="space-y-4 relative">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-indigo-900 mb-1">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-indigo-900 mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-indigo-900 mb-1">Phone</label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 1234567890"
              className="w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            />
          </div>
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-indigo-900 mb-1">Study Level</label>
            <select
              id="level"
              className="w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            >
              <option value="">Select study level</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="phd">PhD</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 shadow-md hover:shadow-lg"
          >
            Schedule Consultation
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            We respect your privacy and will never share your information
          </p>
        </div>
      </form>
    </div>
  );
};

// Clock Icon Component
const Clock: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

// Scholarship Form Modal Component
const ScholarshipFormModal: React.FC<{ show: boolean; onClose: () => void }> = ({ show, onClose }) => {
  if (!show) return null;
  
  return (
    <div className="fixed inset-0 bg-indigo-900/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl shadow-xl max-w-md w-full relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-amber-500 to-pink-500"></div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="p-6 pt-10">
          <h3 className="text-xl font-bold mb-2 text-indigo-900">Get Scholarship Information</h3>
          <p className="text-sm text-gray-600 mb-6">
            Fill out this form and our scholarship experts will contact you with personalized scholarship options.
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="scholarName" className="block text-sm font-medium text-indigo-900 mb-1">Full Name</label>
              <input
                id="scholarName"
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              />
            </div>
            <div>
              <label htmlFor="scholarEmail" className="block text-sm font-medium text-indigo-900 mb-1">Email</label>
              <input
                id="scholarEmail"
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              />
            </div>
            <div>
              <label htmlFor="scholarStudyField" className="block text-sm font-medium text-indigo-900 mb-1">Preferred Field of Study</label>
              <select
                id="scholarStudyField"
                className="w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                <option value="">Select field of study</option>
                <option value="computer-science">Computer Science & IT</option>
                <option value="business">Business & Management</option>
                <option value="engineering">Engineering</option>
                <option value="medicine">Medicine & Healthcare</option>
                <option value="arts">Arts & Humanities</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="scholarAcademic" className="block text-sm font-medium text-indigo-900 mb-1">Academic Record</label>
              <select
                id="scholarAcademic"
                className="w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                <option value="">Select grade range</option>
                <option value="excellent">90% and above</option>
                <option value="very-good">80-89%</option>
                <option value="good">70-79%</option>
                <option value="average">60-69%</option>
                <option value="below-average">Below 60%</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 shadow-md hover:shadow-lg"
            >
              Find Scholarships
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              We respect your privacy and will never share your information
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

// Main Page Component
export default function USA() {
  const [activePage, setActivePage] = useState(0);
  const [showScholarshipForm, setShowScholarshipForm] = useState(false);
  const [activeAdmissionTab, setActiveAdmissionTab] = useState("academics");

  
  // Mock data for universities
  const universities: UniversityCardProps[] = [
    { name: "Harvard University", image: "/images/usa/harvard.jpg", ranking: 1, tuition: 55, salary: 120, acceptance: 5 },
    { name: "Stanford University", image: "/images/usa/stanford.jpg", ranking: 2, tuition: 53, salary: 125, acceptance: 4 },
    { name: "MIT", image: "/images/usa/mit.jpg", ranking: 3, tuition: 57, salary: 130, acceptance: 7 },
    { name: "Princeton University", image: "/images/usa/princeton.jpg", ranking: 4, tuition: 52, salary: 115, acceptance: 6 },
    { name: "Yale University", image: "/images/usa/yale.jpg", ranking: 5, tuition: 54, salary: 118, acceptance: 6 },
    { name: "Columbia University", image: "/images/usa/columbia.jpg", ranking: 6, tuition: 58, salary: 117, acceptance: 7 },
    { name: "University of Chicago", image: "/images/usa/chicago.jpg", ranking: 9, tuition: 56, salary: 110, acceptance: 7 },
    { name: "University of Pennsylvania", image: "/images/usa/upenn.jpg", ranking: 10, tuition: 53, salary: 115, acceptance: 8 },
    { name: "Cornell University", image: "/images/usa/cornell.jpg", ranking: 14, tuition: 52, salary: 112, acceptance: 11 },
  ];
  
  // Mock data for scholarships
  const scholarships: ScholarshipCardProps[] = [
    {
      number: 1,
      title: "Fulbright-Nehru Fellowships",
      description:
        "Comprehensive funding for Indian students and professionals to pursue study, research, or teaching in the United States.",
      detailedInfo:
        "This fellowship can provide partial or full financial support for tuition, living expenses, and travel, depending on the specific award category. It aims to foster cross-cultural academic exchange and leadership development among Indian scholars.",
      amount: "Varies (Full Funding Possible)",
      deadline: "February/March (varies)",
      eligibility: "Indian citizens with strong academic background and leadership potential",
      
    },
    {
      number: 2,
      title: "Hubert H. Humphrey Fellowship Program",
      description:
        "A non-degree program for experienced professionals looking to enhance their leadership skills through academic study and professional collaboration in the US.",
      detailedInfo:
        "This fellowship offers comprehensive funding for mid-career professionals to spend up to one year in the United States, focusing on professional development, leadership training, and academic enrichment. Applications typically go through the US Embassy in India.",
      amount: "Varies (Full Funding)",
      deadline: "Varies by Country (typically June/July)",
      eligibility: "Indian mid-career professionals with a proven track record of leadership",
      
    },
    {
      number: 3,
      title: "Inlaks Shivdasani Foundation Scholarships",
      description:
        "Financial assistance for exceptional Indian students to pursue postgraduate programs at leading institutions worldwide.",
      detailedInfo:
        "The scholarship covers up to $100,000, which can be applied toward tuition, living expenses, and travel. Applicants must demonstrate outstanding academic performance and extracurricular achievements, and the scholarship typically supports master’s and doctoral programs.",
      amount: "Up to $100,000 (for courses at top institutions)",
      deadline: "March 31st (annually)",
      eligibility: "Indian students with excellent academic and extracurricular records",
      
    },
    {
      number: 4,
      title: "Tata Scholarships for Cornell University",
      description:
        "Offers significant financial assistance to Indian students pursuing undergraduate studies at Cornell University.",
      detailedInfo:
        "The Tata Scholarship ensures that top-performing Indian students can attend Cornell without financial barriers. It covers a substantial portion of tuition over the duration of the undergraduate program. Selection is based on academic merit and financial need.",
      amount: "Varies (Significant partial funding)",
      deadline: "Varies by Cornell Program",
      eligibility: "Indian citizens applying to Cornell's undergraduate programs",
      
    },
    {
      number: 5,
      title: "Narotam Sekhsaria Scholarships",
      description:
        "A merit-based loan scholarship for Indian students pursuing postgraduate studies at top-tier institutions in India and abroad.",
      detailedInfo:
        "This interest-free loan scholarship can provide up to ₹20 lakhs (around $24,000 USD). Applicants must demonstrate consistent academic excellence and secure admission to a reputable postgraduate program. Repayment terms are flexible and interest-free.",
      amount: "Up to ₹20 Lakhs (Approx. $24,000 USD)",
      deadline: "Varies (check website)",
      eligibility: "Indian students with a strong academic record pursuing postgraduate programs",
      
    },
    {
      number: 6,
      title: "Aga Khan Foundation International Scholarship Programme",
      description:
        "Provides financial support (partial to full) for outstanding students from developing countries, including India, to pursue postgraduate studies.",
      detailedInfo:
        "This scholarship is awarded on a 50% grant and 50% loan basis, covering tuition fees and living expenses. It targets academically talented students who demonstrate genuine financial need and a commitment to improving the quality of life in their communities.",
      amount: "Varies (Partial to Full)",
      deadline: "March/April (varies annually)",
      eligibility: "Indian students with excellent academic records and proven financial need",
      
    },
    {
      number: 7,
      title: "Rotary Foundation Global Grants",
      description:
        "Scholarships for graduate-level coursework or research in one of Rotary’s focus areas, offering substantial funding for international study.",
      detailedInfo:
        "Global Grants support large-scale, sustainable projects and can fund tuition, travel, and living expenses for students whose fields align with Rotary’s focus areas (e.g., peace, disease prevention, water, education). Applications must be endorsed by a local Rotary club.",
      amount: "Varies (Significant funding for specific areas)",
      deadline: "Varies by Rotary District (Ongoing)",
      eligibility: "Applicants endorsed by a Rotary club, focusing on Rotary’s areas of focus",
      
    },
    {
      number: 8,
      title: "Stanford Reliance Dhirubhai Fellows Program for Indian Students",
      description:
        "Provides full tuition and fees for Indian MBA candidates at Stanford Graduate School of Business.",
      detailedInfo:
        "The fellowship is aimed at future leaders who plan to return to India upon completing their MBA. It covers the entire cost of tuition and fees for the two-year program. Recipients are selected for their leadership potential and commitment to contributing to India’s growth.",
      amount: "Full Tuition and Fees",
      deadline: "Varies (typically May/June)",
      eligibility: "Indian nationals applying to the Stanford MBA with a commitment to India’s development",
      
    },
    {
      number: 9,
      title: "University-Specific Scholarships (USA Universities)",
      description:
        "Individual scholarships offered by US universities, which can range from partial to full funding depending on the institution and program.",
      detailedInfo:
        "Many US universities provide their own scholarships, fellowships, or assistantships for international students. The amounts and eligibility criteria vary widely based on academic merit, financial need, or department-specific requirements. Applicants should consult each university’s financial aid office or scholarship page.",
      amount: "Varies widely (Partial to Full)",
      deadline: "Varies by University & Program",
      eligibility: "Depends on individual university criteria (merit-based, need-based, or departmental)",
      
    },
    {
      number: 10,
      title: "EducationUSA Opportunity Funds Program",
      description:
        "Helps highly qualified, financially challenged students cover application-related costs when applying to US universities.",
      detailedInfo:
        "The program covers expenses such as testing fees, application fees, and other costs associated with the US college application process. It also offers comprehensive advising to help students navigate admissions and financial aid opportunities at accredited US institutions.",
      amount: "Varies (Support for application process)",
      deadline: "Varies (check EducationUSA India)",
      eligibility:
        "High-achieving, low-income students who demonstrate strong potential for admission and financial aid at US institutions",
      
    },
  ];
  
  // Mock data for courses
  const courses: CourseCardProps[] = [
    { 
      title: "Computer Science & IT", 
      icon: Globe, 
      description: "Study programming, AI, data science, and cybersecurity at top US universities", 
      universities: 450,
      duration: "4 years",
      level: "Bachelor's, Master's, PhD"
    },
    { 
      title: "Business & Management", 
      icon: BookOpen, 
      description: "Learn from the world's best business schools with industry partnerships", 
      universities: 350,
      duration: "1-2 years (MBA), 4 years (BBA)",
      level: "Bachelor's, Master's"
    },
    { 
      title: "Engineering", 
      icon: Award, 
      description: "Access cutting-edge research and innovation in all engineering fields", 
      universities: 300,
      duration: "4-5 years",
      level: "Bachelor's, Master's, PhD"
    },
    { 
      title: "Medicine & Healthcare", 
      icon: Star, 
      description: "Train at prestigious medical schools with advanced clinical facilities", 
      universities: 180,
      duration: "4 years + residency",
      level: "MD, DO, PhD"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-screen max-h-[600px] overflow-hidden relative">
          <img 
            src="/images/usa/usahero.jpg" 
            alt="USA University Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center lg:items-start lg:px-12 justify-center text-white">
            <div className="absolute inset-0"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-center lg:text-left relative"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-800">Study in USA</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl mb-10 max-w-2xl text-center lg:text-left text-black"
            >
              Unlock your potential at world-class universities
            </motion.p>
            <motion.div className="grid grid-cols-2 gap-6 md:px-0 lg:grid-cols-4">
  <CompactFactCard icon={School} title="3,500+" description="Universities" />
  <CompactFactCard icon={Users} title="1.1M+" description="Students" />
  <CompactFactCard icon={Award} title="Top 10" description="Global Rankings" />
  <CompactFactCard icon={GraduationCap} title="4,000+" description="Programs" />
</motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3 space-y-12">
            {/* Why Study in the USA Section */}
            <section className="mb-16">
              <div className="relative mb-8">
                <div className="absolute -left-4 -top-4 w-16 h-16 bg-gradient-to-br from-indigo-400/30 to-purple-300/30 rounded-full blur-xl"></div>
                <h2 className="text-3xl font-bold text-indigo-900 relative z-10">Why Study in the USA?</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2"></div>
              </div>
              
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                The USA is a premier destination for higher education, offering unparalleled opportunities for academic and personal growth. With its world-renowned universities, diverse cultural environment, and strong emphasis on research and innovation, the USA provides a dynamic and enriching experience for international students.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BenefitCard 
                  icon={Award}
                  title="Academic Excellence"
                  description="The USA is home to many of the world's top-ranked universities, offering advanced research facilities and innovative teaching methods."
                />
                <BenefitCard 
                  icon={Globe}
                  title="Flexible Educational System"
                  description="US universities offer a wide range of courses and programs, allowing students to explore different fields before committing to a major."
                />
                <BenefitCard 
                  icon={BookOpen}
                  title="Cultural Diversity"
                  description="The USA is a melting pot of cultures, races, and ethnicities. This diverse environment fosters acceptance and provides a rich experience."
                />
                <BenefitCard 
                  icon={Zap}
                  title="Vibrant Campus Life"
                  description="American universities are known for their vibrant campus life, with numerous student organizations, clubs, and social gatherings."
                />
                <BenefitCard 
                  icon={Star}
                  title="Career Opportunities"
                  description="Studying in the USA opens doors to a wide network of industries and employers with excellent career growth prospects."
                />
                <BenefitCard 
                  icon={Users}
                  title="Support System"
                  description="Universities in the USA offer comprehensive support services, including orientation programs, counseling, and dedicated international student advisors to help students adjust and succeed."
                />
              </div>
            </section>

            {/* Universities Section */}
            <section>
              <div className="relative mb-8">
                <h2 className="text-3xl font-bold text-indigo-900">Top US Universities</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {universities.slice(activePage * 3, activePage * 3 + 3).map((uni, idx) => (
                  <UniversityCard key={idx} {...uni} />
                ))}
              </div>
              {/* Pagination */}
              <div className="flex justify-center items-center mt-6 space-x-2">
                {Array.from({ length: Math.ceil(universities.length / 3) }, (_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setActivePage(index)}
                    className={`px-3 py-1 rounded ${activePage === index ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              {/* Schedule Consultation Button */}
              <div className="flex justify-center mt-8">
                <button 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Schedule Consultation
                </button>
              </div>
            </section>

            {/* Scholarships Section */}
            <section>
              <div className="relative mb-8">
                <h2 className="text-3xl font-bold text-indigo-900">Scholarships for Indian Students in the USA</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2"></div>
              </div>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Studying in the USA can be financially challenging, but there are numerous scholarships available to help Indian students:
              </p>
              <div className="grid grid-cols-1 gap-6">
                {scholarships.map((scholarship, idx) => (
                  <ScholarshipCard key={idx} {...scholarship} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button 
                  className="bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg"
                  onClick={() => setShowScholarshipForm(true)}
                >
                  More Information
                </button>
              </div>
            </section>

            {/* Courses Section */}
            <section>
              <div className="relative mb-8">
                <h2 className="text-3xl font-bold text-indigo-900">Courses</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, idx) => (
                  <CourseCard key={idx} {...course} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <a href="/courses" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg">
                  Explore More
                </a>
              </div>
            </section>
            
            
            {/* Admission & Visa Section */}
<section className="mt-12">
  <div className="relative mb-8">
    <h2 className="text-3xl font-bold text-indigo-900">Admission &amp; Visa</h2>
    <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2"></div>
  </div>
  <div className="border border-purple-200 rounded-lg">
    
    {/* Tab Navigation */}
    <div className="overflow-x-auto w-full">
  <div className="flex w-full">
    {["academics", "language", "finance", "visa"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveAdmissionTab(tab)}
        className={`flex-1 px-2 py-2 text-sm lg:px-4 lg:py-2 lg:text-base border-b-2 text-center font-medium transition-colors duration-300 ${
          activeAdmissionTab === tab
            ? "bg-indigo-600 text-white border-indigo-600"
            : "bg-white text-indigo-600 border-purple-200 hover:bg-indigo-50"
        }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
</div>


    {/* Tab Content */}
    <div className="p-4">
      {activeAdmissionTab === "academics" && (
        <div>
          <p className="text-gray-600">
            Here you will find detailed information about academic requirements, application procedures, and curriculum standards for US universities.
          </p>
        </div>
      )}
      {activeAdmissionTab === "language" && (
        <div>
          <p className="text-gray-600">
            Information about language proficiency tests such as TOEFL and IELTS, and guidelines on meeting language requirements for admission.
          </p>
        </div>
      )}
      {activeAdmissionTab === "finance" && (
        <div>
          <p className="text-gray-600">
            Explore financing options including scholarships, grants, and student loans available for international students.
          </p>
        </div>
      )}
      {activeAdmissionTab === "visa" && (
        <div>
          <p className="text-gray-600">
            Get step-by-step guidance on the student visa application process, including document requirements and interview tips.
          </p>
        </div>
      )}
    </div>
  </div>
</section>

          </div>

         



          {/* Right Column (Sticky Consultation Form) */}
          <div className="lg:w-1/3">
            <ConsultationForm />
          </div>
        </div>
      </div>
      
      {/* Scholarship Form Modal */}
      <ScholarshipFormModal show={showScholarshipForm} onClose={() => setShowScholarshipForm(false)} />
    </div>
  );
}