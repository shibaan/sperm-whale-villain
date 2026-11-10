import { character } from '../data/character';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';
import { Section } from './Section';

export function Lore() {
  const { t } = useLang();

  return (
    <Section id="lore" kicker={t(ui.lore.kicker)} title={t(ui.lore.title)}>
      <ol className="timeline">
        {character.lore.map((e, i) => (
          <li key={e.title.en} className="timeline__item" style={{ ['--i' as string]: i }}>
            <span className="timeline__era">{t(e.era)}</span>
            <h3>{t(e.title)}</h3>
            <p>{t(e.text)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
