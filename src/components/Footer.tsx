import '../index.css';

/* ============================================================
   Footer — reusable copyright / legal footer.

   Props let you customise the brand name, powered-by line, and
   legal links (privacy, terms, etc.).
   ============================================================ */

export interface FooterProps {
  brandName?: string;      /* displayed brand / copyright name */
  poweredBy?: string;      /* optional: "Powered by ..." line */
  legalLinks?: Array<{ label: string; href: string }>;
}

/** Default legal links for the BetterFutureUK site. */
const DEFAULT_LEGAL: Array<{ label: string; href: string }> = [
  // { label: 'Privacy', href: '/privacy' },
  // { label: 'Terms', href: '/terms' },
];

export function Footer({
  brandName = 'BetterFutureUK',
  poweredBy = 'Powered by Tech Solutions',
  legalLinks = DEFAULT_LEGAL,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="home-footer">
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
        <p>
          &copy; {year} {brandName}
          {poweredBy ? ` - ${poweredBy}` : ''}
          . All rights reserved.
        </p>
        {legalLinks.map((link) => (
          <a key={link.href} href={link.href} style={{ fontSize: 'var(--text-small)', color: 'var(--text-disabled)' }}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
