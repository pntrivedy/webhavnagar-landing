'use client';

import Image from 'next/image';
import { useState } from 'react';

const SERVICES = [
  {
    emoji: '🤖',
    title: 'AI & Automation',
    description: 'Auto-respond to WhatsApp, generate quotes, follow up leads — while you sleep.',
    tags: ['ChatGPT', 'WhatsApp API', 'Lead Automation'],
  },
  {
    emoji: '🌐',
    title: 'Websites & Apps',
    description: 'Modern, fast websites that load in 2 seconds and rank on Google.',
    tags: ['Next.js', 'React', 'SEO Optimized'],
  },
  {
    emoji: '📊',
    title: 'CRM & Systems',
    description: 'Organize your customers, inventory, and orders in one place — finally.',
    tags: ['Database', 'Automation', 'Reporting'],
  },
  {
    emoji: '📱',
    title: 'WhatsApp Business',
    description: 'Automate orders, catalogue sharing, and customer support on WhatsApp.',
    tags: ['Business API', 'Auto-Replies', 'Orders'],
  },
  {
    emoji: '📍',
    title: 'Google & Social',
    description: 'Get found on Google Maps, manage reviews, and run targeted ads.',
    tags: ['Google Business', 'Meta Ads', 'Local SEO'],
  },
  {
    emoji: '🔒',
    title: 'Data & Security',
    description: 'Secure your business data, automate backups, and protect against losses.',
    tags: ['Cloud Backup', 'SSL', 'Access Control'],
  },
];

const STATS = [
  { value: '500+', label: 'Processes Automated' },
  { value: '24/7', label: 'AI-Powered Systems' },
  { value: '98%', label: 'Accuracy Rate' },
  { value: '3x', label: 'Efficiency Gain' },
];

function EmailSignupForm({ variant }: { variant: 'banner' | 'hero' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate submission
    setTimeout(() => setStatus('sent'), 1200);
  };

  const isBanner = variant === 'banner';
  const inputBase = isBanner
    ? 'w-full sm:w-72 px-4 py-2.5 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white text-sm'
    : 'w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors';
  const buttonBase = isBanner
    ? 'w-full sm:w-auto px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm whitespace-nowrap disabled:opacity-60'
    : 'w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50';

  if (status === 'sent') {
    return (
      <div className={isBanner ? 'text-white text-sm py-1' : 'text-center py-4'}>
        <p className={isBanner ? 'font-semibold' : 'text-lg font-semibold text-gray-900'}>
          ✅ You&apos;re on the list.
        </p>
        {!isBanner && (
          <p className="text-gray-600 text-sm mt-1">We&apos;ll email you when we launch.</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={isBanner ? 'flex flex-col sm:flex-row gap-2' : 'space-y-3'}>
      <input
        type="email"
        placeholder="your@email.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputBase}
        aria-label="Email address"
      />
      <button type="submit" disabled={status === 'sending'} className={buttonBase}>
        {status === 'sending' ? 'Joining...' : 'Notify Me'}
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Coming Soon Banner */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest rounded">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Coming Soon
            </span>
            <p className="text-sm md:text-base text-white/90">
              We&apos;re rebuilding WeBhavnagar. Something better is on the way.
            </p>
          </div>
          <EmailSignupForm variant="banner" />
        </div>
      </div>

      {/* Dimmed existing site */}
      <div className="relative">
        <div className="pointer-events-none select-none opacity-40 grayscale">
          {/* Nav */}
          <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="WeBhavnagar Logo" width={36} height={36} className="rounded-full" />
              <span className="font-bold text-xl tracking-tight text-gray-900">WeBhavnagar</span>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <span>Services</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </nav>

          {/* Hero */}
          <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-4">Bhavnagar, Gujarat</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
              Your Competitors Are<br className="hidden md:block" /> Already Automating.<br className="hidden md:block" /> Are You?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Manual data entry. Missed follow-ups. Orders lost in WhatsApp chats.<br />
              Human errors that cost you customers and credibility.
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-900 max-w-2xl mx-auto mb-4">
              We fix that.
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              WeBhavnagar helps Gujarat businesses leverage AI, automation, and modern technology to eliminate repetitive work, reduce mistakes, and build systems that scale — without burning out your team.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-100">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">One Partner. Every Digital Solution.</h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                Whether you run a manufacturing unit in Bhavnagar, a retail shop in Surat, or a service business across Gujarat — we build the digital foundation your business deserves.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((s) => (
                  <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-3xl mb-4">{s.emoji}</div>
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                We&apos;re Not Just Developers.<br />We&apos;re Your Digital Partner.
              </h2>
              <p className="text-gray-600 text-center text-lg mb-6">
                Every business owner we meet says the same thing: <span className="font-semibold text-gray-900">&ldquo;I spend more time managing work than doing business.&rdquo;</span>
              </p>
              <p className="text-gray-600 text-center text-lg mb-16">
                We started WeBhavnagar to solve this — not just build websites, but build systems that actually reduce your workload.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gray-900 text-white py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Fix Your Business Systems</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 text-sm text-gray-400">
                <span>📧 contact@webhavnagar.com</span>
                <span>📱 +91 88665 18666</span>
              </div>
            </div>
          </section>
        </div>

        {/* Centered overlay card with email signup */}
        <div className="absolute inset-0 flex items-start justify-center pt-20 md:pt-32 px-6 pointer-events-none">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 md:p-10 text-center pointer-events-auto border border-gray-100">
            <Image
              src="/logo.jpg"
              alt="WeBhavnagar Logo"
              width={64}
              height={64}
              className="rounded-full mx-auto mb-5"
            />
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
              AI & Digital Solutions for Gujarat Businesses
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We&apos;re Rebuilding.
            </h2>
            <p className="text-gray-600 mb-6">
              A new website is on the way. Drop your email and we&apos;ll let you know the moment we go live.
            </p>
            <EmailSignupForm variant="hero" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500">
              <a href="mailto:contact@webhavnagar.com" className="hover:text-gray-900 transition-colors">
                📧 contact@webhavnagar.com
              </a>
              <span className="hidden md:inline text-gray-300">|</span>
              <a href="tel:+918866518666" className="hover:text-gray-900 transition-colors">
                📱 +91 88665 18666
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 text-sm py-6 px-6 text-center">
        <p>© {new Date().getFullYear()} WeBhavnagar. Powering Sustainable Business Growth in Gujarat.</p>
      </footer>
    </div>
  );
}