import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';

const MBAFinTech = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [showDocuments, setShowDocuments] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  
  // Уникальные состояния для FinTech
  const [cryptoCalculator, setCryptoCalculator] = useState({
    amount: 1000,
    crypto: 'BTC',
    fiat: 'USD'
  });
  const [fintechMetrics, setFintechMetrics] = useState({
    globalMarket: 179.8,
    digitalPayments: 9.5,
    blockchain: 19.9,
    insurtech: 5.5
  });
  const [selectedEcosystem, setSelectedEcosystem] = useState('global');
  const [ecosystemData, setEcosystemData] = useState({
    global: { startups: 12000, funding: 135.7, unicorns: 312 },
    europe: { startups: 2800, funding: 45.2, unicorns: 89 },
    asia: { startups: 4200, funding: 52.1, unicorns: 156 },
    america: { startups: 3800, funding: 38.4, unicorns: 67 }
  });

  // Обновление метрик каждые 3 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      setFintechMetrics(prev => ({
        globalMarket: prev.globalMarket + (Math.random() - 0.5) * 0.2,
        digitalPayments: prev.digitalPayments + (Math.random() - 0.5) * 0.1,
        blockchain: prev.blockchain + (Math.random() - 0.5) * 0.15,
        insurtech: prev.insurtech + (Math.random() - 0.5) * 0.08
      }));
    }, 3000);
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

  // Калькулятор криптовалют
  const cryptoRates = {
    BTC: { USD: 43250, EUR: 39800, KZT: 20300000 },
    ETH: { USD: 2650, EUR: 2430, KZT: 1240000 },
    ADA: { USD: 0.48, EUR: 0.44, KZT: 225 },
    DOT: { USD: 7.2, EUR: 6.6, KZT: 3380 }
  };

  const calculateCrypto = () => {
    const rate = cryptoRates[cryptoCalculator.crypto]?.[cryptoCalculator.fiat] || 1;
    return (cryptoCalculator.amount / rate).toFixed(6);
  };

  const modules = [
    {
      title: 'Основы финансовых технологий',
      description:
        'Изучение фундаментальных принципов FinTech, цифровых финансов и инновационных финансовых услуг',
      topics: [
        'Эволюция финансовых технологий и цифровые инновации',
        'Блокчейн и распределенные реестры',
        'Криптовалюты и цифровые активы',
        'Цифровые платежи и мобильный банкинг',
        'Регулирование FinTech и правовые аспекты',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Цифровые банковские услуги',
      description:
        'Изучение современных банковских технологий и цифровых финансовых услуг',
      topics: [
        'Необанки и цифровые банковские платформы',
        'API-банкинг и открытые банковские системы',
        'Цифровая идентификация и KYC/AML',
        'Облачные технологии в банковской сфере',
        'Кибербезопасность в финансовых технологиях',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Инвестиционные технологии',
      description: 'Изучение технологий для инвестиций и управления активами',
      topics: [
        'Робо-эдвайзинг и автоматизированные инвестиции',
        'Алгоритмическая торговля и высокочастотная торговля',
        'Краудфандинг и альтернативные инвестиции',
        'Токенизация активов и цифровые ценные бумаги',
        'Управление портфелем с помощью ИИ',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Страхование и InsurTech',
      description: 'Технологии в страховой индустрии и управлении рисками',
      topics: [
        'Цифровые страховые платформы',
        'Телематика и IoT в страховании',
        'ИИ и машинное обучение в оценке рисков',
        'Микрострахование и инклюзивные финансовые услуги',
        'Регулирование InsurTech',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Устойчивые финансы и GreenTech',
      description: 'Технологии для устойчивого финансирования и зеленых финансов',
      topics: [
        'Зеленые облигации и устойчивое финансирование',
        'Климатические финансы и углеродные рынки',
        'ESG-технологии и отчетность',
        'Возобновляемая энергетика и финансирование',
        'Цифровые технологии для устойчивого развития',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
  ];

  const testimonials = [
    {
      name: 'Алексей ФинТех',
      title: 'Директор по инновациям АО "Цифровой Банк"',
      role: 'Выпускник MBA FinTech',
    },
    {
      name: 'Мария Блокчейн',
      title: 'Основатель стартапа "КриптоФин"',
      role: 'Выпускник MBA FinTech',
    },
    {
      name: 'Дмитрий Цифровой',
      title: 'Руководитель отдела FinTech АО "Народный Банк"',
      role: 'Выпускник MBA FinTech',
    },
    {
      name: 'Елена Инновационная',
      title: 'Консультант по цифровым финансовым услугам',
      role: 'Выпускник MBA FinTech',
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
          <h1 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight">MBA ФИНТЕХ</h1>
          <p className="text-3xl lg:text-4xl mb-6 font-medium">
            (MASTER OF BUSINESS ADMINISTRATION IN FINTECH)
          </p>
          <p className="text-2xl mb-3">Программа для лидеров цифровых финансов</p>
          <p className="text-xl mb-16 opacity-90">Сочетание финансов и технологий будущего</p>
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-[#991E1E] text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              24 месяца
            </div>
            <div className="bg-[#991E1E] text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              24 преподавателя
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
                <img src="/images/Krug.png" alt="MBA FinTech студенты" className="w-96 h-96" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                MBA "Финансовые технологии (FinTech)"
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Специализированная программа MBA для изучения финансовых технологий, блокчейна, 
                  цифровых платежей и инновационных финансовых услуг. Программа готовит лидеров, 
                  способных внедрять цифровые решения в финансовой индустрии.
                </p>
                <p>
                  Вы изучите принципы блокчейна, криптовалют, цифровых банковских услуг, 
                  инвестиционных технологий и InsurTech. Программа сочетает технические знания 
                  с бизнес-стратегией для создания инновационных финансовых решений.
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
                <h3 className="text-xl font-normal">FinTech специализация</h3>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-black tracking-wider mb-2 drop-shadow-lg">
                ФОКУС НА ФИНТЕХЕ
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Глубокое изучение финансовых технологий и цифровых инноваций
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
                24 эксперта
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Преподаватели-практики из FinTech индустрии
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FinTech метрики */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Метрики FinTech рынка</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Глобальный рынок</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">${fintechMetrics.globalMarket.toFixed(1)}B</div>
              <p className="text-sm text-gray-600">Объем рынка FinTech</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Цифровые платежи</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">${fintechMetrics.digitalPayments.toFixed(1)}T</div>
              <p className="text-sm text-gray-600">Объем транзакций</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Блокчейн</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">${fintechMetrics.blockchain.toFixed(1)}B</div>
              <p className="text-sm text-gray-600">Рынок блокчейн</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">InsurTech</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">${fintechMetrics.insurtech.toFixed(1)}B</div>
              <p className="text-sm text-gray-600">Рынок InsurTech</p>
            </div>
          </div>
        </div>
      </div>

      {/* Калькулятор криптовалют */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Калькулятор криптовалют</h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Сумма</label>
                <input
                  type="number"
                  value={cryptoCalculator.amount}
                  onChange={(e) => setCryptoCalculator(prev => ({ ...prev, amount: parseFloat(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Криптовалюта</label>
                <select
                  value={cryptoCalculator.crypto}
                  onChange={(e) => setCryptoCalculator(prev => ({ ...prev, crypto: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                >
                  <option value="BTC">Bitcoin (BTC)</option>
                  <option value="ETH">Ethereum (ETH)</option>
                  <option value="ADA">Cardano (ADA)</option>
                  <option value="DOT">Polkadot (DOT)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Валюта</label>
                <select
                  value={cryptoCalculator.fiat}
                  onChange={(e) => setCryptoCalculator(prev => ({ ...prev, fiat: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="KZT">KZT</option>
                </select>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#991E1E] mb-2">
                  {calculateCrypto()} {cryptoCalculator.crypto}
                </div>
                <p className="text-gray-600">
                  {cryptoCalculator.amount} {cryptoCalculator.fiat} = {calculateCrypto()} {cryptoCalculator.crypto}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FinTech экосистема */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FinTech экосистема по регионам</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(ecosystemData).map(([region, data]) => (
              <div
                key={region}
                className={`bg-white p-6 rounded-xl shadow-sm border-2 cursor-pointer transition-all ${
                  selectedEcosystem === region ? 'border-[#991E1E] shadow-lg' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedEcosystem(region)}
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                    {region === 'global' ? 'Глобально' : region === 'europe' ? 'Европа' : region === 'asia' ? 'Азия' : 'Америка'}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-[#991E1E]">{data.startups.toLocaleString()}</div>
                      <p className="text-sm text-gray-600">Стартапов</p>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#991E1E]">${data.funding}B</div>
                      <p className="text-sm text-gray-600">Инвестиции</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#991E1E]">{data.unicorns}</div>
                      <p className="text-sm text-gray-600">Единорогов</p>
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
                24 месяца
              </button>
              <button className="bg-[#991E1E] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-[#8B1A1A] transition-colors">
                18 модулей
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

export default MBAFinTech; 