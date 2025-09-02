import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

export default function Footer(){
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{background: 'var(--card)', borderTop: '1px solid rgba(255,255,255,0.03)'}}>
      <div className="container" style={{padding: '3rem 1rem 2rem'}}>
        <motion.div 
          style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32, marginBottom: 32}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <div>
            <div className="logo" style={{marginBottom: 16}}>
              <div style={{
                width: 48, 
                height: 48, 
                background: 'var(--accent)', 
                borderRadius: 10, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: 700,
                color: 'white'
              }}>
                MC
              </div>
              <div>
                <div style={{fontWeight: 700}}>Malleshwara Construction</div>
                <div style={{fontSize: 12, color: 'var(--muted)'}}>Building Dreams Since 2005</div>
              </div>
            </div>
            <p style={{color: 'var(--muted)', lineHeight: 1.6, marginBottom: 16}}>
              Your trusted partner for quality construction, renovation, and interior design services in Bengaluru and surrounding areas.
            </p>
            <div style={{display: 'flex', gap: 12}}>
              <motion.a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: 40,
                  height: 40,
                  background: '#25d366',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle size={18} />
              </motion.a>
              <motion.a 
                href="mailto:malleshwaraconstruction@example.com"
                style={{
                  width: 40,
                  height: 40,
                  background: 'var(--accent)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{marginBottom: 16, color: 'var(--text)'}}>Quick Links</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map(link => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({behavior:'smooth'})}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--muted)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{marginBottom: 16, color: 'var(--text)'}}>Our Services</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              {['House Construction', 'Renovation', 'Interior Design', 'Commercial Projects', 'Maintenance'].map(service => (
                <div key={service} style={{color: 'var(--muted)', fontSize: 14, padding: '2px 0'}}>
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{marginBottom: 16, color: 'var(--text)'}}>Contact Info</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <Phone size={16} style={{color: 'var(--accent)'}} />
                <a href="tel:+919999999999" style={{color: 'var(--muted)', textDecoration: 'none', fontSize: 14}}>
                  +91 99999 99999
                </a>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <Mail size={16} style={{color: 'var(--accent)'}} />
                <a href="mailto:malleshwaraconstruction@example.com" style={{color: 'var(--muted)', textDecoration: 'none', fontSize: 14}}>
                  malleshwaraconstruction@example.com
                </a>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <MapPin size={16} style={{color: 'var(--accent)'}} />
                <span style={{color: 'var(--muted)', fontSize: 14}}>
                  Bengaluru & Surrounding Areas
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.03)',
            flexWrap: 'wrap',
            gap: 16
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div style={{color: 'var(--muted)', fontSize: 14}}>
            © {currentYear} Malleshwara Construction. All rights reserved.
          </div>
          <div style={{display: 'flex', gap: 16, alignItems: 'center'}}>
            <span style={{color: 'var(--muted)', fontSize: 12}}>Built with ❤️ in Bengaluru</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fab">
        <motion.a 
          href="https://wa.me/919999999999?text=Hi%20I%20found%20your%20service" 
          target="_blank" 
          rel="noreferrer" 
          title="WhatsApp"
          style={{background: '#25d366'}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={20} />
        </motion.a>
        <motion.a 
          href="mailto:malleshwaraconstruction@example.com" 
          title="Email"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Mail size={20} />
        </motion.a>
        <motion.a 
          href="tel:+919999999999" 
          title="Call"
          style={{background: 'var(--success)'}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone size={20} />
        </motion.a>
      </div>
    </footer>
  )
}