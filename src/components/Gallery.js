import React, {useState, useEffect} from 'react';

export default function Gallery(){
  const [images, setImages] = useState([]);

  useEffect(()=>{
    // look for images in public/gallery numbered photo1..photo12
    const imgs = [];
    for(let i=1;i<=12;i++){
      imgs.push(`/gallery/photo${i}.jpg`);
    }
    setImages(imgs);
  },[]);

  return (
    <section id="gallery" style={{padding:'2rem 0'}}>
      <h2>Gallery</h2>
      <p style={{color:'var(--muted)'}}>Click any image to open in a new tab. Add your photos to <code>/public/gallery/</code> (e.g. photo1.jpg).</p>
      <div className="grid cols-3" style={{marginTop:12}}>
        {images.map((src,i)=>(
          <div key={i} className="card" style={{cursor:'pointer'}} onClick={()=>window.open(src,'_blank')}>
            <img src={src} alt={'project-'+i} onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/400x300?text=Add+photo'+(i+1)}}/>
            <div style={{marginTop:8}}><strong>Project {i+1}</strong><div style={{color:'var(--muted)',fontSize:13}}>View details & photos</div></div>
          </div>
        ))}
      </div>
    </section>
  )
}
