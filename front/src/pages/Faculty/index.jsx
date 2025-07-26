import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const facultyMembers = [
  {
    id: 1,
    name: 'Елжас Аубакиров',
    position: 'Профессор',
    specialization: 'Финансы и инвестиции',
    education: 'MBA, MSF, CFA, CMA',
    experience: '20-летний опыт в финансах, прямых инвестициях, венчурном капитале и консалтинге',
    image: '/images/Yelzhas.png',
    achievements: [
      'Эксперт по сделкам и due diligence',
      'Специалист по оценке компаний',
      'Консультант стартапов и крупного бизнеса',
    ],
    research: 'Стратегическое инвестирование и корпоративные финансы',
    email: 'yelzhas.aubakirov@narxoz.kz',
  },
  {
    id: 2,
    name: 'Олег Алфёров',
    position: 'Профессор',
    specialization: 'Развитие бизнеса',
    education: 'Международные бизнес-школы: NTU, HKUST, SDA Bocconi, Darden School of Business',
    experience: 'Более 25 лет опыта управления проектами в международных проектах',
    image: '/images/Oleg.png',
    achievements: [
      'Опыт работы в Польше, Словакии, Нидерландах, Швеции, Дании',
      'Стажировки в Нидерландах и Швеции',
      'Бизнес-тренер международного уровня',
    ],
    research: 'Международное развитие бизнеса и стратегическое управление',
    email: 'oleg.alfyorov@narxoz.kz',
  },
  {
    id: 3,
    name: 'Юлия Дмитриева',
    position: 'Доцент',
    specialization: 'Маркетинг и аналитика',
    education: 'Руководитель агентства JD Expert',
    experience: '20 лет в маркетинге и продажах',
    image: '/images/Ulia.png',
    achievements: [
      '120+ отраслевых исследований',
      '40+ реализованных проектов в действующий бизнес',
      '30+ лет суммарный срок партнёрского сопровождения',
    ],
    research: 'Стратегический маркетинг и бизнес-аналитика',
    email: 'yulia.dmitrieva@narxoz.kz',
  },
  {
    id: 4,
    name: 'Виговская Ирина',
    position: 'Профессор',
    specialization: 'Медиация и корпоративное управление',
    education: 'Международно аккредитованный бизнес-тренер',
    experience: 'Более 20-летний опыт преподавания и медиативной практики',
    image: '/images/Irina.png',
    achievements: [
      'Партнер UN Women в Казахстане и Центральной Азии',
      'Эксперт по ТРИЗ-фасилитации',
      'Опыт на управленческих позициях',
    ],
    research: 'Медиация и корпоративное управление',
    email: 'irina.vigovskaya@narxoz.kz',
  },
  {
    id: 5,
    name: 'Лилия Бисенгали',
    position: 'Доцент',
    specialization: 'Корпоративное право',
    education: 'PhD в области права',
    experience: 'Более 15 лет опыта в юридическом консалтинге',
    image: '/images/Lilya.png',
    achievements: [
      'Комплаенс-менеджер',
      'Senior Legal Consultant (KPMG)',
      'Эксперт по управлению рисками',
    ],
    research: 'Международное право и корпоративное управление',
    email: 'liliya.bisengali@narxoz.kz',
  },
  {
    id: 6,
    name: 'Зевира Толеутаева',
    position: 'Профессор',
    specialization: 'Финансовая отчетность',
    education: 'К.эн, АССА',
    experience: 'Более 20 лет опыта в аудите и консалтинге',
    image: '/images/Zevira.png',
    achievements: [
      'Член Консультативного органа Министерства финансов РК',
      'Эксперт по международным стандартам финансовой отчетности',
      'Специалист по МСФО и аудиту',
    ],
    research: 'Международные стандарты финансовой отчетности',
    email: 'zevira.toleutaeva@narxoz.kz',
  },
  {
    id: 7,
    name: 'Кайсар Макан',
    position: 'Доцент',
    specialization: 'Лидерство и коучинг',
    education: 'MBA, Сертифицированный бизнес-тренер',
    experience: 'Более 15 лет опыта в корпоративном обучении',
    image: '/images/Kaisar.png',
    achievements: [
      'Фасилитатор',
      'Профессиональный международный коуч Erickson International Coach ICF',
      'Эксперт по развитию управленческих компетенций',
    ],
    research: 'Стратегическое планирование и развитие лидерства',
    email: 'kaisar.makan@narxoz.kz',
  },
  {
    id: 8,
    name: 'Марина Новоточина',
    position: 'Профессор',
    specialization: 'HR-менеджмент',
    education: 'Доктор бизнес администрирования (DBA)',
    experience: 'Более 25 лет опыта в HR-менеджменте',
    image: '/images/Marina.png',
    achievements: ['Executive коуч', 'Бизнес тренер', 'HR-консультант'],
    research: 'Развитие лидерства, управление изменениями и корпоративная культура',
    email: 'marina.novotochina@narxoz.kz',
  },
];

