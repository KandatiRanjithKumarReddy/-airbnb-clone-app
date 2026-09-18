import './Map.css';

export default function Map({ map, location }) {
  return (
    <section className="map-section" id="location-section">
      <hr className="divider" />
      <h2 className="section-title">Where you'll be</h2>
      <div className="map-section__container">
        <div className="map-section__map">
          <iframe
            title="Property location map"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${map.lng - 0.02}%2C${map.lat - 0.015}%2C${map.lng + 0.02}%2C${map.lat + 0.015}&layer=mapnik&marker=${map.lat}%2C${map.lng}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="map-section__location">
        <h3 className="map-section__location-name">{location}</h3>
        <p className="map-section__location-desc">{map.description}</p>
        <button className="map-section__show-more">
          Show more ›
        </button>
      </div>
    </section>
  );
}
