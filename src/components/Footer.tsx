import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-trust rounded-lg flex items-center justify-center">
                <span className="text-trust-foreground font-bold">H</span>
              </div>
              <span className="text-xl font-bold">Hostworthy</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Professional property management with guaranteed rent and expert care for Sunshine Coast landlords.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/landlords" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  For Landlords
                </Link>
              </li>
              <li>
                <Link to="/letting-agents" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Letting Agents
                </Link>
              </li>
              <li>
                <Link to="/for-guests" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  For Guests
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Property Leasing</li>
              <li>Airbnb Management</li>
              <li>Guest Screening</li>
              <li>Property Maintenance</li>
              <li>Guaranteed Rent</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-trust" />
                <span className="text-primary-foreground/80">Sunshine Coast, QLD</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-trust" />
                <span className="text-primary-foreground/80">+61 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-trust" />
                <span className="text-primary-foreground/80">hello@hostworthy.com.au</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Hostworthy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;