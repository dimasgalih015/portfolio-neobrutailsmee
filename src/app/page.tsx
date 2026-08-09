"use client";

import { useState } from "react";
import { 
  Camera, 
  FolderGit2, 
  ArrowUpRight, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Mail,
  X,
  ExternalLink,
  CheckCircle2,
  Layers
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null);

  const techStack = [
    "Laravel", "PHP", "Flutter", "Dart", "Next.js", "Tailwind CSS", "Python", "ESP32 / IoT", "Linux (Kubuntu)"
  ];

  const featuredProjects = [
    {
      num: "01",
      title: "CEMARA OUTDOOR POS",
      subtitle: "Sistem Kasir & Rental Alat Outdoor",
      desc: "Sistem Point of Sale (POS) berbasis Mobile (Flutter) & Web Admin (Laravel) untuk manajemen persewaan alat outdoor.",
      fullDesc: "Aplikasi Point of Sale (POS) mobile khusus manajemen transaksi sewa peralatan outdoor dan camping. Dilengkapi dengan pencatatan stok real-time, alur pengembalian barang sewa, perhitungan denda keterlambatan, laporan transaksi harian, serta arsitektur API yang terintegrasi.",
      tag: "THESIS / MOBILE APP",
      role: "Lead Mobile & Backend Developer",
      status: "Final Thesis Project",
      href: "https://github.com",
      tech: ["Flutter", "Laravel", "MySQL", "Dart"],
    },
    {
      num: "02",
      title: "ARACHORA PARFUM STORE",
      subtitle: "E-Commerce & Digital Catalog",
      desc: "Platform E-Commerce & Landing Page katalog produk parfum independen ARACHORA dengan tampilan modern, clean, dan profesional.",
      fullDesc: "Platform digital katalog e-commerce independen untuk brand ARACHORA. Dirancang dengan antarmuka yang mengutamakan kecepatan akses, estetika visual clean, manajemen katalog produk dinamis, serta sistem transaksi belanja yang responsif.",
      tag: "WEB APP / E-COMMERCE",
      role: "Full-Stack Web Developer",
      status: "Production / Live",
      href: "https://arachora.com",
      tech: ["PHP", "Laravel", "Tailwind CSS", "MySQL"],
    },
    {
      num: "03",
      title: "PEACE GESTURE BLUR & AUDIO TRIGGER",
      subtitle: "Deteksi Pose Gesture & Efek Blur Otomatis",
      desc: "Aplikasi pengolahan citra real-time yang mendeteksi pose gesture tangan 'peace' untuk memicu efek blur kamera dan pemutaran audio secara otomatis.",
      fullDesc: "Aplikasi interaktif berbasis Python & OpenCV/MediaPipe yang merespons pose gesture tangan 'peace' (V-sign) secara real-time. Ketika gesture terdeteksi dari webcam, sistem secara otomatis menerapkan efek blur pada tampilan video dan memicu pemutaran audio/musik pendukung.",
      tag: "PYTHON / COMPUTER VISION",
      role: "Python Developer",
      status: "Interactive Tool",
      href: "https://demo-gesture-blur.dev",
      tech: ["Python", "OpenCV", "MediaPipe", "Pygame"],
    },
  ];

  const creativeJournal = [
    {
      date: "04 AGU 2026",
      category: "PHOTOGRAPHY",
      title: "Dokumentasi Visual Lanskap Alam & Sudut Asri Pedesaan",
      desc: "Eksplorasi tone warna alam dan komposisi minimalis menggunakan alur kerja foto RAW & Lightroom.",
    },
    {
      date: "28 JUL 2026",
      category: "VIDEOGRAPHY",
      title: "Dokumentasi Event Sepeda 'Caffein Crank' di Ruang Jiwa",
      desc: "Video sinematik liputan kegiatan komunitaser dan atmosfer cafe melalui pendekatan puitis.",
    },
    {
      date: "15 JUL 2026",
      category: "DEVELOPMENT",
      title: "Arsitektur Aplikasi POS Mobile dengan Metodologi Agile",
      desc: "Catatan perancangan struktur aplikasi persewaan alat outdoor dari analisis kebutuhan hingga pengujian.",
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto pt-0 pb-12 px-2 sm:px-0 text-black">
      
      {/* Top Banner Tag */}
      <div className="bg-yellow-300 border-3 sm:border-4 border-black p-3 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="flex items-center gap-2 font-mono text-xs sm:text-base font-black uppercase">
          <Terminal size={18} className="sm:w-5 sm:h-5" />
          <span>PORTFOLIO // DAFTAR PROYEK & KARYA</span>
        </div>
        <span className="bg-black text-white px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[10px] sm:text-xs font-bold uppercase">
          FULLSTACK & CREATIVE
        </span>
      </div>

      {/* Hero Section */}
      <section className="grid grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Intro */}
        <div className="col-span-12 lg:col-span-7 border-4 border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
              BANJARNEGARA, INDONESIA
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-black">
              DIMAS GALIH <br />
              <span className="bg-emerald-300 px-2 border-2 border-black inline-block mt-1">SAMPURNA.</span>
            </h1>

            <p className="text-black font-semibold text-sm sm:text-base leading-relaxed border-l-4 border-black pl-4 py-1">
              Full-Stack Developer & Visual Creator. Fokus membangun sistem aplikasi web/mobile yang fungsional, arsitektur bersih, dan arsip cerita visual alam.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/proyek"
              className="inline-flex items-center gap-2 bg-black text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              Lihat Proyek
              <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:contact@dimasgalih.dev"
              className="inline-flex items-center gap-2 bg-yellow-300 text-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <Mail size={16} />
              Kontak
            </a>
          </div>
        </div>

        {/* Right Column: Profile Card / Stats */}
        <div className="col-span-12 lg:col-span-5 border-4 border-black bg-cyan-200 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase inline-block border border-black">
              // SPECIFICATION
            </div>

            <div className="space-y-2 font-mono text-xs font-bold">
              <div className="bg-white border-2 border-black p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex justify-between">
                <span>ROLE:</span>
                <span className="text-emerald-700">DEVELOPER & CREATIVE</span>
              </div>
              <div className="bg-white border-2 border-black p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex justify-between">
                <span>FOCUS:</span>
                <span>LARAVEL / FLUTTER / IOT</span>
              </div>
              <div className="bg-white border-2 border-black p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex justify-between">
                <span>ENV:</span>
                <span>LINUX (KUBUNTU)</span>
              </div>
              <div className="bg-white border-2 border-black p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex justify-between">
                <span>BRAND:</span>
                <span>LENSCAPES</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white border-2 border-black p-3 font-mono text-xs space-y-2">
            <span className="font-black uppercase border-b-2 border-black pb-1 block">TAUTAN KANAL</span>
            <div className="flex gap-2 pt-1">
              <a 
                href="https://github.com/dimasgalih015" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 bg-black text-white p-2 border border-black text-center font-bold hover:bg-yellow-300 hover:text-black flex items-center justify-center gap-1 font-mono text-xs transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GITHUB</span>
              </a>

              <a 
                href="https://instagram.com/heyy.dimzz" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 bg-black text-white p-2 border border-black text-center font-bold hover:bg-emerald-300 hover:text-black flex items-center justify-center gap-1 font-mono text-xs transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-3">
        <div className="flex items-center gap-2 font-mono text-xs font-black uppercase bg-black text-white px-2.5 py-1 inline-block">
          <Cpu size={14} />
          <span>TECH STACK & TOOLS</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="bg-yellow-200 border-2 border-black font-mono text-xs font-black px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects Section (Hanya 3 Proyek) */}
      <section id="projects" className="space-y-4">
        <div className="bg-black text-white p-3 font-mono text-sm font-black uppercase tracking-widest flex justify-between items-center border-2 border-black">
          <div className="flex items-center gap-2">
            <FolderGit2 size={16} />
            <span>// UTAMA & PROYEK TERPILIH</span>
          </div>
          <span>[03 PROYEK]</span>
        </div>

        {/* List 3 Proyek Utama */}
        <div className="grid grid-cols-1 gap-4">
          {featuredProjects.map((item) => (
            <div
              key={item.title}
              className="border-3 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-emerald-100 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-bold">
                  <span className="bg-black text-white px-2 py-0.5 border border-black">
                    {item.num}
                  </span>
                  <span className="bg-yellow-300 text-black px-2 py-0.5 border border-black uppercase">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-black text-black tracking-tight uppercase">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-slate-800 max-w-2xl leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tech.map((t) => (
                    <span key={t} className="bg-white border border-black text-[10px] font-mono font-bold px-2 py-0.5">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tombol DETAILS (Membuka Modal) */}
              <button
                onClick={() => setSelectedProject(item)}
                className="self-start md:self-center inline-flex items-center gap-2 font-mono text-xs font-bold bg-black text-white px-4 py-2.5 border border-black hover:bg-yellow-300 hover:text-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                <span>DETAILS</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Proyek Lainnya */}
        <div className="pt-2 text-center">
          <Link
            href="/proyek"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase tracking-wider bg-yellow-300 text-black px-6 py-3.5 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all"
          >
            <Layers size={16} />
            <span>LIHAT PROYEK LAINNYA</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Creative Journal Section */}
      <section className="space-y-4">
        <div className="bg-black text-white p-3 font-mono text-sm font-black uppercase tracking-widest flex justify-between items-center border-2 border-black">
          <div className="flex items-center gap-2">
            <Camera size={16} />
            <span>// CATATAN KREATIF & DOKUMENTASI</span>
          </div>
          <span>LENSCAPES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {creativeJournal.map((item) => (
            <div
              key={item.title}
              className="border-3 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-200 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b-2 border-black pb-2 font-mono text-[10px] font-bold">
                  <span className="bg-emerald-300 text-black px-1.5 py-0.5 border border-black">
                    {item.category}
                  </span>
                  <span className="text-black">{item.date}</span>
                </div>

                <h3 className="text-sm font-black text-black leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-slate-800 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <Link 
                href="/jurnal"
                className="pt-2 border-t-2 border-black flex justify-between items-center font-mono text-xs font-bold hover:text-emerald-700"
              >
                <span>BACA CATATAN</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Brutalism Box */}
      <footer className="border-4 border-black bg-yellow-300 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-3">
        <div className="bg-black text-white inline-block px-2 py-0.5 font-mono text-xs font-bold uppercase">
          WORK WITH ME
        </div>
        <p className="text-black text-xs sm:text-sm font-bold leading-relaxed max-w-2xl">
          Menerima kolaborasi untuk pengembangan aplikasi web/mobile, sistem integrasi hardware/IoT, serta produksi dokumentasi foto/video.
        </p>
        <div className="pt-2 font-mono text-xs font-black">
          © 2026 DIMAS GALIH SAMPURNA — ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* MODAL POP-UP DETAIL PROYEK */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black p-6 sm:p-8 max-w-xl w-full shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative space-y-5 animate-in fade-in zoom-in-95 duration-150 text-black">
            
            {/* Header Modal */}
            <div className="flex items-start justify-between border-b-4 border-black pb-3 gap-2">
              <div className="space-y-1">
                <span className="bg-yellow-300 text-black px-2 py-0.5 border border-black font-mono text-[10px] font-black uppercase">
                  {selectedProject.tag}
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black leading-tight pt-1">
                  {selectedProject.title}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="bg-black text-white p-1.5 border-2 border-black hover:bg-yellow-300 hover:text-black transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Subtitle & Full Description */}
            <div className="space-y-3">
              <p className="font-mono text-xs font-bold text-slate-700 bg-emerald-200/50 p-2 border-2 border-black">
                📌 {selectedProject.subtitle}
              </p>

              <div className="space-y-2 text-xs sm:text-sm font-medium text-slate-900 leading-relaxed border-l-4 border-black pl-3 py-1">
                <p>{selectedProject.fullDesc}</p>
              </div>
            </div>

            {/* Spec / Role Meta */}
            <div className="grid grid-cols-2 gap-2 font-mono text-[11px] font-bold">
              <div className="bg-cyan-100 p-2.5 border-2 border-black">
                <span className="text-slate-600 block text-[9px]">PERAN:</span>
                <span>{selectedProject.role}</span>
              </div>
              <div className="bg-yellow-100 p-2.5 border-2 border-black">
                <span className="text-slate-600 block text-[9px]">STATUS PROYEK:</span>
                <span>{selectedProject.status}</span>
              </div>
            </div>

            {/* Tech Stack List */}
            <div className="space-y-1.5 font-mono text-xs">
              <span className="font-black text-black uppercase block">// TECH STACK:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="bg-black text-white px-2 py-0.5 text-[10px] font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t-3 border-black flex justify-between items-center gap-3">
              <Link
                href="/proyek"
                className="font-mono text-xs font-bold text-slate-700 underline hover:text-black"
              >
                Lihat di halaman Proyek →
              </Link>

              <button
                onClick={() => setSelectedProject(null)}
                className="bg-black text-white font-mono text-xs font-black uppercase px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(253,224,71,1)] hover:bg-yellow-300 hover:text-black transition-all"
              >
                TUTUP
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}