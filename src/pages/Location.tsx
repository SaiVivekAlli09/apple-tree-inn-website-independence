import Layout from "@/components/Layout";
import ReservationForm from "@/components/ReservationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getNearbyAttractions } from "@/data/rooms";
import { MapPin, Clock, Car, Utensils, Camera, TreePine } from "lucide-react";

const Location = () => {
  const attractions = getNearbyAttractions();

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
            Prime Downtown Location
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Located at 201 N 8th St in the heart of Independence, Kansas. 
            Everything you need is within walking distance.
          </p>
        </div>
      </section>

      {/* Address & Contact */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
                Find Us Here
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-muted-foreground">
                      201 N 8th St<br/>
                      Independence, KS 67301
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Front Desk Hours</h3>
                    <p className="text-muted-foreground">
                      24/7 - We're always here to help!
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Car className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Parking</h3>
                    <p className="text-muted-foreground">
                      Free parking available for all guests
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.app.goo.gl/2YLl1egaIdJDzlmDx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="luxury" size="lg">
                    <MapPin className="mr-2 h-5 w-5" />
                    View on Google Maps
                  </Button>
                </a>
                <a href="tel:620-331-5500">
                  <Button variant="outline" size="lg">
                    Call: 620-331-5500
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AppleTree Inn Exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Everything Within Walking Distance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the convenience of staying in downtown Independence with attractions, 
              dining, and entertainment just steps from your door
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{attraction.name}</CardTitle>
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {attraction.distance}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Dining & Entertainment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Satisfy your cravings with nearby restaurants and enjoy entertainment options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Utensils className="h-6 w-6 text-primary" />
                  <span>Restaurants (Within 0.2 miles)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Taco Bell - Quick Mexican favorites</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>McDonald's - Classic fast food</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Subway - Fresh sandwiches</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Braum's - Ice cream & burgers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Arby's - Roast beef specialists</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Camera className="h-6 w-6 text-primary" />
                  <span>Attractions & Entertainment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Independence Cinemas - Movies across the street</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Science & Technology Center - Interactive exhibits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Museum of Independence - Local history</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Riverside Park - Beautiful walks & picnics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Ralph Mitchell Zoo - Family-friendly fun</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Experience Downtown Convenience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book your stay at AppleTree Inn and enjoy the best of Independence right at your doorstep
            </p>
          </div>
          
          <ReservationForm />
        </div>
      </section>
    </Layout>
  );
};

export default Location;