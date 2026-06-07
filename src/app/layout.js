import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default: 'Strålkastar-renovering – från 995 kr | Strålkastar Teknik AB',
    template: '%s | Strålkastar Teknik AB',
  },
  description:
    'Professionell strålkastar-renovering från 995 kr. Boka tid för renovering av bilstrålkastare eller köp vårt kompletta gör-det-själv-kit för 499 kr. UV-skydd och resultatgaranti ingår.',
  openGraph: {
    title: 'Strålkastar-renovering – professionell service eller gör-det-själv-kit',
    description:
      'Professionell strålkastar-renovering från 995 kr eller komplett renoveringskit för 499 kr. UV-skydd och garanti ingår.',
    url: 'https://www.polerastralkastare.se',
    siteName: 'Strålkastar Teknik AB',
    locale: 'sv_SE',
    type: 'website',
    images: 'https://www.polerastralkastare.se/images/stralkastare-renovering-resultat-3.webp',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.polerastralkastare.se',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strålkastar-renovering – professionell service eller gör-det-själv-kit',
    description:
      'Professionell strålkastar-renovering från 995 kr eller komplett renoveringskit för 499 kr.',
    images: 'https://www.polerastralkastare.se/images/stralkastare-renovering-resultat-3.webp',
  },
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sverige',
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
