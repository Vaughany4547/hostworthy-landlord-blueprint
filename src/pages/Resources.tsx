import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Download, 
  CheckCircle, 
  FileText, 
  Shield, 
  Users, 
  TrendingUp,
  ClipboardList,
  Home,
  Wrench
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Resources = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suburb: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-enquiry-email', {
        body: {
          type: 'resources',
          data: formData
        }
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your free report request has been sent. We'll email it to you shortly!",
      });
      
      setFormData({ name: "", email: "", suburb: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const reportSections = [
    "Common landlord pain points and how to avoid them",
    "How the Hostworthy model protects your investment", 
    "Real case study: $4,200/month guaranteed income",
    "5 key reasons property owners choose us",
    "Complete objection handling guide",
    "Template lease agreement with subletting approval"
  ];

  const resources = [
    {
      icon: ClipboardList,
      title: "Cleaning Checklist",
      description: "Our comprehensive 47-point cleaning and inspection checklist",
      type: "PDF Guide"
    },
    {
      icon: Home,
      title: "House Rules Template",
      description: "Professional guest rules that protect your property",
      type: "PDF Template"
    },
    {
      icon: Shield,
      title: "Noise Monitoring Policy",
      description: "How we ensure your neighbors stay happy",
      type: "Policy Document"
    },
    {
      icon: FileText,
      title: "Insurance & Protection",
      description: "Comprehensive coverage details and claim procedures",
      type: "Information Sheet"
    },
    {
      icon: Wrench,
      title: "Maintenance Plan",
      description: "Proactive property care and emergency response protocols",
      type: "Service Guide"
    },
    {
      icon: TrendingUp,
      title: "Market Reports",
      description: "AirDNA data and local market insights by suburb",
      type: "Market Analysis"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-trust py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Discover Why Landlords Are<br />
              <span className="text-trust">Choosing Hostworthy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our free guide reveals how we guarantee rent, protect your property, and remove all the usual headaches of leasing. Perfect for Sunshine Coast and Brisbane property owners.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnet Form */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="p-8 shadow-lg">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-primary flex items-center space-x-3">
                    <div className="w-10 h-10 bg-trust/10 rounded-full flex items-center justify-center">
                      <Download className="w-5 h-5 text-trust" />
                    </div>
                    <span>Get Your Free Landlord Report</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="suburb">Property Suburb (Optional)</Label>
                      <Input
                        id="suburb"
                        value={formData.suburb}
                        onChange={(e) => setFormData({...formData, suburb: e.target.value})}
                        className="mt-1"
                        placeholder="e.g. Mooloolaba, Caloundra"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full btn-trust mt-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Download the Free Report"}
                    </Button>
                  </form>
                  
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    No spam. Unsubscribe anytime. Your privacy is protected.
                  </p>
                </CardContent>
              </Card>

              {/* Report Preview */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">What's Inside The Report:</h3>
                  <div className="space-y-3">
                    {reportSections.map((section, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-growth mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{section}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-growth-light to-accent rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-3">Perfect For:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sunshine Coast property owners</li>
                    <li>• Brisbane metro landlords</li>
                    <li>• Investors seeking guaranteed returns</li>
                    <li>• Anyone tired of problem tenants</li>
                  </ul>
                </div>

                <div className="bg-trust-light rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-trust mb-2">15+ Pages</div>
                  <div className="text-sm text-muted-foreground">Of actionable insights and real examples</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Additional Resources</h2>
            <p className="text-lg text-muted-foreground">Transparent documents that build trust and demonstrate our professionalism</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-trust font-medium bg-trust/10 px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  
                  <div className="flex items-center text-trust text-sm font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    <span>Available to Partners</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Access all resources when you partner with Hostworthy
            </p>
            <Button size="lg" className="btn-trust">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-primary">Why Property Owners Trust Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-trust" />
                </div>
                <h3 className="font-semibold text-primary">Fully Insured</h3>
                <p className="text-sm text-muted-foreground">Comprehensive public liability and property damage coverage</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-growth/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-growth" />
                </div>
                <h3 className="font-semibold text-primary">Local Family Business</h3>
                <p className="text-sm text-muted-foreground">Two local families committed to the Sunshine Coast community</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-primary">Proven Track Record</h3>
                <p className="text-sm text-muted-foreground">100% on-time payment record since inception</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Download your free report and discover how guaranteed rent can transform your property investment.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
            Get Your Free Report Now
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Resources;