'use client';

import { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formErrors = { ...errors };

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zAZ0-9]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address.';
    } else {
      formErrors.email = '';
    }

    // Validate mobile number (10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      formErrors.mobile = 'Please enter a valid 10-digit mobile number.';
    } else {
      formErrors.mobile = '';
    }

    // Check for missing required fields
    if (!formData.country) formErrors.country = 'Please select a country.';
    else formErrors.country = '';

    if (!formData.course) formErrors.course = 'Please select a course.';
    else formErrors.course = '';

    if (!formData.educationLevel) formErrors.educationLevel = 'Please select your education level.';
    else formErrors.educationLevel = '';

    setErrors(formErrors);

    // If no errors, form is ready for submission
    if (!Object.values(formErrors).some((err) => err)) {
      alert('Form submitted successfully!');
      // Handle form submission logic here
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full md:w-[800px] max-w-[90%] md:max-w-none flex flex-col md:flex-row relative">
        {/* Left Side - Image (optional) */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src="/study-abroad-image.jpg"
            alt="Study Abroad"
            layout="fill"
            objectFit="cover"
            className="rounded-l-2xl w-full h-full hidden md:block"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full p-6 flex flex-col justify-center relative md:w-1/2">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">Start Your Journey</h2>
          <p className="text-gray-600 mb-4">Fill in your details and take the first step towards studying abroad.</p>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-sm"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-sm"
              required
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
            
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-sm"
              required
            >
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
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-sm"
              required
            >
              <option value="">Preferred Course</option>
              <option value="Business & Management">Business & Management</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Engineering">Engineering</option>
              <option value="Fashion & Beauty">Fashion & Beauty</option>
            </select>
            {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}

            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-sm"
              required
            >
              <option value="">Level of Education</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
            </select>
            {errors.educationLevel && <p className="text-red-500 text-sm">{errors.educationLevel}</p>}

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;







