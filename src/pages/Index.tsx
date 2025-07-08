import Layout from "@/components/Layout";
import ReservationForm from "@/components/ReservationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { rooms } from "@/data/rooms";
import { MapPin, Phone, Star, Wifi, Car, Coffee, Tv, Snowflake } from "lucide-react";

const Index = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredRooms = rooms.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block text-accent">AppleTree Inn</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Premium accommodations in downtown Independence, Kansas. 
            Everything you need within walking distance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="gold"
              size="xl"
              onClick={scrollToReservation}
              className="text-lg font-semibold px-8 py-4"
            >
              Book Your Stay Now
            </Button>
            <a href="tel:620-331-5500">
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Call: 620-331-5500
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              <MapPin className="mr-1 h-4 w-4" />
              Downtown Location
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              <Star className="mr-1 h-4 w-4" />
              Premium Amenities
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              Starting at $65/night
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AppleTree Inn?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of comfort, convenience, and value in the heart of Independence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Prime Downtown Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Walk to restaurants, cinema, museums, and attractions. Everything within 0.3 miles!
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl">Competitive Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Premium accommodations starting at just $65+ per night. Exceptional value for families and business travelers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Coffee className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Modern Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Free Wi-Fi, flat-screen TVs, coffee makers, and all the comforts you need for a perfect stay.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Featured Accommodations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our variety of comfortable rooms and suites, each designed for your perfect stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                  <img
                    src={`https://images.unsplash.com/${room.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold">
                      {room.price} plus taxes
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{room.name}</CardTitle>
                  <CardDescription>{room.bedType} • Up to {room.maxGuests} guests</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      <Wifi className="mr-1 h-3 w-3" />
                      Free Wi-Fi
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Tv className="mr-1 h-3 w-3" />
                      Flat-screen TV
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Snowflake className="mr-1 h-3 w-3" />
                      A/C & Heating
                    </Badge>
                  </div>
                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={scrollToReservation}
                    className="w-full"
                  >
                    Book This Room
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <a href="/rooms">
              <Button variant="outline" size="lg">
                View All Rooms & Rates
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Everything Within Walking Distance
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Located in the heart of downtown Independence, AppleTree Inn puts you steps away from 
                the city's best dining, entertainment, and attractions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">🎬</span>
                  </div>
                  <span><strong>Independence Cinemas:</strong> Under 300 feet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-semibold text-sm">🍔</span>
                  </div>
                  <span><strong>Restaurants:</strong> Taco Bell, McDonald's, Subway, Braum's, Arby's within 0.2 miles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">🔬</span>
                  </div>
                  <span><strong>Science Center:</strong> Less than 0.2 miles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-semibold text-sm">🏛️</span>
                  </div>
                  <span><strong>Museum of Independence:</strong> Less than 0.3 miles</span>
                </div>
              </div>

              <a href="https://maps.app.goo.gl/2YLl1egaIdJDzlmDx" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  View on Google Maps
                </Button>
              </a>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Downtown Independence"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Book Your Stay?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete the form below and we'll contact you within 24 hours to confirm your reservation
            </p>
          </div>
          
          <ReservationForm />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
