"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ArrowUp, Code } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();

  // Pantau posisi scroll untuk menampilkan FAB hanya saat halaman digulir ke bawah
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

const navLinks = [
  { name: "BERANDA", href: "/" },
  { name: "PROYEK", href: "/proyek" }, // Mengarah ke /proyek
  { name: "TENTANG", href: "/tentang" },
  { name: "JURNAL", href: "/jurnal" },
];

  return (
    <>
      {/* Header / Navbar Utama */}
      <header className="sticky top-0 left-0 right-0 z-50 px-2 sm:px-4 py-3 bg-white border-b-4 border-black">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          
          {/* Brand Logo Box */}
          <Link 
            href="/" 
            className="flex items-center gap-2 bg-emerald-300 border-2 border-black px-3 py-1.5 font-mono font-black text-sm uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
          >
            <Code size={16} />
            <span>D.GALIH</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-mono text-xs font-bold uppercase tracking-wider px-3 py-1.5 border-2 transition-all ${
                    isActive 
                      ? "bg-yellow-300 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
                      : "border-transparent text-black hover:border-black hover:bg-yellow-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Link Button */}
          <div className="hidden md:block">
            <a
              href="mailto:contact@dimasgalih.dev"
              className="inline-flex items-center gap-1.5 bg-black text-white font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(253,224,71,1)] hover:bg-yellow-300 hover:text-black transition-all"
            >
              <span>HUBUNGI</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden max-w-5xl mx-auto mt-3 bg-cyan-200 border-3 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="bg-white border-2 border-black font-mono text-xs font-black uppercase tracking-wider p-3 hover:bg-black hover:text-white transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* FAB (Floating Action Button) Scroll-to-Top (Hanya muncul jika scroll > 200px) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="fixed bottom-5 right-5 z-50 p-3 bg-emerald-300 text-black border-3 border-black font-mono font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all focus:outline-none"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}