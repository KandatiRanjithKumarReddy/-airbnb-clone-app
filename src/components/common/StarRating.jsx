import { Star } from 'lucide-react';

export default function StarRating({ rating = 5, totalStars = 5, size = 10, color = '#000', className = '' }) {
  return (
    <div className={`star-rating ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
      {Array.from({ length: totalStars }, (_, i) => {
        const isFilled = i < Math.floor(rating);
        return (
          <Star
            key={i}
            size={size}
            fill={isFilled ? color : 'none'}
            color={color}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}
