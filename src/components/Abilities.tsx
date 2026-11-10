import { character } from '../data/character';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';
import { Section } from './Section';

export function Abilities() {
  const { lang, t } = useLang();

  return (
    <Section id="abilities" kicker={t(ui.abilities.kicker)} title={t(ui.abilities.title)}>
      <div className="abilities">
        {character.abilities.map((a, i) => (
          <article key={a.tag} className="card ability" style={{ ['--i' as string]: i }}>
            <span className="ability__icon" aria-hidden="true">
              {a.icon}
            </span>
            <h3>{t(a.name)}</h3>
            {/* ในโหมดภาษาอังกฤษ ชื่อกับแท็กซ้ำกัน จึงซ่อนแท็ก */}
            {lang === 'th' && (
              <p className="ability__tag" lang="en">
                {a.tag}
              </p>
            )}
            <p className="ability__desc">{t(a.description)}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
