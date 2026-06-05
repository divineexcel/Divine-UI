import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Divinefavour Chidiebere | UI/UX Designer',
  description:
    'Creative UI/UX Designer crafting intuitive digital experiences. Specializing in user research, wireframing, prototyping, and visual design.',
  keywords: [
    'UI/UX Designer',
    'Product Designer',
    'User Experience',
    'User Interface',
    'Figma',
    'Design Systems',
    'Abuja',
    'Nigeria',
  ],
  authors: [{ name: 'Divinefavour Chidiebere Opara' }],
  creator: 'Divinefavour Chidiebere Opara',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Divinefavour Chidiebere | UI/UX Designer',
    description:
      'Creative UI/UX Designer crafting intuitive digital experiences.',
    siteName: 'Divinefavour Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divinefavour Chidiebere | UI/UX Designer',
    description:
      'Creative UI/UX Designer crafting intuitive digital experiences.',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2332',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
