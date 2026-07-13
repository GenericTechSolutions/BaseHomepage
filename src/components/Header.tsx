import { useState } from 'react';
import '../index.css';

/* ============================================================
   Header — reusable pinned toolbar with responsive nav.

   Props let you customise the brand name and navigation links.
   All styles are in index.css (CSS variables + component classes).
   ============================================================ */

export interface NavItem {
  label: string;
  href: string;
  primary?: boolean;        /* make it a highlighted CTA button */
}

export interface HeaderProps {
  brandName?: string;       /* displayed logo text (default "My Site") */
  navItems?: NavItem[];     /* navigation links rendered inside the header */
  rightContent?: React.ReactNode;  /* custom JSX on the far-right of the row */
}

export function Header({
  brandName = 'My Site',
  navItems = [],
  rightContent,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Only show the burger on narrow viewports. */
  const isNarrow = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <header className="home__toolbar" aria-label="Header">
      <div className="home__toolbar-row">

        {/* ---- Brand / logo ---- */}
        <span className="home__logo" aria-label={brandName}>
          {brandName}
        </span>

        {/* ---- Spacer — pushes nav to the right on desktop ---- */}
        <span style={{ flex: 1 }} />

        {/* ---- Desktop nav links (hidden on small screens) ---- */}
        <nav className="header__nav-desktop" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`home__btn${item.primary ? ' home__btn--primary' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ---- Mobile spacer (only on narrow viewports, where nav is hidden) ---- */}
        {isNarrow && <span style={{ flex: 1 }} />}
        {isNarrow && (
          <button
            type="button"
            className="home__btn header__burger"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            &#9776;
          </button>
        )}

        {/* ---- Mobile nav dropdown ---- */}
        {isNarrow && mobileOpen && (
          <nav className="header__nav-mobile" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`home__btn${item.primary ? ' home__btn--primary' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {rightContent && <div>{rightContent}</div>}
          </nav>
        )}
      </div>
    </header>
  );
}
