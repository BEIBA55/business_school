import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Accreditations = () => {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 via-white to-blue-50 py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 slide-in-up">
            Аккредитации
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed slide-in-up" style={{ animationDelay: '0.2s' }}>
            Narxoz Business School гордится своими международными аккредитациями и признанием качества образования. 
            Наши достижения подтверждают высокий уровень образовательных программ и соответствие мировым стандартам.
          </p>
        </div>
      </div>

      {/* Accreditations Grid */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 slide-in-up">
          <h2 className="text-3xl font-bold text-gray-900">Наши достижения</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Международные аккредитации и признания качества образования Narxoz Business School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accreditationItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-24 h-24 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={item.image} 
                    alt="Accreditation" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-br from-gray-50 to-red-50 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 slide-in-up">
            Что означают наши аккредитации?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="slide-in-left">
              <h4 className="text-xl font-semibold text-red-600 mb-4">Международное признание</h4>
              <p className="text-gray-600 leading-relaxed">
                Наши программы соответствуют высочайшим международным стандартам качества образования. 
                Аккредитации от ведущих мировых организаций подтверждают превосходство наших образовательных программ.
              </p>
            </div>
            <div className="slide-in-right">
              <h4 className="text-xl font-semibold text-red-600 mb-4">Качество образования</h4>
              <p className="text-gray-600 leading-relaxed">
                Постоянное совершенствование учебных программ, современные методики преподавания и 
                практико-ориентированный подход обеспечивают высокий уровень подготовки наших выпускников.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Accreditations; 