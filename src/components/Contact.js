import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact(){
  const [form, setForm] = useState({name:'', phone:'', email:'', message:'', projectType: 'residential'});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const update = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      const subject = encodeURIComponent(`${form.projectType} project quote request from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProject Type: ${form.projectType}\nMessage: ${form.message}`);
      window.location.href = `mailto:malleshwaraconstruction@example.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" style={{padding:'4rem 0', background: 'var(--bg)'}}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{textAlign: 'center', marginBottom: 16}}>Contact Us</h2>
        <p style={{textAlign: 'center', color: 'var(--muted)', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px'}}>
          Ready to start your construction project? Get in touch with us for a free consultation and quote.
        </p>

        <div style={{display:'flex', gap: 40, flexWrap:'wrap'}}>
          {/* Contact Form */}
          <motion.div 
            style={{flex: 1, minWidth: 400}} 
            className="card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8}}>
              <Send size={20} style={{color: 'var(--accent)'}} />
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{marginBottom: 16}}>
                <label style={{display: 'block', marginBottom: 8, fontWeight: 500}}>Full Name *</label>
                <input 
                  name="name" 
                  required 
                  value={form.name} 
                  onChange={update} 
                  placeholder="Enter your full name"
                  style={{
                    width:'100%', 
                    padding:'12px', 
                    borderRadius: 8, 
                    border:'1px solid rgba(255,255,255,0.1)',
                    background: 'var(--bg)',
                    color: 'var(--text)'
                  }} 
                />
              </div>

              <div style={{display: 'flex', gap: 16, marginBottom: 16}}>
                <div style={{flex: 1}}>
                  <label style={{display: 'block', marginBottom: 8, fontWeight: 500}}>Phone *</label>
                  <input 
                    name="phone" 
                    required 
                    value={form.phone} 
                    onChange={update} 
                    placeholder="+91 99999 99999"
                    style={{
                      width:'100%', 
                      padding:'12px', 
                      borderRadius: 8, 
                      border:'1px solid rgba(255,255,255,0.1)',
                      background: 'var(--bg)',
                      color: 'var(--text)'
                    }} 
                  />
                </div>
                <div style={{flex: 1}}>
                  <label style={{display: 'block', marginBottom: 8, fontWeight: 500}}>Email *</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    value={form.email} 
                    onChange={update} 
                    placeholder="your@email.com"
                    style={{
                      width:'100%', 
                      padding:'12px', 
                      borderRadius: 8, 
                      border:'1px solid rgba(255,255,255,0.1)',
                      background: 'var(--bg)',
                      color: 'var(--text)'
                    }} 
                  />
                </div>
              </div>

              <div style={{marginBottom: 16}}>
                <label style={{display: 'block', marginBottom: 8, fontWeight: 500}}>Project Type *</label>
                <select 
                  name="projectType" 
                  value={form.projectType} 
                  onChange={update}
                  style={{
                    width:'100%', 
                    padding:'12px', 
                    borderRadius: 8, 
                    border:'1px solid rgba(255,255,255,0.1)',
                    background: 'var(--bg)',
                    color: 'var(--text)'
                  }}
                >
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="interior">Interior Design</option>
                  <option value="maintenance">Maintenance & Repair</option>
                </select>
              </div>

              <div style={{marginBottom: 24}}>
                <label style={{display: 'block', marginBottom: 8, fontWeight: 500}}>Project Details *</label>
                <textarea 
                  name="message" 
                  required 
                  value={form.message} 
                  onChange={update} 
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                  style={{
                    width:'100%', 
                    minHeight: 120, 
                    padding:'12px', 
                    borderRadius: 8, 
                    border:'1px solid rgba(255,255,255,0.1)',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    resize: 'vertical'
                  }} 
                />
              </div>

              <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
                <motion.button 
                  type="submit" 
                  className="btn primary-btn"
                  disabled={isSubmitting}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                </motion.button>
                <motion.a 
                  className="btn whatsapp-btn" 
                  href="https://wa.me/919999999999?text=Hello%2C%20I%20want%20a%20quote" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 8,
                    minWidth: 160
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle size={16} /> WhatsApp
                </motion.a>
              </div>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            style={{width: 400}}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="card" style={{marginBottom: 24}}>
              <h3 style={{marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8}}>
                <Phone size={20} style={{color: 'var(--accent)'}} />
                Contact Information
              </h3>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <div style={{
                    width: 40, 
                    height: 40, 
                    background: 'var(--accent)', 
                    borderRadius: 8, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                  }}>
                    <Phone size={18} color="white" />
                  </div>
                  <div>
                    <div style={{fontWeight: 500}}>+91 99999 99999</div>
                    <div style={{fontSize: 12, color: 'var(--muted)'}}>Call us anytime</div>
                  </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <div style={{
                    width: 40, 
                    height: 40, 
                    background: 'var(--accent)', 
                    borderRadius: 8, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                  }}>
                    <Mail size={18} color="white" />
                  </div>
                  <div>
                    <div style={{fontWeight: 500}}>malleshwaraconstruction@example.com</div>
                    <div style={{fontSize: 12, color: 'var(--muted)'}}>Email for quotes</div>
                  </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <div style={{
                    width: 40, 
                    height: 40, 
                    background: 'var(--accent)', 
                    borderRadius: 8, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                  }}>
                    <MapPin size={18} color="white" />
                  </div>
                  <div>
                    <div style={{fontWeight: 500}}>Bengaluru & Surrounding Areas</div>
                    <div style={{fontSize: 12, color: 'var(--muted)'}}>Service coverage area</div>
                  </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <div style={{
                    width: 40, 
                    height: 40, 
                    background: 'var(--accent)', 
                    borderRadius: 8, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                  }}>
                    <Clock size={18} color="white" />
                  </div>
                  <div>
                    <div style={{fontWeight: 500}}>Mon - Sat: 8:00 AM - 6:00 PM</div>
                    <div style={{fontSize: 12, color: 'var(--muted)'}}>Working hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="card" style={{padding: 0, overflow: 'hidden'}}>
              <iframe 
                title="office-location" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085452148437!3d12.953945614117647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%" 
                height="250" 
                style={{border: 0}} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{padding: 16, textAlign: 'center'}}>
                <div style={{fontWeight: 500, marginBottom: 4}}>Our Service Area</div>
                <div style={{fontSize: 12, color: 'var(--muted)'}}>Click map for directions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}