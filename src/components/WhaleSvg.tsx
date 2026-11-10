import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';

interface Props {
  className?: string;
}

/** ภาพเงาวาฬสเปิร์ม: หัวทรงกล่อง กรามล่างแคบ แผลเป็น และดวงตาเรืองแสง */
export function WhaleSvg({ className }: Props) {
  const { t } = useLang();
  return (
    <svg className={className} viewBox="0 0 600 200" role="img" aria-label={t(ui.whaleAlt)}>
      <defs>
        <linearGradient id="whaleBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#123150" />
          <stop offset="55%" stopColor="#081a2c" />
          <stop offset="100%" stopColor="#02060d" />
        </linearGradient>
        <radialGradient id="eyeGlow">
          <stop offset="0%" stopColor="#ffd0d7" />
          <stop offset="35%" stopColor="#ff2e4d" />
          <stop offset="100%" stopColor="#ff2e4d" stopOpacity="0" />
        </radialGradient>
        <filter id="rim" x="-10%" y="-20%" width="120%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* แสงเรืองรอบตัว */}
      <path className="whale-rim" d={BODY} filter="url(#rim)" />

      {/* ลำตัว */}
      <path d={BODY} fill="url(#whaleBody)" stroke="#5fe3d0" strokeOpacity="0.35" strokeWidth="1.2" />

      {/* ครีบอก */}
      <path
        d="M190 150 C200 172, 222 186, 246 188 C232 176, 222 162, 218 150 Z"
        fill="#06121f"
        stroke="#5fe3d0"
        strokeOpacity="0.25"
      />

      {/* แนวกรามล่างและฟัน */}
      <path d="M44 128 L120 124" stroke="#d9d2c3" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      {[54, 66, 78, 90, 102].map((x) => (
        <path key={x} d={`M${x} 127 l3 6 l3 -6`} fill="#d9d2c3" opacity="0.75" />
      ))}

      {/* รอยดูดหมึกยักษ์ */}
      <g fill="none" stroke="#d9d2c3" strokeOpacity="0.22">
        <circle cx="70" cy="62" r="6" />
        <circle cx="88" cy="52" r="4.5" />
        <circle cx="60" cy="84" r="4" />
        <circle cx="150" cy="48" r="5" />
      </g>

      {/* แผลฉมวก 7 รอย */}
      <g stroke="#d9d2c3" strokeOpacity="0.35" strokeWidth="1.6" strokeLinecap="round">
        <path d="M220 60 l26 18" />
        <path d="M250 54 l18 20" />
        <path d="M300 62 l30 12" />
        <path d="M330 90 l22 -6" />
        <path d="M270 110 l34 6" />
        <path d="M380 78 l20 10" />
        <path d="M410 98 l18 -4" />
      </g>

      {/* ดวงตา */}
      <circle className="whale-eye-glow" cx="132" cy="104" r="16" fill="url(#eyeGlow)" />
      <circle cx="132" cy="104" r="3.2" fill="#ffe3e7" />
    </svg>
  );
}

const BODY =
  'M30 72 C30 46, 60 34, 124 34 L300 40 C380 46, 450 70, 500 94 L536 104 ' +
  'C556 80, 574 60, 596 48 C588 78, 576 98, 564 112 C578 126, 588 146, 596 172 ' +
  'C572 158, 554 138, 536 120 L500 126 C440 152, 360 166, 270 166 ' +
  'C200 166, 150 156, 112 140 L58 134 C44 133, 38 130, 42 126 L96 120 ' +
  'C58 114, 30 100, 30 72 Z';
