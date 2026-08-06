"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight, ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  // Deteksi posisi guliran layar
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Jika digulir ke bawah melebihi 50px, sembunyikan navbar
    if (latest > 50) {
      setHidden(true);
      setIsOpen(false); // Tutup menu mobile jika sedang terbuka saat scroll
    } else {
      // Hanya muncul kembali saat berada di paling atas halaman (<= 10px)
      setHidden(false);
    }
  });

  // Fungsi untuk kembali ke paling atas layar
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil", href: "/profil" },
    { name: "Potensi", href: "/potensi" },
    { name: "Galeri", href: "/galeri" },
  ];

  return (
    <>
      {/* Header / Navbar utama */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      >
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl px-5 py-3 flex justify-between items-center shadow-sm">
          
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
            <span className="font-semibold text-slate-900 tracking-tight text-sm font-mono uppercase">
              Derik.
            </span>
          </Link>

          {/* Desktop Menu Minimalis */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Link Minimalis */}
          <div className="hidden md:block">
            <Link
              href="/profil"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-emerald-600 transition-colors"
            >
              Eksplorasi
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden max-w-5xl mx-auto mt-2 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-lg flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-mono text-xs uppercase tracking-wider p-3 rounded-xl transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={12} className="text-slate-400" />
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* FAB (Floating Action Button) Scroll-to-Top di Kanan Bawah */}
      <AnimatePresence>
        {hidden && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="fixed bottom-6 right-6 z-50 p-3.5 bg-slate-900/90 hover:bg-slate-950 text-white rounded-full shadow-md backdrop-blur-md border border-white/10 transition-colors focus:outline-none group"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}