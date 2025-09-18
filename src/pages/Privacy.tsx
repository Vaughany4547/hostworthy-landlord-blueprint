const Privacy = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
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
                At Hostworthy, your privacy matters. This Privacy Policy outlines how we collect, use, and protect your personal information.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Who We Are</h2>
                  <p className="text-muted-foreground">
                    Hostworthy ("we", "us", "our") is a short-term rental leasing and property management business operating in Australia. We focus on helping landlords maximise returns with minimal stress.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    We may collect the following information when you use our website or contact us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Name, email address, phone number</li>
                    <li>Property details (e.g. location, type, timeline)</li>
                    <li>Messages or inquiries you send us</li>
                    <li>Analytics data (pages viewed, browser info, etc.)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Respond to your inquiries or consultations</li>
                    <li>Provide requested materials (e.g. reports)</li>
                    <li>Improve our website and services</li>
                    <li>Send you updates or marketing emails (only if you opt in)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Sharing Your Information</h2>
                  <p className="text-muted-foreground">
                    We will never sell your data. We only share it with trusted partners (e.g., email software providers, form processors) to provide our services. We may also disclose data if required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate safeguards to protect your information from unauthorised access or misuse.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground">
                    You have the right to access, correct, or request deletion of your personal information. To do so, email us at privacy@hostworthy.au.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">7. Cookies</h2>
                  <p className="text-muted-foreground">
                    We use cookies to improve user experience. You may disable cookies through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">8. Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this policy. Any changes will be posted here with a new "last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Us</h2>
                  <p className="text-muted-foreground">
                    For any questions, please contact:<br />
                    📧 privacy@hostworthy.au
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

export default Privacy;