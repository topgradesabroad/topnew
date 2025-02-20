'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    country: '',
    course: '',
    educationLevel: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    mobile: '',
    country: '',
    course: '',
    educationLevel: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Add scroll lock when popup is open
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Mobile validation
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit number';
      isValid = false;
    }

    // Required fields validation
    if (!formData.country) {
      newErrors.country = 'Please select a country';
      isValid = false;
    }
    if (!formData.course) {
      newErrors.course = 'Please select a course';
      isValid = false;
    }
    if (!formData.educationLevel) {
      newErrors.educationLevel = 'Please select education level';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus({
          type: 'success',
          message: 'Submitted successfully! We will contact you shortly.'
        });
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          country: '',
          course: '',
          educationLevel: ''
        });
      } else {
        setSubmissionStatus({
          type: 'error',
          message: result.error || 'Submission failed. Please try again.'
        });
      }
    } catch (error) {
      setSubmissionStatus({
        type: 'error',
        message: 'Network error. Please check your connection.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50"> {/* Adjusted top padding */}
      <div className="bg-white rounded-2xl shadow-xl w-full md:w-[800px] max-w-[95%] flex flex-col md:flex-row relative mx-4 my-8">
        {/* Close Button */}
        <button
          className="absolute -top-8 right-0 text-white hover:text-gray-200 text-2xl md:right-2 md:top-2 md:text-gray-600"
          onClick={onClose}
          aria-label="Close form"
        >
          ✕
        </button>

        {/* Image Section */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src="/study-abroad-image.jpg"
            alt="Study Abroad"
            fill
            className="rounded-l-2xl object-cover"
            priority
          />
        </div>

        {/* Form Section */}
        <div className="w-full p-6 md:p-8 md:w-1/2">
          {submissionStatus.type ? (
            <div className="text-center space-y-4">
              <h2 className={`text-2xl font-bold ${submissionStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {submissionStatus.type === 'success' ? '✓ Success!' : '⚠ Error'}
              </h2>
              <p className="text-gray-600">{submissionStatus.message}</p>
              <button
                onClick={onClose}
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Start Your Journey</h2>
              <p className="text-gray-600 mb-4">Fill in your details to begin your study abroad adventure</p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Form Fields */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md ${errors.mobile ? 'border-red-500' : ''}`}
                  />
                  {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                </div>

                <div>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md ${errors.country ? 'border-red-500' : ''}`}
                  >
                    
                    {/* Country options */}
                    <option value="">Preferred Country</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Ireland">Ireland</option>
                  </select>
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                </div>

                <div>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md ${errors.course ? 'border-red-500' : ''}`}
                  >
                    
                    {/* Course options */}
                    <option value="">Preferred Course</option>
                    <option value="Business & Management">Business & Management</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Fashion & Beauty">Fashion & Beauty</option>
                  </select>
                  {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                </div>

                <div>
                  <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md ${errors.educationLevel ? 'border-red-500' : ''}`}
                  >
                    
                    {/* Education options */}
                    <option value="">Level of Education</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Postgraduate">Postgraduate</option>
                  </select>
                  {errors.educationLevel && <p className="text-red-500 text-sm mt-1">{errors.educationLevel}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-2.5 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;