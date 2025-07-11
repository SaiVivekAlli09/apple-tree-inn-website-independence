import Layout from "@/components/Layout";
import ReservationForm from "@/components/ReservationForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

  const featuredRooms = rooms; // Display all rooms

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/b1e09231-70a1-490e-ab3d-9eea6eb9ce1b.png')] bg-cover bg-center"></div>
        
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                  <img
                    src={room.image}
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
            <Link to="/rooms">
              <Button variant="outline" size="lg">
                View All Rooms & Rates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hotel Amenities */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hotel Amenities & Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy our premium facilities and services designed for your comfort and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Breakfast */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                <img
                  src="/lovable-uploads/a319543f-6d0f-4c77-bf7d-7afdf510b7f3.png"
                  alt="Breakfast Area"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Complimentary Breakfast</CardTitle>
                <CardDescription>Daily 6:30 AM - 9:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start your day right with our complimentary breakfast served in our cozy dining area. 
                  Fresh coffee, pastries, and hearty options available.
                </p>
              </CardContent>
            </Card>

            {/* Indoor Pool */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                <img
                  src="/lovable-uploads/4a65cc24-75d0-447c-9233-e88af67f8f24.png"
                  alt="Indoor Pool"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Indoor Pool & Recreation</CardTitle>
                <CardDescription>Open Daily</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Relax and unwind in our beautiful indoor pool area featuring comfortable seating, 
                  natural lighting, and a peaceful atmosphere.
                </p>
              </CardContent>
            </Card>

            {/* Reception */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                <img
                  src="/lovable-uploads/4f5dbaf2-46b5-4d8a-b499-261587deb8e3.png"
                  alt="Reception Area"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">24-Hour Reception</CardTitle>
                <CardDescription>Always Here to Help</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our friendly staff is available 24/7 at our modern reception desk to assist 
                  with check-in, local recommendations, and any special requests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Book Your Stay?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete the form below and we'll contact you within 24 hours to confirm your reservation through phone call or email.
              By submitting this form, you agree to our terms and conditions. We will contact you within 12-24 hours to confirm your reservation by call or email, else you can directly call us on <a href="tel:620-331-5500" className="text-primary hover:underline font-semibold">(620) 331-5500</a> and for any cancellations you must inform 24 hours prior to your checkin date by 3pm before your checkin day.
            </p>
          </div>
          
          <ReservationForm />
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 bg-muted/30">
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
                  src="/lovable-uploads/36919239-f09b-45af-9159-53489478f68c.png"
                  alt="AppleTree Inn Exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
