import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, Users, Clock } from 'lucide-react';

export default function Home(){
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  };

  return (
    <section id="home" className="hero">
      <motion.div 
        style={{flex:1}}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          style={{fontSize: 42, lineHeight: 1.2, marginBottom: 16}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Building Dreams,<br/>
          <span style={{color: 'var(--accent)'}}>Brick by Brick</span>
        </motion.h1>
        
        <motion.p 
          style={{color:'var(--muted)', marginTop: 12, fontSize: 18, lineHeight: 1.6}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Transform your vision into reality with Malleshwara Construction. We deliver exceptional 
          residential & commercial projects with unmatched quality and craftsmanship.
        </motion.p>

        <motion.div 
          style={{marginTop: 24, display:'flex', gap: 16, flexWrap: 'wrap'}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button 
            className="btn primary-btn" 
            onClick={() => scrollToSection('contact')}
            style={{display: 'flex', alignItems: 'center', gap: 8}}
          >
            Get a Quote <ArrowRight size={16} />
          </button>
          <button 
            className="btn secondary-btn" 
            onClick={() => scrollToSection('gallery')}
            style={{display: 'flex', alignItems: 'center', gap: 8}}
          >
            <Play size={16} /> View Projects
          </button>
          <a 
            className="btn whatsapp-btn" 
            href="https://wa.me/919999999999?text=Hello%2C%20I%20want%20a%20quote" 
            target="_blank" 
            rel="noreferrer"
            style={{textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8}}
          >
            💬 Contact Us
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          style={{marginTop: 32, display: 'flex', gap: 24, flexWrap: 'wrap'}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Award size={20} style={{color: 'var(--accent)'}} />
            <div>
              <div style={{fontWeight: 600}}>300+</div>
              <div style={{fontSize: 12, color: 'var(--muted)'}}>Projects</div>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Users size={20} style={{color: 'var(--accent)'}} />
            <div>
              <div style={{fontWeight: 600}}>20+</div>
              <div style={{fontSize: 12, color: 'var(--muted)'}}>Skilled Workers</div>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Clock size={20} style={{color: 'var(--accent)'}} />
            <div>
              <div style={{fontWeight: 600}}>2 Years</div>
              <div style={{fontSize: 12, color: 'var(--muted)'}}>Warranty</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{width:'45%'}}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div style={{position: 'relative'}}>
          <img 
            alt="construction" 
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
            style={{width:'100%', borderRadius: 12, boxShadow:'0 8px 30px rgba(0,0,0,0.2)'}}
          />
          <motion.div 
            className="card"
            style={{
              position: 'absolute', 
              bottom: -20, 
              right: -20, 
              background: 'var(--card)', 
              padding: 16,
              borderRadius: 12,
              boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div style={{fontWeight: 600, color: 'var(--accent)'}}>✓ Quality Assured</div>
            <div style={{fontSize: 12, color: 'var(--muted)', marginTop: 4}}>2-Year Warranty</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}