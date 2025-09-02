import React from 'react';
import { FaSun, FaMoon, FaPhoneAlt } from 'react-icons/fa';

export default function Header(){
  const toggle = ()=>{
    const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
  };
  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  };
  return (
    <header className="container header" style={{alignItems:'center'}}>
      <div className="logo">
        <div style={{width:52,height:52,background:'var(--accent)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>MC</div>
        <div>
          <div style={{fontWeight:700}}>Malleshwara Construction</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>Quality builds since 2005</div>
        </div>
      </div>

      <nav className="nav">
        <button onClick={()=>scrollTo('home')} style={{background:'transparent',border:'none',color:'var(--text)',cursor:'pointer'}}>Home</button>
        <button onClick={()=>scrollTo('about')} style={{background:'transparent',border:'none',color:'var(--text)',cursor:'pointer'}}>About</button>
        <button onClick={()=>scrollTo('gallery')} style={{background:'transparent',border:'none',color:'var(--text)',cursor:'pointer'}}>Gallery</button>
        <button onClick={()=>scrollTo('map')} style={{background:'transparent',border:'none',color:'var(--text)',cursor:'pointer'}}>Area Map</button>
        <button onClick={()=>scrollTo('contact')} style={{background:'transparent',border:'none',color:'var(--text)',cursor:'pointer'}}>Contact</button>
        <button className="btn" onClick={toggle} title="Toggle theme" style={{display:'inline-flex',alignItems:'center',gap:8}}>
          <FaSun style={{display: 'none'}}/>
          <FaMoon/>
        </button>
        <a className="btn" href="tel:+919999999999" style={{textDecoration:'none'}}>Call <FaPhoneAlt style={{marginLeft:6}}/></a>
      </nav>
    </header>
  )
}
