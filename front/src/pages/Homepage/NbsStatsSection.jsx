import React from 'react';

const stats = [
  {
    value: '16',
    label: 'лет',
    description: 'Narxoz Business School с 2008 на рынке',
    prefix: '',
  },
  {
    value: '2500',
    label: 'корпоративных клиентов',
    description: '',
    prefix: 'Более',
  },
  {
    value: '3500',
    label: 'выпускников программ MBA, Executive MBA, DBA',
    description: '',
    prefix: 'Более',
  },
  {
    value: '140 000',
    label: 'выпускников Narxoz, большинство занимают руководящие позиции в крупнейших компаниях Казахстана и за его пределами.',
    description: '',
    prefix: 'Более',
  },
];

const NbsStatsSection = () => (
  <section className="w-full bg-white rounded-3xl max-w-7xl mx-auto mt-20 overflow-hidden">
    <div className="px-6 md:px-12 pt-8 md:pt-10">
      <h2 className="text-dark text-4xl font-bold mb-8 text-left">Статистика</h2>
    </div>
    <div className="w-full">
      <img 
        src="/images/img_graduates.jpg" 
        alt="Graduates" 
        className="w-full h-64 md:h-80 object-cover object-center rounded-t-3xl"
      />
    </div>
    <div className="px-6 md:px-12 py-8 md:py-10">
      <h3 className="text-gray-900 text-2xl md:text-3xl font-semibold mb-6 md:mb-8 pb-4 text-center">
        Narxoz Business School – это новые возможности для Вас:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left mb-8">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center md:items-start">
            <div className="flex items-end gap-2">
              {item.prefix && <span className="text-lg text-[#991E1E] font-medium mb-2 md:mb-0 md:rotate-[-90deg] md:origin-bottom-left md:text-base md:block hidden">{item.prefix}</span>}
              <span className="text-[2.5rem] md:text-5xl font-bold text-[#991E1E] leading-none">{item.value}</span>
              {item.label === 'лет' && <span className="text-lg text-gray-500 font-medium mb-2">лет</span>}
            </div>
            {item.label !== 'лет' && (
              <div className="text-gray-900 text-base font-semibold mt-2 mb-2 md:mb-4 text-center md:text-left">
                {item.label}
              </div>
            )}
            {item.description && (
              <div className="text-gray-500 text-sm mt-2 text-center md:text-left">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* QS Ranking Block - улучшенный */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8 md:py-10 bg-white rounded-2xl">
        <img src="/images/Ranked.png" alt="QS Ranked" className="w-44 md:w-56 h-auto rounded-xl" />
        <div className="flex-1 max-w-2xl text-center flex flex-col items-center justify-center px-2">
          <h4 className="text-[#991E1E] text-2xl md:text-3xl font-bold mb-4 leading-snug text-center">Программа MBA Бизнес-школы Университета Нархоз признана №1 в Центральной Азии</h4>
          <p className="text-gray-900 text-base mb-3 leading-relaxed text-center max-w-xl">
            В опубликованном рейтинге QS Global MBA отмечены сильные стороны программы. 25 сентября 2024 года опубликован рейтинг QS Global MBA 2025. Программа MBA Бизнес-школы Университета Нархоз с первого раза вошла в топ-50 лучших в Азии (QS Global MBA 2025 Asia: #42) и на основе открытых данных и методологии QS для расчета общих баллов стала № 1 в Центрально-Азиатском регионе.
          </p>
          <p className="text-gray-900 text-base leading-relaxed text-center max-w-xl">
            На основе обнародованных агентством QS данных, программа MBA также входит в топ-50 лучших мира по критерию предпринимательства и востребованности выпускников. По этому показателю Бизнес-школа Университета Нархоз набрала высокие баллы и опередила другие всемирно признанные школы, такие как Carnegie Mellon и Dartmouth (США), Shanghai University of Finance and Economics и Tsinghua (Китай), Edinburgh и Manchester (Великобритания).
          </p>
        </div>
        <img src="/images/42.png" alt="QS 42 Asia" className="w-44 md:w-56 h-auto rounded-xl" />
      </div>
    </div>
  </section>
);

export default NbsStatsSection; 