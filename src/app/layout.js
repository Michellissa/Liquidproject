import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default: 'Polera strålkastare – Bästa metoden 2026 | PoleraStralkastare.se',
    template: '%s | PoleraStralkastare.se',
  },
  description:
    'Lär dig polera och renovera bilstrålkastare professionellt. Steg-för-steg-guide, bästa produkterna och verktygen för att få bort matta strålkastare.',
  openGraph: {
    title: 'Polera strålkastare – Bästa metoden 2026',
    description:
      'Lär dig polera och renovera bilstrålkastare professionellt. Steg-för-steg-guide, bästa produkterna och verktygen.',
    url: 'https://www.polerastralkastare.se',
    siteName: 'PoleraStralkastare.se',
    locale: 'sv_SE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.polerastralkastare.se',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
