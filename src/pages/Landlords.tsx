import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Shield, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Clock, 
  Home,
  Wrench,
  Heart,
  DollarSign,
  Star,
  Gift,
  MapPin,
  CreditCard,
  Hammer
} from "lucide-react";

const Landlords = () => {
  const faqs = [
    {
      question: "Will my property be damaged?",
      answer: "No. We professionally clean and inspect your property multiple times per week. Guests are screened, and any damage is handled immediately."
    },
    {
      question: "What about parties or loud guests?",
      answer: "We use guest verification systems, noise monitoring technology, and strict no-party rules. Guests who break rules are removed and banned."
    },
    {
      question: "Who pays for repairs?",
      answer: "We cover all minor maintenance (up to a set threshold). For larger repairs, we notify you and arrange fast, professional service."
    },
    {
      question: "How do I know you'll pay on time?",
      answer: "We sign a fixed lease with you and pay monthly, guaranteed — regardless of guest bookings."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We Lease. We Manage. You Get Paid.<br />
              <span className="text-trust-light">It's That Simple.</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Hostworthy helps property owners maximise returns from their properties — without managing tenants, chasing rent, or dealing with the day-to-day. We professionally lease your home, care for it like it's our own, and host guests under strict standards.
            </p>
            <Button asChild size="lg" className="btn-hero">
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">How It Works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to stress-free property ownership</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="relative p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">We Lease Your Property</h3>
                </div>
                <p className="text-muted-foreground">
                  You sign a fixed-term agreement with us — not with random guests. We become your trusted tenant with full responsibility for rent payments and property care.
                </p>
                <div className="flex items-center space-x-2 text-sm text-trust">
                  <CheckCircle className="w-4 h-4" />
                  <span>Long-term lease agreement</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-trust">
                  <CheckCircle className="w-4 h-4" />
                  <span>Direct landlord-tenant relationship</span>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-trust rounded-full flex items-center justify-center">
                    <span className="text-trust-foreground font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">We Host on Airbnb and Similar Platforms</h3>
                </div>
                <p className="text-muted-foreground">
                  We fully manage the short-term rental side, hosting vetted guests with strict house rules while maintaining your property to premium standards.
                </p>
                <div className="flex items-center space-x-2 text-sm text-trust">
                  <CheckCircle className="w-4 h-4" />
                  <span>Professional guest screening</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-trust">
                  <CheckCircle className="w-4 h-4" />
                  <span>24/7 property monitoring</span>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-growth rounded-full flex items-center justify-center">
                    <span className="text-growth-foreground font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">You Get Paid – On Time, Every Time</h3>
                </div>
                <p className="text-muted-foreground">
                  Your rent is guaranteed — whether the property is booked or not. No late payments, no rental gaps, no chasing tenants.
                </p>
                <div className="flex items-center space-x-2 text-sm text-trust">
                  <CheckCircle className="w-4 h-4" />
                  <span>Monthly guaranteed payments</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-trust">
                  <CheckCircle className="w-4 h-4" />
                  <span>No vacancy risk</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Choose Your Bonus */}
      <section className="section gradient-growth">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              🎁 Choose Your Welcome Bonus
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              As a thank-you for partnering with Hostworthy, we'll give you an exclusive bonus — tailored to what matters most to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Bonus Option 1 */}
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 p-6">
              <CardContent className="text-center space-y-4 p-0">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white text-lg">Free Off-Peak Week</h4>
                <p className="text-white/80 text-sm">
                  Enjoy a complimentary week at any Hostworthy property during off-peak season
                </p>
              </CardContent>
            </Card>

            {/* Bonus Option 2 */}
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 p-6">
              <CardContent className="text-center space-y-4 p-0">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white text-lg">Council Rates Paid</h4>
                <p className="text-white/80 text-sm">
                  We'll cover your first quarter council rates as our welcome gift
                </p>
              </CardContent>
            </Card>

            {/* Bonus Option 3 */}
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 p-6">
              <CardContent className="text-center space-y-4 p-0">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Hammer className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white text-lg">Capital Upgrade</h4>
                <p className="text-white/80 text-sm">
                  $1,000 contribution toward property improvements of your choice
                </p>
              </CardContent>
            </Card>

            {/* Bonus Option 4 */}
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 p-6">
              <CardContent className="text-center space-y-4 p-0">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white text-lg">Cash Rebate</h4>
                <p className="text-white/80 text-sm">
                  Choose a direct cash rebate or premium gift card instead
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Get Your Bonus Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="section gradient-growth">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-growth/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-8 h-8 text-growth" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Real-World Example</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    <strong>Sarah</strong>, a Sunshine Coast property owner, rented her 2-bedroom unit to Hostworthy. She now earns <strong className="text-growth">$4,200/month</strong> — every month — while we manage bookings, cleaning, and guest care. She hasn't had to lift a finger since.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-growth/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-growth">$4,200</div>
                      <div className="text-sm text-muted-foreground">Monthly Rent</div>
                    </div>
                    <div className="bg-growth/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-growth">0</div>
                      <div className="text-sm text-muted-foreground">Late Payments</div>
                    </div>
                    <div className="bg-growth/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-growth">100%</div>
                      <div className="text-sm text-muted-foreground">Stress-Free</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Landlord FAQs</h2>
            <p className="text-lg text-muted-foreground">Common questions from property owners like you</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-trust">
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Why Choose Hostworthy?</h2>
            <p className="text-lg text-muted-foreground">The benefits of professional property management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-primary">Higher Returns</h4>
              <p className="text-sm text-muted-foreground">Earn more than traditional long-term rentals</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-trust" />
              </div>
              <h4 className="font-semibold text-primary">Risk Protection</h4>
              <p className="text-sm text-muted-foreground">Comprehensive insurance and damage protection</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-growth/10 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="w-8 h-8 text-growth" />
              </div>
              <h4 className="font-semibold text-primary">Maintenance Included</h4>
              <p className="text-sm text-muted-foreground">We handle all repairs and upkeep</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-primary">Peace of Mind</h4>
              <p className="text-sm text-muted-foreground">Sleep well knowing your property is in expert hands</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Property Investment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join other Sunshine Coast property owners who are earning guaranteed rent without the stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/resources">Download Free Report</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landlords;