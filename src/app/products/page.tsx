'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 120)})`;
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

  return (
    <div className="relative min-h-screen bg-[#0f1419] text-white">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <Link href="/" className="flex flex-col items-center">
          <div className="flex items-center gap-0 text-white font-light tracking-[0.15em] leading-none text-[18px] md:text-[22px]">
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
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm hover:text-blue-500 transition-colors">HOME</Link>
          <Link href="/solutions" className="text-sm hover:text-blue-500 transition-colors">SOLUTIONS</Link>
          <Link href="/products" className="text-sm hover:text-blue-500 transition-colors">PRODUCTS</Link>
          <Link href="/#contact" className="text-sm hover:text-blue-500 transition-colors">CONTACT</Link>
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
            <Link href="/" className="text-sm hover:text-blue-500 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              HOME
            </Link>
            <Link href="/solutions" className="text-sm hover:text-blue-500 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              SOLUTIONS
            </Link>
            <Link href="/products" className="text-sm hover:text-blue-500 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              PRODUCTS
            </Link>
            <Link href="/#contact" className="text-sm hover:text-blue-500 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              CONTACT
            </Link>
            <a href="https://app.advancefundsnetwork.com/application/KHlip10F2ONcpL7e45YxEhS7eoB3?partner=fR5kLIriQzc7gXgOmvEKZpw2UCl2" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-300 transition-colors py-2 text-[#ffffff]" onClick={() => setMobileMenuOpen(false)}>
              FUNDING
            </a>
            <a href="tel:+18332069763" className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded hover:bg-white/20 transition-all w-full inline-block text-center shadow-lg">
              (833) 206-9763
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 py-12 md:py-20 lg:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs md:text-sm text-blue-500 mb-4 uppercase tracking-wider">Products</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Modern payment tech —digital, physical, and remote.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Evolve provides everything you need to process payments—securely, seamlessly, and cost-effectively
          </p>
        </div>
      </section>

      {/* Product Suite */}
      <section className="relative z-10 px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs md:text-sm text-blue-500 mb-4 uppercase tracking-wider text-center">Evolve Product Suite</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-12 text-center">Smart Tools for Every Business Type</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-6 md:p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
              <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">Payments</h4>
              <p className="text-sm md:text-base mb-4 md:mb-6 text-center text-[#ffffff]">
                Smart payment tech—ready on any device.
              </p>
              <p className="text-xs md:text-sm text-center text-[#ffffff]">
                Built for flexibility—perfect for on-the-go businesses and remote operations. Get started instantly, hardware required.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
              <svg className="w-12 h-12 mx-auto mb-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <h4 className="text-2xl font-bold mb-4 text-center">Terminal</h4>
              <p className="mb-6 text-center text-[#ffffff]">
                Compact, all-in-one card readers built for mobility and performance.
              </p>
              <p className="text-sm text-[#ffffff] lg:text-center">
                Optimized for streamlined setups with full payment functionality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
              <svg className="w-12 h-12 mx-auto mb-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h4 className="text-2xl font-bold mb-4 text-center">POS</h4>
              <p className="mb-6 text-center text-[#ffffff]">
                Streamlined POS systems built for performance.
              </p>
              <p className="text-sm lg:text-center text-[#ffffff]">
                Perfect for hospitality and retail—adapt features, monitor sales, manage teams, and integrate inventory with ease.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="https://calendly.com/-evolvemerchants" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Payment Types */}
      <section className="relative z-10 px-6 md:px-12 py-20 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm text-blue-500 mb-4 uppercase tracking-wider text-center">Payment Types We Power</h2>
          <h3 className="text-4xl md:text-5xl font-light mb-6 text-center">More Ways to Get Paid</h3>
          <p className="text-xl text-gray-200 mb-12 text-center">
            Whatever your customer prefers, we've got you covered.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {/* Credit & Debit Cards */}
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 p-6 rounded-xl border border-blue-800/20 hover:border-blue-600/50 transition-all text-center">
              <svg className="w-12 h-12 mx-auto mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <p className="text-sm text-gray-200">Credit & Debit Cards</p>
            </div>

            {/* Invoicing */}
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 p-6 rounded-xl border border-blue-800/20 hover:border-blue-600/50 transition-all text-center">
              <svg className="w-12 h-12 mx-auto mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-sm text-gray-200">Invoicing</p>
            </div>

            {/* Apple & Google Pay */}
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 p-6 rounded-xl border border-blue-800/20 hover:border-blue-600/50 transition-all text-center">
              <svg className="w-12 h-12 mx-auto mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-gray-200">Apple & Google Pay</p>
            </div>

            {/* ACH & Wire Transfers */}
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 p-6 rounded-xl border border-blue-800/20 hover:border-blue-600/50 transition-all text-center">
              <svg className="w-12 h-12 mx-auto mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <p className="text-sm text-gray-200">ACH & Wire Transfers</p>
            </div>

            {/* Buy Now Pay Later */}
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 p-6 rounded-xl border border-blue-800/20 hover:border-blue-600/50 transition-all text-center">
              <svg className="w-12 h-12 mx-auto mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-gray-200">Buy Now Pay Later</p>
            </div>

            {/* Crypto Payments */}
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 p-6 rounded-xl border border-blue-800/20 hover:border-blue-600/50 transition-all text-center">
              <svg className="w-12 h-12 mx-auto mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-gray-200">Crypto Payments</p>
            </div>

            {/* Gift Cards */}
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 p-6 rounded-xl border border-blue-800/20 hover:border-blue-600/50 transition-all text-center">
              <svg className="w-12 h-12 mx-auto mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <p className="text-sm text-gray-200">Gift Cards</p>
            </div>

            {/* Mobile Wallets */}
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 p-6 rounded-xl border border-blue-800/20 hover:border-blue-600/50 transition-all text-center">
              <svg className="w-12 h-12 mx-auto mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
              </svg>
              <p className="text-sm text-gray-200">Mobile Wallets</p>
            </div>

            {/* QR Code Payments */}
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 p-6 rounded-xl border border-blue-800/20 hover:border-blue-600/50 transition-all text-center">
              <svg className="w-12 h-12 mx-auto mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              <p className="text-sm text-gray-200">QR Code Payments</p>
            </div>

            {/* Recurring Billing */}
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 p-6 rounded-xl border border-blue-800/20 hover:border-blue-600/50 transition-all text-center">
              <svg className="w-12 h-12 mx-auto mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <p className="text-sm text-gray-200">Recurring Billing</p>
            </div>
          </div>

          <div className="text-center">
            <a href="https://calendly.com/-evolvemerchants" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-8 md:p-12 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all text-center">
            <h2 className="text-sm mb-4 uppercase tracking-wider text-blue-500">Why Choose Evolve Hardware</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-12">
              Evolve delivers the tools. You stay in control.
            </h3>
            <div className="space-y-4 mb-12 text-lg text-gray-200">
              <p>✓  Plug-and-play simplicity—get up and running in minutes</p>
              <p>✓ Free equipment placement—available for qualified businesses</p>
              <p>✓ 24/7 US-based technical support—real help, anytime</p>
              <p>✓ Versatile technology for virtually any industry</p>
              <p>✓ Full device ownership—no long-term lease required</p>
            </div>
            <a href="tel:+18332069763" className="inline-block px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg rounded-lg font-semibold hover:bg-white/20 transition-all shadow-lg">
              (833) 206-9763
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-900/40 px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 pb-8 border-b border-blue-900/40">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-4">
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

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex flex-col items-center opacity-60">
                <div className="flex items-center gap-0 text-white font-light tracking-[0.15em] leading-none text-[13px]">
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
              <Link href="/referral-partners" className="text-gray-300 hover:text-blue-500 transition-colors">Referral Partners</Link>
              <Link href="/privacy-policy" className="text-gray-300 hover:text-blue-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-blue-500 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
