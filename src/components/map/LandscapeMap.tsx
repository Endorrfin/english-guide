// CHANGED (S1): landing CEFR map — hero, trainer tiles, the owner-priority suggested path
// (modals first), and the all-modules overview (ported pattern from ../database guide,
// families grid replaced by trainer tiles + CEFR legend).
// CHANGED (T1): Section II Tenses — the ✈️ mini-matrix card (the level-1 porthole view → m6),
// six-section copy, Reading roman VI → VII, and the suggested path routed through m6.
import { COUNTS, LEVELS, modulesBySection, sections } from '../../data/concepts';
import { READING_COUNTS } from '../../data/reading';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { useAppState } from '../../lib/appState';
import { hrefDictionary, hrefIrregular, hrefModule, hrefPractice, hrefReading, hrefReview } from '../../lib/hashRouter';
import { ASPECTS, ASPECT_GLYPH, ASPECT_LABEL, TENSE_TIMES, TIME_COLOR_VAR, TIME_LABEL, getTense } from '../../lib/tenses';
import { cx } from '../../lib/utils';

// The guided owner-priority route: the modal system first (the flagship), then the tense system
// (the second flagship), then the highest-value B1 grammar. Skip ahead any time.
const START_PATH: string[] = [
  'm17-modal-system',
  'm18-ability-permission',
  'm19-obligation-necessity',
  'm20-advice-criticism',
  'm21-deduction-probability',
  'm22-requests-politeness',
  'm6-tense-system', // CHANGED (T1): replaces the superseded m9-present-perfect stub
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
            en: 'A bilingual, systems-first trainer for engineers: grammar mapped to CEFR levels, a flagship Modal Verbs section with heavy drilled practice, the whole Tense System in one 3×4 matrix, and a searchable dictionary growing from 150 to 3,000+ words. Start anywhere; every module stands on its own.',
            uk: 'Двомовний системний тренажер для інженерів: граматика за рівнями CEFR, флагманський розділ Modal Verbs із щільною практикою, уся система Tenses в одній матриці 3×4 і пошуковий словник, що росте від 150 до 3 000+ слів. Починайте будь-де; кожен модуль самодостатній.',
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
          <a className="map-tile" href={hrefReading()}>
            <span className="map-tile-ic" aria-hidden="true">📚</span>
            <strong>{t(ui.reading)}</strong>
            <span>
              {READING_COUNTS.texts} {t(ui.readingTextsLabel)} ·{' '}
              {t({ en: 'EN + UA · questions', uk: 'EN + UA · питання' })}
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

      {/* CHANGED (T1): the ✈️ porthole card — the whole tense system as a mini 3×4 matrix → m6. */}
      <section className="map-tenses">
        <a className="tmx-card" href={hrefModule('m6-tense-system')}>
          <div className="tmx-head">
            <span className="ov-roman" style={{ color: 'var(--sec-tenses)' }}>
              II
            </span>
            <span className="tmx-title">
              <strong>{t({ en: 'Tenses ★ — the whole system in one place', uk: 'Tenses ★ — уся система в одному місці' })}</strong>
              <span className="dim">
                {t({
                  en: '3 times × 4 aspects = 12 cells · 5 forms carry 96% of speech · 4 reading depths',
                  uk: '3 часи × 4 aspects = 12 клітинок · 5 форм несуть 96% мовлення · 4 глибини читання',
                })}
              </span>
            </span>
            <span className="tmx-cta mono dim">✈️ →</span>
          </div>
          <div className="tmx-grid" aria-hidden="true">
            <span className="tmx-corner" />
            {TENSE_TIMES.map((tm) => (
              <span className="tmx-col mono" key={tm} style={{ color: TIME_COLOR_VAR[tm] }}>
                {t(TIME_LABEL[tm])}
              </span>
            ))}
            {ASPECTS.map((a) => (
              <div className="tmx-row" key={a}>
                <span className="tmx-glyph" title={t(ASPECT_LABEL[a])}>
                  {ASPECT_GLYPH[a]}
                </span>
                {TENSE_TIMES.map((tm) => {
                  const cell = getTense(tm, a);
                  return (
                    <span
                      className={cx('tmx-cell', cell?.freqPct !== undefined && 'tmx-cell--big')}
                      key={tm}
                      data-time={tm}
                      title={cell?.name}
                    >
                      {cell?.freqPct !== undefined ? `${cell.freqPct}%` : ASPECT_GLYPH[a]}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </a>
      </section>

      <section className="map-overview">
        <div className="map-sec-head">
          <div>
            <h2>{t({ en: 'All modules', uk: 'Усі модулі' })}</h2>
            <p className="muted">
              {t({
                en: 'Six sections, 34 modules across the CEFR ramp. The level filter mirrors the top bar.',
                uk: 'Шість розділів, 34 модулі вздовж шкали CEFR. Фільтр рівня синхронний із верхньою панеллю.',
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

        {/* CHANGED (S3): Reading (a page-based system, after Vocabulary in Action).
            CHANGED (T1): roman VI → VII — the S5 Tenses insert shifts display romans. */}
        <a className="rd-mapcard" href={hrefReading()}>
          <span className="ov-roman" style={{ color: 'var(--accent)' }}>
            VII
          </span>
          <span className="rd-mapcard-body">
            <strong>{t(ui.reading)}</strong>
            <span className="dim">{t(ui.readingMapBlurb)}</span>
          </span>
          <span className="rd-mapcard-count mono dim">
            {READING_COUNTS.texts} {t(ui.readingTextsLabel)} →
          </span>
        </a>
      </section>
    </div>
  );
}
