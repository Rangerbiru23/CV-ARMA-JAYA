'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Skip to Content */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

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
              <Link href="#beranda" className="text-text hover:text-brand-primary transition-colors">Beranda</Link>
              <Link href="#tentang" className="text-text hover:text-brand-primary transition-colors">Tentang</Link>
              <Link href="#layanan" className="text-text hover:text-brand-primary transition-colors">Layanan</Link>
              <Link href="#galeri" className="text-text hover:text-brand-primary transition-colors">Galeri</Link>
              <Link href="#kontak" className="text-text hover:text-brand-primary transition-colors">Kontak</Link>
              <button className="btn btn-primary btn-sm">
                Hubungi Kami
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-surface-subtle transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-text transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-full h-0.5 bg-text transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-full h-0.5 bg-text transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-3">
                <Link href="#beranda" className="text-text hover:text-brand-primary transition-colors py-2">Beranda</Link>
                <Link href="#tentang" className="text-text hover:text-brand-primary transition-colors py-2">Tentang</Link>
                <Link href="#layanan" className="text-text hover:text-brand-primary transition-colors py-2">Layanan</Link>
                <Link href="#galeri" className="text-text hover:text-brand-primary transition-colors py-2">Galeri</Link>
                <Link href="#kontak" className="text-text hover:text-brand-primary transition-colors py-2">Kontak</Link>
                <button className="btn btn-primary btn-sm w-full">
                  Hubungi Kami
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section id="beranda" className="relative bg-gradient-to-br from-brand-primary via-brand-accent to-brand-secondary text-text-inverse">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0">
            <img 
              src="/hero-catering.jpg" 
              alt="CV ARMA JAYA Catering Service" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative container py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-display mb-6">
                Selamat Datang di <span className="font-extrabold">CV ARMA JAYA</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-8 font-medium opacity-95">
                Penyedia Jasa Boga Profesional Terpercaya
              </p>
              <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                Solusi catering terbaik untuk berbagai acara Anda. Melayani dengan sepenuh hati untuk setiap kebutuhan kuliner Anda di Tanjung Balai dan sekitarnya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-secondary btn-lg">
                  Lihat Menu Kami
                </button>
                <button className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-brand-primary">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--background)"/>
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="tentang" className="py-20 bg-surface-subtle">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <h2 className="text-h2 mb-6 text-text">Tentang <span className="text-brand-primary font-bold">CV ARMA JAYA</span></h2>
                  <p className="text-body mb-6 text-text-secondary">
                    CV ARMA JAYA adalah perusahaan penyedia jasa boga yang berkomitmen untuk memberikan layanan catering terbaik dengan kualitas makanan yang prima dan pelayanan yang profesional.
                  </p>
                  <p className="text-body mb-6 text-text-secondary">
                    Dengan pengalaman bertahun-tahun dalam industri kuliner, kami memahami betul pentingnya makanan berkualitas dalam setiap acara Anda. Dari pertemuan bisnis hingga perayaan pribadi, kami siap menyajikan hidangan yang memukau.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-primary mb-2">100%</div>
                      <div className="text-small text-text-muted">Bahan Berkualitas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-primary mb-2">24/7</div>
                      <div className="text-small text-text-muted">Siap Melayani</div>
                    </div>
                  </div>
                  <button className="btn btn-primary">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white text-4xl font-bold">AJ</span>
                      </div>
                      <h3 className="text-h4 mb-4 text-text">Mitra Terpercaya</h3>
                      <p className="text-body text-text-secondary">
                        Kami telah dipercaya oleh berbagai perusahaan dan individu untuk menyediakan layanan catering terbaik.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="layanan" className="py-20 bg-surface">
          <div className="container">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-h2 mb-6 text-text">Layanan <span className="text-brand-primary font-bold">Unggulan Kami</span></h2>
              <p className="text-h4 text-text-secondary max-w-3xl mx-auto">
                Kami menyediakan berbagai layanan boga untuk memenuhi kebutuhan kuliner Anda dengan kualitas terbaik.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="card hover:shadow-lg transition-all animate-fade-in">
                <div className="card-body text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-h3 mb-4 text-text">Catering Corporate</h3>
                  <p className="text-body text-text-secondary mb-6">
                    Layanan catering untuk meeting, seminar, training, dan acara perusahaan lainnya dengan menu yang variatif dan profesional.
                  </p>
                  <button className="btn btn-outline btn-sm">
                    Detail Layanan
                  </button>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="card hover:shadow-lg transition-all animate-fade-in" style={{animationDelay: '100ms'}}>
                <div className="card-body text-center">
                  <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 013 15.546V4.818a2.704 2.704 0 013 0 2.704 2.704 0 003 0 2.704 2.704 0 013 0 2.704 2.704 0 003 0 2.704 2.704 0 013 0 2.704 2.704 0 003 0v10.728Z" />
                    </svg>
                  </div>
                  <h3 className="text-h3 mb-4 text-text">Paket Pernikahan</h3>
                  <p className="text-body text-text-secondary mb-6">
                    Paket lengkap untuk acara pernikahan Anda, dari appetizer hingga dessert dengan presentasi yang elegan.
                  </p>
                  <button className="btn btn-outline btn-sm">
                    Detail Layanan
                  </button>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="card hover:shadow-lg transition-all animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="card-body text-center">
                  <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-h3 mb-4 text-text">Event Spesial</h3>
                  <p className="text-body text-text-secondary mb-6">
                    Catering untuk ulang tahun, arisan, gathering, dan berbagai acara spesial lainnya sesuai kebutuhan Anda.
                  </p>
                  <button className="btn btn-outline btn-sm">
                    Detail Layanan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeri" className="py-20 bg-surface-subtle">
          <div className="container">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-h2 mb-6 text-text">Galeri <span className="text-brand-primary font-bold">Kuliner Kami</span></h2>
              <p className="text-h4 text-text-secondary max-w-3xl mx-auto">
                Berbagai hidangan lezat yang telah kami sajikan untuk berbagai acara penting.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src="/wedding-catering.jpg" 
                  alt="Wedding Catering" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-h4 mb-2">Paket Pernikahan</h3>
                    <p className="text-body opacity-90">Hidangan elegan untuk hari spesial Anda</p>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src="/corporate-catering.jpg" 
                  alt="Corporate Catering" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-h4 mb-2">Catering Corporate</h3>
                    <p className="text-body opacity-90">Menu profesional untuk acara bisnis</p>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src="/hero-catering.jpg" 
                  alt="Special Event Catering" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-h4 mb-2">Event Spesial</h3>
                    <p className="text-body opacity-90">Kreasi menu untuk berbagai acara</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="py-20 bg-surface">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-h2 mb-6 text-text">Hubungi <span className="text-brand-primary font-bold">CV ARMA JAYA</span></h2>
                  <p className="text-body text-text-secondary mb-8">
                    Siap melayani kebutuhan catering Anda. Hubungi kami untuk konsultasi gratis dan penawaran terbaik.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-h4 mb-2 text-text">Alamat</h3>
                        <p className="text-body text-text-secondary">
                          Jalan Nelayan, Lingkungan IV, Desa/Kelurahan Keramat Kubah, Kec. Sei Tualang Raso, Kota Tanjung Balai, Provinsi Sumatera Utara
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-h4 mb-2 text-text">Telepon</h3>
                        <p className="text-body text-text-secondary">085285703497</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-h4 mb-2 text-text">Email</h3>
                        <p className="text-body text-text-secondary">info@cvarmajaya.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-h3 mb-6 text-text">Kirim Pesan</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Nama Lengkap</label>
                        <input
                          type="text"
                          id="name"
                          className="input"
                          placeholder="Masukkan nama Anda"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="input"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">Telepon</label>
                        <input
                          type="tel"
                          id="phone"
                          className="input"
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Pesan</label>
                        <textarea
                          id="message"
                          rows={4}
                          className="input resize-none"
                          placeholder="Ceritakan kebutuhan catering Anda..."
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary w-full">
                        Kirim Pesan
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-text-inverse">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 mb-6">Siap Melayani Kebutuhan Catering Anda</h2>
              <p className="text-h4 mb-8 opacity-95">
                Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk acara Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-secondary btn-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  085285703497
                </button>
                <button className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-brand-primary">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Kirim Email
                </button>
              </div>
            </div>
          </div>
        </section>
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
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-surface-subtle rounded-lg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-surface-subtle rounded-lg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-surface-subtle rounded-lg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-h4 mb-4 text-text">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-text-secondary hover:text-brand-primary transition-colors">Catering Corporate</a></li>
                <li><a href="#" className="text-text-secondary hover:text-brand-primary transition-colors">Paket Pernikahan</a></li>
                <li><a href="#" className="text-text-secondary hover:text-brand-primary transition-colors">Event Spesial</a></li>
                <li><a href="#" className="text-text-secondary hover:text-brand-primary transition-colors">Konsultasi Menu</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="text-h4 mb-4 text-text">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-text-secondary hover:text-brand-primary transition-colors">Privacy Policy</a></li>
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