import React from 'react';

const audiobooks = [
  {
    id: 1,
    title: 'THE GHOST WALKER',
    author: 'DICKSON LANE',
    narrator: 'James Earl Jones',
    price: 19.99,
    image: '/image1.png',
    rating: 4.8,
    duration: '8h 42m',
    description: 'A haunting exploration of gender empowerment across native cultures in 19th century Canada.',
    comingSoon: true  // Added comingSoon flag
  },
  {
    id: 2,
    title: 'THE 10 LITTLE INDIANS',
    author: 'DICKSON LANE',
    narrator: 'Morgan Freeman',
    price: 16.99,
    image: '/image4.png',
    rating: 4.6,
    duration: '6h 15m',
    description: 'Learn from the Masters of Moviemaking about writing screenplays.',
    comingSoon: false  // Added comingSoon flag
  }
];

export default function AudioBookShop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
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
        {/* Header with Audio Theme */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
            </svg>
            <h1 className="text-4xl font-bold text-gray-900 ml-3">Immersive AudioBooks</h1>
          </div>
          <p className="text-lg text-gray-600">Stories come alive with our professional narrations</p>
        </div>

        {/* AudioBooks Grid */}
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          {audiobooks.map((audiobook) => (
            <div key={audiobook.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                {/* AudioBook Cover with Play Button */}
                <div className="relative md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
                  <img 
                    className="h-64 w-48 object-contain rounded-lg shadow-md" 
                    src={audiobook.image} 
                    alt={audiobook.title}
                  />
                  {audiobook.comingSoon && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                      <span className="text-white font-bold bg-blue-800 px-3 py-2 rounded-lg">COMING SOON</span>
                    </div>
                  )}
                  <button 
                    className={`absolute bottom-4 right-4 p-3 rounded-full shadow-lg transition-colors duration-300 ${
                      audiobook.comingSoon 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                    disabled={audiobook.comingSoon}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                
                {/* AudioBook Details */}
                <div className="p-6 md:p-8 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{audiobook.title}</h2>
                      <p className={`text-sm ${audiobook.comingSoon ? 'text-gray-500' : 'text-gray-600'}`}>by {audiobook.author}</p>
                    </div>
                    <div className={`flex items-center px-3 py-1 rounded-full ${
                      audiobook.comingSoon ? 'bg-gray-200 text-gray-500' : 'bg-purple-100 text-purple-600'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072" />
                      </svg>
                      <span className="ml-1 text-sm font-medium">AUDIO</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className={`text-sm ${audiobook.comingSoon ? 'text-gray-500' : 'text-gray-700'}`}>
                      <span className="font-medium">Narrated by:</span> {audiobook.narrator}
                    </p>
                  </div>
                  
                  <div className="flex items-center mb-6 space-x-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(audiobook.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className={`ml-2 text-sm ${audiobook.comingSoon ? 'text-gray-500' : 'text-gray-600'}`}>
                        {audiobook.rating.toFixed(1)}
                      </span>
                    </div>
                    <div className={`flex items-center text-sm ${audiobook.comingSoon ? 'text-gray-500' : 'text-gray-600'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {audiobook.duration}
                    </div>
                  </div>
                  
                  <p className={`mb-6 ${audiobook.comingSoon ? 'text-gray-500' : 'text-gray-700'}`}>
                    {audiobook.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      {audiobook.comingSoon ? (
                        <span className="text-xl font-bold text-gray-500">Coming Soon</span>
                      ) : (
                        <>
                          <span className="text-2xl font-bold text-gray-900">${audiobook.price.toFixed(2)}</span>
                          <span className="ml-2 text-sm text-gray-500">or 1 credit</span>
                        </>
                      )}
                    </div>
                    <div className="flex space-x-3">
                      <button 
                        className={`px-4 py-2 font-medium rounded-lg transition-colors duration-300 ${
                          audiobook.comingSoon
                            ? 'border border-gray-300 text-gray-400 cursor-not-allowed'
                            : 'border border-purple-600 text-purple-600 hover:bg-purple-50'
                        }`}
                        disabled={audiobook.comingSoon}
                      >
                        Sample
                      </button>
                      <button 
                        className={`px-6 py-2 font-medium rounded-lg transition-colors duration-300 ${
                          audiobook.comingSoon
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                        }`}
                        disabled={audiobook.comingSoon}
                      >
                        {audiobook.comingSoon ? 'Coming Soon' : 'Add to Library'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Listening Options Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">How To Listen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                title: "On Your Phone",
                description: "Use our mobile app for listening on the go"
              },
              {
                icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                title: "On Your Computer",
                description: "Stream directly from your browser"
              },
              {
                icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
                title: "Smart Speakers",
                description: "Connect to your Alexa or Google Home"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-4">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">What Listeners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "The narration brought the story to life in ways I couldn't imagine. James Earl Jones' voice is magical!",
                author: "Sarah J.",
                book: "THE GHOST WALKER"
              },
              {
                quote: "I listen during my commute and it's transformed my daily drive into something I look forward to.",
                author: "Michael T.",
                book: "THE 10 LITTLE INDIANS"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">{testimonial.author}</span> • Listener of <span className="font-medium">{testimonial.book}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}