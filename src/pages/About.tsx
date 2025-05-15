
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Award, BookOpen, Globe, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-research-light py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              About ResearchHub
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              We're on a mission to make high-quality academic research accessible to everyone.
              Our platform connects researchers, students, and professionals with groundbreaking papers
              from leading conferences and publications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/research" className="btn-primary">
                Browse Research
              </Link>
              <Link to="/register" className="btn-outline">
                Join ResearchHub
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              At ResearchHub, we believe that knowledge should be accessible to all. 
              Our platform is designed to break down barriers in academic publishing, 
              making it easier for researchers to share their work and for readers to 
              discover groundbreaking ideas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-research/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-research" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Global Access</h3>
                <p className="text-gray-600">
                  Making research papers accessible worldwide, bridging geographical barriers.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-research/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-research" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Knowledge Sharing</h3>
                <p className="text-gray-600">
                  Facilitating the exchange of ideas and findings across disciplines.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-research/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-research" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Ensuring all papers meet rigorous academic and ethical standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                ResearchHub was founded in 2014 by a group of academics who experienced firsthand the challenges
                of accessing and sharing research papers. Frustrated by paywalls, complex submission processes, 
                and limited visibility, they set out to create a more open and accessible platform.
              </p>
              <p className="text-gray-700 mb-4">
                Starting with just a handful of papers from the VCMT conference, ResearchHub has grown 
                into a comprehensive database featuring thousands of papers across multiple disciplines
                and conferences.
              </p>
              <p className="text-gray-700">
                Today, our platform serves researchers, students, and professionals worldwide,
                helping to democratize access to academic knowledge and foster innovation.
              </p>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <div className="mr-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center">
                  <span className="font-bold text-research">2014</span>
                </div>
                <div>
                  <h4 className="font-medium">Founded</h4>
                  <p className="text-sm text-gray-600">Platform launch</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <div className="mr-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center">
                  <span className="font-bold text-research">10K+</span>
                </div>
                <div>
                  <h4 className="font-medium">Papers</h4>
                  <p className="text-sm text-gray-600">And growing daily</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <div className="mr-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center">
                  <span className="font-bold text-research">50+</span>
                </div>
                <div>
                  <h4 className="font-medium">Countries</h4>
                  <p className="text-sm text-gray-600">Global reach</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <div className="mr-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center">
                  <span className="font-bold text-research">5K+</span>
                </div>
                <div>
                  <h4 className="font-medium">Researchers</h4>
                  <p className="text-sm text-gray-600">Active community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">Our Team</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Meet the dedicated professionals working to make ResearchHub the premier platform for academic research sharing.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-4xl font-serif font-bold text-gray-400">
                DR
              </div>
              <h3 className="font-serif font-semibold text-xl">Dr. David Robinson</h3>
              <p className="text-research font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600">
                Ph.D. in Computer Science with over 15 years of experience in academic publishing and technology.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-4xl font-serif font-bold text-gray-400">
                SP
              </div>
              <h3 className="font-serif font-semibold text-xl">Dr. Sarah Patel</h3>
              <p className="text-research font-medium mb-2">Chief Research Officer</p>
              <p className="text-gray-600">
                Research scientist specializing in information retrieval and content curation systems.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-4xl font-serif font-bold text-gray-400">
                ML
              </div>
              <h3 className="font-serif font-semibold text-xl">Michael Lee</h3>
              <p className="text-research font-medium mb-2">Head of Technology</p>
              <p className="text-gray-600">
                Technology leader with expertise in building scalable platforms for content management and distribution.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Conferences & Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">Our Conferences & Partners</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            We collaborate with leading conferences and academic institutions to bring you the highest quality research papers.
          </p>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif font-semibold text-xl mb-4">VCMT</h3>
                <p className="text-gray-600 mb-4">
                  Virtual Conference on Modern Technologies, featuring cutting-edge research in computer science and engineering.
                </p>
                <Link to="/conference/vcmt" className="text-research hover:underline">
                  Learn more about VCMT
                </Link>
              </div>
              
              <div>
                <h3 className="font-serif font-semibold text-xl mb-4">VISMIT</h3>
                <p className="text-gray-600 mb-4">
                  Virtual International Symposium on Modern Information Technologies, focusing on data science and AI applications.
                </p>
                <Link to="/conference/vismit" className="text-research hover:underline">
                  Learn more about VISMIT
                </Link>
              </div>
              
              <div>
                <h3 className="font-serif font-semibold text-xl mb-4">VSIT</h3>
                <p className="text-gray-600 mb-4">
                  Virtual Symposium on Information Technology, covering emerging trends and technologies in IT sector.
                </p>
                <Link to="/conference/vsit" className="text-research hover:underline">
                  Learn more about VSIT
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="font-serif font-semibold text-xl mb-6">Academic Partners</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                <div className="text-xl font-serif font-bold text-gray-700">University of Technology</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                <div className="text-xl font-serif font-bold text-gray-700">Research Institute of Sciences</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                <div className="text-xl font-serif font-bold text-gray-700">Global Academic Foundation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-16 bg-research-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Join ResearchHub Today</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you're looking to access cutting-edge research or share your own papers with the world,
            ResearchHub provides the platform you need.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/register" className="btn-primary">
              Create an Account
            </Link>
            <Link to="/pricing" className="btn-outline">
              View Pricing
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

export default About;
