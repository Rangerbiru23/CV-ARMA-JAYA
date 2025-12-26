import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <>
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-surface border-b border-border">
        <div className="container">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AJ</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-text">CV ARMA JAYA</h1>
                <p className="text-xs text-text-muted">Jasa Boga Profesional</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-text hover:text-brand-primary transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-brand-primary font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-text hover:text-brand-primary transition-colors">Terms & Conditions</Link>
              <button className="btn btn-primary btn-sm">
                Hubungi Kami
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-surface-subtle py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="card-body">
                <h1 className="text-h1 mb-6 text-text">Privacy Policy</h1>
                <p className="text-small text-text-muted mb-8">Last updated: December 2024</p>
                
                <div className="prose prose-lg max-w-none">
                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">1. Introduction</h2>
                    <p className="text-body text-text-secondary mb-4">
                      Welcome to CV ARMA JAYA. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">2. Data We Collect</h2>
                    <h3 className="text-h3 mb-3 text-text">Personal Information</h3>
                    <p className="text-body text-text-secondary mb-4">
                      We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-text-secondary">
                      <li>Name and contact details such as email address, telephone number</li>
                      <li>Company information for corporate clients</li>
                      <li>Event details and catering requirements</li>
                      <li>Communication data and preferences</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">3. How We Use Your Data</h2>
                    <p className="text-body text-text-secondary mb-4">
                      CV ARMA JAYA uses your personal data for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-text-secondary">
                      <li>To provide and manage our catering services</li>
                      <li>To communicate with you about your orders and inquiries</li>
                      <li>To improve our services and customer experience</li>
                      <li>To send you marketing communications (with your consent)</li>
                      <li>To comply with legal obligations</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">4. Data Security</h2>
                    <p className="text-body text-text-secondary mb-4">
                      We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">5. Your Rights</h2>
                    <p className="text-body text-text-secondary mb-4">
                      Under applicable data protection laws, you have the following rights:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-text-secondary">
                      <li>Right to access your personal data</li>
                      <li>Right to rectification of inaccurate data</li>
                      <li>Right to erasure of your personal data</li>
                      <li>Right to restrict processing</li>
                      <li>Right to data portability</li>
                      <li>Right to object to processing</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">6. Cookies and Tracking</h2>
                    <p className="text-body text-text-secondary mb-4">
                      Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">7. Third-Party Links</h2>
                    <p className="text-body text-text-secondary mb-4">
                      Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">8. Children's Privacy</h2>
                    <p className="text-body text-text-secondary mb-4">
                      Our website is not intended for use by children under the age of 16, and we do not knowingly collect personal data from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">9. Changes to This Policy</h2>
                    <p className="text-body text-text-secondary mb-4">
                      We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this policy.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">10. Contact Us</h2>
                    <p className="text-body text-text-secondary mb-4">
                      If you have any questions about this privacy policy or our privacy practices, please contact us:
                    </p>
                    <div className="bg-surface-subtle p-6 rounded-lg">
                      <p className="text-body text-text mb-2"><strong>CV ARMA JAYA</strong></p>
                      <p className="text-body text-text-secondary mb-2">
                        Jalan Nelayan, Lingkungan IV, Desa/Kelurahan Keramat Kubah, Kec. Sei Tualang Raso, Kota Tanjung Balai, Provinsi Sumatera Utara
                      </p>
                      <p className="text-body text-text-secondary mb-2">Telepon: 085285703497</p>
                      <p className="text-body text-text-secondary">Email: info@cvarmajaya.com</p>
                    </div>
                  </section>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link href="/" className="btn btn-primary">
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AJ</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text">CV ARMA JAYA</h3>
                  <p className="text-xs text-text-muted">Jasa Boga Profesional</p>
                </div>
              </div>
              <p className="text-body text-text-secondary mb-4">
                Penyedia jasa boga terpercaya untuk berbagai kebutuhan catering Anda di Tanjung Balai dan sekitarnya.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-h4 mb-4 text-text">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-text-secondary hover:text-brand-primary transition-colors">Catering Corporate</a></li>
                <li><a href="#" className="text-text-secondary hover:text-brand-primary transition-colors">Paket Pernikahan</a></li>
                <li><a href="#" className="text-text-secondary hover:text-brand-primary transition-colors">Event Spesial</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="text-h4 mb-4 text-text">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-brand-primary font-medium">Privacy Policy</a></li>
                <li><a href="/terms" className="text-text-secondary hover:text-brand-primary transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-small text-text-muted">
              © 2024 CV ARMA JAYA. All rights reserved. | Jasa Boga Profesional Terpercaya
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}