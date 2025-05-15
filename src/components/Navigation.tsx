
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  path?: string;
  dropdown?: {
    label: string;
    path: string;
  }[];
}

const mainNavItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Research', path: '/research' },
];

const secondaryNavItems: NavItem[] = [
  { 
    label: 'Years',
    dropdown: [
      { label: '2014', path: '/years/2014' },
      { label: '2015', path: '/years/2015' },
      { label: '2016', path: '/years/2016' },
      { label: '2017', path: '/years/2017' },
      { label: '2018', path: '/years/2018' },
      { label: '2019', path: '/years/2019' },
      { label: '2020', path: '/years/2020' },
      { label: '2021', path: '/years/2021' },
      { label: '2022', path: '/years/2022' },
      { label: '2023', path: '/years/2023' },
      { label: '2024', path: '/years/2024' },
      { label: '2025', path: '/years/2025' },
    ]
  },
  { 
    label: 'Conference',
    dropdown: [
      { label: 'VCMT', path: '/conference/vcmt' },
      { label: 'VISMIT', path: '/conference/vismit' },
      { label: 'VSIT', path: '/conference/vsit' },
    ]
  },
  { 
    label: 'Publication',
    dropdown: [
      { label: 'Conference', path: '/publication/conference' },
      { label: 'About Conference', path: '/publication/about-conference' },
      { label: 'Conference Theme', path: '/publication/conference-theme' },
    ]
  },
  { 
    label: 'IPR',
    dropdown: [
      { label: 'Copyright', path: '/ipr/copyright' },
      { label: 'Patent', path: '/ipr/patent' },
      { label: 'Research Papers', path: '/ipr/research-papers' },
      { label: 'Trademark', path: '/ipr/trademark' },
      { label: 'Book Publication', path: '/ipr/book-publication' },
    ]
  },
];

const Navigation: React.FC = () => {
  const isMobile = useIsMobile();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const NavDropdown: React.FC<{ item: NavItem }> = ({ item }) => {
    const isOpen = openDropdown === item.label;
    
    return (
      <div className="relative">
        <button 
          onClick={() => toggleDropdown(item.label)}
          className={`nav-item flex items-center ${isOpen ? 'nav-item-active' : ''}`}
        >
          {item.label}
          <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="dropdown-menu animate-fade-in">
            {item.dropdown?.map((dropItem) => (
              <Link 
                key={dropItem.path}
                to={dropItem.path}
                className="dropdown-item"
                onClick={() => setOpenDropdown(null)}
              >
                {dropItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container-custom">
        {/* Main Navigation */}
        <div className="flex items-center justify-between h-14">
          <div className="flex space-x-4">
            {mainNavItems.map((item) => (
              <Link 
                key={item.label}
                to={item.path || '#'} 
                className="nav-item"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Secondary Navigation */}
        {!isMobile && (
          <div className="flex space-x-4 h-12">
            {secondaryNavItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.dropdown ? (
                  <NavDropdown item={item} />
                ) : (
                  <Link 
                    to={item.path || '#'} 
                    className="nav-item"
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Mobile Secondary Navigation Dropdown */}
        {isMobile && openDropdown === 'mobileSecondary' && (
          <div className="py-4 space-y-2">
            {secondaryNavItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-2">
                <button 
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center justify-between w-full px-3 py-2 text-left"
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                
                {openDropdown === item.label && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.dropdown?.map((dropItem) => (
                      <Link 
                        key={dropItem.path}
                        to={dropItem.path}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-research"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Mobile Secondary Nav Toggle */}
        {isMobile && (
          <button
            onClick={() => toggleDropdown('mobileSecondary')}
            className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-600"
          >
            <span>More Categories</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobileSecondary' ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
