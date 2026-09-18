import './HostProfile.css';
import { Star, Shield, MessageCircle } from 'lucide-react';

export default function HostProfile({ host, rating, reviewCount }) {
  return (
    <section className="host-profile">
      <hr className="divider" />

      {/* Host Card */}
      <div className="host-profile__card">
        <div className="host-profile__card-left">
          <div className="host-profile__avatar">
            <img
              src="https://a0.muscache.com/im/pictures/user/User-524803978/original/f9acc197-59e5-47a8-a523-fa498188540e.jpeg"
              alt={host.name}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span style="color:white;font-size:24px;font-weight:700">M</span>';
              }}
            />
          </div>
          <div>
            <h3 className="host-profile__name">{host.name}</h3>
            {host.isSuperhost && (
              <p className="host-profile__superhost">
                <Shield size={14} />
                Superhost
              </p>
            )}
          </div>
        </div>

        <div className="host-profile__stats">
          <div className="host-profile__stat">
            <span className="host-profile__stat-value">{reviewCount}</span>
            <span className="host-profile__stat-label">Reviews</span>
          </div>
          <div className="host-profile__stat">
            <span className="host-profile__stat-value">{rating}</span>
            <span className="host-profile__stat-label">Rating</span>
            <div className="host-profile__stat-stars">
              <Star size={10} fill="#000" color="#000" />
            </div>
          </div>
          <div className="host-profile__stat">
            <span className="host-profile__stat-value">{host.yearsHosting}</span>
            <span className="host-profile__stat-label">Years hosting</span>
          </div>
        </div>
      </div>

      {/* Host Details */}
      <div className="host-profile__details">
        <p className="host-profile__about">{host.about}</p>

        <div className="host-profile__response">
          <p>Response rate: {host.responseRate}</p>
          <p>Response time: {host.responseTime}</p>
        </div>

        <button className="host-profile__message">
          <MessageCircle size={18} />
          Message Host
        </button>

        <div className="host-profile__disclaimer">
          <p>
            To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
          </p>
        </div>
      </div>
    </section>
  );
}
