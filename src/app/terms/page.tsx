'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function TermsPage() {
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

      {/* Terms & Conditions Content */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-gray-300 mb-12">Updated July 23rd, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <p className="text-gray-200 leading-relaxed mb-6">
                Welcome to Evolve Merchant Services LLC ("Evolve Merchant Services," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of our website (evolvemerchants.com), services, and products. By using our website or services, you agree to comply with and be bound by these Terms.
              </p>
              <p className="text-gray-200 leading-relaxed">
                If you do not agree with these Terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-200 leading-relaxed">
                By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. These Terms apply to all visitors, users, and others who access or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Provided</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                Evolve Merchant Services provides payment processing solutions, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>Credit and debit card processing</li>
                <li>ACH and bank transfer processing</li>
                <li>Point-of-sale (POS) systems and hardware</li>
                <li>Mobile payment solutions</li>
                <li>E-commerce payment integrations</li>
                <li>Merchant funding and financial services</li>
              </ul>
              <p className="text-gray-200 leading-relaxed mt-4">
                All services are subject to approval and compliance with applicable laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>Provide accurate, complete, and current information during registration and use</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Comply with all applicable laws, regulations, and card network rules</li>
                <li>Not use our services for any illegal, fraudulent, or unauthorized purposes</li>
                <li>Not engage in activities that could harm, disable, or impair our services</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                By using our payment processing services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>Pay all applicable fees, including processing fees, transaction fees, and monthly service charges</li>
                <li>Authorize us to deduct fees from your settlement funds or charge your designated account</li>
                <li>Accept responsibility for chargebacks, refunds, and disputed transactions</li>
                <li>Maintain sufficient funds in your account to cover fees and obligations</li>
              </ul>
              <p className="text-gray-200 leading-relaxed mt-4">
                Pricing and fee structures are outlined in your merchant agreement and may vary based on transaction volume, industry, and risk profile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-200 leading-relaxed">
                All content on our website, including text, graphics, logos, images, software, and trademarks, is the property of Evolve Merchant Services LLC or our licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Account Termination</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your account at any time for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>Violation of these Terms or our policies</li>
                <li>Fraudulent, illegal, or high-risk activities</li>
                <li>Excessive chargebacks or disputes</li>
                <li>Non-payment of fees or obligations</li>
                <li>Any reason we deem necessary to protect our business or other users</li>
              </ul>
              <p className="text-gray-200 leading-relaxed mt-4">
                Upon termination, you remain responsible for all outstanding fees, chargebacks, and obligations incurred during the term of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                To the fullest extent permitted by law, Evolve Merchant Services LLC shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Service interruptions, errors, or delays</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Actions or omissions of third-party service providers</li>
              </ul>
              <p className="text-gray-200 leading-relaxed mt-4">
                Our total liability for any claims arising from our services shall not exceed the fees paid by you in the 12 months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Indemnification</h2>
              <p className="text-gray-200 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Evolve Merchant Services LLC, its officers, directors, employees, and agents from any claims, losses, damages, liabilities, costs, and expenses (including legal fees) arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Dispute Resolution and Arbitration</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                Any disputes arising from these Terms or our services shall be resolved through binding arbitration in Bay County, Florida, under Florida law. The arbitration will be conducted in accordance with the rules of the Florida Lawyers for the Arts, Arts Arbitration and Mediation Service.
              </p>
              <p className="text-gray-200 leading-relaxed">
                You waive your right to participate in class action lawsuits or class-wide arbitration. All disputes must be brought on an individual basis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
              <p className="text-gray-200 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
              <p className="text-gray-200 leading-relaxed">
                We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Third-Party Links and Services</h2>
              <p className="text-gray-200 leading-relaxed">
                Our website may contain links to third-party websites or services that are not owned or controlled by Evolve Merchant Services. We are not responsible for the content, privacy policies, or practices of any third-party websites. You access third-party sites at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">13. Severability</h2>
              <p className="text-gray-200 leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">14. Entire Agreement</h2>
              <p className="text-gray-200 leading-relaxed">
                These Terms, together with our Privacy Policy and any merchant agreement you have signed, constitute the entire agreement between you and Evolve Merchant Services LLC regarding the use of our services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-8 rounded-xl border border-blue-700/50">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
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
                <p><strong>Address:</strong> Evolve Merchant Services LLC, FL</p>
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
              <Link href="/privacy-policy" className="text-gray-300 hover:text-blue-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-blue-500 hover:text-blue-300 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
