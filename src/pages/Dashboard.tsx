
import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { 
  PlusCircle, 
  FileText, 
  Settings, 
  UploadCloud, 
  Clock, 
  CreditCard, 
  LogOut,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for user papers
const userPapers = [
  {
    id: '101',
    title: 'Machine Learning Approaches to Climate Prediction',
    status: 'published',
    date: '2023-08-15',
    views: 234,
    downloads: 45
  },
  {
    id: '102',
    title: 'Novel Encryption Methods for Cloud-Based Applications',
    status: 'under-review',
    date: '2024-04-03',
    views: 0,
    downloads: 0
  },
  {
    id: '103',
    title: 'Ethical Considerations in Artificial Intelligence Development',
    status: 'draft',
    date: '2024-05-10',
    views: 0,
    downloads: 0
  }
];

// Mock data for saved/favorite papers
const savedPapers = [
  {
    id: '201',
    title: 'Quantum Computing: State of the Art and Future Directions',
    authors: ['A. Quantum', 'B. Computing'],
    conference: 'VSIT 2023',
    saved: '2024-01-15'
  },
  {
    id: '202',
    title: 'Blockchain Applications in Supply Chain Management',
    authors: ['C. Block', 'D. Chain'],
    conference: 'VCMT 2022',
    saved: '2023-11-22'
  }
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'papers' | 'saved' | 'account'>('papers');
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'under-review':
        return 'bg-yellow-100 text-yellow-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'published':
        return 'Published';
      case 'under-review':
        return 'Under Review';
      case 'draft':
        return 'Draft';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      <div className="bg-gray-100 flex-grow py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-64">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 bg-research rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    JS
                  </div>
                  <h2 className="font-serif font-bold text-lg">John Smith</h2>
                  <p className="text-sm text-gray-600">john@example.com</p>
                  <div className="mt-2 px-3 py-1 bg-research/10 rounded-full text-research text-xs font-medium">
                    Premium Member
                  </div>
                </div>
                
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('papers')}
                    className={`w-full flex items-center px-4 py-2.5 rounded-md ${activeTab === 'papers' ? 'bg-research text-white' : 'hover:bg-gray-100'}`}
                  >
                    <FileText className="w-5 h-5 mr-3" />
                    <span>My Papers</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('saved')}
                    className={`w-full flex items-center px-4 py-2.5 rounded-md ${activeTab === 'saved' ? 'bg-research text-white' : 'hover:bg-gray-100'}`}
                  >
                    <Star className="w-5 h-5 mr-3" />
                    <span>Saved Papers</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('account')}
                    className={`w-full flex items-center px-4 py-2.5 rounded-md ${activeTab === 'account' ? 'bg-research text-white' : 'hover:bg-gray-100'}`}
                  >
                    <Settings className="w-5 h-5 mr-3" />
                    <span>Account Settings</span>
                  </button>
                  
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <Link to="/logout" className="w-full flex items-center px-4 py-2.5 rounded-md text-gray-700 hover:bg-gray-100">
                      <LogOut className="w-5 h-5 mr-3" />
                      <span>Sign Out</span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {activeTab === 'papers' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-serif font-bold">My Research Papers</h1>
                    <Link to="/upload" className="btn-primary flex items-center">
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Upload Paper
                    </Link>
                  </div>
                  
                  {userPapers.length > 0 ? (
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead>
                            <tr className="bg-gray-50 text-left">
                              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Stats</th>
                              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {userPapers.map((paper) => (
                              <tr key={paper.id}>
                                <td className="px-6 py-4">
                                  <div className="font-medium">{paper.title}</div>
                                </td>
                                <td className="px-6 py-4">
                                  <span className={`inline-flex px-2 py-1 text-xs rounded-full ${getStatusColor(paper.status)}`}>
                                    {getStatusText(paper.status)}
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                  {new Date(paper.date).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-sm">
                                  {paper.status === 'published' ? (
                                    <div>
                                      <span className="text-gray-600">{paper.views} views</span>
                                      <span className="mx-2">•</span>
                                      <span className="text-gray-600">{paper.downloads} downloads</span>
                                    </div>
                                  ) : (
                                    <span className="text-gray-500">—</span>
                                  )}
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex space-x-2">
                                    <Link to={`/paper/${paper.id}`} className="text-research hover:text-research-dark">View</Link>
                                    <Link to={`/paper/${paper.id}/edit`} className="text-gray-600 hover:text-gray-900">Edit</Link>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg shadow-sm p-10 text-center">
                      <div className="w-16 h-16 rounded-full bg-research/10 flex items-center justify-center mx-auto mb-4">
                        <UploadCloud className="w-8 h-8 text-research" />
                      </div>
                      <h3 className="text-xl font-serif font-medium mb-2">No papers yet</h3>
                      <p className="text-gray-600 mb-4">Upload your first research paper to get started</p>
                      <Link to="/upload" className="btn-primary">
                        Upload Paper
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'saved' && (
                <div>
                  <h1 className="text-2xl font-serif font-bold mb-6">Saved Papers</h1>
                  
                  {savedPapers.length > 0 ? (
                    <div className="grid gap-4">
                      {savedPapers.map((paper) => (
                        <div key={paper.id} className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
                          <div>
                            <h3 className="font-medium mb-1">{paper.title}</h3>
                            <p className="text-sm text-gray-600">
                              {paper.authors.join(', ')} • {paper.conference}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Saved on {new Date(paper.saved).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Link to={`/research/${paper.id}`} className="btn-outline text-sm py-1">View</Link>
                            <button className="text-gray-500 hover:text-research">
                              <Star className="w-5 h-5 fill-current" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg shadow-sm p-10 text-center">
                      <div className="w-16 h-16 rounded-full bg-research/10 flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-research" />
                      </div>
                      <h3 className="text-xl font-serif font-medium mb-2">No saved papers</h3>
                      <p className="text-gray-600 mb-4">Browse the research section and save papers for later</p>
                      <Link to="/research" className="btn-primary">
                        Browse Research
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'account' && (
                <div>
                  <h1 className="text-2xl font-serif font-bold mb-6">Account Settings</h1>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-lg font-serif font-semibold mb-4">Personal Information</h2>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research/50"
                          defaultValue="John Smith"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research/50"
                          defaultValue="john@example.com"
                          readOnly
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research/50"
                          defaultValue="University of Research"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research/50">
                          <option>Professor</option>
                          <option>Researcher</option>
                          <option>Student</option>
                          <option>Industry Professional</option>
                        </select>
                      </div>
                    </div>
                    
                    <button className="mt-6 btn-primary">Save Changes</button>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-serif font-semibold">Subscription</h2>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </div>
                    
                    <div className="border border-gray-200 rounded-md p-4 mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Premium Plan</span>
                        <span className="font-medium">$9.99 / month</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Renews on June 15, 2024</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <button className="btn-outline flex items-center">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Update Payment Method
                      </button>
                      
                      <button className="text-gray-600 hover:text-research underline">
                        Cancel Subscription
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-serif font-semibold mb-4">Security</h2>
                    
                    <button className="btn-outline">
                      Change Password
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
