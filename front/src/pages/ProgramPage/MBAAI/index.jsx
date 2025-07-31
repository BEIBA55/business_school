import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';

const MBAAI = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [showDocuments, setShowDocuments] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  // AI Demo состояния
  const [aiDemo, setAiDemo] = useState({
    input: '',
    output: '',
    isProcessing: false,
  });

  // AI тренды и метрики
  const [aiTrends, setAiTrends] = useState({
    marketSize: 0,
    growthRate: 0,
    adoptionRate: 0,
    investment: 0,
  });

  // Простой AI чат-бот
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Привет! Я AI-ассистент программы MBA AI. Чем могу помочь?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // AI Demo обработка
  const handleAiDemo = async () => {
    if (!aiDemo.input.trim()) return;
    
    setAiDemo(prev => ({ ...prev, isProcessing: true }));
    
    // Имитация AI обработки
    setTimeout(() => {
      const responses = [
        'Анализ показывает высокий потенциал для внедрения AI в вашем бизнесе.',
        'Рекомендуется начать с пилотного проекта в области автоматизации процессов.',
        'AI может увеличить эффективность на 30-40% в течение первого года.',
        'Ключевые области для применения: анализ данных, прогнозирование, оптимизация.',
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setAiDemo({
        input: aiDemo.input,
        output: randomResponse,
        isProcessing: false,
      });
    }, 2000);
  };

  // Чат-бот обработка
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { type: 'user', text: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');

    // Имитация ответа бота
    setTimeout(() => {
      const botResponses = {
        'программа': 'Программа MBA AI длится 24 месяца и включает изучение машинного обучения, анализа данных и стратегического применения ИИ в бизнесе.',
        'стоимость': 'Стоимость программы составляет 2,500,000 тенге. Возможна рассрочка и корпоративное финансирование.',
        'требования': 'Для поступления требуется высшее образование и опыт работы от 2 лет. Техническое образование не обязательно.',
        'карьера': 'Выпускники работают в качестве AI-стратегов, руководителей по цифровой трансформации, аналитиков данных.',
        'default': 'Спасибо за вопрос! Для получения подробной информации свяжитесь с нашими консультантами.'
      };

      let response = botResponses.default;
      const lowerInput = chatInput.toLowerCase();
      
      if (lowerInput.includes('программ')) response = botResponses.program;
      else if (lowerInput.includes('стоимость') || lowerInput.includes('цена')) response = botResponses.cost;
      else if (lowerInput.includes('требован')) response = botResponses.requirements;
      else if (lowerInput.includes('карьер') || lowerInput.includes('работ')) response = botResponses.career;

      const botMessage = { type: 'bot', text: response };
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  // Обновление AI трендов
  useEffect(() => {
    const interval = setInterval(() => {
      setAiTrends({
        marketSize: Math.floor(Math.random() * 50) + 200, // млрд долларов
        growthRate: Math.floor(Math.random() * 10) + 25, // %
        adoptionRate: Math.floor(Math.random() * 15) + 60, // %
        investment: Math.floor(Math.random() * 20) + 80, // млрд долларов
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    console.log('Заявка отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  const modules = [
    {
      title: 'Основы искусственного интеллекта',
      description:
        'Изучение фундаментальных концепций ИИ, машинного обучения и нейронных сетей',
      topics: [
        'История и эволюция искусственного интеллекта',
        'Машинное обучение: supervised и unsupervised learning',
        'Глубокое обучение и нейронные сети',
        'Обработка естественного языка (NLP)',
        'Компьютерное зрение и распознавание образов',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
      icon: '🤖',
    },
    {
      title: 'ИИ в стратегическом управлении',
      description:
        'Применение ИИ для принятия стратегических решений и управления бизнесом',
      topics: [
        'AI-driven стратегическое планирование',
        'Предиктивная аналитика для бизнеса',
        'Автоматизация принятия решений',
        'ИИ в управлении рисками',
        'Этические аспекты ИИ в бизнесе',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
      icon: '🎯',
    },
    {
      title: 'ИИ в маркетинге и продажах',
      description:
        'Использование ИИ для персонализации, прогнозирования и оптимизации маркетинга',
      topics: [
        'Персонализация и рекомендательные системы',
        'Прогнозирование поведения клиентов',
        'AI-powered маркетинговая аналитика',
        'Чат-боты и виртуальные ассистенты',
        'Автоматизация продаж и CRM',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
      icon: '📈',
    },
    {
      title: 'ИИ в операционном управлении',
      description:
        'Оптимизация бизнес-процессов с помощью ИИ и автоматизации',
      topics: [
        'Автоматизация бизнес-процессов (RPA)',
        'Умная логистика и управление цепями поставок',
        'Предиктивное обслуживание оборудования',
        'Оптимизация производства и качества',
        'ИИ в управлении персоналом',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
      icon: '⚙️',
    },
    {
      title: 'ИИ в финансах и инвестициях',
      description:
        'Применение ИИ в финансовой аналитике, торговле и управлении рисками',
      topics: [
        'Алгоритмическая торговля и количественные стратегии',
        'Кредитный скоринг и управление рисками',
        'Фрод-детекция и кибербезопасность',
        'Робо-эдвайзинг и персональные финансы',
        'Регулирование ИИ в финансовом секторе',
      ],
      duration: '4 дня',
      credits: '8 ECTS',
      icon: '💰',
    },
  ];

  const testimonials = [
    {
      name: 'Алихан Темирбаев',
      position: 'AI-стратег, ТОО "Цифровые решения"',
      text: 'Программа MBA AI дала мне системное понимание того, как интегрировать ИИ в бизнес-стратегии. Теперь я консультирую компании по цифровой трансформации.',
      avatar: '/images/Aset.png',
    },
    {
      name: 'Айгерим Нурланова',
      position: 'Руководитель по инновациям, АО "ТехноБанк"',
      text: 'Благодаря программе я смогла внедрить AI-решения в банковские процессы. Эффективность выросла на 40%, а клиентский опыт значительно улучшился.',
      avatar: '/images/Gulmira.png',
    },
    {
      name: 'Данияр Калиев',
      position: 'Основатель стартапа "AI Analytics"',
      text: 'Программа помогла мне создать стартап в области AI-аналитики. Сочетание бизнес-знаний и технических навыков было идеальным.',
      avatar: '/images/Talgat.png',
    },
  ];

  // AI технологии и их применение
  const aiTechnologies = [
    { name: 'Machine Learning', usage: '85%', color: 'bg-blue-500' },
    { name: 'Natural Language Processing', usage: '72%', color: 'bg-green-500' },
    { name: 'Computer Vision', usage: '68%', color: 'bg-purple-500' },
    { name: 'Robotic Process Automation', usage: '91%', color: 'bg-red-500' },
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
              MBA "ИИ в бизнесе"
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Изучите искусственный интеллект и его применение в бизнесе. 
              Станьте лидером цифровой трансформации и AI-стратегии
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">24 месяца</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">22 преподавателя</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-semibold">Weekend формат</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI тренды и метрики */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            AI тренды и метрики
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Размер рынка AI</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">${aiTrends.marketSize} млрд</div>
              <div className="text-sm text-[#991E1E]">Глобальный рынок</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Темп роста</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">{aiTrends.growthRate}%</div>
              <div className="text-sm text-[#991E1E]">В год</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Внедрение в компаниях</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">{aiTrends.adoptionRate}%</div>
              <div className="text-sm text-[#991E1E]">Крупные компании</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Инвестиции в AI</div>
              <div className="text-xl font-bold text-[#991E1E] mb-1">${aiTrends.investment} млрд</div>
              <div className="text-sm text-[#991E1E]">Венчурные инвестиции</div>
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
                Программа MBA "ИИ в бизнесе" предназначена для руководителей и предпринимателей, 
                которые хотят понять, как искусственный интеллект может трансформировать их бизнес. 
                Мы изучаем не только технологии, но и стратегические аспекты внедрения ИИ.
              </p>
              <p className="mb-6">
                Вы научитесь оценивать возможности ИИ для вашего бизнеса, разрабатывать AI-стратегии 
                и управлять проектами цифровой трансформации. Программа включает практические кейсы 
                и работу с реальными AI-инструментами.
              </p>
            </div>

            {/* AI Demo */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mb-8 border border-purple-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                🤖 AI Демо - Анализ бизнес-запроса
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Опишите ваш бизнес-запрос:
                  </label>
                  <textarea
                    value={aiDemo.input}
                    onChange={(e) => setAiDemo(prev => ({ ...prev, input: e.target.value }))}
                    placeholder="Например: Как ИИ может помочь оптимизировать логистику в нашей компании?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-24"
                  />
                </div>
                <button
                  onClick={handleAiDemo}
                  disabled={aiDemo.isProcessing}
                  className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50"
                >
                  {aiDemo.isProcessing ? 'Анализирую...' : 'Получить AI анализ'}
                </button>
                {aiDemo.output && (
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                    <h4 className="font-semibold text-gray-800 mb-2">AI Рекомендация:</h4>
                    <p className="text-gray-600">{aiDemo.output}</p>
                  </div>
                )}
              </div>
            </div>

            {/* AI технологии */}
            <div className="bg-white p-6 rounded-xl mb-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                📊 Популярность AI технологий в бизнесе
              </h3>
              <div className="space-y-4">
                {aiTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{tech.name}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${tech.color}`}
                          style={{ width: tech.usage }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-600 w-12">
                        {tech.usage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Практические AI навыки
                </h3>
                <p className="text-gray-600">
                  Работа с реальными AI-инструментами, кейсы внедрения и 
                  практические проекты по цифровой трансформации.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Стратегическое мышление
                </h3>
                <p className="text-gray-600">
                  Разработка AI-стратегий, оценка ROI и управление 
                  проектами цифровой трансформации.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Бизнес-аналитика
                </h3>
                <p className="text-gray-600">
                  Анализ данных, предиктивная аналитика и 
                  принятие решений на основе AI-инсайтов.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Инновации и будущее
                </h3>
                <p className="text-gray-600">
                  Изучение новейших AI-трендов и подготовка к 
                  будущим технологическим изменениям.
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
                              <span className="text-purple-500 mr-2">•</span>
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
            {/* AI Chat Bot */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                💬 AI Ассистент
              </h3>
              <div className="h-64 overflow-y-auto mb-4 border border-gray-200 rounded-lg p-3">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-3 ${
                      message.type === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block p-2 rounded-lg max-w-xs ${
                        message.type === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Задайте вопрос..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors text-sm"
                >
                  Отправить
                </button>
              </form>
            </div>

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
                  className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
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
                  <span className="font-semibold">22</span>
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
                  <div key={index} className="border-l-4 border-purple-600 pl-4">
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

export default MBAAI; 