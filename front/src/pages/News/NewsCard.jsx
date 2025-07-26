import React from 'react';

const NewsCard = ({ title, description, date, image, onClick, className = '' }) => {
  return (
    <article
      className={`
        bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 
        cursor-pointer overflow-hidden group border border-gray-100
        transform hover:scale-105 active:scale-95 touch-manipulation
        ${className}
      `}
      onClick={onClick}
    >
      {/* Image Container */}
      {image && (
        <div className="relative aspect-video sm:aspect-[4/3] lg:aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Date */}
        {date && (
          <time className="text-xs sm:text-sm text-gray-500 font-medium mb-2 sm:mb-3 block">
            {date}
          </time>
        )}

        {/* Title */}
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight line-clamp-2 group-hover:text-[#991E1E] transition-colors">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        )}

        {/* Read More Indicator */}
        <div className="flex items-center mt-4 text-[#991E1E] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Читать далее</span>
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
