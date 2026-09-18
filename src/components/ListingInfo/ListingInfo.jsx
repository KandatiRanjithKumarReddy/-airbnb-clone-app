import { useState } from 'react';
import './ListingInfo.css';
import { Tent, Snowflake, KeyRound } from 'lucide-react';
import Avatar from '../common/Avatar';
import StarRating from '../common/StarRating';

const iconMap = {
  tent: Tent,
  snowflake: Snowflake,
  key: KeyRound,
};

export default function ListingInfo({ listing }) {
  const [showMore, setShowMore] = useState(false);

  const descriptionPreview = listing.description.slice(0, 280);

  return (
    <div className="listing-info">
      {/* Property Type & Specs */}
      <div className="listing-info__type">
        <h2 className="listing-info__type-title">
          {listing.type} in {listing.location}
        </h2>
        <p className="listing-info__specs">
          {listing.specs.guests} guests · {listing.specs.bedrooms} bedroom · {listing.specs.beds} bed · {listing.specs.bathrooms} bathroom
        </p>
      </div>

      {/* Guest Favourite Badge */}
      {listing.isGuestFavourite && (
        <div className="listing-info__badge">
          <div className="listing-info__badge-left">
            <div className="listing-info__badge-icon">
              <span className="listing-info__badge-sparkle">✧</span>
              <span className="listing-info__badge-text">Guest<br />favourite</span>
              <span className="listing-info__badge-sparkle">✧</span>
            </div>
            <p className="listing-info__badge-desc">
              One of the most loved homes on Airbnb, according to guests
            </p>
          </div>
          <div className="listing-info__badge-right">
            <div className="listing-info__badge-rating">
              <span className="listing-info__badge-rating-number">{listing.rating}</span>
              <div className="listing-info__badge-stars">
                <StarRating rating={listing.rating} size={10} />
              </div>
            </div>
            <div className="listing-info__badge-divider"></div>
            <div className="listing-info__badge-reviews">
              <span className="listing-info__badge-review-count">{listing.reviewCount}</span>
              <span className="listing-info__badge-review-label">Reviews</span>
            </div>
          </div>
        </div>
      )}

      <hr className="divider" />

      {/* Host */}
      <div className="listing-info__host">
        <div className="listing-info__host-avatar">
          <Avatar
            src={listing.host.avatar}
            alt={listing.host.name}
            initial={listing.host.name.charAt(0)}
          />
        </div>
        <div>
          <p className="listing-info__host-name">Hosted by {listing.host.name}</p>
          <p className="listing-info__host-years">{listing.host.yearsHosting} years hosting</p>
        </div>
      </div>

      <hr className="divider" />

      {/* Highlights */}
      <div className="listing-info__highlights">
        {listing.highlights.map((highlight, index) => {
          const IconComponent = iconMap[highlight.icon];
          return (
            <div key={index} className="listing-info__highlight">
              <div className="listing-info__highlight-icon">
                {IconComponent && <IconComponent size={24} />}
              </div>
              <div>
                <p className="listing-info__highlight-title">{highlight.title}</p>
                <p className="listing-info__highlight-desc">{highlight.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <hr className="divider" />

      {/* Translation Notice */}
      <div className="listing-info__translation">
        <p>
          Some info has been automatically translated.{' '}
          <button className="underline-link">Show original</button>
        </p>
      </div>

      {/* Description */}
      <div className="listing-info__description">
        <p className="listing-info__description-text">
          {showMore ? listing.description : `${descriptionPreview}...`}
        </p>
        <button
          className="listing-info__show-more"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less' : 'Show more'} {showMore ? '˄' : '›'}
        </button>
      </div>

      <hr className="divider" />

      {/* Where You'll Sleep */}
      <div className="listing-info__sleep">
        <h2 className="section-title">Where you'll sleep</h2>
        <div className="listing-info__sleep-grid">
          {listing.sleepingArrangements.map((room, index) => (
            <div key={index} className="listing-info__sleep-card">
              <div className="listing-info__sleep-image">
                <img src={room.image} alt={room.name} loading="lazy" />
              </div>
              <h3 className="listing-info__sleep-name">{room.name}</h3>
              <p className="listing-info__sleep-details">{room.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
