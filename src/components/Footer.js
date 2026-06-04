import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Om oss</h3>
            <p className="text-sm text-gray-300">
              Vi hjälper bilägare att återställa sina strålkastare till nyskick med
              beprövade metoder och professionella produkter.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Snabblänkar</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">Hem</Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-white">Guide – Polera strålkastare steg för steg</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Kontakt</h3>
            <p className="text-sm text-gray-300">
              info@polerastralkastare.se
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          &copy; {currentYear} PoleraStralkastare.se. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  )
}
