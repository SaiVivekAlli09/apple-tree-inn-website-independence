import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields to submit your message.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Create email body
      const emailBody = `
        New Contact Form Submission from AppleTree Inn Website
        
        Contact Information:
        - Name: ${formData.name}
        - Email: ${formData.email}
        - Phone: ${formData.phone}
        
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
        
        Submitted at: ${new Date().toLocaleString()}
      `;

      // In a real implementation, you would send this to your backend
      console.log("Contact form data:", { ...formData, emailBody });

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Get in touch with AppleTree Inn. We're here to help make your stay perfect.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you have questions about our rooms, need help with a reservation, 
                  or want to learn more about local attractions, our friendly staff is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Phone</h3>
                        <a 
                          href="tel:620-331-5500" 
                          className="text-primary hover:text-accent transition-colors text-lg font-medium"
                        >
                          620-331-5500
                        </a>
                        <p className="text-muted-foreground text-sm mt-1">
                          Available 24/7 for reservations and assistance
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                        <a 
                          href="mailto:appletreeks2016@gmail.com" 
                          className="text-primary hover:text-accent transition-colors"
                        >
                          appletreeks2016@gmail.com
                        </a>
                        <p className="text-muted-foreground text-sm mt-1">
                          We typically respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Address</h3>
                        <p className="text-muted-foreground">
                          201 N 8th St<br/>
                          Independence, KS 67301
                        </p>
                        <a
                          href="https://maps.app.goo.gl/2YLl1egaIdJDzlmDx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors text-sm mt-2 inline-block"
                        >
                          View on Google Maps →
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Front Desk Hours</h3>
                        <p className="text-muted-foreground">
                          24/7 - We're always here for you!
                        </p>
                        <p className="text-muted-foreground text-sm mt-1">
                          Check-in: 3:00 PM | Check-out: 11:00 AM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-serif flex items-center gap-2">
                    <MessageSquare className="h-6 w-6" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    Fill out the form below and we'll get back to you soon
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(620) 123-4567"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What can we help you with?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="luxury"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      We'll respond to your message within 24 hours. 
                      For immediate assistance, please call us at 620-331-5500.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
            Need Immediate Assistance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:620-331-5500">
              <Button variant="luxury" size="lg" className="w-full">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
            <a href="mailto:appletreeks2016@gmail.com">
              <Button variant="outline" size="lg" className="w-full">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
            <a href="/#reservation-form">
              <Button variant="gold" size="lg" className="w-full">
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;