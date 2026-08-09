import { 
  BookOpen, 
  Tag, 
  Calendar, 
  ArrowUpRight, 
  Search, 
  Camera, 
  Terminal, 
  Cpu,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function JurnalPage() {
  const categories = ["SEMUA", "DEVELOPMENT", "PHOTOGRAPHY", "VIDEOGRAPHY", "IOT & HARDWARE"];

  const journalPosts = [
    {
      id: "dok-lanskap-pedesaan",
      date: "04 AGU 2026",
      category: "PHOTOGRAPHY",
      title: "Dokumentasi Visual Lanskap Alam & Sudut Asri Pedesaan",
      desc: "Catatan alur kerja editing foto RAW menggunakan Lightroom untuk mendapatkan tone warna alam yang alami dan puitis tanpa kehilangan detail.",
      readTime: "4 MIN BACA",
      tagColor: "bg-yellow-300",
      featured: true,
    },
    {
      id: "caffein-crank-ruang-jiwa",
      date: "28 JUL 2026",
      category: "VIDEOGRAPHY",
      title: "Dokumentasi Event Sepeda 'Caffein Crank' di Ruang Jiwa",
      desc: "Proses dibalik layar dalam menangkap momen sinematik kegiatan komunitas sepeda, pemilihan ritme video, dan sinkronisasi audio.",
      readTime: "6 MIN BACA",
      tagColor: "bg-emerald-300",
      featured: false,
    },
    {
      id: "arsitektur-pos-mobile-agile",
      date: "15 JUL 2026",
      category: "DEVELOPMENT",
      title: "Arsitektur Aplikasi POS Mobile dengan Metodologi Agile",
      desc: "Rancangan struktur aplikasi Point of Sale (POS) untuk persewaan alat outdoor menggunakan Flutter dan backend Laravel.",
      readTime: "8 MIN BACA",
      tagColor: "bg-cyan-200",
      featured: false,
    },
    {
      id: "otomasi-relay-esp32",
      date: "02 JUL 2026",
      category: "IOT & HARDWARE",
      title: "Integrasi Sirkuit Relay dan Servo dengan Mikrokontroler ESP32",
      desc: "Eksperimentasi pembuatan modul kontrol jarak jauh menggunakan ESP32 untuk otomasi switch daya dan pergerakan mekanis.",
      readTime: "5 MIN BACA",
      tagColor: "bg-yellow-300",
      featured: false,
    },
    {
      id: "eksplorasi-hidden-gems-jateng",
      date: "18 JUN 2026",
      category: "PHOTOGRAPHY",
      title: "Eksplorasi 'Hidden Gems' dan Lanskap Perbukitan Jawa Tengah",
      desc: "Perjalanan mendokumentasikan air terjun dan perbukitan yang jarang terjamah melalui jenama visual Lenscapes.",
      readTime: "7 MIN BACA",
      tagColor: "bg-emerald-300",
      featured: false,
    },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto pt-0 pb-12 px-2 sm:px-0 text-black">
      
      {/* Page Header Banner */}
      <div className="bg-emerald-300 border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="flex items-center gap-2 font-mono text-sm sm:text-base font-black uppercase">
          <BookOpen size={20} />
          <span>JURNAL // CATATAN & ARSIP VISUAL</span>
        </div>
        <span className="bg-black text-white px-2.5 py-1 font-mono text-xs font-bold uppercase">
          LENSCAPES & TECH
        </span>
      </div>

      {/* Filter Categories Bar */}
      <section className="border-4 border-black bg-white p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`font-mono text-xs font-black uppercase px-3 py-1.5 border-2 border-black transition-all ${
                index === 0
                  ? "bg-black text-white shadow-[2px_2px_0px_0px_rgba(253,224,71,1)]"
                  : "bg-white text-black hover:bg-yellow-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="font-mono text-xs font-black bg-yellow-300 border-2 border-black px-2.5 py-1">
          [{journalPosts.length} ARTIKEL]
        </div>
      </section>

      {/* Featured Article Box */}
      {journalPosts.filter(p => p.featured).map((post) => (
        <section key={post.id} className="border-4 border-black bg-yellow-300 p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs font-black">
            <span className="bg-black text-white px-2.5 py-1 uppercase border border-black flex items-center gap-1">
              <Sparkles size={13} />
              ARTIKEL UNGGULAN
            </span>
            <span className="bg-white text-black px-2 py-0.5 border border-black">
              {post.date} // {post.readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight text-black">
            {post.title}
          </h2>

          <p className="text-xs sm:text-sm font-semibold text-slate-900 border-l-4 border-black pl-4 py-1 leading-relaxed">
            {post.desc}
          </p>

          <div className="pt-2 flex justify-between items-center">
            <span className="bg-emerald-300 border-2 border-black px-2.5 py-1 font-mono text-xs font-black uppercase">
              #{post.category}
            </span>

            <button className="inline-flex items-center gap-2 bg-black text-white font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-black transition-all">
              <span>BACA SELENGKAPNYA</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </section>
      ))}

      {/* Articles Grid List */}
      <section className="space-y-4">
        <div className="bg-black text-white p-3 font-mono text-sm font-black uppercase tracking-widest flex justify-between items-center border-2 border-black">
          <span>// ARSIP CATATAN</span>
          <span>DOKUMEN & RILIS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {journalPosts.filter(p => !p.featured).map((post) => (
            <div
              key={post.id}
              className="border-3 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-cyan-100 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b-2 border-black pb-2 font-mono text-[10px] font-bold">
                  <span className={`${post.tagColor} text-black px-2 py-0.5 border border-black uppercase font-black`}>
                    {post.category}
                  </span>
                  <span className="text-black font-semibold">{post.date}</span>
                </div>

                <h3 className="text-base font-black text-black leading-snug tracking-tight">
                  {post.title}
                </h3>

                <p className="text-xs font-medium text-slate-800 leading-relaxed">
                  {post.desc}
                </p>
              </div>

              <div className="pt-3 border-t-2 border-black flex justify-between items-center font-mono text-xs font-bold">
                <span className="text-slate-600 text-[11px]">{post.readTime}</span>
                <button className="inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 border border-black hover:bg-yellow-300 hover:text-black transition-all">
                  <span>BACA</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}