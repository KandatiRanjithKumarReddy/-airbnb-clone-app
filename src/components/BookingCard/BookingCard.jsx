import { useState } from 'react';
import './BookingCard.css';
import { ChevronDown, Flag, Tag } from 'lucide-react';

export default function BookingCard({ price, dates, guests, rating, reviewCount, cancellation }) {
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

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
        <button className="booking-card__promo-claim">Claim</button>
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

      {/* Guests */}
      <button
        className="booking-card__guests"
        onClick={() => setShowGuestDropdown(!showGuestDropdown)}
        aria-expanded={showGuestDropdown}
        aria-label="Select number of guests"
      >
        <div>
          <label className="booking-card__date-label">GUESTS</label>
          <span className="booking-card__guests-value">{guests} guests</span>
        </div>
        <ChevronDown size={20} className={`booking-card__chevron ${showGuestDropdown ? 'booking-card__chevron--open' : ''}`} />
      </button>

      {/* Cancellation */}
      <p className="booking-card__cancellation">
        Free cancellation before <strong>17 October</strong>
      </p>

      {/* Reserve Button */}
      <button className="booking-card__reserve" aria-label="Reserve this listing">
        Reserve
      </button>

      {/* Disclaimer */}
      <p className="booking-card__disclaimer">You won't be charged yet.</p>

      {/* Report */}
      <button className="booking-card__report">
        <Flag size={16} />
        <span>Report this listing</span>
      </button>
    </div>
  );
}
