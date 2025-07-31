import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import NewsCard from './NewsCard';
import Pagination from './Pagination';

const News = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [sortBy, setSortBy] = useState('date');
  const newsPerPage = 8;

  // Расширенные данные новостей о Нархоз с категориями и тегами
  const allNews = [
    {
      id: 1,
      image: '/images/experty.png',
      category: 'События',
      tags: ['Конференции', 'Эксперты'],
      date: '18/07/2025',
      readTime: '3 мин',
      title: 'Топовые эксперты',
      description:
        'Реальные руководители из реальных компаний на практике внедрявшие инструменты контрактного менеджмента',
      fullContent:
        'Реальные руководители из реальных компаний на практике внедрявшие инструменты контрактного менеджмента. Наши эксперты имеют многолетний опыт работы в ведущих корпорациях и готовы поделиться своими знаниями со студентами Narxoz Business School.',
    },
    {
      id: 2,
      image: '/images/stud.png',
      category: 'Достижения',
      tags: ['Рейтинги', 'QS'],
      date: '18/07/2025',
      readTime: '5 мин',
      title: 'Narxoz Business School вошла в топ-50 лучших бизнес-школ Азии по версии QS',
      description:
        'Программа MBA Бизнес-школы Университета Нархоз заняла 42-е место в рейтинге QS Global MBA 2025 Asia и стала №1 в Центрально-Азиатском регионе.',
      fullContent:
        'Программа MBA Бизнес-школы Университета Нархоз заняла 42-е место в рейтинге QS Global MBA 2025 Asia и стала №1 в Центрально-Азиатском регионе. Это историческое достижение для казахстанского образования и признание высокого качества наших программ.',
    },
    {
      id: 3,
      image: '/images/Gradu.png',
      category: 'Программы',
      tags: ['Executive MBA', 'Цифровизация'],
      date: '18/07/2025',
      readTime: '4 мин',
      title: 'Запущена новая программа Executive MBA с фокусом на цифровую трансформацию',
      description:
        'Narxoz Business School представила обновленную программу Executive MBA, которая включает модули по искусственному интеллекту и цифровым технологиям.',
      fullContent:
        'Narxoz Business School представила обновленную программу Executive MBA, которая включает модули по искусственному интеллекту и цифровым технологиям. Программа разработана в сотрудничестве с ведущими технологическими компаниями и включает практические проекты.',
    },
    {
      id: 4,
      image: '/images/gruppa.png',
      category: 'События',
      tags: ['Хакатон', 'Сингапур'],
      date: '18/07/2025',
      readTime: '6 мин',
      title: 'Студенты MBA приняли участие в международном хакатоне в Сингапуре',
      description:
        'Команда Narxoz Business School заняла второе место на международном хакатоне по устойчивому развитию, организованном партнерскими университетами.',
      fullContent:
        'Команда Narxoz Business School заняла второе место на международном хакатоне по устойчивому развитию, организованном партнерскими университетами. Наши студенты представили инновационное решение для экологических проблем в регионе.',
    },
    {
      id: 5,
      image: '/images/detali.png',
      category: 'Инфраструктура',
      tags: ['Центр', 'Образование'],
      date: '18/07/2025',
      readTime: '3 мин',
      title: 'Открыт новый корпоративный центр для Executive Education программ',
      description:
        'В кампусе Нархоз открылся современный корпоративный центр с инновационными аудиториями и пространствами для командной работы.',
      fullContent:
        'В кампусе Нархоз открылся современный корпоративный центр с инновационными аудиториями и пространствами для командной работы. Центр оснащен последними технологиями и создает идеальную среду для обучения руководителей.',
    },
    {
      id: 6,
      image: '/images/vipus.jpg',
      category: 'Достижения',
      tags: ['Аккредитация', 'AACSB'],
      date: '18/07/2025',
      readTime: '4 мин',
      title: 'Narxoz Business School получила международную аккредитацию AACSB',
      description:
        'Бизнес-школа Нархоз стала первой в Центральной Азии, получившей престижную аккредитацию AACSB International.',
      fullContent:
        'Бизнес-школа Нархоз стала первой в Центральной Азии, получившей престижную аккредитацию AACSB International. Это подтверждает соответствие наших программ мировым стандартам качества образования.',
    },
    {
      id: 7,
      image: '/images/EMBA_fon.png',
      category: 'Партнерства',
      tags: ['Harvard', 'London Business School'],
      date: '18/07/2025',
      readTime: '5 мин',
      title: 'Партнерство с ведущими мировыми университетами',
      description:
        'Подписаны соглашения о сотрудничестве с Harvard Business School и London Business School для обмена студентами и преподавателями.',
      fullContent:
        'Подписаны соглашения о сотрудничестве с Harvard Business School и London Business School для обмена студентами и преподавателями. Это открывает новые возможности для наших студентов и преподавателей.',
    },
    {
      id: 8,
      image: '/images/MBA.png',
      category: 'Программы',
      tags: ['MBA', 'Устойчивое развитие'],
      date: '18/07/2025',
      readTime: '4 мин',
      title: 'Запуск программы MBA в области устойчивого развития',
      description:
        'Новая специализация MBA фокусируется на экологических, социальных и управленческих аспектах современного бизнеса.',
      fullContent:
        'Новая специализация MBA фокусируется на экологических, социальных и управленческих аспектах современного бизнеса. Программа готовит лидеров, способных создавать устойчивый бизнес будущего.',
    },
    {
      id: 9,
      image: '/images/ACCA.png',
      category: 'Достижения',
      tags: ['Конкурс', 'EFMD'],
      date: '18/07/2025',
      readTime: '3 мин',
      title: 'Студенты Narxoz заняли первое место на международном конкурсе бизнес-кейсов',
      description:
        'Команда MBA студентов победила в престижном конкурсе, организованном European Foundation for Management Development.',
      fullContent:
        'Команда MBA студентов победила в престижном конкурсе, организованном European Foundation for Management Development. Наши студенты показали высокий уровень аналитических и презентационных навыков.',
    },
    {
      id: 10,
      image: '/images/CEEMAN.png',
      category: 'Инфраструктура',
      tags: ['Инновации', 'Стартапы'],
      date: '18/07/2025',
      readTime: '4 мин',
      title: 'Открытие Центра инноваций и предпринимательства',
      description:
        'Новый центр предоставляет студентам возможности для развития стартапов и инновационных проектов.',
      fullContent:
        'Новый центр предоставляет студентам возможности для развития стартапов и инновационных проектов. Центр оснащен современным оборудованием и предоставляет менторскую поддержку.',
    },
    {
      id: 11,
      image: '/images/Ranked.png',
      category: 'Достижения',
      tags: ['Рейтинги', 'THE'],
      date: '18/07/2025',
      readTime: '3 мин',
      title: 'Narxoz вошел в топ-100 лучших университетов развивающихся стран',
      description:
        'Университет Нархоз улучшил свои позиции в рейтинге Times Higher Education Emerging Economies University Rankings.',
      fullContent:
        'Университет Нархоз улучшил свои позиции в рейтинге Times Higher Education Emerging Economies University Rankings. Это подтверждает высокое качество образования и исследований.',
    },
    {
      id: 12,
      image: '/images/ERG.png',
      category: 'Партнерства',
      tags: ['ERG', 'Kazzinc'],
      date: '18/07/2025',
      readTime: '4 мин',
      title: 'Сотрудничество с крупнейшими корпорациями Казахстана',
      description:
        'Подписаны меморандумы о сотрудничестве с ERG, Kazzinc и другими ведущими компаниями для стажировок студентов.',
      fullContent:
        'Подписаны меморандумы о сотрудничестве с ERG, Kazzinc и другими ведущими компаниями для стажировок студентов. Это обеспечивает практическую подготовку наших выпускников.',
    },
    {
      id: 13,
      image: '/images/Beeline.png',
      category: 'Программы',
      tags: ['Цифровой маркетинг', 'Аналитика'],
      date: '18/07/2025',
      readTime: '5 мин',
      title: 'Запуск программы цифрового маркетинга',
      description:
        'Новая программа MBA специализации включает современные инструменты цифрового маркетинга и аналитики данных.',
      fullContent:
        'Новая программа MBA специализации включает современные инструменты цифрового маркетинга и аналитики данных. Программа разработана в сотрудничестве с ведущими digital-агентствами.',
    },
    {
      id: 14,
      image: '/images/Halyk.png',
      category: 'Партнерства',
      tags: ['Halyk Bank', 'Финансы'],
      date: '18/07/2025',
      readTime: '4 мин',
      title: 'Партнерство с Halyk Bank для финансового образования',
      description:
        'Совместная программа подготовки специалистов в области финансов и банковского дела.',
      fullContent:
        'Совместная программа подготовки специалистов в области финансов и банковского дела. Программа включает стажировки в банке и практические проекты.',
    },
    {
      id: 15,
      image: '/images/forte.png',
      category: 'События',
      tags: ['Конференция', 'Международная'],
      date: '18/07/2025',
      readTime: '6 мин',
      title: 'Международная конференция по бизнес-образованию',
      description:
        'Narxoz Business School провела крупнейшую в регионе конференцию с участием экспертов из 25 стран.',
      fullContent:
        'Narxoz Business School провела крупнейшую в регионе конференцию с участием экспертов из 25 стран. Конференция стала платформой для обмена опытом и установления новых партнерств.',
    },
    {
      id: 16,
      image: '/images/alag.png',
      category: 'Программы',
      tags: ['Женское лидерство', 'Развитие'],
      date: '18/07/2025',
      readTime: '4 мин',
      title: 'Программа поддержки женского лидерства',
      description:
        'Запущена специальная программа для развития лидерских качеств у женщин в бизнесе.',
      fullContent:
        'Запущена специальная программа для развития лидерских качеств у женщин в бизнесе. Программа включает менторство, коучинг и сетевые мероприятия.',
    },
  ];

  // Категории для фильтрации
  const categories = ['Все', 'События', 'Достижения', 'Программы', 'Партнерства', 'Инфраструктура'];

  // Фильтрация и поиск
  const filteredNews = allNews.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'Все' || news.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Сортировка
  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(sortedNews.length / newsPerPage);

  // Получаем новости для текущей страницы
  const currentNews = sortedNews.slice((currentPage - 1) * newsPerPage, currentPage * newsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Сброс страницы при изменении фильтров
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-red-600 transition-colors">
              Главная
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Новости</span>
          </nav>
        </div>
      </div>

      {/* Filters and Search Section */}
      <div className="py-8 px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('news.searchPlaceholder', 'Поиск новостей...')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t(`news.${category.toLowerCase().replace(/\s+/g, '')}`, category)}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">{t('news.sortBy', 'Сортировать:')}</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="date">{t('news.sortByDate', 'По дате')}</option>
                <option value="title">{t('news.sortByTitle', 'По названию')}</option>
                <option value="category">{t('news.sortByCategory', 'По категории')}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* News Grid Section */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Info */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              {searchQuery && selectedCategory !== 'Все' 
                ? t('news.foundResultsInCategory', { 
                    count: sortedNews.length, 
                    category: selectedCategory 
                  })
                : searchQuery 
                ? t('news.foundResultsWithQuery', { 
                    count: sortedNews.length, 
                    query: searchQuery 
                  })
                : t('news.foundResults', { count: sortedNews.length })
              }
            </p>
          </div>

          {/* News Grid */}
          {currentNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 auto-rows-fr">
              {currentNews.map((news, index) => (
                <div key={news.id} className="news-card-animate">
                  <NewsCard news={news} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {t('news.noNewsFound', 'Новости не найдены')}
              </h3>
              <p className="text-gray-500">
                {t('news.noNewsFoundDescription', 'Попробуйте изменить параметры поиска или фильтры')}
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalItems={sortedNews.length}
                itemsPerPage={newsPerPage}
              />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
