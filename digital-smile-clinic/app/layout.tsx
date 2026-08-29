import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Digital Smile Clinic | Odontologia Digital Avançada',
  description:
    'Transforme seu sorriso de forma invisível, rápida e digital. Escaneamento intraoral 3D, alinhadores sem bráquetes, Digital Smile Design e clareamento a laser.',
  keywords: [
    'alinhadores invisíveis',
    'lentes de contato dental',
    'implantes',
    'escaneamento 3D',
    'Digital Smile Design',
    'odontologia digital',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0a1633',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`bg-background ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
