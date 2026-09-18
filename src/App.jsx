import { useState, useCallback } from 'react';
import './App.css';
import { listingData } from './data/listingData';
import Header from './components/Header/Header';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import ListingInfo from './components/ListingInfo/ListingInfo';
import BookingCard from './components/BookingCard/BookingCard';
import Amenities from './components/Amenities/Amenities';
import Calendar from './components/Calendar/Calendar';
import Reviews from './components/Reviews/Reviews';
import Map from './components/Map/Map';
import HostProfile from './components/HostProfile/HostProfile';
import ThingsToKnow from './components/ThingsToKnow/ThingsToKnow';
import Footer from './components/Footer/Footer';
import PhotoTour from './components/PhotoTour/PhotoTour';
import Lightbox from './components/Lightbox/Lightbox';

function App() {
  const [showPhotoTour, setShowPhotoTour] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleShowAllPhotos = useCallback((startIndex = 0) => {
    setCurrentPhotoIndex(startIndex);
    setShowPhotoTour(true);
  }, []);

  const handlePhotoClick = useCallback((index) => {
    setCurrentPhotoIndex(index);
    setShowLightbox(true);
  }, []);

  const handleClosePhotoTour = useCallback(() => {
    setShowPhotoTour(false);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setShowLightbox(false);
  }, []);

  const handlePrevPhoto = useCallback(() => {
    setCurrentPhotoIndex((prev) =>
      prev > 0 ? prev - 1 : prev
    );
  }, []);

  const handleNextPhoto = useCallback(() => {
    setCurrentPhotoIndex((prev) =>
      prev < listingData.photos.length - 1 ? prev + 1 : prev
    );
  }, []);

  const scrollToBooking = useCallback(() => {
    const el = document.getElementById('booking-card');
    if (el) {
      const offset = 96;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="app">
      <a href="#main-content" className="sr-only">Skip to main content</a>

      <Header onReserveClick={scrollToBooking} />

      <main id="main-content" className="main">
        {/* Title + Share/Save (above gallery) */}
        <div className="container title-section">
          <h1 className="page-title">{listingData.title}</h1>
          <div className="title-actions">
            <button className="title-action-btn" aria-label="Share this listing">
              <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M27 18v9a1 1 0 01-1 1H6a1 1 0 01-1-1v-9M16 3v19M8 11l8-8 8 8"/>
              </svg>
              <span>Share</span>
            </button>
            <button className="title-action-btn" aria-label="Save this listing">
              <svg viewBox="0 0 32 32" width="16" height="16" fill="#FF385C" stroke="#FF385C" strokeWidth="2">
                <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 00-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 00-9.9 0A6.98 6.98 0 002 11c0 7 7 12.27 14 17z"/>
              </svg>
              <span>Saved</span>
            </button>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="container">
          <PhotoGallery
            photos={listingData.photos}
            onShowAllPhotos={handleShowAllPhotos}
          />
        </div>

        {/* Two Column Layout: Content + Booking Card */}
        <div className="container">
          <div className="content-layout">
            {/* Left Column */}
            <div className="content-layout__left">
              <ListingInfo listing={listingData} />

              <hr className="divider" />

              <Amenities amenities={listingData.amenities} />

              <Calendar
                checkIn={listingData.dates.checkInDate}
                checkOut={listingData.dates.checkOutDate}
              />
            </div>

            {/* Right Column - Booking Card */}
            <div className="content-layout__right">
              <BookingCard
                price={listingData.price}
                dates={listingData.dates}
                guests={listingData.guests}
                rating={listingData.rating}
                reviewCount={listingData.reviewCount}
                cancellation={listingData.cancellation}
              />
            </div>
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="container">
          <Reviews
            reviews={listingData.reviews}
            reviewCategories={listingData.reviewCategories}
            rating={listingData.rating}
            reviewCount={listingData.reviewCount}
          />

          <Map
            map={listingData.map}
            location={listingData.locationFull}
          />

          <HostProfile
            host={listingData.host}
            rating={listingData.rating}
            reviewCount={listingData.reviewCount}
          />

          <ThingsToKnow
            houseRules={listingData.houseRules}
            safety={listingData.safety}
            cancellation={listingData.cancellation}
          />
        </div>
      </main>

      <Footer />

      {/* Overlays */}
      <PhotoTour
        photos={listingData.photos}
        isOpen={showPhotoTour}
        onClose={handleClosePhotoTour}
        onPhotoClick={handlePhotoClick}
      />

      <Lightbox
        photos={listingData.photos}
        currentIndex={currentPhotoIndex}
        isOpen={showLightbox}
        onClose={handleCloseLightbox}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />
    </div>
  );
}

export default App;
