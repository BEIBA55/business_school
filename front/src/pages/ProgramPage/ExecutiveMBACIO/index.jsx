import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';

const ExecutiveMBACIO = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [showDocuments, setShowDocuments] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  
  // Уникальные состояния для CIO
  const [techTrends, setTechTrends] = useState({
    cloud: 89.2,
    ai: 76.8,
    cybersecurity: 94.5,
    iot: 67.3
  });
  const [selectedTechnology, setSelectedTechnology] = useState('cloud');
  const [techData, setTechData] = useState({
    cloud: { adoption: 89, growth: 23.5, investment: 178.6 },
    ai: { adoption: 67, growth: 34.2, investment: 93.5 },
    cybersecurity: { adoption: 92, growth: 18.7, investment: 156.8 },
    iot: { adoption: 54, growth: 28.9, investment: 45.2 }
  });
  const [projectROI, setProjectROI] = useState({
    investment: 500000,
    timeframe: 24,
    efficiency: 25,
    type: 'digital-transformation'
  });

  // Обновление метрик каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setTechTrends(prev => ({
        cloud: prev.cloud + (Math.random() - 0.5) * 0.3,
        ai: prev.ai + (Math.random() - 0.5) * 0.4,
        cybersecurity: prev.cybersecurity + (Math.random() - 0.5) * 0.2,
        iot: prev.iot + (Math.random() - 0.5) * 0.3
      }));
    }, 5000);
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

  // Калькулятор ROI ИТ-проектов
  const calculateProjectROI = () => {
    const efficiencyMultipliers = {
      'digital-transformation': 2.8,
      'cloud-migration': 1.9,
      'security-upgrade': 3.2,
      'automation': 2.4,
      'data-analytics': 2.1
    };
    const multiplier = efficiencyMultipliers[projectROI.type] || 2.5;
    const annualSavings = (projectROI.investment * projectROI.efficiency / 100) * multiplier;
    const totalROI = ((annualSavings * projectROI.timeframe / 12) - projectROI.investment) / projectROI.investment * 100;
    return totalROI.toFixed(1);
  };

  const modules = [
    {
      title: 'Стратегическое управление ИТ',
      description:
        'Изучение принципов стратегического управления информационными технологиями и цифровой трансформации',
      topics: [
        'ИТ-стратегия и выравнивание с бизнес-целями',
        'Цифровая трансформация и инновации',
        'Управление ИТ-портфелем и приоритизация проектов',
        'ИТ-архитектура и технологическая дорожная карта',
        'Управление изменениями в ИТ-организации',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Управление ИТ-проектами и программами',
      description:
        'Развитие навыков управления крупными ИТ-проектами и программами цифровой трансформации',
      topics: [
        'Методологии управления ИТ-проектами (Agile, Scrum, DevOps)',
        'Управление рисками в ИТ-проектах',
        'Управление качеством и тестирование',
        'Управление поставщиками и аутсорсинг',
        'Масштабирование ИТ-решений',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'ИТ-безопасность и управление рисками',
      description: 'Стратегии обеспечения информационной безопасности и управления киберрисками',
      topics: [
        'Стратегия информационной безопасности',
        'Управление киберрисками и инцидентами',
        'Соответствие требованиям и регуляторные аспекты',
        'Безопасность облачных решений',
        'Осведомленность о безопасности и обучение персонала',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Управление данными и аналитика',
      description: 'Стратегии управления данными и использования аналитики для принятия решений',
      topics: [
        'Стратегия управления данными и Data Governance',
        'Большие данные и аналитика',
        'Искусственный интеллект и машинное обучение',
        'Бизнес-аналитика и отчетность',
        'Приватность данных и GDPR',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'ИТ-лидерство и управление командой',
      description: 'Развитие лидерских качеств и навыков управления ИТ-командами',
      topics: [
        'Лидерство в ИТ и управление изменениями',
        'Управление ИТ-талантами и развитие команды',
        'Коммуникация с бизнес-заинтересованными сторонами',
        'Управление конфликтами и переговоры',
        'Эмоциональный интеллект в ИТ-лидерстве',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
  ];

  const testimonials = [
    {
      name: 'Алексей Технологический',
      title: 'CIO АО "Цифровые Технологии"',
      role: 'Выпускник Executive MBA CIO',
    },
    {
      name: 'Мария Информационная',
      title: 'Директор по ИТ АО "Инновационный Банк"',
      role: 'Выпускник Executive MBA CIO',
    },
    {
      name: 'Дмитрий Цифровой',
      title: 'CTO стартапа "ТехноСтарт"',
      role: 'Выпускник Executive MBA CIO',
    },
    {
      name: 'Елена Системная',
      title: 'Руководитель ИТ-департамента АО "Корпорация"',
      role: 'Выпускник Executive MBA CIO',
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
          <h1 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight">EXECUTIVE MBA ДЛЯ CIO</h1>
          <p className="text-3xl lg:text-4xl mb-6 font-medium">
            (EXECUTIVE MBA FOR CHIEF INFORMATION OFFICERS)
          </p>
          <p className="text-2xl mb-3">Программа для ИТ-лидеров цифровой эпохи</p>
          <p className="text-xl mb-16 opacity-90">Стратегическое управление ИТ и цифровая трансформация</p>
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-[#991E1E] text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              12 месяцев
            </div>
            <div className="bg-[#991E1E] text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              18 преподавателей
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
                <img src="/images/Krug.png" alt="Executive MBA CIO студенты" className="w-96 h-96" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Executive MBA для CIO
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Специализированная программа Executive MBA для директоров по информационным 
                  технологиям и руководителей ИТ-подразделений. Программа готовит ИТ-лидеров, 
                  способных стратегически управлять технологиями и вести цифровую трансформацию.
                </p>
                <p>
                  Вы изучите принципы стратегического управления ИТ, управления проектами, 
                  информационной безопасности, управления данными и ИТ-лидерства. Программа 
                  сочетает технические знания с бизнес-стратегией для создания конкурентных преимуществ.
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
                <h3 className="text-xl font-normal">ИТ специализация</h3>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-black tracking-wider mb-2 drop-shadow-lg">
                ФОКУС НА ИТ
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Изучение стратегического управления информационными технологиями
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
                18 экспертов
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Преподаватели-практики из ИТ-индустрии
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Технологические тренды */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Технологические тренды</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Облачные технологии</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">{techTrends.cloud.toFixed(1)}%</div>
              <p className="text-sm text-gray-600">Уровень внедрения</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Искусственный интеллект</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">{techTrends.ai.toFixed(1)}%</div>
              <p className="text-sm text-gray-600">Уровень внедрения</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Кибербезопасность</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">{techTrends.cybersecurity.toFixed(1)}%</div>
              <p className="text-sm text-gray-600">Уровень внедрения</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Интернет вещей</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">{techTrends.iot.toFixed(1)}%</div>
              <p className="text-sm text-gray-600">Уровень внедрения</p>
            </div>
          </div>
        </div>
      </div>

      {/* Калькулятор ROI ИТ-проектов */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Калькулятор ROI ИТ-проектов</h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Инвестиции ($)</label>
                <input
                  type="number"
                  value={projectROI.investment}
                  onChange={(e) => setProjectROI(prev => ({ ...prev, investment: parseFloat(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Срок (месяцы)</label>
                <input
                  type="number"
                  value={projectROI.timeframe}
                  onChange={(e) => setProjectROI(prev => ({ ...prev, timeframe: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Эффективность (%)</label>
                <input
                  type="number"
                  value={projectROI.efficiency}
                  onChange={(e) => setProjectROI(prev => ({ ...prev, efficiency: parseFloat(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Тип проекта</label>
                <select
                  value={projectROI.type}
                  onChange={(e) => setProjectROI(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                >
                  <option value="digital-transformation">Цифровая трансформация</option>
                  <option value="cloud-migration">Миграция в облако</option>
                  <option value="security-upgrade">Обновление безопасности</option>
                  <option value="automation">Автоматизация</option>
                  <option value="data-analytics">Аналитика данных</option>
                </select>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#991E1E] mb-2">
                  {calculateProjectROI()}% ROI
                </div>
                <p className="text-gray-600">
                  Ожидаемая отдача от ИТ-проекта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Карта технологий */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Технологический ландшафт</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techData).map(([tech, data]) => (
              <div
                key={tech}
                className={`bg-white p-6 rounded-xl shadow-sm border-2 cursor-pointer transition-all ${
                  selectedTechnology === tech ? 'border-[#991E1E] shadow-lg' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedTechnology(tech)}
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                    {tech === 'cloud' ? 'Облачные технологии' : tech === 'ai' ? 'ИИ' : tech === 'cybersecurity' ? 'Кибербезопасность' : 'IoT'}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-[#991E1E]">{data.adoption}%</div>
                      <p className="text-sm text-gray-600">Внедрение</p>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#991E1E]">{data.growth}%</div>
                      <p className="text-sm text-gray-600">Рост рынка</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#991E1E]">${data.investment}B</div>
                      <p className="text-sm text-gray-600">Инвестиции</p>
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
                12 месяцев
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

export default ExecutiveMBACIO; 