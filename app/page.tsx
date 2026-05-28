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

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="WeBhavnagar Logo" width={36} height={36} className="rounded-full" />
          <span className="font-bold text-xl tracking-tight text-gray-900">WeBhavnagar</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
            Get Your Free Digital Audit →
          </a>
          <a href="#services" className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            See How We Can Help
          </a>
        </div>

        {/* Stats */}
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
      <section id="services" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">One Partner. Every Digital Solution.</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Whether you run a manufacturing unit in Bhavnagar, a retail shop in Surat, or a service business across Gujarat — we build the digital foundation your business deserves.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
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
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            We&apos;re Not Just Developers.<br />We&apos;re Your Digital Partner.
          </h2>
          <p className="text-gray-600 text-center text-lg mb-6">
            Every business owner we meet says the same thing: <span className="font-semibold text-gray-900">&ldquo;I spend more time managing work than doing business.&rdquo;</span>
          </p>
          <p className="text-gray-600 text-center text-lg mb-6">
            Manual phone calls. Tracking orders on paper. Forgetting to follow up with leads. Customers who slip through the cracks.
          </p>
          <p className="text-gray-600 text-center text-lg mb-16">
            We started WeBhavnagar to solve this — not just build websites, but build systems that actually reduce your workload. We combine AI tools, automation workflows, and modern software to handle the repetitive work your team shouldn&apos;t be doing.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { emoji: '⚡', title: 'Speed', desc: 'Systems that respond in seconds, not hours.' },
              { emoji: '🧠', title: 'Intelligence', desc: 'AI that learns your business, not just generic responses.' },
              { emoji: '🔄', title: 'Automation', desc: 'Workflows that run 24/7 without reminders.' },
              { emoji: '📈', title: 'Growth', desc: 'Data that helps you make better decisions every day.' },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-gray-200 rounded-xl">
                <div className="text-2xl mb-2">{item.emoji}</div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Let&apos;s Fix Your Business Systems</h2>
          <p className="text-gray-400 text-center mb-12">
            Book a free 30-minute consultation. We&apos;ll audit your current digital setup — websites, WhatsApp, CRM, automation — and show you exactly what&apos;s costing you time and money.<br />
            <span className="text-white font-semibold">No sales pitch. Just honest advice.</span>
          </p>

          {status === 'sent' ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Business Name (optional)"
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
              />
              <textarea
                placeholder="Tell us about your project..."
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Book Free Consultation →'}
              </button>
            </form>
          )}

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 pt-12 border-t border-gray-800 text-sm text-gray-400">
            <a href="mailto:contact@webhavnagar.com" className="flex items-center gap-2 hover:text-white transition-colors">
              📧 contact@webhavnagar.com
            </a>
            <a href="tel:+918866518666" className="flex items-center gap-2 hover:text-white transition-colors">
              📱 +91 88665 18666
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 text-sm py-6 px-6 text-center">
        <p>© {new Date().getFullYear()} WeBhavnagar. Powering Sustainable Business Growth in Gujarat.</p>
      </footer>
    </div>
  );
}