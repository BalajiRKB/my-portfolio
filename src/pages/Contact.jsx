import React, { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, MapPin, Clock, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = 'balaji648balaji@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      Icon: Github,
      label: 'GitHub',
      href: 'https://github.com/balajirkb',
      username: '@balajirkb',
      color: 'hover:border-gray-400 hover:text-gray-200'
    },
    {
      Icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/balaji-rkb/',
      username: 'balaji-rkb',
      color: 'hover:border-blue-400 hover:text-blue-300'
    },
    {
      Icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/balaji_rkb/',
      username: '@balaji_rkb',
      color: 'hover:border-pink-400 hover:text-pink-300'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-blue-400"></div>
            <h2 className="text-4xl font-mono text-blue-400 tracking-wider">CONTACT</h2>
            <div className="h-1 w-12 bg-blue-400"></div>
          </div>
          <p className="text-blue-300/70 mb-12 text-sm font-mono">Let's build something great together.</p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Left — Info */}
            <div className="space-y-6">

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 bg-green-900/30 border border-green-500/40 text-green-400 text-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Available for freelance & internships
              </div>

              {/* Email card */}
              <div className="bg-blue-900/20 border border-blue-400/40 rounded-xl p-5">
                <div className="flex items-center gap-2 text-blue-300 mb-2 text-sm font-mono">
                  <Mail size={14} /> EMAIL
                </div>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="text-white hover:text-blue-300 transition-colors text-sm break-all"
                  >
                    {email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="flex-shrink-0 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-mono transition-colors"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Location & Response time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-300/70 text-xs font-mono mb-1">
                    <MapPin size={12} /> LOCATION
                  </div>
                  <p className="text-white text-sm">Coimbatore, TN</p>
                  <p className="text-blue-300/50 text-xs">India (IST, UTC+5:30)</p>
                </div>
                <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-300/70 text-xs font-mono mb-1">
                    <Clock size={12} /> RESPONSE
                  </div>
                  <p className="text-white text-sm">Within 24h</p>
                  <p className="text-blue-300/50 text-xs">Usually faster</p>
                </div>
              </div>

              {/* Open to section */}
              <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-5">
                <h4 className="text-blue-300 font-mono text-sm mb-3">OPEN TO</h4>
                <div className="flex flex-wrap gap-2">
                  {['Freelance Projects', 'Internships', 'Open Source Collab', 'Full-time Roles (2026)'].map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-blue-800/40 text-blue-200 rounded-full border border-blue-700/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Socials + CTA */}
            <div className="space-y-6">
              <h3 className="text-blue-300 font-mono text-sm tracking-wider">FIND ME ON</h3>

              <div className="space-y-3">
                {socialLinks.map(({ Icon, label, href, username, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 border border-blue-400/30 rounded-xl bg-blue-900/10 transition-all duration-300 group ${color}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <div>
                        <div className="text-sm font-medium">{label}</div>
                        <div className="text-xs text-blue-300/50">{username}</div>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-blue-300/40 group-hover:text-current transition-colors" />
                  </a>
                ))}
              </div>

              {/* Primary CTA */}
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-mono text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group mt-4"
              >
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                SEND ME AN EMAIL
              </a>

              <p className="text-center text-blue-300/40 text-xs font-mono">
                Prefer async? Reach me on LinkedIn or GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
