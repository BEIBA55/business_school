import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsCard = ({ news, className = '' }) => {
  const { t } = useTranslation();
  const { title, description, date, image, category, tags, readTime } = news;

  return (
    <article
      className={`
        bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 
        cursor-pointer overflow-hidden group border border-gray-100
        transform hover:scale-105 active:scale-95 touch-manipulation
        flex flex-col h-full
        ${className}
      `}
    >
      {/* Image Container */}
      {image && (
        <Link to={`/news/${news.id}`} className="block">
          <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-2 flex-shrink-0">
          {category && (
            <span className="text-xs text-red-600 font-medium bg-red-50 px-2 py-1 rounded-full">
              {t(`news.${category}`)}
            </span>
          )}
          {date && (
            <time className="text-xs text-gray-500 font-medium">
              {date}
            </time>
          )}
        </div>

        {/* Title */}
        <Link to={`/news/${news.id}`} className="block">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 leading-tight line-clamp-2 group-hover:text-[#991E1E] transition-colors flex-shrink-0">
            {title}
          </h3>
        </Link>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2 mb-2 flex-grow">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2 flex-shrink-0">
            {tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read Time and Read More */}
        <div className="flex items-center justify-between mt-auto flex-shrink-0">
          {readTime && (
            <span className="text-xs text-gray-400">{readTime}</span>
          )}
          <Link 
            to={`/news/${news.id}`}
            className="flex items-center text-[#991E1E] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span>{t('common.readMore', 'Читать далее')}</span>
            <svg
              className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
