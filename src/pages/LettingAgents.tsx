import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Star, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  Users, 
  Home, 
  Award,
  Phone,
  Download,
  Sparkles,
  DollarSign,
  Calendar,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const LettingAgents = () => {
  const benefits = [
    {
      icon: Star,
      title: "Delight Your Landlords (And Keep Their Business)",
      description: "Become the agent who delivers guaranteed, on-time rent every single month. We offer long-term leases (3-5 years), providing landlords with stability and you with a long-term management fee.",
      highlights: ["Guaranteed monthly rent", "No vacancy gaps", "Long-term contracts", "Happy clients"]
    },
    {
      icon: Clock,
      title: "Reduce Your Management Headaches",
      description: "We're the perfect, hassle-free tenant. Once we're in, your day-to-day management workload for that property drops significantly.",
      highlights: ["Fewer tenant disputes", "No eviction headaches", "Proactive maintenance", "Professional cleaning"]
    },
    {
      icon: TrendingUp,
      title: "Gain a Competitive Edge & Win More Business",
      description: "Our partnership gives you a powerful and unique selling proposition when you pitch to new landlords.",
      highlights: ["Unique value proposition", "Guaranteed income solution", "Market differentiation", "Win more clients"]
    }
  ];

  const processSteps = [
    {
      icon: Shield,
      title: "Professional Screening",
      description: "Strict vetting process for all guests with noise monitoring devices to ensure rules are followed."
    },
    {
      icon: Sparkles,
      title: "Pristine Condition",
      description: "Professional cleaning multiple times a week and proactive minor repairs to maintain property standards."
    },
    {
      icon: CheckCircle,
      title: "Protection Guaranteed",
      description: "Specialized short-term rental insurance covering liability and property damage for complete peace of mind."
    },
    {
      icon: Users,
      title: "Premium Guests",
      description: "Target market of business travelers, families, and professionals seeking high-quality accommodation."
    }
  ];

  const faqs = [
    {
      question: "What about noise and parties?",
      answer: "We have strict 'no party' rules, comprehensive guest screening, and use noise monitoring technology to ensure compliance. Any violations result in immediate guest removal."
    },
    {
      question: "Will the landlord's property get damaged?",
      answer: "We provide specialist insurance, collect security deposits from guests, and inspect the property after every stay. Professional cleaning happens multiple times per week."
    },
    {
      question: "How is this better than a long-term tenant?",
      answer: "Guaranteed rent with no voids, professional cleaning, proactive maintenance, and zero eviction risks. The property stays in better condition than traditional rentals."
    },
    {
      question: "What if you can't pay the rent?",
      answer: "We operate a professional business model with strong financial planning and multiple revenue streams. Our track record demonstrates consistent, reliable payments."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary-glow to-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium px-4 py-2">
            For Letting Agents
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Partner with the Experts in
            <span className="block text-secondary-foreground">Short-Stay Accommodation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Keep Your Landlords Happy with Guaranteed Rent & Zero Hassle. We help you reduce management headaches and provide your clients with a consistent, premium income stream.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link to="#partnership">Learn More About Partnering</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Phone className="mr-2 h-5 w-5" />
              Book Partnership Call
            </Button>
          </div>
        </div>
      </section>

      {/* What's In It For You Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's In It For You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your agency with our partnership program designed specifically for letting agents
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {benefit.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Model Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Professional Operators
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Our Model Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are professional short-stay operators, not amateur hosts. Our proven 4 P's framework ensures success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Addressing Your Concerns
            </h2>
            <p className="text-xl text-muted-foreground">
              We understand your questions. Here are the answers that matter.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-start text-lg">
                    <AlertCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed ml-7">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunity Section */}
      <section id="partnership" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-primary-glow/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We offer a <strong>finder's fee/commission</strong> for every successful property you bring to us. 
              Become a preferred partner and get access to a consistent, reliable income stream for your agency.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Let us be your go-to solution for landlords who want financial security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 text-left">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-6 w-6 text-primary mr-2" />
                  <CardTitle>Commission Structure</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Competitive finder's fees
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Ongoing partnership benefits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Fast payment processing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 text-left">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  <CardTitle>Partner Benefits</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Priority property reviews
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Marketing materials support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Dedicated account manager
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Book a 15-Minute Partnership Call
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Download Partnership Pack
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Agency?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join our network of successful letting agents and start offering your landlords the guaranteed income solution they've been looking for.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LettingAgents;