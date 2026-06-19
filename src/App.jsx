import { useState, useEffect, useRef } from "react";

const portfolioData = {
  name: "NICO ALFONSO PURBA",
  tagline: "Mahasiswa yang antusias di bidang teknologi informasi dan jaringan komputer.",
  about:
    "Nama saya Nico Alfonso Purba, saya lahir di Batam 11 juni 2007. Saya berasal dari desa Parbuluan. Saya seorang lulusan dari sekolah SMK Negeri 1 Parbuluan jurusan teknik komputer dan jaringan. Saya saat ini seorang mahasiswa di Universitas Satya Terra Bhinneka stanbuk 25. Saya memiliki minat pada pemrograman web, konfigurasi jaringan. Selalu bersemangat untuk belajar hal baru dan berkontribusi melalui karya nyata.",
  email: "akun6665x@gmail.com",
  location: "Sumatera Utara, Indonesia",
  github: "Nic-v1",
  hp: "+6285767201381",

  photo: "/2.jpg",

  education: [
    {
      institution: "Universitas Satya Terra Bhinneka",
      degree: "S1 Informatika",
      year: "2025 - Sekarang",
      icon: "🏛️",
    },
    {
      institution: "SMK NEGERI 1 PARBULUAN",
      degree: "Teknik Komputer dan Jaringan",
      year: "2022 - 2025",
      icon: "🎓",
    },
    {
      institution: "SMP NEGERI 2 PARBULUAN",
      degree: "Sekolah Menengah Pertama",
      year: "2019 - 2022",
      icon: "🏫",
    },
    {
      institution: "SD NEGERI 030297 PARBULUAN",
      degree: "Sekolah Dasar",
      year: "2013 - 2019",
      icon: "📚",
    },
  ],

  skills: [
    { name: "HTML",                  level: 70, category: "Web" },
    { name: "CSS",                   level: 50, category: "Web" },
    { name: "JavaScript",            level: 40, category: "Web" },
    { name: "Python",                level: 65, category: "Programming" },
    { name: "Canva",                 level: 90, category: "Desain" },
    { name: "Konfigurasi Mikrotik",  level: 75, category: "Jaringan" },
  ],

  achievements: [
    {
      id: 1,
      title: "Medali Perak OSN PKN",
      desc: "Meraih Medali Perak dari Olimpiade Siswa Nasional di bidang studi PKN tingkat SMA/SMK",
      year: "2024",
      icon: "🥈",
      color: "from-slate-400 to-gray-300",
    },
    {
      id: 2,
      title: "Sertifikat Kompetensi",
      desc: "Sertifikat Kompetensi dari SMK Negeri 1 Parbuluan",
      year: "2025",
      icon: "📜",
      color: "from-cyan-500 to-blue-400",
    },
  ],

  certificates: [
    {
      id: 1,
      title: "PIAGAM PENGHARGAAN",
      issuer: "SMART STUDENT",
      year: "2024",
      image: "/OSN.jpg",
      color: "from-cyan-500 to-blue-400",
      badge: "📄",
    },
    {
      id: 2,
      title: "SERTIFIKAT KOMPETENSI",
      issuer: "SMK NEGERI 1 PARBULUAN",
      year: "2025",
      image: "/kompetensi.jpeg",
      color: "from-purple-500 to-indigo-400",
      badge: "📄",
    },
    {
      id: 3,
      title: "MICROSOFT OFFICE SPECIALIST",
      issuer: "MICROSOFT",
      year: "2026",
      image: "/MOS.jpg",
      color: "from-green-500 to-emerald-400",
      badge: "📄",
    },
    {
      id: 4,
      title: "SDGs 101",
      issuer: "SDG ACADEMY INDONESIA",
      year: "2026",
      image: "/SDGs 101.jpg",
      color: "from-orange-500 to-amber-400",
      badge: "📄",
    },
    {
      id: 5,
      title: "POLUSI",
      issuer: "SDG ACADEMY INDONESIA",
      year: "2026",
      image: "/polusi.jpg",
      color: "from-rose-500 to-pink-400",
      badge: "📄",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Buku Tamu Pengunjung",
      desc: "Aplikasi web buku tamu digital untuk mencatat kunjungan tamu secara online. Pengunjung dapat mengisi nama, asal instansi, keperluan, dan pesan. Data tersimpan dan dapat dilihat oleh admin.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://nic-dev1.github.io/Web-OUH/",
      icon: "📒",
      color: "from-cyan-500 to-blue-500",
    },
  ],
};

