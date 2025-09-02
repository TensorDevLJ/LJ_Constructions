import React, {useState} from 'react';

export default function Contact(){
  const [form, setForm] = useState({name:'',phone:'',email:'',message:''});
  const update = e => setForm({...form,[e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote request from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`);
    window.location.href = `mailto:malleshwaraconstruction@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" style={{padding:'2rem 0'}}>
      <h2>Contact Us</h2>
      <div style={{display:'flex',gap:20,flexWrap:'wrap',marginTop:12}}>
        <div style={{flex:1,minWidth:280}} className="card">
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input name="name" required value={form.name} onChange={update} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid rgba(255,255,255,0.03)'}} />

            <label style={{display:'block',marginTop:8}}>Phone</label>
            <input name="phone" required value={form.phone} onChange={update} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid rgba(255,255,255,0.03)'}} />

            <label style={{display:'block',marginTop:8}}>Email</label>
            <input name="email" type="email" required value={form.email} onChange={update} style={{width:'100%',padding:'0.6rem',borderRadius:8,border:'1px solid rgba(255,255,255,0.03)'}} />

            <label style={{display:'block',marginTop:8}}>Message</label>
            <textarea name="message" required value={form.message} onChange={update} style={{width:'100%',minHeight:120,padding:'0.6rem',borderRadius:8,border:'1px solid rgba(255,255,255,0.03)'}} />

            <div style={{marginTop:12,display:'flex',gap:8}}>
              <button type="submit" className="btn">Send Email</button>
              <a className="btn" href="https://wa.me/919999999999?text=Hello%2C%20I%20want%20a%20quote" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
          </form>
        </div>

        <div style={{width:320}} className="card">
          <strong>Contact Details</strong>
          <div style={{marginTop:8}}>
            <div>📍 Service Area: Bengaluru & nearby</div>
            <div>📞 Phone: +91 99999 99999</div>
            <div>✉ Email: malleshwaraconstruction@example.com</div>
          </div>

          <hr style={{margin:'12px 0',borderColor:'rgba(255,255,255,0.03)'}}/>
          <strong>Working Hours</strong>
          <div style={{color:'var(--muted)'}}>Mon - Sat: 8:00 AM - 6:00 PM</div>
        </div>
      </div>
    </section>
  )
}
