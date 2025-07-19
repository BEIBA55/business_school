import React, { useState } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';

const features = [
  {
    number: '01',
    title: 'Академическая подготовка',
    stats: '2 года обучения',
    points: [
      'Глубокое изучение теоретических основ в выбранной области',
      'Развитие аналитических и исследовательских навыков',
    ],
  },
  {
    number: '02',
    title: 'Практическая направленность',
    stats: 'Стажировки в ведущих компаниях',
    points: [
      'Возможность применить знания в реальных проектах',
      'Связь с индустрией и потенциальными работодателями',
    ],
  },
  {
    number: '03',
    title: 'Международные возможности',
    stats: 'Программы обмена с зарубежными вузами',
    points: [
      'Возможность обучения в партнерских университетах',
      'Международные стажировки и конференции',
    ],
  },
  {
    number: '04',
    title: 'Научная деятельность',
    stats: 'Подготовка магистерской диссертации',
    points: [
      'Проведение собственного исследования',
      'Публикации в научных журналах',
    ],
  },
];

const specializations = [
  {
    title: 'Финансы',
    description: 'Углубленное изучение финансовых рынков, инвестиций и корпоративных финансов',
    courses: [
      'Корпоративные финансы',
      'Инвестиционный анализ',
      'Финансовые рынки и институты',
      'Международные финансы',
      'Управление рисками',
      'Финансовое моделирование'
    ],
    career: 'Финансовые аналитики, инвестиционные менеджеры, риск-менеджеры'
  },
  {
    title: 'Маркетинг',
    description: 'Современные стратегии маркетинга, цифровые технологии и поведение потребителей',
    courses: [
      'Стратегический маркетинг',
      'Цифровой маркетинг',
      'Поведение потребителей',
      'Бренд-менеджмент',
      'Маркетинговые исследования',
      'Маркетинг услуг'
    ],
    career: 'Маркетинг-менеджеры, бренд-менеджеры, digital-маркетологи'
  },
  {
    title: 'Управление персоналом',
    description: 'Современные подходы к управлению человеческими ресурсами и развитию организаций',
    courses: [
      'Стратегическое управление персоналом',
      'Организационное поведение',
      'Развитие и обучение персонала',
      'Компенсации и льготы',
      'Организационная психология',
      'Управление изменениями'
    ],
    career: 'HR-директора, менеджеры по персоналу, консультанты по развитию'
  },
  {
    title: 'Логистика и управление цепями поставок',
    description: 'Оптимизация логистических процессов и управление цепями поставок',
    courses: [
      'Управление цепями поставок',
      'Логистика и дистрибуция',
      'Управление запасами',
      'Транспортная логистика',
      'Складское хозяйство',
      'Логистические технологии'
    ],
    career: 'Логисты, менеджеры по закупкам, специалисты по SCM'
  },
  {
    title: 'Предпринимательство и инновации',
    description: 'Развитие предпринимательских навыков и управление инновациями',
    courses: [
      'Предпринимательство и стартапы',
      'Управление инновациями',
      'Бизнес-планирование',
      'Венчурное финансирование',
      'Технологическое предпринимательство',
      'Социальное предпринимательство'
    ],
    career: 'Предприниматели, инновационные менеджеры, консультанты'
  },
  {
    title: 'Международный бизнес',
    description: 'Ведение бизнеса на международных рынках и глобальная стратегия',
    courses: [
      'Международная торговля',
      'Глобальная стратегия',
      'Международные финансы',
      'Кросс-культурный менеджмент',
      'Международный маркетинг',
      'Глобальные цепочки создания стоимости'
    ],
    career: 'Международные менеджеры, экспортные специалисты, глобальные стратеги'
  }
];

