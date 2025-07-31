import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';

const MBACreative = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [showDocuments, setShowDocuments] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  // Креативные метрики
  const [creativeMetrics, setCreativeMetrics] = useState({
    innovationIndex: 0,
    marketGrowth: 0,
    creativeRevenue: 0,
    talentDemand: 0,
  });

  // Портфолио проектов
  const [selectedProject, setSelectedProject] = useState(0);
  const [projects] = useState([
    {
      title: 'Цифровая платформа для креативных индустрий',
      category: 'Технологии',
      description: 'Инновационная платформа для объединения креативных профессионалов и клиентов',
      impact: '15,000+ пользователей',
      revenue: '$2.5M',
    },
    {
      title: 'Устойчивая мода и дизайн',
      category: 'Мода',
      description: 'Экологически ответственная коллекция одежды с использованием переработанных материалов',
      impact: 'Снижение отходов на 40%',
      revenue: '$1.8M',
    },
    {
      title: 'Интерактивные медиа-инсталляции',
      category: 'Медиа',
      description: 'Иммерсивные художественные инсталляции с использованием AR/VR технологий',
      impact: '50,000+ посетителей',
      revenue: '$3.2M',
    },
  ]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Обновление креативных метрик
  useEffect(() => {
    const interval = setInterval(() => {
      setCreativeMetrics({
        innovationIndex: Math.floor(Math.random() * 20) + 80,
        marketGrowth: Math.floor(Math.random() * 15) + 25,
        creativeRevenue: Math.floor(Math.random() * 50) + 150,
        talentDemand: Math.floor(Math.random() * 30) + 70,
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    console.log('Заявка отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  const modules = [
    {
      title: 'Основы креативной экономики',
      description:
        'Изучение концепций креативной экономики, интеллектуальной собственности и творческих индустрий',
      topics: [
        'Концепция креативной экономики и творческих индустрий',
        'Интеллектуальная собственность и авторские права',
        'Креативные кластеры и экосистемы',
        'Цифровизация креативных индустрий',
        'Международные тренды в креативной экономике',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
    },
    {
      title: 'Управление креативными проектами',
      description:
        'Методологии управления творческими проектами и креативными командами',
      topics: [
        'Agile и Scrum в креативных проектах',
        'Управление креативными командами и талантами',
        'Бюджетирование и планирование креативных проектов',
        'Управление рисками в творческих индустриях',
        'Оценка эффективности креативных проектов',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
    },
    {
      title: 'Медиа и развлекательные индустрии',
      description:
        'Стратегии развития в медиа, кино, музыке и игровой индустрии',
      topics: [
        'Цифровые медиа и стриминговые платформы',
        'Кинопроизводство и дистрибуция',
        'Музыкальная индустрия и права исполнителей',
        'Игровая индустрия и eSports',
        'Контент-маркетинг и сторителлинг',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
    },
    {
      title: 'Дизайн и модная индустрия',
      description:
        'Бизнес-модели в дизайне, моде и люксовых брендах',
      topics: [
        'Управление модными брендами и коллекциями',
        'Устойчивая мода и экологический дизайн',
        'Люксовые бренды и премиум-сегмент',
        'Дизайн-мышление и инновации',
        'Модная розничная торговля и e-commerce',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
    },
    {
      title: 'Креативный маркетинг и брендинг',
      description:
        'Стратегии креативного маркетинга и управления брендами',
      topics: [
        'Креативная стратегия и позиционирование брендов',
        'Цифровой маркетинг в креативных индустриях',
        'Influencer marketing и социальные медиа',
        'Креативная реклама и коммуникации',
        'Измерение эффективности креативного маркетинга',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
    },
  ];

  const testimonials = [
    {
      name: 'Айнур Абдрахманова',
      position: 'Креативный директор, ТОО "Арт-Студио"',
      text: 'Программа MBA Creative дала мне понимание того, как превратить творческие идеи в прибыльный бизнес. Теперь я руковожу студией с оборотом более 100 миллионов тенге.',
      avatar: '/images/Svetlana.png',
    },
    {
      name: 'Дамир Калиев',
      position: 'Основатель стартапа "КреативЛаб"',
      text: 'Благодаря программе я создал платформу для креативных профессионалов. Сочетание бизнес-знаний и понимания креативных индустрий было идеальным.',
      avatar: '/images/Baurzhan.png',
    },
    {
      name: 'Мария Ким',
      position: 'Директор по развитию, АО "МедиаГрупп"',
      text: 'Программа помогла мне разработать стратегию цифровой трансформации для медиа-компании. Результаты превзошли все ожидания.',
      avatar: '/images/Irina.png',
    },
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
              MBA "Креативная экономика"
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Изучите креативную экономику и научитесь превращать творческие идеи в прибыльный бизнес. 
              Станьте лидером в творческих индустриях
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
          </div>
        </div>
      </div>

      {/* Креативные метрики */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Показатели креативной экономики
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Индекс инноваций</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">{creativeMetrics.innovationIndex}</div>
              <div className="text-sm text-[#991E1E]">Высокий уровень</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Рост рынка</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">{creativeMetrics.marketGrowth}%</div>
              <div className="text-sm text-[#991E1E]">В год</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Доходы индустрии</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">${creativeMetrics.creativeRevenue} млрд</div>
              <div className="text-sm text-[#991E1E]">Глобально</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Спрос на таланты</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">{creativeMetrics.talentDemand}%</div>
              <div className="text-sm text-[#991E1E]">Рост вакансий</div>
            </div>
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
                Программа MBA "Креативная экономика" предназначена для профессионалов, 
                которые хотят развивать бизнес в творческих индустриях. Мы изучаем 
                медиа, дизайн, моду, развлечения и другие креативные секторы.
              </p>
              <p className="mb-6">
                Вы научитесь управлять креативными проектами, развивать бренды, 
                монетизировать интеллектуальную собственность и создавать устойчивые 
                бизнес-модели в творческих индустриях.
              </p>
            </div>

            {/* Портфолио проектов */}
            <div className="bg-gradient-to-r from-gray-50 to-red-50 p-6 rounded-xl mb-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Портфолио успешных проектов
              </h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`bg-white p-4 rounded-lg cursor-pointer transition-all ${
                      selectedProject === index ? 'ring-2 ring-[#991E1E] shadow-lg' : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedProject(index)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">{project.title}</h4>
                      <span className="text-xs bg-[#991E1E] text-white px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#991E1E] font-medium">Влияние: {project.impact}</span>
                      <span className="text-[#991E1E] font-medium">Доход: {project.revenue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-[#991E1E] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Креативное мышление
                </h3>
                <p className="text-gray-600">
                  Развитие инновационного мышления и методов генерации 
                  креативных идей для бизнеса.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-[#991E1E] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Управление проектами
                </h3>
                <p className="text-gray-600">
                  Методологии управления креативными проектами и 
                  эффективной работы с творческими командами.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-[#991E1E] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Интеллектуальная собственность
                </h3>
                <p className="text-gray-600">
                  Защита и монетизация интеллектуальной собственности, 
                  авторских прав и торговых марок.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-[#991E1E] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Цифровая трансформация
                </h3>
                <p className="text-gray-600">
                  Внедрение цифровых технологий в креативные индустрии 
                  и развитие онлайн-платформ.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
                              <span className="text-[#991E1E] mr-2">•</span>
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
                  className="w-full bg-[#991E1E] text-white py-3 rounded-md hover:bg-[#8B1A1A] transition-colors"
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
                  <div key={index} className="border-l-4 border-[#991E1E] pl-4">
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
    </div>
  );
};

export default MBACreative; 