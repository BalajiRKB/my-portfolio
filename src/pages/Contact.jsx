import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { Icon: Github, label: 'GitHub', href: 'https://github.com/balaji-r-2007' },
    { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/balaji-r-640349315/' },
    { Icon: Mail, label: 'Email', href: 'balaji648balaji@gmail.com' },
    { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_balaji_rkb/' }
  ];

  return (
    <div className="pt-16 min-h-screen text-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono text-blue-400 mb-8">CONTACT</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="p-4 border border-blue-400 rounded-full 
                           hover:bg-blue-500 hover:border-blue-500 
                           transition-all duration-300 transform hover:-translate-y-1
                           hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label={label}
                >
                  <Icon className="w-8 h-8" />
                </a>
              ))}
            </div>
            <p className="text-center font-mono text-lg">
              Ready to collaborate? Let's build something amazing together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;