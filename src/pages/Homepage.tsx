import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Home, Clock, CheckCircle, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";

const Homepage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Property, Our Priority.<br />
              <span className="text-trust-light">Guaranteed Rent. Zero Stress.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-light">
              We partner with property owners to deliver consistent income and professional management — without the headaches of traditional tenants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-hero">
                <Link to="/landlords">Learn How It Works</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Guaranteed Rent. Zero Hassle. Superior Care for Your Property.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the peace of mind that comes with professional property management and guaranteed returns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Guaranteed Rent */}
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-trust/50">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-trust" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Guaranteed Rent</h3>
                <p className="text-muted-foreground">
                  We lease your property on long-term agreements and ensure on-time payment — whether guests stay or not.
                </p>
              </CardContent>
            </Card>

            {/* Expert Care */}
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-growth/50">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-growth/10 rounded-full flex items-center justify-center mx-auto">
                  <Home className="w-8 h-8 text-growth" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Expert Care</h3>
                <p className="text-muted-foreground">
                  Your property is cleaned and inspected regularly. Guests are fully vetted and held to strict house rules.
                </p>
              </CardContent>
            </Card>

            {/* Peace of Mind */}
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Peace of Mind</h3>
                <p className="text-muted-foreground">
                  We manage everything — guest turnover, communication, maintenance, and compliance. You don't lift a finger.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="section gradient-trust">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Want to know how we protect your property while delivering consistent income?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download our free landlord report and discover how Hostworthy makes short-term leasing work for property owners like you.
            </p>
            <Button asChild size="lg" className="btn-trust text-lg px-8 py-4">
              <Link to="/resources">Get the Free Report</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-trust">100%</div>
              <div className="text-muted-foreground">On-Time Rent Payments</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-growth">24/7</div>
              <div className="text-muted-foreground">Property Monitoring</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5★</div>
              <div className="text-muted-foreground">Average Guest Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">How Hostworthy Works</h2>
            <p className="text-lg text-muted-foreground">Simple, professional, transparent</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">1</div>
              <h3 className="font-semibold">We Lease Your Property</h3>
              <p className="text-muted-foreground text-sm">Sign a fixed-term agreement with us — not with random guests. We become your trusted tenant.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-trust rounded-full flex items-center justify-center mx-auto text-trust-foreground font-bold text-xl">2</div>
              <h3 className="font-semibold">We Manage Everything</h3>
              <p className="text-muted-foreground text-sm">We host vetted guests with strict house rules while maintaining your property to the highest standards.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-growth rounded-full flex items-center justify-center mx-auto text-growth-foreground font-bold text-xl">3</div>
              <h3 className="font-semibold">You Get Paid</h3>
              <p className="text-muted-foreground text-sm">Guaranteed rent payments on time, every time — regardless of bookings or occupancy.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-trust">
              <Link to="/landlords">Learn More Details</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;