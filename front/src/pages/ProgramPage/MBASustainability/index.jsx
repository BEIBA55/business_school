import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';

const MBASustainability = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [showDocuments, setShowDocuments] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  // Экологические метрики
  const [sustainabilityMetrics, setSustainabilityMetrics] = useState({
    carbonFootprint: 0,
    energyEfficiency: 0,
    wasteReduction: 0,
    socialImpact: 0,
  });

  // Интерактивная карта устойчивого развития
  const [selectedRegion, setSelectedRegion] = useState('KZ');
  const [sustainabilityData, setSustainabilityData] = useState({
    KZ: { score: 65, initiatives: 12, companies: 45 },
    EU: { score: 78, initiatives: 28, companies: 156 },
    US: { score: 72, initiatives: 22, companies: 89 },
    ASIA: { score: 58, initiatives: 15, companies: 67 },
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Расчет экологических метрик
  useEffect(() => {
    const interval = setInterval(() => {
      setSustainabilityMetrics({
        carbonFootprint: Math.floor(Math.random() * 30) + 70,
        energyEfficiency: Math.floor(Math.random() * 20) + 80,
        wasteReduction: Math.floor(Math.random() * 25) + 75,
        socialImpact: Math.floor(Math.random() * 15) + 85,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    console.log('Заявка отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  const modules = [
    {
      title: 'Основы устойчивого развития',
      description:
        'Изучение концепций устойчивого развития, ESG-принципов и глобальных вызовов',
      topics: [
        'Концепция устойчивого развития и ЦУР ООН',
        'ESG-факторы и их влияние на бизнес',
        'Климатические изменения и адаптация',
        'Циркулярная экономика и ресурсоэффективность',
        'Социальная ответственность бизнеса',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
      icon: '🌱',
    },
    {
      title: 'Зеленая экономика и инновации',
      description:
        'Изучение зеленых технологий, возобновляемых источников энергии и экологических инноваций',
      topics: [
        'Возобновляемые источники энергии и энергоэффективность',
        'Зеленые технологии и экологические инновации',
        'Устойчивое производство и потребление',
        'Биоэкономика и биотехнологии',
        'Умные города и устойчивая инфраструктура',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
      icon: '⚡',
    },
    {
      title: 'Социальное предпринимательство',
      description:
        'Развитие социальных предприятий и инклюзивных бизнес-моделей',
      topics: [
        'Модели социального предпринимательства',
        'Инклюзивный бизнес и BOP-рынки',
        'Социальные инновации и их масштабирование',
        'Измерение социального воздействия',
        'Финансирование социальных проектов',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
      icon: '🤝',
    },
    {
      title: 'Устойчивые финансы',
      description:
        'ESG-инвестиции, зеленые облигации и устойчивое финансирование',
      topics: [
        'ESG-инвестиции и ответственное инвестирование',
        'Зеленые облигации и климатическое финансирование',
        'Устойчивое банковское дело',
        'Микрофинансирование и финансовое включение',
        'Риски и возможности ESG-факторов',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
      icon: '💚',
    },
    {
      title: 'Управление устойчивым развитием',
      description:
        'Стратегии интеграции устойчивого развития в корпоративную деятельность',
      topics: [
        'Корпоративная стратегия устойчивого развития',
        'Управление ESG-рисками и возможностями',
        'Отчетность по устойчивому развитию',
        'Цепочки поставок и устойчивые закупки',
        'Стейкхолдер-менеджмент и коммуникации',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
      icon: '🎯',
    },
  ];

  const testimonials = [
    {
      name: 'Айжан Садыкова',
      position: 'Директор по устойчивому развитию, ТОО "Эко-Инновации"',
      text: 'Программа MBA Sustainability открыла мне глаза на возможности создания бизнеса, который приносит пользу не только прибыль, но и планете. Теперь я руковожу отделом устойчивого развития.',
      avatar: '/images/Svetlana.png',
    },
    {
      name: 'Марат Бекенов',
      position: 'Основатель социального предприятия "Зеленый Казахстан"',
      text: 'Благодаря программе я смог создать предприятие, которое решает экологические проблемы и создает рабочие места. Сочетание теории и практики было идеальным.',
      avatar: '/images/Baurzhan.png',
    },
    {
      name: 'Диана Ахметова',
      position: 'ESG-аналитик, АО "Инвестиционный фонд Казахстана"',
      text: 'Программа дала мне глубокое понимание ESG-факторов и их влияния на инвестиционные решения. Теперь я помогаю компаниям интегрировать устойчивое развитие.',
      avatar: '/images/Irina.png',
    },
  ];

  // Регионы для интерактивной карты
  const regions = [
    { code: 'KZ', name: 'Казахстан', color: 'bg-green-500' },
    { code: 'EU', name: 'Европейский Союз', color: 'bg-blue-500' },
    { code: 'US', name: 'США', color: 'bg-red-500' },
    { code: 'ASIA', name: 'Азия', color: 'bg-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#991E1E] via-[#8B1A1A] to-[#7A1818] text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MBA "Устойчивое предпринимательство"
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Создавайте бизнес будущего, который приносит пользу людям, планете и прибыли. 
              Изучите принципы устойчивого развития и социального предпринимательства
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">24 месяца</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">18 преподавателей</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">Weekend формат</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Экологические метрики */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Индикаторы устойчивого развития
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Снижение углеродного следа</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">{sustainabilityMetrics.carbonFootprint}%</div>
              <div className="text-sm text-[#991E1E]">Улучшение</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Энергоэффективность</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">{sustainabilityMetrics.energyEfficiency}%</div>
              <div className="text-sm text-[#991E1E]">Высокий уровень</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Сокращение отходов</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">{sustainabilityMetrics.wasteReduction}%</div>
              <div className="text-sm text-[#991E1E]">Прогресс</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Социальное воздействие</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">{sustainabilityMetrics.socialImpact}%</div>
              <div className="text-sm text-[#991E1E]">Отлично</div>
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
                Программа MBA "Устойчивое предпринимательство" предназначена для лидеров, 
                которые хотят создавать бизнес, приносящий пользу обществу и окружающей среде. 
                Мы изучаем принципы устойчивого развития, социального предпринимательства и 
                зеленой экономики.
              </p>
              <p className="mb-6">
                Вы научитесь интегрировать ESG-факторы в бизнес-стратегии, развивать 
                социальные предприятия и создавать инновационные решения для глобальных 
                вызовов. Программа включает практические проекты с реальными социальными 
                и экологическими проблемами.
              </p>
            </div>

            {/* Интерактивная карта устойчивого развития */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-8 border border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                🌍 Карта устойчивого развития
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Выберите регион:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {regions.map((region) => (
                      <button
                        key={region.code}
                        onClick={() => setSelectedRegion(region.code)}
                        className={`p-3 rounded-lg text-white font-medium transition-all ${
                          selectedRegion === region.code
                            ? `${region.color} shadow-lg scale-105`
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      >
                        {region.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    {regions.find(r => r.code === selectedRegion)?.name}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Индекс устойчивости:</span>
                      <span className="font-bold text-green-600">
                        {sustainabilityData[selectedRegion].score}/100
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Инициативы:</span>
                      <span className="font-bold text-blue-600">
                        {sustainabilityData[selectedRegion].initiatives}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Компании:</span>
                      <span className="font-bold text-purple-600">
                        {sustainabilityData[selectedRegion].companies}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Экологическая ответственность
                </h3>
                <p className="text-gray-600">
                  Изучение принципов циркулярной экономики, зеленых технологий и 
                  методов снижения экологического воздействия бизнеса.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Социальное воздействие
                </h3>
                <p className="text-gray-600">
                  Развитие социальных предприятий, инклюзивных бизнес-моделей и 
                  методов измерения социального воздействия.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">💚</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Устойчивые финансы
                </h3>
                <p className="text-gray-600">
                  Изучение ESG-инвестиций, зеленых облигаций и методов 
                  устойчивого финансирования проектов.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Инновации для будущего
                </h3>
                <p className="text-gray-600">
                  Разработка инновационных решений для глобальных вызовов и 
                  создание устойчивых бизнес-моделей.
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
                      <span className="text-2xl mr-4">{module.icon}</span>
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
                              <span className="text-green-500 mr-2">•</span>
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
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
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
                  <span className="font-semibold">18</span>
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
                  <div key={index} className="border-l-4 border-green-600 pl-4">
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

export default MBASustainability; 