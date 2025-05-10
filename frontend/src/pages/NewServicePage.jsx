import React, { useState } from 'react';
import ServiceFilters from '../components/NewServiceFilters';
import ServiceList from '../components/NewServiceList';
import PricingHighlights from '../components/PricingHighlights';
import {Helmet} from 'react-helmet-async';

const ServicesPage = ({ data }) => {
  const [selectedMode, setSelectedMode] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = data.services.filter(service => {
    // Filter by mode
    const modeMatch = selectedMode === 'all' || 
      (selectedMode === 'piece' && (service.unit === 'piece' || service.unit === 'pair')) || 
      (selectedMode === 'kg' && service.unit === 'kg');
    
    // Filter by category
    const categoryMatch = selectedCategory === 'all' || service.categories.includes(selectedCategory);
    
    // Filter by search query (case insensitive)
    const searchMatch = service.displayName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return modeMatch && categoryMatch && searchMatch;
  });

  return (
    <>
      <Helmet>
        <title>Andes Laundry - New Services</title>
        <meta name="description" content="Explore our new laundry services and pricing." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 mt-16">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Services & Pricing
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                Professional cleaning services tailored to your needs
              </p>
            </div>
            
            {/* Pricing Highlights */}
            <PricingHighlights />
            
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            
            {/* Filters and Services */}
            <div className="space-y-8">
              <ServiceFilters 
                serviceModes={data.serviceModes}
                serviceCategories={data.serviceCategories}
                selectedMode={selectedMode}
                selectedCategory={selectedCategory}
                onModeChange={setSelectedMode}
                onCategoryChange={setSelectedCategory}
              />
              
              {filteredServices.length > 0 ? (
                <ServiceList services={filteredServices} />
              ) : (
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No services found</h3>
                  <p className="mt-1 text-gray-500">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;