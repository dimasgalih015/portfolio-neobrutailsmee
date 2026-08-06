"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Landmark, Mountain, ShoppingBag, Image as ImageIcon, MapPin, ArrowUpRight, Newspaper } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const bgImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1600&q=80",
  ];

  const [currentBg, setCurrentBg] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bgImages.length]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -40]);

  const highlights = [
    {
      num: "01",
      title: "Profil & Sejarah",
      desc: "Sejarah singkat, rekam jejak wilayah, dan struktur pemerintahan.",
      icon: Landmark,
      href: "/profil",
    },
    {
      num: "02",
      title: "Wilayah & Suasana",
      desc: "Keasrian lanskap perbukitan di Susukan, Banjarnegara.",
      icon: Mountain,
      href: "/profil",
    },
    {
      num: "03",
      title: "Potensi Lokal",
      desc: "Geliat produk kerajinan dan UMKM warga.",
      icon: ShoppingBag,
      href: "/potensi",
    },
    {
      num: "04",
      title: "Galeri Visual",
      desc: "Arsip dokumentasi dan sudut estetis desa.",
      icon: ImageIcon,
      href: "/galeri",
    },
    {
      num: "05",
      title: "Peta & Lokasi",
      desc: "Letak geografis dan petunjuk arah wilayah.",
      icon: MapPin,
      href: "/profil",
    },
  ];

  const newsList = [
    {
      date: "04 AGU 2026",
      category: "Kegiatan Warga",
      title: "Gotong Royong Perapihan Jalur Lingkungan dan Sudut Hijau Desa",
      desc: "Inisiatif penataan kawasan asri bersama warga untuk menjaga kebersihan dan estetika pemukiman.",
      href: "/berita/gotong-royong-lingkungan",
    },
    {
      date: "28 JUL 2026",
      category: "Ekonomi Lokal",
      title: "Pendataan Potensi UMKM Kerajinan Bambu Warga Derik",
      desc: "Langkah awal pengarsipan produk lokal untuk memperluas jangkauan pemasaran secara digital.",
      href: "/berita/pendataan-umkm-bambu",
    },
    {
      date: "15 JUL 2026",
      category: "Pemerintahan",
      title: "Pembaruan Portal Digital Publikasi dan Dokumentasi Wilayah",
      desc: "Peluncuran ruang informasi independen guna mempermudah akses cerita dan lanskap Desa Derik.",
      href: "/berita/pembaruan-portal-digital",
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 max-w-5xl mx-auto pt-2 md:pt-8 overflow-x-hidden">
      
      {/* Hero Section */}
      <div ref={heroRef}>
        <motion.section 
          style={{ opacity: heroOpacity, y: heroY }}
          className="grid grid-cols-12 gap-4 md:gap-8 items-center"
        >
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-7 sm:col-span-6 space-y-3 md:space-y-6 text-left"
          >
            <p className="text-[10px] sm:text-xs font-mono tracking-widest text-emerald-600 uppercase">
              Susukan / Banjarnegara
            </p>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-slate-900 tracking-tight leading-[1.15]">
              Menjelajahi Sudut Asri <br />
              <span className="font-semibold text-slate-950">Desa Derik.</span>
            </h1>

            <p className="text-slate-500 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-md">
              Inisiatif digital independen untuk mengarsipkan lanskap alam, ruang cerita warga, dan potensi lokal secara terbuka.
            </p>

            <div className="pt-1 md:pt-2">
              <Link
                href="/profil"
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
              >
                Mulai Eksplorasi
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Canvas Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="col-span-5 sm:col-span-6 relative w-full aspect-[3/4] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/60"
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentBg}
                initial={{ y: "100%", opacity: 0, scale: 0.95 }}
                animate={{ y: "0%", opacity: 1, scale: 1 }}
                exit={{ y: "-100%", opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 1.0, 
                  ease: [0.76, 0, 0.24, 1] 
                }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImages[currentBg]})` }}
              />
            </AnimatePresence>

            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono border border-white/10">
              <span>0{currentBg + 1}/0{bgImages.length}</span>
              <div className="flex gap-1">
                {bgImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentBg(idx)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      currentBg === idx ? "w-3 sm:w-4 bg-emerald-400" : "w-1 bg-white/30"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* Editorial List Section: Katalog Ringkas (Animasi Berselang Kanan & Kiri) */}
      <section className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="flex justify-between items-baseline pb-2 border-b border-slate-200"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Katalog Ringkas
          </span>
          <span className="text-xs text-slate-400">0{highlights.length} Entri</span>
        </motion.div>

        <div className="divide-y divide-slate-100">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            // Indeks genap (0, 2, 4 -> No 01, 03, 05) masuk dari KANAN (+40)
            // Indeks ganjil (1, 3 -> No 02, 04) masuk dari KIRI (-40)
            const isEvenIndex = index % 2 === 0;
            const xInitial = isEvenIndex ? 40 : -40;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: xInitial }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <Link
                  href={item.href}
                  className="group py-4 sm:py-5 flex items-center justify-between hover:px-3 rounded-xl hover:bg-slate-100/60 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 sm:gap-8">
                    <span className="text-xs font-mono text-slate-300 group-hover:text-slate-900 transition-colors">
                      {item.num}
                    </span>
                    <div className="space-y-0.5">
                      <h3 className="text-xs sm:text-sm font-semibold text-slate-900 flex items-center gap-2">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-light">{item.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300 group-hover:text-slate-900 transition-colors">
                    <Icon size={16} className="hidden sm:block" />
                    <ArrowUpRight size={14} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section Terbaru: Berita & Kabar Desa */}
      <section className="space-y-6 pt-4">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="flex justify-between items-baseline pb-2 border-b border-slate-200"
        >
          <div className="flex items-center gap-2">
            <Newspaper size={14} className="text-slate-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Kabar & Catatan Desa
            </span>
          </div>
          <span className="text-xs text-slate-400">Arsip Berita</span>
        </motion.div>

        <div className="divide-y divide-slate-100">
          {newsList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.45, 
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <Link
                href={item.href}
                className="group py-5 block hover:px-3 rounded-xl hover:bg-slate-100/60 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono">
                      <span className="text-emerald-600 font-medium">{item.category}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-400">{item.date}</span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="self-end sm:self-center flex items-center gap-1 text-[11px] font-mono text-slate-400 group-hover:text-slate-900 transition-colors">
                    <span>Baca</span>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Minimalist Note */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="pt-6 sm:pt-8 border-t border-slate-200/80 space-y-2"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
          Tentang Inisiatif
        </span>
        <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
          Terletak di perbukitan Susukan, Banjarnegara, Desa Derik memiliki suasana asri yang terjaga. Situs ini dibuat sebagai jurnal visual independen untuk mendokumentasikan sudut desa secara bersih dan terbuka.
        </p>
      </motion.section>

    </div>
  );
}