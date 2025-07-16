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
  const [currentGraduatesPage, setCurrentGraduatesPage] = useState(0);
  const [currentFacultyIndex, setCurrentFacultyIndex] = useState(0);
  const [currentAdminIndex, setCurrentAdminIndex] = useState(0);
  const [currentNewsPage, setCurrentNewsPage] = useState(0);
  const [expandedFacultyCards, setExpandedFacultyCards] = useState({});
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
    setExpandedFacultyCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
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
    { src: '/images/img_image_14.png', name: 'Penn State Smeal', url: 'https://www.smeal.psu.edu' },
    { src: '/images/img_image_15.png', name: 'British Chamber of Commerce in Kazakhstan', url: 'https://www.bcck.kz' },
    { src: '/images/img_image_16.png', name: 'ESMT Berlin', url: 'https://www.esmt.org' },
    { src: '/images/img_image_17.png', name: 'Skills Development Scotland', url: 'https://www.skillsdevelopmentscotland.co.uk' },
    { src: '/images/img_image_18.png', name: 'Hult ExEd', url: 'https://www.hult.edu/en/exed' },
    { src: '/images/img_image_19.png', name: 'CUD', url: 'https://www.cud.ac.ae' },
    { src: '/images/img_image_21.png', name: 'Abertay University', url: 'https://www.abertay.ac.uk' },
    { src: '/images/img_image_22.png', name: 'Zurich Elite Business School', url: 'https://www.zebs.ch' },
    { src: '/images/img_image_23.png', name: 'Birmingham University', url: 'https://www.birmingham.ac.uk' },
    { src: '/images/img_image_24.png', name: 'International University of Monaco', url: 'https://www.monaco.edu' },
    { src: '/images/img_image_25.png', name: 'AmCham', url: 'https://www.amcham.kz' },
    { src: '/images/img_image_26.png', name: 'СберУниверситет', url: 'https://sberuniversity.ru' },
    { src: '/images/img_image_27.png', name: 'SBS Business School', url: 'https://www.sbs.edu' },
    { src: '/images/img_image_28.png', name: 'ESSCA', url: 'https://www.essca.fr' }
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
      image: '/images/MBA.png',
      text: 'MBA QS'
    },
    {
      image: '/images/CEEMAN.png',
      text: 'In the process of accreditation'
    },
    {
      image: '/images/ACCA.png',
      text: 'Accreditation & test center'
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
    { 
      image: '/images/Yelzhas.png',
      name: 'Елжас Аубакиров', 
      description: 'MBA, MSF, CFA, CMA – эксперт с 20-летним опытом в финансах, прямых инвестициях, венчурном капитале и консалтинге. Специализируется на сделках, due diligence, оценке компаний и стратегическом инвестировании. Консультирует стартапы и крупный бизнес в разных отраслях.' 
    },
    { 
      image: '/images/Oleg.png',
      name: 'Олег Алфёров', 
      description: 'Консультант по развитию бизнеса. Опыт управления проектами - более 25 лет, в т. ч. опыт работы в международных проектах: Польша, Словакия, Нидерланды, Швеция, Дания. Стажировки в Нидерландах и Швеции. Обучался в бизнес-школах: NTU (Сингапур), HKUST (Гонконг), SDA Bocconi (Милан, Италия), Darden School of Business (США). Бизнес-тренер.' 
    },
    { 
      image: '/images/Ulia.png',
      name: 'Юлия Дмитриева', 
      description: 'Руководитель агентства JD Expert. Консультант по развитию бизнеса, аналитика и стратегии. 20 лет в маркетинге и продажах, 120+ отраслевых исследований, из них 40+ реализованы в действующий бизнес, 10 закрытых или переориентированных бизнес-идей, более 30 лет суммарный срок партнёрского сопровождения.' 
    },
    { 
      image: '/images/Irina.png',
      name: 'Виговская Ирина', 
      description: 'Международно аккредитованный бизнес-тренер по медиации, ТРИЗ-фасилитации и корпоративному управлению. Партнер UN Women в Казахстане и Центральной Азии, с более чем 20-летним опытом преподавания и медиативной практики. Работала на управленческих позициях, включая руководящие должности.' 
    },
    { 
      image: '/images/Lilya.png',
      name: 'Лилия Бисенгали', 
      description: 'PhD в области права, комплаенс-менеджер, Senior Legal Consultant (KPMG), эксперт по корпоративному праву и управлению рисками. Более 15 лет опыта в юридическом консалтинге и корпоративном управлении. Специализируется на международном праве и корпоративном управлении.' 
    },
    { 
      image: '/images/Zevira.png',
      name: 'Зевира Толеутаева', 
      description: 'К.эн, АССА, член Консультативного органа Министерства финансов РК, эксперт по международным стандартам финансовой отчетности. Более 20 лет опыта в аудите и консалтинге. Специализируется на МСФО, аудите и корпоративном управлении.' 
    },
    { 
      image: '/images/Kaisar.png',
      name: 'Кайсар Макан', 
      description: 'MBA, Сертифицированный бизнес-тренер, Фасилитатор, Профессиональный международный коуч Erickson International Coach ICF. Более 15 лет опыта в корпоративном обучении и развитии лидерства. Специализируется на стратегическом планировании и развитии управленческих компетенций.' 
    },
    { 
      image: '/images/Marina.png',
      name: 'Марина Новоточина', 
      description: 'Executive коуч, бизнес тренер, HR-консультант, Доктор бизнес администрирования (DBA). Более 25 лет опыта в HR-менеджменте и организационном развитии. Специализируется на развитии лидерства, управлении изменениями и корпоративной культуре.' 
    }
  ];

  const administration = [
    {
      image: '/images/img_rectangle_1178.png',
      name: 'Марина Образцова',
      position: 'Директор Narxoz Business School',
      email: 'marina.obraztsova@narxoz.kz'
    },
    {
      image: '/images/img_rectangle_1205.png',
      name: 'Юан Симпсон',
      position: 'Доктор, PhD, директор по международному развитию Narxoz Business School',
      email: 'ewan.simpson@narxoz.kz'
    },
    {
      image: '/images/img_rectangle_1206.png',
      name: 'Айкерим Мырзатаева',
      position: 'Заместитель директора Narxoz Business School',
      email: 'aikerim.myrzatayeva@narxoz.kz'
    },
    {
      image: '/images/img_rectangle_1207.png',
      name: 'Агипа Монобаева',
      position: 'Академический директор Narxoz Business School, руководитель DBA, доктор философии (PhD)',
      email: 'agipa.monobaeva@narxoz.kz'
    },
    {
      image: '/images/Anna.png',
      name: 'Анна Анисимова',
      position: 'Операционный директор Narxoz Business School по программам MBA, EMBA',
      email: 'anna.anissimova@narxoz.kz'
    },
    {
      image: '/images/Gulnar.png',
      name: 'Гульнар Жуманова',
      position: 'Директор Центра дополнительного и профессионального образования (ЦДПО) Narxoz Business School',
      email: 'gulnar.zhumanova@narxoz.kz'
    },
    {
      image: '/images/Saltanat.png',
      name: 'Салтанат Абдельдинова',
      position: 'Руководитель Центра прикладных финансов (ЦПФ) Narxoz Business School',
      email: 'saltanat.abdelinova@narxoz.kz'
    }
  ];

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

  // Фильтрация программ по выбранному типу
  const filteredPrograms = programs.filter(program => {
    if (activeProgram === 'Все программы') {
      return true;
    }
    return program.type === activeProgram;
  });

  // Группировка программ по типам для вертикального отображения
  const groupedPrograms = {
    'MBA': programs.filter(program => program.type === 'MBA'),
    'Executive MBA': programs.filter(program => program.type === 'Executive MBA'),
    'DBA': programs.filter(program => program.type === 'DBA'),
    'Магистратура': programs.filter(program => program.type === 'Магистратура')
  };

  // Получаем все уникальные типы программ
  const programTypes = Object.keys(groupedPrograms);

  // --- ОБНОВЛЁННЫЙ массив с видео выпускников ---
  const graduateVideos = [
    {
      url: 'https://www.youtube.com/embed/p3vTgMVvWdk',
      description: 'История успеха: путь к бизнес-образованию'
    },
    {
      url: 'https://www.youtube.com/embed/U6mHH-kGQfU',
      description: 'Выпускник о новых возможностях после обучения'
    },
    {
      url: 'https://www.youtube.com/embed/WS3lCOtGg4s',
      description: 'Мотивация и развитие: личный опыт выпускника'
    },
    {
      url: 'https://www.youtube.com/embed/FL0H0I3rgcI',
      description: 'Как обучение изменило мою карьеру'
    },
    {
      url: 'https://www.youtube.com/embed/1XPx8iKbS-Y',
      description: 'Советы будущим студентам от выпускника'
    },
    {
      url: 'https://www.youtube.com/embed/UizMWwVKLOw',
      description: 'Преодоление трудностей и успех в бизнесе'
    },
    {
      url: 'https://www.youtube.com/embed/l4IePhpXz8Y',
      description: 'Почему я выбрал Narxoz Business School'
    },
    {
      url: 'https://www.youtube.com/embed/MPXMNiH6j5o',
      description: 'Вдохновляющая история выпускника MBA'
    },
    {
      url: 'https://www.youtube.com/embed/m9--bfum4CU',
      description: 'Личный рост и новые горизонты'
    },
    {
      url: 'https://www.youtube.com/embed/r5SVVe8ZOFo',
      description: 'Как программа помогла реализовать мечты'
    },
    {
      url: 'https://www.youtube.com/embed/mv8ghkwGsUg',
      description: 'Выпускник о поддержке и сообществе школы'
    }
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

        {/* Programs Grid - Vertical Columns */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500 ${animatePrograms ? 'opacity-100' : 'opacity-0'}`}>
          {programTypes.map((programType, columnIndex) => {
            const programsInColumn = groupedPrograms[programType];
            const isActiveColumn = activeProgram === 'Все программы' || activeProgram === programType;
            
            return (
              <div 
                key={programType}
                className={`flex flex-col space-y-6 ${isActiveColumn ? 'opacity-100' : 'opacity-40'}`}
                style={{ transitionDelay: `${columnIndex * 0.1}s` }}
              >

                
                {/* Программы в колонке */}
                {programsInColumn.map((program, index) => {
                  const isExecutiveMBA = program.title === 'Executive MBA';
                  const CardWrapper = isExecutiveMBA ? Link : 'div';
                  const cardProps = isExecutiveMBA ? { to: '/programs/executive-mba' } : {};
                  
                  return (
                    <CardWrapper 
                      key={`${programType}-${index}`} 
                      {...cardProps}
                      className={`bg-gray-100 p-6 rounded-lg hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer transform group border border-gray-200 ${animatePrograms ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                      style={{ transitionDelay: `${(columnIndex * 0.1) + (index * 0.05)}s` }}
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
                {item.text.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
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
          <h2 className="text-dark text-4xl font-bold">Истории выпускников</h2>
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
              onClick={() => setGraduateVideoPage(Math.min(totalGraduatePages - 1, graduateVideoPage + 1))}
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
                  title={`История выпускника ${graduateVideoPage * videosPerPage + idx + 1}`}
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
            <h2 className="text-dark text-4xl font-bold">Нам доверяют</h2>
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
            <h2 className="text-dark text-4xl font-bold">Faculty</h2>
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
                <div key={`${currentFacultyIndex}-${index}`} className="slide-in-up hover-scale smooth-transition group" style={{ animationDelay: `${index * 0.1}s` }}>
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
                        <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-500 ${
                          isExpanded ? 'line-clamp-none' : 'line-clamp-3'
                        }`}>
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
                        <span>{isExpanded ? 'Свернуть' : 'Читать дальше'}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
          <h2 className="text-dark text-4xl font-bold">Новости</h2>
          <Link to="/news" className="flex items-center space-x-4 hover:opacity-80 transition-opacity cursor-pointer">
            <span className="text-muted text-lg">Смотреть все новости</span>
            <img src="/images/img_group_21_blue_gray_100.svg" alt="Arrow" className="w-7 h-7" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((news, index) => (
            <div key={index} className="slide-in-up hover-scale smooth-animate" style={{ animationDelay: `${index * 0.1}s` }}>
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
              <p className="text-muted text-base leading-relaxed">
                {news.description}
              </p>
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
            <h2 className="text-dark text-4xl font-bold">Администрация школы</h2>
            <div className="flex items-center space-x-4">
              <img 
                src="/images/img_group_21.svg" 
                alt="Previous" 
                className={`w-7 h-7 cursor-pointer transition-opacity ${currentAdminIndex === 0 ? 'opacity-50' : 'hover:opacity-80'}`}
                onClick={() => handleAdminNavigation('prev')}
              />
              <img 
                src="/images/img_group_21_blue_gray_100.svg" 
                alt="Next" 
                className={`w-7 h-7 cursor-pointer transition-opacity ${currentAdminIndex >= administration.length - 4 ? 'opacity-50' : 'hover:opacity-80'}`}
                onClick={() => handleAdminNavigation('next')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {administration.slice(currentAdminIndex, currentAdminIndex + 4).map((admin, index) => {
              const globalIndex = currentAdminIndex + index;
              return (
                <div key={`${currentAdminIndex}-${index}`} className="slide-in-up hover-scale smooth-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img 
                    src={admin.image} 
                    alt={admin.name} 
                    className="w-full h-96 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-dark text-2xl font-semibold mb-2">
                    {admin.name}
                  </h3>
                  <p className="text-muted text-lg leading-relaxed mb-2">
                    {admin.position}
                  </p>
                  <p className="text-red-600 text-sm font-medium">
                    {admin.email}
                  </p>
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