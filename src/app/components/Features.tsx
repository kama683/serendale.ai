"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "120K TPS Speed",
    desc: "Unmatched throughput via AI-optimised Proof-of-Stake — 120,000 transactions per second without compromising security.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "AI-Based Security",
    desc: "ML threat detection on every node. Anomalies flagged and neutralised in real-time before they impact your assets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Smart Contracts",
    desc: "Deploy gas-efficient, audited contracts in minutes. Full EVM compatibility with Solidity and Rust SDK support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Proof of Stake",
    desc: "Energy-efficient consensus that rewards validators fairly. Earn staking yields directly from your wallet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v2m0 8v2M8 12H6m12 0h-2" />
      </svg>
    ),
  },
  {
    title: "Cross-Chain Bridge",
    desc: "Transfer assets between Ethereum, BSC, and Solana via our trustless zk-proof bridge.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
  },
  {
    title: "DAO Governance",
    desc: "Token holders shape the protocol. Submit proposals, vote on upgrades, allocate treasury funds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#0a0a0f]">

      <div aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] opacity-15 rounded-full"
        style={{ background: "radial-gradient(ellipse, #8593E8, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10">

        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#FC4FF6]">
            Why choose us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Built for the{" "}
            <span style={{
              background: "linear-gradient(90deg, #FC4FF6, #8593E8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Future
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ title, desc, icon }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl p-6 border border-white/[0.07]
                         hover:border-[#8593E8]/40 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(93,110,243,0.07), rgba(255,255,255,0.02))" }}
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4
                              text-[#8593E8] group-hover:text-[#FC4FF6] transition-colors"
                style={{ background: "rgba(133,147,232,0.12)" }}>
                {icon}
              </div>

              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{desc}</p>

              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at top right, rgba(252,79,246,0.12), transparent 60%)" }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}