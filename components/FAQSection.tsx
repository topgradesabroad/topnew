'use client';
import { useState } from 'react';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<'general' | 'ivy'>('general');

  const faqData = {
    general: [
      {
        id: 'g1',
        question: "When should I start preparing for college applications?",
        answer: "Begin researching colleges during your sophomore year..."
      },
      {
        id: 'g2',
        question: "What's the difference between Early Action and Early Decision?",
        answer: "Early Decision is binding while Early Action is non-binding..."
      },
      {
        id: 'g3',
        question: "How many colleges should I apply to?",
        answer: "We recommend 8-12 schools with a mix of safety, target, and reach schools..."
      },
      {
        id: 'g4',
        question: "What are the key components of a strong application?",
        answer: "Strong academics, meaningful extracurriculars, compelling essays, and solid recommendations..."
      },
      {
        id: 'g5',
        question: "How important are standardized test scores?",
        answer: "Many schools are test-optional, but strong scores can enhance your application..."
      }
    ],
    ivy: [
      {
        id: 'i1',
        question: "What GPA is competitive for Ivy League schools?",
        answer: "Most admitted students have an unweighted GPA of 3.9 or higher..."
      },
      {
        id: 'i2',
        question: "What type of extracurriculars do Ivy Leagues prefer?",
        answer: "Depth over breadth - sustained commitment and leadership in 1-2 areas..."
      },
      {
        id: 'i3',
        question: "How important are Ivy League alumni interviews?",
        answer: "They provide additional context but aren't typically decisive..."
      },
      {
        id: 'i4',
        question: "What makes Ivy League essays different?",
        answer: "They require exceptional storytelling and personal insight..."
      },
      {
        id: 'i5',
        question: "How does Ivy League financial aid work?",
        answer: "Most Ivies offer need-blind admission and generous financial packages..."
      }
    ]
  };

  // Split questions into two columns
  const currentQuestions = faqData[activeCategory];
  const leftColumn = currentQuestions.slice(0, Math.ceil(currentQuestions.length/2));
  const rightColumn = currentQuestions.slice(Math.ceil(currentQuestions.length/2));

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Got Any Question?
            <p className="text-base font-normal text-gray-600 mb-6">
              Well, we got answers for you
            </p>
          </h1>
         
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveCategory('general')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeCategory === 'general'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              General Questions
            </button>
            <button
              onClick={() => setActiveCategory('ivy')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeCategory === 'ivy'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Ivy League
            </button>
          </div>
        </div>

        {/* FAQ Columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Consultation Section */}
        <div className="mt-16 text-center pt-12">
          <div className="max-w-2xl bg-blue-600 rounded-lg shadow-xl p-5 mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Need Personalized Guidance?
            </h3>
            <p className="text-white mb-6">
              Schedule a free consultation with our admissions experts
            </p>
            <button className="bg-white text-blue-600 font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 text-left flex justify-between items-center"
      >
        <h3 className="text-base font-medium text-gray-800">
          {item.question}
        </h3>
        <span className={`ml-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-4 pt-0 text-gray-600 text-sm">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default FAQSection;