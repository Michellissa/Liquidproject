'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Hem' },
  { href: '/guide', label: 'Tjänster & produkter' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-primary">
          Strålkastar Teknik AB
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-gray-600 hover:text-gray-900 md:hidden"
          aria-label="Öppna meny"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className={`gap-6 md:flex ${menuOpen ? 'absolute left-0 top-16 w-full bg-white p-4 shadow-md md:static md:w-auto md:p-0 md:shadow-none' : 'hidden md:flex'}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary md:py-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
