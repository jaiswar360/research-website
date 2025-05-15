
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import ResearchCard from '@/components/ResearchCard';
import { Search, FileText, FileCheck, Award } from 'lucide-react';

// Mock data for featured papers
const featuredPapers = [
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
  }
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Access and Share World-Class Research Papers</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Discover thousands of academic papers across various disciplines, conferences, and publications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="btn-primary">
                Create Account
              </Link>
              <Link to="/research" className="btn-outline">
                Browse Research
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center relative">
              <input 
                type="text"
                placeholder="Search for research papers, authors, or topics..."
                className="w-full py-3 px-12 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-research/30 focus:border-research"
              />
              <Search className="absolute left-4 text-gray-400" />
              <button 
                className="absolute right-2 btn-primary rounded-full px-5"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Why Choose ResearchHub</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-research/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-research" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Extensive Collection</h3>
              <p className="text-gray-600">
                Access thousands of research papers from top conferences and journals across multiple disciplines.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-research/10 rounded-full flex items-center justify-center mb-4">
                <FileCheck className="w-8 h-8 text-research" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                All papers undergo rigorous peer review to ensure high quality and academic integrity.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-research/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-research" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Premium Content</h3>
              <p className="text-gray-600">
                Subscribe to access exclusive research papers, conference proceedings, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Papers */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold mb-2">Featured Papers</h2>
          <p className="text-gray-600 mb-8">Latest research from leading conferences and publications</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPapers.map(paper => (
              <ResearchCard key={paper.id} {...paper} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/research" className="btn-primary">
              View All Papers
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-research-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Access Premium Research?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Upgrade your account to unlock thousands of premium research papers and conference proceedings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/pricing" className="btn-primary">
              View Pricing
            </Link>
            <Link to="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif font-bold text-xl mb-4">ResearchHub</h3>
              <p className="text-gray-400">
                Your trusted platform for academic research papers and publications.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link to="/research" className="text-gray-400 hover:text-white">Research</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} ResearchHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
