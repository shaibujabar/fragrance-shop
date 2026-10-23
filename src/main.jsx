import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const perfumes = [
  {
    name: 'Amber No. 08',
    note: 'Warm amber · Vanilla · Sandalwood',
    description: 'A slow-burning warmth, softened with vanilla and a touch of smoke.',
    price: '$128',
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85',
    tone: 'amber',
    tag: 'BESTSELLER',
  },
  {
    name: 'Petal & Pearl',
    note: 'White rose · Peony · Musk',
    description: 'Fresh petals in the morning light, with a soft, skin-close finish.',
    price: '$112',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85',
    tone: 'rose',
  },
  {
    name: 'Midnight Fig',
    note: 'Black fig · Cedar · Tonka',
    description: 'Lush green fig meets dark woods for an after-hours kind of allure.',
    price: '$136',
    image:
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1000&q=85',
    tone: 'fig',
    tag: 'NEW ARRIVAL',
  },
  {
    name: 'Golden Hour',
    note: 'Bergamot · Neroli · Amber',
    description: 'The last golden rays of the day, bottled in a bright citrus blend.',
    price: '$120',
    image:
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1000&q=85',
    tone: 'gold',
  },
  {
    name: 'Santal Noire',
    note: 'Creamy sandalwood · Iris · Vetiver',
    description: 'A beautifully quiet blend with a smooth, grounding woodiness.',
    price: '$148',
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85',
    tone: 'santal',
  },
  {
    name: 'Coastal Bloom',
    note: 'Sea salt · Jasmine · Driftwood',
    description: 'A little salt air and sun-warmed florals, wherever you find yourself.',
    price: '$116',
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85',
    tone: 'coastal',
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Scent Haven home">
        <span className="brand-mark">S</span>
        <span>SCENT HAVEN</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#collection">Collection</a>
        <a href="#about">Our story</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="#collection">
        FIND YOUR SCENT <ArrowIcon />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span /> SCENT, WITH A STORY</p>
        <h1>Leave a little<br />wonder <em>wherever</em><br />you go.</h1>
        <p className="hero-description">
          Thoughtfully made fragrances for the moments that become memories.
          Find the one that feels like you.
        </p>
        <a className="button button-gold" href="#collection">
          EXPLORE THE COLLECTION <ArrowIcon />
        </a>
        <div className="hero-proof">
          <div className="proof-stars" aria-label="Five out of five stars">★★★★★</div>
          <span>Loved by 2,000+ scent seekers</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image" role="img" aria-label="A sculptural perfume bottle in warm golden light" />
        <div className="hero-image-overlay" />
        <div className="hero-note">
          <span className="note-rule" />
          <span>THE ART OF<br />BEING REMEMBERED</span>
        </div>
        <div className="hero-caption">
          <span>01 / 06</span>
          <span>AMBER NO. 08</span>
        </div>
      </div>
      <div className="hero-side-label">FINE FRAGRANCE · MADE WITH INTENTION</div>
      <div className="hero-bottom-line" />
    </section>
  );
}

function ProductCard({ product, index }) {
  return (
    <article className="product-card">
      <a className={`product-image ${product.tone}`} href="#contact" aria-label={`Ask us about ${product.name}`}>
        <img src={product.image} alt={`${product.name} fragrance`} loading="lazy" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <span className="product-number">0{index + 1}</span>
      </a>
      <div className="product-info">
        <div>
          <p className="product-notes">{product.note}</p>
          <h3>{product.name}</h3>
        </div>
        <span className="product-price">{product.price}</span>
      </div>
      <p className="product-description">{product.description}</p>
      <a className="product-link" href="#contact">
        DISCOVER THIS SCENT <ArrowIcon />
      </a>
    </article>
  );
}

function Collection() {
  return (
    <section className="collection section-wrap" id="collection">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span /> THE SCENT EDIT</p>
          <h2>Find your <em>signature.</em></h2>
        </div>
        <p className="section-intro">
          Six distinct moods. One very personal ritual. Explore the fragrances
          our little corner of the world can’t stop talking about.
        </p>
      </div>
      <div className="product-grid">
        {perfumes.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
      </div>
      <div className="collection-footer">
        <span>SMALL BATCH. ALWAYS PERSONAL.</span>
        <span>COMPLIMENTARY SHIPPING ON ORDERS $150+</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1608528577891-eb055944f2e8?auto=format&fit=crop&w=1200&q=85"
          alt="Perfume ingredients and a bottle arranged in soft natural light"
          loading="lazy"
        />
        <div className="about-image-label">MADE SLOWLY, WORN FOREVER</div>
      </div>
      <div className="about-copy">
        <p className="eyebrow"><span /> A NOTE FROM US</p>
        <h2>More than a scent.<br />A <em>feeling</em> you keep.</h2>
        <p>
          Scent Haven began with a simple thought: the best fragrances don’t
          announce themselves. They stay with you. In the warmth of a borrowed
          sweater, a familiar hug, a place you can’t quite forget.
        </p>
        <p>
          We work with thoughtful makers and beautiful ingredients to create
          scents that feel personal, never precious. Made in small batches.
          Meant to be lived in.
        </p>
        <a className="text-link" href="#contact">A LITTLE MORE ABOUT US <ArrowIcon /></a>
        <div className="signature">With love, <span>Scent Haven</span></div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-wrap" id="contact">
      <div className="contact-copy">
        <p className="eyebrow"><span /> WE’RE HERE FOR YOU</p>
        <h2>Let’s find your<br /><em>kind of lovely.</em></h2>
        <p>Need a little guidance? Tell us what you love, and we’ll help you find your next favourite.</p>
      </div>
      <div className="contact-details">
        <a href="mailto:hello@scenthaven.com" className="contact-email">hello@scenthaven.com <ArrowIcon /></a>
        <div className="contact-hours">
          <span>GOOD THINGS HAPPEN</span>
          <span>MON–FRI, 9AM–5PM EST</span>
        </div>
        <a href="https://instagram.com" className="social-link" target="_blank" rel="noreferrer">
          FOLLOW ALONG ON INSTAGRAM <span>↗</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#home">
        <span className="brand-mark">S</span>
        <span>SCENT HAVEN</span>
      </a>
      <span className="footer-note">A GOOD SCENT IS A KIND OF MEMORY.</span>
      <span className="copyright">© 2024 SCENT HAVEN. MADE WITH INTENTION.</span>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collection />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
