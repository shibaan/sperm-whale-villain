import { useEffect } from 'react';
import { Abilities } from './components/Abilities';
import { DepthMeter } from './components/DepthMeter';
import { DesignSheet } from './components/DesignSheet';
import { Hero } from './components/Hero';
import { Lore } from './components/Lore';
import { Nav } from './components/Nav';
import { OceanBackground } from './components/OceanBackground';
import { Profile } from './components/Profile';
import { Stats } from './components/Stats';
import { character } from './data/character';
import { useLang } from './i18n/LanguageContext';
import { ui } from './i18n/ui';

export default function App() {
  const { t } = useLang();

  useEffect(() => {
    document.title = t(ui.pageTitle);
    document.querySelector('meta[name="description"]')?.setAttribute('content', t(ui.pageDescription));
  }, [t]);

  return (
    <>
      <OceanBackground />
      <Nav />
      <DepthMeter />
      <main>
        <Hero />
        <Profile />
        <Stats />
        <Abilities />
        <Lore />
        <DesignSheet />
      </main>
      <footer className="footer">
        <p>
          {character.name.en.toUpperCase()} · {t(ui.footer.text)} <code>src/data/character.ts</code>
        </p>
      </footer>
    </>
  );
}
