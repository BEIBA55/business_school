import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';

const MScFinance = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [showDocuments, setShowDocuments] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  
  // Уникальные состояния для MSc Finance
  const [marketData, setMarketData] = useState({
    sp500: 4523.67,
    nasdaq: 14265.89,
    dow: 34567.12,
    bitcoin: 43250.00
  });
  const [selectedMarket, setSelectedMarket] = useState('global');
  const [marketMetrics, setMarketMetrics] = useState({
    global: { volume: 156.7, volatility: 18.5, correlation: 0.72 },
    europe: { volume: 89.3, volatility: 22.1, correlation: 0.68 },
    asia: { volume: 234.8, volatility: 25.7, correlation: 0.75 },
    emerging: { volume: 67.2, volatility: 31.4, correlation: 0.45 }
  });
  const [portfolioCalculator, setPortfolioCalculator] = useState({
    stocks: 60,
    bonds: 30,
    alternatives: 10,
    riskTolerance: 'moderate'
  });

  // Обновление рыночных данных каждые 6 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => ({
        sp500: prev.sp500 + (Math.random() - 0.5) * 10,
        nasdaq: prev.nasdaq + (Math.random() - 0.5) * 25,
        dow: prev.dow + (Math.random() - 0.5) * 15,
        bitcoin: prev.bitcoin + (Math.random() - 0.5) * 500
      }));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Заявка отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  // Калькулятор портфеля
  const calculatePortfolioRisk = () => {
    const riskMultipliers = {
      'conservative': 0.6,
      'moderate': 1.0,
      'aggressive': 1.8
    };
    const multiplier = riskMultipliers[portfolioCalculator.riskTolerance] || 1.0;
    const weightedRisk = (portfolioCalculator.stocks * 0.8 + portfolioCalculator.bonds * 0.3 + portfolioCalculator.alternatives * 1.2) / 100;
    return (weightedRisk * multiplier * 100).toFixed(1);
  };

  const modules = [
    {
      title: 'Корпоративные финансы',
      description:
        'Изучение принципов управления корпоративными финансами и принятия инвестиционных решений',
      topics: [
        'Структура капитала и стоимость финансирования',
        'Дивидендная политика и управление денежными потоками',
        'Слияния и поглощения (M&A)',
        'Корпоративное управление и финансовая прозрачность',
        'Международные корпоративные финансы',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Инвестиционный анализ',
      description:
        'Изучение методов анализа инвестиций и управления портфелем ценных бумаг',
      topics: [
        'Теория портфельных инвестиций и диверсификация',
        'Анализ ценных бумаг и оценка активов',
        'Производные финансовые инструменты',
        'Альтернативные инвестиции и хедж-фонды',
        'Управление рисками инвестиционного портфеля',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Финансовые рынки и институты',
      description: 'Изучение структуры финансовых рынков и их участников',
      topics: [
        'Структура и функционирование финансовых рынков',
        'Банковские операции и управление рисками',
        'Центральные банки и денежно-кредитная политика',
        'Регулирование финансовых рынков',
        'Международные финансовые рынки',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Финансовое моделирование',
      description: 'Разработка финансовых моделей для анализа и прогнозирования',
      topics: [
        'Финансовое моделирование в Excel',
        'Прогнозирование финансовых показателей',
        'Анализ чувствительности и сценариев',
        'Монте-Карло симуляции',
        'Временные ряды и эконометрика',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Финансовые технологии',
      description: 'Изучение современных финансовых технологий и их влияния на индустрию',
      topics: [
        'Блокчейн и криптовалюты в финансах',
        'Цифровые платежи и мобильный банкинг',
        'Искусственный интеллект в финансовых услугах',
        'RegTech и FinTech регулирование',
        'Устойчивые финансы и ESG инвестиции',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
  ];

  const testimonials = [
    {
      name: 'Анна Финансовая',
      title: 'Финансовый аналитик АО "Инвестиционный Банк"',
      role: 'Выпускник MSc Finance',
    },
    {
      name: 'Михаил Инвестиционный',
      title: 'Портфельный менеджер АО "Управляющая Компания"',
      role: 'Выпускник MSc Finance',
    },
    {
      name: 'Елена Корпоративная',
      title: 'Директор по финансам ТОО "Корпорация"',
      role: 'Выпускник MSc Finance',
    },
    {
      name: 'Дмитрий Рыночный',
      title: 'Трейдер АО "Брокерская Компания"',
      role: 'Выпускник MSc Finance',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white py-48 px-8"
        style={{ backgroundImage: 'url(/images/Fon.png)' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight">MSC IN FINANCE</h1>
          <p className="text-3xl lg:text-4xl mb-6 font-medium">
            (MASTER OF SCIENCE IN FINANCE)
          </p>
          <p className="text-2xl mb-3">Магистр наук в области финансов</p>
          <p className="text-xl mb-16 opacity-90">Глубокое изучение финансовых теорий и практик</p>
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-[#991E1E] text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              18 месяцев
            </div>
            <div className="bg-[#991E1E] text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              16 преподавателей
            </div>
            <div className="bg-[#991E1E] text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              Weekend формат обучения
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-24 px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <img src="/images/Krug.png" alt="MSc Finance студенты" className="w-96 h-96" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                MSc in Finance
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Программа магистра наук в области финансов для специалистов, желающих углубить 
                  знания в финансовой сфере. Программа сочетает теоретические основы с практическими 
                  навыками финансового анализа и управления.
                </p>
                <p>
                  Вы изучите корпоративные финансы, инвестиционный анализ, финансовые рынки, 
                  финансовое моделирование и современные финансовые технологии. Программа готовит 
                  специалистов для работы в финансовых институтах, корпорациях и консалтинге.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#991E1E] text-white p-8 rounded-3xl h-80 relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-normal">Финансовая специализация</h3>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-black tracking-wider mb-2 drop-shadow-lg">
                ФОКУС НА ФИНАНСАХ
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Глубокое изучение финансовых теорий и практических навыков
              </p>
            </div>

            <div className="bg-[#991E1E] text-white p-8 rounded-3xl h-80 relative">
              <div className="mb-4">
                <h3 className="text-3xl font-black tracking-wider drop-shadow-lg">20 человек</h3>
              </div>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">
                Небольшие группы для эффективного обучения и нетворкинга
              </p>
              <div className="absolute bottom-6 left-8 text-xs opacity-75">Важно</div>
              <div className="absolute bottom-6 right-8">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-[#991E1E] text-white p-8 rounded-3xl h-80 relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-normal">Эксперты</h3>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-black tracking-wider mb-3 drop-shadow-lg">
                16 экспертов
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Преподаватели-практики из финансовой индустрии
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Рыночные данные */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Рыночные данные в реальном времени</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">S&P 500</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">{marketData.sp500.toFixed(2)}</div>
              <p className="text-sm text-gray-600">Индекс акций</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">NASDAQ</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">{marketData.nasdaq.toFixed(2)}</div>
              <p className="text-sm text-gray-600">Технологический индекс</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">DOW JONES</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">{marketData.dow.toFixed(2)}</div>
              <p className="text-sm text-gray-600">Промышленный индекс</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">BITCOIN</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">${marketData.bitcoin.toFixed(2)}</div>
              <p className="text-sm text-gray-600">Криптовалюта</p>
            </div>
          </div>
        </div>
      </div>

      {/* Калькулятор портфеля */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Калькулятор инвестиционного портфеля</h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Акции (%)</label>
                <input
                  type="number"
                  value={portfolioCalculator.stocks}
                  onChange={(e) => setPortfolioCalculator(prev => ({ ...prev, stocks: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Облигации (%)</label>
                <input
                  type="number"
                  value={portfolioCalculator.bonds}
                  onChange={(e) => setPortfolioCalculator(prev => ({ ...prev, bonds: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Альтернативы (%)</label>
                <input
                  type="number"
                  value={portfolioCalculator.alternatives}
                  onChange={(e) => setPortfolioCalculator(prev => ({ ...prev, alternatives: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Толерантность к риску</label>
                <select
                  value={portfolioCalculator.riskTolerance}
                  onChange={(e) => setPortfolioCalculator(prev => ({ ...prev, riskTolerance: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                >
                  <option value="conservative">Консервативная</option>
                  <option value="moderate">Умеренная</option>
                  <option value="aggressive">Агрессивная</option>
                </select>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#991E1E] mb-2">
                  {calculatePortfolioRisk()}% риск
                </div>
                <p className="text-gray-600">
                  Оценка риска портфеля
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Карта финансовых рынков */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Финансовые рынки по регионам</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(marketMetrics).map(([market, data]) => (
              <div
                key={market}
                className={`bg-white p-6 rounded-xl shadow-sm border-2 cursor-pointer transition-all ${
                  selectedMarket === market ? 'border-[#991E1E] shadow-lg' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedMarket(market)}
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                    {market === 'global' ? 'Глобальные' : market === 'europe' ? 'Европейские' : market === 'asia' ? 'Азиатские' : 'Развивающиеся'}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-[#991E1E]">${data.volume}B</div>
                      <p className="text-sm text-gray-600">Объем торгов</p>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#991E1E]">{data.volatility}%</div>
                      <p className="text-sm text-gray-600">Волатильность</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#991E1E]">{data.correlation}</div>
                      <p className="text-sm text-gray-600">Корреляция</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program Structure */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Программа обучения</h2>
            <div className="flex gap-4">
              <button className="bg-[#991E1E] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-[#8B1A1A] transition-colors">
                18 месяцев
              </button>
              <button className="bg-[#991E1E] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-[#8B1A1A] transition-colors">
                12 модулей
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden"
              >
                <div
                  className="p-8 cursor-pointer"
                  onClick={() => setActiveModule(activeModule === index ? null : index)}
                >
                                      <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#991E1E] rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Обязательный модуль</div>
                          <div className="text-2xl font-semibold text-[#991E1E]">{module.title}</div>
                        </div>
                      </div>
                      <button className="text-3xl font-bold text-gray-400 hover:text-gray-600 transition-all duration-300 transform hover:scale-110">
                        <span
                          className={`transition-transform duration-300 ${activeModule === index ? 'rotate-45' : 'rotate-0'}`}
                        >
                          +
                        </span>
                      </button>
                    </div>
                </div>

                <div
                  className={`px-8 pb-8 border-t border-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
                    activeModule === index
                      ? 'max-h-[1000px] opacity-100 transform translate-y-0'
                      : 'max-h-0 opacity-0 transform -translate-y-4'
                  }`}
                >
                  <div className="pt-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">{module.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                        <div className="text-sm text-gray-500 mb-1">Продолжительность</div>
                        <div className="text-lg font-semibold text-[#991E1E]">{module.duration}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                        <div className="text-sm text-gray-500 mb-1">Кредиты</div>
                        <div className="text-lg font-semibold text-[#991E1E]">{module.credits}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Основные темы модуля:
                      </h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li
                            key={topicIndex}
                            className="flex items-start transform transition-all duration-300 hover:translate-x-2"
                            style={{ transitionDelay: `${topicIndex * 50}ms` }}
                          >
                            <span className="text-[#991E1E] mr-3 mt-2">•</span>
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div id="application-form" className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 slide-in-up">
              Подать заявку на обучение
            </h2>
            <p className="text-xl text-gray-600 slide-in-up">
              Заполните форму, и мы свяжемся с вами для консультации
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg slide-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EditText
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="h-12"
              />
              <EditText
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="h-12"
              />
              <EditText
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="h-12"
              />
              <EditText
                placeholder="Компания"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="h-12"
              />
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={handleSubmit}
                className="bg-[#991E1E] text-white px-12 py-4 text-lg font-medium hover:bg-[#8B1A1A] transition-colors shadow-lg hover:shadow-xl rounded-lg"
              >
                Отправить заявку
              </Button>
              <p className="text-gray-500 text-sm mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MScFinance; 