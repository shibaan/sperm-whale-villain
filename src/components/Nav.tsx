import { useState } from 'react';
import { character } from '../data/character';
import { useLang, type Lang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';
import { ExportPdfButton } from './ExportPdfButton';

const links = [
  { href: '#profile', label: ui.nav.profile },
  { href: '#stats', label: ui.nav.stats },
  { href: '#abilities', label: ui.nav.abilities },
  { href: '#lore', label: ui.nav.lore },
  { href: '#design', label: ui.nav.design },
];

const langs: { code: Lang; label: string }[] = [
  { code: 'th', label: 'TH' },
  { code: 'en', label: 'EN' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <header className="nav">
      <a href="#top" className="nav__brand">
        <span className="nav__dot" /> {character.name.en.toUpperCase()}
      </a>

      <nav id="nav-links" className={open ? 'nav__links is-open' : 'nav__links'}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {t(l.label)}
          </a>
        ))}
      </nav>

      <div className="nav__actions">
        <ExportPdfButton />
        <div className="lang" role="group" aria-label={t(ui.nav.language)}>
          {langs.map((l) => (
            <button
              key={l.code}
              className={lang === l.code ? 'lang__btn is-active' : 'lang__btn'}
              aria-pressed={lang === l.code}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {t(open ? ui.nav.close : ui.nav.menu)}
        </button>
      </div>
    </header>
  );
}
