import Link from 'next/link'
import SEOImage from '@/components/SEOImage'

export const metadata = {
  title: 'Tjänster & produkter – Strålkastar-renovering och kit | Strålkastar Teknik AB',
  description:
    'Boka professionell strålkastar-renovering eller köp komplett renoveringskit. Från 995 kr. UV-skydd ingår. Garanterat resultat.',
  openGraph: {
    title: 'Tjänster & produkter – Strålkastar-renovering och kit',
    description:
      'Boka professionell strålkastar-renovering eller köp komplett renoveringskit. Från 995 kr.',
  },
}

export default function ServicePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-blue-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              Tjänster & produkter
            </h1>
            <p className="mb-4 text-lg text-gray-200 sm:text-xl">
              <strong>Strålkastar Teknik AB</strong> erbjuder professionell
              renovering av bilstrålkastare och kompletta gör-det-själv-kit.
            </p>
          </div>
        </div>
      </section>

      <section id="tjanst" className="scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="items-center gap-12 md:grid md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
                Professionell strålkastar-renovering
              </h2>
              <p className="mb-4 text-gray-600">
                Låt oss göra jobbet. Vi renoverar dina strålkastare med
                professionella maskiner och metoder. Du lämnar in bilen och
                hämtar den med strålkastare som nya – samma dag.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-primary">
                Ingår i tjänsten
              </h3>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Grundlig rengöring och maskering
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Våtslipning P400–P3000
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Professionell polering
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  UV-skyddande lack (clear coat)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Resultatgaranti
                </li>
              </ul>

              <p className="mb-2 text-3xl font-bold text-primary">
                Från 995 kr / strålkastare
              </p>
              <p className="mb-6 text-sm text-gray-500">
                Pris baserat på bilmodell och skick. Kontakta oss för offert.
              </p>

              <Link
                href="#kontakt"
                className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Begär offert
              </Link>
            </div>

            <div className="mt-8 md:mt-0">
              <SEOImage
                src="/images/stralkastare-renovering-resultat-3.webp"
                alt="Professionell strålkastar-renovering utförd av Strålkastar Teknik AB"
                caption="Exempel på renovering – före och efter"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="produkter" className="scroll-mt-20 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="items-center gap-12 md:grid md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
                Komplett renoveringskit – gör det själv
              </h2>
              <p className="mb-4 text-gray-600">
                Vårt kit innehåller samma produkter som vi använder i vår
                verkstad. Perfekt för dig som vill renovera dina strålkastare
                hemma med professionellt resultat.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-primary">
                Innehåller
              </h3>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Våtslippapper P400, P800, P1200, P2000, P3000
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Plastpolish (Meguiars PlastX)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Polertrassa & skumrondell
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  UV-skyddande clear coat
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Maskeringstejp & mikrofiberduk
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Steg-för-steg instruktioner
                </li>
              </ul>

              <p className="mb-2 text-3xl font-bold text-primary">
                499 kr
              </p>
              <p className="mb-6 text-sm text-gray-500">
                Fri frakt vid beställning över 999 kr.
              </p>

              <Link
                href="#kontakt"
                className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Beställ kit
              </Link>
            </div>

            <div className="order-1 mb-8 md:order-2 md:mb-0">
              <SEOImage
                src="/images/stralkastare-fore-efter-polering-5.webp"
                alt="Komplett renoveringskit för strålkastare – sandpapper, polish, UV-skydd"
                caption="Allt du behöver för att renovera själv"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold text-primary">
              Fler bilder på kit och resultat
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <SEOImage
                src="/images/stralkastare-renovering-fore-och-etter-1.webp"
                alt="Renoveringskit för strålkastare – innehåll"
                caption="Renoveringskit – innehåll"
                width={600}
                height={600}
              />
              <SEOImage
                src="/images/bilstralkastare-renovering-fore-efter-6.webp"
                alt="Resultat efter renovering med Strålkastar Teknik ABs kit"
                caption="Resultat med vårt kit"
                width={600}
                height={600}
              />
              <SEOImage
                src="/images/stralkastare-renovering-fore-och-etter-7.webp"
                alt="Före och efter – strålkastare renoverade med professionellt kit"
                caption="Före och efter – egen renovering"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              Kontakta oss
            </h2>
            <p className="mb-8 text-gray-600">
              Intresserad av renovering eller vill beställa ett kit? Hör av dig
              så återkommer vi inom 24 timmar.
            </p>

            <div className="rounded-xl bg-white p-8 shadow-md">
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold">E-post</p>
                  <p className="text-gray-500">info@stralkastarteknik.se</p>
                </div>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p className="text-gray-500">070-XXX XX XX</p>
                </div>
                <div>
                  <p className="font-semibold">Öppettider</p>
                  <p className="text-gray-500">Mån–Fre: 08:00–17:00</p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 text-lg font-semibold text-primary">
                  Snabb offert
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Mejla oss din bilmodell och årsmodell så får du en offert
                  inom 24 timmar.
                </p>
                <Link
                  href="mailto:info@stralkastarteknik.se"
                  className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                >
                  info@stralkastarteknik.se
                </Link>
              </div>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>
                <strong>Strålkastar Teknik AB</strong> | Org. nr: XXX-XXXX
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
