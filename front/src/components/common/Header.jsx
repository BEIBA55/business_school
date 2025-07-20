import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [aboutTimeoutId, setAboutTimeoutId] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
    }, 50); // 200ms задержка
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
    }, 50); // 200ms задержка
    setAboutTimeoutId(id);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Здесь можно добавить логику поиска
      console.log('Поиск:', searchQuery);
      // Можно перенаправить на страницу результатов поиска
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Фокус на input при открытии
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between px-8 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
          <img 
            src="/images/img_x00201.svg" 
            alt="NARKOZ Business School Logo" 
            className="h-8 w-auto"
          />
          </Link>
        </div>

        {/* Контейнер для меню, поиска и иконок */}
        <div className="flex items-center flex-1 justify-between min-w-0 ml-6">
          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-gray-700 text-sm font-medium hover:text-black transition-colors cursor-pointer flex items-center">
              Программы
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
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
                      MBA
                    </Link>
                    <Link 
                      to="/programs/executive-mba"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                    >
                      Executive MBA
                    </Link>
                    <Link 
                      to="/programs/dba"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                    >
                      DBA
                    </Link>
                    <Link 
                      to="/programs/Magistracy"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                    >
                      Магистратура
                    </Link>
                    
            
                  </div>
                </div>
              )}
            </div>
            
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <div className="text-gray-700 text-sm font-medium hover:text-black transition-colors cursor-pointer flex items-center">
                О нас
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
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
              Кто мы
            </Link>
                    {/* <Link 
                      to="/events"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                    >
                      Ивенты
                    </Link> */}
                    <Link 
                      to="/news"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                    >
                      Новости
                    </Link>
                    
                    <Link 
                      to="/accreditations"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                    >
                      Аккредитации
                    </Link>
                    <Link 
                      to="/partners"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                    >
                      Партнеры
                    </Link>
                    <Link 
                      to="/faculty"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                    >
                      Факультет
                    </Link>
                    <Link 
                      to="/administration"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                    >
                      Администрация школы
                    </Link>
                    <Link 
                      to="/support"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm font-medium"
                    >
                      Поддержать NBS
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link 
              to="/schedule" 
              className="text-gray-700 text-sm font-medium hover:text-black transition-colors"
            >
              Расписание
            </Link>
            <Link 
              to="/programs/executive-education" 
              className="text-gray-700 text-sm font-medium hover:text-black transition-colors"
            >
              Executive Education
            </Link>
            <div className="text-gray-700 text-sm font-medium hover:text-black transition-colors cursor-pointer">
              Корпоративным клиентам
            </div>
            <div className="text-gray-700 text-sm font-medium hover:text-black transition-colors cursor-pointer">
              Выпускникам
            </div>
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
                  <span className="text-gray-500 text-sm">Поиск</span>
                </div>
              ) : (
                <form onSubmit={handleSearchSubmit} className="flex items-center min-w-[140px] max-w-[220px]" style={{ minWidth: 140 }}>
                  <div className="bg-gray-100 flex items-center px-3 py-2 rounded-full w-full">
                    <img src="/images/img_search.svg" alt="Search" className="w-4 h-4 mr-2" />
                    <input
                      id="search-input"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Введите запрос..."
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
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
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
                <img src="/images/img_vector_gray_600_25x25.svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a 
                href="tel:+87767083636" 
                className="hover:opacity-70 transition-opacity"
                title="+8 776 708 36 36"
              >
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <img src="/images/img_menu.svg" alt="Menu" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Header;