const Magistracy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    education: ''
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
           style={{ backgroundImage: 'url(/images/Fon.png)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            МАГИСТРАТУРА
          </h1>
          <p className="text-3xl lg:text-4xl mb-6 font-medium">
            (MASTER'S DEGREE PROGRAMS)
          </p>
          <p className="text-2xl mb-3">
            Углубленное образование для карьерного роста
          </p>
          <p className="text-xl mb-16 opacity-90">
            Специализация в выбранной области бизнеса
          </p>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              2 года
            </div>
            <div className="bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              6 специализаций
            </div>
            <div className="bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              Очная форма
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
                  alt="Магистранты" 
                  className="w-96 h-96"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Магистратура в Нархоз Business School
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Программы магистратуры в Нархоз Business School предоставляют углубленное образование 
                  в различных областях бизнеса и менеджмента. Это идеальный выбор для тех, кто хочет 
                  специализироваться в конкретной области и получить конкурентные преимущества на рынке труда.
                </p>
                <p>
                  Наши программы сочетают академическую строгость с практической направленностью, 
                  позволяя студентам развивать как теоретические знания, так и практические навыки, 
                  необходимые для успешной карьеры в современном бизнесе.
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
              Ключевые особенности программ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Что делает магистратуру в Нархоз Business School привлекательной
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl">
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-black text-red-800 leading-none">
                    {feature.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <div className="text-red-800 font-bold text-lg mb-4">
                      {feature.stats}
                    </div>
                    <ul className="space-y-2">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start gap-2">
                          <span className="text-red-800 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specializations Section */}
      <div className="py-24 px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Специализации магистратуры
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите направление, которое соответствует вашим карьерным целям
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {spec.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {spec.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Основные курсы:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {spec.courses.map((course, idx) => (
                      <div key={idx} className="text-gray-600 flex items-start gap-2">
                        <span className="text-red-800 mt-1">•</span>
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Карьерные возможности:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {spec.career}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-800 text-white p-8 rounded-3xl h-80 relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-normal">Очная форма</h3>
                <img src="/images/vrema.png" alt="Время" className="w-40 h-40 object-cover rounded-2xl" />
              </div>
              <div className="text-2xl font-black tracking-wider mb-2 drop-shadow-lg">5 ДНЕЙ В НЕДЕЛЮ</div>
              <p className="text-sm opacity-90 leading-relaxed">
                Полноценное погружение в образовательный процесс
              </p>
            </div>

            <div className="bg-red-800 text-white p-8 rounded-3xl h-80 relative">
              <div className="mb-4">
                <h3 className="text-3xl font-black tracking-wider drop-shadow-lg">25 человек</h3>
              </div>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">
                Небольшие группы для индивидуального подхода
              </p>
              <div className="absolute bottom-6 left-8 text-xs opacity-75">Качество</div>
              <div className="absolute bottom-6 right-8">
                <img src="/images/gruppa.png" alt="Группа" className="w-40 h-40 object-cover rounded-2xl" />
              </div>
            </div>

            <div className="bg-red-800 text-white p-8 rounded-3xl h-80 relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-normal">Преподаватели</h3>
                <img src="/images/experty.png" alt="Эксперты" className="w-40 h-40 object-cover rounded-2xl" />
              </div>
              <div className="text-3xl font-black tracking-wider mb-3 drop-shadow-lg">PhD степени</div>
              <p className="text-sm opacity-90 leading-relaxed">
                Преподаватели с международным опытом и научными степенями
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="py-24 px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Подать заявку на магистратуру
            </h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку, и мы свяжемся с вами для консультации
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <EditText
                label="Имя"
                value={formData.name}
                onChange={(value) => handleInputChange('name', value)}
                placeholder="Введите ваше имя"
              />
              <EditText
                label="Email"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                placeholder="Введите ваш email"
              />
              <EditText
                label="Телефон"
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value)}
                placeholder="Введите ваш телефон"
              />
              <EditText
                label="Интересующая специализация"
                value={formData.specialization}
                onChange={(value) => handleInputChange('specialization', value)}
                placeholder="Выберите специализацию"
              />
              <EditText
                label="Образование"
                value={formData.education}
                onChange={(value) => handleInputChange('education', value)}
                placeholder="Укажите ваше образование"
              />
            </div>
            <div className="text-center">
              <Button onClick={handleSubmit} className="bg-red-800 text-white px-12 py-4 rounded-2xl text-lg font-semibold hover:bg-red-900 transition-colors">
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Magistracy; 