import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Graduates = () => {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    // Анимация статистики при загрузке страницы
    const timer = setTimeout(() => {
      setAnimateStats(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { 
      number: '3500', 
      label: 'выпускников', 
      icon: (
        <svg className="w-12 h-12 text-[#991E1E]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    },
    { 
      number: '3', 
      label: 'языка: казахский, английский, русский', 
      icon: (
        <svg className="w-12 h-12 text-[#991E1E]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.77-6.99l-.01-.01-1.07-1.07-1.06 1.06c-1.3 1.3-1.31 3.4-.03 4.71l.03.03-2.51 2.54c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l2.54-2.51.03.03c1.31 1.28 3.41 1.27 4.71-.03l1.06-1.06-1.07-1.07-.01-.01c-2.34-1.24-5.05-.97-6.99.77l-.03.03-2.51 2.54c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0z"/>
        </svg>
      )
    },
    { 
      number: '2', 
      label: 'страны: Казахстан, Узбекистан', 
      icon: (
        <svg className="w-12 h-12 text-[#991E1E]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    { 
      number: '5', 
      label: 'городов: Алматы, Астана, Шымкент, Актау, Ташкент', 
      icon: (
        <svg className="w-12 h-12 text-[#991E1E]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      )
    }
  ];

  const events = [
    {
      title: 'Ежегодная встреча выпускников',
      date: '15 декабря 2024',
      description: 'Традиционная встреча выпускников всех лет для обмена опытом и установления новых связей'
    },
    {
      title: 'Менторская программа',
      date: 'Постоянно',
      description: 'Программа наставничества, где опытные выпускники помогают новым студентам'
    },
    {
      title: 'Непрерывное обучение',
      date: 'Ежемесячно',
      description: 'Семинары и мастер-классы для постоянного развития навыков'
    }
  ];

  const news = [
    {
      title: 'Выпускник MBA 2020 года назначен CEO крупной компании',
      date: '10 ноября 2024',
      excerpt: 'Алексей Петров, выпускник программы MBA 2020 года, назначен генеральным директором...'
    },
    {
      title: 'Успешный запуск стартапа выпускницей Executive MBA',
      date: '5 ноября 2024',
      excerpt: 'Мария Иванова, выпускница Executive MBA 2022 года, успешно запустила технологический стартап...'
    },
    {
      title: 'Международная конференция выпускников в Астане',
      date: '1 ноября 2024',
      excerpt: 'В столице Казахстана прошла первая международная конференция выпускников Narxoz Business School...'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/ForGraduate.png" 
            alt="Выпускники Narxoz Business School" 
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Выпускникам
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Присоединяйтесь к сообществу лидеров, которые меняют мир к лучшему
          </p>
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link 
              to="#community" 
              className="inline-block bg-[#991E1E] hover:bg-[#7A1818] text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша статистика</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Сообщество выпускников Narxoz Business School растет с каждым годом
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  animateStats ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#991E1E] mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Narxoz Business School: Наше сообщество
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Narxoz Business School — это не просто школа, это сообщество лидеров, 
                  объединяющее более 3500 выпускников в Казахстане. Наши выпускники строят 
                  мосты между культурами, ведут бизнес без границ и вносят вклад в устойчивое 
                  и инклюзивное будущее.
                </p>
                <p>
                  Сеть выпускников обеспечивает поддержку и возможности на каждом этапе 
                  вашего пути. Ежегодно мы собираемся на встречи, участвуем в программах 
                  непрерывного обучения, сессиях менторства и совместных инициативах, 
                  чтобы делиться опытом и расти вместе.
                </p>
                <p>
                  Вместе мы доказываем, что бизнес может быть силой, которая меняет мир к лучшему.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-xl font-bold text-[#991E1E]">
                  Присоединяйтесь к Narxoz Business School и станьте частью сообщества, 
                  которое вдохновляет, поддерживает и двигается вперёд вместе с вами.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-to-br from-[#991E1E] to-[#7A1818] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Преимущества сообщества</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.99 2.5V20h-2v-8.5l-1.99-2.5A2.5 2.5 0 0 0 7 8H5.46c-.8 0-1.54.37-2.01 1L.96 16.37A1.5 1.5 0 0 0 2.5 18H5v6h2v-6h2v6h2v-6h2v6h2v-6h2z"/>
                    </svg>
                    <span>Сеть профессиональных контактов</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                    </svg>
                    <span>Доступ к эксклюзивным образовательным программам</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                    </svg>
                    <span>Карьерные возможности и менторство</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span>Международные связи и партнерства</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Участие в инновационных проектах</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events and News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Events */}
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Расписание мероприятий</h3>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-gray-900">{event.title}</h4>
                      <span className="text-sm text-[#991E1E] font-medium">{event.date}</span>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* News */}
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Новости</h3>
              <div className="space-y-6">
                {news.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                      <span className="text-sm text-[#991E1E] font-medium">{item.date}</span>
                    </div>
                    <p className="text-gray-600">{item.excerpt}</p>
                    <button className="text-[#991E1E] font-medium hover:underline mt-3">
                      Читать далее →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#991E1E] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Остались вопросы?</h2>
          <p className="text-xl mb-8">
            Свяжитесь с нами для получения дополнительной информации о сообществе выпускников
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/support" 
              className="inline-block bg-white text-[#991E1E] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Связаться с нами
            </Link>
            <Link 
              to="/news" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#991E1E] transition-colors duration-300"
            >
              Все новости
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Graduates; 