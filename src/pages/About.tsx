import Layout from "@/components/Layout";
import ReservationForm from "@/components/ReservationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, Clock, Heart, Shield } from "lucide-react";

const About = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            About AppleTree Inn
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Your home away from home in the heart of Independence, Kansas
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Welcome to Independence's Premier Motel
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Located in the vibrant heart of downtown Independence, Kansas, AppleTree Inn has been 
                  providing exceptional hospitality and comfortable accommodations to travelers from near and far. 
                  Our prime location at 201 N 8th Street puts you within walking distance of the city's 
                  best attractions, dining, and entertainment.
                </p>
                <p>
                  We take pride in offering clean, comfortable rooms with modern amenities at competitive rates. 
                  Whether you're visiting for business, leisure, or just passing through, our friendly staff 
                  is committed to making your stay memorable and hassle-free.
                </p>
                <p>
                  From our convenient downtown location to our variety of room options, AppleTree Inn combines 
                  the personal touch of a boutique motel with the reliability and comfort you expect from 
                  quality accommodations.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/36919239-f09b-45af-9159-53489478f68c.png"
                  alt="AppleTree Inn Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Exceptional Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our friendly, knowledgeable staff is available 24/7 to ensure your stay 
                  exceeds expectations and feels like home.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl">Prime Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Downtown Independence puts everything at your fingertips - restaurants, 
                  entertainment, and attractions all within walking distance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Quality & Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clean, comfortable accommodations with modern amenities at competitive 
                  rates that provide exceptional value for your money.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pool & Amenities Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/b2640bd5-8c91-4d9d-9725-33f31d37fac7.png"
                  alt="Indoor Pool and Recreation Area"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Relax & Unwind
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our indoor pool and recreation area provides the perfect space to relax after a day 
                of exploring Independence. Featuring a beautiful pool with waterfall feature and 
                comfortable seating areas.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Indoor heated swimming pool</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Waterfall feature</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Comfortable seating and recreation area</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Climate controlled environment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Hotel Amenities & Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable and convenient stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Front Desk</h3>
              <p className="text-muted-foreground text-sm">Always available to assist you</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Parking</h3>
              <p className="text-muted-foreground text-sm">Complimentary parking for all guests</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📶</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Wi-Fi</h3>
              <p className="text-muted-foreground text-sm">High-speed internet throughout</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Clean & Safe</h3>
              <p className="text-muted-foreground text-sm">Enhanced cleaning protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Visit Us Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the AppleTree Inn difference in downtown Independence
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      201 N 8th St<br/>
                      Independence, KS 67301
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <span className="text-primary mr-2">📞</span>
                      Phone
                    </h3>
                    <a 
                      href="tel:620-331-5500" 
                      className="text-primary hover:text-accent transition-colors font-medium"
                    >
                      620-331-5500
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <span className="text-primary mr-2">✉️</span>
                      Email
                    </h3>
                    <a 
                      href="mailto:appletreeks2016@gmail.com" 
                      className="text-primary hover:text-accent transition-colors"
                    >
                      appletreeks2016@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <Button
                    variant="luxury"
                    size="lg"
                    onClick={scrollToReservation}
                    className="w-full"
                  >
                    Book Your Stay
                  </Button>
                  <a href="tel:620-331-5500">
                    <Button variant="outline" size="lg" className="w-full">
                      Call Us Now
                    </Button>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/2YLl1egaIdJDzlmDx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="lg" className="w-full">
                      <MapPin className="mr-2 h-5 w-5" />
                      View on Google Maps
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReservationForm />
        </div>
      </section>
    </Layout>
  );
};

export default About;