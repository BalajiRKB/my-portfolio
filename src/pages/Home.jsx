import React, { useState, useEffect, useRef } from 'react';
import { Download, ArrowRight, ArrowDown, Briefcase, Layers, Code2, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

/* ═══════════════════════════ Star Canvas ═══════════════════════════ */
const StarCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.3 + 0.2,
      alpha: Math.random(),
      speed: (Math.random() * 0.004 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.alpha += s.speed;
        if (s.alpha >= 1) { s.alpha = 1; s.speed *= -1; }
        if (s.alpha <= 0) { s.alpha = 0; s.speed *= -1; }
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,210,255,${s.alpha * 0.75})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

/* ═══════════════════════════ Sparkle SVG ═══════════════════════════ */
const Sparkle = ({ style }) => (
  <svg viewBox="0 0 24 24" fill="white" style={style} className="absolute pointer-events-none">
    <path d="M12 0 L13.4 10.6 L24 12 L13.4 13.4 L12 24 L10.6 13.4 L0 12 L10.6 10.6 Z" />
  </svg>
);

/* ═══════════════════════════ Stat Card ═══════════════════════════ */
const StatCard = ({ icon: Icon, label, value, delay }) => (
  <div
    className="group flex items-center gap-3 px-5 py-3.5 rounded-lg border border-blue-500/30 bg-white/[0.03] backdrop-blur-sm hover:border-blue-400/60 hover:bg-blue-900/20 transition-all duration-300 cursor-default"
    style={{ animationDelay: delay, minWidth: 0, flex: '1 1 0' }}
  >
    <div className="w-8 h-8 rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition-colors">
      <Icon size={14} className="text-blue-400" />
    </div>
    <div className="min-w-0">
      <p className="text-[9px] uppercase tracking-widest text-blue-400/80 font-mono leading-none mb-1 whitespace-nowrap">{label}</p>
      <p className="text-[13px] font-semibold text-white font-mono leading-tight whitespace-nowrap">{value}</p>
    </div>
  </div>
);

/* ═══════════════════════════ Profile Orb ═══════════════════════════ */
const ProfileOrb = ({ loaded }) => (
  <div
    className={`relative flex items-center justify-center flex-shrink-0 transition-all duration-1000 delay-200 ${
      loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
    }`}
    style={{ width: 440, height: 490 }}
  >
    {/* Aurora / bloom glow behind orb */}
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: 420,
        height: 460,
        background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.22) 0%, rgba(59,130,246,0.12) 50%, transparent 75%)',
        filter: 'blur(36px)',
        animation: 'aurora-pulse 4s ease-in-out infinite',
      }}
    />

    {/* Outer rotating dashed ring */}
    <div
      className="absolute rounded-full border pointer-events-none"
      style={{
        width: 410,
        height: 455,
        borderColor: 'rgba(96,165,250,0.15)',
        borderStyle: 'dashed',
        borderWidth: 1,
        animation: 'spin-slow 20s linear infinite',
      }}
    />

    {/* Main glowing ring */}
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: 376,
        height: 420,
        border: '2px solid rgba(96,165,250,0.75)',
        boxShadow: '0 0 0 1px rgba(96,165,250,0.2), 0 0 35px rgba(96,165,250,0.5), 0 0 80px rgba(96,165,250,0.28), inset 0 0 35px rgba(96,165,250,0.08)',
        animation: 'ring-breathe 3s ease-in-out infinite',
      }}
    />

    {/* Inner ring */}
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: 348,
        height: 390,
        border: '1px solid rgba(147,197,253,0.2)',
      }}
    />

    {/* Profile photo — NO dark overlay, full brightness */}
    <div
      className="relative overflow-hidden rounded-full z-10"
      style={{
        width: 328,
        height: 372,
        border: '1px solid rgba(96,165,250,0.25)',
      }}
    >
      <img
        src="/profile.jpg"
        alt="Balaji R"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 10%',
          display: 'block',
          filter: 'brightness(1.08) contrast(1.02)',
        }}
      />
    </div>

    {/* Terminal text — top left */}
    <div
      className="absolute font-mono leading-[1.7] select-none pointer-events-none"
      style={{ top: 54, left: -20, fontSize: 12, color: 'rgba(147,197,253,0.65)' }}
    >
      <div><span style={{ color: 'rgba(96,165,250,0.45)' }}>$ </span>uname -a</div>
      <div><span style={{ color: 'rgba(96,165,250,0.45)' }}>$ </span>echo $USER</div>
      <div><span style={{ color: 'rgba(96,165,250,0.45)' }}>$ </span>arch</div>
    </div>

    {/* Terminal text — bottom right */}
    <div
      className="absolute font-mono leading-[1.7] select-none pointer-events-none text-right"
      style={{ bottom: 72, right: -16, fontSize: 11, color: 'rgba(147,197,253,0.4)' }}
    >
      <div>neofetch --config</div>
      <div>Lider -a</div>
    </div>

    {/* Radar SVG — top right */}
    <svg
      className="absolute pointer-events-none"
      style={{ top: 14, right: 8, opacity: 0.2 }}
      width="100" height="100" viewBox="0 0 80 80"
    >
      <circle cx="40" cy="40" r="36" fill="none" stroke="#60a5fa" strokeWidth="0.8" />
      <circle cx="40" cy="40" r="24" fill="none" stroke="#60a5fa" strokeWidth="0.6" />
      <circle cx="40" cy="40" r="12" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
      <line x1="4" y1="40" x2="76" y2="40" stroke="#60a5fa" strokeWidth="0.5" />
      <line x1="40" y1="4" x2="40" y2="76" stroke="#60a5fa" strokeWidth="0.5" />
      <line x1="14" y1="14" x2="66" y2="66" stroke="#60a5fa" strokeWidth="0.35" />
      <line x1="66" y1="14" x2="14" y2="66" stroke="#60a5fa" strokeWidth="0.35" />
    </svg>

    {/* Scan line */}
    <div
      className="absolute pointer-events-none"
      style={{
        bottom: 28,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 350,
        height: 1.5,
        background: 'linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.5) 20%, rgba(96,165,250,0.95) 50%, rgba(96,165,250,0.5) 80%, transparent 100%)',
        borderRadius: 1,
        animation: 'scan-pulse 2.5s ease-in-out infinite',
      }}
    />

    {/* Corner dots */}
    {[
      { top: 28, left: 28 }, { top: 28, right: 28 },
      { bottom: 28, left: 28 }, { bottom: 28, right: 28 },
    ].map((pos, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-blue-400 pointer-events-none"
        style={{ ...pos, opacity: 0.65, animation: `corner-blink 2s ease-in-out infinite ${i * 0.5}s` }}
      />
    ))}
  </div>
);

