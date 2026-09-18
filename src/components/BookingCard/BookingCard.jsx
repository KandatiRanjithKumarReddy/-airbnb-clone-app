import { useState } from 'react';
import './BookingCard.css';
import { ChevronDown, Flag, Tag } from 'lucide-react';

export default function BookingCard({
  price,
  dates,
  guests = 2,
  maxGuests = 3,
  cancellation,
}) {
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [guestCount, setGuestCount] = useState(guests);

  const handleGuestChange = (delta) => {
    setGuestCount((prev) => Math.min(maxGuests, Math.max(1, prev + delta)));
  };

  return (
    <div className="booking-card" id="booking-card">
      {/* Promo Banner */}
      <div className="booking-card__promo">
        <div className="booking-card__promo-left">
          <Tag size={20} className="booking-card__promo-icon" />
          <div>
            <span className="booking-card__promo-text">Get 10% off your next stay.</span>
            <br />
            <a href="#" className="booking-card__promo-link">Terms apply</a>
          </div>
        </div>
        <button className="booking-card__promo-claim" type="button">Claim</button>
      </div>

      {/* Price */}
      <div className="booking-card__price">
        <span className="booking-card__price-amount">
          {price.currency}{price.total.toLocaleString('en-IN')}
        </span>
        <span className="booking-card__price-period"> for {price.nights} nights</span>
      </div>

      {/* Date Picker */}
      <div className="booking-card__dates">
        <div className="booking-card__date-field">
          <label className="booking-card__date-label">CHECK-IN</label>
          <span className="booking-card__date-value">{dates.checkIn}</span>
        </div>
        <div className="booking-card__date-divider"></div>
        <div className="booking-card__date-field">
          <label className="booking-card__date-label">CHECKOUT</label>
          <span className="booking-card__date-value">{dates.checkOut}</span>
        </div>
      </div>

      {/* Guests Selector */}
      <div style={{ position: 'relative' }}>
        <button
          type="button"
          className="booking-card__guests"
          onClick={() => setShowGuestDropdown(!showGuestDropdown)}
          aria-expanded={showGuestDropdown}
          aria-label="Select number of guests"
        >
          <div>
            <label className="booking-card__date-label">GUESTS</label>
            <span className="booking-card__guests-value">
              {guestCount} {guestCount === 1 ? 'guest' : 'guests'}
            </span>
          </div>
          <ChevronDown
            size={20}
            className={`booking-card__chevron ${showGuestDropdown ? 'booking-card__chevron--open' : ''}`}
          />
        </button>

        {showGuestDropdown && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#fff',
              border: '1px solid var(--border-color)',
              borderRadius: '0 0 var(--border-radius-sm) var(--border-radius-sm)',
              boxShadow: 'var(--shadow-card)',
              padding: '16px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>Guests</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Maximum {maxGuests} guests
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                type="button"
                onClick={() => handleGuestChange(-1)}
                disabled={guestCount <= 1}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-color)',
                  background: 'none',
                  cursor: guestCount <= 1 ? 'not-allowed' : 'pointer',
                  opacity: guestCount <= 1 ? 0.4 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                }}
                aria-label="Decrease guests"
              >
                -
              </button>
              <span style={{ fontWeight: 600, minWidth: '16px', textAlign: 'center' }}>
                {guestCount}
              </span>
              <button
                type="button"
                onClick={() => handleGuestChange(1)}
                disabled={guestCount >= maxGuests}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-color)',
                  background: 'none',
                  cursor: guestCount >= maxGuests ? 'not-allowed' : 'pointer',
                  opacity: guestCount >= maxGuests ? 0.4 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                }}
                aria-label="Increase guests"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Cancellation */}
      <p className="booking-card__cancellation">
        {cancellation?.type || 'Free cancellation before 17 October'}
      </p>

      {/* Reserve Button */}
      <button className="booking-card__reserve" aria-label="Reserve this listing" type="button">
        Reserve
      </button>

      {/* Disclaimer */}
      <p className="booking-card__disclaimer">You won't be charged yet.</p>

      {/* Report */}
      <button className="booking-card__report" type="button">
        <Flag size={16} />
        <span>Report this listing</span>
      </button>
    </div>
  );
}
