'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
          <Link href="/#products" className="text-sm hover:text-blue-500 transition-colors">PRODUCTS</Link>
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

      {/* Privacy Policy Content */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-300 mb-12">Updated July 23rd, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <p className="text-gray-200 leading-relaxed mb-6">
                Evolve Merchant Services LLC (referred to as "Evolve Merchant Services," "we," "us," or "our") is committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, share, and protect your information when you visit our website (evolvemerchants.com) or engage with our products and services. By using our website or services, you consent to the terms outlined in this Privacy Policy.
              </p>
              <p className="text-gray-200 leading-relaxed">
                If you do not agree with these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                We collect personal and non-personal information in various ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>When you create an account, register for services, or subscribe to our newsletter</li>
                <li>When you contact us via email or other channels</li>
                <li>When you provide information in exchange for free resources or downloads</li>
                <li>When you complete surveys or enter contests</li>
                <li>Through cookies and similar technologies when you interact with our website</li>
              </ul>
              <p className="text-gray-200 leading-relaxed mt-4">
                Personal information may include your name, address, email, phone number, payment details, and account preferences. Non-personal information includes device data, IP addresses, and browsing activity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>Provide our services and fulfill orders</li>
                <li>Communicate with you about our products and services</li>
                <li>Personalize your website experience and improve functionality</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Protect against fraud and unauthorized use</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Sharing Your Information</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                We do not sell or rent your personal information. We may share it with third parties in specific cases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>With service providers (e.g., email platforms, payment processors) to deliver services</li>
                <li>As required by law, legal processes, or law enforcement</li>
                <li>In the event of a business transaction such as a merger or sale</li>
                <li>With your consent, for purposes disclosed at the time of sharing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>The right to access and correct personal information</li>
                <li>The right to request deletion of your data, subject to legal or contractual obligations</li>
                <li>The right to opt out of marketing communications</li>
              </ul>
              <p className="text-gray-200 leading-relaxed mt-4">
                To exercise these rights, email us at{' '}
                <a href="mailto:support@evolvemerchants.com" className="text-blue-500 hover:text-blue-300">
                  support@evolvemerchants.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention and Security</h2>
              <p className="text-gray-200 leading-relaxed">
                We retain your data only as long as necessary to provide services, comply with legal obligations, or resolve disputes. We implement reasonable security measures, including encryption, to protect your data from unauthorized access.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-200 leading-relaxed">
                Our website uses cookies to enhance your experience. Cookies are small data files stored on your device that allow us to recognize you and improve website functionality. You can control cookies through your browser settings. Disabling cookies may limit certain features of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-200 leading-relaxed">
                Our website is not intended for individuals under the age of 16. We do not knowingly collect personal information from children without parental consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
              <p className="text-gray-200 leading-relaxed">
                As a U.S.-based company, your information may be stored and processed in the United States. By using our website, you consent to the transfer of your data to the U.S.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Privacy Policy</h2>
              <p className="text-gray-200 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in technology, regulations, or our business practices. Updates will be posted at evolvemerchants.com/privacy-policy, and we may notify you via email of significant changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution</h2>
              <p className="text-gray-200 leading-relaxed">
                Any disputes arising from this Privacy Policy will be resolved through binding arbitration in Bay County, Florida under Florida law. Arbitration will be conducted in accordance with the rules of the Florida Lawyers for the Arts, Arts Arbitration and Mediation Service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-8 rounded-xl border border-blue-700/50">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                For questions or concerns about this Privacy Policy, contact us at:
              </p>
              <div className="space-y-2 text-gray-200">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:support@evolvemerchants.com" className="text-blue-500 hover:text-blue-300">
                    support@evolvemerchants.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+18332069763" className="text-blue-500 hover:text-blue-300">
                    (833) 206-9763
                  </a>
                </p>
              </div>
            </div>
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
              <Link href="/privacy-policy" className="text-blue-500 hover:text-blue-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-blue-500 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
