import { useState } from 'react';
import { character } from '../data/character';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';
import { ConceptGallery } from './ConceptGallery';
import { Section } from './Section';
import { WhaleSvg } from './WhaleSvg';

export function DesignSheet() {
  const { t } = useLang();
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      /* clipboard อาจถูกบล็อก — ไม่เป็นไร */
    }
  };

  return (
    <Section id="design" kicker={t(ui.design.kicker)} title={t(ui.design.title)}>
      <div className="design">
        <div className="card design__turn">
          <h3>{t(ui.design.concepts)}</h3>
          <p className="muted">{t(ui.design.conceptsHint)}</p>
          <ConceptGallery />
        </div>

        <div className="card design__turn">
          <h3>{t(ui.design.silhouette)}</h3>
          <WhaleSvg className="design__whale" />
          <p className="muted">{t(ui.design.silhouetteNote)}</p>
        </div>

        <div className="card">
          <h3>{t(ui.design.palette)}</h3>
          <p className="muted">{t(ui.design.paletteHint)}</p>
          <ul className="palette">
            {character.palette.map((s) => (
              <li key={s.hex}>
                <button className="swatch" onClick={() => copy(s.hex)}>
                  <span className="swatch__chip" style={{ background: s.hex }} />
                  <span className="swatch__text">
                    <strong>{s.name}</strong>
                    <span>{copied === s.hex ? t(ui.design.copied) : `${s.hex} · ${t(s.role)}`}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>{t(ui.design.notes)}</h3>
          <ul className="notes">
            {character.designNotes.map((n) => (
              <li key={n.en}>{t(n)}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
