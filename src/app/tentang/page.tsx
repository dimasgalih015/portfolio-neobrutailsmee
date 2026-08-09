"use client";

import { useEffect, useState } from "react";
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Terminal, 
  Camera, 
  Mail,
  Cpu,
  Layers,
  Sparkles,
  Activity,
  Zap,
  Gauge,
  Server,
  Clock,
  ShieldCheck,
  Globe,
  HardDrive
} from "lucide-react";

export default function TentangPage() {
  const [latency, setLatency] = useState<number>(24);
  const [pageLoadTime, setPageLoadTime] = useState<string>("0.18s");
  const [sessionSeconds, setSessionSeconds] = useState<number>(0);
  const [timeStr, setTimeStr] = useState<string>("");
  const [memUsage, setMemUsage] = useState<number>(42);
  const [availabilityStatus, setAvailabilityStatus] = useState<{ text: string; color: string }>({
    text: "AVAILABLE FOR PROJ",
    color: "bg-emerald-300 text-black",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const measurePerformance = () => {
        const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
        if (navEntries && navEntries.length > 0) {
          const duration = navEntries[0].duration;
          if (duration > 0) {
            setPageLoadTime(`${(duration / 1000).toFixed(2)}s`);
          } else {
            const fallbackDuration = (performance.now() / 1000).toFixed(2);
            setPageLoadTime(`${fallbackDuration}s`);
          }
        }
      };

      if (document.readyState === "complete") {
        measurePerformance();
      } else {
        window.addEventListener("load", measurePerformance);
      }
    }

    const pingInterval = setInterval(() => {
      const randomPing = Math.floor(Math.random() * (32 - 18 + 1)) + 18;
      setLatency(randomPing);
      setMemUsage(Math.floor(Math.random() * (48 - 38 + 1)) + 38);
    }, 3000);

    const updateClockAndStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const hoursStr = String(hours).padStart(2, "0");
      const minutesStr = String(now.getMinutes()).padStart(2, "0");
      const secondsStr = String(now.getSeconds()).padStart(2, "0");
      
      setTimeStr(`${hoursStr}:${minutesStr}:${secondsStr}`);

      if (hours >= 8 && hours < 22) {
        setAvailabilityStatus({
          text: "AVAILABLE FOR PROJ",
          color: "bg-emerald-300 text-black",
        });
      } else {
        setAvailabilityStatus({
          text: "STANDBY / OFFLINE",
          color: "bg-yellow-300 text-black",
        });
      }
    };

    updateClockAndStatus();
    const clockInterval = setInterval(updateClockAndStatus, 1000);

    const uptimeInterval = setInterval(() => {
      setSessionSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(pingInterval);
      clearInterval(clockInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const formatUptime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (mins > 0) {
      return `${mins}m ${secs}s`;
    }
    return `99.9% (${secs}s)`;
  };

  const education = [
    {
      period: "2022 - PRESENT",
      degree: "S1 TEKNIK INFORMATIKA",
      institution: "Universitas Ma'arif Nahdlatul Ulama Kebumen",
      desc: "Fokus pada pengembangan perangkat lunak (Full-Stack), sistem informasi manajemen, serta riset tugas akhir Point of Sale (POS) berbasis mobile.",
    },
    {
      period: "2019 - 2021",
      degree: "SMK - TEKNIK KENDARAAN RINGAN (TKR)",
      institution: "SMK HKTI 2 PURWAREJA KLAMPOK",
      desc: "Mempelajari dasar-dasar tata letak (layouting), komposisi warna, fotografi, videografi, serta dasar-dasar desain grafis dan komunikasi visual.",
    },
  ];

  const focusAreas = [
    {
      title: "SOFTWARE DEVELOPMENT",
      desc: "Membangun sistem aplikasi web & mobile menggunakan Laravel, Flutter, dan Next.js dengan arsitektur yang terstruktur dan scalable.",
      icon: Terminal,
      color: "bg-emerald-300",
    },
    {
      title: "VISUAL & PHOTOGRAPHY",
      desc: "Mengabadikan lanskap alam, sudut pedesaan, dan momen eksplorasi visual melalui jenama 'ABOUT JOURNEY' dengan karakter puitis.",
      icon: Camera,
      color: "bg-yellow-300",
    },
    {
      title: "HARDWARE & IOT",
      desc: "Eksperimentasi integrasi sirkuit mikrokontroler ESP32, modul relay, dan kontrol actuator untuk sistem otomasi independen.",
      icon: Cpu,
      color: "bg-cyan-200",
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto pt-0 pb-12 px-2 sm:px-0 text-black">
      
      {/* Page Header Banner */}
      <div className="bg-yellow-300 border-3 sm:border-4 border-black p-3 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="flex items-center gap-2 font-mono text-xs sm:text-base font-black uppercase">
          <User size={18} className="sm:w-5 sm:h-5" />
          <span>PROFILE // TENTANG SAYA</span>
        </div>
        <span className="bg-black text-white px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[10px] sm:text-xs font-bold uppercase">
          DIMAS GALIH SAMPURNA
        </span>
      </div>

      {/* SECTION 1 */}
      <section className="grid grid-cols-12 gap-3 sm:gap-6 items-start">
        
        {/* Left Column: Card Profil Utama */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 border-3 sm:border-4 border-black bg-cyan-200 p-2.5 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2.5 sm:gap-3 sticky top-4">
          
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2.5 sm:gap-3 items-stretch">
            
            {/* Foto Profil: Menyesuaikan aspek rasio agar pas sejajar dengan SYS METRICS */}
            <div className="relative w-full h-full min-h-[220px] sm:min-h-0 aspect-[4/5] md:aspect-[4/5] border-2 sm:border-3 border-black bg-slate-900 overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <img 
                src="/dimzz.jpeg" 
                alt="Dimas Galih Sampurna" 
                className="w-full h-full object-cover contrast-110 hover:scale-105 transition-transform duration-300 absolute inset-0"
              />
              <div className="relative z-10 top-1 left-1 bg-black text-white font-mono text-[7px] sm:text-[9px] px-1 py-0.5 font-bold border border-white self-start">
                PORTRAIT
              </div>
              <div className="relative z-10 bottom-1 right-1 bg-yellow-300 text-black font-mono text-[7px] sm:text-[9px] px-1 py-0.5 font-black border border-black uppercase self-end hidden sm:block">
                INFORMATIKA
              </div>
            </div>

            {/* Widget Metrik Dinamis (Penyusunan Flex Antar Elemen Mengisi Penuh) */}
            <div className="bg-slate-900 border-2 sm:border-3 border-black p-2 sm:p-2.5 font-mono text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-full">
              
              {/* Header Status */}
              <div className="flex items-center justify-between border-b border-slate-700 pb-1">
                <span className="text-[8px] sm:text-[9px] font-black uppercase text-yellow-300 flex items-center gap-1">
                  <Activity size={10} className="text-yellow-300 sm:w-3 sm:h-3" />
                  SYS METRICS
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>

              {/* Daftar Metrik Lengkap */}
              <div className="space-y-1 sm:space-y-1.5 text-[8px] sm:text-[9.5px]">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold flex items-center gap-1">
                    <Zap size={9} className="text-emerald-400 sm:w-2.5 sm:h-2.5" /> PING
                  </span>
                  <span className="font-black text-emerald-400 bg-black px-1 border border-slate-800">
                    {latency}ms
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold flex items-center gap-1">
                    <Gauge size={9} className="text-yellow-400 sm:w-2.5 sm:h-2.5" /> LOAD
                  </span>
                  <span className="font-black text-yellow-300">
                    {pageLoadTime}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold flex items-center gap-1">
                    <Server size={9} className="text-cyan-400 sm:w-2.5 sm:h-2.5" /> UPTIME
                  </span>
                  <span className="font-black text-cyan-300">
                    {formatUptime(sessionSeconds)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold flex items-center gap-1">
                    <Clock size={9} className="text-orange-400 sm:w-2.5 sm:h-2.5" /> TIME (WIB)
                  </span>
                  <span className="font-black text-orange-300 bg-black px-1 border border-slate-800">
                    {timeStr || "00:00"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold flex items-center gap-1">
                    <Globe size={9} className="text-blue-400 sm:w-2.5 sm:h-2.5" /> REGION
                  </span>
                  <span className="font-bold text-blue-300 text-[7.5px] sm:text-[9px]">
                    ID-JAVA
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold flex items-center gap-1">
                    <ShieldCheck size={9} className="text-purple-400 sm:w-2.5 sm:h-2.5" /> SECURITY
                  </span>
                  <span className="font-bold text-purple-300 text-[7.5px] sm:text-[9px]">
                    TLS 1.3
                  </span>
                </div>

                {/* Visual Bar Memori */}
                <div className="pt-0.5 space-y-0.5">
                  <div className="flex justify-between items-center text-[7px] sm:text-[8.5px]">
                    <span className="text-slate-400 font-bold flex items-center gap-0.5">
                      <HardDrive size={8} className="text-pink-400" /> RAM STACK
                    </span>
                    <span className="font-mono text-pink-300">{memUsage}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 border border-slate-700 overflow-hidden">
                    <div 
                      className="bg-pink-400 h-full transition-all duration-500" 
                      style={{ width: `${memUsage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Status Box */}
              <div className={`${availabilityStatus.color} border border-black p-1 text-[7.5px] sm:text-[8.5px] font-black text-center uppercase tracking-tight transition-colors duration-300 mt-1`}>
                {availabilityStatus.text}
              </div>

            </div>

          </div>

          {/* Info Badge Lokasi */}
          <div className="bg-white border-2 sm:border-3 border-black p-2 sm:p-3 font-mono text-xs space-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between border-b-2 border-black pb-0.5">
              <span className="font-black uppercase flex items-center gap-1 text-[9px] sm:text-xs">
                <MapPin size={11} className="text-emerald-700 sm:w-3.5 sm:h-3.5" />
                BASE
              </span>
              <span className="bg-emerald-300 px-1 text-[8px] sm:text-[10px] font-bold border border-black">ACTIVE</span>
            </div>
            <p className="font-black text-black pt-0.5 text-xs sm:text-sm leading-tight">
              Banjarnegara
            </p>
            <p className="text-[9px] sm:text-[10px] text-slate-700 font-medium hidden sm:block leading-tight">
              Eksplorasi lanskap alam & wilayah pedesaan di Central Java.
            </p>
          </div>

        </div>

        {/* Right Column: Bio Narrative */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col gap-3 sm:gap-4">
          
          {/* Main Hero Narrative Box */}
          <div className="border-3 sm:border-4 border-black bg-white p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-3 sm:space-y-4">
            
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1 border-b-2 sm:border-b-3 border-black pb-2">
                <span className="bg-black text-white font-mono text-[9px] sm:text-xs font-bold uppercase px-2 py-0.5 sm:px-3 sm:py-1">
                  FULL-STACK & CREATIVE
                </span>
                <span className="font-mono text-[9px] sm:text-xs font-black bg-emerald-300 px-1.5 sm:px-2 py-0.5 sm:py-1 border border-black">
                  2004-DGS
                </span>
              </div>

              <h1 className="text-sm sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-black leading-snug sm:leading-tight">
                MEWUJUDKAN ARSITEKTUR PERANGKAT LUNAK DAN ARSIP CERITA VISUAL.
              </h1>
            </div>

            {/* Narasi Alami */}
            <div className="space-y-2.5 sm:space-y-3 font-medium text-xs sm:text-sm text-slate-900 leading-relaxed border-l-3 sm:border-l-4 border-black pl-3 sm:pl-4 py-0.5">
              <p>
                Halo! Saya <strong>Dimas Galih Sampurna</strong>, pengembang perangkat lunak berbakat yang berbasis di Banjarnegara, Jawa Tengah. Memadukan latar belakang fondasi visual serta studi akademis di <strong>Teknik Informatika</strong>, saya menghadirkan pendekatan pengembangan sistem yang berfokus pada efisiensi performa tanpa mengabaikan estetika antarmuka.
              </p>

              <p>
                Sebagai pengembang <em>Full-Stack</em>, fokus utama saya mencakup pembangunan aplikasi berbasis web dan mobile menggunakan ekosistem modern seperti <strong>Laravel, Flutter, dan Next.js</strong>. Saya terbiasa menangani alur pengembangan dari perancangan arsitektur basis data, integrasi RESTful API, hingga penerapan antarmuka neobrutalism dan responsif.
              </p>

              <p>
                Di luar dunia logika pemrograman, saya secara aktif mengeksplorasi eksperimentasi sirkuit mikrokontroler <strong>ESP32/IoT</strong> dan mengelola platform arsip visual bertajuk <strong>ABOUT JOURNEY</strong> — sebuah ruang dokumentasi puitis yang merekam lanskap alam, sudut pedesaan, serta keindahan tersembunyi (*hidden gems*) di Jawa Tengah.
              </p>
            </div>

          </div>

          {/* Sub-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="border-2 sm:border-3 border-black bg-yellow-200 p-3 sm:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-1.5">
              <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs font-black uppercase border-b border-black pb-1">
                <Terminal size={14} />
                <span>DEV ENVIRONMENT</span>
              </div>
              <p className="font-mono text-[9px] sm:text-xs font-bold text-black leading-relaxed">
                OS: Linux (Kubuntu) <br />
                Stack: Laravel / Flutter / Next.js <br />
                Hardware: ESP32 / IoT Integration
              </p>
            </div>

            <div className="border-2 sm:border-3 border-black bg-emerald-300 p-3 sm:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-1.5">
              <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs font-black uppercase border-b border-black pb-1">
                <Sparkles size={14} />
                <span>CREATIVE BRAND</span>
              </div>
              <p className="font-mono text-[9px] sm:text-xs font-bold text-black leading-relaxed">
                Brand: ABOUT JOURNEY <br />
                Focus: Nature & Rural Exploration <br />
                Tone: Cinematic, Minimalis & Puitis
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* SECTION 2: FOCUS AREAS */}
      <section className="space-y-3 sm:space-y-4 pt-2">
        <div className="bg-black text-white p-2.5 sm:p-3 font-mono text-xs sm:text-sm font-black uppercase tracking-widest flex justify-between items-center border-2 border-black">
          <div className="flex items-center gap-2">
            <Layers size={14} className="sm:w-4 sm:h-4" />
            <span>// BIDANG KEAHLIAN & FOKUS</span>
          </div>
          <span className="text-[10px] sm:text-xs">[03 PILAR]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="border-2 sm:border-3 border-black bg-white p-3.5 sm:p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-3 sm:space-y-4"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className={`inline-flex p-2 sm:p-2.5 border-2 border-black ${area.color} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                    <Icon size={18} className="text-black sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-xs sm:text-base font-black text-black tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-800 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: EDUCATION TIMELINE */}
      <section className="space-y-3 sm:space-y-4">
        <div className="bg-black text-white p-2.5 sm:p-3 font-mono text-xs sm:text-sm font-black uppercase tracking-widest flex justify-between items-center border-2 border-black">
          <div className="flex items-center gap-2">
            <GraduationCap size={14} className="sm:w-4 sm:h-4" />
            <span>// JENJANG PENDIDIKAN</span>
          </div>
          <span className="text-[10px] sm:text-xs">ACADEMIC</span>
        </div>

        <div className="border-2 sm:border-3 border-black bg-white p-3.5 sm:p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3 sm:space-y-4">
          {education.map((edu) => (
            <div key={edu.degree} className="space-y-1.5 sm:space-y-2 border-b-2 border-slate-200 pb-3 sm:pb-4 last:border-0 last:pb-0">
              <div className="flex flex-wrap justify-between items-baseline gap-1 font-mono text-[10px] sm:text-xs">
                <span className="bg-yellow-300 text-black font-black px-1.5 py-0.5 border border-black">
                  {edu.period}
                </span>
                <span className="font-bold text-slate-600 text-[10px] sm:text-xs">{edu.institution}</span>
              </div>
              <h3 className="text-xs sm:text-base font-black text-black">{edu.degree}</h3>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-800 leading-relaxed max-w-3xl">
                {edu.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CONTACT CTA */}
      <section className="border-3 sm:border-4 border-black bg-yellow-300 p-4 sm:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
        <div className="space-y-1">
          <h2 className="text-base sm:text-xl font-black uppercase tracking-tight text-black">
            TERTARIK UNTUK BERKOLABORASI?
          </h2>
          <p className="text-[10px] sm:text-sm font-bold text-slate-900">
            Terbuka untuk proyek perangkat lunak, sistem IoT, maupun kebutuhan dokumentasi visual.
          </p>
        </div>

        <a
          href="mailto:contact@dimasgalih.dev"
          className="inline-flex items-center gap-2 bg-black text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2.5 sm:px-5 sm:py-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:bg-emerald-300 hover:text-black transition-all"
        >
          <Mail size={14} className="sm:w-4 sm:h-4" />
          KIRIM PESAN
        </a>
      </section>

    </div>
  );
}