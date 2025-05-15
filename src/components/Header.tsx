
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X, User } from 'lucide-react';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-research flex items-center justify-center text-white font-serif font-bold text-2xl">
            R
          </div>
          <span className="font-serif font-bold text-xl">ResearchHub</span>
        </Link>

        {isMobile ? (
          <>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-gray-600 hover:text-research"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-4 animate-fade-in">
                <div className="container-custom flex flex-col space-y-4">
                  <Link to="/login" className="flex items-center space-x-2 text-research">
                    <User size={18} />
                    <span>Login / Register</span>
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <Link 
              to="/login" 
              className="flex items-center space-x-2 px-4 py-2 border border-research rounded-md text-research hover:bg-research/10 transition-colors"
            >
              <User size={18} />
              <span>Login</span>
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 bg-research text-white rounded-md hover:bg-research/90 transition-colors"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
