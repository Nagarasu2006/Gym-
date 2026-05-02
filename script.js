:root {
    --accent: #e63946; /* Professional Crimson */
    --gold: #d4af37;
    --bg: #050505;
    --card-bg: #111111;
    --text-main: #ffffff;
    --text-dim: #a0a0a0;
}

body {
    background-color: var(--bg);
    color: var(--text-main);
    font-family: 'Inter', sans-serif;
    margin: 0;
    cursor: none; /* For the custom cursor */
}

/* Custom Cursor */
.cursor {
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
}

/* Modern Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 8%;
    position: fixed;
    width: 100%;
    z-index: 100;
    backdrop-filter: blur(10px);
    background: rgba(0,0,0,0.7);
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.logo { font-family: 'Syncopate', sans-serif; font-weight: 700; letter-spacing: 2px; }
.logo span { color: var(--accent); }

.nav-menu a {
    color: var(--text-main);
    text-decoration: none;
    margin-left: 30px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s;
}

.nav-cta {
    background: var(--accent);
    padding: 10px 20px;
    border-radius: 50px;
}

/* Hero Section */
.hero-pro {
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 10%;
    background: url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
}

.hero-pro h1 {
    font-family: 'Syncopate', sans-serif;
    font-size: clamp(3rem, 8vw, 6rem);
    line-height: 0.9;
    margin-bottom: 20px;
}

.text-stroke {
    -webkit-text-stroke: 1px white;
    color: transparent;
}

.badge {
    color: var(--accent);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: block;
    margin-bottom: 10px;
}

/* Pricing Cards */
.pricing { padding: 100px 10%; text-align: center; }
.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.price-card {
    background: var(--card-bg);
    padding: 50px 30px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.05);
    transition: 0.4s;
}

.price-card.featured {
    border: 1px solid var(--accent);
    transform: scale(1.05);
}

.price-card:hover {
    background: #181818;
    transform: translateY(-10px);
}

.amount { font-size: 3rem; font-weight: 700; margin: 20px 0; color: var(--accent); }
.amount span { font-size: 1rem; color: var(--text-dim); }

.btn-buy {
    width: 100%;
    padding: 15px;
    border: none;
    background: var(--accent);
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
}

.whatsapp-btn {
    display: inline-block;
    background: #25d366;
    color: white;
    padding: 15px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
}
