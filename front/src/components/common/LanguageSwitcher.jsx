import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺', short: 'RU' },
    { code: 'en', name: 'English', flag: '🇺🇸', short: 'EN' },
    { code: 'kk', name: 'Қазақша', flag: '🇰🇿', short: 'KZ' },
  ];

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  // Показываем только неактивные языки
  const inactiveLanguages = languages.filter((language) => language.code !== i18n.language);

  return (
    <div className="flex items-center space-x-1">
      {inactiveLanguages.map((language) => (
        <button
          key={language.code}
          onClick={() => handleLanguageChange(language.code)}
          className="flex items-center space-x-1.5 px-3 py-2 text-sm font-semibold 
                     bg-white/90 text-gray-700 rounded-lg transition-all duration-300 
                     hover:bg-gray-100 hover:scale-105 border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
          title={language.name}
        >
          <span className="text-base">{language.flag}</span>
          <span className="font-bold tracking-wide">{language.short}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
