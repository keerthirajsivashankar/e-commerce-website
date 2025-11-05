// pages/Home.js

// You can import components like Carousel or HeroBanner here later
// import { HeroBanner } from '../components/HeroBanner.js';

export const HomePage = () => {
  return `
        <main class="page-content home-page">
            <section class="hero-section">
                <h1>The Modern Man's Wardrobe</h1>
                <p>Curated looks, timeless style. Discover the collection built for purpose and longevity.</p>
                <button 
                    class="cta-button" 
                    onclick="router.navigate('/products')"
                >
                    Shop New Arrivals
                </button>
            </section>
            
            <section class="featured-products">
                <h2>Featured Collections</h2>
                <div class="product-grid">
                    <p>Load 3 featured ProductCard components here.</p>
                </div>
            </section>
        </main>
    `;
};
