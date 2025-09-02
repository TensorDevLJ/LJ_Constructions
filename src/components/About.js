import React from 'react';

export default function About(){
  return (
    <section id="about" style={{padding:'2rem 0'}}>
      <h2>About Malleshwara Construction</h2>
      <div style={{display:'flex',gap:20,flexWrap:'wrap',marginTop:12}}>
        <div style={{flex:1,minWidth:280}}>
          <p style={{color:'var(--muted)'}}>Family-owned construction company delivering end-to-end building solutions: new builds, renovations, interiors and project management. We prioritise transparent pricing and on-time delivery.</p>
          <ul style={{color:'var(--muted)'}}>
            <li>Residential & Commercial</li>
            <li>Renovations & Extensions</li>
            <li>Design & Project Management</li>
            <li>Quality Assurance & Aftercare</li>
          </ul>
        </div>
        <div style={{width:300}} className="card">
          <strong>Quick Facts</strong>
          <div style={{marginTop:8}}>
            <div>✅ 300+ Projects</div>
            <div>✅ 20+ Skilled Workers</div>
            <div>✅ 2-Year Workmanship Warranty</div>
          </div>
        </div>
      </div>
    </section>
  )
}
