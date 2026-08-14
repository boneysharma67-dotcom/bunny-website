import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <div class="logo">🐰 BUNNY</div>
    <nav>
      <a href="#services">Services</a>
      <a href="#about">Why Bunny</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="nav-btn" href="#contact">Get a Quote</a>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">PREMIUM COMMERCIAL CLEANING</p>
        <h1>A cleaner space.<br><span>A better business.</span></h1>
        <p class="hero-text">
          Reliable, professional cleaning services for offices,
          restaurants, warehouses and commercial spaces.
        </p>
        <div class="hero-buttons">
          <a class="btn primary" href="#contact">Get a Free Quote</a>
          <a class="btn secondary" href="#services">Our Services</a>
        </div>
      </div>

      <div class="hero-card">
        <div class="circle">🐰</div>
        <h3>Clean. Fresh. Professional.</h3>
        <p>Trusted cleaning for modern businesses.</p>
      </div>
    </section>

    <section id="services" class="section">
      <p class="eyebrow">WHAT WE DO</p>
      <h2>Cleaning services made simple.</h2>

      <div class="cards">
        <article class="card">
          <div class="icon">🏢</div>
          <h3>Office Cleaning</h3>
          <p>Keep your workplace spotless and welcoming.</p>
        </article>

        <article class="card">
          <div class="icon">🍽️</div>
          <h3>Restaurant Cleaning</h3>
          <p>Detailed cleaning for restaurants and kitchens.</p>
        </article>

        <article class="card">
          <div class="icon">🏗️</div>
          <h3>Post-Construction</h3>
          <p>Get newly completed spaces ready for business.</p>
        </article>

        <article class="card">
          <div class="icon">🏭</div>
          <h3>Commercial Spaces</h3>
          <p>Reliable cleaning for buildings and warehouses.</p>
        </article>
      </div>
    </section>

    <section id="about" class="about section">
      <div>
        <p class="eyebrow">WHY BUNNY</p>
        <h2>We don't just clean.<br>We care about your space.</h2>
      </div>

      <div class="features">
        <div><strong>01</strong><span>Reliable service</span></div>
        <div><strong>02</strong><span>Professional team</span></div>
        <div><strong>03</strong><span>Flexible schedules</span></div>
        <div><strong>04</strong><span>Quality focused</span></div>
      </div>
    </section>

    <section id="contact" class="contact section">
      <div>
        <p class="eyebrow">LET'S TALK</p>
        <h2>Ready for a cleaner space?</h2>
        <p>Tell us what you need and Bunny will get back to you.</p>
      </div>

      <form id="quoteForm">
        <input type="text" placeholder="Your name" required>
        <input type="email" placeholder="Email address" required>
        <input type="text" placeholder="Business name">
        <textarea placeholder="Tell us about your cleaning needs"></textarea>
        <button type="submit">Request a Quote →</button>
      </form>
    </section>
  </main>

  <footer>
    <div class="logo">🐰 BUNNY</div>
    <p>Professional cleaning. Better spaces.</p>
    <small>© 2026 Bunny Cleaning Services</small>
  </footer><a class="floating-whatsapp" href="https://wa.me/15872169130?text=Hi%20Bunny%2C%20I%27d%20like%20a%20cleaning%20quote." target="_blank" rel="noopener">💬 WhatsApp</a>
`

document.querySelector('#quoteForm').addEventListener('submit', (event) => {
  event.preventDefault()
  alert('Thanks! Your quote request has been received.')
})
