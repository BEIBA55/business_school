import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';

const programs = [
  {
    title: 'Корпоративные программы',
    description:
      'Специализированные программы для компаний, адаптированные под их потребности и корпоративную культуру',
    duration: '1-6 месяцев',
    format: 'Онлайн/Офлайн',
    participants: '10-50 человек',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    title: 'Открытые программы',
    description:
      'Программы для индивидуальных участников по различным направлениям бизнеса и менеджмента',
    duration: '2-12 недель',
    format: 'Гибридный',
    participants: '15-30 человек',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Сертификационные программы',
    description: 'Программы с получением международных сертификатов и признанных квалификаций',
    duration: '3-18 месяцев',
    format: 'Модульный',
    participants: '20-40 человек',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
  {
    title: 'Коучинг и менторинг',
    description: 'Индивидуальная работа с экспертами и коучами для персонального развития',
    duration: 'По запросу',
    format: '1-на-1',
    participants: 'Индивидуально',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-3.7 4.99c-.47.63-.47 1.46 0 2.09l3.7 4.99c.47.63 1.21 1 2.01 1h1.54c.8 0 1.54-.37 2.01-1L22.5 22H20zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6.5h1.5V22h4z" />
      </svg>
    ),
  },
];

const features = [
  {
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Международные стандарты',
    description:
      'Программы разработаны в соответствии с лучшими мировыми практиками и стандартами AACSB, EQUIS, AMBA',
    stats: '3 международные аккредитации',
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-3.7 4.99c-.47.63-.47 1.46 0 2.09l3.7 4.99c.47.63 1.21 1 2.01 1h1.54c.8 0 1.54-.37 2.01-1L22.5 22H20z" />
      </svg>
    ),
    title: 'Экспертный состав',
    description:
      'Преподаватели с опытом работы в ведущих компаниях мира: McKinsey, PwC, Deloitte, Google, Microsoft',
    stats: '50+ международных экспертов',
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
      </svg>
    ),
    title: 'Практическая направленность',
    description:
      'Фокус на реальных бизнес-кейсах, проектах и практических навыках, применимых сразу после обучения',
    stats: '95% практических кейсов',
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    title: 'Глобальная сеть',
    description: 'Доступ к международной сети выпускников, партнеров и экспертов из 30+ стран мира',
    stats: '5000+ выпускников в 30 странах',
  },
];

const testimonials = [
  {
    name: 'Александр Петров',
    position: 'CEO, TechCorp',
    company: 'TechCorp',
    text: 'Executive Education в Нархоз дал мне новые инструменты для управления компанией и расширил горизонты мышления. Программа помогла масштабировать бизнес в 3 раза за год.',
    rating: 5,
    avatar: '/images/Anar.png',
  },
  {
    name: 'Мария Сидорова',
    position: 'Директор по развитию',
    company: 'RetailGroup',
    text: 'Программа помогла мне переосмыслить подход к стратегическому планированию и внедрить инновационные решения. ROI от обучения составил 300%.',
    rating: 5,
    avatar: '/images/Anna.png',
  },
  {
    name: 'Дмитрий Козлов',
    position: 'Основатель',
    company: 'StartupHub',
    text: 'Полученные знания и связи помогли масштабировать бизнес и выйти на международные рынки. Сейчас работаем в 5 странах.',
    rating: 5,
    avatar: '/images/Aset.png',
  },
];

const stats = [
  {
    number: 25,
    label: 'Лет опыта',
  },
  {
    number: 5000,
    label: 'Выпускников',
  },
  {
    number: 30,
    label: 'Стран',
  },
  {
    number: 95,
    label: 'Удовлетворенность',
  },
];

