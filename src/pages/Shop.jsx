import React from 'react';
import { FaShoppingCart, FaStar, FaRegStar, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const books = [
  {
    id: 1,
    title: 'THE GHOST WALKER',
    author: 'DICKSON LANE',
    price: 24.99,
    image: '/image1.png',
    rating: 4.5,
    description: 'A haunting exploration of gender empowerment across native cultures in 19th century Canada.'
  },
  {
    id: 2,
    title: 'THE 10 LITTLE INDIANS',
    author: 'DICKSON LANE',
    price: 19.99,
    image: '/image4.png',
    rating: 4.2,
    description: 'Learn from the Masters of Moviemaking about writing screenplays.'
  },
  {
    id: 3,
    title: 'MIDNIGHT WHISPERS',
    author: 'DICKSON LANE',
    price: 22.99,
    image: '/image3.png',
    rating: 4.8,
    description: 'A collection of supernatural tales from the deep forests of British Columbia.'
  },
  {
    id: 4,
    title: 'THE LAST CANOE',
    author: 'DICKSON LANE',
    price: 27.99,
    image: '/image2.png',
    rating: 4.7,
    description: 'An epic journey through the waterways of the Pacific Northwest.'
  }
];

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-amber-400" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStar key="half" className="text-amber-400" />);
  }

  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-amber-400" />);
  }

  return stars;
}

function Shop() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 font-serif">Book Shop</h1>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto">
            Discover our collection of captivating books by Dickson Lane
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div 
              key={book.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  ${book.price.toFixed(2)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
                  <div className="flex">
                    {renderStars(book.rating)}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{book.author}</p>
                <p className="text-gray-700 mb-4 line-clamp-2">{book.description}</p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => navigate(`/bookdetails/${book.id}`)}
                    className="text-amber-600 hover:text-amber-800 font-medium flex items-center text-sm"
                  >
                    View details <FaArrowRight className="ml-1" />
                  </button>
                  
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                    <FaShoppingCart className="mr-2" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-900 to-amber-700 rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-xl mb-6">
              Our literary experts can help you find the perfect book for your taste.
            </p>
            <button className="bg-white text-amber-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
              Contact Our Book Advisors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;