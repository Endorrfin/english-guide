// CHANGED (S1): compact 2-row footer — brand + links, then meta counts (ported pattern).
import { COUNTS } from '../../data/concepts';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';

const LINKEDIN = 'https://www.linkedin.com/in/vasyl-krupka/';
const GITHUB = 'https://github.com/Endorrfin/english-guide';

const Sep = () => (
  <span className="footer-sep" aria-hidden="true">
    ·
  </span>
);

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-brand">
          <strong>Vasyl Krupka</strong>
          <Sep />
          <span className="muted">{t(ui.footerRole)}</span>
          <Sep />
          <span className="muted">{t(ui.footerCountry)} 🇺🇦</span>
          <Sep />
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <Sep />
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </p>
        <p className="footer-meta dim">
          <span>{t(ui.footerTagline)}</span>
          <Sep />
          <span>
            {COUNTS.sections} {t(ui.sectionsLabel)} · {COUNTS.modules} {t(ui.modulesLabel)} ·{' '}
            {COUNTS.words} {t(ui.wordsLabel)}
          </span>
          <Sep />
          <span>{t(ui.builtWith)}</span>
        </p>
      </div>
    </footer>
  );
}
