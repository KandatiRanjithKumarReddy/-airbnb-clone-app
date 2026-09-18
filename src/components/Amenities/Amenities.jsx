import './Amenities.css';
import {
  Wifi, Tv, UtensilsCrossed, Car, Snowflake, Waves,
  Shirt, PawPrint, Wind, Flame
} from 'lucide-react';

const iconMap = {
  wifi: Wifi,
  tv: Tv,
  utensils: UtensilsCrossed,
  car: Car,
  snowflake: Snowflake,
  waves: Waves,
  shirt: Shirt,
  'paw-print': PawPrint,
  wind: Wind,
  flame: Flame,
};

export default function Amenities({ amenities }) {
  return (
    <section className="amenities" id="amenities-section">
      <h2 className="section-title">What this place offers</h2>
      <div className="amenities__grid">
        {amenities.map((amenity, index) => {
          const IconComponent = iconMap[amenity.icon];
          return (
            <div
              key={index}
              className={`amenities__item ${!amenity.available ? 'amenities__item--unavailable' : ''}`}
            >
              <span className="amenities__icon">
                {IconComponent && <IconComponent size={24} />}
              </span>
              <span className={`amenities__name ${!amenity.available ? 'amenities__name--strikethrough' : ''}`}>
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
      <button className="amenities__show-all">
        Show all {amenities.length} amenities
      </button>
    </section>
  );
}
