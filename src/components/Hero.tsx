import { character } from '../data/character';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';
import { WhaleSvg } from './WhaleSvg';

export function Hero() {
  const { lang, t } = useLang();
  const other = lang === 'th' ? 'en' : 'th';

  return (
    <section id="top" className="hero">
      <p className="eyebrow">
        {t(ui.hero.file)} · {t(character.threatLevel)}
      </p>
      <h1 className="hero__name">
        {t(character.name)}
        <span lang={other}>{character.name[other].toUpperCase()}</span>
      </h1>
      <p className="hero__title">
        {t(character.title)} <em lang={other}>— {character.title[other]}</em>
      </p>

      <WhaleSvg className="hero__whale" />

      <blockquote className="hero__quote">“{t(character.quote)}”</blockquote>

      <a href="#profile" className="hero__cta">
        {t(ui.hero.cta)} <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
