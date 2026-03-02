import Link from "next/link";

const LINKS = {
  Product: [
    ["Smart Contracts", "#"],
    ["Services", "#services"],
    ["Solutions", "#"],
    ["Roadmap", "#"],
  ],
  Developers: [
    ["Whitepaper", "#"],
    ["Documentation", "#"],
    ["Bug Bounty", "#"],
    ["GitHub", "https://github.com"],
  ],
  Community: [
    ["Discord", "https://discord.com"],
    ["Twitter", "https://twitter.com"],
    ["Reddit", "https://reddit.com"],
    ["Blog", "#"],
  ],
} as const;


const SOCIALS = [
  { label: "GitHub", href: "https://github.com", icon: "/icons/github.svg" },
  { label: "Discord", href: "https://discord.com", icon: "/icons/discord.svg" },
  { label: "Reddit", href: "https://reddit.com", icon: "/icons/reddit.svg" },
  { label: "Twitter", href: "https://twitter.com", icon: "/icons/twitter.svg" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-[#0a0a0f] pt-16 pb-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-[400px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #8593E8, #FC4FF6, #8593E8, transparent)",
          opacity: 0.5,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="inline-block text-sm font-bold tracking-[.2em] uppercase  px-3 py-1 mb-4"
            >
              serendale.ai
            </Link>
            <p className="text-white/35 text-sm leading-relaxed max-w-[220px]">
              AI-powered blockchain platform delivering 120K TPS with
              uncompromising security.
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="opacity-40 hover:opacity-90 transition-opacity"
                >
                  <img src={icon} alt={label} width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {(
            Object.entries(LINKS) as unknown as [string, [string, string][]][]
          ).map(([col, items]) => (
            <div key={col}>
              <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">
                {col}
              </h3>
              <ul className="space-y-3">
                {items.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/35 hover:text-white text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </div>
    </footer>
  );
}
