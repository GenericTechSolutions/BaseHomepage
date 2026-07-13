import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import '../index.css';

/* ============================================================
   Header — reusable pinned toolbar with responsive nav.

   Props let you customise the brand name and navigation links.
   All styles are in index.css (CSS variables + component classes).
   ============================================================ */

const BREAKPOINT = 768;

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
  const isNarrow = useIsNarrow();

  /* ---- Mobile nav rendered as portal below the fixed toolbar ---- */
  const mobileNav = useMemo(() => (
    <nav className="header__nav-mobile-wrap" aria-label="Mobile">
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
  ), [navItems, rightContent]);

  return (
    <header className="home__toolbar" aria-label="Header">
      <div className="home__toolbar-row">

        {/* ---- Brand / logo ---- */}
        <span className="home__logo" aria-label={brandName}>
          {brandName}
        </span>

        {/* ---- Spacer — pushes nav to the right on desktop ---- */}
        <span className="home__spacer" />

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
        {isNarrow && <span className="home__spacer" />}
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

        {/* ---- Mobile nav dropdown (portal so it won't clip inside fixed toolbar) ---- */}
        {isNarrow && mobileOpen && createPortal(mobileNav, document.body)}
      </div>
    </header>
  );
}

/* ============================================================
   useIsNarrow — tracks window width reactively so the burger
   shows when resized below the breakpoint (not just at mount).
   Debounces resize events to avoid rapid re-renders.
   ============================================================ */

function useIsNarrow() {
  const [narrow, setNarrow] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= BREAKPOINT : false,
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setNarrow(window.innerWidth <= BREAKPOINT);
      }, 100);
    }
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
    };
  }, []);

  return narrow;
}
