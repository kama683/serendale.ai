"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Glow({
  color, size, style, className = "",
}: {
  color: string;
  size: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(ellipse at center, ${color} 0%, transparent 70%)`,
        filter: "blur(90px)",
        ...style,
      }}
    />
  );
}

function Orb({
  className, size, color, delay = 0,
}: {
  className: string; size: number; color: string; delay?: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size, height: size,
        background: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center pt-28 lg:pt-36 overflow-hidden bg-[#0a0a0f]"
    >
      <Glow color="#8593E8" size={900} className="opacity-20 top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Glow color="#5D6EF3" size={464} className="opacity-25 top-[50%] left-[3%]" />
      <Glow color="#a78bfa" size={467} className="opacity-18 top-[55%] left-1/2 -translate-x-1/2" />
      <Glow color="#FC4FF6" size={446} className="opacity-22 top-[50%] right-[3%]" />

      <Orb className="top-[13%] left-[8%]"  size={14} color="#FC4FF6" delay={0} />
      <Orb className="top-[22%] left-[37%]" size={10} color="#8593E8" delay={1} />
      <Orb className="top-[11%] right-[10%]" size={46} color="#5D6EF3" delay={0.5} />
      <Orb className="top-[30%] left-[16%]" size={8}  color="#FC4FF6" delay={2} />
      <Orb className="top-[18%] right-[28%]" size={12} color="#a78bfa" delay={1.5} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-extrabold uppercase leading-none tracking-tight"
        >
          <span
            className="block text-4xl sm:text-6xl lg:text-7xl xl:text-[82px]"
            style={{
              background: "linear-gradient(90deg, #FC4FF6 0%, #c084fc 45%, #8593E8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            THE BEST WEBSITE EVER
          </span>
          <span className="block text-white text-4xl sm:text-6xl lg:text-7xl xl:text-[82px] mt-1">
            Scalable.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-white/55 text-sm sm:text-base lg:text-lg max-w-md mx-auto leading-relaxed"
        >
          Our technology performing fast blockchain (120K TPS) and it has
          guaranteed AI-based data security. Proof of Stake, its consensus
          algorithm enables unlimited speeds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 flex items-center justify-center gap-4 flex-wrap"
        >
          <Link href="#"
            className="px-7 py-3 rounded-full border border-[#FC4FF6] text-sm font-medium
                       hover:bg-[#FC4FF6]/10 transition-all shadow-[0_0_20px_rgba(252,79,246,0.2)]">
            Get started
          </Link>
          <Link href="#"
            className="px-7 py-3 rounded-full border border-white/35 text-sm font-medium
                       hover:border-white/70 hover:bg-white/5 transition-all">
            Read more
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45 }}
        className="relative z-10 mt-10 w-full max-w-[1200px] mx-auto px-4"
      >
      
        <div className="relative">
         <Image
  src="/images/hero-robots.png"
  alt="AI robots"
  width={1300}
  height={650}
  priority
  className="w-full h-auto"
/>
          <div
            className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #0a0a0f)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}