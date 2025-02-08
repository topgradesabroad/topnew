'use client';
import React, { useState } from 'react';

type UniversityData = {
  [key: string]: {
    'Ivy League'?: string[];
    'A+ Universities'?: string[];
  } | string[];
};

const IvyLeagueForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const universities: UniversityData = {
    'USA': {
      'Ivy League': [
        'Harvard University',
        'Yale University',
        'Princeton University',
        'Columbia University',
        'University of Pennsylvania',
        'Dartmouth College',
        'Brown University',
        'Cornell University'
      ],
      'A+ Universities': [
        'Massachusetts Institute of Technology (MIT)',
        'Stanford University',
        'California Institute of Technology (Caltech)',
        'University of Chicago',
        'Johns Hopkins University',
        'Northwestern University',
        'Duke University',
        'University of California, Berkeley',
        'University of California, Los Angeles'
      ]
    },
    'UK': [
      'University of Oxford',
      'University of Cambridge',
      'London School of Economics and Political Science',
      'Imperial College London'
    ],
    'Canada': [
      'University of Toronto',
      'McGill University',
      'University of British Columbia'
    ],
    'Europe': [
      'ETH Zurich',
      'HEC Paris',
      'Bocconi University',
      'Technical University of Munich'
    ],
    'Asia & Australia': [
      'National University of Singapore',
      'Tsinghua University',
      'University of Melbourne'
    ]
  };

  const handleUniversitySelection = (university: string) => {
    const maxSelection = selectedCategory === 'Ivy League' ? 3 : 5;
    
    if (selectedUniversities.includes(university)) {
      setSelectedUniversities(selectedUniversities.filter(u => u !== university));
    } else if (selectedUniversities.length < maxSelection) {
      setSelectedUniversities([...selectedUniversities, university]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...formData, selectedCountry, selectedCategory, selectedUniversities });
  };

  const getUniversityList = () => {
    if (selectedCountry === 'USA') {
      return selectedCategory ? (universities[selectedCountry] as any)[selectedCategory] : [];
    }
    return universities[selectedCountry] as string[] || [];
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Are you looking for assistance with your Ivy League & Other A+ Universities?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for one-to-one personalized consultation to help you achieve your academic goals at world-leading institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Region
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    setSelectedCategory('');
                    setSelectedUniversities([]);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Choose your target region</option>
                  {Object.keys(universities).map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              {selectedCountry === 'USA' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setSelectedUniversities([]);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select university category</option>
                    <option value="Ivy League">Ivy League Universities</option>
                    <option value="A+ Universities">A+ Universities</option>
                  </select>
                </div>
              )}

              {((selectedCountry === 'USA' && selectedCategory) || (selectedCountry && selectedCountry !== 'USA')) && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Universities 
                    {selectedCategory === 'Ivy League' ? ' (Max 3)' : ' (Max 5)'}
                  </label>
                  <div className="mt-2 space-y-2">
                    {getUniversityList().map((university: string) => (
                      <div key={university} className="flex items-center">
                        <input
                          type="checkbox"
                          id={university}
                          checked={selectedUniversities.includes(university)}
                          onChange={() => handleUniversitySelection(university)}
                          className="mr-2"
                        />
                        <label htmlFor={university} className="text-sm">
                          {university}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Request Consultation
              </button>
            </form>
          </div>

          <div className="relative h-full">
            <div className="sticky top-6 space-y-6">
              <img
                src="/university.jpg"
                alt="University campus"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IvyLeagueForm;
