"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const NAV = [
  { label: "Smart Contracts", href: "#" },
  { label: "Services",        href: "#services" },
  { label: "Solutions",       href: "#" },
  { label: "Roadmap",         href: "#" },
  { label: "Whitepaper",      href: "#" },
];




const SOCIALS = [
  { label: "GitHub",  href: "#", icon: "/icons/github.svg" },
  { label: "Discord", href: "#", icon: "/icons/discord.svg" },
  { label: "Reddit",  href: "#", icon: "/icons/reddit.svg" },
  { label: "Twitter", href: "#", icon: "/icons/twitter.svg" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">

        <Link href="/" className="text-sm font-bold tracking-[.2em] uppercase  px-3 py-1">
          AI Master
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map(({ label, href }) => (
            <Link key={label} href={href}
              className="text-sm text-white/60 hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
  {SOCIALS.map(({ label, href, icon }) => (
    <a key={label} href={href} aria-label={label} className="opacity-60 hover:opacity-100 transition-opacity">
      <img src={icon} alt={label} width={20} height={20} />
    </a>
  ))}
</div>

        <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-6 h-6">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-6 pb-5 bg-[#0a0a0f] border-t border-white/5 space-y-3">
          {NAV.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}
              className="block py-2 text-sm text-white/60 hover:text-white transition-colors">
              {label}
            </Link>
          ))}
          <div className="flex gap-4 pt-3 border-t border-white/5">
            {SOCIALS.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label} className="opacity-60 hover:opacity-100 transition-opacity">
                <Image src={icon} alt={label} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}