import React, { useState } from 'react';

const books = [
  {
    id: 1,
    title: 'THE GHOST WALKER',
    author: 'DICKSON LANE',
    image: '/image1.png',
    rating: 4.5,
    description: 'A haunting exploration of gender empowerment across native cultures in 19th century Canada.',
    formats: [
      {
        retailer: 'Amazon',
        link: 'https://www.amazon.com/dp/EXAMPLE2'
      },
      {
        retailer: 'Ingram',
        link: 'https://www.ingramspark.com/EXAMPLE3'
      },
      {
        retailer: 'Barnes & Noble',
        link: 'https://www.barnesandnoble.com/EXAMPLE4'
      }
    ],
    comingSoon: true
  },
  {
    id: 2,
    title: 'THE 10 LITTLE INDIANS',
    author: 'DICKSON LANE',
    image: '/image4.png',
    rating: 4.2,
    description: 'Learn from the Masters of Moviemaking about writing screenplays.',
    formats: [
      {
        retailer: 'Amazon',
        link: 'https://www.amazon.com/Little-Indians-Successful-Screenplays-Moviemaking/dp/B0FJYN6Q27'
      },
      {
        retailer: 'Barnes & Noble',
        link: 'https://www.barnesandnoble.com/w/the-10-little-indians-dickson-lane/1139918093'
      },
    ],
    comingSoon: false
  }
];

export default function BookShop() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dickson Lane's Collection</h1>
          <p className="text-lg text-gray-600">Discover captivating stories from a master storyteller</p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {books.map((book) => (
            <div key={book.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
              book.comingSoon ? 'opacity-90' : ''
            }`}>
              <div className="md:flex">
                {/* Book Cover */}
                <div className="relative md:flex-shrink-0 bg-gray-100 flex items-center justify-center p-6 md:p-8">
                  <img 
                    className="h-64 w-48 object-contain rounded-lg shadow-md" 
                    src={book.image} 
                    alt={book.title}
                  />
                  {book.comingSoon && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                      <span className="bg-blue-800 text-white px-3 py-1 rounded-lg font-bold text-sm">
                        COMING SOON
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Book Details */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className={`ml-2 text-sm ${book.comingSoon ? 'text-gray-500' : 'text-gray-600'}`}>
                      {book.rating.toFixed(1)}
                    </span>
                  </div>
                  
                  <h2 className={`text-xl font-bold ${book.comingSoon ? 'text-gray-600' : 'text-gray-900'} mb-1`}>
                    {book.title}
                  </h2>
                  <p className={`text-sm ${book.comingSoon ? 'text-gray-500' : 'text-gray-600'} mb-4`}>
                    by {book.author}
                  </p>
                  
                  <p className={`${book.comingSoon ? 'text-gray-500' : 'text-gray-700'} mb-6 text-xs`}>
                    {book.description}
                  </p>
                  
                  <button
                    onClick={() => openModal(book)}
                    className={`w-full px-4 py-2 font-medium rounded-lg transition-colors duration-300 ${
                      book.comingSoon
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                    disabled={book.comingSoon}
                  >
                    {book.comingSoon ? 'Coming Soon' : 'Shop Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Books Coming Soon!</h2>
          <p className="text-gray-600 mb-6">Sign up to be notified when we release new titles</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-r-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Notify Me
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedBook && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{selectedBook.title}</h3>
                  <button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {selectedBook.comingSoon ? (
                  <div className="text-center py-8">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">Coming Soon!</h3>
                    <p className="mt-1 text-gray-500">This book will be available shortly. Check back soon!</p>
                    <button
                      onClick={closeModal}
                      className="mt-4 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-600 mb-4">Available at these retailers:</p>
                    <div className="space-y-3 mb-6">
                      {selectedBook.formats.map((format, index) => (
                        <a 
                          key={index}
                          href={format.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900">{format.retailer}</span>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                    <button
                      onClick={closeModal}
                      className="w-full px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-300"
                    >
                      Close
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}