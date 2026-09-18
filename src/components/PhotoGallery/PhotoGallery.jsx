import './PhotoGallery.css';
import { Grid2x2 } from 'lucide-react';

export default function PhotoGallery({ photos, onShowAllPhotos }) {
  const heroPhotos = photos.slice(0, 5);

  return (
    <section id="photo-gallery" className="photo-gallery" aria-label="Property photos">
      <div className="photo-gallery__grid">
        {heroPhotos.map((photo, index) => (
          <button
            key={photo.id}
            className={`photo-gallery__item photo-gallery__item--${index + 1}`}
            onClick={() => onShowAllPhotos(index)}
            aria-label={`View photo ${index + 1}: ${photo.alt}`}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="photo-gallery__overlay" aria-hidden="true"></div>
          </button>
        ))}

        {/* Show all photos button */}
        <button
          className="photo-gallery__show-all"
          onClick={() => onShowAllPhotos(0)}
          aria-label="Show all photos"
        >
          <Grid2x2 size={16} />
          <span>Show all photos</span>
        </button>
      </div>
    </section>
  );
}
