
import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import ResearchCard from '@/components/ResearchCard';
import { SlidersHorizontal, Search, ChevronDown } from 'lucide-react';

// Mock data for research papers
const researchPapers = [
  {
    id: '1',
    title: 'Advances in Neural Network Applications for Image Recognition',
    authors: ['J. Smith', 'A. Johnson'],
    conference: 'VCMT 2023',
    year: '2023',
    abstract: 'This paper explores recent advances in neural network architectures for image recognition tasks, with a focus on performance optimization for mobile devices.'
  },
  {
    id: '2',
    title: 'A Comparative Study of Quantum Algorithms for Optimization Problems',
    authors: ['R. Patel', 'M. Wong', 'T. Garcia'],
    conference: 'VSIT 2022',
    year: '2022',
    abstract: 'We present a comprehensive comparison of quantum algorithms for solving complex optimization problems, highlighting performance differences and practical applications.',
    isPremium: true
  },
  {
    id: '3',
    title: 'Sustainable Energy Distribution Networks: A New Approach',
    authors: ['L. Chen', 'D. Miller'],
    conference: 'VISMIT 2024',
    year: '2024',
    abstract: 'This research introduces a novel framework for designing sustainable energy distribution networks that maximize efficiency while minimizing environmental impact.'
  },
  {
    id: '4',
    title: 'Blockchain Technology in Healthcare Data Management',
    authors: ['S. Kumar', 'J. Lee'],
    conference: 'VCMT 2021',
    year: '2021',
    abstract: 'A detailed analysis of how blockchain technology can be leveraged to improve healthcare data management, with a focus on security and privacy considerations.'
  },
  {
    id: '5',
    title: 'Machine Learning for Climate Prediction: Challenges and Solutions',
    authors: ['M. Wilson', 'K. Thompson'],
    conference: 'VSIT 2023',
    year: '2023',
    abstract: 'This paper addresses the challenges in using machine learning for climate prediction and proposes novel approaches to improve accuracy and reliability.',
    isPremium: true
  },
  {
    id: '6',
    title: 'Advancements in Natural Language Processing for Low-Resource Languages',
    authors: ['A. Patel', 'N. Rodriguez'],
    conference: 'VISMIT 2022',
    year: '2022',
    abstract: 'This study examines the current state of natural language processing for languages with limited resources and proposes techniques to improve performance.'
  },
];

// Filter options
const years = ['All Years', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014'];
const conferences = ['All Conferences', 'VCMT', 'VISMIT', 'VSIT'];
const categories = ['All Categories', 'Computer Science', 'Engineering', 'Physics', 'Mathematics', 'Biology', 'Chemistry', 'Economics'];
const accessTypes = ['All Papers', 'Free Access', 'Premium Only'];

const Research: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedConference, setSelectedConference] = useState('All Conferences');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedAccess, setSelectedAccess] = useState('All Papers');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter papers based on selections
  const filteredPapers = researchPapers.filter(paper => {
    const matchesYear = selectedYear === 'All Years' || paper.year === selectedYear;
    const matchesConference = selectedConference === 'All Conferences' || paper.conference.includes(selectedConference);
    const matchesAccess = selectedAccess === 'All Papers' || 
      (selectedAccess === 'Free Access' && !paper.isPremium) || 
      (selectedAccess === 'Premium Only' && paper.isPremium);
    
    // Simple search implementation
    const matchesSearch = searchQuery.trim() === '' || 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesYear && matchesConference && matchesAccess && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      <div className="bg-gray-50 flex-grow py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-serif font-bold mb-2">Research Papers</h1>
              <p className="text-gray-600">Browse and discover academic research papers from top conferences</p>
            </div>
            
            <div className="mt-4 md:mt-0 w-full md:w-auto">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search papers..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
          </div>
          
          {/* Filters section */}
          <div className="mb-8">
            <button 
              className="flex items-center text-sm font-medium text-research mb-4"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
              <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {showFilters && (
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6 animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research/50"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                    >
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Conference
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research/50"
                      value={selectedConference}
                      onChange={(e) => setSelectedConference(e.target.value)}
                    >
                      {conferences.map(conf => (
                        <option key={conf} value={conf}>{conf}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research/50"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Access Type
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research/50"
                      value={selectedAccess}
                      onChange={(e) => setSelectedAccess(e.target.value)}
                    >
                      {accessTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    className="text-sm text-gray-600 hover:text-research mr-4"
                    onClick={() => {
                      setSelectedYear('All Years');
                      setSelectedConference('All Conferences');
                      setSelectedCategory('All Categories');
                      setSelectedAccess('All Papers');
                      setSearchQuery('');
                    }}
                  >
                    Reset Filters
                  </button>
                  
                  <button className="btn-primary text-sm">
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">{filteredPapers.length}</span> results
              {selectedYear !== 'All Years' && ` for ${selectedYear}`}
              {selectedConference !== 'All Conferences' && ` in ${selectedConference}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
          
          {/* Research papers grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPapers.map(paper => (
              <ResearchCard key={paper.id} {...paper} />
            ))}
          </div>
          
          {filteredPapers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-serif font-medium mb-2">No papers found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search query</p>
              <button 
                className="btn-outline"
                onClick={() => {
                  setSelectedYear('All Years');
                  setSelectedConference('All Conferences');
                  setSelectedCategory('All Categories');
                  setSelectedAccess('All Papers');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;
