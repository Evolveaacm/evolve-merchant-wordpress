'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function ReferralPartnersPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('New Referral Partner Application');
    const body = encodeURIComponent(`
New Referral Partner Application

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Why they want to become a referral partner:
${formData.message}
    `);

    window.location.href = `mailto:partners@evolvemerchants.com,austin@evolvemerchants.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            <a href="https://app.advancefundsnetwork.com/application/KHlip10F2ONcpL7e45YxEhS7eoB3?partner=fR5kLIriQzc7gXgOmvEKZpw2UCl2" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-300 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              FUNDING
            </a>
            <a href="tel:+18332069763" className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-sm rounded hover:bg-white/20 transition-all inline-block text-white shadow-lg" onClick={() => setMobileMenuOpen(false)}>
              (833) 206-9763
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 py-32 md:py-48 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Become an Evolve Merchant Services<br />Referral Partner
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10">
          Earn bonuses and residuals as your referrals grow.
        </p>
        <a href="#apply" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
          Apply Now
        </a>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-32 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">How It Works</h2>
          <p className="text-xl text-gray-200 text-center mb-16">
            Becoming an Evolve Referral Partner is simple and rewarding.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-8 rounded-xl border border-blue-700/50 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Refer</h3>
              <p className="text-gray-200">
                Share Evolve with business owners who could benefit from better payment processing solutions, POS systems, or funding.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-8 rounded-xl border border-blue-700/50 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Activate</h3>
              <p className="text-gray-200">
                Once your referral activates their account and begins processing, your referral is officially qualified.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-8 rounded-xl border border-blue-700/50 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Earn</h3>
              <p className="text-gray-200">
                Earn a $100 bonus per account and monthly residual income that scales as you grow your network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Structure Section */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Referral Partner Compensation Structure</h2>
          <p className="text-xl text-gray-200 text-center mb-16">
            Earn bonuses and growing residual income as you help more businesses join Evolve.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/70 to-blue-900/60 p-8 rounded-2xl border-2 border-blue-600/50">
              <h3 className="text-2xl font-bold mb-4">1-10 Accounts</h3>
              <div className="text-3xl font-bold text-blue-500 mb-6">$100 Bonus / Account</div>
              <p className="text-gray-200 mb-4">No Residuals</p>
              <p className="text-sm text-gray-300">
                Earn $100 for each new activated referral.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/70 to-blue-900/60 p-8 rounded-2xl border-2 border-blue-600/50">
              <h3 className="text-2xl font-bold mb-4">11-25 Accounts</h3>
              <div className="text-3xl font-bold text-blue-500 mb-6">$100 Bonus / Account</div>
              <p className="text-emerald-400 text-lg font-bold mb-4">+ Residual (In Partner Agreement)</p>
              <p className="text-sm text-gray-300">
                Earn $100 per referral plus monthly residuals on all active accounts, discussed in private.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/70 to-blue-900/60 p-8 rounded-2xl border-2 border-blue-600/50">
              <h3 className="text-2xl font-bold mb-4">26+ Accounts</h3>
              <div className="text-3xl font-bold text-blue-500 mb-6">$100 Bonus / Account</div>
              <p className="text-emerald-400 text-lg font-bold mb-4">+ Residual (In Partner Agreement)</p>
              <p className="text-sm text-gray-300">
                Earn $100 per referral plus monthly residuals on all active accounts, discussed in private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="relative z-10 px-6 md:px-12 py-20 md:py-32 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Apply to Become a Referral Partner</h2>
          <p className="text-xl text-gray-200 mb-10">
            Fill out the quick application below to join our program and start earning.
          </p>

          <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-8 rounded-xl border border-blue-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-blue-950/60 border border-blue-700/50 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-blue-950/60 border border-blue-700/50 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-blue-950/60 border border-blue-700/50 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 bg-blue-950/60 border border-blue-700/50 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="text-left">
                <label className="block text-sm font-medium mb-2">Why do you want to become a referral partner? *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your interest..."
                  required
                  className="w-full px-4 py-3 bg-blue-950/60 border border-blue-700/50 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                SUBMIT APPLICATION
              </button>

              <p className="text-sm text-gray-300 text-center">
                This will open your default email client. Or contact us directly at{' '}
                <a href="mailto:partners@evolvemerchants.com" className="text-blue-500 hover:underline">
                  partners@evolvemerchants.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="relative z-10 px-6 md:px-12 py-20 bg-gradient-to-r from-blue-600/90 to-blue-500/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Questions?</h2>
          <p className="text-xl">
            Contact our team at{' '}
            <a href="mailto:partners@evolvemerchants.com" className="underline hover:text-blue-200">
              partners@evolvemerchants.com
            </a>
            {' '}or call{' '}
            <a href="tel:+18332069763" className="underline hover:text-blue-200">
              (833) 206-9763
            </a>
            .
          </p>
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
              <Link href="/" className="text-gray-300 hover:text-blue-500 transition-colors">Home</Link>
              <Link href="/privacy-policy" className="text-gray-300 hover:text-blue-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-blue-500 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
