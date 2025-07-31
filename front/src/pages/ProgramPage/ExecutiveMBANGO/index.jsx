import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';
import PresentationModal from '../../../components/ui/PresentationModal';

const ExecutiveMBANGO = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [showDocuments, setShowDocuments] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [showPresentationModal, setShowPresentationModal] = useState(false);
  
  // Уникальные состояния для NGO
  const [socialImpact, setSocialImpact] = useState({
    beneficiaries: 1250000,
    projects: 450,
    volunteers: 8500,
    funding: 67.3
  });
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [impactData, setImpactData] = useState({
    global: { npos: 10000000, employees: 54000000, volunteers: 97000000, funding: 2.2 },
    europe: { npos: 2800000, employees: 13500000, volunteers: 22000000, funding: 0.8 },
    asia: { npos: 3200000, employees: 18500000, volunteers: 35000000, funding: 0.6 },
    america: { npos: 2100000, employees: 12500000, volunteers: 25000000, funding: 0.5 }
  });
  const [socialROI, setSocialROI] = useState({
    investment: 100000,
    beneficiaries: 1000,
    impact: 'education'
  });

  // Обновление метрик каждые 4 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      setSocialImpact(prev => ({
        beneficiaries: prev.beneficiaries + Math.floor((Math.random() - 0.5) * 1000),
        projects: prev.projects + Math.floor((Math.random() - 0.5) * 5),
        volunteers: prev.volunteers + Math.floor((Math.random() - 0.5) * 50),
        funding: prev.funding + (Math.random() - 0.5) * 0.1
      }));
    }, 4000);
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

  const handleDownloadPresentation = () => {
    // Создаем ссылку для скачивания презентации Executive MBA NGO
    const link = document.createElement('a');
    link.href = '/presentations/EMBA управление в сфере НПО и НКО (2).pdf';
    link.download = 'Executive-MBA-NGO-presentation.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Калькулятор социального ROI
  const calculateSocialROI = () => {
    const impactMultipliers = {
      education: 3.2,
      healthcare: 2.8,
      environment: 4.1,
      poverty: 2.5,
      community: 3.6
    };
    const multiplier = impactMultipliers[socialROI.impact] || 3.0;
    return ((socialROI.beneficiaries * multiplier) / socialROI.investment * 100).toFixed(1);
  };

  const modules = [
    {
      title: 'Стратегическое управление НПО/НКО',
      description:
        'Изучение принципов стратегического управления некоммерческими организациями и социальными предприятиями',
      topics: [
        'Миссия, видение и стратегическое планирование НПО',
        'Управление заинтересованными сторонами',
        'Партнерства и коллаборации в социальной сфере',
        'Управление изменениями в некоммерческих организациях',
        'Социальное воздействие и его измерение',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Финансовое управление и устойчивость',
      description:
        'Изучение принципов финансового управления и обеспечения устойчивости НПО/НКО',
      topics: [
        'Финансовое планирование и бюджетирование НПО',
        'Диверсификация источников финансирования',
        'Грантовое управление и отчетность',
        'Социальное предпринимательство и доходные проекты',
        'Управление рисками и внутренний контроль',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Управление проектами и программами',
      description: 'Развитие навыков управления социальными проектами и программами',
      topics: [
        'Жизненный цикл социальных проектов',
        'Логико-структурный подход в планировании',
        'Управление командой и волонтерами',
        'Мониторинг и оценка социальных программ',
        'Масштабирование успешных социальных инициатив',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Коммуникации и фандрайзинг',
      description: 'Стратегии коммуникации и привлечения ресурсов для НПО/НКО',
      topics: [
        'Стратегические коммуникации и PR',
        'Цифровой маркетинг для социальных организаций',
        'Фандрайзинг и работа с донорами',
        'Корпоративная социальная ответственность',
        'Работа со СМИ и общественностью',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
    {
      title: 'Лидерство и управление командой',
      description: 'Развитие лидерских качеств и навыков управления в социальной сфере',
      topics: [
        'Лидерство в некоммерческих организациях',
        'Управление разнообразными командами',
        'Мотивация и развитие персонала',
        'Управление конфликтами и переговоры',
        'Эмоциональный интеллект в социальной работе',
      ],
      duration: '3 дня',
      credits: '6 ECTS',
    },
  ];

  const testimonials = [
    {
      name: 'Анна Социальная',
      title: 'Директор ОФ "Социальные Инициативы"',
      role: 'Выпускник Executive MBA NGO',
    },
    {
      name: 'Михаил Гуманитарный',
      title: 'Руководитель АО "Международная Помощь"',
      role: 'Выпускник Executive MBA NGO',
    },
    {
      name: 'Елена Благотворительная',
      title: 'Основатель НПО "Детская Поддержка"',
      role: 'Выпускник Executive MBA NGO',
    },
    {
      name: 'Дмитрий Общественный',
      title: 'Директор по развитию АО "Социальные Проекты"',
      role: 'Выпускник Executive MBA NGO',
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
          <h1 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight">EXECUTIVE MBA ДЛЯ НПО/НКО</h1>
          <p className="text-3xl lg:text-4xl mb-6 font-medium">
            (EXECUTIVE MBA FOR NGO/NPO LEADERS)
          </p>
          <p className="text-2xl mb-3">Программа для лидеров социальных изменений</p>
          <p className="text-xl mb-16 opacity-90">Управление некоммерческими организациями и социальными проектами</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                               <Button
                     onClick={() => setShowPresentationModal(true)}
                     className="bg-[#991E1E] text-white px-8 py-3 rounded-lg hover:bg-[#7A1818] transition-colors"
                   >
                     Скачать презентацию
                   </Button>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-[#991E1E] text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              12 месяцев
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
                <img src="/images/Krug.png" alt="Executive MBA NGO студенты" className="w-96 h-96" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Executive MBA для руководителей НПО/НКО
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Специализированная программа Executive MBA для руководителей некоммерческих 
                  организаций и социальных предприятий. Программа готовит лидеров, способных 
                  создавать устойчивые социальные изменения и эффективно управлять НПО/НКО.
                </p>
                <p>
                  Вы изучите принципы стратегического управления НПО, финансового планирования, 
                  управления проектами, фандрайзинга и лидерства в социальной сфере. Программа 
                  сочетает бизнес-подход с социальной миссией.
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
                <h3 className="text-xl font-normal">Социальная специализация</h3>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-black tracking-wider mb-2 drop-shadow-lg">
                ФОКУС НА НПО
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Изучение управления некоммерческими организациями и социальными проектами
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
                Преподаватели-практики из социальной сферы
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Метрики социального воздействия */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Метрики социального воздействия</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Бенефициары</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">{socialImpact.beneficiaries.toLocaleString()}</div>
              <p className="text-sm text-gray-600">Людей получили помощь</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Проекты</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">{socialImpact.projects}</div>
              <p className="text-sm text-gray-600">Реализованных проектов</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Волонтеры</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">{socialImpact.volunteers.toLocaleString()}</div>
              <p className="text-sm text-gray-600">Активных волонтеров</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Финансирование</h3>
                <div className="w-12 h-12 bg-[#991E1E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#991E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#991E1E] mb-2">${socialImpact.funding.toFixed(1)}M</div>
              <p className="text-sm text-gray-600">Привлеченных средств</p>
            </div>
          </div>
        </div>
      </div>

      {/* Калькулятор социального ROI */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Калькулятор социального ROI</h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Инвестиции ($)</label>
                <input
                  type="number"
                  value={socialROI.investment}
                  onChange={(e) => setSocialROI(prev => ({ ...prev, investment: parseFloat(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Бенефициары</label>
                <input
                  type="number"
                  value={socialROI.beneficiaries}
                  onChange={(e) => setSocialROI(prev => ({ ...prev, beneficiaries: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Область воздействия</label>
                <select
                  value={socialROI.impact}
                  onChange={(e) => setSocialROI(prev => ({ ...prev, impact: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#991E1E] focus:border-transparent"
                >
                  <option value="education">Образование</option>
                  <option value="healthcare">Здравоохранение</option>
                  <option value="environment">Экология</option>
                  <option value="poverty">Борьба с бедностью</option>
                  <option value="community">Развитие сообществ</option>
                </select>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#991E1E] mb-2">
                  {calculateSocialROI()}% ROI
                </div>
                <p className="text-gray-600">
                  Социальная отдача от инвестиций
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Карта НПО сектора */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">НПО сектор по регионам</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(impactData).map(([region, data]) => (
              <div
                key={region}
                className={`bg-white p-6 rounded-xl shadow-sm border-2 cursor-pointer transition-all ${
                  selectedRegion === region ? 'border-[#991E1E] shadow-lg' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedRegion(region)}
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                    {region === 'global' ? 'Глобально' : region === 'europe' ? 'Европа' : region === 'asia' ? 'Азия' : 'Америка'}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-[#991E1E]">{data.npos.toLocaleString()}</div>
                      <p className="text-sm text-gray-600">НПО</p>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#991E1E]">{data.employees.toLocaleString()}</div>
                      <p className="text-sm text-gray-600">Сотрудников</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#991E1E]">{data.volunteers.toLocaleString()}</div>
                      <p className="text-sm text-gray-600">Волонтеров</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#991E1E]">${data.funding}T</div>
                      <p className="text-sm text-gray-600">Объем сектора</p>
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
      
      <PresentationModal
        isOpen={showPresentationModal}
        onClose={() => setShowPresentationModal(false)}
        onDownload={handleDownloadPresentation}
        programName="Executive MBA для НПО/НКО"
      />
    </div>
  );
};

export default ExecutiveMBANGO; 