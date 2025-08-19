import React from 'react';

const ebooks = [
  {
    id: 1,
    title: 'THE GHOST WALKER',
    author: 'DICKSON LANE',
    price: 14.99,
    image: '/image1.png',
    rating: 4.5,
    formats: ['PDF', 'EPUB', 'MOBI'],
    description: 'A haunting exploration of gender empowerment across native cultures in 19th century Canada.',
    comingSoon: true  // Added comingSoon flag
  },
  {
    id: 2,
    title: 'THE 10 LITTLE INDIANS',
    author: 'DICKSON LANE',
    price: 12.99,
    image: '/image4.png',
    rating: 4.2,
    formats: ['PDF', 'EPUB'],
    description: 'Learn from the Masters of Moviemaking about writing screenplays.',
    comingSoon: false  // Added comingSoon flag
  }
];

export default function EBookShop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* <div className="bg-blue-800 text-white py-4 px-6 mb-12 rounded-lg shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-2 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-2xl md:text-3xl font-bold tracking-wide">COMING SOON</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto">
        {/* Header with Digital Theme */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h1 className="text-4xl font-bold text-gray-900 ml-3">Digital Editions</h1>
          </div>
          <p className="text-lg text-gray-600">Instant access to your favorite stories in multiple formats</p>
        </div>

        {/* EBooks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ebooks.map((ebook) => (
            <div key={ebook.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 flex flex-col md:flex-row">
                {/* EBook Cover with Digital Badge */}
                <div className="relative mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <img 
                    className="h-48 w-32 object-cover rounded-lg shadow-md border border-gray-200" 
                    src={ebook.image} 
                    alt={ebook.title}
                  />
                  <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                    DIGITAL
                  </div>
                  {ebook.comingSoon && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                      <span className="text-white font-bold bg-blue-800 px-2 py-1 rounded">COMING SOON</span>
                    </div>
                  )}
                </div>
                
                {/* EBook Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-1">{ebook.title}</h2>
                      <p className="text-sm text-gray-600 mb-3">by {ebook.author}</p>
                    </div>
                    <div className="flex items-center bg-blue-100 px-2 py-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-xs font-medium text-blue-600">{ebook.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{ebook.description}</p>
                  
                  {/* Format Options */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2">AVAILABLE FORMATS:</p>
                    <div className="flex flex-wrap gap-2">
                      {ebook.formats.map(format => (
                        <span key={format} className={`px-2 py-1 text-xs font-medium rounded ${
                          ebook.comingSoon ? 'bg-gray-200 text-gray-500' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      {ebook.comingSoon ? (
                        <span className="text-lg font-bold text-gray-500">Coming Soon</span>
                      ) : (
                        <>
                          <span className="text-2xl font-bold text-gray-900">${ebook.price.toFixed(2)}</span>
                          <span className="ml-2 text-sm text-gray-500 line-through">${(ebook.price * 1.4).toFixed(2)}</span>
                        </>
                      )}
                    </div>
                    <button 
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        ebook.comingSoon 
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed focus:ring-gray-300' 
                          : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
                      }`}
                      disabled={ebook.comingSoon}
                    >
                      {ebook.comingSoon ? 'Coming Soon' : 'Shop Now'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Benefits Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Why Choose EBooks?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                title: 'Instant Access',
                description: 'Get your book immediately after purchase'
              },
              {
                icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
                title: 'Multiple Devices',
                description: 'Read on your phone, tablet, or computer'
              },
              {
                icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
                title: 'Cloud Storage',
                description: 'Never lose your books - accessible anywhere'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-4">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter with Digital Focus */}
        <div className="mt-16 text-center bg-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Free EBook Samples</h2>
          <p className="text-gray-600 mb-6">Join our newsletter and receive free chapters from our latest releases</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Get Samples
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  );
}