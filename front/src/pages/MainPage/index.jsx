import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import EditText from '../../components/ui/EditText';
import Button from '../../components/ui/Button';

const MainPage = () => {
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
              className="flex-1 min-w-[120px] shadow-sm rounded-md bg-white h-[38px]"
            />
            <EditText
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="flex-1 min-w-[120px] shadow-sm rounded-md bg-white h-[38px]"
            />
            <EditText
              placeholder="Номер телефона"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="flex-1 min-w-[120px] shadow-sm rounded-md bg-white h-[38px]"
            />
            <Button
              type="submit"
              className="flex-1.5 min-w-[180px] bg-[#991E1E] text-white px-4 py-0 font-medium rounded-md shadow-sm hover:bg-[#7a1818] transition-colors flex items-center justify-center"
              style={{ height: '38px' }}
            >
              Получить консультацию
            </Button>
          </form>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-dark text-4xl font-bold leading-tight mb-12 slide-in-up">
            О бизнес школе
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed slide-in-up">
            Narxoz Business School готовит новое поколение лидеров, способных формировать устойчивое 
            будущее в Центральной Азии и за её пределами. Наши программы MBA, Executive MBA, DBA и 
            корпоративного обучения сочетают передовые исследования с практикой, помогая руководителям 
            и предпринимателям развивать видение, навыки и смелость для внедрения инноваций и лидерства 
            в быстро меняющемся мире. Вместе мы поднимаем стандарты бизнес-образования в регионе.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="px-8 max-w-7xl mx-auto mb-20">
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


      {/* History Section */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-dark text-4xl font-bold mb-4 slide-in-up">
              История
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto slide-in-up">
              Более 60 лет успешного развития экономического образования в Казахстане
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="slide-in-left">
              <div className="relative">
                <img 
                  src="/images/nar1963.jpg" 
                  alt="Исторический кампус Нархоз" 
                  className="w-full h-80 object-cover rounded-xl shadow-lg hover-scale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-3xl font-bold">1963</span>
                  <p className="text-sm">Год основания</p>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Истоки экономического образования
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>1963 год</strong> — основание Алма-Атинского института народного хозяйства (АИНХ) 
                  на базе экономического факультета Казахского государственного университета. 
                  Институт стал первым специализированным экономическим вузом в Казахстане.
                </p>
                <p>
                  В первые годы институт состоял из трёх факультетов: планово-экономического, 
                  учётно-экономического и финансово-кредитного. Уже в 1964 году была открыта 
                  аспирантура по 10 специальностям.
                </p>
                <p>
                  К 1973 году число преподавателей составляло 330 человек, среди них 7 докторов наук, 
                  а кандидатскую степень защитили 125 человек.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="slide-in-left lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/stud.png" 
                  alt="Студенты Нархоз" 
                  className="w-full h-48 object-cover rounded-lg shadow-md hover-scale"
                />
                <img 
                  src="/images/img_.png" 
                  alt="Современный кампус" 
                  className="w-full h-48 object-cover rounded-lg shadow-md hover-scale"
                />
              </div>
            </div>
            <div className="slide-in-right lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Эволюция и развитие
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>1991-2001 гг.</strong> — трансформация в Казахский государственный экономический 
                  университет, затем в Казахскую государственную академию управления, и далее в 
                  Казахский экономический университет имени Т. Рыскулова.
                </p>
                <p>
                  <strong>2008 год</strong> — открытие международной бизнес-школы (IBS), 
                  ставшей основой для создания современной Narxoz Business School.
                </p>
                <p>
                  <strong>2016 год</strong> — ребрендинг и возвращение к историческому названию 
                  "Университет Нархоз", символизирующий новый этап развития.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg slide-in-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Narxoz Business School сегодня
              </h3>
              <p className="text-gray-600 text-lg">
                Современная бизнес-школа, основанная на 60-летнем опыте экономического образования
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Традиции качества</h4>
                <p className="text-gray-600 text-sm">
                  60+ лет опыта в подготовке экономистов и управленцев высшего звена
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Международные стандарты</h4>
                <p className="text-gray-600 text-sm">
                  Аккредитации FIBAA, IQAA и членство в ведущих международных ассоциациях
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Выпускники-лидеры</h4>
                <p className="text-gray-600 text-sm">
                  Тысячи успешных выпускников в топ-менеджменте крупнейших компаний Казахстана
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="section-separator"></div>

      {/* Why Choose Us Section */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Decorative separator */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="mx-8">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-dark text-4xl font-bold mb-4 slide-in-up">
          Почему выбирают нас?
        </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto slide-in-up">
              Narxoz Business School предлагает уникальные возможности для развития карьеры и личностного роста
            </p>
          </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Международное признание */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 slide-in-up group border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">Международное признание</h3>
            <p className="text-gray-600 leading-relaxed">
          Наши программы аккредитованы ведущими организациями (FIBAA, IQAA) и соответствуют мировым стандартам качества.
            </p>
          </div>

                      {/* Современные подходы */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 slide-in-up group border border-gray-100" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Современные подходы</h3>
            <p className="text-gray-600 leading-relaxed">
              Обучение строится на кейсах, реальных бизнес-задачах и цифровых инструментах. Студенты решают то, что завтра будут решать топ-менеджеры.
            </p>
          </div>

          {/* Преподаватели-практики */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 slide-in-up group border border-gray-100" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Преподаватели-практики</h3>
            <p className="text-gray-600 leading-relaxed">
          Наши эксперты имеют богатый международный и профессиональный опыт, делясь с вами не только теорией, но и реальной практикой бизнеса.
            </p>
          </div>

                      {/* Гибкие форматы */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 slide-in-up group border border-gray-100" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Гибкие форматы</h3>
            <p className="text-gray-600 leading-relaxed">
          Очное, вечернее, онлайн или гибридное обучение — вы выбираете формат, который подходит вашему стилю жизни.
            </p>
          </div>

          {/* Карьерная поддержка */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 slide-in-up group border border-gray-100" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">Мощная карьерная поддержка</h3>
            <p className="text-gray-600 leading-relaxed">
          Центр карьеры, практика, ярмарки вакансий, акселераторы и партнёрские проекты помогают выпускникам быстро находить своё место в бизнесе.
            </p>
          </div>

          {/* Студенческая активность */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 slide-in-up group border border-gray-100" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">Студенческая активность</h3>
            <p className="text-gray-600 leading-relaxed">
          Бизнес-клубы, стартап-инкубаторы, дебаты, хакатоны и лидерские школы — у нас кипит жизнь не только на лекциях.
            </p>
          </div>
          </div>
        </div>
      </div>

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