const ExecutiveEducation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    program: '',
    message: '',
  });

  const [animatedNumbers, setAnimatedNumbers] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  });

  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isStatsVisible) {
      const duration = 2000; // 2 секунды
      const steps = 60;
      const stepDuration = duration / steps;

      const intervals = stats.map((stat, index) => {
        const target = stat.number;
        const increment = target / steps;
        let current = 0;

        return setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(intervals[index]);
          }

          setAnimatedNumbers((prev) => ({
            ...prev,
            [index]: Math.floor(current),
          }));
        }, stepDuration);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [isStatsVisible]);

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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#991E1E] via-[#B91C1C] to-[#DC2626] text-white py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <svg
              className="w-20 h-20 mx-auto mb-6 text-white/80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">EXECUTIVE EDUCATION</h1>
          <p className="text-2xl lg:text-3xl mb-6 font-medium">Развитие лидерских компетенций</p>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Программы для руководителей и специалистов, стремящихся к профессиональному росту и
            развитию бизнеса в условиях цифровой трансформации
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border border-white/30">
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Международные стандарты
            </div>
            <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border border-white/30">
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-3.7 4.99c-.47.63-.47 1.46 0 2.09l3.7 4.99c.47.63 1.21 1 2.01 1h1.54c.8 0 1.54-.37 2.01-1L22.5 22H20z" />
              </svg>
              Практический опыт
            </div>
            <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border border-white/30">
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              Глобальная сеть
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className="py-16 px-8 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-bold text-[#991E1E] mb-2">
                  {animatedNumbers[index]}
                  {stat.number === 95 ? '%' : '+'}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-[#991E1E] mr-4"></div>
                <span className="text-[#991E1E] font-semibold uppercase tracking-wide">
                  О программе
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Executive Education в Нархоз Business School
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Executive Education — это направление непрерывного образования для профессионалов,
                  которое помогает развивать ключевые компетенции и оставаться конкурентоспособными
                  в быстро меняющемся мире бизнеса.
                </p>
                <p>
                  Наши программы разработаны с учетом лучших международных практик и адаптированы
                  под потребности казахстанского рынка. Мы предлагаем гибкие форматы обучения,
                  которые позволяют совмещать профессиональное развитие с работой.
                </p>
                <p>
                  За 25 лет работы мы обучили более 5000 руководителей и специалистов, многие из
                  которых сегодня возглавляют ведущие компании Казахстана и региона.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <svg
                    className="w-5 h-5 text-[#991E1E] mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  FIBAA аккредитация
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg
                    className="w-5 h-5 text-[#991E1E] mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Международные партнеры
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg
                    className="w-5 h-5 text-[#991E1E] mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Практические кейсы
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-[#991E1E] to-[#B91C1C] rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full"></div>
                  <div className="text-white text-center relative z-10">
                    <svg
                      className="w-24 h-24 mx-auto mb-6 text-white/90"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <div className="text-3xl font-bold mb-2">25+ лет опыта</div>
                    <div className="text-lg opacity-90">в executive education</div>
                    <div className="text-sm opacity-75 mt-2">Лидер в регионе</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-[#991E1E] mr-4"></div>
              <span className="text-[#991E1E] font-semibold uppercase tracking-wide">
                Программы
              </span>
              <div className="w-12 h-1 bg-[#991E1E] ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши программы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите программу, которая соответствует вашим целям и потребностям
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#991E1E]/10 to-transparent rounded-bl-full"></div>
                <div className="text-[#991E1E] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#991E1E] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2 text-[#991E1E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="font-medium">Длительность:</span>
                    <span className="ml-2">{program.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2 text-[#991E1E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="font-medium">Формат:</span>
                    <span className="ml-2">{program.format}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2 text-[#991E1E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="font-medium">Участники:</span>
                    <span className="ml-2">{program.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-[#991E1E] mr-4"></div>
              <span className="text-[#991E1E] font-semibold uppercase tracking-wide">
                Преимущества
              </span>
              <div className="w-12 h-1 bg-[#991E1E] ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ключевые преимущества Executive Education в Нархоз Business School
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-[#991E1E] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="bg-[#991E1E]/10 text-[#991E1E] px-4 py-2 rounded-full inline-block font-semibold">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-[#991E1E] mr-4"></div>
              <span className="text-[#991E1E] font-semibold uppercase tracking-wide">Отзывы</span>
              <div className="w-12 h-1 bg-[#991E1E] ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Отзывы участников</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Что говорят о наших программах выпускники
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="absolute top-4 right-4">
                  <svg className="w-8 h-8 text-[#991E1E]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-[#991E1E] font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-24 px-8" style={{ backgroundColor: '#991E1E' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-white mr-4"></div>
              <span className="text-white font-semibold uppercase tracking-wide">Консультация</span>
              <div className="w-12 h-1 bg-white ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Получить консультацию</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами для обсуждения подходящей программы
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
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
              </div>
              <div>
                <EditText
                  label="Компания"
                  value={formData.company}
                  onChange={(value) => handleInputChange('company', value)}
                  placeholder="Название вашей компании"
                />
                <EditText
                  label="Интересующая программа"
                  value={formData.program}
                  onChange={(value) => handleInputChange('program', value)}
                  placeholder="Какая программа вас интересует?"
                />
                <EditText
                  label="Сообщение"
                  value={formData.message}
                  onChange={(value) => handleInputChange('message', value)}
                  placeholder="Дополнительная информация"
                  multiline
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={handleSubmit}
                variant="primary"
                size="lg"
                className="rounded-full shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
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

export default ExecutiveEducation;