// Компонент для анимированного счетчика
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Используем easeOutQuart для более естественной анимации
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Faculty = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filter, setFilter] = useState('all');

  const specializations = [
    'all',
    'Финансы и инвестиции',
    'Развитие бизнеса',
    'Маркетинг и аналитика',
    'Медиация и корпоративное управление',
    'Корпоративное право',
    'Финансовая отчетность',
    'Лидерство и коучинг',
    'HR-менеджмент',
  ];

  const filteredMembers =
    filter === 'all'
      ? facultyMembers
      : facultyMembers.filter((member) => member.specialization === filter);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-700">
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Animated geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute bottom-20 right-1/3 w-20 h-20 bg-white/8 rounded-full animate-pulse"
            style={{ animationDelay: '0.5s' }}
          ></div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-white/20 to-transparent animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-1 h-24 bg-gradient-to-b from-white/15 to-transparent animate-bounce"
            style={{ animationDelay: '1.5s' }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center px-8">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          {/* Main heading with animation */}
          <div className="mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-2 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent animate-pulse">
              НАШ
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              ПРЕПОДАВАТЕЛИ
            </h1>
          </div>

          {/* Subtitle with enhanced styling */}
          <div className="mb-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-white">
              Эксперты с международным опытом
            </p>
            <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          {/* Description with better typography */}
          <div className="mb-12 max-w-4xl mx-auto px-4">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 font-light">
              Преподаватели <span className="font-semibold text-white">Нархоз Business School</span>{' '}
              — это практикующие специалисты с опытом работы в ведущих международных компаниях и
              научными степенями от лучших бизнес-школ мира
            </p>
          </div>

          {/* Enhanced stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-4">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black mb-2 text-white group-hover:text-red-100 transition-colors">
                  25+
                </div>
                <div className="text-base lg:text-lg font-medium text-white/90">Преподавателей</div>
                <div className="text-xs lg:text-sm text-white/70 mt-1">С международным опытом</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black mb-2 text-white group-hover:text-red-100 transition-colors">
                  15+
                </div>
                <div className="text-base lg:text-lg font-medium text-white/90">Лет опыта</div>
                <div className="text-xs lg:text-sm text-white/70 mt-1">
                  В среднем на преподавателя
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black mb-2 text-white group-hover:text-red-100 transition-colors">
                  100+
                </div>
                <div className="text-base lg:text-lg font-medium text-white/90">Публикаций</div>
                <div className="text-xs lg:text-sm text-white/70 mt-1">В ведущих журналах</div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-12 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Специализации</h2>
            <p className="text-gray-600">Выберите область для просмотра преподавателей</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {specializations.map((spec) => (
              <button
                key={spec}
                onClick={() => setFilter(spec)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === spec
                    ? 'bg-red-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
                }`}
              >
                {spec === 'all' ? 'Все специализации' : spec}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Faculty Members Grid */}
      <div className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.position}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-red-800 font-semibold text-sm mb-3">
                    {member.specialization}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{member.education}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{member.experience}</span>
                    <button className="text-red-800 text-sm font-medium hover:text-red-900">
                      Подробнее →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Member Details */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 z-10"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h2>
                  <p className="text-xl text-red-800 font-semibold mb-4">
                    {selectedMember.position}
                  </p>
                  <p className="text-gray-600 mb-6">{selectedMember.specialization}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Образование</h3>
                      <p className="text-gray-600">{selectedMember.education}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Опыт работы</h3>
                      <p className="text-gray-600">{selectedMember.experience}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Научные интересы</h3>
                      <p className="text-gray-600">{selectedMember.research}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Достижения</h3>
                      <ul className="space-y-1">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-600 flex items-start gap-2">
                            <span className="text-red-800 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Контакты</h3>
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="text-red-800 hover:text-red-900 font-medium"
                      >
                        {selectedMember.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши достижения</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Преподаватели Нархоз Business School в цифрах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl font-bold text-red-800 mb-4 group-hover:text-red-900 transition-colors duration-300">
                <AnimatedCounter end={25} suffix="+" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Преподавателей</div>
              <div className="text-gray-600">С международным опытом</div>
            </div>

            <div className="text-center group">
              <div className="text-5xl font-bold text-red-800 mb-4 group-hover:text-red-900 transition-colors duration-300">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Научных публикаций</div>
              <div className="text-gray-600">В ведущих журналах</div>
            </div>

            <div className="text-center group">
              <div className="text-5xl font-bold text-red-800 mb-4 group-hover:text-red-900 transition-colors duration-300">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Консалтинговых проектов
              </div>
              <div className="text-gray-600">Ежегодно</div>
            </div>

            <div className="text-center group">
              <div className="text-5xl font-bold text-red-800 mb-4 group-hover:text-red-900 transition-colors duration-300">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Довольных студентов</div>
              <div className="text-gray-600">По результатам опросов</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faculty;
