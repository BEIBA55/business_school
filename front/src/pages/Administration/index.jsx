import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const administrationMembers = [
  {
    id: 1,
    name: "Марина Образцова",
    position: "Директор",
    department: "Общее руководство",
    education: "Директор Narxoz Business School",
    experience: "Опыт в академическом управлении",
    image: "/images/img_rectangle_1178.png",
    responsibilities: [
      "Стратегическое планирование развития бизнес-школы",
      "Управление академическими программами",
      "Международные партнерства и аккредитации",
      "Развитие исследовательской деятельности"
    ],
    achievements: [
      "Поднял рейтинг школы в топ-10 региона",
      "Запустил 5 новых программ",
      "Получил 3 международные аккредитации",
      "Увеличил доходы на 40% за 3 года"
    ],
    email: "marina.obraztsova@narxoz.kz",
    phone: "+7 (727) 377-11-11"
  },
  {
    id: 2,
    name: "Юан Симпсон",
    position: "Директор по международному развитию",
    department: "Международные отношения",
    education: "Доктор, PhD",
    experience: "Опыт в международном развитии",
    image: "/images/img_rectangle_1205.png",
    responsibilities: [
      "Развитие международных партнерств",
      "Программы обмена и стажировок",
      "Международные аккредитации",
      "Координация с зарубежными вузами"
    ],
    achievements: [
      "Подписал 25 международных соглашений",
      "Запустил 8 программ обмена",
      "Получил 5 международных аккредитаций",
      "Увеличил количество иностранных студентов на 200%"
    ],
    email: "ewan.simpson@narxoz.kz",
    phone: "+7 (727) 377-11-12"
  },
  {
    id: 3,
    name: "Айкерим Мырзатаева",
    position: "Заместитель директора",
    department: "Административное управление",
    education: "Опыт в академическом управлении",
    experience: "Опыт в образовательном менеджменте",
    image: "/images/img_rectangle_1206.png",
    responsibilities: [
      "Координация административных процессов",
      "Управление качеством преподавания",
      "Разработка новых курсов и модулей",
      "Академическое консультирование студентов"
    ],
    achievements: [
      "Внедрила систему оценки качества преподавания",
      "Разработала 12 новых курсов",
      "Повысила удовлетворенность студентов на 25%",
      "Организовала 20+ международных конференций"
    ],
    email: "aikerim.myrzatayeva@narxoz.kz",
    phone: "+7 (727) 377-11-13"
  },
  {
    id: 4,
    name: "Агипа Монобаева",
    position: "Академический директор",
    department: "Академические программы",
    education: "Доктор философии (PhD)",
    experience: "Опыт в академическом руководстве",
    image: "/images/img_rectangle_1207.png",
    responsibilities: [
      "Руководство программой DBA",
      "Управление академическими программами",
      "Развитие исследовательской деятельности",
      "Координация с преподавателями"
    ],
    achievements: [
      "Успешно запустил программу DBA",
      "Увеличил количество публикаций на 60%",
      "Создал 3 исследовательских центра",
      "Организовал 8 международных симпозиумов"
    ],
    email: "agipa.monobaeva@narxoz.kz",
    phone: "+7 (727) 377-11-14"
  },
  {
    id: 5,
    name: "Анна Анисимова",
    position: "Операционный директор",
    department: "Операционное управление",
    education: "Опыт в операционном менеджменте",
    experience: "Опыт управления программами MBA, EMBA",
    image: "/images/Anna.png",
    responsibilities: [
      "Операционное управление программами MBA, EMBA",
      "Координация учебного процесса",
      "Управление ресурсами и планирование",
      "Обеспечение качества образования"
    ],
    achievements: [
      "Оптимизировала операционные процессы на 30%",
      "Улучшила эффективность программ на 25%",
      "Внедрила новые технологии обучения",
      "Повысила удовлетворенность студентов"
    ],
    email: "anna.anissimova@narxoz.kz",
    phone: "+7 (727) 377-11-15"
  },
  {
    id: 6,
    name: "Гульнар Жуманова",
    position: "Директор ЦДПО",
    department: "Дополнительное образование",
    education: "Опыт в управлении образованием",
    experience: "Опыт в дополнительном образовании",
    image: "/images/Gulnar.png",
    responsibilities: [
      "Руководство Центром дополнительного и профессионального образования",
      "Разработка программ дополнительного образования",
      "Координация с корпоративными клиентами",
      "Управление качеством программ"
    ],
    achievements: [
      "Запустил 15 новых программ дополнительного образования",
      "Увеличил количество слушателей на 50%",
      "Подписал 20+ корпоративных контрактов",
      "Повысил качество программ дополнительного образования"
    ],
    email: "gulnar.zhumanova@narxoz.kz",
    phone: "+7 (727) 377-11-16"
  },
  {
    id: 7,
    name: "Салтанат Абдельдинова",
    position: "Руководитель ЦПФ",
    department: "Прикладные финансы",
    education: "Опыт в финансовом образовании",
    experience: "Опыт в управлении финансовыми программами",
    image: "/images/Saltanat.png",
    responsibilities: [
      "Руководство Центром прикладных финансов",
      "Разработка финансовых программ",
      "Координация с финансовыми институтами",
      "Управление качеством финансового образования"
    ],
    achievements: [
      "Запустил 8 новых финансовых программ",
      "Увеличил количество студентов на 40%",
      "Подписал 15+ партнерств с финансовыми институтами",
      "Повысил качество финансового образования"
    ],
    email: "saltanat.abdelinova@narxoz.kz",
    phone: "+7 (727) 377-11-17"
  }
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

  return <span ref={ref}>{count}{suffix}</span>;
};

