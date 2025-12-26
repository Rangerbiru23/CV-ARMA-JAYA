import Link from 'next/link'

export default function TermsPage() {
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
              <Link href="/privacy" className="text-text hover:text-brand-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-brand-primary font-medium">Terms & Conditions</Link>
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
                <h1 className="text-h1 mb-6 text-text">Terms and Conditions</h1>
                <p className="text-small text-text-muted mb-8">Last updated: December 2024</p>
                
                <div className="prose prose-lg max-w-none">
                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">1. Acceptance of Terms</h2>
                    <p className="text-body text-text-secondary mb-4">
                      By accessing and using the website of CV ARMA JAYA, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">2. Company Information</h2>
                    <p className="text-body text-text-secondary mb-4">
                      CV ARMA JAYA is a professional catering service provider operating in Tanjung Balai, North Sumatra, Indonesia. We provide catering services for corporate events, weddings, special occasions, and other events requiring food service.
                    </p>
                    <div className="bg-surface-subtle p-6 rounded-lg mb-4">
                      <p className="text-body text-text mb-2"><strong>CV ARMA JAYA</strong></p>
                      <p className="text-body text-text-secondary mb-2">
                        Jalan Nelayan, Lingkungan IV, Desa/Kelurahan Keramat Kubah, Kec. Sei Tualang Raso, Kota Tanjung Balai, Provinsi Sumatera Utara
                      </p>
                      <p className="text-body text-text-secondary mb-2">Telepon: 085285703497</p>
                      <p className="text-body text-text-secondary">Email: info@cvarmajaya.com</p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">3. Services Provided</h2>
                    <h3 className="text-h3 mb-3 text-text">Catering Services</h3>
                    <p className="text-body text-text-secondary mb-4">
                      CV ARMA JAYA provides the following catering services:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-text-secondary">
                      <li>Corporate catering for meetings, seminars, and business events</li>
                      <li>Wedding catering packages</li>
                      <li>Special event catering (birthdays, anniversaries, gatherings)</li>
                      <li>Custom menu planning and consultation</li>
                      <li>On-site food service and setup</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">4. Booking and Payment Terms</h2>
                    <h3 className="text-h3 mb-3 text-text">Booking Requirements</h3>
                    <ul className="list-disc pl-6 mb-4 text-text-secondary">
                      <li>Minimum booking period: 7 days for small events, 14 days for large events</li>
                      <li>Advance payment: 50% deposit required to confirm booking</li>
                      <li>Full payment: Required 3 days before event date</li>
                      <li>Cancellation policy: 50% refund for cancellations made 7 days before event</li>
                    </ul>
                    
                    <h3 className="text-h3 mb-3 text-text">Payment Methods</h3>
                    <p className="text-body text-text-secondary mb-4">
                      We accept the following payment methods:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-text-secondary">
                      <li>Bank transfer</li>
                      <li>Cash payment</li>
                      <li>Digital payment platforms</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">5. Client Responsibilities</h2>
                    <p className="text-body text-text-secondary mb-4">
                      As a client of CV ARMA JAYA, you agree to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-text-secondary">
                      <li>Provide accurate event details including date, time, location, and number of guests</li>
                      <li>Inform us of any food allergies or dietary restrictions at least 5 days before the event</li>
                      <li>Provide access to the venue at least 2 hours before the event for setup</li>
                      <li>Ensure proper facilities for food service (tables, electricity, water access)</li>
                      <li>Pay all fees according to the agreed payment schedule</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">6. Food Quality and Safety</h2>
                    <p className="text-body text-text-secondary mb-4">
                      CV ARMA JAYA is committed to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-text-secondary">
                      <li>Using only fresh, high-quality ingredients</li>
                      <li>Following proper food handling and safety protocols</li>
                      <li>Maintaining cleanliness in food preparation and service</li>
                      <li>Ensuring all food is prepared and served at appropriate temperatures</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">7. Limitation of Liability</h2>
                    <p className="text-body text-text-secondary mb-4">
                      CV ARMA JAYA shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to damages for loss of profits, use, data, or other intangible losses.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">8. Force Majeure</h2>
                    <p className="text-body text-text-secondary mb-4">
                      CV ARMA JAYA shall not be liable for any failure to perform its obligations where such failure is as a result of acts of nature, war, terrorism, labor disputes, or other factors beyond our reasonable control.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">9. Intellectual Property</h2>
                    <p className="text-body text-text-secondary mb-4">
                      All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of CV ARMA JAYA and is protected by Indonesian and international copyright laws.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">10. Privacy</h2>
                    <p className="text-body text-text-secondary mb-4">
                      Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">11. Modifications to Terms</h2>
                    <p className="text-body text-text-secondary mb-4">
                      CV ARMA JAYA reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on the website. Your continued use of our services constitutes acceptance of any changes.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">12. Governing Law and Jurisdiction</h2>
                    <p className="text-body text-text-secondary mb-4">
                      These terms and conditions shall be governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Tanjung Balai, North Sumatra.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-h2 mb-4 text-text">13. Contact Information</h2>
                    <p className="text-body text-text-secondary mb-4">
                      If you have any questions about these Terms and Conditions, please contact us:
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
                <li><a href="/privacy" className="text-text-secondary hover:text-brand-primary transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-brand-primary font-medium">Terms & Conditions</a></li>
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