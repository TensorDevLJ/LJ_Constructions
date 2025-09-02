import React from 'react';

export default function MapSection(){
  const place = encodeURIComponent('Bengaluru, India');
  const iframeSrc = `https://www.google.com/maps?q=${place}&output=embed`;
  return (
    <section id="map" style={{padding:'2rem 0'}}>
      <h2>Area Map</h2>
      <p style={{color:'var(--muted)'}}>We serve these areas — open the map for directions.</p>
      <div className="card" style={{marginTop:12}}>
        <iframe title="service-area" src={iframeSrc} width="100%" height="360" style={{border:0,borderRadius:8}} loading="lazy"></iframe>
      </div>
    </section>
  )
}