const Administration = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900">
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Animated geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white/8 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-white/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-24 bg-gradient-to-b from-white/15 to-transparent animate-bounce" style={{animationDelay: '1.5s'}}></div>
          
          {/* Additional decorative elements */}
          <div className="absolute top-1/3 left-20 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center px-8">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          {/* Main heading with animation */}
          <div className="mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-2 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-pulse">
              АДМИНИСТРАЦИЯ
            </h1>
          </div>

          {/* Subtitle with enhanced styling */}
          <div className="mb-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-white">
              Руководство Нархоз Business School
            </p>
            <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          {/* Description with better typography */}
          <div className="mb-12 max-w-4xl mx-auto px-4">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 font-light">
              Профессиональная команда управленцев с международным опытом, 
              обеспечивающая <span className="font-semibold text-white">высокое качество образования</span> и развитие бизнес-школы
            </p>
          </div>

          {/* Enhanced stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-4">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black mb-2 text-white group-hover:text-red-100 transition-colors">
                  7
                </div>
                <div className="text-base lg:text-lg font-medium text-white/90">
                  Членов руководства
                </div>
                <div className="text-xs lg:text-sm text-white/70 mt-1">
                  Профессиональная команда
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black mb-2 text-white group-hover:text-red-100 transition-colors">
                  20+
                </div>
                <div className="text-base lg:text-lg font-medium text-white/90">
                  Лет опыта
                </div>
                <div className="text-xs lg:text-sm text-white/70 mt-1">
                  В среднем на руководителя
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black mb-2 text-white group-hover:text-red-100 transition-colors">
                  100%
                </div>
                <div className="text-base lg:text-lg font-medium text-white/90">
                  Профессионализм
                </div>
                <div className="text-xs lg:text-sm text-white/70 mt-1">
                  Гарантия качества
                </div>
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



      {/* Leadership Section */}
      <div className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Команда руководства
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Опытные управленцы с международным образованием и многолетним опытом работы
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {administrationMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1 relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="md:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xl text-red-800 font-semibold mb-2">
                      {member.position}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {member.department}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {member.education}
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                      {member.experience}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-red-800 text-sm font-medium hover:text-red-900">
                        Подробнее →
                      </button>
                      <div className="text-xs text-gray-400">
                        Нажмите для деталей
                      </div>
                    </div>
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
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 z-10"
              >
                ✕
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-1 relative">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                </div>
                
                <div className="lg:col-span-2 p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedMember.name}
                  </h2>
                  <p className="text-xl text-red-800 font-semibold mb-2">
                    {selectedMember.position}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {selectedMember.department}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Образование
                      </h3>
                      <p className="text-gray-600 mb-4">{selectedMember.education}</p>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Опыт работы
                      </h3>
                      <p className="text-gray-600 mb-4">{selectedMember.experience}</p>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Контакты
                      </h3>
                      <div className="space-y-2">
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="block text-red-800 hover:text-red-900 font-medium"
                        >
                          {selectedMember.email}
                        </a>
                        <a
                          href={`tel:${selectedMember.phone}`}
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          {selectedMember.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Обязанности
                      </h3>
                      <ul className="space-y-1 mb-6">
                        {selectedMember.responsibilities.map((resp, index) => (
                          <li key={index} className="text-gray-600 flex items-start gap-2">
                            <span className="text-red-800 mt-1">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Достижения
                      </h3>
                      <ul className="space-y-1">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-600 flex items-start gap-2">
                            <span className="text-red-800 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Наши достижения
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Администрация Нархоз Business School в цифрах
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl font-bold text-red-800 mb-4 group-hover:text-red-900 transition-colors duration-300">
                <AnimatedCounter end={7} />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Членов руководства
              </div>
              <div className="text-gray-600">
                Профессиональная команда
              </div>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl font-bold text-red-800 mb-4 group-hover:text-red-900 transition-colors duration-300">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Лет опыта
              </div>
              <div className="text-gray-600">
                В среднем на руководителя
              </div>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl font-bold text-red-800 mb-4 group-hover:text-red-900 transition-colors duration-300">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Управленческих проектов
              </div>
              <div className="text-gray-600">
                Успешно реализовано
              </div>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl font-bold text-red-800 mb-4 group-hover:text-red-900 transition-colors duration-300">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Эффективность
              </div>
              <div className="text-gray-600">
                Управления процессами
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы ответить на ваши вопросы и предоставить дополнительную информацию
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Email
              </h3>
              <p className="text-gray-600 mb-4">
                Напишите нам на общий адрес
              </p>
              <a
                href="mailto:info@narkoz.edu.kz"
                className="text-red-800 hover:text-red-900 font-medium"
              >
                info@narkoz.edu.kz
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Телефон
              </h3>
              <p className="text-gray-600 mb-4">
                Позвоните в приемную
              </p>
              <a
                href="tel:+77273771111"
                className="text-red-800 hover:text-red-900 font-medium"
              >
                +7 (727) 377-11-11
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Адрес
              </h3>
              <p className="text-gray-600 mb-4">
                Приходите к нам в гости
              </p>
              <p className="text-red-800 font-medium">
                г. Алматы, ул. Жандосова, 55
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Administration; 