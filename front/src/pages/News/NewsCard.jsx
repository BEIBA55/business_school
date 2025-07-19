import React from 'react';

const NewsCard = ({ news, onClick }) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log('Clicked news:', news.title);
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2 h-full flex flex-col"
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <img 
          src={news.image} 
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = '/images/Fon.png'; // Fallback image
          }}
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
            {news.category}
          </span>
        </div>

        {/* Read Time Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
            {news.readTime}
          </span>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Date */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-500 text-sm font-medium">
            {news.date}
          </span>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-400 text-xs">{news.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-gray-900 text-xl font-bold mb-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-200 flex-shrink-0">
          {news.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3 flex-1">
          {news.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
          {news.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium hover:bg-red-100 hover:text-red-600 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
          {news.tags.length > 3 && (
            <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-full text-xs">
              +{news.tags.length - 3}
            </span>
          )}
        </div>

        {/* Read More Button */}
        <div className="flex justify-between items-center mt-auto flex-shrink-0">
          <span className="text-red-600 text-sm font-medium group-hover:text-red-700 transition-colors duration-200">
            Читать далее
          </span>
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-all duration-200 group-hover:scale-110">
            <svg 
              className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard; 