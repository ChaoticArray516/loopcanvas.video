export const metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "/legal/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      <h1 className="font-display text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: May 18, 2026</p>

      <div className="mt-10 space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
          <p className="mt-2">
            LoopCanvas AI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
          <p className="mt-2">
            We collect information you provide directly to us, such as your email address when you create an account. We also automatically collect certain information about your device and usage of our services, including IP address, browser type, and pages visited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
          <p className="mt-2">
            We use your information to provide and improve our services, process your requests, communicate with you, and ensure the security of our platform. We do not sell your personal data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Data Storage and Security</h2>
          <p className="mt-2">
            We implement appropriate technical and organizational measures to protect your personal data. Your data is stored securely using industry-standard encryption and access controls.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Your Rights</h2>
          <p className="mt-2">
            You have the right to access, correct, or delete your personal data. You may also request a copy of your data or object to certain processing activities. Contact us at privacy@loopcanvas.video to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Contact Us</h2>
          <p className="mt-2">
            If you have any questions about this Privacy Policy, please contact us at privacy@loopcanvas.video.
          </p>
        </section>
      </div>
    </div>
  );
}
