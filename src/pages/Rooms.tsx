import Layout from "@/components/Layout";
import ReservationForm from "@/components/ReservationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { rooms } from "@/data/rooms";
import { Wifi, Tv, Snowflake, Coffee, Users, Car } from "lucide-react";

const Rooms = () => {
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
            Rooms & Rates
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Choose from our variety of comfortable accommodations, each designed to provide 
            exceptional comfort and value in downtown Independence
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground font-bold text-lg px-4 py-2">
                      {room.price} plus taxes
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{room.name}</CardTitle>
                  <CardDescription className="text-lg">
                    {room.bedType} • Up to {room.maxGuests} guests
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {room.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Room Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-sm">
                      <Wifi className="mr-1 h-4 w-4" />
                      Free Wi-Fi
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      <Tv className="mr-1 h-4 w-4" />
                      Flat-screen TV
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      <Snowflake className="mr-1 h-4 w-4" />
                      A/C & Heating
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      <Coffee className="mr-1 h-4 w-4" />
                      Coffee Maker
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      <Car className="mr-1 h-4 w-4" />
                      Free Parking
                    </Badge>
                  </div>
                  
                  <Button 
                    variant="luxury" 
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
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
            Pricing Information
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-4 text-left">
              <p className="text-lg">
                <strong>All rates are per night and subject to applicable taxes.</strong>
              </p>
              <p className="text-muted-foreground">
                • Check-in time: 3:00 PM<br/>
                • Check-out time: 11:00 AM<br/>
                • Rates may vary by season and availability<br/>
                • Group discounts available for extended stays<br/>
                • Free parking for all guests
              </p>
              <p className="text-sm text-muted-foreground">
                For special rates, group bookings, or extended stays, please call us directly at 
                <a href="tel:620-331-5500" className="text-primary hover:text-accent ml-1">
                  620-331-5500
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Reserve Your Room?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete the reservation form below and we'll contact you to confirm your booking
            </p>
          </div>
          
          <ReservationForm />
        </div>
      </section>
    </Layout>
  );
};

export default Rooms;