import React, { useState } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';

const MBA = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Заявка отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  const modules = [
    {
      title: "Стратегический менеджмент",
      description: "Формирование стратегического мышления и навыков разработки долгосрочных планов развития организации",
      topics: [
        "Анализ внешней и внутренней среды организации",
        "Формулирование миссии, видения и стратегических целей",
        "Разработка конкурентных стратегий",
        "Стратегическое планирование и контроль",
        "Корпоративная культура и управление изменениями"
      ],
      duration: "3 дня",
      credits: "6 ECTS"
    },
    {
      title: "Финансовый менеджмент",
      description: "Изучение принципов управления финансами компании и принятия инвестиционных решений",
      topics: [
        "Анализ финансовой отчетности и ключевых показателей",
        "Управление оборотным капиталом",
        "Инвестиционный анализ и оценка проектов",
        "Структура капитала и стоимость финансирования",
        "Управление рисками и финансовое планирование"
      ],
      duration: "3 дня",
      credits: "6 ECTS"
    },
    {
      title: "Маркетинг и продажи",
      description: "Современные подходы к маркетингу и управлению продажами в цифровую эпоху",
      topics: [
        "Стратегический маркетинг и позиционирование",
        "Цифровой маркетинг и социальные медиа",
        "Управление брендом и клиентским опытом",
        "Техники продаж и управление командой продаж",
        "Аналитика маркетинга и ROI"
      ],
      duration: "3 дня",
      credits: "6 ECTS"
    },
    {
      title: "Лидерство и команды",
      description: "Развитие лидерских качеств и навыков эффективного управления командами",
      topics: [
        "Теории лидерства и стили управления",
        "Эмоциональный интеллект и коммуникация",
        "Управление конфликтами и переговоры",
        "Мотивация и развитие персонала",
        "Построение эффективных команд"
      ],
      duration: "3 дня",
      credits: "6 ECTS"
    },
    {
      title: "Операционное управление",
      description: "Оптимизация бизнес-процессов и повышение операционной эффективности",
      topics: [
        "Управление качеством и процессный подход",
        "Логистика и управление цепями поставок",
        "Проектное управление и управление рисками",
        "Инновации и цифровая трансформация",
        "Устойчивое развитие и корпоративная социальная ответственность"
      ],
      duration: "3 дня",
      credits: "6 ECTS"
    }
  ];

  const testimonials = [
    {
      name: "Иванов Иван",
      title: "Директор «Микрофинансовой организации «Auto Siyliq Finance»",
      role: "Слушатель MBA"
    },
    {
      name: "Иванов Иван",
      title: "Директор «Микрофинансовой организации «Auto Siyliq Finance»",
      role: "Слушатель MBA"
    },
    {
      name: "Иванов Иван",
      title: "Директор «Микрофинансовой организации «Auto Siyliq Finance»",
      role: "Слушатель MBA"
    },
    {
      name: "Иванов Иван",
      title: "Директор «Микрофинансовой организации «Auto Siyliq Finance»",
      role: "Слушатель MBA"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center bg-no-repeat text-white py-48 px-8" 
           style={{ backgroundImage: 'url(/images/Fon.png)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            ПРОГРАММА MBA
          </h1>
          <p className="text-3xl lg:text-4xl mb-6 font-medium">
            (MASTER OF BUSINESS ADMINISTRATION)
          </p>
          <p className="text-2xl mb-3">
            Программа №1 в Центральной Азии
          </p>
          <p className="text-xl mb-16 opacity-90">
            по версии QS Global MBA 2025
          </p>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              24 месяца
            </div>
            <div className="bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              18 преподавателей
            </div>
            <div className="bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
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
                <img 
                  src="/images/Krug.png" 
                  alt="MBA студенты" 
                  className="w-96 h-96"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Программа MBA (Master of Business Administration)
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Это ключ к успешной карьере в бизнесе. Программа MBA в Нархоз Business School 
                  предоставляет практические навыки, реальные кейсы, профессиональные связи и 
                  карьерный рост. Вы получите современные знания в области управления бизнесом, 
                  стратегического планирования и лидерства.
                </p>
                <p>
                  Наша программа MBA в Алматы — оптимальный выбор для специалистов и менеджеров, 
                  стремящихся к развитию лидерских качеств, профессиональному нетворкингу и 
                  созданию среды для совместного решения современных вызовов бизнеса.
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
            <div className="bg-red-800 text-white p-8 rounded-3xl h-80 relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-normal">Weekend формат</h3>
                <img src="/images/vrema.png" alt="Время" className="w-40 h-40 object-cover rounded-2xl" />
              </div>
              <div className="text-2xl font-black tracking-wider mb-2 drop-shadow-lg">3-4 ДНЯ В МЕСЯЦ</div>
              <p className="text-sm opacity-90 leading-relaxed">
                Обучение 3-4 дня в месяц в модульном формате
              </p>
            </div>

            <div className="bg-red-800 text-white p-8 rounded-3xl h-80 relative">
              <div className="mb-4">
                <h3 className="text-3xl font-black tracking-wider drop-shadow-lg">30 человек</h3>
              </div>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">
                Только 30 человек в группе из разных регионов страны
              </p>
              <div className="absolute bottom-6 left-8 text-xs opacity-75">Важно</div>
              <div className="absolute bottom-6 right-8">
                <img src="/images/gruppa.png" alt="Группа" className="w-40 h-40 object-cover rounded-2xl" />
              </div>
            </div>

            <div className="bg-red-800 text-white p-8 rounded-3xl h-80 relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-normal">Эксперты</h3>
                <img src="/images/experty.png" alt="Эксперты" className="w-40 h-40 object-cover rounded-2xl" />
              </div>
              <div className="text-3xl font-black tracking-wider mb-3 drop-shadow-lg">18 экспертов</div>
              <p className="text-sm opacity-90 leading-relaxed">
                Преподаватели практики и международно признанный диплом
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Testimonials */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Видео-отзывы наших студентов
            </h2>
            <div className="flex gap-3">
              <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-full h-56 bg-gray-300 rounded-xl flex items-center justify-center overflow-hidden">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-gray-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 mb-2 leading-tight">{testimonial.title}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program Features */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Особенности программы
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">01</div>
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    Обучение без отрыва от работы
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Каждый месяц на три дня вы погружаетесь в одну тему. Такой формат позволяет концентрировано погрузиться в предмет</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Модуль завершается решением кейса или выполнением задания</span>
                    </li>
                  </ul>
                </div>
                <div className="w-40 h-40 flex items-center justify-center">
                  <img src="/images/Osobennosti.png" alt="Особенности" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">02</div>
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    Peer to Peer education
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Обучение от равного к равному. Главная ценность EMBA, что вы сможете учиться у других и помогать своим опытом тоже</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>В вашей группе будут представители разных отраслей и сфер, что расширит ваш опыт группы в несколько раз</span>
                    </li>
                  </ul>
                </div>
                <div className="w-40 h-40 flex items-center justify-center">
                  <img src="/images/Osobennosti.png" alt="Особенности" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">03</div>
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    Practical Immersion
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Обучение проходит на реальных кейсах, задания и проекты связаны с вашей работой</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Предполагается применение знаний сразу в работе</span>
                    </li>
                  </ul>
                </div>
                <div className="w-40 h-40 flex items-center justify-center">
                  <img src="/images/Osobennosti.png" alt="Особенности" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Training Format Section */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <img 
              src="/images/Gradu.png" 
              alt="Выпускники" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Block */}
            <div className="absolute top-12 right-12 w-96 bg-red-800 text-white p-12 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 leading-tight">
                ФОРМАТ ОБУЧЕНИЯ - МОДУЛЬНЫЙ
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Мы заметили, что модульный формат снизил выгорание у наших слушателей.
                </p>
                <p>
                  Интенсивное обучение по выходным раз в месяц хорошо сказывается на результативности 
                  и удовлетворенности от своей работы и жизни.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Structure */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Программа обучения
            </h2>
            <div className="flex gap-4">
              <button className="bg-red-800 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors">
                24 месяца
              </button>
              <button className="bg-red-800 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors">
                18 модулей
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => setActiveModule(activeModule === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Обязательный модуль</div>
                      <div className="text-2xl font-semibold text-red-800">{module.title}</div>
                    </div>
                    <button className="text-3xl font-bold text-gray-400 hover:text-gray-600 transition-all duration-300 transform hover:scale-110">
                      <span className={`transition-transform duration-300 ${activeModule === index ? 'rotate-45' : 'rotate-0'}`}>
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
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {module.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                        <div className="text-sm text-gray-500 mb-1">Продолжительность</div>
                        <div className="text-lg font-semibold text-red-800">{module.duration}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                        <div className="text-sm text-gray-500 mb-1">Кредиты</div>
                        <div className="text-lg font-semibold text-red-800">{module.credits}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Основные темы модуля:</h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li 
                            key={topicIndex} 
                            className="flex items-start transform transition-all duration-300 hover:translate-x-2"
                            style={{ transitionDelay: `${topicIndex * 50}ms` }}
                          >
                            <span className="text-red-600 mr-3 mt-2">•</span>
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

      {/* Program Advantages */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Преимущества программы
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Обучение без отрыва от работы
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Занятия проводятся в Weekend формате: один раз в месяц, с пятницы по воскресенье
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Преподаватели — бизнес-практики
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Международные и казахстанские преподаватели-практики с профессиональным опытом и исследованиями в своих областях
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Нетворкинг
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Среда для знакомства, обмена опытом, межличностного и делового взаимодействия с представителями разных отраслей бизнеса
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Мировой опыт
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Современная учебная программа, разработанная на основе опыта ведущих бизнес-школ
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Практико-применимые знания
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Программа содержит международные и отечественные бизнес-кейсы
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Прикладные исследования
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Возможность сотрудничать с исследовательскими центрами Университета Нархоз: SRCC, SKRI, GERC, ECELR
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Детали программы
          </h2>

          <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <img 
              src="/images/detali.png" 
              alt="Выпускники" 
              className="w-full h-full object-cover"
            />
            
            {/* Dark Overlay Block */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent">
              <div className="h-full flex items-center">
                <div className="w-2/3 p-12 text-white">
                  <div className="grid grid-cols-3 gap-8 mb-8">
                    <div>
                      <div className="text-sm text-gray-300 mb-2">Продолжительность</div>
                      <div className="text-2xl font-bold">2 года</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-2">Язык обучения</div>
                      <div className="text-2xl font-bold">Русский</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-2">Формат обучения</div>
                      <div className="text-2xl font-bold">Offline</div>
                    </div>
                  </div>
                  
                  <div className="bg-[#991E1E] p-4 rounded-2xl">
                    <div className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors cursor-pointer mb-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="underline font-semibold text-base">Скачать презентацию</span>
                    </div>
                    <p className="text-xs text-white">
                      В каталоге Вы найдете всю необходимую информацию о программе General MBA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements for Admission */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Требования для поступления
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Программа MBA предназначена для специалистов и менеджеров, стремящихся к развитию лидерских качеств
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Основные требования</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Высшее образование</div>
                    <div className="text-gray-600">Диплом о высшем образовании любого профиля</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Опыт работы</div>
                    <div className="text-gray-600">Минимум 3 года профессионального опыта</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Мотивация к обучению</div>
                    <div className="text-gray-600">Желание развивать управленческие навыки и карьеру</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Знание языков</div>
                    <div className="text-gray-600">Русский язык свободно, английский на базовом уровне</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Процесс поступления</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <div className="font-semibold text-gray-900">Подача заявки</div>
                    <div className="text-gray-600">Заполнение онлайн-формы и загрузка документов</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <div className="font-semibold text-gray-900">Собеседование</div>
                    <div className="text-gray-600">Интервью с приемной комиссией (очно или онлайн)</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <div className="font-semibold text-gray-900">Рассмотрение заявки</div>
                    <div className="text-gray-600">Принятие решения в течение 5 рабочих дней</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <div className="font-semibold text-gray-900">Зачисление</div>
                    <div className="text-gray-600">Подписание договора и начало обучения</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Список необходимых документов
          </h2>

          <div className="space-y-8">
            {[
              "Нотариально заверенные копии диплома о высшем образовании с приложениями (если у Вас несколько высших, достаточно первого диплома и приложения)",
              "Копия удостоверения личности",
              "Медицинская справка форма 075-у",
              "Справка с места работы с указанием должности и количества лет работы",
              "Фотографии 3Х4 2 штуки",
              "2 рекомендательных письма",
              "Военный билет (или сведения о прохождении военной службы) - только для мужчин"
            ].map((document, index) => (
              <div key={index} className="flex items-start gap-8 p-8 border-b border-gray-200">
                <div className="w-8 h-8 bg-[#991E1E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 leading-relaxed text-lg">{document}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Стоимость обучения
            </h2>
            <p className="text-xl text-gray-600">
              Инвестиция в ваше профессиональное развитие и карьерный рост
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-red-900 text-white rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl lg:text-6xl font-bold mb-4">3 000 000₸</div>
              <div className="text-xl text-gray-200">Полная стоимость программы MBA</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Что включено:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Все учебные материалы и кейсы
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Питание во время модулей
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Доступ к библиотеке и ресурсам
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Участие в нетворкинг-мероприятиях
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Варианты оплаты:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Единовременная оплата
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Рассрочка на 12 месяцев
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Корпоративная оплата
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Скидка за раннюю оплату 5%
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-200 mb-6">
                Следующий набор стартует в сентябре 2025 года
              </p>
              <Button 
                onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Забронировать место
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Что важно знать
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-48 rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="/images/stud.png" 
                alt="Поступление" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-red-800" style={{ background: 'linear-gradient(to right, transparent 0%, transparent 40%, rgba(153, 30, 30, 0.8) 60%, rgb(153, 30, 30) 100%)' }}>
                <div className="h-full flex items-center justify-end">
                  <div className="w-3/5 p-6 text-white">
                    <h3 className="text-lg font-normal mb-2">Поступление</h3>
                    <p className="text-xl font-bold">Запуск следующих групп: Осень 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-48 rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="/images/vipus.jpg" 
                alt="Профайл кандидата" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-red-800" style={{ background: 'linear-gradient(to right, transparent 0%, transparent 40%, rgba(153, 30, 30, 0.8) 60%, rgb(153, 30, 30) 100%)' }}>
                <div className="h-full flex items-center justify-end">
                  <div className="w-3/5 p-6 text-white">
                    <h3 className="text-lg font-normal mb-2">Профайл кандидата</h3>
                    <p className="text-xl font-bold mb-1">Степень бакалавра</p>
                    <p className="text-xl font-bold">- 3 года опыта работы</p>
                  </div>
                </div>
              </div>
            </div>
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
                className="bg-red-600 text-white px-12 py-4 text-lg font-medium hover:bg-red-700 transition-colors"
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

      {/* Contact Information */}
      <div className="py-16 px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="slide-in-up">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-gray-300">
                ул. Жандосова, 55<br />
                Алматы, Казахстан
              </p>
            </div>
            
            <div className="slide-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-gray-300">
                +8 776 708 36 36
              </p>
            </div>
            
            <div className="slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">
                gsb@narxoz.kz
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MBA; 