const Terms = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Last updated: 17 September 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <p className="text-lg text-muted-foreground mb-8">
                These Terms govern your use of Hostworthy's website and services. By accessing or using this website, you agree to these terms.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Services Provided</h2>
                  <p className="text-muted-foreground">
                    Hostworthy offers leasing, management, and short-term rental services for residential properties. We provide general information and consultations via this site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Use of Website</h2>
                  <p className="text-muted-foreground">
                    You agree to use this website for lawful purposes only. Do not misuse our content, services, or functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. No Guarantee of Results</h2>
                  <p className="text-muted-foreground">
                    While we provide case studies and estimates, actual results may vary. We make no guarantees of income unless specifically stated in a signed lease agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All text, images, branding, and content are the property of Hostworthy. Do not copy or reproduce without permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    We are not responsible for losses resulting from website use, temporary outages, or third-party service providers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">6. Landlord Agreements</h2>
                  <p className="text-muted-foreground">
                    Landlords entering agreements with Hostworthy will be subject to separate written lease or partnership agreements, which override these Terms where applicable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">7. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms are governed by the laws of Queensland, Australia.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">8. Contact</h2>
                  <p className="text-muted-foreground">
                    Questions about these terms? Contact us at:<br />
                    📧 hello@hostworthy.au
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;