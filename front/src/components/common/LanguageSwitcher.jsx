import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺', short: 'RU' },
    { code: 'en', name: 'English', flag: '🇺🇸', short: 'EN' },
    { code: 'kk', name: 'Қазақша', flag: '🇰🇿', short: 'KZ' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language);
  const otherLanguages = languages.filter(lang => lang.code !== i18n.language);

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Текущий язык */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2.5 text-sm font-medium bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/20"
        title={currentLanguage?.name}
      >
        <span className="text-xl filter drop-shadow-sm">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline font-semibold">{currentLanguage?.short}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-xl shadow-xl py-2 min-w-[140px] z-50 animate-fade-in">
          {otherLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="w-full flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50/90 hover:text-gray-800 transition-colors duration-200"
              title={language.name}
            >
              <span className="text-lg filter drop-shadow-sm">{language.flag}</span>
              <span className="font-semibold">{language.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 