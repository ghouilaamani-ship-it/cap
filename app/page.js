export default function Home(){
  const cards = [
    ['The Dreamer','Turns loneliness into imagination and meaning.'],
    ['The Builder','Creates projects, pages, systems, beauty.'],
    ['The Seeker','Always searching for truth, art, freedom.'],
    ['The Romantic','Wants sincerity and rare connection.'],
    ['The Analyst','Wants to truly understand things.'],
    ['The Phoenix','Keeps growing through hard seasons.']
  ];

  return (
    <main style={{minHeight:'100vh',background:'linear-gradient(to bottom,#09090b,#111827,#000)',padding:'40px'}}>
      <section style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'30px',alignItems:'center'}}>
        <div>
          <p style={{letterSpacing:'6px',color:'#a1a1aa'}}>AMENI • MIMI</p>
          <h1 style={{fontSize:'64px',lineHeight:'1.05',margin:'10px 0'}}>A mind made of stories, code & moonlight.</h1>
          <p style={{color:'#d4d4d8',fontSize:'20px'}}>A quiet force who loves mystery, beauty, music, psychology and building a future with style.</p>
        </div>
        <div style={{padding:'28px',border:'1px solid #27272a',borderRadius:'28px',background:'rgba(255,255,255,0.04)'}}>
          <p>🌙 Loves depth and beauty</p>
          <p>🎧 Slowdive, Radiohead, Sade</p>
          <p>📚 Gothic romance & stories</p>
          <p>🎨 Canva, design, digital worlds</p>
          <p>💻 Future in tech & data</p>
        </div>
      </section>

      <section style={{maxWidth:'1100px',margin:'70px auto 0'}}>
        <h2 style={{fontSize:'36px'}}>Moodboard of the Soul</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'18px',marginTop:'20px'}}>
          {cards.map(([t,d]) => (
            <div key={t} style={{padding:'22px',border:'1px solid #27272a',borderRadius:'24px',background:'rgba(255,255,255,0.04)'}}>
              <h3>{t}</h3>
              <p style={{color:'#d4d4d8'}}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{maxWidth:'1100px',margin:'70px auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'20px'}}>
        <div style={{padding:'26px',borderRadius:'24px',background:'linear-gradient(135deg,#581c87,#312e81)'}}>
          <h2>Current Era</h2>
          <p>Studying, evolving, healing, becoming stronger and building a life with intention.</p>
        </div>
        <div style={{padding:'26px',borderRadius:'24px',background:'#111827'}}>
          <h2>Quote</h2>
          <p style={{fontStyle:'italic'}}>She was soft, but never weak. Lost, but never empty.</p>
        </div>
      </section>
    </main>
  )
}
