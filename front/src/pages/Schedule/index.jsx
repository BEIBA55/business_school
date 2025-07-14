import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 1)); // Июль 2025
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState('calendar'); // calendar | list

  // Мероприятия июля-августа 2025
  const events = [
    // Июль 2025
    {
      id: 1,
      title: 'Группы ЕМВА занятия - экскурсия по новому зданию и welcome break',
      date: '2025-07-11',
      time: '10:00-14:00',
      type: 'emba',
      speaker: 'Администрация ЕМВА',
      location: 'Новое здание NBS',
      description: 'Экскурсия по новому зданию и welcome break. Розыгрыш мерча за посты в соц сетях и больше всего лайков.',
      cost: 'в бюджете программ ЕМВА'
    },
    {
      id: 2,
      title: 'Курс-подарок компаниям: Инвестиционный анализ проектов',
      date: '2025-07-15',
      time: '14:00-17:00',
      type: 'course',
      speaker: 'Елжас Аубакиров, CFA',
      location: 'Аудитория NBS',
      description: 'Инвестиционный анализ проектов - курс-подарок для компаний',
      cost: '0 тенге'
    },
    {
      id: 3,
      title: 'Мастер-класс: The AI Matrix: AI and You',
      date: '2025-07-16',
      time: '10:00-12:00',
      type: 'masterclass',
      speaker: 'Ewan Simpson, профессор NBS',
      location: 'Аудитория NBS',
      description: 'The AI Matrix: AI and You - мастер-класс по искусственному интеллекту',
      cost: '0 тенге'
    },
    {
      id: 4,
      title: 'Коллаборация постов в соц сетях с narxoz.kz',
      date: '2025-07-16',
      time: '15:00-17:00',
      type: 'collaboration',
      speaker: 'Маркетинг команда',
      location: 'Онлайн',
      description: 'Коллаборация постов в социальных сетях с официальным аккаунтом narxoz.kz',
      cost: '0 тенге'
    },
    {
      id: 5,
      title: 'Мастер-класс "7 ошибок руководителя"',
      date: '2025-07-16',
      time: '18:00-20:00',
      type: 'masterclass',
      speaker: 'Олег Алферов, эксперт NBS',
      location: 'Аудитория NBS',
      description: 'Мастер-класс "7 ошибок руководителя" от эксперта NBS',
      cost: '0 тенге'
    },
    {
      id: 6,
      title: 'Встреча выпускников программ Мини-МВА',
      date: '2025-07-17',
      time: '14:00-17:00',
      type: 'alumni',
      speaker: 'Олег Алферов, эксперт NBS',
      location: 'Главный зал NBS',
      description: 'Встреча выпускников программ Мини-МВА - Форте, Халык, Алагуем. Мастер-класс от эксперта NBS',
      cost: '0 тенге'
    },
    {
      id: 7,
      title: 'Мастер-класс для закрытого бизнес-клуба Титаны',
      date: '2025-07-17',
      time: '19:00-21:00',
      type: 'masterclass',
      speaker: 'Эксперты NBS',
      location: 'Закрытый клуб',
      description: 'Эксклюзивный мастер-класс для закрытого бизнес-клуба Титаны',
      cost: '0 тенге'
    },
    {
      id: 8,
      title: 'Коллаборация постов в соц сетях с партнерами',
      date: '2025-07-18',
      time: '10:00-12:00',
      type: 'collaboration',
      speaker: 'Маркетинг команда',
      location: 'Онлайн',
      description: 'Коллаборация постов в социальных сетях с партнерами, грантодателями, слушателями',
      cost: '0 тенге'
    },
    {
      id: 9,
      title: 'Graduation программ МВА "Прикладные финансы"',
      date: '2025-07-18',
      time: '15:00-18:00',
      type: 'graduation',
      speaker: 'НБРК, АРРФР и ФГСВ',
      location: 'Актовый зал NBS',
      description: 'Graduation программ МВА "Прикладные финансы" с НБРК, АРРФР и ФГСВ - встреча выпускников ППФ',
      cost: 'в бюджете программ'
    },
    {
      id: 10,
      title: 'Группы ЕМВА занятия - экскурсия по новому зданию',
      date: '2025-07-18',
      time: '19:00-21:00',
      type: 'emba',
      speaker: 'Администрация ЕМВА',
      location: 'Новое здание NBS',
      description: 'Группы ЕМВА занятия - экскурсия по новому зданию и welcome break',
      cost: 'в бюджете программ ЕМВА'
    },
    {
      id: 11,
      title: 'Коллаборация постов в соц сетях с партнерами',
      date: '2025-07-19',
      time: '14:00-16:00',
      type: 'collaboration',
      speaker: 'Маркетинг команда',
      location: 'Онлайн',
      description: 'Коллаборация постов в социальных сетях с партнерами, грантодателями, слушателями',
      cost: '0 тенге'
    },
    {
      id: 12,
      title: 'Курс-подарок компаниям: Инвестиционный анализ проектов',
      date: '2025-07-21',
      time: '10:00-13:00',
      type: 'course',
      speaker: 'Елжас Аубакиров, профессор NBS, CFA',
      location: 'Аудитория NBS',
      description: 'Инвестиционный анализ проектов - курс-подарок для компаний',
      cost: '0 тенге'
    },
    {
      id: 13,
      title: 'Курс-подарок: Сложности оценки стоимости компании в Казахстане',
      date: '2025-07-22',
      time: '10:00-12:00',
      type: 'course',
      speaker: 'Елжас Аубакиров, CFA',
      location: 'Аудитория NBS',
      description: 'Сложности оценки стоимости компании в Казахстане (CFA, Private equity)',
      cost: '0 тенге'
    },
    {
      id: 14,
      title: 'Мастер-класс: HR Brand: Инсайты на миллион',
      date: '2025-07-22',
      time: '15:00-17:00',
      type: 'masterclass',
      speaker: 'Данияр Косназаров, советник президента Narxoz',
      location: 'Аудитория NBS',
      description: 'HR Brand: Инсайты на миллион - мастер-класс от советника президента Narxoz',
      cost: '0 тенге'
    },
    {
      id: 15,
      title: 'Мастер-класс: The AI Matrix: AI and Organizations',
      date: '2025-07-24',
      time: '14:00-16:00',
      type: 'masterclass',
      speaker: 'Ewan Simpson, профессор NBS',
      location: 'Аудитория NBS',
      description: 'The AI Matrix: AI and Organizations - мастер-класс по ИИ в организациях',
      cost: '0 тенге'
    },
    {
      id: 16,
      title: 'NBS Open Day - день открытых дверей программ NBS',
      date: '2025-07-25',
      time: '10:00-17:00',
      type: 'openday',
      speaker: 'Администрация NBS',
      location: 'Главный зал NBS',
      description: 'День открытых дверей программ NBS - презентация всех программ бизнес-школы',
      cost: '0 тенге'
    },
    {
      id: 17,
      title: 'Коллаборация постов в соц сетях с партнерами',
      date: '2025-07-26',
      time: '14:00-16:00',
      type: 'collaboration',
      speaker: 'Маркетинг команда',
      location: 'Онлайн',
      description: 'Коллаборация постов в социальных сетях с партнерами, грантодателями, слушателями',
      cost: '0 тенге'
    },
    {
      id: 18,
      title: 'Курс-подарок: Стратегический Контроль Затрат',
      date: '2025-07-28',
      time: '10:00-13:00',
      type: 'course',
      speaker: 'Елжас Аубакиров, CFA',
      location: 'Аудитория NBS',
      description: 'Стратегический Контроль Затрат: Основа Эффективных Решений - курс-подарок для компаний',
      cost: '0 тенге'
    },

    // Август 2025
    {
      id: 19,
      title: 'NBS Alumni Day - встреча выпускников NBS',
      date: '2025-08-01',
      time: '15:00-19:00',
      type: 'alumni',
      speaker: 'Alumni Association',
      location: 'Главный зал NBS',
      description: 'NBS Alumni Day - встреча выпускников NBS - New Big Step - новые возможности',
      cost: 'в рамках бюджета маркетинга'
    },
    {
      id: 20,
      title: 'Курс-подарок: Инвестиционный анализ проектов',
      date: '2025-08-04',
      time: '14:00-17:00',
      type: 'course',
      speaker: 'Елжас Аубакиров, CFA',
      location: 'Аудитория NBS',
      description: 'Инвестиционный анализ проектов с розыгрышем мерча за посты в соц сетях и больше всего лайков',
      cost: '0 тенге'
    },
    {
      id: 21,
      title: 'Коллаборация постов в соц сетях с партнерами',
      date: '2025-08-05',
      time: '10:00-12:00',
      type: 'collaboration',
      speaker: 'Маркетинг команда',
      location: 'Онлайн',
      description: 'Коллаборация постов в социальных сетях с партнерами, грантодателями, слушателями',
      cost: '0 тенге'
    },
    {
      id: 22,
      title: 'Мастер-класс: The AI Matrix: AI and Organizations',
      date: '2025-08-05',
      time: '15:00-17:00',
      type: 'masterclass',
      speaker: 'Ewan Simpson, профессор NBS',
      location: 'Аудитория NBS',
      description: 'The AI Matrix: AI and Organizations - мастер-класс по ИИ в организациях',
      cost: '0 тенге'
    },
    {
      id: 23,
      title: 'Мастер-класс: HR тема (уточняется)',
      date: '2025-08-06',
      time: '14:00-16:00',
      type: 'masterclass',
      speaker: 'Елена Сокол HRD',
      location: 'Аудитория NBS',
      description: 'Мастер-класс от Елены Сокол HRD, тема уточняется',
      cost: '0 тенге'
    },
    {
      id: 24,
      title: 'Курс-подарок: Сложности оценки стоимости компании',
      date: '2025-08-07',
      time: '10:00-13:00',
      type: 'course',
      speaker: 'Елжас Аубакиров, CFA',
      location: 'Аудитория NBS',
      description: 'Сложности оценки стоимости компании в Казахстане (CFA, Private equity)',
      cost: '0 тенге'
    },
    {
      id: 25,
      title: 'Мастер-класс: The AI Matrix: AI and You',
      date: '2025-08-08',
      time: '14:00-16:00',
      type: 'masterclass',
      speaker: 'Ewan Simpson, профессор NBS',
      location: 'Аудитория NBS',
      description: 'The AI Matrix: AI and You - мастер-класс по искусственному интеллекту',
      cost: '0 тенге'
    },
    {
      id: 43,
      title: 'Розыгрыш гранта на МВА',
      date: '2025-08-01',
      time: '10:00-18:00',
      type: 'event',
      speaker: 'Администрация NBS',
      location: 'Онлайн',
      description: 'Розыгрыш гранта на МВА на англоязычную программу и на русскоязычную',
      cost: '300 000 тенге на таргет'
    },
    {
      id: 26,
      title: 'Мастер-класс: Маркетинг в кризис',
      date: '2025-08-11',
      time: '15:00-17:00',
      type: 'masterclass',
      speaker: 'Данияр Косназаров, NBS Marketing Lab',
      location: 'Аудитория NBS',
      description: 'Маркетинг в кризис: Как пересобрать ваш оффер клиенту?',
      cost: '0 тенге'
    },
    {
      id: 27,
      title: 'Мастер-класс: Зумеры и Альфа: Как они меняют бизнес',
      date: '2025-08-12',
      time: '14:00-16:00',
      type: 'masterclass',
      speaker: 'Данияр Косназаров, NBS Marketing Lab',
      location: 'Аудитория NBS',
      description: 'Зумеры и Альфа: Как они меняют бизнес, труд и менеджмент?',
      cost: '0 тенге'
    },
    {
      id: 28,
      title: 'Коллаборация постов в соц сетях с партнерами',
      date: '2025-08-13',
      time: '10:00-12:00',
      type: 'collaboration',
      speaker: 'Маркетинг команда',
      location: 'Онлайн',
      description: 'Коллаборация постов в социальных сетях с партнерами, грантодателями, слушателями',
      cost: '0 тенге'
    },
    {
      id: 29,
      title: 'Курс-подарок: Стратегический Контроль Затрат',
      date: '2025-08-14',
      time: '10:00-13:00',
      type: 'course',
      speaker: 'Елжас Аубакиров, CFA',
      location: 'Аудитория NBS',
      description: 'Стратегический Контроль Затрат: Основа Эффективных Решений с розыгрышем мерча за посты в соц сетях',
      cost: '0 тенге'
    },
    {
      id: 30,
      title: 'Коллаборация постов в соц сетях с партнерами',
      date: '2025-08-15',
      time: '14:00-16:00',
      type: 'collaboration',
      speaker: 'Маркетинг команда',
      location: 'Онлайн',
      description: 'Коллаборация постов в социальных сетях с партнерами, грантодателями, слушателями',
      cost: '0 тенге'
    },
    {
      id: 31,
      title: 'Курс-подарок: Инвестиционный анализ проектов',
      date: '2025-08-18',
      time: '10:00-13:00',
      type: 'course',
      speaker: 'Елжас Аубакиров, профессор NBS, CFA',
      location: 'Аудитория NBS',
      description: 'Инвестиционный анализ проектов - курс-подарок для компаний',
      cost: '0 тенге'
    },
    {
      id: 32,
      title: 'Kazakhstan Insurance Forum',
      date: '2025-08-18',
      time: '15:00-18:00',
      type: 'forum',
      speaker: 'ФГСВ',
      location: 'Конференц-зал NBS',
      description: 'Kazakhstan Insurance Forum - партнерский форум ФГСВ',
      cost: '0 тенге'
    },
    {
      id: 33,
      title: 'Курс-подарок для компаний',
      date: '2025-08-19',
      time: '14:00-17:00',
      type: 'course',
      speaker: 'Эксперты NBS',
      location: 'Аудитория NBS',
      description: 'Курс-подарок для компаний - тема уточняется',
      cost: '0 тенге'
    },
    {
      id: 34,
      title: 'NBS Open Day - день открытых дверей программ NBS',
      date: '2025-08-20',
      time: '10:00-17:00',
      type: 'openday',
      speaker: 'Администрация NBS',
      location: 'Главный зал NBS',
      description: 'День открытых дверей программ NBS - презентация всех программ бизнес-школы',
      cost: '0 тенге'
    },
    {
      id: 35,
      title: 'Курс-подарок для компаний',
      date: '2025-08-21',
      time: '14:00-17:00',
      type: 'course',
      speaker: 'Эксперты NBS',
      location: 'Аудитория NBS',
      description: 'Курс-подарок для компаний - тема уточняется',
      cost: '0 тенге'
    },
    {
      id: 36,
      title: 'HR Human Capital Forum',
      date: '2025-08-22',
      time: '09:00-18:00',
      type: 'forum',
      speaker: 'HR Association',
      location: 'Конференц-зал NBS',
      description: 'HR Human Capital - NBS партнер форума, PR новой NBS и программы EMBA для HRD. Участие принимают порядка 200 HRD',
      cost: '0 тенге'
    },
    {
      id: 37,
      title: 'Коллаборация постов в соц сетях с партнерами',
      date: '2025-08-25',
      time: '14:00-16:00',
      type: 'collaboration',
      speaker: 'Маркетинг команда',
      location: 'Онлайн',
      description: 'Коллаборация постов в социальных сетях с партнерами, грантодателями, слушателями',
      cost: '0 тенге'
    },
    {
      id: 38,
      title: 'Курс-подарок для компаний',
      date: '2025-08-26',
      time: '14:00-17:00',
      type: 'course',
      speaker: 'Эксперты NBS',
      location: 'Аудитория NBS',
      description: 'Курс-подарок для компаний - тема уточняется',
      cost: '0 тенге'
    },
    {
      id: 39,
      title: 'Курс-подарок для компаний',
      date: '2025-08-27',
      time: '14:00-17:00',
      type: 'course',
      speaker: 'Эксперты NBS',
      location: 'Аудитория NBS',
      description: 'Курс-подарок для компаний - тема уточняется',
      cost: '0 тенге'
    },
    {
      id: 40,
      title: 'NBS Alumni Day',
      date: '2025-08-28',
      time: '15:00-19:00',
      type: 'alumni',
      speaker: 'Alumni Association',
      location: 'Главный зал NBS',
      description: 'NBS Alumni Day - встреча выпускников бизнес-школы',
      cost: '0 тенге'
    },
    {
      id: 41,
      title: 'Коллаборация постов в соц сетях с партнерами',
      date: '2025-08-29',
      time: '10:00-12:00',
      type: 'collaboration',
      speaker: 'Маркетинг команда',
      location: 'Онлайн',
      description: 'Коллаборация постов в социальных сетях с партнерами, грантодателями, слушателями',
      cost: '0 тенге'
    },
    {
      id: 42,
      title: 'Мероприятие для Грантодателей - pre-Opening',
      date: '2025-08-29',
      time: '18:00-21:00',
      type: 'event',
      speaker: 'Администрация NBS',
      location: 'Главный зал NBS',
      description: 'Мероприятие для Грантодателей - pre-Opening',
      cost: '0 тенге'
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
    graduation: { color: 'bg-yellow-500', name: 'Выпуск' },
    course: { color: 'bg-teal-500', name: 'Курс-подарок' },
    collaboration: { color: 'bg-cyan-500', name: 'Коллаборация' },
    alumni: { color: 'bg-amber-500', name: 'Встреча выпускников' },
    emba: { color: 'bg-emerald-500', name: 'ЕМВА' },
    openday: { color: 'bg-rose-500', name: 'День открытых дверей' },
    forum: { color: 'bg-violet-500', name: 'Форум' }
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

  // Функция для группировки событий по дате
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.date]) acc[event.date] = [];
    acc[event.date].push(event);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedEvents).sort();

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

      {/* Переключатель режимов */}
      <div className="flex justify-center items-center gap-4 mt-8 mb-4">
        <button
          className={`px-6 py-2 rounded-lg font-semibold border transition-colors ${viewMode === 'calendar' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
          onClick={() => setViewMode('calendar')}
        >
          Календарь
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-semibold border transition-colors ${viewMode === 'list' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
          onClick={() => setViewMode('list')}
        >
          Список
        </button>
      </div>

      {/* Calendar/List Section */}
      <div className="py-8 px-8 max-w-7xl mx-auto">
        {viewMode === 'calendar' ? (
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
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            {sortedDates.map(date => (
              <div key={date} className="mb-8">
                <div className="text-lg font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="uppercase text-gray-400 text-base font-semibold">{new Date(date).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="space-y-6">
                  {groupedEvents[date].map(event => (
                    <div key={event.id} className="flex flex-col md:flex-row gap-4 border-b pb-6">
                      {/* Картинка (если будет) */}
                      {/* <img src={event.image} alt="" className="w-56 h-36 object-cover rounded-lg" /> */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-bold uppercase tracking-wider ${eventTypes[event.type]?.color || 'bg-gray-300'} text-white px-2 py-1 rounded`}>{eventTypes[event.type]?.name || event.type}</span>
                          <span className="text-xs text-gray-500">{event.time}</span>
                        </div>
                        <div className="text-xl font-bold text-gray-900 mb-1">{event.title}</div>
                        <div className="text-gray-700 mb-1">{event.description}</div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                          <span><b>Спикер:</b> {event.speaker}</span>
                          <span><b>Локация:</b> {event.location}</span>
                          <span><b>Стоимость:</b> {event.cost}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Event Types Legend */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Типы мероприятий</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{selectedEvent.cost}</span>
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