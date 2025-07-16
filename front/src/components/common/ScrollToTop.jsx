import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Если есть хэш в URL (якорь), прокручиваем к нему
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Небольшая задержка для корректной прокрутки к якорю
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
        return;
      }
    }

    // Иначе прокручиваем к началу страницы
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname, hash]);

  return null; // Компонент не рендерит ничего
};

export default ScrollToTop; 