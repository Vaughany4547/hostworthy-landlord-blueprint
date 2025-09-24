import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    property: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-enquiry-email', {
        body: {
          type: 'contact',
          data: formData
        }
      });

      if (error) throw error;

      toast({
        title: "Thank you for your enquiry!",
        description: "We'll get back to you within 24 hours to discuss your property.",
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        property: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly on 0432 055 024.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Partner With Us?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-light">
              Let's discuss how Hostworthy can transform your property into a consistent income stream.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to learn more about guaranteed rent and professional property management? 
                  We'd love to discuss how Hostworthy can work for your property.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-trust/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-trust" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Phone</h3>
                    <p className="text-muted-foreground">0432 055 024</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-growth/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-growth" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-muted-foreground">hello@hostworthy.com.au</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Service Area</h3>
                    <p className="text-muted-foreground">Sunshine Coast & Brisbane</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-trust/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-trust" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Response Time</h3>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Book Your Free Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          placeholder="Your first name" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          placeholder="Your last name" 
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com" 
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="0400 000 000" 
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="property">Property Location *</Label>
                      <Input 
                        id="property" 
                        value={formData.property}
                        onChange={(e) => setFormData({...formData, property: e.target.value})}
                        placeholder="Suburb, State" 
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your property</Label>
                      <Textarea 
                        id="message" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Property type, number of bedrooms, any specific questions..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full btn-trust" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Book Free Consultation"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      No obligation. We'll discuss your property and answer all your questions.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;