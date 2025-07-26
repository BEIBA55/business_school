import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// Статистика будет загружаться из переводов

// Компонент для анимированного счетчика
const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(value.replace(/\s/g, ''));
    const increment = numericValue / (duration / 16);
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    return num.toString();
  };

  return <span ref={ref}>{formatNumber(count)}</span>;
};

const NbsStatsSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Получаем статистику из переводов
  const stats = t('homepage.statsSection.stats', { returnObjects: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Заголовок секции */}
        <div className="px-6 md:px-12 pt-8 md:pt-12">
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h2 className="text-dark text-4xl md:text-5xl font-bold mb-4 text-left">
              {t('homepage.statsSection.title')}
            </h2>
          </div>
        </div>

        <div className="px-6 md:px-12 py-8 md:py-12">
          {/* Подзаголовок */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h3 className="text-gray-900 text-2xl md:text-3xl font-semibold mb-12 md:mb-16 text-center">
              {t('homepage.statsSection.subtitle')}
            </h3>
          </div>

          {/* Статистические карточки */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className={`group transition-all duration-500 delay-${idx * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="text-center">
                  {/* Число */}
                  <div className="mb-6">
                    <div className="text-lg text-[#991E1E] font-medium mb-2">{item.prefix}</div>
                    <div className="text-4xl md:text-5xl font-bold text-[#991E1E] leading-none mb-2">
                      <AnimatedCounter value={item.value} />
                    </div>
                    <div className="text-lg text-gray-500 font-medium">{item.label}</div>
                  </div>

                  {/* Описание */}
                  {item.description && (
                    <div className="text-gray-500 text-sm mt-3">{item.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* QS Ranking Block */}
          <div
            className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h4 className="text-[#991E1E] text-2xl md:text-3xl font-bold mb-4">
                  {t('homepage.statsSection.ranking.title')}
                </h4>
                <div className="w-24 h-1 bg-[#991E1E] mx-auto rounded-full"></div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
                <div className="group hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/Ranked.png"
                    alt="QS Ranked"
                    className="w-44 md:w-56 h-auto rounded-xl"
                  />
                </div>

                <div className="flex-1 max-w-2xl text-center flex flex-col items-center justify-center px-2">
                  <div className="space-y-4">
                    <p className="text-gray-900 text-base leading-relaxed text-center max-w-xl">
                      {t('homepage.statsSection.ranking.description1')}
                    </p>
                    <p className="text-gray-900 text-base leading-relaxed text-center max-w-xl">
                      {t('homepage.statsSection.ranking.description2')}
                    </p>
                  </div>
                </div>

                <div className="group hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/42.png"
                    alt="QS 42 Asia"
                    className="w-44 md:w-56 h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NbsStatsSection;
