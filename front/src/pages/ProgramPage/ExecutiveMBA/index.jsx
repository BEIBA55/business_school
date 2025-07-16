import React, { useState } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';

const features = [
  {
    number: '01',
    title: 'Обучение без отрыва от работы',
    stats: '92% студентов совмещают обучение с карьерой',
    points: [
      'Модульный формат: занятия проходят 1 раз в месяц по 3-4 дня, что позволяет совмещать обучение с работой',
      'Каждый модуль завершается решением реального бизнес-кейса или проектом',
    ],
  },
  {
    number: '02',
    title: 'Peer to Peer education',
    stats: '25+ отраслей в одном потоке',
    points: [
      'Обучение в окружении топ-менеджеров и собственников бизнеса',
      'Обмен опытом и нетворкинг с лидерами из разных отраслей',
    ],
  },
  {
    number: '03',
    title: 'Международная перспектива',
    stats: '3 страны для стажировок',
    points: [
      'Стажировки и модули в ведущих бизнес-школах Европы и Азии',
      'Международная аккредитация FIBAA',
    ],
  },
  {
    number: '04',
    title: 'Практическая направленность',
    stats: '95% выпускников отмечают рост дохода',
    points: [
      'Преподаватели — действующие топ-менеджеры и эксперты',
      'Реальные кейсы и проекты, применимые к вашей работе',
    ],
  },
];

const modules = [
  {
    title: 'Стратегический менеджмент',
    subtitle: 'Обязательный модуль',
    description: 'Формирование стратегического мышления, анализ среды, разработка и реализация стратегии',
    topics: [
      'Анализ внешней и внутренней среды',
      'Формулирование миссии и целей',
      'Стратегии роста и конкурентные преимущества',
      'Управление изменениями',
    ],
  },
  {
    title: 'Финансовый менеджмент',
    subtitle: 'Обязательный модуль',
    description: 'Финансовый анализ, инвестиционные решения, управление капиталом',
    topics: [
      'Финансовая отчетность и анализ',
      'Бюджетирование и контроль',
      'Инвестиционный анализ',
      'Управление рисками',
    ],
  },
  {
    title: 'Маркетинг и продажи',
    subtitle: 'Обязательный модуль',
    description: 'Современные подходы к маркетингу и управлению продажами',
    topics: [
      'Стратегический маркетинг',
      'Цифровой маркетинг',
      'Управление брендом',
      'Продажи B2B и B2C',
    ],
  },
  {
    title: 'Лидерство и команды',
    subtitle: 'Обязательный модуль',
    description: 'Развитие лидерских качеств и эффективное управление командами',
    topics: [
      'Лидерство в условиях изменений',
      'Эмоциональный интеллект',
      'Построение эффективных команд',
      'Мотивация и вовлеченность',
    ],
  },
  {
    title: 'Операционное управление',
    subtitle: 'Обязательный модуль',
    description: 'Оптимизация бизнес-процессов и операционная эффективность',
    topics: [
      'Lean и Agile',
      'Управление проектами',
      'Логистика и цепи поставок',
      'Управление качеством',
    ],
  },
  {
    title: 'Цифровая трансформация',
    subtitle: 'Обязательный модуль',
    description: 'IT-стратегии и цифровые технологии в бизнесе',
    topics: [
      'Цифровые платформы',
      'Big Data и аналитика',
      'Автоматизация процессов',
      'Кибербезопасность',
    ],
  },
  {
    title: 'Международный бизнес',
    subtitle: 'Обязательный модуль',
    description: 'Ведение бизнеса на глобальных рынках',
    topics: [
      'Экспорт и импорт',
      'Международные финансы',
      'Кросс-культурные коммуникации',
      'Глобальные стратегии',
    ],
  },
];

