import { useEffect, useRef } from 'react';
import './PhotoTour.css';
import { X } from 'lucide-react';
import { useScrollLock } from '../../hooks/useScrollLock';

export default function PhotoTour({ photos, onClose, onPhotoClick, isOpen }) {
  const closeRef = useRef(null);

  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="photo-tour"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      <div className="photo-tour__header">
        <button
          type="button"
          className="photo-tour__close"
          onClick={onClose}
          ref={closeRef}
          aria-label="Close photo tour"
        >
          <X size={20} />
        </button>
      </div>

      <div className="photo-tour__content">
        {/* Thumbnail strip */}
        <div className="photo-tour__thumbnails">
          {photos.map((photo, index) => (
            <button
              type="button"
              key={photo.id}
              className="photo-tour__thumb"
              onClick={() => onPhotoClick(index)}
              aria-label={`View photo ${index + 1}`}
            >
              <img src={photo.url} alt={photo.alt} />
            </button>
          ))}
        </div>

        {/* Photo list */}
        <div className="photo-tour__photos">
          {photos.map((photo, index) => {
            const isFirstOfRoom =
              index === 0 || photos[index].room !== photos[index - 1]?.room;

            return (
              <div key={photo.id} className="photo-tour__photo-section">
                {isFirstOfRoom && (
                  <div className="photo-tour__room-label">
                    <h3>{photo.room}</h3>
                    <p className="photo-tour__room-caption">{photo.caption}</p>
                  </div>
                )}
                <button
                  type="button"
                  className="photo-tour__photo-wrapper"
                  onClick={() => onPhotoClick(index)}
                  aria-label={`Open photo ${index + 1}: ${photo.alt}`}
                >
                  <img src={photo.url} alt={photo.alt} loading="lazy" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
