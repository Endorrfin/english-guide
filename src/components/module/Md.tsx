// CHANGED (S1): markdown-lite renderer (ported from ../database guide) — paragraphs on blank
// lines; inline `code`, **bold**, *italic*. Content is authored in src/data, so the subset is small.
// CHANGED (TM1+TM2): + [text](#/hash) links, so authored blocks can cross-link app pages (first
// use: the m6/m11 banners → ★ The Tense Machine). Content is trusted authored data (SSOT rule).
import type { ReactNode } from 'react';

const INLINE = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^\s)]+\))/g;
const LINK = /^\[([^\]]+)\]\(([^\s)]+)\)$/;

function renderInline(text: string, keyBase: string): ReactNode[] {
  return text
    .split(INLINE)
    .filter((p) => p !== '')
    .map((part, i) => {
      const key = `${keyBase}-${i}`;
      const link = part.match(LINK); // CHANGED (TM1+TM2)
      if (link) {
        return (
          <a key={key} href={link[2]}>
            {renderInline(link[1], `${key}-l`)}
          </a>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) return <code key={key}>{part.slice(1, -1)}</code>;
      if (part.startsWith('**') && part.endsWith('**')) return <strong key={key}>{part.slice(2, -2)}</strong>;
      if (part.startsWith('*') && part.endsWith('*')) return <em key={key}>{part.slice(1, -1)}</em>;
      return <span key={key}>{part}</span>;
    });
}

export function Md({ text, className }: { text: string; className?: string }) {
  const paras = text.split(/\n\n+/);
  return (
    <div className={className}>
      {paras.map((p, i) => (
        <p key={i}>{renderInline(p, String(i))}</p>
      ))}
    </div>
  );
}

/** Inline variant (a <span>, no paragraphs) — for notes/captions inside existing text flow. */
export function MdInline({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{renderInline(text, 'i')}</span>;
}
