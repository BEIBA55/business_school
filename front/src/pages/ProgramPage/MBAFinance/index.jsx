import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';
import PresentationModal from '../../../components/ui/PresentationModal';

const MBAFinance = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [showDocuments, setShowDocuments] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [showPresentationModal, setShowPresentationModal] = useState(false);

  // Финансовые калькуляторы
  const [calculatorData, setCalculatorData] = useState({
    investment: 100000,
    rate: 8,
    years: 5,
    monthly: 1000,
  });

  const [financialMetrics, setFinancialMetrics] = useState({
    roi: 0,
    npv: 0,
    irr: 0,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCalculatorChange = (field, value) => {
    setCalculatorData((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
  };

  // Расчет финансовых метрик
  useEffect(() => {
    const { investment, rate, years, monthly } = calculatorData;
    const monthlyRate = rate / 100 / 12;
    const totalMonths = years * 12;
    
    // ROI
    const totalReturn = monthly * totalMonths;
    const roi = ((totalReturn - investment) / investment) * 100;
    
    // NPV
    let npv = -investment;
    for (let i = 1; i <= totalMonths; i++) {
      npv += monthly / Math.pow(1 + monthlyRate, i);
    }
    
    // IRR (упрощенный расчет)
    const irr = rate + (roi > 0 ? 2 : -2);
    
    setFinancialMetrics({
      roi: roi.toFixed(2),
      npv: npv.toFixed(0),
      irr: irr.toFixed(2),
    });
  }, [calculatorData]);

  const handleSubmit = () => {
    console.log('Заявка отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  const handleDownloadPresentation = () => {
    // Создаем ссылку для скачивания презентации MBA Finance
    const link = document.createElement('a');
    link.href = '/presentations/Презентация Прикладных финансов Mba.pdf';
    link.download = 'MBA-Finance-presentation.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const modules = [
    {
      title: 'Финансовый анализ и отчетность',
      description:
        'Глубокое изучение финансовой отчетности и аналитических методов для принятия инвестиционных решений',
      topics: [
        'Анализ финансовых коэффициентов и ключевых показателей',
        'Методы оценки финансового состояния компании',
        'Прогнозирование финансовых результатов',
        'Международные стандарты финансовой отчетности (МСФО)',
        'Аудит и внутренний контроль',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
    },
    {
      title: 'Корпоративные финансы',
      description:
        'Управление капиталом компании, структура финансирования и дивидендная политика',
      topics: [
        'Структура капитала и стоимость финансирования',
        'Дивидендная политика и выкуп акций',
        'Слияния и поглощения (M&A)',
        'Управление ликвидностью и денежными потоками',
        'Корпоративное управление и финансовая прозрачность',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
    },
    {
      title: 'Инвестиционный анализ',
      description:
        'Методы оценки инвестиционных проектов и портфельное управление',
      topics: [
        'Методы дисконтирования денежных потоков (DCF)',
        'Анализ чувствительности и сценариев',
        'Реальные опционы и гибкость в инвестициях',
        'Портфельная теория и диверсификация',
        'Управление рисками инвестиционных проектов',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
    },
    {
      title: 'Финансовые рынки и инструменты',
      description:
        'Изучение финансовых рынков, инструментов и торговых стратегий',
      topics: [
        'Структура и функционирование финансовых рынков',
        'Акции, облигации и производные инструменты',
        'Валютные рынки и международные финансы',
        'Алгоритмическая торговля и количественные методы',
        'Регулирование финансовых рынков',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
    },
    {
      title: 'Управление рисками',
      description:
        'Идентификация, оценка и управление финансовыми рисками',
      topics: [
        'Классификация и измерение финансовых рисков',
        'Хеджирование и управление валютными рисками',
        'Кредитные риски и управление дебиторской задолженностью',
        'Операционные риски и внутренний контроль',
        'Стресс-тестирование и сценарный анализ',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
    },
  ];

  const testimonials = [
    {
      name: 'Александр Петров',
      position: 'Финансовый директор, ТОО "Алматы Финанс"',
      text: 'Программа MBA Finance дала мне глубокое понимание современных финансовых инструментов и методов анализа. Теперь я могу принимать более обоснованные инвестиционные решения.',
      avatar: '/images/Aset.png',
    },
    {
      name: 'Мария Ким',
      position: 'Руководитель инвестиционного отдела, АО "Капитал Банк"',
      text: 'Практические кейсы и работа с реальными финансовыми данными помогли мне развить аналитическое мышление. Программа превзошла все ожидания.',
      avatar: '/images/Gulmira.png',
    },
    {
      name: 'Дамир Нурланов',
      position: 'Портфельный менеджер, АО "ЦентрСекьюритиз"',
      text: 'Сочетание теории и практики, современные финансовые модели и опытные преподаватели - все это делает программу уникальной в регионе.',
      avatar: '/images/Talgat.png',
    },
  ];

  // Финансовые метрики рынка (имитация)
  const marketMetrics = [
    { label: 'KASE Index', value: '2,847.3', change: '+1.2%', color: 'text-green-600' },
    { label: 'USD/KZT', value: '456.78', change: '-0.3%', color: 'text-red-600' },
    { label: 'EUR/KZT', value: '498.45', change: '+0.1%', color: 'text-green-600' },
    { label: 'Gold (USD/oz)', value: '2,045.60', change: '+0.8%', color: 'text-green-600' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#991E1E] via-[#8B1A1A] to-[#7A1818] text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MBA Программа Прикладных Финансов
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Станьте экспертом в области финансов с глубоким пониманием современных финансовых инструментов, 
              методов анализа и управления инвестициями
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">24 месяца</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">20 преподавателей</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">Weekend формат</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                 <Button
                     onClick={() => setShowPresentationModal(true)}
                     className="bg-[#991E1E] text-white px-8 py-3 rounded-lg hover:bg-[#7A1818] transition-colors"
                   >
                     Скачать презентацию
                   </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Финансовые метрики рынка */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Финансовые индикаторы рынка
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                <div className="text-xl font-bold text-gray-800 mb-1">{metric.value}</div>
                <div className={`text-sm font-medium ${metric.color}`}>{metric.change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Основной контент */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              О программе
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p className="mb-6">
                Программа MBA "Прикладные финансы" разработана для профессионалов, 
                стремящихся углубить свои знания в области финансов и инвестиций. 
                Программа сочетает теоретические основы с практическими навыками, 
                необходимыми для успешной карьеры в финансовом секторе.
              </p>
              <p className="mb-6">
                Вы изучите современные методы финансового анализа, управления рисками, 
                портфельного управления и корпоративных финансов. Программа включает 
                работу с реальными финансовыми данными, кейсы ведущих компаний и 
                практические проекты.
              </p>
            </div>

            {/* Интерактивный финансовый калькулятор */}
            <div className="bg-gradient-to-r from-gray-50 to-red-50 p-6 rounded-xl mb-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Финансовый калькулятор
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Начальная инвестиция (₸)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.investment}
                    onChange={(e) => handleCalculatorChange('investment', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Годовая ставка (%)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.rate}
                    onChange={(e) => handleCalculatorChange('rate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Срок (лет)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.years}
                    onChange={(e) => handleCalculatorChange('years', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ежемесячный вклад (₸)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.monthly}
                    onChange={(e) => handleCalculatorChange('monthly', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              {/* Результаты расчета */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600">ROI</div>
                  <div className="text-2xl font-bold text-[#991E1E]">{financialMetrics.roi}%</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600">NPV</div>
                  <div className="text-2xl font-bold text-[#991E1E]">₸{financialMetrics.npv}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600">IRR</div>
                  <div className="text-2xl font-bold text-[#991E1E]">{financialMetrics.irr}%</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-[#991E1E] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Практический опыт
                </h3>
                <p className="text-gray-600">
                  Работа с реальными финансовыми данными, участие в торговых симуляциях 
                  и практические проекты с ведущими финансовыми компаниями.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-[#991E1E] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Международные стандарты
                </h3>
                <p className="text-gray-600">
                  Изучение МСФО, международных финансовых инструментов и 
                  лучших практик мировых финансовых рынков.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-[#991E1E] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Сетевое сообщество
                </h3>
                <p className="text-gray-600">
                  Взаимодействие с профессионалами финансового сектора, 
                  менторами и выпускниками программы.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-[#991E1E] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Карьерный рост
                </h3>
                <p className="text-gray-600">
                  Подготовка к позициям финансового директора, инвестиционного 
                  аналитика, портфельного менеджера и других ключевых ролей.
                </p>
              </div>
            </div>

            {/* Program Structure */}
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Структура программы
            </h2>
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveModule(activeModule === index ? null : index)}
                  >
                                         <div className="flex items-center">
                       <div className="w-8 h-8 bg-[#991E1E] rounded-lg flex items-center justify-center mr-4">
                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                         </svg>
                       </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {module.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {module.duration} • {module.credits}
                        </p>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeModule === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeModule === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 mb-4">{module.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Ключевые темы:
                        </h4>
                        <ul className="space-y-1">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Form */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Подать заявку
              </h3>
              <div className="space-y-4">
                <EditText
                  placeholder="ФИО"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
                <EditText
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                <EditText
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
                <EditText
                  placeholder="Компания"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-red-800 text-white py-3 rounded-md hover:bg-red-700 transition-colors"
                >
                  Отправить заявку
                </Button>
              </div>
            </div>

            {/* Program Details */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Детали программы
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Длительность:</span>
                  <span className="font-semibold">24 месяца</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Формат:</span>
                  <span className="font-semibold">Weekend</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Язык:</span>
                  <span className="font-semibold">Русский, английский</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Преподаватели:</span>
                  <span className="font-semibold">20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ECTS:</span>
                  <span className="font-semibold">120</span>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Отзывы выпускников
              </h3>
              <div className="space-y-4">
                {testimonials.slice(0, 2).map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-red-800 pl-4">
                    <p className="text-sm text-gray-600 mb-2">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <div className="text-sm font-semibold text-gray-800">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <PresentationModal
        isOpen={showPresentationModal}
        onClose={() => setShowPresentationModal(false)}
        onDownload={handleDownloadPresentation}
        programName="MBA Программа Прикладных Финансов"
      />
    </div>
  );
};

export default MBAFinance; 