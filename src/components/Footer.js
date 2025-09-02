import React from 'react';
export default function Footer(){
  return (
    <footer className="container" style={{paddingTop:20,paddingBottom:40}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
        <div>
          <strong>Malleshwara Construction</strong>
          <div style={{color:'var(--muted)',fontSize:13}}>© {new Date().getFullYear()} Malleshwara Construction. All rights reserved.</div>
        </div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <a href="#contact">Contact</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:malleshwaraconstruction@example.com">Email</a>
        </div>
      </div>
      {/* Floating action buttons */}
      <div className="fab" aria-hidden>
        <a href="https://wa.me/919999999999?text=Hi%20I%20found%20your%20service" target="_blank" rel="noreferrer" title="WhatsApp">W</a>
        <a href="mailto:malleshwaraconstruction@example.com" title="Email">✉</a>
      </div>
    </footer>
  )
}
