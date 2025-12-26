import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CV ARMA JAYA - Jasa Boga Profesional',
  description: 'CV ARMA JAYA adalah penyedia jasa boga profesional untuk berbagai kebutuhan catering Anda di Tanjung Balai dan sekitarnya.',
  keywords: ['jasa boga', 'catering', 'makanan', 'Tanjung Balai', 'CV ARMA JAYA'],
  authors: [{ name: 'CV ARMA JAYA' }],
  creator: 'CV ARMA JAYA',
  publisher: 'CV ARMA JAYA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="facebook-domain-verification" content="dggwgxbpy0g2yr91djnreqf6g06drx" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}