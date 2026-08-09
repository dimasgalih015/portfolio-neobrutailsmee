"use client";

import { useState } from "react";
import { 
  FolderGit2, 
  ExternalLink, 
  Layers,
  X,
  Clock,
  Construction
} from "lucide-react";

export default function ProyekPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const categories = ["SEMUA", "MOBILE APP", "WEB SYSTEM", "IOT & HARDWARE"];

  const projects = [
    {
      id: "cemara-outdoor-pos",
      title: "CEMARA OUTDOOR - POS MOBILE SYSTEM",
      subtitle: "Sistem Kasir & Rental Alat Outdoor",
      category: "MOBILE APP",
      tech: ["Flutter", "Dart", "Laravel API", "SQLite"],
      desc: "Aplikasi Point of Sale (POS) mobile khusus manajemen transaksi sewa peralatan camping dan outdoor. Dilengkapi pencatatan stok, alur pengembalian barang, dan laporan keuangan.",
      badgeColor: "bg-yellow-300",
      githubUrl: "comingsoon",
      demoUrl: "comingsoon",
    },
    {
      id: "arachora-parfum-store",
      title: "ARACHORA PARFUM STORE",
      subtitle: "E-Commerce & Digital Catalog",
      category: "WEB SYSTEM",
      tech: ["PHP", "Laravel", "Tailwind CSS", "MySQL"],
      desc: "Platform E-Commerce & Landing Page katalog produk parfum independen ARACHORA dengan tampilan modern, clean, dan profesional.",
      badgeColor: "bg-emerald-300",
      githubUrl: "comingsoon",
      demoUrl: "https://arachora.netlify.app",
    },
    {
      id: "peace-gesture-blur",
      title: "PEACE GESTURE BLUR & AUDIO TRIGGER",
      subtitle: "Deteksi Pose Gesture & Efek Blur Otomatis",
      category: "WEB SYSTEM",
      tech: ["Python", "OpenCV", "MediaPipe", "Pygame"],
      desc: "Aplikasi interaktif pengolahan citra real-time: mendeteksi pose tangan 'peace' untuk memicu pemutaran musik dan efek blur kamera secara otomatis.",
      badgeColor: "bg-cyan-200",
      githubUrl: "comingsoon",
      demoUrl: "https://fotoblurr.netlify.app",
    },
    {
      id: "esp32-remote-automation",
      title: "ESP32 RELAY & SERVO AUTOMATION",
      subtitle: "Sistem Otomasi Hardware Independen",
      category: "IOT & HARDWARE",
      tech: ["ESP32", "C++ / Arduino", "Relay Module", "Servo"],
      desc: "Sistem kontrol hardware berbasis mikrokontroler ESP32 untuk mengendalikan sakelar beban tinggi via jaringan lokal dan simulasi kontrol aktuator presisi.",
      badgeColor: "bg-yellow-300",
      githubUrl: "comingsoon",
      demoUrl: "comingsoon",
    },
    {
      id: "lenscapes-archive",
      title: "LENSCAPES - DIGITAL ARCHIVE",
      subtitle: "Platform Dokumentasi & Arsip Visual",
      category: "WEB SYSTEM",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      desc: "Web portofolio dan katalog arsip eksplorasi alam, menampilkan galeri foto resolusi tinggi, jurnal perjalanan, dan narasi sinematik lokal.",
      badgeColor: "bg-emerald-300",
      githubUrl: "comingsoon",
      demoUrl: "comingsoon",
    }
  ];

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    if (url === "comingsoon" || !url || url === "#") {
      e.preventDefault();
      setShowComingSoon(true);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto pt-0 pb-12 px-2 sm:px-0 text-black">
      
      {/* Page Header Banner */}
      <div className="bg-emerald-300 border-3 sm:border-4 border-black p-3 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="flex items-center gap-2 font-mono text-xs sm:text-base font-black uppercase">
          <FolderGit2 size={18} className="sm:w-5 sm:h-5" />
          <span>PORTFOLIO // DAFTAR PROYEK & KARYA</span>
        </div>
        <span className="bg-black text-white px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[10px] sm:text-xs font-bold uppercase">
          SHOWCASE & REPOSITORY
        </span>
      </div>

      {/* Filter Categories Bar */}
      <section className="border-3 sm:border-4 border-black bg-white p-2.5 sm:p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`font-mono text-[10px] sm:text-xs font-black uppercase px-2 py-1 sm:px-3 sm:py-1.5 border-2 border-black transition-all ${
                index === 0
                  ? "bg-black text-white shadow-[2px_2px_0px_0px_rgba(253,224,71,1)]"
                  : "bg-white text-black hover:bg-emerald-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="font-mono text-[10px] sm:text-xs font-black bg-emerald-300 border-2 border-black px-2 py-0.5 sm:px-2.5 sm:py-1">
          [{projects.length} KARYA]
        </div>
      </section>

      {/* Projects Grid List - 2 Kolom di Mobile (grid-cols-2) */}
      <section className="space-y-3 sm:space-y-4">
        <div className="bg-black text-white p-2.5 sm:p-3 font-mono text-xs sm:text-sm font-black uppercase tracking-widest flex justify-between items-center border-2 border-black">
          <div className="flex items-center gap-2">
            <Layers size={14} className="sm:w-4 sm:h-4" />
            <span>// DAFTAR PROYEK</span>
          </div>
          <span className="text-[10px] sm:text-xs">[ALL PROJECTS]</span>
        </div>

        {/* BINGKAI GRID: 2 KOLOM PADA MOBILE */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 sm:border-3 border-black bg-white p-2.5 sm:p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-2.5 sm:space-y-4"
            >
              <div className="space-y-1.5 sm:space-y-3">
                <div className="flex flex-wrap items-center justify-between border-b-2 border-black pb-1.5 font-mono text-[9px] sm:text-[10px] font-bold gap-1">
                  <span className={`${project.badgeColor} text-black px-1.5 py-0.5 border border-black uppercase font-black`}>
                    {project.category}
                  </span>
                  <span className="text-slate-600 font-mono hidden sm:inline">2026</span>
                </div>

                <div>
                  <h3 className="text-xs sm:text-base font-black text-black leading-snug tracking-tight uppercase">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[9px] sm:text-[11px] font-bold text-slate-600 line-clamp-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-[10px] sm:text-xs font-medium text-slate-800 leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1 pt-0.5">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-slate-100 text-slate-900 font-mono text-[8px] sm:text-[10px] font-bold px-1 py-0.5 border border-black">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Preview & Code */}
              <div className="pt-2 border-t-2 border-black flex flex-wrap sm:flex-nowrap justify-end items-center gap-1 sm:gap-2 font-mono text-[10px] sm:text-xs font-bold">
                
                {/* Tombol Preview */}
                <a
                  href={project.demoUrl}
                  onClick={(e) => handleLinkClick(e, project.demoUrl)}
                  target={project.demoUrl === "comingsoon" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-1 bg-yellow-300 text-black px-1.5 py-1 sm:px-3 sm:py-1.5 border border-black hover:bg-black hover:text-white transition-all cursor-pointer"
                >
                  <ExternalLink size={11} className="sm:w-3.5 sm:h-3.5" />
                  <span>PREVIEW</span>
                </a>

                {/* Tombol Code (Repository) */}
                <a
                  href={project.githubUrl}
                  onClick={(e) => handleLinkClick(e, project.githubUrl)}
                  target={project.githubUrl === "comingsoon" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-1 bg-black text-white px-1.5 py-1 sm:px-3 sm:py-1.5 border border-black hover:bg-emerald-300 hover:text-black transition-all cursor-pointer"
                >
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>CODE</span>
                </a>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP MODAL ANIMASI COMING SOON */}
      {showComingSoon && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-yellow-300 border-4 border-black p-5 sm:p-8 max-w-md w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative space-y-4 sm:space-y-5 animate-in fade-in zoom-in-95 duration-150">
            
            {/* Header Dialog */}
            <div className="flex items-center justify-between border-b-4 border-black pb-2 sm:pb-3">
              <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs font-black uppercase">
                <Construction size={16} className="animate-bounce" />
                <span>SYSTEM STATUS // COMING SOON</span>
              </div>
              <button 
                onClick={() => setShowComingSoon(false)}
                className="bg-black text-white p-1 border-2 border-black hover:bg-white hover:text-black transition-all"
              >
                <X size={14} />
              </button>
            </div>

            {/* Content & Animasi Grid */}
            <div className="space-y-2 sm:space-y-3 text-center">
              <div className="inline-flex p-2.5 sm:p-3 bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] animate-pulse">
                <Clock size={28} className="text-black sm:w-8 sm:h-8" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                PENGEMBANGAN MASIH BERJALAN!
              </h3>

              <p className="font-mono text-[11px] sm:text-xs font-bold text-slate-900 leading-relaxed bg-white/60 p-2.5 sm:p-3 border-2 border-black">
                Fitur / repositori proyek ini sedang disiapkan dan disempurnakan. Akses publik akan segera dirilis.
              </p>
            </div>

            {/* Animated Loading Bar */}
            <div className="space-y-1 font-mono text-[10px] font-black">
              <div className="flex justify-between">
                <span>PREPARING ASSETS...</span>
                <span className="animate-pulse">85%</span>
              </div>
              <div className="w-full h-3.5 sm:h-4 bg-white border-2 border-black overflow-hidden relative">
                <div className="h-full bg-emerald-400 border-r-2 border-black w-[85%] animate-pulse"></div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setShowComingSoon(false)}
              className="w-full bg-black text-white font-mono text-xs font-black uppercase py-2.5 sm:py-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:bg-emerald-300 hover:text-black transition-all"
            >
              MENGERTI & TUTUP
            </button>

          </div>
        </div>
      )}

    </div>
  );
}