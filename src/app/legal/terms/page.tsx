export const metadata = {
  title: "Terms of Service",
  alternates: {
    canonical: "/legal/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      <h1 className="font-display text-3xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: May 18, 2026</p>

      <div className="mt-10 space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By accessing or using LoopCanvas AI, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Description of Service</h2>
          <p className="mt-2">
            LoopCanvas AI provides AI-powered video generation services that create seamless looping videos from text prompts and images. We reserve the right to modify or discontinue the service at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">3. User Accounts</h2>
          <p className="mt-2">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Acceptable Use</h2>
          <p className="mt-2">
            You agree not to use the service for any unlawful purpose or to generate content that is illegal, harmful, threatening, abusive, or otherwise objectionable. We reserve the right to terminate accounts that violate these rules.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Intellectual Property</h2>
          <p className="mt-2">
            You retain ownership of the content you create using our service. Free plan exports include a watermark. Pro and Team plan subscribers receive full commercial usage rights for generated content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
          <p className="mt-2">
            LoopCanvas AI is provided &ldquo;as is&rdquo; without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">7. Contact</h2>
          <p className="mt-2">
            For questions about these Terms of Service, contact us at legal@loopcanvas.video.
          </p>
        </section>
      </div>
    </div>
  );
}
