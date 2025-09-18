import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Heart, Shield, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We treat your home like our own, with complete transparency and honest communication in every interaction."
    },
    {
      icon: Heart,
      title: "Care",
      description: "We go the extra mile for your property and your guests, ensuring exceptional experiences for everyone."
    },
    {
      icon: TrendingUp,
      title: "Consistency",
      description: "You can count on us — always. Reliable payments, professional service, and dependable results."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-trust py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Professional. Personable.<br />
              <span className="text-trust">Locally Based.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're two families who believe landlords deserve better.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    <strong className="text-primary">Paul & Erica Kusli</strong> and <strong className="text-primary">Craig & Belinda Vaughan</strong> started Hostworthy after seeing how stressful traditional property management could be — and how short-term rentals, when done properly, could benefit everyone.
                  </p>
                  <p>
                    We combine professional systems with local insight to make property ownership stress-free, secure, and more profitable.
                  </p>
                  <p>
                    Based on the beautiful Sunshine Coast, we understand the unique opportunities and challenges of our local property market. Our approach isn't just about maximizing returns — it's about building lasting relationships with property owners who trust us with their most valuable assets.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-trust-light to-accent rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-trust rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-trust-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Two Families, One Mission</h3>
                      <p className="text-sm text-muted-foreground">Making property investment work for everyone</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-trust">15+</div>
                      <div className="text-xs text-muted-foreground">Years Combined Experience</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-growth">100%</div>
                      <div className="text-xs text-muted-foreground">Local Focus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-6 p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Sunshine Coast Locals, Serving Sunshine Coast Properties
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We live here, work here, and understand the unique charm and opportunities of our region. This local knowledge translates into better guest experiences and higher returns for property owners.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-trust-light rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Current Service Areas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sunshine Coast Region</li>
                  <li>• Caloundra to Noosa</li>
                  <li>• Hinterland Properties</li>
                  <li>• Coastal Apartments & Houses</li>
                </ul>
              </div>
              
              <div className="bg-growth-light rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Expanding Soon</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Brisbane Metro</li>
                  <li>• Gold Coast North</li>
                  <li>• Moreton Bay Region</li>
                  <li>• Selected Regional Areas</li>
                </ul>
              </div>
            </div>

            <Button asChild size="lg" className="btn-trust">
              <Link to="/landlords">Learn How We Can Help</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section gradient-hero text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 italic">
              "To transform property investment from a source of stress into a source of consistent, passive income — while maintaining the highest standards of property care and guest experience."
            </p>
            <p className="text-lg text-primary-foreground/80">
              Every decision we make, every system we implement, and every relationship we build is guided by this mission. We believe that when property owners succeed, guests have better experiences, and communities thrive.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Meet the Team?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to discuss how Hostworthy can work for your property. Book a no-obligation consultation and discover the difference local expertise makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-trust">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-outline">
              <Link to="/resources">Download Our Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;