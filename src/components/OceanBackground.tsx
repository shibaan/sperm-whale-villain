import { useMemo } from 'react';

/** ฟองอากาศและอนุภาคเรืองแสงลอยในน้ำ (CSS animation ล้วน) */
export function OceanBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 6,
        duration: 14 + Math.random() * 22,
        delay: -Math.random() * 30,
        glow: i % 4 === 0,
      })),
    [],
  );

  return (
    <div className="ocean" aria-hidden="true">
      <div className="ocean__rays" />
      {particles.map((p) => (
        <span
          key={p.id}
          className={p.glow ? 'particle particle--glow' : 'particle'}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
