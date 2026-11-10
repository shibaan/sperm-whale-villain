import { useEffect, useRef, useState } from 'react';
import { character } from '../data/character';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';

const src = (file: string) => `${import.meta.env.BASE_URL}concept/${file}`;

/** แกลเลอรีภาพคอนเซ็ปต์ + กล่องดูภาพขยาย (คีย์ลูกศรเลื่อนภาพ, Esc ปิด) */
export function ConceptGallery() {
  const { t } = useLang();
  const items = character.concepts;
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  const step = (dir: number) =>
    setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length));

  const current = index !== null ? items[index] : null;

  return (
    <>
      <ul className="gallery">
        {items.map((c, i) => (
          <li key={c.file}>
            <button className="gallery__item" onClick={() => setIndex(i)}>
              <img src={src(c.file)} alt={t(c.title)} loading="lazy" />
              <span className="gallery__meta">
                <span className="gallery__num">{String(i + 1).padStart(2, '0')}</span>
                <strong>{t(c.title)}</strong>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={current ? t(current.title) : undefined}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && setIndex(null)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1);
          if (e.key === 'ArrowLeft') step(-1);
        }}
      >
        {current && (
          <figure className="lightbox__figure">
            <img src={src(current.file)} alt={t(current.title)} />
            <figcaption>
              <span className="gallery__num">
                {index! + 1} / {items.length}
              </span>
              <strong>{t(current.title)}</strong>
              <span>{t(current.caption)}</span>
            </figcaption>
            <div className="lightbox__controls">
              <button className="btn" onClick={() => step(-1)} aria-label={t(ui.design.prev)}>
                ←
              </button>
              <button className="btn" onClick={() => step(1)} aria-label={t(ui.design.next)}>
                →
              </button>
              <button className="btn btn--primary" onClick={() => setIndex(null)}>
                {t(ui.nav.close)}
              </button>
            </div>
          </figure>
        )}
      </dialog>
    </>
  );
}
