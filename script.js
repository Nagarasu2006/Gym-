/* --- Root Variables for Elite Branding --- */
:root {
    --accent: #ff0033; /* Pro Crimson */
    --bg: #050505;
    --card: #121212;
    --white: #ffffff;
    --dim: #a0a0a0;
    --transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg);
    color: var(--white);
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

/* --- Navigation --- */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    position: fixed;
    width: 100%;
    z-index: 1000;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.logo {
    font-family: 'Syncopate', sans-serif;
    font-size: 1.3rem;
    letter-spacing: 2px;
}

.logo span { color: var(--accent); }

/* --- Hero Section --- */
.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(rgba(0,0,0,0.7), #000), 
                url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
}

.hero h1 {
    font-family: 'Syncopate', sans-serif;
    font-size: clamp(2.5rem, 10vw, 6rem);
    margin-bottom: 20px;
    text-transform: uppercase;
}

.stroke {
    -webkit-text-stroke: 1.5px white;
    color: transparent;
}

/* --- Professional Buttons --- */
.btn {
    background: var(--accent);
    color: white;
    padding: 18px 45px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 4px;
    text-transform: uppercase;
    transition: var(--transition);
    display: inline-block;
}

.btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 0, 51, 0.5);
}

/* --- Pricing Cards --- */
.pricing { padding: 100px 8%; text-align: center; }

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.card {
    background: var(--card);
    padding: 50px 30px;
    border-radius: 15px;
    border: 1px solid rgba(255,255,255,0.05);
    transition: var(--transition);
}

.card:hover {
    border-color: var(--accent);
    transform: scale(1.03);
}

.price { font-size: 3.5rem; font-weight: 800; margin: 20px 0; }

/* --- WhatsApp Float --- */
.wa-float {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #25d366;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    z-index: 999;
}
