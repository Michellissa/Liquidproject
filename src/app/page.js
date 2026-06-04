import Link from 'next/link'
import SEOImage from '@/components/SEOImage'

export const metadata = {
  title: 'Polera strålkastare – Renovera matta strålkastare på bilen',
  description:
    'Komplett guide för att polera och renovera bilstrålkastare. Upptäck bästa metoderna för att åtgärda matta strålkastare och få dem som nya igen.',
  openGraph: {
    title: 'Polera strålkastare – Renovera matta strålkastare på bilen',
    description:
      'Komplett guide för att polera och renovera bilstrålkastare. Upptäck bästa metoderna för att åtgärda matta strålkastare.',
  },
}

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-blue-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Polera strålkastare – återställ ljuset på din bil
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-200 sm:text-xl">
              Matta och gulnade strålkastare är inte bara fula – de försämrar sikten
              och kan leda till underkänd bilbesiktning. Här får du veta exakt hur du
              <strong> polerar och renoverar dina bilstrålkastare </strong>
              med professionella resultat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/guide"
                className="rounded-lg bg-secondary px-8 py-3 font-semibold text-black transition hover:bg-yellow-400"
              >
                Se kompletta guiden
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:text-4xl">
            Varför ska du polera dina strålkastare?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Med tiden blir strålkastare matta på grund av UV-strålning, vägsalt och
            smuts. Att <strong>renovera strålkastare bil</strong> är ett enkelt sätt att
            få dem att lysa som nya.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary">Bättre sikt i mörker</h3>
              <p className="text-gray-600">
                Nya eller polerade strålkastare kan förbättra ljusutbytet med upp till 70 %.
                Du ser vägen, hindren och skyltarna mycket tidigare.
              </p>
            </article>

            <article className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary">Godkänd bilbesiktning</h3>
              <p className="text-gray-600">
                Matta och gulnade strålkastare är en vanlig anledning till anmärkning
                vid besiktning. Att <strong>polera strålkastare</strong> är ett billigt sätt att slippa
                efterkontroll.
              </p>
            </article>

            <article className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary">Ökat bilvärde</h3>
              <p className="text-gray-600">
                Vid försäljning gör rena och klara strålkastare ett mycket bättre intryck.
                Det är en av de billigaste åtgärderna för att höja bilens yttre skick.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="items-center gap-12 md:grid md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
                Vad är matta strålkastare åtgärd?
              </h2>
              <p className="mb-4 text-gray-600">
                De allra flesta moderna strålkastare är tillverkade av polykarbonatplast.
                  Med tiden oxiderar plastens ytskikt och blir matt. Lösningen är att
                <strong>renovera strålkastare</strong> genom att slipa bort det oxiderade lagret
                och sedan applicera ett UV-skyddande lack eller en clear coat.
              </p>
              <p className="mb-4 text-gray-600">
                Många bilägare väljer att <strong>polera strålkastare bil</strong> själva med
                ett renoveringskit, medan andra lämnar in bilen till en verkstad som
                specialiserar sig på strålkastar-renovering.
              </p>
              <p className="text-gray-600">
                Oavsett metod är resultatet oftast imponerande – dina strålkastare ser
                ut som nya och ljuset blir betydligt starkare och jämnare.
              </p>
            </div>

            <div className="mt-8 md:mt-0">
              <SEOImage
                src="/images/headlight-before-after.jpg"
                alt="Före och efter bild på polerade bilstrålkastare – renovering av matta strålkastare"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary sm:text-4xl">
            Vanliga frågor om att polera strålkastare
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <article className="rounded-lg border p-5">
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Hur länge håller en strålkastar-renovering?
              </h3>
              <p className="text-gray-600">
                Med rätt UV-skydd och bra produkter kan en renovering hålla i 2–5 år.
                  Det viktigaste är att applicera ett UV-skyddande lack efter poleringen.
              </p>
            </article>

            <article className="rounded-lg border p-5">
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Kan jag polera strålkastare själv?
              </h3>
              <p className="text-gray-600">
                Ja, absolut. Med rätt verktyg och ett bra renoveringskit kan du
                <strong>renovera strålkastare bil</strong> hemma på en eftermiddag. Läs vår
                <Link href="/guide" className="text-accent underline hover:text-blue-700">
                  &nbsp;steg-för-steg-guide&nbsp;
                </Link>
                för att komma igång.
              </p>
            </article>

            <article className="rounded-lg border p-5">
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Vad kostar det att polera strålkastare?
              </h3>
              <p className="text-gray-600">
                Ett renoveringskit kostar 200–500 kr och räcker till båda strålkastarna.
                Lämnar du in bilen på en verkstad kan priset ligga på 800–2000 kr.
              </p>
            </article>

            <article className="rounded-lg border p-5">
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Hur vet jag om mina strålkastare behöver poleras?
              </h3>
              <p className="text-gray-600">
                Om strålkastarna ser gula, grumliga eller matta ut, och om ljuset
                känns svagare när du kör i mörker, är det dags att
                <strong>polera strålkastare</strong>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-3xl font-bold">Redo att polera dina strålkastare?</h2>
          <p className="mb-6 text-lg text-gray-200">
            Följ vår detaljerade guide och gör ett professionellt jobb hemma.
          </p>
          <Link
            href="/guide"
            className="inline-block rounded-lg bg-secondary px-8 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            Till guiden – polera strålkastare steg för steg
          </Link>
        </div>
      </section>
    </>
  )
}
