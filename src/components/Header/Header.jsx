import { useState, useEffect } from 'react';
import './Header.css';
import { Search, Globe, Menu, User } from 'lucide-react';

export default function Header({ onReserveClick }) {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const galleryEnd = document.getElementById('photo-gallery');
      if (galleryEnd) {
        const rect = galleryEnd.getBoundingClientRect();
        setShowStickyNav(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Header */}
      <header className="header" role="banner">
        <div className="header__inner">
          <a href="/" className="header__logo" aria-label="Airbnb homepage">
            <svg width="102" height="32" fill="currentColor" viewBox="0 0 1000 300" aria-hidden="true">
              <path d="M257.2 218.6c-2.5 5-5.6 9.5-9.5 13.2-3.8 3.8-8.2 6.9-13.2 9.5-5 2.5-10.7 3.8-16.9 3.8-8.8 0-16.3-2.5-22.6-7.5l-1.3-1.3c-6.9 5.6-15.1 8.8-24.5 8.8-6.3 0-12-1.3-17.6-3.8-5.6-2.5-10.1-5.6-14.5-10.1-3.8-4.4-6.9-9.5-9.5-15.1-2.5-5.6-3.2-11.9-3.2-18.2 0-6.3 1.3-12.6 3.2-18.2 2.5-5.6 5.6-10.7 9.5-15.1 3.8-4.4 8.8-7.5 14.5-10.1 5.6-2.5 11.3-3.8 17.6-3.8 9.5 0 17.6 3.2 24.5 8.8l1.3-1.3c6.3-5 13.8-7.5 22.6-7.5 6.3 0 11.9 1.3 16.9 3.8 5 2.5 9.5 5.6 13.2 9.5 3.8 3.8 6.9 8.2 9.5 13.2 2.5 5 3.2 10.7 3.2 16.3-.1 5.7-1.3 11.4-3.7 16.4zm-40.2-56.8c-5-2.5-10.7-3.8-16.9-3.8-6.3 0-11.9 1.3-17 3.8-5 2.5-9.5 6.3-13.2 10.7-3.8 4.4-6.3 10.1-8.2 16.3-1.9 6.3-3.2 12.6-3.2 19.5 0 6.9 1.3 13.2 3.2 19.5 1.9 6.3 5 11.9 8.2 16.3 3.8 4.4 8.2 8.2 13.2 10.7 5 2.5 10.7 3.8 17 3.8 6.3 0 11.9-1.3 16.9-3.8 5-2.5 9.5-6.3 13.2-10.7 3.8-4.4 6.3-10.1 8.2-16.3 1.9-6.3 3.2-12.6 3.2-19.5 0-6.9-1.3-13.2-3.2-19.5-2.5-6.3-5-11.9-8.2-16.3-3.8-4.4-8.3-8.2-13.2-10.7z" fill="#FF385C"/>
            </svg>
            <span className="header__logo-text">airbnb</span>
          </a>

          {/* Search Bar */}
          <div className="header__search" role="search">
            <button className="header__search-item" type="button">
              <span className="header__search-text">Anywhere</span>
            </button>
            <span className="header__search-divider" aria-hidden="true"></span>
            <button className="header__search-item" type="button">
              <span className="header__search-text">Any week</span>
            </button>
            <span className="header__search-divider" aria-hidden="true"></span>
            <button className="header__search-item header__search-item--guests" type="button">
              <span className="header__search-text header__search-text--muted">Add guests</span>
            </button>
            <button className="header__search-btn" aria-label="Search">
              <Search size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Right Nav */}
          <nav className="header__nav" aria-label="User navigation">
            <a href="#" className="header__nav-link">Become a host</a>
            <button className="header__nav-icon" aria-label="Choose language">
              <Globe size={18} />
            </button>
            <button className="header__user-menu" aria-label="User menu">
              <Menu size={18} />
              <div className="header__user-avatar">
                <User size={18} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Sticky Navigation */}
      <div className={`sticky-nav ${showStickyNav ? 'sticky-nav--visible' : ''}`} role="navigation" aria-label="Page sections">
        <div className="sticky-nav__inner">
          <div className="sticky-nav__tabs">
            <button className="sticky-nav__tab" onClick={() => scrollToSection('photos-section')}>Photos</button>
            <button className="sticky-nav__tab" onClick={() => scrollToSection('amenities-section')}>Amenities</button>
            <button className="sticky-nav__tab" onClick={() => scrollToSection('reviews-section')}>Reviews</button>
            <button className="sticky-nav__tab" onClick={() => scrollToSection('location-section')}>Location</button>
          </div>
          <div className="sticky-nav__right">
            <div className="sticky-nav__price">
              <span className="sticky-nav__price-amount">₹28,499</span>
              <span className="sticky-nav__price-label"> for 5 nights</span>
            </div>
            <div className="sticky-nav__rating">
              <span>★ 4.95 · 19 reviews</span>
            </div>
            <button className="sticky-nav__reserve" onClick={onReserveClick}>Reserve</button>
          </div>
        </div>
      </div>
    </>
  );
}
