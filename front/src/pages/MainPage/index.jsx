import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import EditText from '../../components/ui/EditText';
import Button from '../../components/ui/Button';
import NbsStatsSection from '../Homepage/NbsStatsSection';

const MainPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContactInputChange = (field, value) => {
    setContactFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleConsultationSubmit = () => {
    console.log('Consultation form submitted:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleContactSubmit = () => {
    console.log('Contact form submitted:', contactFormData);
    alert('Спасибо за заявку! Мы перезвоним вам в ближайшее время.');
    setContactFormData({ name: '', email: '', phone: '' });
  };

  const newsItems = [
    {
      date: '15.01.2025',
      title: 'Narxoz Business School вошла в топ-50 лучших бизнес-школ Азии по версии QS',
      description: 'Программа MBA Бизнес-школы Университета Нархоз заняла 42-е место в рейтинге QS Global MBA 2025 Asia и стала №1 в Центрально-Азиатском регионе.'
    },
    {
      date: '10.01.2025',
      title: 'Запущена новая программа Executive MBA с фокусом на цифровую трансформацию',
      description: 'Narxoz Business School представила обновленную программу Executive MBA, которая включает модули по искусственному интеллекту и цифровым технологиям.'
    },
    {
      date: '05.01.2025',
      title: 'Студенты MBA приняли участие в международном хакатоне в Сингапуре',
      description: 'Команда Narxoz Business School заняла второе место на международном хакатоне по устойчивому развитию, организованном партнерскими университетами.'
    },
    {
      date: '01.01.2025',
      title: 'Открыт новый корпоративный центр для Executive Education программ',
      description: 'В кампусе Нархоз открылся современный корпоративный центр с инновационными аудиториями и пространствами для командной работы.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Video */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
          <img src="/images/img_.png" alt="Background" className="w-full h-full object-cover" />
        </video>
        
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Title Section - Centered */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 flex flex-col items-center px-4 sm:px-8">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-tight drop-shadow-lg text-center">
            Narxoz Business School
          </h1>
        </div>

        {/* Contact Form - Bottom */}
        <div className="absolute bottom-20 left-0 right-0 z-10 flex flex-col items-center w-full px-4 sm:px-8">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-6 drop-shadow-lg text-center">
            Leading today, changing the world tomorrow
          </h2>
          <form
            className="flex flex-col sm:flex-row gap-2 w-full max-w-4xl mx-auto"
            onSubmit={e => { e.preventDefault(); handleConsultationSubmit(); }}
          >
            <EditText
              placeholder="ФИО"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="flex-1 min-w-[120px] shadow-sm rounded-md bg-white h-[38px] mb-0 [&>input]:px-4 [&>input]:py-2 [&>input]:flex [&>input]:items-center"
            />
            <EditText
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="flex-1 min-w-[120px] shadow-sm rounded-md bg-white h-[38px] mb-0 [&>input]:px-4 [&>input]:py-2 [&>input]:flex [&>input]:items-center"
            />
            <EditText
              placeholder="Номер телефона"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="flex-1 min-w-[120px] shadow-sm rounded-md bg-white h-[38px] mb-0 [&>input]:px-4 [&>input]:py-2 [&>input]:flex [&>input]:items-center"
            />
            <button
              type="submit"
              className="flex-1 min-w-[120px] bg-[#991E1E] text-white px-4 py-2 font-medium rounded-md shadow-sm hover:bg-[#7a1818] transition-colors flex items-center justify-center h-[42px]"
            >
              Получить консультацию
            </button>
          </form>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-gray-900 text-4xl font-bold leading-tight mb-6 slide-in-up">
              Narxoz Business School: там, где лидеры создают будущее
          </h2>
            <div className="w-24 h-1 bg-[#991E1E] mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Main Text */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 slide-in-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Миссия и видение</h3>
                <p className="text-gray-600 leading-relaxed">
                  Narxoz Business School формирует новое поколение лидеров, готовых трансформировать бизнес, общество и экономику в Центральной Азии и за её пределами. Мы объединяем передовые исследования с практикой и глобальными стандартами бизнес-образования, чтобы руководители, предприниматели и амбициозные профессионалы развивали стратегическое видение, навыки и смелость для внедрения инноваций в быстро меняющемся мире.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 slide-in-left" style={{animationDelay: '0.1s'}}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Программы и партнёрства</h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы предлагаем программы MBA, Executive MBA, DBA, Mini MBA, открытые тренинги и эксклюзивные решения для компаний. Наши партнёры — ведущие мировые университеты, включая ESMT Berlin, Penn State, University of Monaco, а приглашённые профессора из Harvard, Columbia, Yale и авторы мировых бестселлеров регулярно проводят занятия для наших студентов.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 slide-in-left" style={{animationDelay: '0.2s'}}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Достижения и признание</h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы гордимся тем, что наши программы MBA признаны №1 в Центральной Азии в мировом рейтинге. Это подтверждает, что мы создаём обучение, которое соответствует и опережает мировые стандарты.
                </p>
              </div>
            </div>

            {/* Right Column - Stats and Partners */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-[#991E1E] rounded-lg p-6 text-white shadow-sm slide-in-right">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2">№1</div>
                  <div className="text-lg">в Центральной Азии</div>
                  <div className="text-sm opacity-90">по рейтингу MBA</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Программ</span>
                    <span className="font-bold">6+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Партнёров</span>
                    <span className="font-bold">15+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Языков</span>
                    <span className="font-bold">3</span>
                  </div>
                </div>
              </div>

              {/* Partners Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 slide-in-right" style={{animationDelay: '0.1s'}}>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Нам доверяют</h3>
                <div className="space-y-3">
                  <div className="text-sm text-gray-700">Национальный банк РК</div>
                  <div className="text-sm text-gray-700">Forte</div>
                  <div className="text-sm text-gray-700">Beeline</div>
                  <div className="text-sm text-gray-700">ERG</div>
                  <div className="text-sm text-gray-700">KazMinerals</div>
                  <div className="text-sm text-gray-700">КТЖ</div>
                </div>
              </div>

              {/* Languages Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 slide-in-right" style={{animationDelay: '0.2s'}}>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Обучение на 3 языках</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-700">Русский</div>
                  <div className="text-sm text-gray-700">Английский</div>
                  <div className="text-sm text-gray-700">Казахский</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="bg-primary rounded-lg p-8 lg:p-12 text-white text-center slide-in-up">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl lg:text-2xl leading-relaxed mb-6 italic">
                "В Narxoz Business School мы создаём пространство, где знания встречаются с практикой, а обучение становится инвестициями в карьеру и лидерство завтрашнего дня."
              </p>
                             <div className="w-16 h-1 bg-[#991E1E] mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200"></div>

      {/* Video Section */}
      <div className="py-12 px-8 max-w-7xl mx-auto mb-12">
        <div className="relative fade-in">
          {/* YouTube Video */}
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/yDw56s7ni04?rel=0&modestbranding=1&showinfo=0"
              title="Marina Obraztsova - Director NARKOZ Business School"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200"></div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 text-4xl font-bold mb-6 slide-in-up">
              Почему выбирают нас?
            </h2>
            <div className="w-24 h-1 bg-[#991E1E] mx-auto rounded-full"></div>
          </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Международное признание */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 slide-in-up">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#991E1E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Международное признание</h3>
            <p className="text-gray-600 leading-relaxed">
          Наши программы аккредитованы ведущими организациями (FIBAA, IQAA) и соответствуют мировым стандартам качества.
            </p>
          </div>

                      {/* Современные подходы */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 slide-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#991E1E]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Современные подходы</h3>
            <p className="text-gray-600 leading-relaxed">
              Обучение строится на кейсах, реальных бизнес-задачах и цифровых инструментах. Студенты решают то, что завтра будут решать топ-менеджеры.
            </p>
          </div>

          {/* Преподаватели-практики */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#991E1E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Преподаватели-практики</h3>
            <p className="text-gray-600 leading-relaxed">
          Наши эксперты имеют богатый международный и профессиональный опыт, делясь с вами не только теорией, но и реальной практикой бизнеса.
            </p>
          </div>

                      {/* Гибкие форматы */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 slide-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#991E1E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Гибкие форматы</h3>
            <p className="text-gray-600 leading-relaxed">
          Очное, вечернее, онлайн или гибридное обучение — вы выбираете формат, который подходит вашему стилю жизни.
            </p>
          </div>

          {/* Карьерная поддержка */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#991E1E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Мощная карьерная поддержка</h3>
            <p className="text-gray-600 leading-relaxed">
          Центр карьеры, практика, ярмарки вакансий, акселераторы и партнёрские проекты помогают выпускникам быстро находить своё место в бизнесе.
            </p>
          </div>

          {/* Студенческая активность */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 slide-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#991E1E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Студенческая активность</h3>
            <p className="text-gray-600 leading-relaxed">
          Бизнес-клубы, стартап-инкубаторы, дебаты, хакатоны и лидерские школы — у нас кипит жизнь не только на лекциях.
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200"></div>

      {/* Statistics Section */}
      <NbsStatsSection />

      {/* Divider */}
      <div className="w-full h-px bg-gray-200"></div>

      {/* News Section */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8 slide-in-up">
            <h2 className="text-gray-900 text-4xl font-bold">Новости</h2>
            <Link to="/news" className="flex items-center space-x-4 hover:opacity-80 transition-opacity cursor-pointer">
              <span className="text-gray-600 text-lg">Смотреть все новости</span>
              <svg className="w-7 h-7 text-[#991E1E]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((news, index) => (
              <div key={index} className="slide-in-up hover-scale smooth-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gray-100 h-72 rounded-lg mb-4 relative">
                  <Button className="absolute bottom-4 right-4 bg-white text-gray-600 px-6 py-3 rounded-full text-sm shadow-sm">
                    {news.date}
                  </Button>
                </div>
                <h3 
                  className="text-gray-900 text-xl font-semibold mb-4 leading-tight cursor-pointer hover:text-[#991E1E] transition-colors duration-300"
                  onClick={() => console.log('Clicked news:', news.title)}
                >
                  {news.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {news.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200"></div>

      {/* University Slogan Section */}
      <div className="relative py-20 px-8 max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center">
          {/* Left Student Image */}
          <div className="absolute left-0 top-0 slide-in-left hidden lg:block">
          <div className="relative">
              <div className="w-64 h-80 overflow-hidden shadow-lg" style={{
                clipPath: 'polygon(0% 0%, 85% 0%, 100% 20%, 100% 100%, 15% 100%, 0% 80%)'
              }}>
            <img 
              src="/images/img_image_20.png" 
                  alt="Student" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Student Image */}
          <div className="absolute right-0 top-0 slide-in-right hidden lg:block">
            <div className="relative">
              <div className="w-64 h-80 overflow-hidden shadow-lg" style={{
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 80%, 85% 100%, 0% 100%, 0% 20%)'
              }}>
                <img 
                  src="/images/img_image_20.png" 
                  alt="Student" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Central Slogan */}
          <div className="relative z-10 text-center py-16 px-8 lg:px-24 max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl">
              <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold leading-relaxed italic slide-in-up">
                "Бизнес-школа Нархоз — это не просто обучение. Это сообщество, которое вдохновляет, 
                поддерживает и двигается вперёд вместе с вами. Присоединяйтесь к сообществу будущих лидеров. 
                Мы рядом на каждом этапе — от первых шагов до больших побед. Добро пожаловать в будущее 
                бизнеса — добро пожаловать в Нархоз."
              </h2>
              <div className="mt-8 flex items-center justify-center">
                <div className="w-16 h-1 bg-red-600 rounded-full"></div>
                <div className="mx-4 text-red-600 font-bold text-lg">NARXOZ</div>
                <div className="w-16 h-1 bg-red-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Student Images */}
        <div className="flex justify-center space-x-8 mt-12 lg:hidden">
          <div className="w-32 h-40 overflow-hidden shadow-lg slide-in-left" style={{
            clipPath: 'polygon(0% 0%, 80% 0%, 100% 25%, 100% 100%, 20% 100%, 0% 75%)'
          }}>
            <img 
              src="/images/img_image_20.png" 
              alt="Student" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-40 overflow-hidden shadow-lg slide-in-right" style={{
            clipPath: 'polygon(20% 0%, 100% 0%, 100% 75%, 80% 100%, 0% 100%, 0% 25%)'
          }}>
            <img 
              src="/images/img_image_20.png" 
              alt="Student" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200"></div>

        {/* Contact Form Section */}
      <div className="bg-primary py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h2 className="text-white text-4xl font-bold mb-6">
                Не знаете с чего начать?
            </h2>
            <p className="text-white text-lg leading-relaxed">
                Если вы хотите больше узнать об Narxoz Business School или не знаете, 
                какую программу обучения выбрать, оставьте заявку — и мы перезвоним
              </p>
            </div>

          <div className="space-y-4 slide-in-right">
              <EditText
                placeholder="Имя"
                value={contactFormData.name}
                onChange={(e) => handleContactInputChange('name', e.target.value)}
              className="h-[38px]"
              />
              <EditText
                placeholder="Email"
                value={contactFormData.email}
                onChange={(e) => handleContactInputChange('email', e.target.value)}
              className="h-[38px]"
              />
              <EditText
                placeholder="Номер"
                value={contactFormData.phone}
                onChange={(e) => handleContactInputChange('phone', e.target.value)}
              className="h-[38px]"
              />
              <Button
                onClick={handleContactSubmit}
              className="w-full bg-[#991E1E] text-white py-0 font-medium hover:bg-[#7a1818] transition-colors h-[38px] flex items-center justify-center"
              >
                Получить консультацию
              </Button>
            <p className="text-white text-sm text-center leading-relaxed">
                Нажимая на кнопку, я соглашаюсь с политикой обработки персональных данных
              </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;