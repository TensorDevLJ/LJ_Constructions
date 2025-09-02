import React from 'react';

export default function Home(){
  return (
    <section id="home" className="hero">
      <div style={{flex:1}}>
        <h1 style={{fontSize:28}}>Building trust, delivering quality.</h1>
        <p style={{color:'var(--muted)',marginTop:12}}>Malleshwara Construction provides residential & commercial construction, renovation and interiors with a focus on timelines and workmanship.</p>
        <div style={{marginTop:16,display:'flex',gap:12}}>
          <a className="btn" href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>Request Quote</a>
          <a className="btn" href="#gallery" style={{background:'transparent',color:'var(--text)',border:'1px solid rgba(255,255,255,0.06)'}}>View Gallery</a>
        </div>
      </div>
      <div style={{width:'45%'}}>
        <img alt="construction" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1400&auto=format&fit=crop" style={{width:'100%',borderRadius:12,boxShadow:'0 8px 30px rgba(0,0,0,0.2)'}}/>
      </div>
    </section>
  )
}
