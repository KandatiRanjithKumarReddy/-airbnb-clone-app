import './ThingsToKnow.css';

export default function ThingsToKnow({ houseRules, safety, cancellation }) {
  return (
    <section className="things-to-know">
      <hr className="divider" />
      <h2 className="section-title">Things to know</h2>
      <div className="things-to-know__grid">
        {/* House Rules */}
        <div className="things-to-know__column">
          <h3 className="things-to-know__heading">House rules</h3>
          <ul className="things-to-know__list">
            {houseRules.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
          <button className="things-to-know__more">Show more ›</button>
        </div>

        {/* Safety */}
        <div className="things-to-know__column">
          <h3 className="things-to-know__heading">Safety & property</h3>
          <ul className="things-to-know__list">
            {safety.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <button className="things-to-know__more">Show more ›</button>
        </div>

        {/* Cancellation */}
        <div className="things-to-know__column">
          <h3 className="things-to-know__heading">Cancellation policy</h3>
          <ul className="things-to-know__list">
            <li>{cancellation.type}</li>
            <li className="things-to-know__list-desc">{cancellation.description}</li>
          </ul>
          <button className="things-to-know__more">Show more ›</button>
        </div>
      </div>
    </section>
  );
}
