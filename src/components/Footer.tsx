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

export function Footer({
  brandName = 'My Site',
  poweredBy,
  legalLinks = [],
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="home-footer">
      <div className="home-footer__row">
        <p>
          &copy; {year} {brandName}
          {poweredBy ? ` - ${poweredBy}` : ''}
          . All rights reserved.
        </p>
        {legalLinks.map((link) => (
          <a key={link.href} href={link.href} className="home-footer__link">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
