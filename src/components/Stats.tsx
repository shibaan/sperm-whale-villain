import { useState } from 'react';
import { character } from '../data/character';
import { statsToCode, useStats } from '../hooks/useStats';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';
import { Section } from './Section';

function rankFor(avg: number) {
  if (avg >= 90) return { label: ui.stats.rankOmega, tone: 'omega' };
  if (avg >= 75) return { label: ui.stats.rankHigh, tone: 'high' };
  if (avg >= 50) return { label: ui.stats.rankMid, tone: 'mid' };
  return { label: ui.stats.rankLow, tone: 'low' };
}

export function Stats() {
  const { t } = useLang();
  const { values, setValue, reset, isModified, average, defaults } = useStats();
  const [editing, setEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const rank = rankFor(average);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(statsToCode(values));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard ถูกบล็อก */
    }
  };

  return (
    <Section id="stats" kicker={t(ui.stats.kicker)} title={t(ui.stats.title)}>
      <div className="stats__toolbar">
        <button
          className={editing ? 'btn btn--primary' : 'btn'}
          aria-pressed={editing}
          onClick={() => setEditing((e) => !e)}
        >
          {editing ? `✓ ${t(ui.stats.done)}` : `✎ ${t(ui.stats.edit)}`}
        </button>
        {isModified && <span className="badge">{t(ui.stats.modified)}</span>}
        {editing && (
          <>
            <button className="btn" onClick={reset} disabled={!isModified}>
              ↺ {t(ui.stats.reset)}
            </button>
            <button className="btn" onClick={copyCode}>
              {copied ? t(ui.stats.copied) : `⧉ ${t(ui.stats.copy)}`}
            </button>
          </>
        )}
      </div>

      <div className={editing ? 'stats is-editing' : 'stats'}>
        <div className={`card stats__score stats__score--${rank.tone}`} aria-live="polite">
          <span className="stats__number">{average}</span>
          <span className="stats__label">{t(ui.stats.average)}</span>
          <span className="stats__rank">{t(rank.label)}</span>
        </div>

        <ul className="card stats__bars">
          {character.stats.map((s, i) => {
            const id = `stat-${i}`;
            const v = values[i];
            const diff = v - defaults[i];
            return (
              <li key={s.label.en} style={{ ['--i' as string]: i }}>
                <div className="stats__row">
                  <label htmlFor={id}>{t(s.label)}</label>
                  <span className="stats__value">
                    {editing && diff !== 0 && (
                      <small className={diff > 0 ? 'diff up' : 'diff down'}>
                        {diff > 0 ? `+${diff}` : diff}
                      </small>
                    )}
                    {v}
                  </span>
                </div>
                {editing ? (
                  <input
                    id={id}
                    className="slider"
                    type="range"
                    min={0}
                    max={100}
                    value={v}
                    onChange={(e) => setValue(i, Number(e.target.value))}
                    style={{ ['--w' as string]: `${v}%` }}
                  />
                ) : (
                  <div
                    className="bar"
                    role="meter"
                    aria-label={t(s.label)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={v}
                  >
                    <div className="bar__fill" style={{ ['--w' as string]: `${v}%` }} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {editing && <p className="muted stats__hint">{t(ui.stats.hint)}</p>}
    </Section>
  );
}
