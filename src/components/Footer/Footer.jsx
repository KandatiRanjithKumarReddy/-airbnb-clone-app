import './Footer.css';
import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        {/* Link Sections */}
        <div className="footer__sections">
          <div className="footer__section">
            <h4 className="footer__section-title">Support</h4>
            <ul className="footer__links">
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">AirCover</a></li>
              <li><a href="#">Anti-discrimination</a></li>
              <li><a href="#">Disability support</a></li>
              <li><a href="#">Cancellation options</a></li>
              <li><a href="#">Report neighbourhood concern</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">Hosting</h4>
            <ul className="footer__links">
              <li><a href="#">Airbnb your home</a></li>
              <li><a href="#">AirCover for Hosts</a></li>
              <li><a href="#">Hosting resources</a></li>
              <li><a href="#">Community forum</a></li>
              <li><a href="#">Hosting responsibly</a></li>
              <li><a href="#">Join a free Hosting class</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">Airbnb</h4>
            <ul className="footer__links">
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">New features</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer__divider" />

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <span>© 2025 Airbnb, Inc.</span>
            <span className="footer__dot">·</span>
            <a href="#">Privacy</a>
            <span className="footer__dot">·</span>
            <a href="#">Terms</a>
            <span className="footer__dot">·</span>
            <a href="#">Sitemap</a>
            <span className="footer__dot">·</span>
            <a href="#">Company details</a>
          </div>
          <div className="footer__bottom-right">
            <button className="footer__lang">
              <Globe size={16} />
              <span>English (IN)</span>
            </button>
            <span className="footer__currency">₹ INR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
