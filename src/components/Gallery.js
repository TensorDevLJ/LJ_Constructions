
import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Play, ExternalLink ,ArrowRight } from 'lucide-react';

export default function Gallery(){
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const projectData = [
    { id: 1, category: 'residential', title: 'Modern Villa', location: 'Whitefield', before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, category: 'commercial', title: 'Office Complex', location: 'Electronic City', before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, category: 'renovation', title: 'Kitchen Renovation', location: 'Koramangala', before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, category: 'residential', title: 'Luxury Apartment', location: 'Indiranagar', before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, category: 'commercial', title: 'Retail Store', location: 'Brigade Road', before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, category: 'renovation', title: 'Bathroom Makeover', location: 'HSR Layout', before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  useEffect(()=>{
    setImages(projectData);
  },[]);

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'renovation', label: 'Renovation' }
  ];

    const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="gallery" style={{padding:'4rem 0', background: 'var(--card)'}}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{textAlign: 'center', marginBottom: 16}}>Our Projects</h2>
        <p style={{textAlign: 'center', color: 'var(--muted)', marginBottom: 32, maxWidth: 600, margin: '0 auto 32px'}}>
          Explore our portfolio of successful projects across residential, commercial, and renovation categories.
        </p>

        {/* Filter Buttons */}
        <div style={{display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 32, flexWrap: 'wrap'}}>
          {filters.map(filterOption => (
            <motion.button
              key={filterOption.key}
              className={`filter-btn ${filter === filterOption.key ? 'active' : ''}`}
              onClick={() => setFilter(filterOption.key)}
              style={{
                padding: '8px 16px',
                borderRadius: 20,
                border: 'none',
                background: filter === filterOption.key ? 'var(--accent)' : 'transparent',
                color: filter === filterOption.key ? 'white' : 'var(--text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={14} />
              {filterOption.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div className="grid cols-3" style={{gap: 24}} layout>
          <AnimatePresence>
            {filteredImages.map((project, i) => (
              <motion.div 
                key={project.id}
                className="card gallery-item"
                style={{cursor:'pointer', overflow: 'hidden', padding: 0}}
                onClick={() => setSelectedImage(project)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                layout
              >
                <div style={{position: 'relative', overflow: 'hidden'}}>
                  <img 
                    src={project.after} 
                    alt={project.title}
                    style={{width: '100%', height: 200, objectFit: 'cover'}}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: 12,
                    fontSize: 12,
                    textTransform: 'capitalize'
                  }}>
                    {project.category}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    color: 'white',
                    padding: 16
                  }}>
                    <div style={{fontWeight: 600}}>{project.title}</div>
                    <div style={{fontSize: 12, opacity: 0.8}}>{project.location}</div>
                  </div>
                </div>
                <div style={{padding: 16}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent)'}}>
                    <Play size={14} />
                    <span style={{fontSize: 14}}>View Before & After</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          style={{marginTop: 48, textAlign: 'center'}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 style={{marginBottom: 24}}>Project Walkthroughs</h3>
          <div className="grid cols-2" style={{gap: 24}}>
            <div className="card" style={{padding: 0, overflow: 'hidden'}}>
              <div style={{
                height: 200,
                background: 'linear-gradient(135deg, var(--accent), #0891b2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <div style={{textAlign: 'center'}}>
                  <Play size={48} style={{marginBottom: 8}} />
                  <div>Villa Construction Timelapse</div>
                </div>
              </div>
              <div style={{padding: 16}}>
                <strong>3-Month Villa Build</strong>
                <p style={{color: 'var(--muted)', fontSize: 14, margin: '8px 0 0 0'}}>Watch our team build a complete villa from foundation to finishing</p>
              </div>
            </div>
            <div className="card" style={{padding: 0, overflow: 'hidden'}}>
              <div style={{
                height: 200,
                background: 'linear-gradient(135deg, #7c3aed, var(--accent))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <div style={{textAlign: 'center'}}>
                  <Play size={48} style={{marginBottom: 8}} />
                  <div>Renovation Transformation</div>
                </div>
              </div>
              <div style={{padding: 16}}>
                <strong>Complete Home Makeover</strong>
                <p style={{color: 'var(--muted)', fontSize: 14, margin: '8px 0 0 0'}}>See how we transformed this 20-year-old house into a modern home</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          style={{textAlign: 'center', marginTop: 48}}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button 
            className="btn primary-btn"
            onClick={scrollToContact}
            style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px'}}
          >
            Request Quote for Your Project <ArrowRight size={18} />
          </button>
        </motion.div>
      </motion.div>

      {/* Modal for Before/After */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: 20
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="card"
              style={{maxWidth: 800, width: '100%'}}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
                <h3 style={{margin: 0}}>{selectedImage.title}</h3>
                <button 
                  onClick={() => setSelectedImage(null)}
                  style={{background: 'none', border: 'none', color: 'var(--text)', fontSize: 24, cursor: 'pointer'}}
                >
                  ×
                </button>
              </div>
              <div className="grid cols-2" style={{gap: 16}}>
                <div>
                  <h4 style={{marginBottom: 8, fontSize: 14, color: 'var(--muted)'}}>BEFORE</h4>
                  <img src={selectedImage.before} alt="Before" style={{width: '100%', height: 200, objectFit: 'cover', borderRadius: 8}} />
                </div>
                <div>
                  <h4 style={{marginBottom: 8, fontSize: 14, color: 'var(--muted)'}}>AFTER</h4>
                  <img src={selectedImage.after} alt="After" style={{width: '100%', height: 200, objectFit: 'cover', borderRadius: 8}} />
                </div>
              </div>
              <div style={{marginTop: 16, textAlign: 'center'}}>
                <span style={{color: 'var(--muted)'}}>{selectedImage.location}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}