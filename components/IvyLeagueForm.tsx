"use client";
import { useState, useEffect } from 'react';

const universities = {
  ivy: [
    "Harvard University",
    "Yale University",
    "Princeton University",
    "Columbia University",
    "University of Pennsylvania (UPenn)",
    "Dartmouth College",
    "Brown University",
    "Cornell University"
  ],
  aplus: {
    "USA": [
      "MIT", "Stanford", "Caltech", "University of Chicago", 
      "Johns Hopkins", "Northwestern", "Duke", "UC Berkeley", "UCLA"
    ],
    "UK": [
      "University of Oxford", "University of Cambridge", 
      "LSE", "Imperial College London"
    ],
    "Canada": [
      "University of Toronto", "McGill University", "UBC"
    ],
    "Europe": [
      "ETH Zurich", "HEC Paris", 
      "Bocconi University", "Technical University of Munich"
    ],
    "Asia & Australia": [
      "National University of Singapore", 
      "Tsinghua University", 
      "University of Melbourne"
    ]
  }
};

const otherCountries = [
  "USA", "UK", "Canada", "Australia",
  "New Zealand", "Germany", "France",
  "Ireland", "Dubai", "Singapore",
  "Spain", "Hungary", "Italy"
];

export default function IvyLeagueForm() {
  const [country, setCountry] = useState('');
  const [universityType, setUniversityType] = useState('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([]);

  useEffect(() => {
    if (country !== 'USA') setUniversityType('');
    setSelectedUniversities([]);
    setSelectedCountries([]);
  }, [country]);

  const handleUniversitySelect = (uni: string) => {
    setSelectedUniversities(prev => 
      prev.includes(uni) ? prev.filter(u => u !== uni) : [...prev, uni]
    );
  };

  const handleCountrySelect = (countryName: string) => {
    setSelectedCountries(prev => 
      prev.includes(countryName) 
        ? prev.filter(c => c !== countryName) 
        : [...prev, countryName]
    );
  };

  // Get universities based on current selection
  const getUniversities = () => {
    if (country === 'USA') {
      return universityType === 'ivy' 
        ? universities.ivy 
        : universities.aplus.USA;
    }
    return universities.aplus[country as keyof typeof universities.aplus] || [];
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Guidance for <span className="text-blue-600">Ivy League</span> & 
            <span className="text-indigo-600"> Global Universities</span>
          </h2>
          <p className="text-lg md:text-md text-purple-600 mx-auto leading-tight">
            Get in touch with us for one-to-one personalized consultation to help you achieve your academic goals at world-leading institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Form Section */}
          <div className="bg-yellow-50 rounded-xl p-6 shadow-lg h-full">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Target Country
                </label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Choose Country</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Europe</option>
                  <option>Asia & Australia</option>
                  <option value="other">I am good with other global universities</option>
                </select>
              </div>

              {country === 'other' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Countries of Interest
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {otherCountries.map((countryName) => (
                      <button
                        type="button"
                        key={countryName}
                        onClick={() => handleCountrySelect(countryName)}
                        className={`p-2 text-sm rounded-lg border ${
                          selectedCountries.includes(countryName)
                            ? 'bg-blue-100 border-blue-500'
                            : 'hover:bg-gray-50 border-gray-200'
                        }`}
                      >
                        {countryName}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {country === 'USA' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        University Category
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                        value={universityType}
                        onChange={(e) => setUniversityType(e.target.value)}
                      >
                        <option value="">Select Category</option>
                        <option value="ivy">Ivy League Universities</option>
                        <option value="aplus">Other A+ Universities</option>
                      </select>
                    </div>
                  )}

                  {/* Updated university display logic */}
                  {(country && (country === 'USA' ? universityType : true)) && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Universities
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {getUniversities()?.map((uni) => (
                          <button
                            type="button"
                            key={uni}
                            onClick={() => handleUniversitySelect(uni)}
                            className={`p-2 text-sm rounded-lg border ${
                              selectedUniversities.includes(uni)
                                ? 'bg-blue-100 border-blue-500'
                                : 'hover:bg-gray-50 border-gray-200'
                            }`}
                          >
                            {uni}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500
                    shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-600/20
                    transform hover:-translate-y-0.5 transition-all duration-200 text-white py-3 px-6 rounded-lg font-Medium"
                >
                  Get Personalized Roadmap
                </button>
              </div>
            </form>
          </div>

          {/* University Image Section */}
          <div className="relative h-full rounded-xl overflow-hidden shadow-lg">
            <img
              src="/university.jpg"
              alt="Global Universities"
              className="w-full h-full object-cover absolute inset-0"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 p-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {['Oxford', 'Toronto', 'ETH Zurich', 'NUS', 'Sorbonne', 'Munich'].map((uni) => (
                  <span
                    key={uni}
                    className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800"
                  >
                    {uni}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow">
              <p className="text-sm font-semibold text-gray-800">
                <span className="text-blue-600">900+</span> Universities
                <span className="block text-xs font-normal text-gray-600">Across 12+ Countries</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}