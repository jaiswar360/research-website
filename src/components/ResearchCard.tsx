
import React from 'react';
import { File, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResearchCardProps {
  id: string;
  title: string;
  authors: string[];
  conference: string;
  year: string;
  abstract: string;
  isPremium?: boolean;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  id,
  title,
  authors,
  conference,
  year,
  abstract,
  isPremium = false
}) => {
  return (
    <div className="card hover:shadow-md transition-shadow">
      {isPremium && (
        <div className="mb-4 inline-block bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full uppercase font-medium">
          Premium Content
        </div>
      )}
      <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-y-2 mb-4 text-sm text-gray-600">
        <div className="flex items-center mr-4">
          <Users className="w-4 h-4 mr-1" />
          <span>{authors.join(', ')}</span>
        </div>
        <div className="flex items-center mr-4">
          <File className="w-4 h-4 mr-1" />
          <span>{conference}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{year}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-3">{abstract}</p>
      <div className="flex items-center justify-between">
        <Link 
          to={`/research/${id}`}
          className="btn-outline"
        >
          View Details
        </Link>
        
        {isPremium ? (
          <Link to="/pricing" className="text-sm text-research hover:underline">
            Subscribe to access
          </Link>
        ) : (
          <Link to={`/research/${id}/view`} className="btn-primary">
            Read Paper
          </Link>
        )}
      </div>
    </div>
  );
};

export default ResearchCard;
