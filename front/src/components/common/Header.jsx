import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [aboutTimeoutId, setAboutTimeoutId] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 50);
    setTimeoutId(id);
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutId) {
      clearTimeout(aboutTimeoutId);
      setAboutTimeoutId(null);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    const id = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 50);
    setAboutTimeoutId(id);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Поиск:', searchQuery);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getAboutLabel = (key, fallback) => {
    const label = t(key);
    return label === key ? fallback : label;
  };

  const getNavigationLabel = (key, fallback) => {
    const label = t(key);
    return label === key ? fallback : label;
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src="/images/img_x00201.svg"
                alt="NARKOZ Business School Logo"
                className="h-6 sm:h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-between min-w-0 ml-6">
            {/* Navigation Menu */}
            <div className="flex items-center space-x-6 flex-shrink-0">
              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <div className="text-gray-700 text-sm font-medium hover:text-black transition-colors cursor-pointer flex items-center">
                  {getNavigationLabel('navigation.about', 'О школе')}
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* About Dropdown Menu */}
                {isAboutDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-4 px-0"
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
                  >
                    <div className="space-y-1">
                      <Link
                        to="/about"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                      >
                        {getAboutLabel('about.whoWeAre', 'Кто мы')}
                      </Link>
                      <Link
                        to="/news"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                      >
                        {getAboutLabel('about.news', 'Новости')}
                      </Link>
                      <Link
                        to="/accreditations"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                      >
                        {getAboutLabel('about.accreditations', 'Аккредитации')}
                      </Link>
                      <Link
                        to="/partners"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                      >
                        {getAboutLabel('about.partners', 'Партнеры')}
                      </Link>
                      <Link
                        to="/faculty"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                      >
                        {getAboutLabel('about.faculty', 'Преподаватели')}
                      </Link>
                      <Link
                        to="/administration"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                      >
                        {getAboutLabel('about.administration', 'Администрация школы')}
                      </Link>
                      <Link
                        to="/support"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                      >
                        {getAboutLabel('about.supportNBS', 'Поддержать NBS')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-gray-700 text-sm font-medium hover:text-black transition-colors cursor-pointer flex items-center">
                  {getNavigationLabel('navigation.programs', 'Программы')}
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4 px-0"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="space-y-1">
                      <Link
                        to="/programs/mba"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                      >
                        {getNavigationLabel('programs.mba', 'MBA')}
                      </Link>
                      <Link
                        to="/programs/executive-mba"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                      >
                        {getNavigationLabel('programs.executiveMba', 'Executive MBA')}
                      </Link>
                      <Link
                        to="/programs/dba"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                      >
                        {getNavigationLabel('programs.dba', 'DBA')}
                      </Link>
                      <Link
                        to="/programs/Magistracy"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                      >
                        {getNavigationLabel('programs.magistracy', 'Магистратура')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/schedule"
                className="text-gray-700 text-sm font-medium hover:text-black transition-colors"
              >
                {getNavigationLabel('navigation.schedule', 'Расписание')}
              </Link>
              <Link
                to="/programs/executive-education"
                className="text-gray-700 text-sm font-medium hover:text-black transition-colors"
              >
                {getNavigationLabel('navigation.executiveEducation', 'Executive Education')}
              </Link>
              <div className="text-gray-700 text-sm font-medium hover:text-black transition-colors cursor-pointer">
                {getNavigationLabel('navigation.corporateClients', 'Корпоративные клиенты')}
              </div>
              <Link
                to="/graduates"
                className="text-gray-700 text-sm font-medium hover:text-black transition-colors"
              >
                {getNavigationLabel('navigation.graduates', 'Выпускники')}
              </Link>
            </div>

            {/* Search + Social */}
            <div className="flex items-center min-w-0 ml-4 lg:ml-6">
              {/* Search */}
              <div className="flex items-center min-w-0">
                {!isSearchOpen ? (
                  <div
                    className="bg-gray-100 flex items-center px-3 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors min-w-[140px] max-w-[200px]"
                    onClick={toggleSearch}
                    style={{ minWidth: 140 }}
                  >
                    <img src="/images/img_search.svg" alt="Search" className="w-4 h-4 mr-1" />
                    <span className="text-gray-500 text-sm">
                      {getNavigationLabel('navigation.search', 'Поиск')}
                    </span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSearchSubmit}
                    className="flex items-center min-w-[140px] max-w-[220px]"
                    style={{ minWidth: 140 }}
                  >
                    <div className="bg-gray-100 flex items-center px-3 py-2 rounded-full w-full">
                      <img src="/images/img_search.svg" alt="Search" className="w-4 h-4 mr-2" />
                      <input
                        id="search-input"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={getNavigationLabel(
                          'navigation.searchPlaceholder',
                          'Введите запрос...'
                        )}
                        className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 w-24 lg:w-40 min-w-0"
                        onBlur={() => {
                          if (!searchQuery.trim()) {
                            setTimeout(() => setIsSearchOpen(false), 150);
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={toggleSearch}
                        className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-3 ml-2 sm:ml-4 flex-shrink-0">
                <a
                  href="https://wa.me/87767083636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  title="WhatsApp"
                >
                  <img src="/images/img_vector.svg" alt="WhatsApp" className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/narxoz_business_school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  title="Telegram"
                >
                  <img src="/images/img_vector_gray_600.svg" alt="Telegram" className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/narxoz_business_school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  title="Instagram"
                >
                  <img
                    src="/images/img_vector_gray_600_25x25.svg"
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href="tel:+77767083636"
                  className="hover:opacity-70 transition-opacity"
                  title="+ 7 776 708 3636"
                >
                  <svg className="w-5 h-5" fill="#4B5563" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Search */}
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <img src="/images/img_search.svg" alt="Search" className="w-5 h-5" />
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <img src="/images/img_menu.svg" alt="Menu" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden border-t border-gray-200 px-4 py-3 bg-white">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="bg-gray-100 flex items-center px-3 py-2 rounded-full w-full">
                <img src="/images/img_search.svg" alt="Search" className="w-4 h-4 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={getNavigationLabel(
                    'navigation.searchPlaceholder',
                    'Введите запрос...'
                  )}
                  className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 flex-1"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={toggleSearch}
                  className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Language Switcher - positioned at edge */}
        <div className="absolute top-2 right-2 z-50">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <img
              src="/images/img_x00201.svg"
              alt="NARKOZ Business School Logo"
              className="h-6 w-auto"
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-2 px-4">
              {/* About Section */}
              <div className="py-2">
                <div className="text-gray-900 font-semibold text-lg mb-3">
                  {getNavigationLabel('navigation.about', 'О школе')}
                </div>
                <div className="space-y-2 ml-4">
                  <Link
                    to="/about"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {getAboutLabel('about.whoWeAre', 'Кто мы')}
                  </Link>
                  <Link
                    to="/news"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {getAboutLabel('about.news', 'Новости')}
                  </Link>
                  <Link
                    to="/accreditations"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {getAboutLabel('about.accreditations', 'Аккредитации')}
                  </Link>
                  <Link
                    to="/partners"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {getAboutLabel('about.partners', 'Партнеры')}
                  </Link>
                  <Link
                    to="/faculty"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {getAboutLabel('about.faculty', 'Преподаватели')}
                  </Link>
                  <Link
                    to="/administration"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {getAboutLabel('about.administration', 'Администрация школы')}
                  </Link>
                  <Link
                    to="/support"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {getAboutLabel('about.supportNBS', 'Поддержать NBS')}
                  </Link>
                </div>
              </div>

              {/* Programs Section */}
              <div className="py-2 border-t border-gray-100">
                <div className="text-gray-900 font-semibold text-lg mb-3">
                  {getNavigationLabel('navigation.programs', 'Программы')}
                </div>
                <div className="space-y-2 ml-4">
                  <Link
                    to="/programs/mba"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {getNavigationLabel('programs.mba', 'MBA')}
                  </Link>
                  <Link
                    to="/programs/executive-mba"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {getNavigationLabel('programs.executiveMba', 'Executive MBA')}
                  </Link>
                  <Link
                    to="/programs/dba"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {getNavigationLabel('programs.dba', 'DBA')}
                  </Link>
                  <Link
                    to="/programs/Magistracy"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {getNavigationLabel('programs.magistracy', 'Магистратура')}
                  </Link>
                </div>
              </div>

              {/* Other Links */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <Link
                  to="/schedule"
                  onClick={closeMobileMenu}
                  className="block py-3 text-gray-900 font-medium hover:text-red-600 transition-colors"
                >
                  {getNavigationLabel('navigation.schedule', 'Расписание')}
                </Link>
                <Link
                  to="/programs/executive-education"
                  onClick={closeMobileMenu}
                  className="block py-3 text-gray-900 font-medium hover:text-red-600 transition-colors"
                >
                  {getNavigationLabel('navigation.executiveEducation', 'Executive Education')}
                </Link>
                <div className="block py-3 text-gray-900 font-medium hover:text-red-600 transition-colors cursor-pointer">
                  {getNavigationLabel('navigation.corporateClients', 'Корпоративные клиенты')}
                </div>
                <Link
                  to="/graduates"
                  onClick={closeMobileMenu}
                  className="block py-3 text-gray-900 font-medium hover:text-red-600 transition-colors"
                >
                  {getNavigationLabel('navigation.graduates', 'Выпускники')}
                </Link>
              </div>
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="border-t border-gray-200 p-4">
            {/* Contact Info */}
            <div className="mb-4 space-y-2">
              <a
                href="tel:+77767083636"
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm">+ 7 776 708 3636</span>
              </a>
              <a
                href="mailto:gsb@narxoz.kz"
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm">gsb@narxoz.kz</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/87767083636"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                title="WhatsApp"
              >
                <img src="/images/img_vector.svg" alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/narxoz_business_school"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                title="Telegram"
              >
                <img src="/images/img_vector_gray_600.svg" alt="Telegram" className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/narxoz_business_school"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                title="Instagram"
              >
                <img
                  src="/images/img_vector_gray_600_25x25.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
