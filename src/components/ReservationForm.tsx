import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users, CreditCard, Mail, Phone, User } from "lucide-react";

const ReservationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    guestName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    numberOfGuests: "",
    creditCardNumber: "",
    expiryDate: "",
    cvv: "",
    specialRequests: "",
  });

  const roomTypes = [
    "Standard King Room ($65+ plus taxes)",
    "Standard 2 Queen Beds Room ($75+ plus taxes)",
    "Regular Suites King Room ($110+ plus taxes)",
    "Executive Suites King Room ($130+ plus taxes)",
    "Executive Suites Double Room ($140+ plus taxes)",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    const requiredFields = ['guestName', 'email', 'phone', 'checkIn', 'checkOut', 'roomType', 'numberOfGuests', 'creditCardNumber', 'expiryDate', 'cvv'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields to submit your reservation.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission - In a real app, this would send to your backend
    try {
      // Create email body
      const emailBody = `
        New Reservation Request from AppleTree Inn Website
        
        Guest Information:
        - Name: ${formData.guestName}
        - Email: ${formData.email}
        - Phone: ${formData.phone}
        
        Reservation Details:
        - Check-in Date: ${formData.checkIn}
        - Check-out Date: ${formData.checkOut}
        - Room Type: ${formData.roomType}
        - Number of Guests: ${formData.numberOfGuests}
        
        Payment Information (for room hold):
        - Credit Card: **** **** **** ${formData.creditCardNumber.slice(-4)}
        - Expiry: ${formData.expiryDate}
        - CVV: ***
        
        Special Requests:
        ${formData.specialRequests || 'None'}
        
        Note: This reservation request requires confirmation. Please contact the guest to confirm availability and finalize the booking.
      `;

      // In a real implementation, you would send this to your backend
      // For demo purposes, we'll show a success message
      console.log("Reservation data:", { ...formData, emailBody });

      toast({
        title: "Reservation Request Submitted!",
        description: "We will call or email you regarding room confirmation within 24 hours.",
      });

      // Reset form
      setFormData({
        guestName: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        roomType: "",
        numberOfGuests: "",
        creditCardNumber: "",
        expiryDate: "",
        cvv: "",
        specialRequests: "",
      });

    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your reservation. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card id="reservation-form" className="max-w-4xl mx-auto shadow-xl border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary to-accent text-white rounded-t-lg">
        <CardTitle className="text-2xl font-serif flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          Book Your Stay at AppleTree Inn
        </CardTitle>
        <CardDescription className="text-primary-foreground/90">
          We will call or email you regarding room confirmation
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Guest Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="guestName" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Guest Name *
              </Label>
              <Input
                id="guestName"
                value={formData.guestName}
                onChange={(e) => handleInputChange('guestName', e.target.value)}
                placeholder="Enter full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(620) 123-4567"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="numberOfGuests" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Number of Guests *
              </Label>
              <Select value={formData.numberOfGuests} onValueChange={(value) => handleInputChange('numberOfGuests', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkIn">Check-in Date *</Label>
              <Input
                id="checkIn"
                type="date"
                value={formData.checkIn}
                onChange={(e) => handleInputChange('checkIn', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="checkOut">Check-out Date *</Label>
              <Input
                id="checkOut"
                type="date"
                value={formData.checkOut}
                onChange={(e) => handleInputChange('checkOut', e.target.value)}
                min={formData.checkIn || new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>

          {/* Room Selection */}
          <div className="space-y-2">
            <Label htmlFor="roomType">Room Type Preference *</Label>
            <Select value={formData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your preferred room" />
              </SelectTrigger>
              <SelectContent>
                {roomTypes.map((room) => (
                  <SelectItem key={room} value={room}>
                    {room}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Credit Card Information */}
          <div className="bg-muted/50 p-4 rounded-lg space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              <span>We do not charge until you arrive - we only need this to hold the room</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="creditCardNumber">Credit Card Number *</Label>
                <Input
                  id="creditCardNumber"
                  value={formData.creditCardNumber}
                  onChange={(e) => handleInputChange('creditCardNumber', e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date (MM/YY) *</Label>
                <Input
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                  placeholder="MM/YY"
                  maxLength={5}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cvv">Security Code (CVV) *</Label>
                <Input
                  id="cvv"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                  placeholder="123"
                  maxLength={4}
                  required
                />
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
            <Textarea
              id="specialRequests"
              value={formData.specialRequests}
              onChange={(e) => handleInputChange('specialRequests', e.target.value)}
              placeholder="Any special accommodations or requests..."
              rows={3}
            />
          </div>

          <Button
            type="submit"
            variant="reservation"
            size="xl"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Reservation Request"}
          </Button>
          
          <p className="text-sm text-muted-foreground text-center">
            By submitting this form, you agree to our terms and conditions. 
            We will contact you within 24 hours to confirm your reservation.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReservationForm;