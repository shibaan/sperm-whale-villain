import { character } from '../data/character';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';
import { Section } from './Section';

export function Profile() {
  const { t } = useLang();

  return (
    <Section id="profile" kicker={t(ui.profile.kicker)} title={t(ui.profile.title)}>
      <div className="profile">
        <dl className="card profile__facts">
          {character.profile.map((f) => (
            <div key={f.label.en} className="profile__row">
              <dt>{t(f.label)}</dt>
              <dd>{t(f.value)}</dd>
            </div>
          ))}
        </dl>

        <div className="profile__side">
          <div className="card card--accent">
            <h3>{t(ui.profile.motivation)}</h3>
            <p>{t(character.motivation)}</p>
          </div>
          <div className="card card--danger">
            <h3>{t(ui.profile.weaknesses)}</h3>
            <ul>
              {character.weaknesses.map((w) => (
                <li key={w.en}>{t(w)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
