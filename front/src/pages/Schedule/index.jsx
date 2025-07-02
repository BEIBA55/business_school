import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState('month'); // month, week, day

  // Примерные мероприятия и лекции
  const events = [
    // Январь 2024
    {
      id: 1,
      title: 'Лекция: Стратегическое планирование',
      date: '2024-01-15',
      time: '10:00-12:00',
      type: 'lecture',
      speaker: 'Проф. Алматов А.К.',
      location: 'Аудитория 101',
      description: 'Основы стратегического планирования в современном бизнесе'
    },
    {
      id: 2,
      title: 'MBA Open Day',
      date: '2024-01-18',
      time: '14:00-17:00',
      type: 'event',
      speaker: 'Администрация',
      location: 'Главный зал',
      description: 'Презентация программы MBA, встреча с преподавателями'
    },
    {
      id: 3,
      title: 'Семинар: Digital Marketing',
      date: '2024-01-20',
      time: '09:00-11:00',
      type: 'seminar',
      speaker: 'Смирнова Е.В.',
      location: 'Онлайн',
      description: 'Современные тренды в цифровом маркетинге'
    },
    {
      id: 4,
      title: 'Мастер-класс: Финансовый анализ',
      date: '2024-01-22',
      time: '15:00-18:00',
      type: 'masterclass',
      speaker: 'Казбеков М.Н.',
      location: 'Аудитория 205',
      description: 'Практические навыки финансового анализа предприятий'
    },
    {
      id: 5,
      title: 'Конференция: Будущее бизнеса',
      date: '2024-01-25',
      time: '09:00-16:00',
      type: 'conference',
      speaker: 'Различные спикеры',
      location: 'Конференц-зал',
      description: 'Международная конференция о трендах в бизнесе'
    },
    {
      id: 6,
      title: 'Лекция: Управление проектами',
      date: '2024-01-28',
      time: '11:00-13:00',
      type: 'lecture',
      speaker: 'Иванов С.П.',
      location: 'Аудитория 102',
      description: 'Методологии управления проектами: Agile, Scrum'
    },
    {
      id: 7,
      title: 'Networking Event',
      date: '2024-01-30',
      time: '18:00-21:00',
      type: 'networking',
      speaker: 'Alumni Association',
      location: 'Лобби',
      description: 'Неформальное общение студентов и выпускников'
    },
    
    // Февраль 2024
    {
      id: 8,
      title: 'Воркшоп: Leadership Skills',
      date: '2024-02-02',
      time: '10:00-14:00',
      type: 'workshop',
      speaker: 'Петрова А.М.',
      location: 'Аудитория 301',
      description: 'Развитие лидерских качеств для руководителей'
    },
    {
      id: 9,
      title: 'Executive MBA Graduation',
      date: '2024-02-05',
      time: '16:00-19:00',
      type: 'graduation',
      speaker: 'Ректорат',
      location: 'Актовый зал',
      description: 'Торжественная церемония вручения дипломов'
    },
    {
      id: 10,
      title: 'Лекция: Инновации в бизнесе',
      date: '2024-02-08',
      time: '14:00-16:00',
      type: 'lecture',
      speaker: 'Доц. Нурланов Б.К.',
      location: 'Аудитория 103',
      description: 'Как внедрять инновации в традиционный бизнес'
    },
    {
      id: 11,
      title: 'Семинар: ESG в бизнесе',
      date: '2024-02-12',
      time: '13:00-15:00',
      type: 'seminar',
      speaker: 'Жанаев К.А.',
      location: 'Аудитория 201',
      description: 'Экологические, социальные и управленческие аспекты бизнеса'
    },
    {
      id: 12,
      title: 'DBA Open Day',
      date: '2024-02-15',
      time: '10:00-13:00',
      type: 'event',
      speaker: 'Академический отдел',
      location: 'Главный зал',
      description: 'Презентация программы Doctor of Business Administration'
    },
    {
      id: 13,
      title: 'Мастер-класс: Переговоры',
      date: '2024-02-18',
      time: '16:00-19:00',
      type: 'masterclass',
      speaker: 'Сидоров В.М.',
      location: 'Аудитория 305',
      description: 'Искусство ведения деловых переговоров'
    },
    {
      id: 14,
      title: 'Воркшоп: Data Analytics',
      date: '2024-02-22',
      time: '09:00-12:00',
      type: 'workshop',
      speaker: 'Ким А.С.',
      location: 'Компьютерный класс',
      description: 'Анализ данных для принятия бизнес-решений'
    },
    {
      id: 15,
      title: 'Лекция: Международный бизнес',
      date: '2024-02-25',
      time: '11:00-13:00',
      type: 'lecture',
      speaker: 'Проф. Браун Дж.',
      location: 'Аудитория 104',
      description: 'Стратегии выхода на международные рынки'
    },
    {
      id: 16,
      title: 'Alumni Networking',
      date: '2024-02-28',
      time: '19:00-22:00',
      type: 'networking',
      speaker: 'Alumni Club',
      location: 'Ресторан "Казахстан"',
      description: 'Ежемесячная встреча выпускников бизнес-школы'
    },

    // Март 2024
    {
      id: 17,
      title: 'Конференция: Women in Business',
      date: '2024-03-08',
      time: '10:00-17:00',
      type: 'conference',
      speaker: 'Женский бизнес-клуб',
      location: 'Конференц-зал',
      description: 'Международная конференция к 8 марта'
    },
    {
      id: 18,
      title: 'Семинар: Blockchain в бизнесе',
      date: '2024-03-12',
      time: '14:00-16:00',
      type: 'seminar',
      speaker: 'Токаев Р.Б.',
      location: 'Онлайн',
      description: 'Применение блокчейн технологий в бизнес-процессах'
    },
    {
      id: 19,
      title: 'Мастер-класс: Public Speaking',
      date: '2024-03-15',
      time: '10:00-13:00',
      type: 'masterclass',
      speaker: 'Орлова М.П.',
      location: 'Актовый зал',
      description: 'Навыки публичных выступлений для руководителей'
    },
    {
      id: 20,
      title: 'Лекция: Корпоративные финансы',
      date: '2024-03-18',
      time: '15:00-17:00',
      type: 'lecture',
      speaker: 'Доц. Мамедов Э.К.',
      location: 'Аудитория 202',
      description: 'Управление финансами крупных корпораций'
    },
    {
      id: 21,
      title: 'Startup Pitch Day',
      date: '2024-03-22',
      time: '13:00-18:00',
      type: 'event',
      speaker: 'Инкубатор стартапов',
      location: 'Главный зал',
      description: 'Презентация стартап-проектов студентов'
    },
    {
      id: 22,
      title: 'Воркшоп: Crisis Management',
      date: '2024-03-25',
      time: '09:00-12:00',
      type: 'workshop',
      speaker: 'Волков А.И.',
      location: 'Аудитория 302',
      description: 'Управление компанией в кризисных ситуациях'
    },
    {
      id: 23,
      title: 'Семинар: HR Analytics',
      date: '2024-03-28',
      time: '11:00-13:00',
      type: 'seminar',
      speaker: 'Петрова Н.В.',
      location: 'Аудитория 203',
      description: 'Аналитика в управлении человеческими ресурсами'
    },

    // Добавим несколько событий в один день для демонстрации
    {
      id: 24,
      title: 'Утренняя лекция: Маркетинг',
      date: '2024-01-15',
      time: '08:00-09:30',
      type: 'lecture',
      speaker: 'Доц. Кузнецов П.А.',
      location: 'Аудитория 105',
      description: 'Основы современного маркетинга'
    },
    {
      id: 25,
      title: 'Вечерний семинар: E-commerce',
      date: '2024-01-15',
      time: '18:00-20:00',
      type: 'seminar',
      speaker: 'Байжанов А.М.',
      location: 'Онлайн',
      description: 'Развитие электронной коммерции в Казахстане'
    },
    
    // Текущие события (декабрь 2024)
    {
      id: 26,
      title: 'Зимняя конференция MBA',
      date: '2024-12-15',
      time: '10:00-16:00',
      type: 'conference',
      speaker: 'Международные эксперты',
      location: 'Конференц-зал',
      description: 'Итоги года и планы на будущее'
    },
    {
      id: 27,
      title: 'Новогодний Networking',
      date: '2024-12-28',
      time: '18:00-23:00',
      type: 'networking',
      speaker: 'Студенческий совет',
      location: 'Банкетный зал',
      description: 'Новогодняя встреча студентов и преподавателей'
    }
  ];

  const eventTypes = {
    lecture: { color: 'bg-blue-500', name: 'Лекция' },
    event: { color: 'bg-red-500', name: 'Мероприятие' },
    seminar: { color: 'bg-green-500', name: 'Семинар' },
    masterclass: { color: 'bg-purple-500', name: 'Мастер-класс' },
    conference: { color: 'bg-orange-500', name: 'Конференция' },
    networking: { color: 'bg-pink-500', name: 'Нетворкинг' },
    workshop: { color: 'bg-indigo-500', name: 'Воркшоп' },
    graduation: { color: 'bg-yellow-500', name: 'Выпуск' }
  };

  // Функции для работы с календарем
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Понедельник = 0
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const getEventsForDate = (dateStr) => {
    return events.filter(event => event.date === dateStr);
  };

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Пустые ячейки для начала месяца
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>);
    }

    // Дни месяца
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = getEventsForDate(dateStr);
      const isToday = dateStr === formatDate(new Date());

      days.push(
        <div 
          key={day} 
          className={`h-24 border border-gray-200 p-1 overflow-hidden hover:bg-gray-50 cursor-pointer ${isToday ? 'bg-blue-50 border-blue-300' : ''}`}
        >
          <div className={`text-sm font-medium mb-1 ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map(event => (
              <div 
                key={event.id}
                className={`text-xs p-1 rounded text-white cursor-pointer hover:opacity-80 ${eventTypes[event.type].color}`}
                onClick={() => setSelectedEvent(event)}
                title={event.title}
              >
                <div className="truncate font-medium">{event.time}</div>
                <div className="truncate">{event.title}</div>
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500 pl-1">
                +{dayEvents.length - 2} еще
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white py-16 px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Расписание мероприятий
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Следите за актуальными лекциями, семинарами, конференциями и другими мероприятиями 
            Narxoz Business School
          </p>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Calendar Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => changeMonth(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-900">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button
                onClick={() => changeMonth(1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Сегодня
              </button>
            </div>
          </div>

          {/* Week Days Header */}
          <div className="grid grid-cols-7 gap-0 mb-2">
            {weekDays.map(day => (
              <div key={day} className="p-3 text-center font-medium text-gray-600 bg-gray-100 border border-gray-200">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-0">
            {renderCalendar()}
          </div>
        </div>

        {/* Event Types Legend */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Типы мероприятий</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(eventTypes).map(([type, config]) => (
              <div key={type} className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded ${config.color}`}></div>
                <span className="text-sm text-gray-700">{config.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <div className={`px-3 py-1 rounded-full text-white text-sm ${eventTypes[selectedEvent.type].color}`}>
                {eventTypes[selectedEvent.type].name}
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">{selectedEvent.title}</h3>
            
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>{selectedEvent.date}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{selectedEvent.time}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{selectedEvent.location}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>{selectedEvent.speaker}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-700">{selectedEvent.description}</p>
            </div>
            
            <div className="mt-6 flex space-x-3">
              <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                Записаться
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Schedule; 