const ExecutiveMBA = () => {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center bg-no-repeat text-white py-48 px-8" 
           style={{ backgroundImage: 'url(/images/EMBA_fon.png)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            EXECUTIVE MBA
          </h1>
          <p className="text-3xl lg:text-4xl mb-6 font-medium">
            (EXECUTIVE MASTER OF BUSINESS ADMINISTRATION)
          </p>
          <p className="text-2xl mb-3">
            Программа для топ-менеджеров и собственников бизнеса
          </p>
          <p className="text-xl mb-16 opacity-90">
            Премиум образование для лидеров
          </p>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              18 месяцев
            </div>
            <div className="bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              Модульный формат
            </div>
            <div className="bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              FIBAA аккредитация
            </div>
          </div>
        </div>
      </div>

      {/* Program Description */}
      <div className="py-24 px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/images/Krug.png" 
                  alt="Executive MBA студенты" 
                  className="w-96 h-96"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Executive MBA (Executive Master of Business Administration)
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Программа Executive MBA в Нархоз Business School разработана специально для руководителей 
                  высшего звена, собственников бизнеса и предпринимателей с опытом управления от 7 лет. 
                  Это программа для тех, кто уже достиг определенных высот в карьере и стремится к новому уровню.
                </p>
                <p>
                  Программа аккредитована Foundation for International Business Administration Accreditation (FIBAA) 
                  и предоставляет уникальную возможность получить международно признанную степень MBA, 
                  не прерывая карьеру.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ключевые особенности программы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Что делает Executive MBA в Нархоз Business School уникальной программой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-800 text-white p-8 rounded-3xl h-80 relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-normal">Модульный формат</h3>
                <img src="/images/vrema.png" alt="Время" className="w-40 h-40 object-cover rounded-2xl" />
              </div>
              <div className="text-2xl font-black tracking-wider mb-2 drop-shadow-lg">3-4 ДНЯ В МЕСЯЦ</div>
              <p className="text-sm opacity-90 leading-relaxed">
                Интенсивные модули по выходным, не мешающие основной работе и карьере
              </p>
            </div>

            <div className="bg-red-800 text-white p-8 rounded-3xl h-80 relative">
              <div className="mb-4">
                <h3 className="text-3xl font-black tracking-wider drop-shadow-lg">25 человек</h3>
              </div>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">
                Эксклюзивная группа топ-менеджеров и собственников бизнеса
              </p>
              <div className="absolute bottom-6 left-8 text-xs opacity-75">Эксклюзивно</div>
              <div className="absolute bottom-6 right-8">
                <img src="/images/gruppa.png" alt="Группа" className="w-40 h-40 object-cover rounded-2xl" />
              </div>
            </div>

            <div className="bg-red-800 text-white p-8 rounded-3xl h-80 relative overflow-hidden">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-normal mr-4">Международный опыт</h3>
                <img src="/images/experty.png" alt="Эксперты" className="w-40 h-40 object-cover rounded-2xl" />
              </div>
              <div className="text-3xl font-black tracking-wider mb-1 drop-shadow-lg">FIBAA</div>
              <p className="text-sm opacity-90 leading-relaxed mt-1">
                Международная аккредитация и стажировки в ведущих бизнес-школах мира
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Особенности программы */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Особенности программы</h2>
          <div className="space-y-6">
            {features.map((f, idx) => (
              <div key={f.number} className="flex items-center bg-white rounded-2xl shadow p-8">
                <div className="flex-1">
                  <div className="flex items-center gap-6 mb-1">
                    <div className="text-xs text-gray-400">{f.number}</div>
                    <div className="text-sm font-semibold text-[#991E1E] bg-[#FDEAEA] rounded px-3 py-1">{f.stats}</div>
                  </div>
                  <div className="text-xl font-bold text-[#991E1E] mb-2">{f.title}</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {f.points.map((p, i) => (
                      <li key={i} className="text-gray-700 text-base">{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:block ml-8">
                  <svg width="60" height="100" fill="none" viewBox="0 0 60 100">
                    <rect x="25" y="10" width="10" height="80" rx="5" stroke="#991E1E" strokeWidth="2"/>
                    {[...Array(6)].map((_,i)=>(<circle key={i} cx="30" cy={20+i*13} r="3" stroke="#991E1E" strokeWidth="2" fill="white"/>))}
                    <ellipse cx="30" cy="90" rx="15" ry="5" stroke="#991E1E" strokeWidth="2" fill="white"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Программа обучения */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Программа обучения</h2>
            <div className="flex gap-3">
              <span className="bg-[#991E1E] text-white px-6 py-2 rounded-xl font-semibold">18 месяцев</span>
              <span className="bg-[#991E1E] text-white px-6 py-2 rounded-xl font-semibold">12 модулей</span>
            </div>
          </div>
          <div className="space-y-6">
            {modules.map((m, idx) => (
              <details key={m.title} className="bg-gray-50 rounded-2xl p-6 shadow group">
                <summary className="flex items-center cursor-pointer select-none">
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1">{m.subtitle}</div>
                    <div className="text-xl font-bold text-[#991E1E]">{m.title}</div>
                    <div className="text-gray-700 text-base mt-1">{m.description}</div>
                  </div>
                  <span className="ml-4 text-2xl text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <ul className="list-disc pl-8 mt-4 space-y-1">
                  {m.topics.map((t, i) => (
                    <li key={i} className="text-gray-700 text-base">{t}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Admission Requirements */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Требования для поступления
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Программа предназначена для опытных руководителей и предпринимателей
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
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
                    <div className="font-semibold text-gray-900">Опыт руководящей работы</div>
                    <div className="text-gray-600">Минимум 7 лет управленческого опыта</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Текущая позиция</div>
                    <div className="text-gray-600">Руководящая должность или собственный бизнес</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Знание языков</div>
                    <div className="text-gray-600">Английский язык на уровне Intermediate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
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

      {/* Pricing */}
      <div className="py-20 px-8">
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
              <div className="text-5xl lg:text-6xl font-bold mb-4">12 500 000₸</div>
              <div className="text-xl text-gray-200">Полная стоимость программы</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Что включено:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Все учебные материалы
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
                    Международная стажировка
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Доступ к Alumni Network
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
                    Рассрочка на 6 месяцев
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
                    Скидка за раннюю оплату 10%
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-200 mb-6">
                Следующий набор стартует в марте 2025 года
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

      {/* Application Form */}
      <div id="application-form" className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Подать заявку на обучение
            </h2>
            <p className="text-xl text-gray-600">
              Заполните форму, и мы свяжемся с вами для консультации
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
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
            <div>
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
            
            <div>
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
            
            <div>
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

export default ExecutiveMBA; 