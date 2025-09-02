import React from 'react';
import { motion } from 'framer-motion';
import { Home, Wrench, Fence, Palette, Building, Hammer, ArrowRight } from 'lucide-react';

export default function Services(){
  const services = [
    {
      icon: Home,
      title: "House Construction",
      description: "Complete residential construction from foundation to finishing with modern designs and quality materials.",
      features: ["Custom Design", "Quality Materials", "Timely Delivery"]
    },
    {
      icon: Wrench,
      title: "Renovation",
      description: "Transform your existing spaces with our expert renovation services for homes and offices.",
      features: ["Space Optimization", "Modern Upgrades", "Cost Effective"]
    },
    {
      icon: Fence,
      title: "Fencing & Boundaries",
      description: "Secure your property with durable and aesthetically pleasing fencing solutions.",
      features: ["Durable Materials", "Custom Heights", "Quick Installation"]
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Complete interior solutions including modular kitchens, wardrobes, and space planning.",
      features: ["3D Visualization", "Premium Finishes", "Space Planning"]
    },
    {
      icon: Building,
      title: "Commercial Projects",
      description: "Large-scale commercial construction including offices, warehouses, and retail spaces.",
      features: ["Project Management", "Compliance", "Scalable Solutions"]
    },
    {
      icon: Hammer,
      title: "Maintenance & Repair",
      description: "Ongoing maintenance and repair services to keep your property in perfect condition.",
      features: ["Quick Response", "Skilled Technicians", "Affordable Rates"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
  };

  return (
    <section id="services" style={{padding:'4rem 0', background: 'var(--bg)'}}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{textAlign: 'center', marginBottom: 16}}>Our Services</h2>
        <p style={{textAlign: 'center', color: 'var(--muted)', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px'}}>
          From concept to completion, we offer comprehensive construction services tailored to your needs and budget.
        </p>
        
        <div className="grid cols-3" style={{gap: 24}}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index}
                className="card service-card"
                style={{padding: 24, height: '100%', display: 'flex', flexDirection: 'column'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div style={{
                  width: 60, 
                  height: 60, 
                  background: 'var(--accent)', 
                  borderRadius: 12, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: 16
                }}>
                  <IconComponent size={28} color="white" />
                </div>
                
                <h3 style={{margin: '0 0 12px 0', fontWeight: 600}}>{service.title}</h3>
                <p style={{color:'var(--muted)', lineHeight: 1.6, marginBottom: 16, flex: 1}}>
                  {service.description}
                </p>
                
                <div style={{marginBottom: 16}}>
                  {service.features.map((feature, i) => (
                    <div key={i} style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4}}>
                      <div style={{width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%'}}></div>
                      <span style={{fontSize: 14, color: 'var(--muted)'}}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="btn secondary-btn"
                  onClick={scrollToContact}
                  style={{
                    width: '100%', 
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8
                  }}
                >
                  Request Quote <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          style={{textAlign: 'center', marginTop: 48}}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button 
            className="btn primary-btn"
            onClick={scrollToContact}
            style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px'}}
          >
            Get Free Consultation <ArrowRight size={18} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}