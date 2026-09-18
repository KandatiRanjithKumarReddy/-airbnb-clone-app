import { useEffect, useRef, useCallback } from 'react';
import './Lightbox.css';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ photos, currentIndex, onClose, onPrev, onNext, isOpen }) {
  const closeRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          onPrev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          onNext();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        default:
          break;
      }
    },
    [onPrev, onNext, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeRef.current?.focus(), 100);
    }
    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !photos[currentIndex]) return null;

  const photo = photos[currentIndex];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${currentIndex + 1} of ${photos.length}`}
    >
      {/* Header */}
      <div className="lightbox__header">
        <button
          className="lightbox__close"
          onClick={onClose}
          ref={closeRef}
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>
        <div className="lightbox__counter">
          {currentIndex + 1} / {photos.length}
        </div>
        <div style={{ width: 36 }}></div>
      </div>

      {/* Photo Container */}
      <div className="lightbox__body">
        {/* Previous button */}
        {currentIndex > 0 && (
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={onPrev}
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Image */}
        <div className="lightbox__image-container">
          <img
            key={photo.id}
            className="lightbox__image"
            src={photo.url}
            alt={photo.alt}
          />
        </div>

        {/* Next button */}
        {currentIndex < photos.length - 1 && (
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={onNext}
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
