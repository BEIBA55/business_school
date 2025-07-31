import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';

const ExecutiveEducation = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    0: 0, 1: 0, 2: 0, 3: 0
  });

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
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const stats = [25, 5000, 30, 95];
      const intervals = stats.map((target, index) => {
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

  const handleDownloadBrochure = () => {
    console.log('Скачивание брошюры Executive Education');
    // Здесь можно добавить реальную логику скачивания
    const link = document.createElement('a');
    link.href = '/presentations/probono-presentation.pdf';
    link.download = 'Executive-Education-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNewsClick = (url) => {
    window.open(url, '_blank');
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:executive@narxoz.kz?subject=Запрос о программах Executive Education';
  };

  const handleProgramClick = (programType) => {
    console.log(`Переход к программам: ${programType}`);
    // Здесь можно добавить навигацию к конкретным программам
    alert(`Переход к программам: ${programType}`);
  };

  const handleCourseSearch = () => {
    console.log('Поиск курсов');
    // Здесь можно добавить модальное окно поиска или переход на страницу поиска
    alert('Функция поиска курсов будет доступна в ближайшее время');
  };

  const handleViewCourses = (category) => {
    console.log(`Просмотр курсов категории: ${category}`);
    // Здесь можно добавить навигацию к курсам конкретной категории
    alert(`Переход к курсам: ${category}`);
  };

  const handleLearnMore = (type) => {
    console.log(`Узнать больше о: ${type}`);
    // Здесь можно добавить навигацию к подробной информации
    alert(`Подробная информация о: ${type}`);
  };

  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#991E1E] via-[#B91C1C] to-[#DC2626] text-white py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
            <div className="flex-1">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
                EXECUTIVE EDUCATION
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold mb-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
                Мыслить масштабно. Действовать без ограничений
              </p>
              <div className="space-y-4 text-lg lg:text-xl leading-relaxed max-w-4xl animate-fade-in" style={{animationDelay: '0.6s'}}>
                <p className="font-bold">
                  Инвестируйте в расширение горизонтов — откройте, куда может привести открытое мышление 
                  вас и вашу организацию, благодаря нашим ведущим программам развития и индивидуальным решениям.
                </p>
                <p>
                  Нархоз Business School предлагает программы Executive Education для руководителей и специалистов, 
                  стремящихся к профессиональному росту и развитию бизнеса в условиях цифровой трансформации.
                </p>
            </div>
            </div>
            <div className="lg:ml-8 animate-fade-in" style={{animationDelay: '0.9s'}}>
              <Button
                onClick={handleDownloadBrochure}
                variant="secondary"
                size="lg"
                className="bg-white text-[#991E1E] hover:bg-gray-100 rounded-full px-8 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
                Скачать брошюру
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className="py-16 px-8 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-[#991E1E] mb-2">
                {animatedNumbers[0]}+
              </div>
              <div className="text-gray-600 font-medium">Лет опыта</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-[#991E1E] mb-2">
                {animatedNumbers[1]}+
              </div>
              <div className="text-gray-600 font-medium">Выпускников</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-[#991E1E] mb-2">
                {animatedNumbers[2]}+
              </div>
              <div className="text-gray-600 font-medium">Стран</div>
                </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-[#991E1E] mb-2">
                {animatedNumbers[3]}%
              </div>
              <div className="text-gray-600 font-medium">Удовлетворенность</div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Cards Section */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Individual Programs Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <img 
                  src="/images/graduates.jpg" 
                  alt="Индивидуальные программы" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Программы для индивидуальных участников</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Открытые программы для руководителей и специалистов по различным направлениям бизнеса и менеджмента. 
                Получите новые знания, навыки и связи для карьерного роста.
              </p>
              <div className="space-y-4">
                <Button 
                  onClick={() => handleLearnMore('индивидуальные программы')}
                  variant="text" 
                  className="text-[#991E1E] hover:text-[#B91C1C] p-0 group"
                >
                  Узнать больше
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </Button>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={() => handleProgramClick('индивидуальные')}
                    variant="text" 
                    className="text-[#991E1E] hover:text-[#B91C1C] p-0 text-sm group"
                  >
                    Все программы
                    <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                  </Button>
                  <Button 
                    onClick={handleCourseSearch}
                    variant="text" 
                    className="text-[#991E1E] hover:text-[#B91C1C] p-0 text-sm group"
                  >
                    Поиск курсов
                    <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                  </Button>
                </div>
              </div>
            </div>

            {/* Corporate Programs Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <img 
                  src="/images/biznes.jpg" 
                  alt="Корпоративные программы" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Корпоративные программы</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Специализированные программы для компаний, адаптированные под их потребности и корпоративную культуру. 
                Разрабатываем индивидуальные решения для развития команд и организаций.
              </p>
              <Button 
                onClick={() => handleLearnMore('корпоративные программы')}
                variant="text" 
                className="text-[#991E1E] hover:text-[#B91C1C] p-0 group"
              >
                Узнать больше
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Executive Education в новостях
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Нархоз Business School регулярно освещается в ведущих СМИ Казахстана. 
              Узнайте больше о наших программах и достижениях из авторитетных источников.
            </p>
          </div>

                    <div className="max-w-4xl mx-auto space-y-8">
            {/* News Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/images/news1.png" 
                  alt="Tengrinews Article" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Source Tag on Image */}
                <div className="absolute bottom-6 left-6">
                  <span className="bg-[#991E1E] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Tengrinews
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#991E1E] transition-colors">
                  "Билет в высшую лигу" - Нархоз Business School открывает доступ к статусу CCIM
                </h3>
                <div className="w-16 h-1 bg-[#991E1E] mb-4"></div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Узнайте о том, как наши программы Executive Education помогают профессионалам получить международные сертификации и повысить свой статус в бизнес-сообществе.
                </p>
                
                <button 
                  onClick={() => handleNewsClick('https://tengrinews.kz/article/bilet-vyisshuyu-ligu-narxoz-business-school-otkryivaet-3051/')}
                  className="inline-flex items-center text-[#991E1E] font-semibold hover:text-[#B91C1C] transition-all duration-300 text-lg"
                >
                  Читать статью
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/images/news2.png" 
                  alt="Forbes Article" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Source Tag on Image */}
                <div className="absolute bottom-6 left-6">
                  <span className="bg-[#991E1E] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Forbes Kazakhstan
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#991E1E] transition-colors">
                  Нархоз Business School открывает доступ к статусу CCIM
                </h3>
                <div className="w-16 h-1 bg-[#991E1E] mb-4"></div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Подробный анализ того, как программы Executive Education Нархоз Business School создают возможности для карьерного роста и международного признания.
                </p>
                
                <button 
                  onClick={() => handleNewsClick('https://forbes.kz/articles/bilet-vvysshuyu-ligu-narxoz-business-school-otkryvaet-dostup-kstatusu-ccim')}
                  className="inline-flex items-center text-[#991E1E] font-semibold hover:text-[#B91C1C] transition-all duration-300 text-lg"
                >
                  Читать статью
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Categories Section */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Направления программ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Выберите направление, которое соответствует вашим целям и потребностям
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategic Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-[#991E1E] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Стратегический менеджмент</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Программы для развития стратегического мышления и навыков управления в условиях 
                быстро меняющейся бизнес-среды.
              </p>
              <Button 
                onClick={() => handleViewCourses('стратегический менеджмент')}
                variant="text" 
                className="text-[#991E1E] hover:text-[#B91C1C] p-0 group"
              >
                Смотреть программы
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </Button>
            </div>

            {/* Leadership */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-[#991E1E] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-3.7 4.99c-.47.63-.47 1.46 0 2.09l3.7 4.99c.47.63 1.21 1 2.01 1h1.54c.8 0 1.54-.37 2.01-1L22.5 22H20z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Лидерство</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Развитие лидерских компетенций для руководителей всех уровней. Программы для опытных 
                и начинающих лидеров.
              </p>
              <Button 
                onClick={() => handleViewCourses('лидерство')}
                variant="text" 
                className="text-[#991E1E] hover:text-[#B91C1C] p-0 group"
              >
                Смотреть программы
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </Button>
            </div>

            {/* Finance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-[#991E1E] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Финансы</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Современные финансовые инструменты и стратегии для финансовых и нефинансовых специалистов. 
                Программы от ведущих экспертов.
              </p>
              <Button 
                onClick={() => handleViewCourses('финансы')}
                variant="text" 
                className="text-[#991E1E] hover:text-[#B91C1C] p-0 group"
              >
                Смотреть программы
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </Button>
            </div>

            {/* Digital Transformation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-[#991E1E] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Цифровая трансформация</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Программы по управлению цифровой трансформацией, искусственному интеллекту и 
                инновационным технологиям в бизнесе.
              </p>
              <Button 
                onClick={() => handleViewCourses('цифровая трансформация')}
                variant="text" 
                className="text-[#991E1E] hover:text-[#B91C1C] p-0 group"
              >
                Смотреть программы
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </Button>
            </div>

            {/* Marketing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-[#991E1E] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/>
                </svg>
                </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Маркетинг и продажи</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Современные маркетинговые стратегии, цифровой маркетинг и техники продаж для 
                развития бизнеса в цифровую эпоху.
              </p>
              <Button 
                onClick={() => handleViewCourses('маркетинг и продажи')}
                variant="text" 
                className="text-[#991E1E] hover:text-[#B91C1C] p-0 group"
              >
                Смотреть программы
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </Button>
                </div>

            {/* HR */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-[#991E1E] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-3.7 4.99c-.47.63-.47 1.46 0 2.09l3.7 4.99c.47.63 1.21 1 2.01 1h1.54c.8 0 1.54-.37 2.01-1L22.5 22H20zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Управление персоналом</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Программы по развитию HR-компетенций, управлению талантами и созданию эффективных 
                команд в организации.
              </p>
              <Button 
                onClick={() => handleViewCourses('управление персоналом')}
                variant="text" 
                className="text-[#991E1E] hover:text-[#B91C1C] p-0 group"
              >
                Смотреть программы
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Programs Section */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ближайшие программы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Изучите наши предстоящие программы и выберите подходящую для вашего развития
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#991E1E] text-white px-4 py-2 rounded-full inline-block text-sm font-semibold mb-4">
                Онлайн
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Стратегическое лидерство в цифровую эпоху</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Программа для руководителей, стремящихся развить стратегическое мышление и лидерские 
                навыки в условиях цифровой трансформации.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Длительность: 3 месяца
              </div>
              <Button 
                onClick={() => handleLearnMore('стратегическое лидерство')}
                variant="text" 
                className="text-[#991E1E] hover:text-[#B91C1C] p-0 group"
              >
                Подробнее
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </Button>
            </div>

            {/* Program 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#991E1E] text-white px-4 py-2 rounded-full inline-block text-sm font-semibold mb-4">
                Очно
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Управление изменениями и инновациями</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Практическая программа по управлению организационными изменениями и внедрению 
                инноваций в бизнес-процессы.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                Длительность: 2 месяца
                </div>
              <Button 
                onClick={() => handleLearnMore('управление изменениями')}
                variant="text" 
                className="text-[#991E1E] hover:text-[#B91C1C] p-0 group"
              >
                Подробнее
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
              </Button>
                </div>

            {/* Program 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#991E1E] text-white px-4 py-2 rounded-full inline-block text-sm font-semibold mb-4">
                Гибрид
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Цифровой маркетинг и аналитика</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Современные инструменты цифрового маркетинга, аналитика данных и стратегии 
                развития бизнеса в цифровой среде.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Длительность: 4 месяца
              </div>
              <Button 
                onClick={() => handleLearnMore('цифровой маркетинг')}
                variant="text" 
                className="text-[#991E1E] hover:text-[#B91C1C] p-0 group"
              >
                Подробнее
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-24 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши достижения</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Нархоз Business School - признанный лидер в области бизнес-образования в Центральной Азии
            </p>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Achievement 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-6xl font-bold text-[#991E1E] mb-4">#1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                В Центральной Азии по качеству бизнес-образования
              </h3>
              <p className="text-gray-600">Рейтинг Eduniversal 2024</p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-6xl font-bold text-[#991E1E] mb-4">FIBAA</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Международная аккредитация программ
              </h3>
              <p className="text-gray-600">Высший уровень качества образования</p>
            </div>
              </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-[#991E1E] mb-2">50+</div>
              <div className="text-gray-600">Международных партнеров</div>
              </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-[#991E1E] mb-2">200+</div>
              <div className="text-gray-600">Корпоративных клиентов</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-[#991E1E] mb-2">98%</div>
              <div className="text-gray-600">Рекомендуют нас</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 px-8 bg-[#991E1E] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы к развитию?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Свяжитесь с нами для получения консультации по программам Executive Education 
            и выбора подходящего курса для вашего развития
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleContactClick}
              variant="secondary"
              size="lg"
              className="bg-white text-[#991E1E] hover:bg-gray-100 rounded-full px-8 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Написать нам
            </Button>
            <Button
              onClick={handleDownloadBrochure}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#991E1E] rounded-full px-8 py-4 transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Скачать брошюру
            </Button>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ExecutiveEducation;
