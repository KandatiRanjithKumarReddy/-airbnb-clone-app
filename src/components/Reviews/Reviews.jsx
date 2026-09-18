import { useState } from 'react';
import './Reviews.css';
import { Star } from 'lucide-react';

export default function Reviews({ reviews, reviewCategories, rating, reviewCount }) {
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReview = (id) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="reviews" id="reviews-section">
      <hr className="divider" />

      {/* Rating Display */}
      <div className="reviews__rating-display">
        <div className="reviews__rating-icon">🌿</div>
        <div className="reviews__rating-number">{rating}</div>
        <div className="reviews__rating-icon reviews__rating-icon--right">🌿</div>
      </div>

      <div className="reviews__guest-fav">
        <h3 className="reviews__guest-fav-title">Guest favourite</h3>
        <p className="reviews__guest-fav-desc">
          One of the most loved homes on Airbnb based on ratings, reviews, and reliability
        </p>
      </div>

      {/* Category Ratings */}
      <div className="reviews__categories">
        {reviewCategories.map((category, index) => (
          <div key={index} className="reviews__category">
            <span className="reviews__category-name">{category.name}</span>
            <div className="reviews__category-bar-wrapper">
              <div className="reviews__category-bar">
                <div
                  className="reviews__category-bar-fill"
                  style={{ width: `${(category.rating / 5) * 100}%` }}
                ></div>
              </div>
              <span className="reviews__category-value">{category.rating}</span>
            </div>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* Review Cards */}
      <div className="reviews__grid">
        {reviews.map((review) => {
          const isExpanded = expandedReviews[review.id];
          const shouldTruncate = review.text.length > 150;
          const displayText = shouldTruncate && !isExpanded
            ? review.text.slice(0, 150) + '...'
            : review.text;

          return (
            <div key={review.id} className="reviews__card">
              <div className="reviews__card-header">
                <div className="reviews__card-avatar">
                  {review.avatar ? (
                    <img src={review.avatar} alt={review.name} />
                  ) : (
                    <span className="reviews__card-avatar-initial">
                      {review.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="reviews__card-name">{review.name}</p>
                  <p className="reviews__card-meta">{review.yearsOnAirbnb}</p>
                </div>
              </div>
              <div className="reviews__card-rating-date">
                <div className="reviews__card-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      fill={i < review.rating ? '#000' : 'none'}
                      color="#000"
                    />
                  ))}
                </div>
                <span className="reviews__card-dot">·</span>
                <span className="reviews__card-date">{review.date}</span>
              </div>
              <p className="reviews__card-text">{displayText}</p>
              {shouldTruncate && (
                <button
                  className="reviews__card-more"
                  onClick={() => toggleReview(review.id)}
                >
                  {isExpanded ? 'Show less' : 'Show more'} {isExpanded ? '˄' : '›'}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <button className="reviews__show-all">
        Show all {reviewCount} reviews
      </button>
    </section>
  );
}
