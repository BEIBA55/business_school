import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import Slider from '../../components/ui/Slider';
import PagerIndicator from '../../components/ui/PagerIndicator';
import BusinessSchoolGrid from './BusinessSchoolGrid';
import NbsStatsSection from './NbsStatsSection';

const Homepage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [currentAccreditationPage, setCurrentAccreditationPage] = useState(0);
  const [currentGraduatesPage, setCurrentGraduatesPage] = useState(0);
  const [currentFacultyIndex, setCurrentFacultyIndex] = useState(0);
  const [currentAdminIndex, setCurrentAdminIndex] = useState(0);
  const [currentNewsPage, setCurrentNewsPage] = useState(0);
  const [expandedFacultyCards, setExpandedFacultyCards] = useState({});
  const [activeProgram, setActiveProgram] = useState(t('homepage.programs.allPrograms'));
  const [animatePrograms, setAnimatePrograms] = useState(false);
  const [expandedMBA, setExpandedMBA] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleContactFormChange = (field, value) => {
    setContactFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleConsultationSubmit = () => {
    alert(t('homepage.alerts.applicationSuccess'));
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleContactSubmit = () => {
    alert(t('homepage.alerts.applicationSuccess'));
    setContactFormData({ name: '', email: '', phone: '' });
  };

  const handleFacultyNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentFacultyIndex(Math.min(faculty.length - 4, currentFacultyIndex + 1));
    } else {
      setCurrentFacultyIndex(Math.max(0, currentFacultyIndex - 1));
    }
    // Сбрасываем состояние развернутых карточек при смене страницы
    setExpandedFacultyCards({});
  };

  const handleAdminNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentAdminIndex(Math.min(administration.length - 4, currentAdminIndex + 1));
    } else {
      setCurrentAdminIndex(Math.max(0, currentAdminIndex - 1));
    }
  };

  const toggleFacultyCard = (index) => {
    setExpandedFacultyCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleProgramSelect = (program) => {
    setAnimatePrograms(false);
    setExpandedMBA(false); // Сбрасываем состояние развернутой MBA

    setTimeout(() => {
      setActiveProgram(program);
      setTimeout(() => {
        setAnimatePrograms(true);
      }, 50);
    }, 300);
  };

  const handleMBAExpand = () => {
    setExpandedMBA(!expandedMBA);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimatePrograms(true);
    }, 500);
  }, []);

  // Сброс активной программы на "Все программы" при смене языка
  useEffect(() => {
    setActiveProgram(t('homepage.programs.allPrograms'));
  }, [t]);

  const trustPartners = [
    { src: '/images/RG_gold.png', name: 'RG Gold', url: 'https://rg-gold.com' },
    { src: '/images/ERG.png', name: 'ERG', url: 'https://www.erg.kz' },
    { src: '/images/Kazz.png', name: 'Kazz', url: 'https://www.kazzinc.com' },
    { src: '/images/Beeline.png', name: 'Beeline', url: 'https://beeline.kz' },
    { src: '/images/Halyk.png', name: 'Halyk Bank', url: 'https://www.halykbank.kz' },
    { src: '/images/forte.png', name: 'Forte', url: 'https://fortebank.com' },
    { src: '/images/alag.png', name: 'Alag', url: 'https://alag.kz' },
    { src: '/images/halyk_save.png', name: 'Halyk Save', url: 'https://www.halyksave.kz' },
    { src: '/images/temir.png', name: 'Temir', url: 'https://temirbank.kz' },
    { src: '/images/kaztele.png', name: 'Kaztele', url: 'https://www.kaztele.kz' },
    {
      src: '/images/img_image_15.png',
      name: 'British Chamber of Commerce in Kazakhstan',
      url: 'https://www.bcck.kz',
    },
    { src: '/images/img_image_25.png', name: 'AmCham', url: 'https://www.amcham.kz' },
  ];

  const accreditationItems = [
    {
      image: '/images/img_csmsiegelinstacc1bb4df2af7_1.png',
      text: '2% of universities in central asia',
    },
    {
      image: '/images/img_fibbaaccredited_1.png',
      text: '7% of universities in central asia',
    },
    {
      image: '/images/img_channels4profile_1.png',
      text: '7% of universities in central asia',
    },
    {
      image: '/images/img_cimalogo1280x647_1.png',
      text: 'Chartered institute of management accountants',
    },
    {
      image: '/images/MBA.png',
      text: 'MBA QS',
    },
    {
      image: '/images/CEEMAN.png',
      text: 'In the process of accreditation',
    },
    {
      image: '/images/ACCA.png',
      text: 'Accreditation & test center',
    },
    {
      image: '/images/img_images_1.png',
      text: 'Ranked in ui greenmetric',
    },
    {
      image: '/images/img_blob_1.png',
      text: 'Chartered institute of marketing',
    },
    {
      image: '/images/img_thelogoimpactrank_1.png',
      text: 'Quality of education (600-800)',
    },
    {
      image: '/images/img_images_2.png',
      text: '451-500 range together with top universities in asia',
    },
    {
      image: '/images/img_qsworlduniversityrankingslogo_1.png',
      text: 'Listed in the world top university rankings',
    },
    {
      image: '/images/img_qsworlduniversityrankingslogo_2.png',
      text: 'Governance (top 25% globally)',
    },
    {
      image: '/images/img_qs5starspkusratingsystem_1.png',
      text: 'Rated for excellence by qs stars',
    },
    {
      image: '/images/img_nppatameken_1.png',
      text: 'Top-3 universities in Kazakhstan',
    },
  ];

  // Основные программы MBA (отображаются в фильтре)
  const mainMBAPrograms = [
    {
      title: t('homepage.programs.mbaTitle'),
      description: t('homepage.programs.mbaDescription'),
      type: 'MBA',
      duration: t('homepage.programs.mbaDuration'),
      price: t('homepage.programs.mbaPrice'),
      isMain: true,
    },
    {
      title: t('homepage.programs.mbaFinanceTitle'),
      description: t('homepage.programs.mbaFinanceDescription'),
      type: 'MBA',
      duration: t('homepage.programs.mbaFinanceDuration'),
      price: t('homepage.programs.mbaFinancePrice'),
      isMain: true,
    },
  ];

  // Дополнительные программы MBA (скрыты из основного отображения)
  const additionalMBAPrograms = [
    {
      title: t('homepage.programs.mbaSustainabilityTitle'),
      description: t('homepage.programs.mbaSustainabilityDescription'),
      type: 'MBA',
      duration: t('homepage.programs.mbaSustainabilityDuration'),
      price: t('homepage.programs.mbaSustainabilityPrice'),
      isMain: false,
    },
    {
      title: t('homepage.programs.mbaAITitle'),
      description: t('homepage.programs.mbaAIDescription'),
      type: 'MBA',
      duration: t('homepage.programs.mbaAIDuration'),
      price: t('homepage.programs.mbaAIPrice'),
      isMain: false,
    },
    {
      title: t('homepage.programs.mbaCreativeTitle'),
      description: t('homepage.programs.mbaCreativeDescription'),
      type: 'MBA',
      duration: t('homepage.programs.mbaCreativeDuration'),
      price: t('homepage.programs.mbaCreativePrice'),
      isMain: false,
    },
    {
      title: t('homepage.programs.mbaFinTechTitle'),
      description: t('homepage.programs.mbaFinTechDescription'),
      type: 'MBA',
      duration: t('homepage.programs.mbaFinTechDuration'),
      price: t('homepage.programs.mbaFinTechPrice'),
      isMain: false,
    },
  ];

  const programs = [
    // Основные программы MBA
    ...mainMBAPrograms,
    // Дополнительные программы MBA
    ...additionalMBAPrograms,

    // Executive MBA блок
    {
      title: t('homepage.programs.executiveMbaTitle'),
      description: t('homepage.programs.executiveMbaDescription'),
      type: 'Executive MBA',
      duration: t('homepage.programs.executiveMbaDuration'),
      price: t('homepage.programs.executiveMbaPrice'),
    },
    {
      title: t('homepage.programs.executiveMbaNGOTitle'),
      description: t('homepage.programs.executiveMbaNGODescription'),
      type: 'Executive MBA',
      duration: t('homepage.programs.executiveMbaNGODuration'),
      price: t('homepage.programs.executiveMbaNGOPrice'),
    },
    {
      title: t('homepage.programs.executiveMbaCIOTitle'),
      description: t('homepage.programs.executiveMbaCIODescription'),
      type: 'Executive MBA',
      duration: t('homepage.programs.executiveMbaCIODuration'),
      price: t('homepage.programs.executiveMbaCIOPrice'),
    },

    // DBA блок
    {
      title: t('homepage.programs.dbaTitle'),
      description: t('homepage.programs.dbaDescription'),
      type: 'DBA',
      duration: t('homepage.programs.dbaDuration'),
      price: t('homepage.programs.dbaPrice'),
    },

    // Магистратура
    {
      title: t('homepage.programs.mscFinanceTitle'),
      description: t('homepage.programs.mscFinanceDescription'),
      type: t('homepage.programs.magistracy'),
      duration: t('homepage.programs.mscFinanceDuration'),
      price: t('homepage.programs.mscFinancePrice'),
    },
  ];

  const graduates = [
    { name: 'Ляззат Альжанова', description: 'Про Executive MBA для руководителей НПО НКО' },
    { name: 'Айнаш Касенова', description: 'Про Executive MBA для руководителей НПО НКО' },
    { name: 'Ляззат Альжанова', description: 'Про Executive MBA для руководителей НПО НКО' },
    { name: 'Ляззат Альжанова', description: 'Про Executive MBA для руководителей НПО НКО' },
  ];

  const faculty = [
    {
      image: '/images/Yelzhas.png',
      name: t('homepage.faculty.0.name'),
      description: t('homepage.faculty.0.description'),
    },
    {
      image: '/images/Oleg.png',
      name: t('homepage.faculty.1.name'),
      description: t('homepage.faculty.1.description'),
    },
    {
      image: '/images/Ulia.png',
      name: t('homepage.faculty.2.name'),
      description: t('homepage.faculty.2.description'),
    },
    {
      image: '/images/Irina.png',
      name: t('homepage.faculty.3.name'),
      description: t('homepage.faculty.3.description'),
    },
    {
      image: '/images/Lilya.png',
      name: t('homepage.faculty.4.name'),
      description: t('homepage.faculty.4.description'),
    },
    {
      image: '/images/Zevira.png',
      name: t('homepage.faculty.5.name'),
      description: t('homepage.faculty.5.description'),
    },
    {
      image: '/images/Kaisar.png',
      name: t('homepage.faculty.6.name'),
      description: t('homepage.faculty.6.description'),
    },
    {
      image: '/images/Marina.png',
      name: t('homepage.faculty.7.name'),
      description: t('homepage.faculty.7.description'),
    },
  ];

  const administration = [
    {
      image: '/images/img_rectangle_1178.png',
      name: t('homepage.administration.0.name'),
      position: t('homepage.administration.0.position'),
      email: 'marina.obraztsova@narxoz.kz',
    },
    {
      image: '/images/img_rectangle_1205.png',
      name: t('homepage.administration.1.name'),
      position: t('homepage.administration.1.position'),
      email: 'ewan.simpson@narxoz.kz',
    },
    {
      image: '/images/img_rectangle_1206.png',
      name: t('homepage.administration.2.name'),
      position: t('homepage.administration.2.position'),
      email: 'aikerim.myrzatayeva@narxoz.kz',
    },
    {
      image: '/images/img_rectangle_1207.png',
      name: t('homepage.administration.3.name'),
      position: t('homepage.administration.3.position'),
      email: 'agipa.monobaeva@narxoz.kz',
    },
    {
      image: '/images/Anna.png',
      name: t('homepage.administration.4.name'),
      position: t('homepage.administration.4.position'),
      email: 'anna.anissimova@narxoz.kz',
    },
    {
      image: '/images/Gulnar.png',
      name: t('homepage.administration.5.name'),
      position: t('homepage.administration.5.position'),
      email: 'gulnar.zhumanova@narxoz.kz',
    },
    {
      image: '/images/Saltanat.png',
      name: t('homepage.administration.6.name'),
      position: t('homepage.administration.6.position'),
      email: 'saltanat.abdelinova@narxoz.kz',
    },
  ];

  const newsItems = [
    {
      date: '15.01.2025',
      title: t('homepage.news.0.title'),
      description: t('homepage.news.0.description'),
    },
    {
      date: '10.01.2025',
      title: t('homepage.news.1.title'),
      description: t('homepage.news.1.description'),
    },
    {
      date: '05.01.2025',
      title: t('homepage.news.2.title'),
      description: t('homepage.news.2.description'),
    },
    {
      date: '01.01.2025',
      title: t('homepage.news.3.title'),
      description: t('homepage.news.3.description'),
    },
  ];

  // Фильтрация программ по выбранному типу
  const filteredPrograms = programs.filter((program) => {
    if (activeProgram === t('homepage.programs.allPrograms')) {
      // Исключаем программу MSc in Finance из общего отображения
      return program.title !== 'MSc in Finance';
    }
    if (activeProgram === t('homepage.programs.mba')) {
      // Показываем только основные программы MBA
      return program.type === 'MBA' && program.isMain;
    }
    return program.type === activeProgram;
  });

  // Группировка программ по типам для вертикального отображения
  const groupedPrograms = {
    MBA: programs.filter((program) => program.type === 'MBA' && program.isMain),
    'Executive MBA': programs.filter((program) => program.type === 'Executive MBA'),
    DBA: programs.filter((program) => program.type === 'DBA'),
    [t('homepage.programs.magistracy')]: programs.filter(
      (program) => program.type === t('homepage.programs.magistracy')
    ),
  };

  // Создаем отдельную группировку для отображения "Все программы" без MSc in Finance
  const allProgramsGrouped = {
    MBA: programs.filter((program) => program.type === 'MBA' && program.isMain),
    'Executive MBA': programs.filter((program) => program.type === 'Executive MBA'),
    DBA: programs.filter((program) => program.type === 'DBA'),
  };

  // Получаем все уникальные типы программ
  const programTypes = Object.keys(groupedPrograms);

  // --- ОБНОВЛЁННЫЙ массив с видео выпускников ---
  const graduateVideos = [
    {
      url: 'https://www.youtube.com/embed/p3vTgMVvWdk',
      description: t('homepage.graduates.videos.0.description'),
    },
    {
      url: 'https://www.youtube.com/embed/U6mHH-kGQfU',
      description: t('homepage.graduates.videos.1.description'),
    },
    {
      url: 'https://www.youtube.com/embed/WS3lCOtGg4s',
      description: t('homepage.graduates.videos.2.description'),
    },
    {
      url: 'https://www.youtube.com/embed/FL0H0I3rgcI',
      description: t('homepage.graduates.videos.3.description'),
    },
    {
      url: 'https://www.youtube.com/embed/1XPx8iKbS-Y',
      description: t('homepage.graduates.videos.4.description'),
    },
    {
      url: 'https://www.youtube.com/embed/UizMWwVKLOw',
      description: t('homepage.graduates.videos.5.description'),
    },
    {
      url: 'https://www.youtube.com/embed/l4IePhpXz8Y',
      description: t('homepage.graduates.videos.6.description'),
    },
    {
      url: 'https://www.youtube.com/embed/MPXMNiH6j5o',
      description: t('homepage.graduates.videos.7.description'),
    },
    {
      url: 'https://www.youtube.com/embed/m9--bfum4CU',
      description: t('homepage.graduates.videos.8.description'),
    },
    {
      url: 'https://www.youtube.com/embed/r5SVVe8ZOFo',
      description: t('homepage.graduates.videos.9.description'),
    },
    {
      url: 'https://www.youtube.com/embed/mv8ghkwGsUg',
      description: t('homepage.graduates.videos.10.description'),
    },
  ];

  // --- СТЕЙТ для пагинации видео выпускников ---
  const [graduateVideoPage, setGraduateVideoPage] = useState(0);
  const videosPerPage = 3;
  const totalGraduatePages = Math.ceil(graduateVideos.length / videosPerPage);
  const pagedGraduateVideos = graduateVideos.slice(
    graduateVideoPage * videosPerPage,
    graduateVideoPage * videosPerPage + videosPerPage
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Mobile Optimized */}
      <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:h-screen overflow-hidden">
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
        
        {/* Title Section - Mobile Optimized */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-lg text-center animate-fade-in-up">
            {t('homepage.hero.title')}
          </h1>
        </div>

        {/* Contact Form - Mobile Optimized */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-12 xl:bottom-20 left-0 right-0 z-10 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-tight mb-3 sm:mb-4 lg:mb-6 drop-shadow-lg text-center animate-fade-in-up">
            {t('homepage.hero.subtitle')}
          </h2>
          <form
            className="flex flex-col gap-2 sm:gap-3 w-full max-w-4xl mx-auto lg:flex-row lg:gap-2"
            onSubmit={e => { e.preventDefault(); handleConsultationSubmit(); }}
          >
            <EditText
              placeholder={t('forms.namePlaceholder')}
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="flex-1 min-w-0 shadow-sm rounded-md bg-white h-[40px] sm:h-[44px] mb-0 [&>input]:px-3 [&>input]:py-2 [&>input]:flex [&>input]:items-center [&>input]:text-sm sm:[&>input]:text-base"
            />
            <EditText
              placeholder={t('forms.emailPlaceholder')}
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="flex-1 min-w-0 shadow-sm rounded-md bg-white h-[40px] sm:h-[44px] mb-0 [&>input]:px-3 [&>input]:py-2 [&>input]:flex [&>input]:items-center [&>input]:text-sm sm:[&>input]:text-base"
            />
            <EditText
              placeholder={t('forms.phonePlaceholder')}
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="flex-1 min-w-0 shadow-sm rounded-md bg-white h-[40px] sm:h-[44px] mb-0 [&>input]:px-3 [&>input]:py-2 [&>input]:flex [&>input]:items-center [&>input]:text-sm sm:[&>input]:text-base"
            />
            <button
              type="submit"
              className="flex-1 lg:flex-none lg:min-w-[180px] xl:min-w-[200px] bg-[#991E1E] text-white px-3 sm:px-4 py-2 font-medium rounded-md shadow-sm hover:bg-[#7a1818] active:bg-[#660c0c] transition-colors flex items-center justify-center h-[40px] sm:h-[44px] text-xs sm:text-sm lg:text-base touch-manipulation"
            >
              {t('homepage.hero.consultationTitle')}
            </button>
          </form>
        </div>
      </div>

      {/* About Section - Mobile Optimized */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-dark text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-8 lg:mb-12 animate-fade-in-up">
            {t('homepage.about.title')}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed animate-fade-in-up">
            {t('homepage.about.description')}
          </p>
        </div>
      </div>

      {/* Business School Grid Section */}
      <BusinessSchoolGrid />

      {/* Programs Section - Mobile Optimized */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 animate-fade-in-up">
          <h2 className="text-dark text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-0">{t('homepage.programs.title')}</h2>
        </div>

        {/* Program Filter Buttons - Mobile Scrollable */}
        <div className="mb-8 sm:mb-12 animate-fade-in-up">
          <div className="block sm:hidden">
            {/* Mobile: Horizontal scrollable filters */}
            <div className="flex gap-3 overflow-x-auto pb-4 px-2 scrollbar-hide">
              <button 
                className={`px-4 py-2 rounded-full transition-all whitespace-nowrap font-medium text-sm ${activeProgram === t('homepage.programs.allPrograms') ? 'bg-red-800 text-white' : 'bg-gray-100 text-gray-700 active:bg-red-800 active:text-white'}`}
                onClick={() => handleProgramSelect(t('homepage.programs.allPrograms'))}
              >
                {t('homepage.programs.allPrograms')}
              </button>
              {programTypes.map((type) => (
                <button 
                  key={type}
                  className={`px-4 py-2 rounded-full transition-all whitespace-nowrap font-medium text-sm ${activeProgram === type ? 'bg-red-800 text-white' : 'bg-gray-100 text-gray-700 active:bg-red-800 active:text-white'}`}
                  onClick={() => handleProgramSelect(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          {/* Desktop: Original centered layout */}
          <div className="hidden sm:flex flex-wrap justify-center gap-4 p-6 border border-gray-300 rounded-full">
            <button 
              className={`px-6 py-2 rounded-full transition-all min-w-[120px] text-center font-medium ${activeProgram === t('homepage.programs.allPrograms') ? 'bg-red-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-red-800 hover:text-white'}`}
              onClick={() => handleProgramSelect(t('homepage.programs.allPrograms'))}
            >
              {t('homepage.programs.allPrograms')}
            </button>
            {programTypes.map((type) => (
              <button 
                key={type}
                className={`px-6 py-2 rounded-full transition-all min-w-[120px] text-center font-medium ${activeProgram === type ? 'bg-red-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-red-800 hover:text-white'}`}
                onClick={() => handleProgramSelect(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid - Simplified for Mobile */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 transition-all duration-500 ${animatePrograms ? 'opacity-100' : 'opacity-0'}`}>
          {(activeProgram === t('homepage.programs.allPrograms') 
            ? [...allProgramsGrouped.MBA, ...allProgramsGrouped['Executive MBA'], ...allProgramsGrouped.DBA]
            : filteredPrograms
          ).map((program, index) => {
            const isExecutiveMBA = program.title === 'Executive MBA';
            const isMainMBA = program.title === 'MBA';
            const CardWrapper = isExecutiveMBA || isMainMBA ? Link : 'div';
            const cardProps = isExecutiveMBA
              ? { to: '/programs/executive-mba' }
              : isMainMBA
                ? { to: '/programs/mba' }
                : {};

            return (
              <CardWrapper
                key={`${program.type}-${index}`}
                {...cardProps}
                className={`bg-gray-50 hover:bg-white p-4 sm:p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group ${animatePrograms ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  {/* Program Type Badge */}
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <span className="bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {program.type}
                    </span>
                    {(isExecutiveMBA || isMainMBA) && (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>

                  {/* Program Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {program.title}
                  </h3>

                  {/* Program Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-1 line-clamp-3">
                    {program.description}
                  </p>

                  {/* Program Details */}
                  <div className="mt-auto space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-gray-500">Длительность:</span>
                      <span className="font-medium text-gray-900">{program.duration}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-gray-500">Стоимость:</span>
                      <span className="font-bold text-red-600">{program.price}</span>
                    </div>
                  </div>

                  {/* Call to Action */}
                  {(isExecutiveMBA || isMainMBA) && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                      <span className="text-red-600 font-medium text-sm group-hover:text-red-700 transition-colors">
                        Подробнее →
                      </span>
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>

      {/* Разделитель */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* NBS Stats Section */}
      <NbsStatsSection />

      {/* Accreditations Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 slide-in-up">
          <h2 className="text-dark text-4xl font-bold">{t('homepage.sections.accreditations')}</h2>
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
              onClick={() =>
                setCurrentAccreditationPage(
                  Math.min(accreditationItems.length - 4, currentAccreditationPage + 1)
                )
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
          {accreditationItems
            .slice(currentAccreditationPage, currentAccreditationPage + 4)
            .map((item, index) => (
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
                  {item.text.split('\n').map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Разделитель */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Graduate Stories Section */}
      <div className="py-10 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 slide-in-up">
          <h2 className="text-dark text-4xl font-bold">{t('homepage.sections.graduates')}</h2>
          <div className="flex items-center space-x-4">
            <img
              src="/images/img_group_21.svg"
              alt="Previous"
              className={`w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70 ${graduateVideoPage === 0 ? 'opacity-30 pointer-events-none' : ''}`}
              onClick={() => setGraduateVideoPage(Math.max(0, graduateVideoPage - 1))}
            />
            <img
              src="/images/img_group_21_blue_gray_100.svg"
              alt="Next"
              className={`w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70 ${graduateVideoPage === totalGraduatePages - 1 ? 'opacity-30 pointer-events-none' : ''}`}
              onClick={() =>
                setGraduateVideoPage(Math.min(totalGraduatePages - 1, graduateVideoPage + 1))
              }
            />
          </div>
        </div>

        {/* Новая сетка с видео и пагинацией */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pagedGraduateVideos.map((video, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 flex flex-col items-center min-h-[340px] transition-transform duration-200 hover:scale-105"
              style={{ minWidth: '340px' }}
            >
              <div className="w-full mb-4" style={{ aspectRatio: '16/9', maxWidth: 420 }}>
                <iframe
                  width="100%"
                  height="220"
                  src={video.url}
                  title={`${t('homepage.sections.graduates')} ${graduateVideoPage * videosPerPage + idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                  style={{ minHeight: 160 }}
                ></iframe>
              </div>
              <div className="text-xl font-bold text-center mt-2 text-gray-800 leading-snug">
                {video.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Разделитель */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Разделитель */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Trust Section */}
      <div className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-red-100 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-100 rounded-full opacity-20 translate-x-12 translate-y-12"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-center mb-8 slide-in-up">
            <h2 className="text-dark text-4xl font-bold">{t('homepage.sections.partners')}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {trustPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white h-32 rounded-lg slide-in-up hover-scale smooth-animate flex items-center justify-center p-4 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-h-20 max-w-full object-contain transition-all duration-300 hover:scale-105"
                  title={partner.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Разделитель */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Support Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h2 className="text-dark text-4xl font-bold mb-6">{t('homepage.support.title')}</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              {t('homepage.support.description')}
            </p>
            <Link to="/support">
              <Button className="bg-[#991E1E] text-white px-6 py-0 rounded-md hover:bg-[#7a1818] transition-colors h-[38px] flex items-center justify-center">
                {t('homepage.support.button')}
              </Button>
            </Link>
          </div>

          <div className="slide-in-right">
            <img
              src="/images/support_section_image.png"
              alt={t('homepage.support.title')}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Разделитель */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Faculty Section */}
      <div className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-red-100 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-100 rounded-full opacity-20 translate-x-12 translate-y-12"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-center mb-8 slide-in-up">
            <h2 className="text-dark text-4xl font-bold">{t('homepage.sections.faculty')}</h2>
            <div className="flex items-center space-x-4">
              <img
                src="/images/img_group_21.svg"
                alt="Previous"
                className={`w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70 ${currentFacultyIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handleFacultyNavigation('prev')}
              />
              <img
                src="/images/img_group_21_blue_gray_100.svg"
                alt="Next"
                className={`w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70 ${currentFacultyIndex >= faculty.length - 4 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handleFacultyNavigation('next')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.slice(currentFacultyIndex, currentFacultyIndex + 4).map((member, index) => {
              const globalIndex = currentFacultyIndex + index;
              const isExpanded = expandedFacultyCards[globalIndex];

              return (
                <div
                  key={`${currentFacultyIndex}-${index}`}
                  className="slide-in-up hover-scale smooth-transition group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-red-200">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <h3 className="text-dark text-xl font-bold group-hover:text-red-600 transition-colors duration-300">
                          {member.name}
                        </h3>
                      </div>

                      <div className="relative">
                        <p
                          className={`text-gray-600 text-sm leading-relaxed transition-all duration-500 ${
                            isExpanded ? 'line-clamp-none' : 'line-clamp-3'
                          }`}
                        >
                          {member.description}
                        </p>

                        {/* Градиент для скрытия текста */}
                        {!isExpanded && (
                          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                        )}
                      </div>

                      {/* Кнопка "Читать дальше" */}
                      <button
                        onClick={() => toggleFacultyCard(globalIndex)}
                        className="mt-4 text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-300 flex items-center space-x-1 group/btn"
                      >
                        <span>
                          {isExpanded
                            ? t('homepage.programCards.collapse')
                            : t('homepage.programCards.more')}
                        </span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Разделитель */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* News Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 slide-in-up">
          <h2 className="text-dark text-4xl font-bold">{t('homepage.sections.news')}</h2>
          <Link
            to="/news"
            className="flex items-center space-x-4 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="text-muted text-lg">{t('homepage.sections.viewAllNews')}</span>
            <img src="/images/img_group_21_blue_gray_100.svg" alt="Arrow" className="w-7 h-7" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="slide-in-up hover-scale smooth-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-light-gray h-72 rounded-lg mb-4 relative">
                <Button className="absolute bottom-4 right-4 bg-light text-muted px-6 py-3 rounded-full text-sm">
                  {news.date}
                </Button>
              </div>
              <h3
                className="text-dark text-xl font-semibold mb-4 leading-tight cursor-pointer hover:text-red-800 transition-colors duration-300"
                onClick={() => console.log('Clicked news:', news.title)}
              >
                {news.title}
              </h3>
              <p className="text-muted text-base leading-relaxed">{news.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Разделитель */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Administration Section */}
      <div className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-red-100 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-100 rounded-full opacity-20 translate-x-12 translate-y-12"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-center mb-8 slide-in-up">
            <h2 className="text-dark text-4xl font-bold">
              {t('homepage.sections.administration')}
            </h2>
            <div className="flex items-center space-x-4">
              <img
                src="/images/img_group_21.svg"
                alt="Previous"
                className={`w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70 ${currentAdminIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handleAdminNavigation('prev')}
              />
              <img
                src="/images/img_group_21_blue_gray_100.svg"
                alt="Next"
                className={`w-7 h-7 cursor-pointer hover:scale-110 transition-transform hover:opacity-70 ${currentAdminIndex >= administration.length - 4 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handleAdminNavigation('next')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {administration.slice(currentAdminIndex, currentAdminIndex + 4).map((admin, index) => {
              const globalIndex = currentAdminIndex + index;

              return (
                <div
                  key={`${currentAdminIndex}-${index}`}
                  className="slide-in-up hover-scale smooth-transition group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-red-200 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={admin.image}
                        alt={admin.name}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <h3 className="text-dark text-xl font-bold group-hover:text-red-600 transition-colors duration-300">
                          {admin.name}
                        </h3>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-1">
                        {admin.position}
                      </p>

                      <p className="text-red-600 text-sm font-medium hover:text-red-700 transition-colors duration-300 mt-auto">
                        {admin.email}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Разделитель */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-primary py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h2 className="text-white text-4xl font-bold mb-6">Не знаете с чего начать?</h2>
            <p className="text-white text-lg leading-relaxed">
              Если вы хотите больше узнать об Narxoz Business School или не знаете, какую программу
              обучения выбрать, оставьте заявку — и мы перезвоним
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
