import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, Users, Home, Volume2, Camera, Mail } from "lucide-react";

const ForGuests = () => {
  const vettingRequirements = [
    {
      icon: CheckCircle,
      title: "Verified ID and Contact Details",
      description: "Government-issued ID and confirmed contact information required for all bookings."
    },
    {
      icon: Shield,
      title: "Positive Platform History",
      description: "Proven track record on Airbnb or other booking platforms with positive reviews."
    },
    {
      icon: Users,
      title: "Community Standards Agreement",
      description: "Written agreement to house rules and neighborhood respect standards."
    }
  ];

  const houseRules = [
    { icon: Users, rule: "No parties or events" },
    { icon: Volume2, rule: "Quiet hours (10pm–7am)" },
    { icon: Shield, rule: "Registered guests only" },
    { icon: Home, rule: "Respect neighbors and property" }
  ];

  const monitoringFeatures = [
    {
      icon: Volume2,
      title: "Noise Monitoring",
      description: "Non-invasive noise detection to prevent parties and maintain neighborhood peace."
    },
    {
      icon: Shield,
      title: "Smart Locks",
      description: "Secure keyless entry for your safety and property protection."
    },
    {
      icon: Camera,
      title: "Entry Point Security",
      description: "External security cameras only - no indoor surveillance for your privacy."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-trust py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Welcome to <span className="text-trust">Hostworthy Stays</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe short-term stays should feel like home — for guests and for the communities we're in. 
              That means respect, care, and clear standards for everyone who stays with us.
            </p>
          </div>
        </div>
      </section>

      {/* Guest Vetting Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Who Gets to Stay with Hostworthy?</h2>
              <p className="text-lg text-muted-foreground">
                We carefully screen and verify every guest before accepting a booking. Our requirements include:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {vettingRequirements.map((requirement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto">
                      <requirement.icon className="w-8 h-8 text-trust" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{requirement.title}</h3>
                    <p className="text-muted-foreground">{requirement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/30 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">Additional Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <div className="space-y-2">
                  <p className="text-muted-foreground">• No party history on platforms</p>
                  <p className="text-muted-foreground">• No fraud flags or violations</p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">• No third-party bookings</p>
                  <p className="text-muted-foreground">• Complete profile verification</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                We reserve the right to decline or cancel any booking that doesn't meet our expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* House Rules Section */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">House Rules Apply — Always</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Every Hostworthy home has a clear, legally binding set of guest rules:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {houseRules.map((rule, index) => (
                <div key={index} className="flex items-center space-x-4 bg-background rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <rule.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-primary">{rule.rule}</p>
                </div>
              ))}
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
              <p className="text-destructive font-semibold mb-2">Important Notice</p>
              <p className="text-muted-foreground">
                Violations result in immediate termination of the stay and potential legal action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean & Safe Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Clean, Safe, Well-Maintained</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    We ensure every guest walks into a professionally cleaned, sanitized, and well-stocked home.
                  </p>
                  <p>
                    After each stay, our professional cleaners inspect the property and report on:
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-growth-light to-accent rounded-xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">Post-Stay Inspection</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <CheckCircle className="w-8 h-8 text-growth mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary">Cleanliness</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-trust mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary">Damage Check</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary">Inventory</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 text-growth mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary">Rule Compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Monitoring Section */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Smart Monitoring</h2>
            <p className="text-lg text-muted-foreground">
              Technology that ensures safety for the home, the guests, and the community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {monitoringFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Support Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              <Mail className="w-10 h-10 inline-block mr-4 text-trust" />
              Staying with Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you're a guest with an upcoming Hostworthy booking — welcome! You'll receive arrival instructions, 
              contact details, and house rules before your stay.
            </p>
            
            <div className="bg-trust-light rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Guest Support</h3>
              <p className="text-muted-foreground mb-4">
                Have a question about your stay? Need assistance during your visit?
              </p>
              <Button asChild size="lg" className="btn-trust">
                <a href="mailto:stay@hostworthy.au">Email: stay@hostworthy.au</a>
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>
                Our local team is available to help ensure your Sunshine Coast experience is exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Hostworthy Difference</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Quality accommodations, vetted guests, and local expertise for an exceptional Sunshine Coast stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/about">Meet Our Team</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForGuests;