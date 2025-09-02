import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Wrench, Home } from 'lucide-react';

export default function About(){
  const teamMembers = [
    {
      name: "Jagadeesh H S",
      role: "Founder ",
      image: "/gallery/jagadeesh.jpg",
      experience: "15+ years"
    },
    {
      name: "Manjunath H S",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      experience: "10+ years"
    },
    {
      name: "Manjanna",
      role: "Site Supervisor",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300",
      experience: "5+ years"
    }
  ];

  return (
    <section id="about" style={{padding:'4rem 0'}}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{textAlign: 'center', marginBottom: 48}}>About Malleshwara Construction</h2>
        
        {/* Company Story */}
        <div style={{display:'flex', gap: 40, flexWrap:'wrap', marginBottom: 48}}>
          <motion.div 
            style={{flex:1, minWidth: 320}}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8}}>
              <Home size={24} style={{color: 'var(--accent)'}} />
              Our Story
            </h3>
            <p style={{color:'var(--muted)', lineHeight: 1.6, marginBottom: 16}}>
              Founded in 2019 by Jagadeesh, our family-owned construction company has grown from 
              humble beginnings to become one of Tumkuru's most trusted construction partners. 
              We believe that every structure we build should stand as a testament to quality, 
              durability, and craftsmanship.<br/>
              2019ರಲ್ಲಿ ಜಗದೀಶ್ ಅವರು ಸ್ಥಾಪಿಸಿದ ನಮ್ಮ ಕುಟುಂಬದ ಮಾಲೀಕತ್ವದ ನಿರ್ಮಾಣ ಕಂಪನಿಯು ಸರಳ ಆರಂಭದಿಂದ ತುಮಕೂರಿನ ಅತ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹ ನಿರ್ಮಾಣ ಸಹಯೋಗಿಗಳಲ್ಲಿ ಒಂದಾಗಿ ಬೆಳೆದಿದೆ. ನಾವು ನಿರ್ಮಿಸುವ ಪ್ರತಿಯೊಂದು ಕಟ್ಟಡವು ಗುಣಮಟ್ಟ, ದೀರ್ಘಾವಧಿ ಮತ್ತು ನಿಪುಣತೆಯ ಸಾಕ್ಷಿಯಾಗಿ ನಿಲ್ಲಬೇಕು ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ.
            </p>
            <p style={{color:'var(--muted)', lineHeight: 1.6}}>
              Over the years, we've completed 100+ projects, from cozy family homes to large 
              commercial complexes, always maintaining our core values of transparency, 
              quality, and customer satisfaction.
            </p>
          </motion.div>
          
          <motion.div 
            style={{width: 280}}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img 
              src="\gallery\img1.jpg" 
              alt="Construction site" 
              style={{width: '150%', height: 400, objectFit: 'cover', borderRadius: 12}}
            />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid cols-2" style={{marginBottom: 48, gap: 24}}>
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
              <Target size={28} style={{color: 'var(--accent)'}} />
              <h3 style={{margin: 0}}>Our Mission</h3>
            </div>
            <p style={{color:'var(--muted)', lineHeight: 1.6}}>
              To deliver exceptional construction services that exceed expectations while 
              maintaining the highest standards of quality, safety, and environmental responsibility. 
              We strive to build lasting relationships with our clients through transparency and trust.<br/>
              ಗ್ರಾಹಕರ ನಿರೀಕ್ಷೆಗಳನ್ನು ಮೀರುವ ಅತ್ಯುತ್ತಮ ನಿರ್ಮಾಣ ಸೇವೆಗಳನ್ನು ನೀಡುವುದರೊಂದಿಗೆ, ಉನ್ನತ ಗುಣಮಟ್ಟ, ಸುರಕ್ಷತೆ ಮತ್ತು ಪರಿಸರದ ಜವಾಬ್ದಾರಿಯ ಉನ್ನತ ಮಾನದಂಡಗಳನ್ನು ಕಾಪಾಡುವುದು ನಮ್ಮ ಧ್ಯೇಯ. ಪಾರದರ್ಶಕತೆ ಮತ್ತು ನಂಬಿಕೆಯ ಮೂಲಕ ನಮ್ಮ ಗ್ರಾಹಕರೊಂದಿಗೆ ದೀರ್ಘಕಾಲಿಕ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ಮಿಸಲು ನಾವು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ.
            </p>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
              <Eye size={28} style={{color: 'var(--accent)'}} />
              <h3 style={{margin: 0}}>Our Vision</h3>
            </div>
            <p style={{color:'var(--muted)', lineHeight: 1.6}}>
              To be the leading construction company in South India, known for innovation, 
              sustainability, and creating spaces that enhance lives. We envision a future where 
              every project contributes positively to the community and environment. <br/>
              ದಕ್ಷಿಣ ಭಾರತದಲ್ಲಿ ಆವಿಷ್ಕಾರ, ಸ್ಥಿರತೆ ಮತ್ತು ಜೀವನವನ್ನು ಸಮೃದ್ಧಗೊಳಿಸುವ ಸ್ಥಳಗಳನ್ನು ನಿರ್ಮಿಸುವ ಮೂಲಕ ಪ್ರಸಿದ್ಧಿ ಪಡೆದ ಪ್ರಮುಖ ನಿರ್ಮಾಣ ಕಂಪನಿಯಾಗುವುದು ನಮ್ಮ ಗುರಿ. ಪ್ರತಿಯೊಂದು ಯೋಜನೆಯೂ ಸಮುದಾಯ ಮತ್ತು ಪರಿಸರಕ್ಕೆ ಧನಾತ್ಮಕವಾಗಿ ಕೊಡುಗೆ ನೀಡುವ ಭವಿಷ್ಯವನ್ನು ನಾವು ಕನಸು ಕಾಣುತ್ತೇವೆ.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 style={{textAlign: 'center', marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8}}>
            <Users size={28} style={{color: 'var(--accent)'}} />
            Meet Our Team
          </h3>
          
          <div className="grid cols-3" style={{gap: 24}}>
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="card team-card"
                style={{textAlign: 'center', padding: 24}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div style={{
                  width: 80, 
                  height: 80, 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  margin: '0 auto 16px',
                  border: '3px solid var(--accent)'
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                </div>
                <h4 style={{margin: '0 0 8px 0', fontWeight: 600}}>{member.name}</h4>
                <p style={{color: 'var(--accent)', fontSize: 14, margin: '0 0 8px 0'}}>{member.role}</p>
                <p style={{color: 'var(--muted)', fontSize: 12, margin: 0}}>{member.experience} experience</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div 
          style={{marginTop: 48, padding: 32, background: 'var(--card)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.03)'}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid cols-3" style={{gap: 24, textAlign: 'center'}}>
            <div>
              <div style={{fontSize: 32, fontWeight: 700, color: 'var(--accent)'}}>100+</div>
              <div style={{color: 'var(--muted)'}}>Completed Projects</div>
            </div>
            <div>
              <div style={{fontSize: 32, fontWeight: 700, color: 'var(--accent)'}}>15+</div>
              <div style={{color: 'var(--muted)'}}>Years Experience</div>
            </div>
            <div>
              <div style={{fontSize: 32, fontWeight: 700, color: 'var(--accent)'}}>100%</div>
              <div style={{color: 'var(--muted)'}}>Client Satisfaction</div>
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
            src="/gallery/img6.jpg" 
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
            <div style={{fontWeight: 600, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 8}}>
              <Award size={16} />
              Quality Assured
            </div>
            <div style={{fontSize: 12, color: 'var(--muted)', marginTop: 4}}>5-Year Warranty</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}