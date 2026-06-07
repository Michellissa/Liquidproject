import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary">404</h1>
        <p className="mb-6 text-gray-600">Sidan kunde inte hittas.</p>
        <Link href="/" className="text-accent underline hover:text-blue-700">
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  )
}
