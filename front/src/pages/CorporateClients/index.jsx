import React from 'react';
import { Link } from 'react-router-dom';

const CorporateClients = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 relative">
      {/* Кнопка "Домой" */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-10 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg shadow-md transition-colors flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
        <span className="font-medium">Главная</span>
      </Link>
      <div className="max-w-4xl mx-auto text-center">
        {/* Изображение ждуна */}
        <div className="mb-8">
          <img 
            src="/images/jdun.png" 
            alt="Ждун" 
            className="mx-auto w-64 h-64 object-contain drop-shadow-lg"
          />
        </div>

        {/* Заголовок с анимацией */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-pulse">
          Корпоративные клиенты
        </h1>

        {/* Подзаголовок с эффектом печатной машинки */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            <span className="inline-block animate-pulse">Ожидайте</span>
            <span className="inline-block animate-pulse delay-300">,</span>
            <span className="inline-block animate-pulse delay-500"> скоро</span>
            <span className="inline-block animate-pulse delay-700">...</span>
          </p>
        </div>

        {/* Анимированные точки */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-[#991E1E] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#991E1E] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-[#991E1E] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Описание */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Мы готовим для вас что-то особенное
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Наша команда работает над созданием уникальных решений для корпоративных клиентов. 
            Скоро вы сможете узнать о наших специальных программах, индивидуальном подходе 
            и эксклюзивных возможностях для вашего бизнеса.
          </p>
          
          {/* Прогресс-бар */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-[#991E1E] h-3 rounded-full animate-pulse" style={{ width: '75%' }}></div>
          </div>
          
          <p className="text-sm text-gray-500">
            Готовность: 75%
          </p>
        </div>

        {/* Контактная информация */}
        <div className="mt-8 text-gray-600">
          <p className="mb-2">
            <span className="font-semibold">Вопросы?</span> Свяжитесь с нами:
          </p>
          <p className="text-[#991E1E] font-medium">
            info@nbs.kz
          </p>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#991E1E] opacity-10 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#991E1E] opacity-10 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-[#991E1E] opacity-10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-8 w-8 h-8 bg-[#991E1E] opacity-10 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};

export default CorporateClients; 