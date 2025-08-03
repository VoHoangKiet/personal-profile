import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SakuraCDN = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const existingScript = document.querySelector('script[data-sakura]');
    let sakuraInstance: any = null;

    const loadSakura = () => {
      try {
        const Sakura = (window as any).Sakura?.default ?? (window as any).Sakura;

        if (typeof Sakura === 'function') {
          sakuraInstance = new Sakura('body');
          (window as any).__sakuraInstance = sakuraInstance;
        } else {
          console.warn('Sakura not found in window');
        }
      } catch (err) {
        console.error('Sakura init error:', err);
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/sakura-js@1.0.0/dist/sakura.min.js';
      script.setAttribute('data-sakura', 'true');
      script.onload = loadSakura;
      document.body.appendChild(script);
    } else {
      loadSakura();
    }

    return () => {
      // 🧹 Dọn khi rời route
      (window as any).__sakuraInstance?.stop?.();
      document.querySelectorAll('span.sakura').forEach((el) => el.remove());
    };
  }, [location.pathname]);

  return null;
};

export default SakuraCDN;
