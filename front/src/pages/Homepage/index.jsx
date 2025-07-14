import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import Slider from '../../components/ui/Slider';
import PagerIndicator from '../../components/ui/PagerIndicator';
import BusinessSchoolGrid from './BusinessSchoolGrid';
import NbsStatsSection from './NbsStatsSection';

const Homepage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [currentAccreditationPage, setCurrentAccreditationPage] = useState(0);
  const [currentPartnersPage, setCurrentPartnersPage] = useState(0);
  const [currentGraduatesPage, setCurrentGraduatesPage] = useState(0);
  const [currentTrustPage, setCurrentTrustPage] = useState(0);
  const [currentFacultyPage, setCurrentFacultyPage] = useState(0);
  const [currentAdminPage, setCurrentAdminPage] = useState(0);
  const [currentNewsPage, setCurrentNewsPage] = useState(0);
  const [activeProgram, setActiveProgram] = useState('Все программы');
  const [animatePrograms, setAnimatePrograms] = useState(false);
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

  const handleContactFormChange = (field, value) => {
    setContactFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleConsultationSubmit = () => {
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleContactSubmit = () => {
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setContactFormData({ name: '', email: '', phone: '' });
  };

  const handleProgramSelect = (program) => {
    setAnimatePrograms(false);
    
    setTimeout(() => {
      setActiveProgram(program);
      setTimeout(() => {
        setAnimatePrograms(true);
      }, 50);
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimatePrograms(true);
    }, 500);
  }, []);

  const partnerImages = [
    // Первая страница
    [
      { src: '/images/img_image_14.png', name: 'Penn State Smeal' },
      { src: '/images/img_image_15.png', name: 'British Chamber of Commerce in Kazakhstan' },
      { src: '/images/img_image_16.png', name: 'ESMT Berlin' },
      { src: '/images/img_image_17.png', name: 'Skills Development Scotland (Government Agency)' }
    ],
    // Вторая страница
    [
      { src: '/images/img_image_18.png', name: 'Hult ExEd' },
      { src: '/images/img_image_19.png', name: 'CUD' },
      { src: '/images/img_image_21.png', name: 'Abertay University' },
      { src: '/images/img_image_22.png', name: 'Zurich Elite Business School (ZEBS)' }
    ],
    // Третья страница
    [
      { src: '/images/img_image_23.png', name: 'Birmingham University' },
      { src: '/images/img_image_24.png', name: 'International University of Monaco' },
      { src: '/images/img_image_25.png', name: 'AmCham' },
      { src: '/images/img_image_26.png', name: 'СберУниверситет' }
    ],
    // Четвертая страница
    [
      { src: '/images/img_image_27.png', name: 'SBS Business School' },
      { src: '/images/img_image_28.png', name: 'ESSCA' },
      { src: '/images/img_image_14.png', name: 'Transitional Markets Consultancy' },
      { src: '/images/img_image_15.png', name: 'EU Business School' }
    ]
  ];

  const accreditationItems = [
    {
      image: '/images/img_csmsiegelinstacc1bb4df2af7_1.png',
      text: '2% of universities in central asia'
    },
    {
      image: '/images/img_fibbaaccredited_1.png',
      text: '7% of universities in central asia'
    },
    {
      image: '/images/img_channels4profile_1.png',
      text: '7% of universities in central asia'
    },
    {
      image: '/images/img_cimalogo1280x647_1.png',
      text: 'Chartered institute of management accountants'
    },
    {
      image: '/images/img_images_1.png',
      text: 'Ranked in ui greenmetric'
    },
    {
      image: '/images/img_blob_1.png',
      text: 'Chartered institute of marketing'
    },
    {
      image: '/images/img_thelogoimpactrank_1.png',
      text: 'Quality of education (600-800)'
    },
    {
      image: '/images/img_images_2.png',
      text: '451-500 range together with top universities in asia'
    },
    {
      image: '/images/img_qsworlduniversityrankingslogo_1.png',
      text: 'Listed in the world top university rankings'
    },
    {
      image: '/images/img_qsworlduniversityrankingslogo_2.png',
      text: 'Governance (top 25% globally)'
    },
    {
      image: '/images/img_qs5starspkusratingsystem_1.png',
      text: 'Rated for excellence by qs stars'
    },
    {
      image: '/images/img_nppatameken_1.png',
      text: 'Top-3 universities in Kazakhstan'
    }
  ];

  const programs = [
    // MBA блок
    {
      title: 'MBA',
      description: 'Полноценная программа MBA для формирования лидеров нового поколения. Стратегическое управление, финансы, маркетинг. 2 года обучения.',
      type: 'MBA',
      duration: '2 года',
      price: '3 000 000 тенге'
    },
    {
      title: 'MBA Программа Прикладных Финансов',
      description: 'Специализированная программа MBA с углубленным изучением финансов, финансового анализа и корпоративных финансов.',
      type: 'MBA',
      duration: '2 года',
      price: '3 200 000 тенге'
    },
    {
      title: 'MBA "Устойчивое предпринимательство"',
      description: 'Программа MBA с фокусом на устойчивое развитие бизнеса, экологически ответственное предпринимательство и социальное воздействие.',
      type: 'MBA',
      duration: '2 года',
      price: '3 100 000 тенге'
    },
    {
      title: 'MBA "ИИ в бизнесе"',
      description: 'Инновационная программа MBA, посвященная применению искусственного интеллекта в современном бизнесе и цифровой трансформации.',
      type: 'MBA',
      duration: '2 года',
      price: '3 300 000 тенге'
    },
    {
      title: 'MBA "Креативная экономика"',
      description: 'Программа MBA для развития навыков управления в креативных индустриях, медиа, искусстве и инновационной экономике.',
      type: 'MBA',
      duration: '2 года',
      price: '3 000 000 тенге'
    },
    {
      title: 'MBA "Финансовые технологии (FinTech)"',
      description: 'Специализированная программа MBA для изучения финансовых технологий, блокчейна, цифровых платежей и инновационных финансовых услуг.',
      type: 'MBA',
      duration: '2 года',
      price: '3 400 000 тенге'
    },
    
    // Executive MBA блок
    {
      title: 'Executive MBA',
      description: 'Программа для топ-менеджеров. Стратегическое управление и бизнес-моделирование. Модульный формат для работающих руководителей.',
      type: 'Executive MBA',
      duration: '1 год',
      price: '2 625 000 тенге'
    },
    {
      title: 'Executive MBA для руководителей НПО/НКО',
      description: 'Специализированная программа Executive MBA для руководителей некоммерческих организаций и социальных предприятий.',
      type: 'Executive MBA',
      duration: '1 год',
      price: '2 400 000 тенге'
    },
    {
      title: 'Executive MBA для CIO',
      description: 'Программа Executive MBA для директоров по информационным технологиям и руководителей IT-подразделений.',
      type: 'Executive MBA',
      duration: '1 год',
      price: '2 500 000 тенге'
    },
    
    // DBA блок
    {
      title: 'DBA (Доктор делового администрирования)',
      description: 'Высший уровень бизнес-образования для топ-руководителей и владельцев бизнеса. Программа для практикующих профессионалов.',
      type: 'DBA',
      duration: '3 года',
      price: '4 500 000 тенге'
    },
    
    // Магистратура
    {
      title: 'MSc in Finance',
      description: 'Магистр наук в области финансов. Программа для специалистов, желающих углубить знания в финансовой сфере.',
      type: 'Магистратура',
      duration: '1.5 года',
      price: '2 800 000 тенге'
    }
  ];

  const graduates = [
    { name: 'Ляззат Альжанова', description: 'Про Executive MBA для руководителей НПО НКО' },
    { name: 'Айнаш Касенова', description: 'Про Executive MBA для руководителей НПО НКО' },
    { name: 'Ляззат Альжанова', description: 'Про Executive MBA для руководителей НПО НКО' },
    { name: 'Ляззат Альжанова', description: 'Про Executive MBA для руководителей НПО НКО' }
  ];

  const faculty = [
    { name: 'Ляззат Альжанова', description: 'Про Executive MBA для руководителей НПО НКО' },
    { name: 'Ляззат Альжанова', description: 'Про Executive MBA для руководителей НПО НКО' },
    { name: 'Ляззат Альжанова', description: 'Про Executive MBA для руководителей НПО НКО' },
    { name: 'Ляззат Альжанова', description: 'Про Executive MBA для руководителей НПО НКО' }
  ];

  const administration = [
    {
      image: '/images/img_rectangle_1178.png',
      name: 'Марина Образцова',
      position: 'Директор Narxoz Business School'
    },
    {
      image: '/images/img_rectangle_1205.png',
      name: 'Юан Симпсон',
      position: 'Доктор, PhD, директор по международному развитию Narxoz Business School'
    },
    {
      image: '/images/img_rectangle_1206.png',
      name: 'Айкерим Мырзатаева',
      position: 'Заместитель директора Narxoz Business School'
    },
    {
      image: '/images/img_rectangle_1207.png',
      name: 'Агипа Монобаева',
      position: 'Академический директор Narxoz Business School, руководитель DBA, доктор философии (PhD)'
    }
  ];

  const newsItems = [
    {
      date: '12.06.2025',
      title: 'Welcome Brunch в честь запуска группы DBA прошел в Нархозе',
      description: 'Гости подчеркнули значимость и статус программы DBA как платформы для подготовки лидеров нового поколения.'
    },
    {
      date: '12.06.2025',
      title: 'Welcome Brunch в честь запуска группы DBA прошел в Нархозе',
      description: 'Гости подчеркнули значимость и статус программы DBA как платформы для подготовки лидеров нового поколения.'
    },
    {
      date: '12.06.2025',
      title: 'Welcome Brunch в честь запуска группы DBA прошел в Нархозе',
      description: 'Гости подчеркнули значимость и статус программы DBA как платформы для подготовки лидеров нового поколения.'
    },
    {
      date: '12.06.2025',
      title: 'Welcome Brunch в честь запуска группы DBA прошел в Нархозе',
      description: 'Гости подчеркнули значимость и статус программы DBA как платформы для подготовки лидеров нового поколения.'
    },
    {
      date: '12.06.2025',
      title: 'Welcome Brunch в честь запуска группы DBA прошел в Нархозе',
      description: 'Гости подчеркнули значимость и статус программы DBA как платформы для подготовки лидеров нового поколения.'
    },
    {
      date: '12.06.2025',
      title: 'Welcome Brunch в честь запуска группы DBA прошел в Нархозе',
      description: 'Гости подчеркнули значимость и статус программы DBA как платформы для подготовки лидеров нового поколения.'
    }
  ];

  // Фильтрация программ по выбранному типу
  const filteredPrograms = programs.filter(program => {
    if (activeProgram === 'Все программы') {
      return true;
    }
    return program.type === activeProgram;
  });

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
            Narxoz Business School
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

      {/* Business School Grid Section */}
      <BusinessSchoolGrid />

      {/* MBA Programs Image */}
      {/* <div className="px-8 max-w-7xl mx-auto mb-16">
        <img 
          src="/images/img_image_13.png" 
          alt="MBA Programs Overview" 
          className="w-full h-auto rounded-lg fade-in hover-scale"
        />
      </div> */}

      {/* Programs Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 slide-in-up">
          <h2 className="text-dark text-4xl font-bold">Дипломные Программы</h2>
        </div>

        {/* Program Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 p-6 border border-gray-300 rounded-full slide-in-up">
          <Button 
            className={`px-6 py-2 rounded-full transition-all min-w-[120px] text-center ${activeProgram === 'Все программы' ? 'bg-red-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-800 hover:text-white'}`}
            onClick={() => handleProgramSelect('Все программы')}
          >
            Все программы
          </Button>
          <Button 
            className={`px-6 py-2 rounded-full transition-all min-w-[120px] text-center ${activeProgram === 'MBA' ? 'bg-red-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-800 hover:text-white'}`}
            onClick={() => handleProgramSelect('MBA')}
          >
            MBA
          </Button>
          <Button 
            className={`px-6 py-2 rounded-full transition-all min-w-[140px] text-center ${activeProgram === 'Executive MBA' ? 'bg-red-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-800 hover:text-white'}`}
            onClick={() => handleProgramSelect('Executive MBA')}
          >
            Executive MBA
          </Button>
          <Button 
            className={`px-6 py-2 rounded-full transition-all min-w-[120px] text-center ${activeProgram === 'DBA' ? 'bg-red-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-800 hover:text-white'}`}
            onClick={() => handleProgramSelect('DBA')}
          >
            DBA
          </Button>
          <Button 
            className={`px-6 py-2 rounded-full transition-all min-w-[120px] text-center ${activeProgram === 'Магистратура' ? 'bg-red-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-800 hover:text-white'}`}
            onClick={() => handleProgramSelect('Магистратура')}
          >
            Магистратура
          </Button>
        </div>

        {/* Programs Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${animatePrograms ? 'opacity-100' : 'opacity-0'}`}>
          {filteredPrograms.map((program, index) => {
            const isExecutiveMBA = program.title === 'Executive MBA';
            const CardWrapper = isExecutiveMBA ? Link : 'div';
            const cardProps = isExecutiveMBA ? { to: '/programs/executive-mba' } : {};
            
            return (
              <CardWrapper 
                key={index} 
                {...cardProps}
                className={`bg-gray-100 p-6 rounded-lg hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer transform group ${animatePrograms ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} border border-gray-200`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">
                  {program.type}
                </span>
                {program.duration && (
                  <span className="text-xs text-gray-500">
                    {program.duration}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-4 leading-tight transition-colors duration-300 text-gray-800 group-hover:text-red-800">
                {program.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {program.description}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  Подробнее
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-red-800 group-hover:bg-red-800 group-hover:border-red-800 transition-all duration-300 group-hover:shadow-lg">
                  <svg 
                    className="w-4 h-4 text-red-800 group-hover:text-white transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </CardWrapper>
            );
          })}
        </div>
      </div>

      {/* NBS Stats Section */}
      <NbsStatsSection />

      {/* Accreditations Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 slide-in-up">
          <h2 className="text-dark text-4xl font-bold">Аккредитации</h2>
          <div className="flex items-center space-x-4">
            <img 
              src="/images/img_group_21.svg" 
              alt="Previous" 
              className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70"
              onClick={() => setCurrentAccreditationPage(Math.max(0, currentAccreditationPage - 1))}
            />
            <img 
              src="/images/img_group_21_blue_gray_100.svg" 
              alt="Next" 
              className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70"
              onClick={() => setCurrentAccreditationPage(Math.min(accreditationItems.length - 4, currentAccreditationPage + 1))}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
          {accreditationItems.slice(currentAccreditationPage, currentAccreditationPage + 4).map((item, index) => (
            <div 
              key={`${currentAccreditationPage}-${index}`} 
              className="bg-white p-6 text-center rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={item.image} 
                alt="Accreditation" 
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <p 
                className="text-gray-600 text-sm leading-relaxed hover:text-gray-800 transition-colors cursor-pointer"
                onClick={() => console.log('Clicked accreditation:', item.text)}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-dark text-4xl font-bold mb-12 text-center slide-in-up">Партнеры</h2>
        
        {/* Автоматическая прокрутка партнеров */}
        <div className="relative overflow-hidden partners-container">
          <div className="flex partners-scroll">
            {/* Дублируем список партнеров для бесшовной прокрутки */}
            {[...partnerImages.flat(), ...partnerImages.flat()].map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8 flex flex-col items-center text-center group"
                style={{ minWidth: '200px' }}
              >
                <div className="mb-6 h-20 w-40 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                  <img 
                    src={partner.src} 
                    alt={partner.name}
                    className="max-h-16 max-w-36 object-contain transition-all duration-300"
                  />
                </div>
                <h3 
                  className="text-gray-600 text-xs font-medium leading-tight hover:text-red-800 transition-colors cursor-pointer text-center px-2"
                  onClick={() => console.log('Clicked partner:', partner.name)}
                >
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        
        
      </div>

      {/* Graduate Stories Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 slide-in-up">
          <h2 className="text-dark text-4xl font-bold">Истории выпускников</h2>
          <div className="flex items-center space-x-4">
            <img 
              src="/images/img_group_21.svg" 
              alt="Previous" 
              className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70"
              onClick={() => setCurrentGraduatesPage(Math.max(0, currentGraduatesPage - 1))}
            />
            <img 
              src="/images/img_group_21_blue_gray_100.svg" 
              alt="Next" 
              className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70"
              onClick={() => setCurrentGraduatesPage(Math.min(1, currentGraduatesPage + 1))}
          />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {graduates.map((graduate, index) => (
            <div key={index} className="bg-light-gray h-64 rounded-lg mb-4 slide-in-up hover-scale smooth-animate" style={{ animationDelay: `${index * 0.1}s` }}></div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {graduates.map((graduate, index) => (
            <div key={index} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-dark text-2xl font-semibold mb-2">
                {graduate.name}
              </h3>
              <p className="text-muted text-lg">
                {graduate.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 slide-in-up">
          <h2 className="text-dark text-4xl font-bold">Нам доверяют</h2>
          <div className="flex items-center space-x-4">
            <img 
              src="/images/img_group_21.svg" 
              alt="Previous" 
              className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70"
              onClick={() => setCurrentTrustPage(Math.max(0, currentTrustPage - 1))}
            />
            <img 
              src="/images/img_group_21_blue_gray_100.svg" 
              alt="Next" 
              className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70"
              onClick={() => setCurrentTrustPage(Math.min(1, currentTrustPage + 1))}
          />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {Array.from({ length: 18 }, (_, index) => (
            <div key={index} className="bg-light-gray h-48 rounded-lg slide-in-up hover-scale smooth-animate" style={{ animationDelay: `${index * 0.05}s` }}></div>
          ))}
        </div>
      </div>

      {/* Support Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h2 className="text-dark text-4xl font-bold mb-6">
              Поддержать бизнес-школу
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Narxoz Business School– это программы развития профессионалов и руководителей 
              и самое сильное бизнес сообщество. Наши корпоративные связи, партнерство – 
              это действительно среда для развития, появления новых знаний и ваших будущих успехов. 
              Вы можете стать партнером любой программы, выделить собственные гранты или 
              стипендиальную поддержку нашим слушателям. Присоединяйтесь, будем вместе менять 
              себя, бизнес и мир к лучшему!
            </p>
            <Button className="bg-[#991E1E] text-white px-6 py-0 rounded-md hover:bg-[#7a1818] transition-colors h-[38px] flex items-center justify-center">
              Поддержать
            </Button>
          </div>
          
          <div className="slide-in-right">
            <img 
              src="/images/support_section_image.png" 
              alt="Поддержать бизнес-школу" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Faculty Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 slide-in-up">
          <h2 className="text-dark text-4xl font-bold">Faculty</h2>
          <div className="flex items-center space-x-4">
            <img 
              src="/images/img_group_21.svg" 
              alt="Previous" 
              className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70"
              onClick={() => setCurrentFacultyPage(Math.max(0, currentFacultyPage - 1))}
            />
            <img 
              src="/images/img_group_21_blue_gray_100.svg" 
              alt="Next" 
              className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70"
              onClick={() => setCurrentFacultyPage(Math.min(1, currentFacultyPage + 1))}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, index) => (
            <div key={index} className="slide-in-up hover-scale smooth-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-light-gray h-96 rounded-lg mb-4"></div>
              <h3 className="text-dark text-2xl font-semibold mb-2">
                {member.name}
              </h3>
              <p className="text-muted text-lg">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 slide-in-up">
          <h2 className="text-dark text-4xl font-bold">Новости</h2>
          <div className="flex items-center space-x-4">
            <span className="text-muted text-lg">Смотреть все новости</span>
            <img src="/images/img_group_21_blue_gray_100.svg" alt="Arrow" className="w-7 h-7" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {newsItems.slice(0, 2).map((news, index) => (
            <div key={index} className="slide-in-up hover-scale smooth-animate" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-light-gray h-80 rounded-lg mb-4 relative">
                <Button className="absolute bottom-4 right-4 bg-light text-muted px-6 py-3 rounded-full">
                  {news.date}
                </Button>
              </div>
              <h3 
                className="text-dark text-2xl font-semibold mb-4 leading-tight cursor-pointer hover:text-red-800 transition-colors duration-300"
                onClick={() => console.log('Clicked news:', news.title)}
              >
                {news.title}
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                {news.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.slice(2).map((news, index) => (
            <div key={index} className="slide-in-up hover-scale smooth-animate" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
              <div className="bg-light-gray h-72 rounded-lg mb-4"></div>
              <h3 
                className="text-dark text-2xl font-semibold mb-4 leading-tight cursor-pointer hover:text-red-800 transition-colors duration-300"
                onClick={() => console.log('Clicked news:', news.title)}
              >
                {news.title}
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                {news.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Administration Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 slide-in-up">
          <h2 className="text-dark text-4xl font-bold">Администрация школы</h2>
          <div className="flex items-center space-x-4">
            <img src="/images/img_group_21.svg" alt="Previous" className="w-7 h-7" />
            <img src="/images/img_group_21_blue_gray_100.svg" alt="Next" className="w-7 h-7" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {administration.map((admin, index) => (
            <div key={index} className="slide-in-up hover-scale smooth-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <img 
                src={admin.image} 
                alt={admin.name} 
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
              <h3 className="text-dark text-2xl font-semibold mb-2">
                {admin.name}
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                {admin.position}
              </p>
            </div>
          ))}
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
              onChange={(e) => handleContactFormChange('name', e.target.value)}
              className="h-[38px]"
            />
            <EditText
              placeholder="Email"
              value={contactFormData.email}
              onChange={(e) => handleContactFormChange('email', e.target.value)}
              className="h-[38px]"
            />
            <EditText
              placeholder="Номер"
              value={contactFormData.phone}
              onChange={(e) => handleContactFormChange('phone', e.target.value)}
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

export default Homepage;