/* ═══════════════════════════ Main Component ═══════════════════════════ */
const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const roles = [
    'LINUX ENTHUSIAST',
    'FULL-STACK DEVELOPER',
    'AI INTEGRATION ENGINEER',
    'OPEN SOURCE FOUNDER',
    'MERN STACK ENGINEER',
  ];

  const scrollTo = id => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  /* Typewriter */
  useEffect(() => {
    let idx = 0, charIdx = 0, deleting = false, timer;
    const tick = () => {
      const full = roles[idx];
      if (deleting) {
        charIdx--;
        setTypewriterText(full.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          idx = (idx + 1) % roles.length;
          timer = setTimeout(tick, 600);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        charIdx++;
        setTypewriterText(full.slice(0, charIdx));
        if (charIdx === full.length) {
          deleting = true;
          timer = setTimeout(tick, 2200);
          return;
        }
        timer = setTimeout(tick, 90 + Math.random() * 50);
      }
    };
    const start = setTimeout(tick, 800);
    return () => { clearTimeout(start); clearTimeout(timer); };
  }, []);

  /* Cursor blink */
  useEffect(() => {
    const id = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  /* Loaded */
  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #03061a 0%, #060e24 45%, #04091c 75%, #03061a 100%)', paddingTop: '4rem' }}
    >
      {/* ── CSS animations ── */}
      <style>{`
        @keyframes aurora-pulse {
          0%,100% { opacity:0.7; transform:scale(1); }
          50%      { opacity:1;   transform:scale(1.06); }
        }
        @keyframes ring-breathe {
          0%,100% { box-shadow:0 0 0 1px rgba(96,165,250,0.2),0 0 30px rgba(96,165,250,0.5),0 0 70px rgba(96,165,250,0.25),inset 0 0 30px rgba(96,165,250,0.08); }
          50%      { box-shadow:0 0 0 1px rgba(96,165,250,0.35),0 0 50px rgba(96,165,250,0.7),0 0 100px rgba(96,165,250,0.35),inset 0 0 50px rgba(96,165,250,0.14); }
        }
        @keyframes spin-slow {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes scan-pulse {
          0%,100% { opacity:0.4; transform:translateX(-50%) scaleX(0.75); }
          50%      { opacity:1;   transform:translateX(-50%) scaleX(1); }
        }
        @keyframes corner-blink {
          0%,100% { opacity:0.6; } 50% { opacity:0.15; }
        }
        @keyframes float-sparkle {
          0%,100% { transform:translateY(0) rotate(0deg) scale(1); opacity:0.9; }
          50%      { transform:translateY(-9px) rotate(18deg) scale(1.12); opacity:0.55; }
        }
        @keyframes available-pulse {
          0%,100% { box-shadow:0 0 0 0 rgba(34,197,94,0.4); }
          50%      { box-shadow:0 0 0 5px rgba(34,197,94,0); }
        }
        @keyframes marquee {
          0%   { transform:translateX(0); }
          100% { transform:translateX(-50%); }
        }
        @keyframes bounce-arrow {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(5px); }
        }
        .marquee-wrap { overflow:hidden; }
        .marquee-track {
          display:flex; width:max-content;
          animation: marquee 20s linear infinite;
        }
        .marquee-track:hover { animation-play-state:paused; }
      `}</style>

      <StarCanvas />

      {/* Decorative sparkles */}
      <Sparkle style={{ width:22, height:22, right:'7%', bottom:'22%', animation:'float-sparkle 4s ease-in-out infinite', opacity:0.85 }} />
      <Sparkle style={{ width:11, height:11, right:'18%', top:'28%', animation:'float-sparkle 3.2s ease-in-out infinite 1.1s', opacity:0.45 }} />
      <Sparkle style={{ width: 7, height: 7, left: '5%', top:'25%', animation:'float-sparkle 5s ease-in-out infinite 0.4s', opacity:0.35 }} />
      <Sparkle style={{ width: 8, height: 8, left:'12%', bottom:'30%', animation:'float-sparkle 3.6s ease-in-out infinite 2s', opacity:0.3 }} />

      {/* ── Hero section ── */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-14">

          {/* ══ LEFT: Orb ══ */}
          <ProfileOrb loaded={loaded} />

          {/* ══ RIGHT: Content ══ */}
          <div
            className={`flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            {/* Available badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-900/15 mb-5 text-xs font-mono text-green-400"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <span
                className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"
                style={{ animation: 'available-pulse 2s ease-in-out infinite' }}
              />
              Available for opportunities
            </div>

            {/* Name */}
            <h1
              className="font-mono font-bold text-white leading-none mb-3 tracking-tight"
              style={{ fontSize: 'clamp(3rem, 4.5vw, 4.5rem)' }}
            >
              Balaji<span className="text-blue-400"> R</span>
            </h1>

            {/* Accent line */}
            <div
              className="mb-5 lg:ml-0"
              style={{
                width: 80,
                height: 2.5,
                background: 'linear-gradient(90deg, #3b82f6, #60a5fa, transparent)',
                borderRadius: 2,
              }}
            />

            {/* Typewriter */}
            <div
              className="font-mono text-blue-300 mb-8 h-7 flex items-center"
              style={{ fontSize: '1.05rem', letterSpacing: '0.12em' }}
            >
              <span>{typewriterText}</span>
              <span
                className="inline-block w-[2px] h-5 bg-blue-400 ml-0.5"
                style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
              />
            </div>

            {/* Brief bio */}
            <p
              className="text-gray-400 leading-relaxed mb-8 font-mono max-w-md lg:max-w-none"
              style={{ fontSize: '0.88rem' }}
            >
              Building scalable web apps &amp; AI-powered tools.
              <br className="hidden lg:block" />
              Passionate about Linux, open source &amp; developer experience.
            </p>

            {/* Stat cards */}
            <div className="flex gap-2.5 w-full mb-8 whitespace-nowrap">
              <StatCard icon={Briefcase}  label="Experience"      value="1+ Years"       delay="0ms" />
              <StatCard icon={Layers}     label="Specialization"  value="Full Stack + AI" delay="100ms" />
              <StatCard icon={Code2}      label="Projects"        value="18+ Built"       delay="200ms" />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollTo('#about')}
                className="group flex items-center gap-2 px-8 py-3 rounded-lg font-mono text-sm text-white font-medium transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
                  boxShadow: '0 0 24px rgba(59,130,246,0.45)',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 40px rgba(59,130,246,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 24px rgba(59,130,246,0.45)')}
              >
                About Me
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/resume.pdf"
                download
                className="group flex items-center gap-2 px-8 py-3 rounded-lg font-mono text-sm text-blue-300 border transition-all duration-300"
                style={{ borderColor: 'rgba(96,165,250,0.35)', background: 'rgba(255,255,255,0.02)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.7)'; e.currentTarget.style.background = 'rgba(96,165,250,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.35)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <Download size={14} />
                Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-gray-600 mr-1">FIND ME</span>
              {[
                { href: 'https://github.com/balajirkb', icon: <FaGithub size={15} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/balaji-rkb/', icon: <FaLinkedin size={15} />, label: 'LinkedIn' },
                {
                  onClick: () => scrollTo('#projects'),
                  icon: <Code2 size={14} />,
                  label: 'Projects',
                },
              ].map(({ href, onClick, icon, label }) =>
                href ? (
                  <a
                    key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border text-blue-400 hover:text-white transition-all duration-300"
                    style={{ borderColor: 'rgba(96,165,250,0.3)', background: 'rgba(255,255,255,0.02)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.65)'; e.currentTarget.style.background = 'rgba(96,165,250,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    {icon}
                  </a>
                ) : (
                  <button
                    key={label} onClick={onClick} aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border text-blue-400 hover:text-white transition-all duration-300"
                    style={{ borderColor: 'rgba(96,165,250,0.3)', background: 'rgba(255,255,255,0.02)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.65)'; e.currentTarget.style.background = 'rgba(96,165,250,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    {icon}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div
          className={`absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-1000 delay-1000 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-[9px] font-mono text-gray-600 tracking-widest uppercase">Scroll</span>
          <ArrowDown
            size={14}
            className="text-blue-500"
            style={{ animation: 'bounce-arrow 1.6s ease-in-out infinite' }}
          />
        </div>

        {/* ── Bottom marquee ── */}
        <div
          className={`absolute bottom-0 left-0 right-0 marquee-wrap border-t py-2 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ borderColor: 'rgba(96,165,250,0.08)' }}
        >
          <div className="marquee-track">
            {[...Array(2)].flatMap((_, d) =>
              ['ARCH LINUX', 'REACT', 'NODE.JS', 'OPEN SOURCE', 'AI', 'MERN STACK', 'NEXT.JS', 'TYPESCRIPT', 'DEVOPS', 'PYTHON'].map(
                (item, i) => (
                  <span key={`${d}-${i}`} className="mx-5 font-mono tracking-widest" style={{ fontSize: 10, color: 'rgba(100,116,139,0.7)' }}>
                    {item}
                    <span style={{ margin: '0 10px', color: 'rgba(59,130,246,0.35)' }}>•</span>
                  </span>
                )
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
