import React, { useState, useEffect } from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import { Sun, Moon, Phone, Menu, X } from 'lucide-react';

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = ()=>{
    const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
  };
  
  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.header 
      className="header-fixed"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: isScrolled ? 'rgba(15, 23, 36, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem'}}>
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          style={{cursor: 'pointer'}}
          onClick={() => scrollTo('home')}
        >
          <div style={{
            width: 52, 
            height: 52, 
            background: 'var(--accent)', 
            borderRadius: 12, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontWeight: 700,
            color: 'white'
          }}>
            MC
          </div>
          <div>
            <div style={{fontWeight: 700, fontSize: 18}}>Malleshwara Construction</div>
            <div style={{fontSize: 12, color: 'var(--muted)'}}>Quality builds since 2005</div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav" style={{display: 'flex', alignItems: 'center', gap: 24}}>
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text)',
                cursor: 'pointer',
                padding: '8px 0',
                fontWeight: 500,
                position: 'relative'
              }}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}
          
          <motion.button 
            className="btn theme-btn" 
            onClick={toggle} 
            title="Toggle theme"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--card)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sun size={16} style={{display: document.documentElement.getAttribute('data-theme') === 'dark' ? 'block' : 'none'}}/>
            <Moon size={16} style={{display: document.documentElement.getAttribute('data-theme') === 'light' ? 'block' : 'none'}}/>
          </motion.button>
          
          <motion.a 
            className="btn primary-btn" 
            href="tel:+919999999999" 
            style={{textDecoration:'none', display: 'flex', alignItems: 'center', gap: 8}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={16} /> Call Now
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            cursor: 'pointer',
            padding: 8
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-nav"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--card)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderTop: 'none'
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{padding: 20}}>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text)',
                    cursor: 'pointer',
                    padding: '12px 0',
                    textAlign: 'left',
                    fontWeight: 500,
                    borderBottom: index < navItems.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div style={{display: 'flex', gap: 12, marginTop: 16}}>
                <button className="btn theme-btn" onClick={toggle} style={{flex: 1}}>
                  {document.documentElement.getAttribute('data-theme') === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <a className="btn primary-btn" href="tel:+919999999999" style={{flex: 1, textDecoration: 'none', textAlign: 'center'}}>
                  <Phone size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}