import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">🍎</span>
              </div>
              <span className="font-serif text-xl font-bold">AppleTree Inn</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Premium accommodations in downtown Independence, Kansas. 
              Everything you need within walking distance.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:620-331-5500"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone size={16} />
                <span>620-331-5500</span>
              </a>
              <a
                href="mailto:appletreeks2016@gmail.com"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                <span>appletreeks2016@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin size={16} />
                <span>201 N 8th St, Independence, KS 67301</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="/rooms" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Rooms & Rates
              </a>
              <a href="/location" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Location & Attractions
              </a>
              <a href="/about" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                About Us
              </a>
              <a href="/contact" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Ready to Book?</h3>
            <p className="text-primary-foreground/80 text-sm">
              Reserve your stay at Independence's premier motel today.
            </p>
            <Button
              variant="gold"
              size="lg"
              onClick={scrollToReservation}
              className="w-full"
            >
              Book Your Stay
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 AppleTree Inn. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="https://maps.app.goo.gl/2YLl1egaIdJDzlmDx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;