import React, { useState } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/ui/Button';
import EditText from '../../../components/ui/EditText';

const ExecutiveMBA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
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
      <div className="relative text-white py-16 px-8 pt-24" style={{
        backgroundImage: 'url(/images/EMBA_fon.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="slide-in-left">
              <div className="mb-6">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Премиум программа
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Executive MBA
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                Программа для топ-менеджеров и собственников бизнеса
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>18 месяцев</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Модульный формат</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Международная аккредитация</span>
                </div>
              </div>
              <Button 
                onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 text-white px-8 py-4 text-lg font-medium hover:bg-red-700 transition-colors"
              >
                Подать заявку
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 slide-in-up">
              О программе Executive MBA
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto slide-in-up">
              Программа Executive MBA Narxoz Business School разработана специально для руководителей высшего звена, 
              собственников бизнеса и предпринимателей с опытом управления от 7 лет
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg slide-in-up">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Аккредитация FIBAA</h3>
              <p className="text-gray-600">
                Программа аккредитована Foundation for International Business Administration Accreditation
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg slide-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Практикующие преподаватели</h3>
              <p className="text-gray-600">
                Более 80% преподавателей — действующие топ-менеджеры и консультанты
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Карьерный рост</h3>
              <p className="text-gray-600">
                95% выпускников получают повышение в течение 2 лет после окончания
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg slide-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Что делает нашу программу уникальной?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Модульный формат:</strong> Интенсивные модули по выходным, 
                      не мешающие основной работе
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Реальные кейсы:</strong> Решение актуальных бизнес-задач 
                      ведущих компаний Казахстана
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Нетворкинг:</strong> Сообщество единомышленников из разных 
                      отраслей экономики
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Международный опыт:</strong> Стажировки в ведущих 
                      бизнес-школах мира
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/images/img_image_26.png" 
                  alt="Обучение EMBA" 
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 slide-in-up">
              Учебный план
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto slide-in-up">
              Программа состоит из 12 модулей, каждый из которых фокусируется на ключевых 
              аспектах современного бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Стратегическое управление",
                description: "Разработка и реализация корпоративной стратегии",
                duration: "3 дня",
                icon: "🎯"
              },
              {
                title: "Финансовый менеджмент",
                description: "Управление финансами и инвестиционные решения",
                duration: "3 дня",
                icon: "💰"
              },
              {
                title: "Маркетинг и продажи",
                description: "Современные подходы к маркетингу и управлению продажами",
                duration: "3 дня",
                icon: "📈"
              },
              {
                title: "Лидерство и команды",
                description: "Развитие лидерских навыков и управление командами",
                duration: "3 дня",
                icon: "👥"
              },
              {
                title: "Операционное управление",
                description: "Оптимизация бизнес-процессов и операционная эффективность",
                duration: "3 дня",
                icon: "⚙️"
              },
              {
                title: "Цифровая трансформация",
                description: "IT-стратегии и цифровые технологии в бизнесе",
                duration: "3 дня",
                icon: "💻"
              }
            ].map((module, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 slide-in-up border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex items-center text-sm text-red-600 font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {module.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Admission Requirements */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 slide-in-up">
              Требования для поступления
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto slide-in-up">
              Программа предназначена для опытных руководителей и предпринимателей
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg slide-in-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Основные требования</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Высшее образование</div>
                    <div className="text-gray-600">Диплом о высшем образовании любого профиля</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Опыт руководящей работы</div>
                    <div className="text-gray-600">Минимум 7 лет управленческого опыта</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Текущая позиция</div>
                    <div className="text-gray-600">Руководящая должность или собственный бизнес</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Знание языков</div>
                    <div className="text-gray-600">Английский язык на уровне Intermediate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg slide-in-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Процесс поступления</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <div className="font-semibold text-gray-900">Подача заявки</div>
                    <div className="text-gray-600">Заполнение онлайн-формы и загрузка документов</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <div className="font-semibold text-gray-900">Собеседование</div>
                    <div className="text-gray-600">Интервью с приемной комиссией (очно или онлайн)</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <div className="font-semibold text-gray-900">Рассмотрение заявки</div>
                    <div className="text-gray-600">Принятие решения в течение 5 рабочих дней</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <div className="font-semibold text-gray-900">Зачисление</div>
                    <div className="text-gray-600">Подписание договора и начало обучения</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 slide-in-up">
              Стоимость обучения
            </h2>
            <p className="text-xl text-gray-600 slide-in-up">
              Инвестиция в ваше профессиональное развитие и карьерный рост
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-red-900 text-white rounded-2xl p-8 lg:p-12 shadow-2xl slide-in-up">
            <div className="text-center mb-8">
              <div className="text-5xl lg:text-6xl font-bold mb-4">12 500 000₸</div>
              <div className="text-xl text-gray-200">Полная стоимость программы</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Что включено:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Все учебные материалы
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Питание во время модулей
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Международная стажировка
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Доступ к Alumni Network
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Варианты оплаты:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Единовременная оплата
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Рассрочка на 6 месяцев
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Корпоративная оплата
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Скидка за раннюю оплату 10%
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-200 mb-6">
                Следующий набор стартует в марте 2025 года
              </p>
              <Button 
                onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Забронировать место
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div id="application-form" className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 slide-in-up">
              Подать заявку на обучение
            </h2>
            <p className="text-xl text-gray-600 slide-in-up">
              Заполните форму, и мы свяжемся с вами для консультации
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg slide-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EditText
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="h-12"
              />
              <EditText
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="h-12"
              />
              <EditText
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="h-12"
              />
              <EditText
                placeholder="Компания"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="h-12"
              />
            </div>
            
            <div className="mt-8 text-center">
              <Button
                onClick={handleSubmit}
                className="bg-red-600 text-white px-12 py-4 text-lg font-medium hover:bg-red-700 transition-colors"
              >
                Отправить заявку
              </Button>
              <p className="text-gray-500 text-sm mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="slide-in-up">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-gray-300">
                ул. Жандосова, 55<br />
                Алматы, Казахстан
              </p>
            </div>
            
            <div className="slide-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-gray-300">
                +7 (727) 377-11-11<br />
                +7 (747) 364-88-99
              </p>
            </div>
            
            <div className="slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">
                emba@narxoz.kz<br />
                admission@narxoz.kz
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExecutiveMBA; 