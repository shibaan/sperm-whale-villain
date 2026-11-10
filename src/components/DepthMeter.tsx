import { useEffect, useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';

const MAX_DEPTH = 3000;

function zoneFor(depth: number) {
  if (depth < 200) return ui.depth.sunlight;
  if (depth < 1000) return ui.depth.twilight;
  return ui.depth.midnight;
}

/** มาตรวัดความลึกตามการเลื่อนหน้า และตั้งค่า --depth ให้พื้นหลังมืดลง */
export function DepthMeter() {
  const [progress, setProgress] = useState(0);
  const { lang, t } = useLang();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      setProgress(p);
      document.documentElement.style.setProperty('--depth', p.toFixed(3));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const depth = Math.round(progress * MAX_DEPTH);
  const reading = `${depth.toLocaleString(lang === 'th' ? 'th-TH' : 'en-US')} ${t(ui.depth.unit)}`;

  return (
    <aside className="depth" aria-label={`${t(ui.depth.label)} ${reading}`}>
      <div className="depth__track">
        <div className="depth__fill" style={{ height: `${progress * 100}%` }} />
      </div>
      <div className="depth__readout">
        <strong>{reading}</strong>
        <span>{t(zoneFor(depth))}</span>
      </div>
    </aside>
  );
}