const navItems = [
  { label: "Beranda",    id: "hero" },
  { label: "Tentang",    id: "about" },
  { label: "Pendidikan", id: "education" },
  { label: "Skill",      id: "skills" },
  { label: "Proyek",     id: "projects" },
  { label: "Sertifikat", id: "certificates" },
  { label: "Kontak",     id: "contact" },
];

function SkillBar({ skill, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-300 font-semibold">{skill.name}</span>
        <div className="flex items-center gap-2">
          <span
            className="text-xs px-2 py-0.5 rounded-full border"
            style={{ background:"rgba(34,211,238,0.1)", borderColor:"rgba(34,211,238,0.25)", color:"#22d3ee" }}
          >{skill.category}</span>
          <span className="text-sm font-bold" style={{ color:"#22d3ee" }}>{skill.level}%</span>
        </div>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background:"#1f2937" }}>
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${skill.level}%` : "0%",
            background: "linear-gradient(to right,#22d3ee,#3b82f6)",
          }}
        />
      </div>
    </div>
  );
}

function CertModal({ cert, onClose }) {
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background:"rgba(0,0,0,0.88)", backdropFilter:"blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl max-w-lg w-full p-8 shadow-2xl"
        style={{ background:"#111827", border:"1px solid #374151" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl w-9 h-9 flex items-center justify-center rounded-full transition-colors"
          style={{ color:"#6b7280", background:"#1f2937" }}
          onMouseEnter={e=>e.currentTarget.style.color="#fff"}
          onMouseLeave={e=>e.currentTarget.style.color="#6b7280"}
        >✕</button>

        <div className={`w-full h-56 rounded-xl mb-6 overflow-hidden flex items-center justify-center bg-gradient-to-br ${cert.color}`}>
          {cert.image ? (
            <img src={cert.image} alt={cert.title} className="w-full h-full object-contain bg-white" />
          ) : (
            <div className="text-center px-4">
              <div className="text-6xl mb-3">{cert.badge}</div>
              <p className="text-white/60 text-sm">Gambar belum diisi</p>
              <p className="text-white/40 text-xs mt-1">Isi properti <code>image</code> dengan URL foto sertifikat</p>
            </div>
          )}
        </div>

        <h3 className="text-xl font-black text-white mb-1">{cert.title}</h3>
        <p className="font-semibold text-sm mb-1" style={{ color:"#22d3ee" }}>{cert.issuer}</p>
        <p className="text-sm" style={{ color:"#6b7280" }}>{cert.year}</p>
      </div>
    </div>
  );
}

function SectionTitle({ label }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color:"#22d3ee" }}>{label}</p>
      <h2 className="text-3xl md:text-4xl font-black text-white">{label}</h2>
    </div>
  );
}

export default function Portfolio() {
  const [scrolled,      setScrolled]      = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const [selectedCert,  setSelectedCert]  = useState(null);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const skillsRef = useRef(null);
  const d = portfolioData;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimateSkills(true); },
      { threshold: 0.2 }
    );
    if (skillsRef.current) obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
    setMenuOpen(false);
  };

  const hoverCyan  = { onMouseEnter:e=>e.currentTarget.style.borderColor="rgba(34,211,238,0.4)", onMouseLeave:e=>e.currentTarget.style.borderColor="#1f2937" };
  const hoverGold  = { onMouseEnter:e=>e.currentTarget.style.borderColor="rgba(234,179,8,0.4)",  onMouseLeave:e=>e.currentTarget.style.borderColor="#1f2937" };

  return (
    <div className="min-h-screen text-white" style={{ background:"#030712", fontFamily:"'Sora',sans-serif" }}>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-6"
        style={scrolled ? { background:"rgba(3,7,18,0.95)", borderBottom:"1px solid rgba(31,41,55,0.8)", backdropFilter:"blur(16px)" } : {}}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="font-black text-xl tracking-tight hover:opacity-80 transition-opacity"
            style={{ background:"linear-gradient(135deg,#22d3ee,#3b82f6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}
          >
            {d.name.split(" ")[0]}<span style={{ WebkitTextFillColor:"white" }}></span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{ color:"#9ca3af" }}
                onMouseEnter={e=>{ e.currentTarget.style.color="#fff"; e.currentTarget.style.background="rgba(255,255,255,0.06)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.color="#9ca3af"; e.currentTarget.style.background="transparent"; }}
              >{label}</button>
            ))}
          </div>

          <button className="md:hidden text-gray-400 hover:text-white transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 6l12 12M6 18L18 6"/>
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-4 flex flex-col gap-1 mt-2 rounded-xl mx-6"
            style={{ background:"#111827", border:"1px solid #1f2937" }}>
            {navItems.map(({ label, id }) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-left py-3 px-4 rounded-lg text-sm font-semibold transition-colors"
                style={{ color:"#d1d5db" }}
                onMouseEnter={e=>{ e.currentTarget.style.color="#22d3ee"; e.currentTarget.style.background="rgba(34,211,238,0.06)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.color="#d1d5db"; e.currentTarget.style.background="transparent"; }}
              >{label}</button>
            ))}
          </div>
        )}
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(circle at 1px 1px,rgba(255,255,255,0.04) 1px,transparent 0)", backgroundSize:"36px 36px" }} />
        <div className="absolute rounded-full pointer-events-none"
          style={{ top:"20%", left:"20%", width:400, height:400, background:"radial-gradient(circle,rgba(34,211,238,0.07),transparent 70%)" }} />
        <div className="absolute rounded-full pointer-events-none"
          style={{ bottom:"20%", right:"15%", width:320, height:320, background:"radial-gradient(circle,rgba(59,130,246,0.07),transparent 70%)" }} />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="relative mx-auto mb-8" style={{ width:200, height:200 }}>
            <div className="absolute inset-0 rounded-full animate-pulse"
              style={{ background:"linear-gradient(135deg,#22d3ee,#3b82f6)", padding:3 }}>
              <div className="w-full h-full rounded-full" style={{ background:"#030712" }} />
            </div>
            <div className="absolute inset-1 rounded-full overflow-hidden flex items-center justify-center"
              style={{ background:"linear-gradient(135deg,#22d3ee,#3b82f6)", boxShadow:"0 0 40px rgba(34,211,238,0.25)" }}>
              <img src={d.photo} alt={d.name} className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight text-white">{d.name}</h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">{d.tagline}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("projects")}
              className="px-8 py-3 font-bold rounded-xl text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ background:"linear-gradient(135deg,#22d3ee,#3b82f6)", boxShadow:"0 8px 32px rgba(34,211,238,0.25)" }}>
              🚀 Lihat Proyek
            </button>
            <button onClick={() => scrollTo("contact")}
              className="px-8 py-3 font-bold rounded-xl transition-all"
              style={{ border:"1px solid #4b5563", color:"#d1d5db" }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="#22d3ee"; e.currentTarget.style.color="#22d3ee"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="#4b5563"; e.currentTarget.style.color="#d1d5db"; }}>
              Hubungi Saya
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color:"#4b5563" }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Tentang Saya" />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-300 leading-relaxed mb-8">{d.about}</p>
              <div className="space-y-3">
                {[
                  { icon:"/lokasi.png", label:"Lokasi",  val:d.location },
                  { icon:"/email.png", label:"Email",   val:d.email,  href:`akun6665x@gmail.com${d.email}` },
                  { icon:"/wa.png", label:"HP / WA", val:d.hp },
                  { icon:"/github.png", label:"GitHub",  val:d.github, href:`https://github.com/Nic-dev1` },
                ].map(({ icon, label, val, href }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-xl transition-colors"
                    style={{ background:"#111827", border:"1px solid #1f2937" }}
                    onMouseEnter={e=>e.currentTarget.style.borderColor="#374151"}
                    onMouseLeave={e=>e.currentTarget.style.borderColor="#1f2937"}>
                    <img src={icon} alt={label} className="w-6 h-6 object-contain" />
                    <div>
                      <p className="text-xs mb-0.5" style={{ color:"#6b7280" }}>{label}</p>
                      {href
                        ? <a href={href} className="text-sm font-medium" style={{ color:"#22d3ee" }}>{val}</a>
                        : <p className="text-sm text-gray-200">{val}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-60 h-60 rounded-2xl overflow-hidden flex items-center justify-center"
                style={{ background:"linear-gradient(135deg,#1f2937,#111827)", border:"2px solid #374151",
                         boxShadow:"0 0 40px rgba(34,211,238,0.08)" }}>
                <img src={d.photo} alt={d.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-24 px-6" style={{ background:"rgba(17,24,39,0.5)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Pendidikan" />
          <div className="space-y-5">
            {d.education.map((edu, i) => (
              <div key={i}
                className="relative p-6 rounded-2xl overflow-hidden transition-all group"
                style={{ background:"#111827", border:"1px solid #1f2937" }}
                {...hoverCyan}>
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background:"linear-gradient(to bottom,#22d3ee,#3b82f6)" }} />
                <div className="flex items-start gap-5">
                  <div className="w-13 h-13 min-w-[3.25rem] min-h-[3.25rem] rounded-xl flex items-center justify-center text-2xl"
                    style={{ background:"#1f2937", border:"1px solid #374151" }}>{edu.icon}</div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-black text-white">{edu.institution}</h3>
                      <span className="text-xs px-3 py-0.5 rounded-full"
                        style={{ background:"rgba(34,211,238,0.1)", border:"1px solid rgba(34,211,238,0.2)", color:"#22d3ee" }}>
                        {edu.year}
                      </span>
                    </div>
                    <p className="font-semibold text-sm" style={{ color:"#22d3ee" }}>{edu.degree}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6" ref={skillsRef}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Keahlian" />
          <div className="grid md:grid-cols-2 gap-x-16">
            {d.skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} animate={animateSkills} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6" style={{ background:"rgba(17,24,39,0.5)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Proyek" />
          <div className="grid gap-6">
            {d.projects.map((proj) => (
              <div key={proj.id} className="rounded-2xl overflow-hidden transition-all"
                style={{ background:"#111827", border:"1px solid #1f2937" }}
                {...hoverCyan}>
                <div className={`h-1.5 bg-gradient-to-r ${proj.color}`} />
                <div className="p-7 md:p-8">
                  <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ background:"#1f2937", border:"1px solid #374151" }}>{proj.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-2">{proj.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-5">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {proj.tech.map(t => (
                          <span key={t} className="text-xs px-3 py-1 rounded-full"
                            style={{ background:"rgba(34,211,238,0.1)", border:"1px solid rgba(34,211,238,0.2)", color:"#22d3ee" }}>{t}</span>
                        ))}
                      </div>
                      <a href={proj.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-105"
                        style={{ background:`linear-gradient(135deg,#22d3ee,#3b82f6)`, boxShadow:"0 4px 24px rgba(34,211,238,0.2)" }}>
                        🔗 Kunjungi Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Sertifikat & Penghargaan" />

          <p className="text-xs uppercase tracking-widest font-bold mb-5" style={{ color:"#6b7280" }}>Penghargaan</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {d.achievements.map((ach) => (
              <div key={ach.id} className="p-6 rounded-2xl transition-all"
                style={{ background:"#111827", border:"1px solid #1f2937" }}
                {...hoverGold}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 bg-gradient-to-br ${ach.color}`}>{ach.icon}</div>
                <h4 className="font-black text-white mb-2">{ach.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">{ach.desc}</p>
                <span className="text-xs font-bold" style={{ color:"#eab308" }}>{ach.year}</span>
              </div>
            ))}
          </div>

          <p className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color:"#6b7280" }}>Sertifikat</p>
          <p className="text-xs mb-6" style={{ color:"#4b5563" }}> Klik sertifikat untuk melihat gambar</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.certificates.map((cert) => (
              <button key={cert.id} onClick={() => setSelectedCert(cert)}
                className="text-left rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-cyan-500"
                style={{ background:"#111827", border:"1px solid #1f2937" }}
                onMouseEnter={e=>e.currentTarget.style.borderColor="#4b5563"}
                onMouseLeave={e=>e.currentTarget.style.borderColor="#1f2937"}>
                <div className={`h-36 bg-gradient-to-br ${cert.color} relative overflow-hidden flex items-center justify-center`}>
                  {cert.image
                    ? <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                    : <span className="text-5xl">{cert.badge}</span>
                  }
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                    style={{ background:"rgba(0,0,0,0.35)" }}>
                    <span className="text-white text-xs font-bold px-4 py-1.5 rounded-full" style={{ background:"rgba(0,0,0,0.5)" }}>Lihat Detail</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-black text-white text-sm leading-tight mb-1">{cert.title}</p>
                  <p className="text-xs font-semibold mb-1" style={{ color:"#22d3ee" }}>{cert.issuer}</p>
                  <p className="text-xs" style={{ color:"#6b7280" }}>{cert.year}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6" style={{ background:"rgba(17,24,39,0.5)" }}>
        <div className="max-w-lg mx-auto text-center">
          <SectionTitle label="Kontak" />
          <p className="text-gray-400 -mt-4 mb-10">
            Ingin berkolaborasi atau sekedar menyapa? Jangan ragu menghubungi saya.
          </p>
          <div className="rounded-2xl p-8 space-y-3 text-left"
            style={{ background:"#111827", border:"1px solid #1f2937" }}>
            {[
              { icon:"/email.png", label:"Email",   val:d.email,  href:`akun6665x@gmail.com${d.email}` },
              { icon:"/wa.png", label:"HP / WA", val:d.hp },
              { icon:"/github.png", label:"GitHub",  val:d.github, href:`https://github.com/Nic-dev1` },
              { icon:"/lokasi.png", label:"Lokasi",  val:d.location },
            ].map(({ icon, label, val, href }) => (
              <div key={label}
                className="flex items-center gap-4 p-4 rounded-xl transition-colors cursor-default"
                style={{ background:"rgba(31,41,55,0.6)" }}
                onMouseEnter={e=>e.currentTarget.style.background="#1f2937"}
                onMouseLeave={e=>e.currentTarget.style.background="rgba(31,41,55,0.6)"}>
                <img src={icon} alt={label} className="w-7 h-7 object-contain" />
                <div>
                  <p className="text-xs mb-0.5" style={{ color:"#6b7280" }}>{label}</p>
                  {href
                    ? <a href={href} className="text-sm font-semibold transition-colors" style={{ color:"#22d3ee" }}>{val}</a>
                    : <p className="text-sm text-gray-200">{val}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center" style={{ borderTop:"1px solid #1f2937" }}>
        <p className="text-sm" style={{ color:"#4b5563" }}>
          &#169; {new Date().getFullYear()} {d.name}
        </p>
      </footer>

      {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
    </div>
  );
}