import Link from 'next/link'
import SEOImage from '@/components/SEOImage'

export const metadata = {
  title: 'Polera strålkastare – Professionell renovering & gör-det-själv-kit | Strålkastar Teknik AB',
  description:
    'Strålkastar Teknik AB – renoverar dina bilstrålkastare eller säljer kompletta renoveringskit. Boka tid eller köp kit för att polera strålkastare själv.',
  openGraph: {
    title: 'Polera strålkastare – Professionell renovering & gör-det-själv-kit',
    description:
      'Strålkastar Teknik AB – renoverar dina bilstrålkastare eller säljer kompletta renoveringskit.',
  },
}

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-blue-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Få nya strålkastare – utan att byta ut dem
            </h1>
            <p className="mb-4 text-lg text-gray-200 sm:text-xl">
              <strong>Strålkastar Teknik AB</strong> – vi renoverar dina strålkastare
              professionellt, eller säljer kompletta kit så du kan göra det själv.
            </p>
            <p className="mb-8 text-gray-300">
              Från 995 kr per strålkastare – garanterat resultat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/guide#tjanst"
                className="rounded-lg bg-secondary px-8 py-3 font-semibold text-black transition hover:bg-yellow-400"
              >
                Boka professionell renovering
              </Link>
              <Link
                href="/guide#produkter"
                className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-primary"
              >
                Köp renoveringskit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="items-center gap-12 md:grid md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
                Professionell strålkastar-renovering
              </h2>
              <p className="mb-4 text-gray-600">
                Lämna in bilen och få dina strålkastare som nya på några timmar.
                Vi slipar, polerar och applicerar UV-skydd med professionella
                metoder och maskiner.
              </p>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Slipning & polering med proffsutrustning
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  UV-skyddande lack – håller i 2–5 år
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Pris från 995 kr per strålkastare
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Garanterat resultat – eller pengarna tillbaka
                </li>
              </ul>
              <Link
                href="/guide#tjanst"
                className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Boka tid &darr;
              </Link>
            </div>
            <div className="order-1 mb-8 md:order-2 md:mb-0">
              <SEOImage
                src="/images/stralkastare-renovering-resultat-3.webp"
                alt="Professionell renovering av bilstrålkastare – före och efter"
                caption="Renovering utförd av Strålkastar Teknik AB"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="items-center gap-12 md:grid md:grid-cols-2">
            <div className="mb-8 md:mb-0">
              <SEOImage
                src="/images/stralkastare-fore-efter-polering-5.webp"
                alt="Komplett renoveringskit för strålkastare – gör det själv"
                caption="Komplett renoveringskit – allt du behöver"
                width={600}
                height={600}
              />
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
                Gör det själv – köp vårt renoveringskit
              </h2>
              <p className="mb-4 text-gray-600">
                Vill du hellre göra jobbet själv? Vårt kompletta renoveringskit
                innehåller allt du behöver för att polera dina strålkastare hemma
                – med samma professionella produkter som vi använder.
              </p>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Sandpapper P400–P3000 (våtslip)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Plastpolish & polertrassa
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  UV-skyddande clear coat
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">✓</span>
                  Steg-för-steg instruktioner
                </li>
              </ul>
              <p className="mb-4 text-2xl font-bold text-primary">
                499 kr
              </p>
              <Link
                href="/guide#produkter"
                className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Köp kit &darr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:text-4xl">
            Varför välja Strålkastar Teknik AB?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Vi är specialister på strålkastar-renovering med beprövade metoder
            och produkter av högsta kvalitet.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary">Bättre sikt i mörker</h3>
              <p className="text-gray-600">
                Renoverade strålkastare kan förbättra ljusutbytet med upp till 70 %.
                Du ser vägen, hindren och skyltarna mycket tidigare.
              </p>
            </article>

            <article className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary">Godkänd bilbesiktning</h3>
              <p className="text-gray-600">
                Matta och gulnade strålkastare är en vanlig anledning till anmärkning
                vid besiktning. Vår renovering garanterar godkänt resultat.
              </p>
            </article>

            <article className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-primary">Ökat bilvärde</h3>
              <p className="text-gray-600">
                Vid försäljning gör rena och klara strålkastare ett mycket bättre intryck.
                En av de billigaste åtgärderna för att höja bilens yttre skick.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:text-4xl">
            Före och efter – renovering av strålkastare på olika bilar
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Se resultatet från riktiga renoveringar. Oavsett bilmodell blir
            resultatet imponerande.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SEOImage
              src="/images/stralkastare-renovering-fore-och-etter-1.webp"
              alt="Renovering av strålkastare på bil – före och efter polering"
              caption="Strålkastar-renovering resultat"
              width={600}
              height={600}
            />
            <SEOImage
              src="/images/stralkastare-polering-fore-och-etter-2.webp"
              alt="Polering av bilstrålkastare – före och efter bild"
              caption="Polering av strålkastare – före/efter"
              width={600}
              height={600}
            />
            <SEOImage
              src="/images/stralkastare-gulnad-fore-och-etter-4.webp"
              alt="Gulnad strålkastare före och efter renovering"
              caption="Gulnad strålkastare – renoverad"
              width={600}
              height={600}
            />
            <SEOImage
              src="/images/stralkastare-fore-efter-polering-5.webp"
              alt="Resultat efter att ha polerat strålkastare på bil"
              caption="Resultat efter strålkastar-polering"
              width={600}
              height={600}
            />
            <SEOImage
              src="/images/bilstralkastare-renovering-fore-efter-6.webp"
              alt="Bild på bilstrålkastare före och efter renovering"
              caption="Före och efter – bilstrålkastare"
              width={600}
              height={600}
            />
            <SEOImage
              src="/images/stralkastare-renovering-fore-och-etter-7.webp"
              alt="Renoverade strålkastare – före och efter resultat"
              caption="Renoverade strålkastare – före/efter"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-center text-3xl font-bold text-primary sm:text-4xl">
              Vanliga frågor
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <article className="rounded-lg border p-5">
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Hur länge håller en strålkastar-renovering?
              </h3>
              <p className="text-gray-600">
                Med vårt UV-skyddande lack håller renoveringen i 2–5 år.
                Hos oss ingår UV-skydd i alla renoveringar och kit.
              </p>
            </article>

            <article className="rounded-lg border p-5">
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Kan jag renovera själv med ert kit?
              </h3>
              <p className="text-gray-600">
                Ja, vårt kit är designat för gör-det-själv och innehåller allt
                du behöver samt tydliga instruktioner. Resultatet blir
                professionellt om du följer stegen.
              </p>
            </article>

            <article className="rounded-lg border p-5">
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Vad kostar det att ni renoverar mina strålkastare?
              </h3>
              <p className="text-gray-600">
                Priset är från 995 kr per strålkastare. Kontakta oss för en
                offert anpassad efter din bilmodell och strålkastarnas skick.
              </p>
            </article>

            <article className="rounded-lg border p-5">
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Hur vet jag om mina strålkastare behöver renoveras?
              </h3>
              <p className="text-gray-600">
                Om strålkastarna ser gula, grumliga eller matta ut, och om ljuset
                känns svagare när du kör i mörker – då är det dags att renovera.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-3xl font-bold">Redo att få nya strålkastare?</h2>
          <p className="mb-6 text-lg text-gray-200">
            Boka professionell renovering eller köp vårt gör-det-själv-kit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guide#tjanst"
              className="rounded-lg bg-secondary px-8 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              Boka renovering
            </Link>
            <Link
              href="/guide#produkter"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              Köp kit för 499 kr
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
