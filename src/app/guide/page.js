import Link from 'next/link'
import SEOImage from '@/components/SEOImage'

export const metadata = {
  title: 'Guide – Polera strålkastare steg för steg | Gör det själv',
  description:
    'Lär dig renovera bilstrålkastare hemma. Komplett steg-för-steg-guide med verktyg, produkter och tips för att polera strålkastare som ett proffs.',
  openGraph: {
    title: 'Guide – Polera strålkastare steg för steg | Gör det själv',
    description:
      'Lär dig renovera bilstrålkastare hemma. Komplett steg-för-steg-guide med verktyg, produkter och tips.',
  },
}

const steps = [
  {
    number: 1,
    title: 'Tvätta och maskera bilen',
    text: 'Börja med att tvätta strålkastarna noggrant med bilschampo och vatten. Torka torrt. Använd maskeringstejp för att skydda lacken runt strålkastarna. Täck även stötfångaren och motorhuven intill strålkastarna så att du inte får sliprepor på lacken.',
  },
  {
    number: 2,
    title: 'Våtslipa med grovt sandpapper',
    text: 'Börja med ett grovt sandpapper (P400–P600) för att ta bort det oxiderade plastlagret. Blöt sandpappret och strålkastaren med vatten så att slipningen blir jämn och du inte överhettar plasten. Slipa i korsdrag för att få en jämn yta. Torka av och känn med fingret – ytan ska kännas helt matt och jämn.',
  },
  {
    number: 3,
    title: 'Finslipa med finare sandpapper',
    text: 'Gå vidare till P800 och slipa på samma sätt. Fortsätt sedan med P1200 och avsluta med P2000–P3000 för att få ytan slätare för varje steg. Mellan varje steg, torka av ytan och kontrollera att alla repor från föregående steg är borta.',
  },
  {
    number: 4,
    title: 'Polera med polermaskin eller för hand',
    text: 'Applicera en plastpolish på en polertrassa eller en polermaskin med skumrondell. Polera strålkastaren i cirkulära rörelser tills ytan blir blank och klar. Om du använder en polermaskin, kör på låg till medelhög hastighet för att inte bränna plasten. Upprepa vid behov.',
  },
  {
    number: 5,
    title: 'Applicera UV-skydd',
    text: 'Detta är det viktigaste steget! Utan UV-skydd kommer strålkastarna att gulna igen inom några månader. Applicera ett UV-skyddande lack eller clear coat som är speciellt framtaget för strålkastare. Låt torka enligt tillverkarens anvisningar (oftast 12–24 timmar).',
  },
  {
    number: 6,
    title: 'Ta bort maskeringen',
    text: 'När UV-skyddet har torkat tar du försiktigt bort maskeringstejpen. Inspektera resultatet – dina strålkastare ska nu vara klara, blanka och som nya. Tänd halvljuset och beundra skillnaden!',
  },
]

export default function GuidePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-blue-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              Guide: Polera strålkastare – Steg för steg
            </h1>
            <p className="mb-4 text-lg text-gray-200 sm:text-xl">
              Så här <strong>renoverar du strålkastare bil</strong> med garanterat
              professionellt resultat. Följ dessa sex steg så får du strålkastare
              som nya – och de håller i flera år.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="mb-3 text-3xl font-bold text-primary sm:text-4xl">
              Verktyg och material du behöver
            </h2>
            <ul className="grid gap-2 text-gray-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">&bull;</span>
                Sandpapper: P400, P800, P1200, P2000, P3000 (våtslippapper)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">&bull;</span>
                Vattenflaska för våtslipning
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">&bull;</span>
                Maskeringstejp
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">&bull;</span>
                Bilschampo och mikrofiberduk
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">&bull;</span>
                Plastpolish (t.ex. Meguiars PlastX eller 3M)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">&bull;</span>
                Polermaskin (valfritt – går bra för hand)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">&bull;</span>
                UV-skyddande lack eller clear coat
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">&bull;</span>
                Skumrondell och polertrassa
              </li>
            </ul>
          </div>

          <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">
            Steg-för-steg: Så här <strong>polerar du strålkastare</strong>
          </h2>

          <div className="space-y-10">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-xl border bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-black">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="items-center gap-12 md:grid md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
                Tips för bästa resultat
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">&bull;</span>
                  Arbeta i skuggan – direkt solljus torkar produkterna för snabbt.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">&bull;</span>
                  Håll strålkastaren blöt under slipningen för bästa resultat.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">&bull;</span>
                  Ta god tid på dig – stress ger dåligt resultat.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">&bull;</span>
                  Applicera UV-skyddet i ett tunt och jämnt lager.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-secondary">&bull;</span>
                  Låt UV-skyddet härda ordentligt innan du kör bilen i regn.
                </li>
              </ul>
            </div>

            <div className="mt-8 md:mt-0">
              <SEOImage
                src="/images/polera-stralkastare-guide.jpg"
                alt="Verktyg för att polera strålkastare – sandpapper, polish och UV-skydd"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            Redo att <strong>renovera strålkastare bil</strong>?
          </h2>
          <p className="mb-6 text-gray-600">
            Med rätt produkter och tålamod kan vem som helst få strålkastarna som nya.
            Börja med att handla ett komplett renoveringskit idag!
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Tillbaka till startsidan
          </Link>
        </div>
      </section>
    </>
  )
}
