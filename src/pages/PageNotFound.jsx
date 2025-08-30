import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

// Neon green color
const NEON = "#83de73ff"; // fluorescent green

export default function PageNotFound() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center p-6">
      {/* subtle vignette */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(80%_60%_at_50%_50%,rgba(57,255,20,0.12),transparent_60%)]" />

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-3xl"
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur p-10 md:p-12 shadow-2xl">
          {/* Glow ring */}
          <div className="pointer-events-none absolute -inset-px rounded-2xl" style={{ boxShadow: `0 0 80px ${NEON}22, 0 0 20px ${NEON}22 inset` }} />

          <div className="flex flex-col items-center text-center gap-6">
            <motion.div
              initial={{ textShadow: `0 0 0 bg-lime-400` }}
              animate={{ textShadow: [`0 0 12px bg-lime-400`, `0 0 22px bg-lime-400`] }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.6 }}
              className="font-black tracking-tighter"
            >
              <div className="text-7xl md:text-8xl leading-none select-none">
                <span className="text-white/90">4</span>
                <span style={{ color: NEON }}>0</span>
                <span className="text-white/90">4</span>
              </div>
            </motion.div>

            <h1 className="text-2xl md:text-3xl font-semibold">
              <span className="text-white">Page</span>{" "}
              <span style={{ color: NEON }}>not found</span>
            </h1>

            <p className="max-w-prose text-white/70">
              The page you’re looking for doesn’t exist or was moved.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-medium border border-white/10 bg-neutral-900 hover:bg-neutral-800 transition-all shadow-lg"
                style={{ boxShadow: `0 0 18px ${NEON}33` }}
              >
                <Home className="h-5 w-5" />
                <span style={{ color: NEON }}>Go Home</span>
              </a>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-medium border border-white/10 hover:border-white/20 bg-transparent hover:bg-white/5 transition-all"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-white">Go Back</span>
              </button>
            </div>
          </div>

          {/* scanline + noise overlays */}
          <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "100% 3px" }} />
          <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.35\"/></svg>`)}')` }} />
        </div>

        {/* floating neon accents */}
        <motion.div
          className="absolute -top-8 -left-8 h-24 w-24 rounded-full blur-2xl"
          style={{ background: NEON, opacity: 0.25 }}
          animate={{ y: [0, -6, 0], x: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full blur-2xl"
          style={{ background: NEON, opacity: 0.2 }}
          animate={{ y: [0, 8, 0], x: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.main>

      {/* optional inline styles to improve font rendering on dark */}
      <style>{`
        html, body, #root { height: 100%; background: #000; }
      `}</style>
    </div>
  );
}

 