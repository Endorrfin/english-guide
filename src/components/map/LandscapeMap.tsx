// CHANGED (S1): landing CEFR map — hero, trainer tiles, the owner-priority suggested path
// (modals first), and the all-modules overview (ported pattern from ../database guide,
// families grid replaced by trainer tiles + CEFR legend).
import { COUNTS, LEVELS, modulesBySection, sections } from '../../data/concepts';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { useAppState } from '../../lib/appState';
import { hrefDictionary, hrefIrregular, hrefModule, hrefPractice, hrefReview } from '../../lib/hashRouter';
import { cx } from '../../lib/utils';

// The guided owner-priority route: the modal system first (the flagship), then the
// highest-value B1 grammar. Skip ahead any time.
const START_PATH: string[] = [
  'm17-modal-system',
  'm18-ability-permission',
  'm19-obligation-necessity',
  'm20-advice-criticism',
  'm21-deduction-probability',
  'm22-requests-politeness',
  'm9-present-perfect',
  'm13-conditionals-0-1-2',
];

export function LandscapeMap() {
  const { t } = useLang();
  const { levelFilter, setLevelFilter } = useAppState();

  const matches = (lv: string) => levelFilter === 'all' || lv === levelFilter;
  const byId = new Map(sections.flatMap((s) => modulesBySection(s.id)).map((m) => [m.id, m]));

  return (
    <div className="content map">
      <section className="map-hero">
        <p className="map-eyebrow">{t(ui.brandSubtitle)} · A1 → C1</p>
        <h1>{t({ en: 'English that finally sticks', uk: 'Англійська, що нарешті закріплюється' })}</h1>
        <p className="map-lede">
          {t({
            en: 'A bilingual, systems-first trainer for engineers: grammar mapped to CEFR levels, a flagship Modal Verbs section with heavy drilled practice, and a searchable dictionary growing from 150 to 3,000+ words. Start anywhere; every module stands on its own.',
            uk: 'Двомовний системний тренажер для інженерів: граматика за рівнями CEFR, флагманський розділ Modal Verbs із щільною практикою і пошуковий словник, що росте від 150 до 3 000+ слів. Починайте будь-де; кожен модуль самодостатній.',
          })}
        </p>
        <div className="map-cta">
          <a className="btn btn-primary" href={hrefModule('m17-modal-system')}>
            ★ {t(ui.startHere)} →
          </a>
          <a className="btn" href={hrefDictionary()}>
            {t(ui.openDictionary)}
          </a>
        </div>
        <div className="map-tiles">
          <a className="map-tile" href={hrefDictionary()}>
            <span className="map-tile-ic" aria-hidden="true">📖</span>
            <strong>{t(ui.dictionary)}</strong>
            <span>
              {COUNTS.words} {t(ui.wordsLabel)} · IPA · TTS ·{' '}
              {t({ en: '7 examples each', uk: '7 прикладів на слово' })}
            </span>
          </a>
          <a className="map-tile" href={hrefPractice()}>
            <span className="map-tile-ic" aria-hidden="true">✍️</span>
            <strong>{t(ui.practice)}</strong>
            <span>{t({ en: 'Gap-fill & multiple choice drills', uk: 'Вправи gap-fill і multiple choice' })}</span>
          </a>
          <a className="map-tile" href={hrefReview()}>
            <span className="map-tile-ic" aria-hidden="true">🔁</span>
            <strong>{t(ui.review)}</strong>
            <span>{t({ en: 'Spaced-repetition flashcards (S4)', uk: 'Flashcards зі spaced repetition (S4)' })}</span>
          </a>
          <a className="map-tile" href={hrefIrregular()}>
            <span className="map-tile-ic" aria-hidden="true">🔀</span>
            <strong>{t(ui.irregularVerbs)}</strong>
            <span>{t({ en: '3 forms, table + drill (S4)', uk: '3 форми, таблиця + тренажер (S4)' })}</span>
          </a>
        </div>
      </section>

      <section className="map-path">
        <h2>{t(ui.suggestedPath)}</h2>
        <p className="muted">{t(ui.suggestedPathLede)}</p>
        <ol className="path-row">
          {START_PATH.map((id, i) => {
            const m = byId.get(id);
            if (!m) return null;
            return (
              <li className="path-step" key={id}>
                <a className="path-node" href={hrefModule(id)}>
                  <span className="path-num mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="path-title">{t(m.title)}</span>
                  <span className="path-meta">
                    <span className="path-level" data-level={m.level} title={m.level.toUpperCase()} />
                    {m.signature && <span className="star">★</span>}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="map-overview">
        <div className="map-sec-head">
          <div>
            <h2>{t({ en: 'All modules', uk: 'Усі модулі' })}</h2>
            <p className="muted">
              {t({
                en: 'Five sections, 34 modules across the CEFR ramp. The level filter mirrors the top bar.',
                uk: 'Пʼять розділів, 34 модулі вздовж шкали CEFR. Фільтр рівня синхронний із верхньою панеллю.',
              })}
            </p>
          </div>
          <div className="levelseg" role="group" aria-label={t(ui.levelFilter)}>
            <button className={cx(levelFilter === 'all' && 'on')} onClick={() => setLevelFilter('all')}>
              {t(ui.allLevels)}
            </button>
            {LEVELS.map((lv) => (
              <button
                key={lv}
                className={cx('lvl', levelFilter === lv && 'on')}
                data-level={lv}
                onClick={() => setLevelFilter(lv)}
                title={lv.toUpperCase()}
              >
                {lv.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="ov-grid">
          {sections.map((s) => (
            <div className="ov-section" key={s.id}>
              <div className="ov-head" style={{ ['--sec' as string]: s.accent }}>
                <span className="ov-roman" style={{ color: s.accent }}>
                  {s.roman}
                </span>
                <span>{t(s.title)}</span>
              </div>
              <ul className="ov-mods">
                {modulesBySection(s.id).map((m) => (
                  <li key={m.id}>
                    <a className={cx('ov-mod', !matches(m.level) && 'dimmed')} href={hrefModule(m.id)}>
                      <span className="mono dim">{String(m.num).padStart(2, '0')}</span>
                      <span className="ov-mod-title">{t(m.title)}</span>
                      <span className="ov-mod-level" data-level={m.level} />
                      {m.signature && <span className="star">★</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
