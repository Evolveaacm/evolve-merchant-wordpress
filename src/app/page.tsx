'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactFormSimple';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [stat1, setStat1] = useState(0);
  const [stat2, setStat2] = useState(0);
  const hasAnimatedStats = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 120; i++) {
      const speedMultiplier1 = 0.5;
      const sizeValue = Number(Math.random() * 2.5 + 1);
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: sizeValue,
        speedX: (Math.random() - 0.5) * speedMultiplier1,
        speedY: (Math.random() - 0.5) * speedMultiplier1,
        opacity: Math.random() * 0.4 + 0.3,
      });
    }

    // Add larger glowing particles
    for (let i = 0; i < 10; i++) {
      const speedMultiplier2 = 0.3;
      const sizeValue = Number(Math.random() * 3 + 2);
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: sizeValue,
        speedX: (Math.random() - 0.5) * speedMultiplier2,
        speedY: (Math.random() - 0.5) * speedMultiplier2,
        opacity: Math.random() * 0.25 + 0.35,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Add subtle glow effect to particles
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 1.5
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${particle.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      // Draw connections
      particles.forEach((p1, i: number) => {
        particles.slice(i + 1).forEach((p2: typeof p1) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Count-up animation for stats
  useEffect(() => {
    if (visibleSections.has('solutions') && !hasAnimatedStats.current) {
      hasAnimatedStats.current = true;

      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setStat1(Math.floor(154 * easeOut));
        setStat2(Math.floor(430 * easeOut));

        if (step >= steps) {
          clearInterval(timer);
          setStat1(154);
          setStat2(430);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [visibleSections]);

  return (
    <div className="relative min-h-screen bg-[#0f1419] text-white overflow-x-hidden">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-0 text-white font-light tracking-[0.15em] leading-none text-[18px] md:text-[22px]">
            {/* Custom E - top line disconnected from middle and bottom */}
            <svg className="w-[9px] md:w-[11px] h-[14px] md:h-[17px]" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '0.15em'}}>
              {/* Top line - disconnected */}
              <rect x="0" y="2" width="12" height="2" fill="white"/>
              {/* Vertical connector from middle to bottom */}
              <rect x="0" y="10" width="2" height="12" fill="white"/>
              {/* Middle line */}
              <rect x="0" y="10" width="12" height="2" fill="white"/>
              {/* Bottom line */}
              <rect x="0" y="20" width="12" height="2" fill="white"/>
            </svg>
            <span>VOLVE</span>
          </div>
          <div className="text-white text-[8px] md:text-[9px] font-medium tracking-[0.35em] mt-1.5">
            MERCHANT SERVICES
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm hover:text-blue-500 transition-colors">HOME</Link>
          <Link href="/solutions" className="text-sm hover:text-blue-500 transition-colors">SOLUTIONS</Link>
          <Link href="/products" className="text-sm hover:text-blue-500 transition-colors">PRODUCTS</Link>
          <a href="#contact" className="text-sm hover:text-blue-500 transition-colors">CONTACT</a>
          <a href="https://app.advancefundsnetwork.com/application/KHlip10F2ONcpL7e45YxEhS7eoB3?partner=fR5kLIriQzc7gXgOmvEKZpw2UCl2" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-300 transition-colors text-[#ffffff]">
            FUNDING
          </a>
          <a href="tel:+18332069763" className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-sm rounded hover:bg-white/20 transition-all inline-block text-white shadow-lg">
            (833) 206-9763
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-20 bg-[#0f1419]/95 backdrop-blur-lg border-b border-blue-900/40">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm hover:text-blue-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/solutions"
              className="text-sm hover:text-blue-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              SOLUTIONS
            </Link>
            <Link
              href="/products"
              className="text-sm hover:text-blue-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              PRODUCTS
            </Link>
            <a
              href="#contact"
              className="text-sm hover:text-blue-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </a>
            <a
              href="https://app.advancefundsnetwork.com/application/KHlip10F2ONcpL7e45YxEhS7eoB3?partner=fR5kLIriQzc7gXgOmvEKZpw2UCl2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-300 transition-colors py-2 text-[#ffffff]"
              onClick={() => setMobileMenuOpen(false)}
            >
              FUNDING
            </a>
            <a href="tel:+18332069763" className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded hover:bg-white/20 transition-all w-full inline-block text-center shadow-lg">
              (833) 206-9763
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 grid lg:grid-cols-2 gap-4 lg:gap-6 px-6 md:px-12 py-6 md:py-12 lg:py-32">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 md:mb-6">
            Fueling Growth. <br />
            Driving Change. <br />
            <span className="font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
              EVOLVE
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8">
            Evolve Merchant Services—driven by what's next.
          </p>
          <div className="flex gap-4 mb-6 lg:mb-0">
            <a href="https://calendly.com/-evolvemerchants" target="_blank" rel="noopener noreferrer" className="px-6 md:px-8 py-2.5 md:py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded font-semibold hover:bg-white/20 transition-all inline-block text-center text-sm md:text-base shadow-lg hover:shadow-white/30" style={{boxShadow: '0 0 20px rgba(255, 255, 255, 0.08), 0 0 40px rgba(255, 255, 255, 0.04)'}}>
              Book A Call
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/85 rounded-lg md:rounded-2xl border-2 border-blue-500/40 p-4 md:p-6 shadow-2xl">
              {/* Header */}
              <div className="mb-4 md:mb-6 flex items-center justify-between border-b border-blue-500/30 pb-3 md:pb-4">
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-white">Payment Dashboard</h3>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"></div>
                </div>
              </div>

              {/* Graph Section */}
              <div className="mb-4 md:mb-6 bg-slate-700/40 rounded-md md:rounded-xl h-28 md:h-36 overflow-hidden border border-blue-500/30 shadow-inner">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {/* Filled area */}
                  <path
                    d="M0,75 Q25,70 50,60 T100,35 L100,100 L0,100 Z"
                    fill="url(#graphGradient)"
                  />
                  {/* Line */}
                  <path
                    d="M0,75 Q25,70 50,60 T100,35"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Payment Cards */}
              <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="bg-slate-700/50 border-2 border-blue-500/30 rounded-md md:rounded-xl p-2 md:p-3 hover:border-blue-400/50 transition-all shadow-lg">
                  <div className="text-[9px] md:text-xs text-gray-300 mb-0.5 md:mb-1 font-medium">Visa</div>
                  <div className="text-xs md:text-base lg:text-lg font-bold text-white mb-0.5">$62,860</div>
                  <div className="text-[8px] md:text-[10px] text-cyan-400 font-semibold">+$5,744</div>
                </div>
                <div className="bg-slate-700/50 border-2 border-blue-500/30 rounded-md md:rounded-xl p-2 md:p-3 hover:border-blue-400/50 transition-all shadow-lg">
                  <div className="text-[9px] md:text-xs text-gray-300 mb-0.5 md:mb-1 font-medium">Amex</div>
                  <div className="text-xs md:text-base lg:text-lg font-bold text-white mb-0.5">$182,867</div>
                  <div className="text-[8px] md:text-[10px] text-cyan-400 font-semibold">+$15,898</div>
                </div>
                <div className="bg-slate-700/50 border-2 border-blue-500/30 rounded-md md:rounded-xl p-2 md:p-3 hover:border-blue-400/50 transition-all shadow-lg">
                  <div className="text-[9px] md:text-xs text-gray-300 mb-0.5 md:mb-1 font-medium">Mastercard</div>
                  <div className="text-xs md:text-base lg:text-lg font-bold text-white mb-0.5">$40,002</div>
                  <div className="text-[8px] md:text-[10px] text-cyan-400 font-semibold">+$2,669</div>
                </div>
              </div>

              {/* Sales by Payment Type & Donut Chart */}
              <div className="flex items-center justify-between gap-2 md:gap-4">
                <div className="flex-1">
                  <h4 className="text-[9px] md:text-xs text-gray-400 mb-1 md:mb-2">Sales by Payment Type</h4>
                  <div className="space-y-0.5 md:space-y-1">
                    <div className="text-[9px] md:text-xs">
                      <span className="text-blue-500 font-medium">Visa 22%</span>
                    </div>
                    <div className="text-[9px] md:text-xs">
                      <span className="text-indigo-500 font-medium">Amex 64%</span>
                    </div>
                    <div className="text-[9px] md:text-xs">
                      <span className="text-cyan-500 font-medium">Mastercard 14%</span>
                    </div>
                  </div>
                </div>

                {/* Donut Chart */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Visa - 22% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="20"
                      strokeDasharray="55 345"
                      strokeDashoffset="0"
                    />
                    {/* Amex - 64% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="20"
                      strokeDasharray="160 240"
                      strokeDashoffset="-55"
                    />
                    {/* Mastercard - 14% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="20"
                      strokeDasharray="35 365"
                      strokeDashoffset="-215"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="relative z-10 py-12 md:py-16 border-y border-blue-900/40 bg-gradient-to-r from-blue-950/20 via-blue-900/10 to-blue-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5"></div>
        <div className="relative flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-4 lg:gap-0 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto">
          {/* Valor PayTech */}
          <div className="relative flex items-center gap-1.5 md:gap-2 opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110 group animate-pulse-subtle" style={{filter: 'drop-shadow(0 0 6px rgba(0,200,150,0.15)) drop-shadow(0 0 12px rgba(0,102,255,0.1))'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-blue-500/0 group-hover:from-green-500/10 group-hover:to-blue-500/10 blur-3xl transition-all duration-500 rounded-full scale-150"></div>
            <svg className="relative w-7 h-9 md:w-9 md:h-11" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow(0 0 4px rgba(0,200,150,0.2)) drop-shadow(0 0 2px rgba(0,102,255,0.15))'}}>
              <path d="M40 0L0 20V45C0 70 40 96 40 96C40 96 80 70 80 45V20L40 0Z" fill="url(#valorShield)"/>
              <path d="M40 12L12 25V45C12 62 40 80 40 80C40 80 68 62 68 45V25L40 12Z" fill="#0a0f1e"/>
              <path d="M40 24L24 32V45C24 56 40 68 40 68V24Z" fill="#0066FF"/>
              <defs>
                <linearGradient id="valorShield" x1="40" y1="0" x2="40" y2="96" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00C896"/>
                  <stop offset="100%" stopColor="#0066FF"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="relative">
              <div className="text-sm md:text-base font-bold text-white tracking-wider group-hover:text-blue-100 transition-all duration-300" style={{textShadow: '0 0 8px rgba(0,200,150,0.15)'}}>VALOR</div>
              <div className="text-[8px] md:text-[9px] text-white tracking-widest -mt-1 group-hover:text-blue-100 transition-all duration-300" style={{textShadow: '0 0 6px rgba(0,102,255,0.15)'}}>PAYTECH</div>
            </div>
          </div>

          {/* Ingenico */}
          <div className="relative opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110 group animate-pulse-subtle" style={{filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.12)) drop-shadow(0 0 12px rgba(59,130,246,0.08))', animationDelay: '0.5s'}}>
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 blur-3xl transition-all duration-500 rounded-full scale-150"></div>
            <svg className="relative w-20 h-10 md:w-24 md:h-12" viewBox="0 0 220 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow(0 0 3px rgba(96,165,250,0.2))'}}>
              <circle cx="20" cy="20" r="8" fill="#60a5fa"/>
              <rect x="35" y="17" width="150" height="6" fill="#3b82f6"/>
              <circle cx="200" cy="20" r="8" fill="#60a5fa"/>
              <text x="10" y="70" fill="#ffffff" fontSize="42" fontWeight="bold" fontFamily="Arial, sans-serif" className="group-hover:fill-[#cbd5e1] transition-all duration-300">ingenico</text>
            </svg>
          </div>

          {/* PAX */}
          <div className="relative opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110 group animate-pulse-subtle" style={{filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.12)) drop-shadow(0 0 12px rgba(59,130,246,0.08))', animationDelay: '1s'}}>
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 blur-3xl transition-all duration-500 rounded-full scale-150"></div>
            <svg className="relative w-24 h-11 md:w-30 md:h-14" viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow(0 0 3px rgba(96,165,250,0.2))'}}>
              {/* Two overlapping elliptical rings */}
              <ellipse cx="57" cy="50" rx="22" ry="35" fill="none" stroke="#7c3aed" strokeWidth="10" transform="rotate(30 57 50)"/>
              <ellipse cx="40" cy="50" rx="22" ry="35" fill="none" stroke="#60a5fa" strokeWidth="10" transform="rotate(30 40 50)"/>
              {/* PAX text */}
              <text x="100" y="62" fill="#ffffff" fontSize="48" fontWeight="900" fontFamily="Arial, sans-serif" className="group-hover:fill-[#cbd5e1] transition-all duration-300">PAX</text>
            </svg>
          </div>

          {/* Dejavoo */}
          <div className="relative opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110 group animate-pulse-subtle" style={{filter: 'drop-shadow(0 0 6px rgba(139,92,246,0.12)) drop-shadow(0 0 12px rgba(139,92,246,0.08))', animationDelay: '1.15s'}}>
            <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/10 blur-3xl transition-all duration-500 rounded-full scale-150"></div>
            <svg className="relative w-24 h-13 md:w-30 md:h-16" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow(0 0 3px rgba(167,139,250,0.2))'}}>
              {/* Concentric purple arcs - matching official Dejavoo logo */}
              <g transform="translate(130, 45)">
                {/* Outermost arc */}
                <path d="M -40 0 A 40 40 0 0 1 40 0" fill="none" stroke="#9333ea" strokeWidth="5" strokeLinecap="round"/>
                {/* Second arc */}
                <path d="M -30 0 A 30 30 0 0 1 30 0" fill="none" stroke="#9333ea" strokeWidth="5" strokeLinecap="round"/>
                {/* Third arc */}
                <path d="M -20 0 A 20 20 0 0 1 20 0" fill="none" stroke="#9333ea" strokeWidth="5" strokeLinecap="round"/>
                {/* Innermost arc */}
                <path d="M -10 0 A 10 10 0 0 1 10 0" fill="none" stroke="#9333ea" strokeWidth="5" strokeLinecap="round"/>
              </g>
              {/* Dejavoo text - white, no tagline */}
              <text x="130" y="90" fill="#ffffff" fontSize="42" fontWeight="bold" fontFamily="Arial, sans-serif" textAnchor="middle" className="group-hover:fill-[#cbd5e1] transition-all duration-300">Dejavoo</text>
            </svg>
          </div>

          {/* NMI */}
          <div className="relative opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110 group animate-pulse-subtle" style={{filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.12)) drop-shadow(0 0 12px rgba(59,130,246,0.08))', animationDelay: '1.25s'}}>
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 blur-3xl transition-all duration-500 rounded-full scale-150"></div>
            <svg className="relative w-18 h-11 md:w-23 md:h-14" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow(0 0 3px rgba(96,165,250,0.2))'}}>
              {/* nmi text in white */}
              <text x="110" y="75" fill="#ffffff" fontSize="52" fontWeight="bold" fontFamily="Arial, sans-serif" textAnchor="middle" className="group-hover:fill-[#cbd5e1] transition-all duration-300">nmi</text>
            </svg>
          </div>

          {/* Authorize.Net */}
          <div className="relative opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110 group animate-pulse-subtle" style={{filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.15)) drop-shadow(0 0 12px rgba(59,130,246,0.1))', animationDelay: '1.5s'}}>
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 blur-3xl transition-all duration-500 rounded-full scale-150"></div>
            <svg className="relative w-32 h-9 md:w-40 md:h-12" viewBox="0 0 360 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow(0 0 4px rgba(59,130,246,0.2))'}}>
              <defs>
                <linearGradient id="authorizeDotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4285F4"/>
                  <stop offset="100%" stopColor="#2563eb"/>
                </linearGradient>
              </defs>
              {/* Large blue circle */}
              <circle cx="30" cy="35" r="22" fill="url(#authorizeDotGradient)" filter="url(#logoGlow)"/>
              {/* Small yellow circle */}
              <circle cx="42" cy="58" r="10" fill="#FDB913" filter="url(#logoGlow)"/>
              {/* Authorize.Net text */}
              <text x="65" y="58" fill="#ffffff" fontSize="32" fontWeight="700" fontFamily="Arial, sans-serif" className="group-hover:fill-[#cbd5e1] transition-all duration-300">Authorize.Net</text>
              <defs>
                <filter id="logoGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className={`relative z-10 px-6 md:px-12 py-12 md:py-20 lg:py-32 transition-all duration-1000 ${visibleSections.has('solutions') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs md:text-sm text-blue-500 mb-4 uppercase tracking-wider">Solutions</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-12 lg:mb-16">
            Driving Scalable Growth Through Advanced Payment Technology
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-12 lg:mb-16">
            From mobile readers to full POS systems, Evolve equips you to accept payments your way—secure, simple, and cost-effective.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-6 md:p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">Low-Risk Processing</h3>
              <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6 text-center">
                Evolve's low-risk processing is built for compliant businesses in retail, hospitality, and professional services. Enjoy fast approvals, clear pricing, and smooth integrations that make onboarding effortless.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-6 md:p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">High-Risk Processing</h3>
              <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6 text-center">
                From Medical Spas to Online Casinos, Evolve navigates high-risk industries with precision. Our strong banking network, intelligent fraud protection, and tailored underwriting ensure your business stays approved and uninterrupted.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-6 md:p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">Business Funding</h3>
              <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6 text-center">
                Evolve's Business Funding solutions connect you with a nationwide network of 150+ direct lenders to secure fast, flexible capital tailored to your goals. Whether you're expanding, stabilizing cash flow, or launching new initiatives, Evolve delivers competitive terms, rapid approvals, and personalized support.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-6 md:p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">ACH Processing</h3>
              <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6 text-center">
                Evolve's ACH processing offers a secure, cost-effective way to move funds directly between bank accounts—ideal for recurring payments, invoicing, and B2B transactions. With fast settlement times and seamless integration, it's a reliable solution for businesses seeking efficient, low-cost payment alternatives
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-12 md:gap-16 lg:gap-24 mt-8 md:mt-12 lg:mt-16 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat1}M
              </div>
              <div className="text-xs md:text-sm text-gray-300">Daily U.S. Card Transactions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat2}M
              </div>
              <div className="text-xs md:text-sm text-gray-300">Daily U.S. Card Volume</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className={`relative z-10 px-6 md:px-12 py-12 md:py-20 lg:py-32 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent transition-all duration-1000 ${visibleSections.has('products') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs md:text-sm text-blue-500 mb-4 uppercase tracking-wider">Products</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-12 lg:mb-16">
            Payments that follow your business—anytime, anywhere
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-12 lg:mb-16">
            From mobile card readers to enterprise-grade POS systems—Evolve equips you to accept payments your way: secure, seamless, and evolved.
          </p>

          {/* EvolvePayments */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-24 lg:mb-32 items-center">
            <div className="relative order-2 lg:order-1 hidden lg:block">
              <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-6 md:p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-800/40 to-blue-950/60 rounded-lg md:rounded-xl flex items-center justify-center overflow-hidden relative p-4 md:p-6 lg:p-8">
                  {/* iPhone Payment Dashboard Mockup - Realistic Style */}
                  <svg viewBox="0 0 320 650" className="w-full h-full max-w-sm" style={{filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7))'}}>
                    <defs>
                      {/* Device gradients */}
                      <linearGradient id="deviceFrame" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="100%" stopColor="#0a0a0a" />
                      </linearGradient>
                      <linearGradient id="screenBg" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0f172a" />
                        <stop offset="100%" stopColor="#020617" />
                      </linearGradient>
                    </defs>

                    {/* iPhone shadow */}
                    <ellipse cx="160" cy="630" rx="100" ry="12" fill="#000000" opacity="0.6"/>

                    {/* iPhone 15 Pro Frame */}
                    <rect x="20" y="20" width="280" height="610" rx="50" fill="url(#deviceFrame)" stroke="#2a2a2a" strokeWidth="3"/>

                    {/* Screen */}
                    <rect x="28" y="28" width="264" height="594" rx="46" fill="url(#screenBg)"/>

                    {/* Dynamic Island */}
                    <rect x="110" y="38" width="100" height="30" rx="15" fill="#000000"/>

                    {/* Lightspeed-Style Payment Interface */}
                    <g>
                      {/* Top bar */}
                      <text x="45" y="90" fill="#ffffff" fontSize="12" fontFamily="Arial" fontWeight="600">9:41</text>
                      <g transform="translate(250, 80)">
                        <rect width="2" height="8" fill="#ffffff" opacity="0.7"/>
                        <rect x="3" y="-2" width="2" height="10" fill="#ffffff" opacity="0.8"/>
                        <rect x="6" y="-4" width="2" height="12" fill="#ffffff"/>
                      </g>
                      <circle cx="272" cy="86" r="3" fill="#10b981"/>

                      {/* Header */}
                      <rect x="45" y="110" width="230" height="35" rx="8" fill="#0a0a0a" opacity="0.8"/>
                      <text x="160" y="135" fill="#ffffff" fontSize="16" fontFamily="Arial" fontWeight="700" textAnchor="middle">Payment Dashboard</text>

                      {/* Stats bar */}
                      <rect x="50" y="160" width="220" height="50" rx="8" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                      <text x="160" y="178" fill="#94a3b8" fontSize="10" fontFamily="Arial" fontWeight="600" textAnchor="middle" letterSpacing="1">TODAY'S TOTAL</text>
                      <text x="160" y="202" fill="#10b981" fontSize="24" fontFamily="Arial" fontWeight="900" textAnchor="middle">$47,892</text>

                      {/* Card type tiles - 3 cards stacked */}
                      {/* Visa */}
                      <rect x="50" y="225" width="220" height="75" rx="10" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                      <text x="65" y="250" fill="#94a3b8" fontSize="12" fontFamily="Arial" fontWeight="700" textAnchor="start">VISA</text>
                      <text x="255" y="255" fill="#ffffff" fontSize="22" fontFamily="Arial" fontWeight="900" textAnchor="end">$18,432</text>
                      <text x="65" y="275" fill="#10b981" fontSize="9" fontFamily="Arial" textAnchor="start">154 transactions</text>
                      <text x="255" y="275" fill="#10b981" fontSize="9" fontFamily="Arial" textAnchor="end">+12.4%</text>
                      {/* Visa icon bars */}
                      <rect x="65" y="282" width="185" height="4" rx="2" fill="#333333"/>
                      <rect x="65" y="282" width="110" height="4" rx="2" fill="#10b981"/>

                      {/* Mastercard */}
                      <rect x="50" y="315" width="220" height="75" rx="10" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                      <text x="65" y="340" fill="#94a3b8" fontSize="12" fontFamily="Arial" fontWeight="700" textAnchor="start">MASTERCARD</text>
                      <text x="255" y="345" fill="#ffffff" fontSize="22" fontFamily="Arial" fontWeight="900" textAnchor="end">$21,674</text>
                      <text x="65" y="365" fill="#10b981" fontSize="9" fontFamily="Arial" textAnchor="start">189 transactions</text>
                      <text x="255" y="365" fill="#10b981" fontSize="9" fontFamily="Arial" textAnchor="end">+18.7%</text>
                      {/* Mastercard icon bars */}
                      <rect x="65" y="372" width="185" height="4" rx="2" fill="#333333"/>
                      <rect x="65" y="372" width="140" height="4" rx="2" fill="#10b981"/>

                      {/* Amex */}
                      <rect x="50" y="405" width="220" height="75" rx="10" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                      <text x="65" y="430" fill="#94a3b8" fontSize="12" fontFamily="Arial" fontWeight="700" textAnchor="start">AMEX</text>
                      <text x="255" y="435" fill="#ffffff" fontSize="22" fontFamily="Arial" fontWeight="900" textAnchor="end">$7,786</text>
                      <text x="65" y="455" fill="#10b981" fontSize="9" fontFamily="Arial" textAnchor="start">67 transactions</text>
                      <text x="255" y="455" fill="#10b981" fontSize="9" fontFamily="Arial" textAnchor="end">+8.2%</text>
                      {/* Amex icon bars */}
                      <rect x="65" y="462" width="185" height="4" rx="2" fill="#333333"/>
                      <rect x="65" y="462" width="60" height="4" rx="2" fill="#10b981"/>

                      {/* Action buttons */}
                      <rect x="50" y="495" width="105" height="35" rx="8" fill="#10b981"/>
                      <text x="102.5" y="517" fill="#ffffff" fontSize="12" fontFamily="Arial" fontWeight="700" textAnchor="middle">Analytics</text>

                      <rect x="165" y="495" width="105" height="35" rx="8" fill="#1a1a1a" stroke="#10b981" strokeWidth="1"/>
                      <text x="217.5" y="517" fill="#10b981" fontSize="12" fontFamily="Arial" fontWeight="700" textAnchor="middle">Export</text>
                    </g>

                    {/* Home indicator */}
                    <rect x="135" y="608" width="50" height="4" rx="2" fill="#ffffff" opacity="0.3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Payments</h3>
              <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6">
                Process transactions on your phone, tablet, or desktop—no hardware needed.
              </p>
              <a href="#contact" className="px-4 md:px-6 py-2 md:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base rounded hover:bg-white/20 transition-all inline-block text-center shadow-lg">
                EXPLORE OPTIONS
              </a>
            </div>
          </div>

          {/* EvolveTerminal */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-24 lg:mb-32 items-center">
            <div className="order-1 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Terminal</h3>
              <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6">
                All-in-one card readers, designed for mobility and precision.
              </p>
              <a href="#contact" className="px-4 md:px-6 py-2 md:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base rounded hover:bg-white/20 transition-all inline-block text-center shadow-lg">
                EXPLORE OPTIONS
              </a>
            </div>
            <div className="order-2 lg:order-2 hidden lg:block">
              <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-6 md:p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-800/40 to-blue-950/60 rounded-lg md:rounded-xl flex items-center justify-center overflow-hidden relative p-4 md:p-6 lg:p-8">
                  {/* Modern Payment Terminal - Valor VP550 Style */}
                  <svg viewBox="0 0 300 450" className="w-full h-full max-w-xs" style={{filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7))'}}>
                    <defs>
                      <linearGradient id="terminalBody" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="100%" stopColor="#0a0a0a" />
                      </linearGradient>
                      <linearGradient id="terminalScreen" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0f172a" />
                        <stop offset="100%" stopColor="#020617" />
                      </linearGradient>
                    </defs>

                    {/* Terminal shadow */}
                    <ellipse cx="150" cy="435" rx="80" ry="10" fill="#000000" opacity="0.6"/>

                    {/* Terminal body */}
                    <rect x="50" y="50" width="200" height="380" rx="15" fill="url(#terminalBody)" stroke="#2a2a2a" strokeWidth="2"/>

                    {/* Screen */}
                    <rect x="65" y="65" width="170" height="200" rx="8" fill="url(#terminalScreen)"/>

                    {/* Screen content - Transaction display */}
                    <g>
                      {/* Payment indicator */}
                      <circle cx="150" cy="95" r="8" fill="#10b981" opacity="0.5"/>

                      {/* Amount */}
                      <text x="150" y="140" fill="#ffffff" fontSize="32" fontFamily="Arial" fontWeight="900" textAnchor="middle">$124.50</text>

                      {/* Status */}
                      <rect x="95" y="155" width="110" height="20" rx="10" fill="#10b981" opacity="0.3"/>
                      <text x="150" y="168" fill="#10b981" fontSize="11" fontFamily="Arial" fontWeight="600" textAnchor="middle">APPROVED</text>

                      {/* Transaction details */}
                      <text x="150" y="195" fill="#94a3b8" fontSize="9" fontFamily="Arial" textAnchor="middle">Visa ****4532</text>
                      <text x="150" y="210" fill="#94a3b8" fontSize="8" fontFamily="Arial" textAnchor="middle">12:34 PM • 10/22/2025</text>

                      {/* Progress dots */}
                      <circle cx="130" cy="245" r="3" fill="#3b82f6"/>
                      <circle cx="150" cy="245" r="3" fill="#3b82f6"/>
                      <circle cx="170" cy="245" r="3" fill="#3b82f6" opacity="0.3"/>
                    </g>

                    {/* Keypad area */}
                    <g>
                      {/* Number pad - 3x4 grid */}
                      {[0,1,2].map((row) =>
                        [0,1,2].map((col) => {
                          const x = 80 + col * 45;
                          const y = 290 + row * 35;
                          const num = row * 3 + col + 1;
                          return (
                            <g key={`${row}-${col}`}>
                              <rect x={x} y={y} width="35" height="28" rx="4" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                              <text x={x + 17.5} y={y + 18} fill="#94a3b8" fontSize="14" fontFamily="Arial" fontWeight="600" textAnchor="middle">{num}</text>
                            </g>
                          );
                        })
                      )}
                      {/* Bottom row - special keys */}
                      <rect x="80" y="395" width="35" height="28" rx="4" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                      <text x="97.5" y="413" fill="#94a3b8" fontSize="12" fontFamily="Arial" fontWeight="600" textAnchor="middle">⨯</text>

                      <rect x="125" y="395" width="35" height="28" rx="4" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                      <text x="142.5" y="413" fill="#94a3b8" fontSize="14" fontFamily="Arial" fontWeight="600" textAnchor="middle">0</text>

                      <rect x="170" y="395" width="35" height="28" rx="4" fill="#10b981" stroke="#10b981" strokeWidth="1"/>
                      <text x="187.5" y="413" fill="#ffffff" fontSize="12" fontFamily="Arial" fontWeight="700" textAnchor="middle">✓</text>
                    </g>

                    {/* Card slot */}
                    <rect x="70" y="440" width="160" height="8" rx="2" fill="#0a0a0a" stroke="#333333" strokeWidth="1"/>
                    <text x="150" y="455" fill="#666666" fontSize="7" fontFamily="Arial" textAnchor="middle">INSERT CARD</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* EvolveRegister */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 hidden lg:block">
              <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-8 md:p-10 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-800/40 to-blue-950/60 rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden relative p-4 md:p-6 lg:p-8">
                  {/* POS Multi-Device Mockup */}
                  <svg viewBox="0 0 800 600" className="w-full h-full" style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))'}}>
                    <defs>
                      <linearGradient id="laptopBody" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2a2a2a" />
                        <stop offset="100%" stopColor="#1a1a1a" />
                      </linearGradient>
                      <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0f172a" />
                        <stop offset="100%" stopColor="#020617" />
                      </linearGradient>
                    </defs>

                    {/* Laptop - Main device */}
                    <g transform="translate(50, 80)">
                      {/* Laptop shadow */}
                      <ellipse cx="300" cy="390" rx="250" ry="15" fill="#000000" opacity="0.4"/>

                      {/* Laptop screen */}
                      <rect x="100" y="20" width="400" height="280" rx="8" fill="url(#laptopBody)" stroke="#333333" strokeWidth="3"/>
                      <rect x="110" y="30" width="380" height="260" rx="4" fill="url(#screenGlow)"/>

                      {/* POS Interface on laptop */}
                      <g>
                        {/* Top bar */}
                        <rect x="110" y="30" width="380" height="30" fill="#0a0a0a" opacity="0.8"/>
                        <text x="300" y="50" fill="#ffffff" fontSize="12" fontFamily="Arial" fontWeight="700" textAnchor="middle">Point of Sale</text>

                        {/* Product grid - 3x2 - Terminal color scheme */}
                        <rect x="130" y="75" width="110" height="80" rx="6" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                        <text x="185" y="110" fill="#94a3b8" fontSize="11" fontFamily="Arial" fontWeight="700" textAnchor="middle">Beverages</text>
                        <text x="185" y="130" fill="#ffffff" fontSize="16" fontFamily="Arial" fontWeight="900" textAnchor="middle">$2.4K</text>

                        <rect x="250" y="75" width="110" height="80" rx="6" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                        <text x="305" y="110" fill="#94a3b8" fontSize="11" fontFamily="Arial" fontWeight="700" textAnchor="middle">Food</text>
                        <text x="305" y="130" fill="#ffffff" fontSize="16" fontFamily="Arial" fontWeight="900" textAnchor="middle">$4.8K</text>

                        <rect x="370" y="75" width="110" height="80" rx="6" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                        <text x="425" y="110" fill="#94a3b8" fontSize="11" fontFamily="Arial" fontWeight="700" textAnchor="middle">Desserts</text>
                        <text x="425" y="130" fill="#ffffff" fontSize="16" fontFamily="Arial" fontWeight="900" textAnchor="middle">$1.2K</text>

                        <rect x="130" y="165" width="110" height="80" rx="6" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                        <text x="185" y="200" fill="#94a3b8" fontSize="11" fontFamily="Arial" fontWeight="700" textAnchor="middle">Retail</text>
                        <text x="185" y="220" fill="#ffffff" fontSize="16" fontFamily="Arial" fontWeight="900" textAnchor="middle">$3.6K</text>

                        <rect x="250" y="165" width="110" height="80" rx="6" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                        <text x="305" y="200" fill="#94a3b8" fontSize="11" fontFamily="Arial" fontWeight="700" textAnchor="middle">Services</text>
                        <text x="305" y="220" fill="#ffffff" fontSize="16" fontFamily="Arial" fontWeight="900" textAnchor="middle">$2.9K</text>

                        <rect x="370" y="165" width="110" height="80" rx="6" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                        <text x="425" y="200" fill="#94a3b8" fontSize="11" fontFamily="Arial" fontWeight="700" textAnchor="middle">Other</text>
                        <text x="425" y="220" fill="#ffffff" fontSize="16" fontFamily="Arial" fontWeight="900" textAnchor="middle">$892</text>

                        {/* Total bar */}
                        <rect x="130" y="255" width="350" height="25" rx="4" fill="#0a0a0a" stroke="#333333" strokeWidth="1"/>
                        <text x="200" y="272" fill="#94a3b8" fontSize="11" fontFamily="Arial" fontWeight="700">Today's Total:</text>
                        <text x="410" y="272" fill="#10b981" fontSize="13" fontFamily="Arial" fontWeight="900" textAnchor="end">$15,792</text>
                      </g>

                      {/* Laptop base */}
                      <path d="M 70 300 L 530 300 L 550 330 L 50 330 Z" fill="url(#laptopBody)" stroke="#333333" strokeWidth="2"/>
                      <rect x="280" y="330" width="40" height="6" rx="3" fill="#1a1a1a"/>
                    </g>

                    {/* Tablet - Right side */}
                    <g transform="translate(550, 180)">
                      {/* Tablet shadow */}
                      <ellipse cx="75" cy="280" rx="60" ry="8" fill="#000000" opacity="0.4"/>

                      {/* Tablet body */}
                      <rect x="20" y="50" width="110" height="150" rx="8" fill="url(#laptopBody)" stroke="#2a2a2a" strokeWidth="2"/>
                      <rect x="26" y="56" width="98" height="138" rx="4" fill="url(#screenGlow)"/>

                      {/* Tablet screen content */}
                      <g>
                        <text x="75" y="75" fill="#ffffff" fontSize="7" fontFamily="Arial" fontWeight="700" textAnchor="middle">Quick Sale</text>

                        {/* 2x2 grid - Terminal color scheme */}
                        <rect x="35" y="85" width="35" height="30" rx="3" fill="#1a1a1a" stroke="#333333" strokeWidth="0.5"/>
                        <text x="52.5" y="104" fill="#94a3b8" fontSize="7" fontFamily="Arial" fontWeight="700" textAnchor="middle">Coffee</text>

                        <rect x="80" y="85" width="35" height="30" rx="3" fill="#1a1a1a" stroke="#333333" strokeWidth="0.5"/>
                        <text x="97.5" y="104" fill="#94a3b8" fontSize="7" fontFamily="Arial" fontWeight="700" textAnchor="middle">Tea</text>

                        <rect x="35" y="125" width="35" height="30" rx="3" fill="#1a1a1a" stroke="#333333" strokeWidth="0.5"/>
                        <text x="52.5" y="144" fill="#94a3b8" fontSize="7" fontFamily="Arial" fontWeight="700" textAnchor="middle">Pastry</text>

                        <rect x="80" y="125" width="35" height="30" rx="3" fill="#1a1a1a" stroke="#333333" strokeWidth="0.5"/>
                        <text x="97.5" y="144" fill="#94a3b8" fontSize="7" fontFamily="Arial" fontWeight="700" textAnchor="middle">Snack</text>

                        {/* Total */}
                        <rect x="35" y="165" width="80" height="18" rx="3" fill="#10b981"/>
                        <text x="75" y="177" fill="#ffffff" fontSize="8" fontFamily="Arial" fontWeight="900" textAnchor="middle">$8.50</text>
                      </g>

                      {/* Home button */}
                      <circle cx="75" cy="213" r="4" fill="#1a1a1a" stroke="#333333" strokeWidth="1"/>
                    </g>

                    {/* Phone - Left front */}
                    <g transform="translate(20, 320)">
                      {/* Phone shadow */}
                      <ellipse cx="40" cy="190" rx="30" ry="5" fill="#000000" opacity="0.5"/>

                      {/* Phone body */}
                      <rect x="20" y="30" width="60" height="110" rx="8" fill="url(#laptopBody)" stroke="#2a2a2a" strokeWidth="2"/>
                      <rect x="24" y="36" width="52" height="98" rx="4" fill="url(#screenGlow)"/>

                      {/* Notch */}
                      <rect x="35" y="36" width="20" height="4" rx="2" fill="#000000"/>

                      {/* Phone screen content */}
                      <g>
                        <text x="50" y="52" fill="#ffffff" fontSize="5" fontFamily="Arial" fontWeight="700" textAnchor="middle">Mobile POS</text>

                        {/* Items - Terminal color scheme */}
                        <rect x="30" y="60" width="40" height="18" rx="2" fill="#1a1a1a" stroke="#333333" strokeWidth="0.5"/>
                        <text x="50" y="71" fill="#94a3b8" fontSize="5" fontFamily="Arial" fontWeight="700" textAnchor="middle">Item 1</text>

                        <rect x="30" y="82" width="40" height="18" rx="2" fill="#1a1a1a" stroke="#333333" strokeWidth="0.5"/>
                        <text x="50" y="93" fill="#94a3b8" fontSize="5" fontFamily="Arial" fontWeight="700" textAnchor="middle">Item 2</text>

                        {/* Total */}
                        <rect x="30" y="106" width="40" height="15" rx="2" fill="#10b981"/>
                        <text x="50" y="116" fill="#ffffff" fontSize="6" fontFamily="Arial" fontWeight="900" textAnchor="middle">$42.00</text>
                      </g>

                      {/* Home indicator */}
                      <rect x="40" y="128" width="10" height="2" rx="1" fill="#333333"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">POS</h3>
              <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6">
                POS technology that adapts to your business, not the other way around. Clear displays, intuitive interfaces, and seamless transactions.
              </p>
              <a href="#contact" className="px-4 md:px-6 py-2 md:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base rounded hover:bg-white/20 transition-all inline-block text-center shadow-lg">
                EXPLORE OPTIONS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className={`relative z-10 px-6 md:px-12 py-12 md:py-20 lg:py-32 transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8">
              Move your business forward.
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-4 md:mb-6">
              Cut costs. Boost efficiency. Elevate every transaction.

Evolve Merchant Services builds agile payment solutions tailored to your business goals. Ready to innovate? Let's build something that moves your business forward.
            </p>
            <p className="text-base md:text-lg text-gray-300">

            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-900/40 px-6 md:px-12 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Contact Info Section */}
          <div className="text-center mb-6 md:mb-8 pb-6 md:pb-8 border-b border-blue-900/40">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-12 mb-4">
              <a href="mailto:support@evolvemerchants.com" className="flex items-center gap-2 text-gray-200 hover:text-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@evolvemerchants.com</span>
              </a>
              <a href="tel:+18332069763" className="flex items-center gap-2 text-gray-200 hover:text-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(833) 206-9763</span>
              </a>
            </div>
            <p className="text-sm text-gray-300">Hours: Mon-Fri 8:00AM - 5:00PM</p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex flex-col items-center opacity-60">
                <div className="flex items-center gap-0 text-white font-light tracking-[0.15em] leading-none text-[13px]">
                  {/* Custom E - top line disconnected */}
                  <svg className="w-[7px] h-[10px]" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '0.15em'}}>
                    <rect x="0" y="2" width="12" height="2" fill="white"/>
                    <rect x="0" y="10" width="2" height="12" fill="white"/>
                    <rect x="0" y="10" width="12" height="2" fill="white"/>
                    <rect x="0" y="20" width="12" height="2" fill="white"/>
                  </svg>
                  <span>VOLVE</span>
                </div>
                <div className="text-white text-[7px] font-medium tracking-[0.35em] mt-0.5">
                  MERCHANT SERVICES
                </div>
              </div>
              <span className="text-xs md:text-sm text-gray-500">©copyright 2025, Evolve Merchant Services</span>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <a href="https://www.linkedin.com/company/evolve-merchant-services/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578773851860" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-xs md:text-sm text-center">
              <a href="/referral-partners" className="text-gray-300 hover:text-blue-500 transition-colors">Referral Partners</a>
              <a href="/privacy-policy" className="text-gray-300 hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-300 hover:text-blue-500 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
