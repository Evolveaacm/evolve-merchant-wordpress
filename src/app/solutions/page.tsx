'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function SolutionsPage() {
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
            {/* Custom E - top line disconnected */}
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
          <p className="text-xs md:text-sm text-blue-500 mb-4 uppercase tracking-wider">SMARTER PAYMENTS WITH EVOLVE</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Select the solution that matches your business model.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto">
            Whatever your goal—efficiency, savings, or flexibility—Evolve Merchant Services is built to support it.
          </p>

          {/* Solution Cards */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-6 md:p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
              <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">Low-Risk Processing</h3>
              <p className="text-sm md:text-base text-gray-200 text-center">
                Evolve's low-risk processing is built for compliant businesses in retail, hospitality, and professional services. Enjoy fast approvals, clear pricing, and smooth integrations that make onboarding effortless.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-6 md:p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
              <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">High-Risk Processing</h3>
              <p className="text-sm md:text-base text-gray-200 text-center">
                From Medical Spas to Online Casinos, Evolve navigates high-risk industries with precision. Strong banking networks, intelligent fraud protection, and tailored underwriting keep you approved.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-6 md:p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
              <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">Business Funding</h3>
              <p className="text-sm md:text-base text-gray-200 text-center">
                Evolve's Business Funding solutions connect you with a nationwide network of 150+ direct lenders to secure fast, flexible capital tailored to your goals. Whether you're expanding, stabilizing cash flow, or launching new initiatives, Evolve delivers competitive terms, rapid approvals, and personalized support.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-6 md:p-8 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all">
              <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">ACH Processing</h3>
              <p className="text-sm md:text-base text-gray-200 text-center">
                Evolve's ACH processing offers a secure, cost-effective way to move funds directly between bank accounts—ideal for recurring payments, invoicing, and B2B transactions. With fast settlement times and seamless integration, it's a reliable solution for businesses seeking efficient, low-cost payment alternatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Present Section */}
      <section id="card-present" className="relative z-10 px-6 md:px-12 py-12 md:py-20 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-xs md:text-sm text-blue-500 mb-4 uppercase tracking-wider">Card Present</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">On-Site Payment Solutions.</h3>
            <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8">
              Efficient, secure payment processing—right at the point of sale.
            </p>

            <div className="mb-6 md:mb-8">
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Capabilities
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs md:text-sm text-gray-300">
                <p>• Point-of-Sale Systems</p>
                <p>• Retail Checkout</p>
                <p>• Table-Side Payments</p>
                <p>• Drive-Thru Support</p>
                <p>• Multi-Lane Environments</p>
                <p>• Contactless Setup</p>
                <p>• Self-Service Terminals</p>
                <p>• Loyalty Programs</p>
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Key Features
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs md:text-sm text-gray-300">
                <p>• Integrated PIN Pads</p>
                <p>• High-Speed Processors</p>
                <p>• Robust Connectivity</p>
                <p>• AI Fraud Prevention</p>
                <p>• Offline Mode</p>
                <p>• Real-Time Dashboards</p>
                <p>• Contactless Tap</p>
                <p>• EMV Compatibility</p>
              </div>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Methods
              </h4>
              <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-300">
                <p>• EMV Chip</p>
                <p>• Contactless</p>
                <p>• Magstripe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Not Present Section */}
      <section id="card-not-present" className="relative z-10 px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-xs md:text-sm text-blue-500 mb-4 uppercase tracking-wider">Card not Present</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">Process transactions from any location, with ease.</h3>
            <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8">
              Online, Mobile, and Remote Payment Solutions
            </p>

            <div className="mb-6 md:mb-8">
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Capabilities
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs md:text-sm text-gray-300">
                <p>• E-commerce</p>
                <p>• Mobile Integration</p>
                <p>• Recurring Billing</p>
                <p>• Virtual Terminals</p>
                <p>• Hosted Payment Pages</p>
                <p>• Online Invoicing</p>
                <p>• API-Driven Flows</p>
                <p>• Subscription Tools</p>
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Key Features
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs md:text-sm text-gray-300">
                <p>• QuickBooks Integration</p>
                <p>• BNPL Support</p>
                <p>• Crypto Acceptance</p>
                <p>• A2A Transfers</p>
                <p>• Mobile Wallet Support</p>
                <p>• API Access</p>
                <p>• PCI Compliance</p>
                <p>• Multi-Currency</p>
              </div>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Methods
              </h4>
              <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-300">
                <p>• Tokenization</p>
                <p>• 3D Secure</p>
                <p>• AVS & CVV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-12 py-8 md:py-12 bg-gradient-to-r from-blue-600/90 to-blue-500/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Stay ahead with smarter payment tech.</h2>
          <div className="grid sm:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6 text-sm md:text-base">
            <p>✓ Eliminate Processing Fees</p>
            <p>✓ Custom Solutions for Any Industry</p>
            <p>✓ Next-Day Funding</p>
            <p>✓ Lower Costs with ACH</p>
            <p></p>
            <p></p>
          </div>
          <a href="tel:+18332069763" className="inline-block px-5 md:px-7 py-2 md:py-3 bg-white text-blue-600 text-sm md:text-base rounded-lg font-semibold hover:bg-gray-100 transition-all">
            Call (833) 206-9763
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-900/40 px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Contact Info Section */}
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

          {/* Footer Links */}
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
