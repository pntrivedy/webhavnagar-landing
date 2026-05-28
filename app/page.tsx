'use client';

import Image from 'next/image';
import { useState } from 'react';

const SERVICES = [
  {
    emoji: '🎨',
    title: 'Website Design',
    description: 'Custom, conversion-focused designs that reflect your brand and engage your customers.',
    tags: ['UI/UX Design', 'Responsive', 'Brand Identity'],
  },
  {
    emoji: '⚡',
    title: 'Web Development',
    description: 'Fast, scalable websites built with modern tech. Landing pages to full web apps.',
    tags: ['Next.js', 'React', 'Performance'],
  },
  {
    emoji: '📱',
    title: 'Mobile Friendly',
    description: 'Every site looks and works flawlessly on phones, tablets, and desktops.',
    tags: ['Responsive', 'MobileFirst', 'All Devices'],
  },
  {
    emoji: '🔒',
    title: 'SSL & Security',
    description: 'HTTPS encryption, secure forms, and protection against threats.',
    tags: ['SSL Certificates', 'Security', 'Privacy'],
  },
  {
    emoji: '🚀',
    title: 'Hosting & Deploy',
    description: 'Reliable, fast hosting with 99.9% uptime. No more crashes or downtime.',
    tags: ['Cloud Hosting', 'CDN', 'Fast Loading'],
  },
  {
    emoji: '📈',
    title: 'SEO & Growth',
    description: 'Get found on Google. Technical SEO, local optimization, and analytics setup.',
    tags: ['SEO', 'Google Analytics', 'Local SEO'],
  },
];

const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5★', label: 'Client Rating' },
  { value: '24h', label: 'Response Time' },
  { value: '100%', label: 'Satisfaction' },
];

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submit
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="WebHavnagar Logo" width={36} height={36} className="rounded-full" />
          <span className="font-bold text-xl tracking-tight text-gray-900">WebHavnagar</span>
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
          Your Business Deserves a Website That Works
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Premium web design & development for Havnagar businesses. From local shops to startups — we build fast, beautiful websites that convert.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
            Start a Project →
          </a>
          <a href="#about" className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            See Our Work
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Everything Your Business Needs Online</h2>
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
            Built by Bhavnagaris,<br />Competing Globally
          </h2>
          <p className="text-gray-600 text-center text-lg mb-16">
            We started WebHavnagar with one mission: bring world-class web technology to businesses in our hometown. No more paying inflated prices for mediocre websites.
          </p>
          <p className="text-gray-600 text-center text-lg mb-16">
            Today, we build everything from local business landing pages to full-scale web applications — using the same tools and frameworks as the best agencies in the world, at a fraction of the cost.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Modern Stack', desc: 'Next.js, React, TypeScript — built for speed and scale.' },
              { title: 'Global Standards', desc: 'Design and code that meets Silicon Valley benchmarks.' },
              { title: 'Local Understanding', desc: 'We know Havnagar. We know Gujarat. We know India.' },
              { title: 'Transparent Pricing', desc: 'No hidden fees, no surprise invoices. Clear quotes upfront.' },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-gray-200 rounded-xl">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Let's Build Something Great</h2>
          <p className="text-gray-400 text-center mb-12">
            Have a project in mind? Tell us about it and we'll get back to you within 24 hours with a free consultation and quote.
          </p>

          {status === 'sent' ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-gray-400">We'll get back to you within 24 hours.</p>
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
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 pt-12 border-t border-gray-800 text-sm text-gray-400">
            <a href="mailto:hello@webhavnagar.com" className="flex items-center gap-2 hover:text-white transition-colors">
              📧 hello@webhavnagar.com
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
              📱 +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 text-sm py-6 px-6 text-center">
        <p>© {new Date().getFullYear()} WebHavnagar. Built with ❤️ in Bhavnagar, Gujarat.</p>
      </footer>
    </div>
  );
}
