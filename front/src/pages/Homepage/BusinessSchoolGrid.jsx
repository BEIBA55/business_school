import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BusinessSchoolGrid = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full max-w-7xl mx-auto my-12">
      <div className="grid grid-cols-4 grid-rows-2 w-full h-[540px]">
        {/* 1. №1 MBA */}
        <Link
          to="/programs/mba"
          className="bg-[#991E1E] text-white flex flex-col justify-center items-center relative rounded-[40px] border border-gray-200 h-full w-full p-6"
        >
          <span className="text-5xl md:text-6xl font-bold leading-tight">{t('homepage.businessGrid.mba.rank')}<br />{t('homepage.businessGrid.mba.program')}</span>
          <span className="text-base font-normal mt-2 opacity-80">{t('homepage.businessGrid.mba.region')}</span>
          <span className="text-sm font-normal mt-4 text-white/80 text-center">{t('homepage.businessGrid.mba.description')}</span>
        </Link>
        {/* 2. Фото здания */}
        <div className="bg-white flex flex-col justify-center items-center rounded-[40px] border border-gray-200 h-full w-full overflow-hidden p-0">
          <img src="/images/img_.png" alt="Narxoz Building" className="object-cover w-full h-full" />
          
        </div>
        {/* 3. DBA */}
        <Link
          to="/programs/dba"
          className="bg-white text-[#991E1E] flex flex-col justify-center items-center relative rounded-[40px] border border-gray-200 h-full w-full p-6"
        >
          <span className="text-5xl md:text-6xl font-bold leading-tight">{t('homepage.businessGrid.dba.program')}</span>
          <span className="text-base font-normal mt-2 opacity-80 text-center">{t('homepage.businessGrid.dba.description')}</span>
          <span className="text-sm font-normal mt-4 text-[#991E1E]/80 text-center">{t('homepage.businessGrid.dba.subtitle')}</span>
        </Link>
        {/* 4. Фото выпускников (верхний правый) */}
        <div className="bg-white flex flex-col justify-center items-center rounded-[40px] border border-gray-200 h-full w-full overflow-hidden p-0">
          <img src="/images/vipus.jpg" alt="Graduates" className="object-cover w-full h-full" />
        </div>
        {/* 5. Фото выпускников (нижний левый) */}
        <div className="bg-white flex flex-col justify-center items-center rounded-[40px] border border-gray-200 h-full w-full overflow-hidden p-0">
          <img src="/images/vipus.jpg" alt="Graduates" className="object-cover w-full h-full" />
        </div>
        {/* 6. Executive MBA (col-span-2) */}
        <Link
          to="/programs/executive-mba"
          className="bg-white text-[#991E1E] flex flex-col justify-center items-start relative rounded-[40px] border border-gray-200 h-full w-full col-span-2 p-8"
          style={{gridColumn: '2 / span 2'}}
        >
          <span className="text-5xl md:text-6xl font-bold leading-tight">{t('homepage.businessGrid.executiveMba.program').split(' ')[0]}<br />{t('homepage.businessGrid.executiveMba.program').split(' ')[1]}</span>
          <div className="flex items-center mt-4">
            <svg width="56" height="28" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="54" height="26" rx="13" stroke="#991E1E" strokeWidth="2"/>
              <path d="M34 14H48" stroke="#991E1E" strokeWidth="2" strokeLinecap="round"/>
              <path d="M44 10L48 14L44 18" stroke="#991E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-base font-normal mt-4 text-[#991E1E]/80">{t('homepage.businessGrid.executiveMba.description')}</span>
          <span className="text-sm font-normal mt-2 text-[#991E1E]/60">{t('homepage.businessGrid.executiveMba.subtitle')}</span>
        </Link>
        {/* 7-8. Narxoz Business School (row-span-2, col-start-4) */}
        <Link
          to="/"
          className="bg-[#991E1E] text-white flex flex-col justify-center items-center rounded-[40px] border border-gray-200 h-full w-full row-span-2 col-start-4 p-6"
          style={{gridRow: '2 / span 1', gridColumn: '4 / span 1'}}
        >
          <span className="text-5xl md:text-6xl font-bold leading-tight text-center">{t('homepage.businessGrid.brand.title').split(' ')[0]}<br />{t('homepage.businessGrid.brand.title').split(' ')[1]}<br />{t('homepage.businessGrid.brand.title').split(' ')[2]}</span>
          <span className="text-sm font-normal mt-4 text-white/80 text-center">{t('homepage.businessGrid.brand.subtitle')}</span>
        </Link>
      </div>
    </div>
  );
};

export default BusinessSchoolGrid; 