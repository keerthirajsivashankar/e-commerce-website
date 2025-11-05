// pages/ProductDetail.js

export const ProductDetailPage = () => {
  // NOTE: In a real app, you would extract the ID from the URL (e.g., /product/123)
  // and fetch the specific product data here.

  return `
        <main class="page-content product-detail-page">
            <section class="product-view">
                <div class="image-gallery">
                    <img src="[Placeholder of detailed product]" alt="Product X Detail">
                    <div class="thumbnails">
                        <div class="thumb"></div>
                        <div class="thumb"></div>
                    </div>
                </div>
                
                <div class="info-panel">
                    <h1 class="product-name">The Essential Chino</h1>
                    <p class="product-sku">SKU: CHN-BLU-42</p>
                    <div class="detail-rating-row">
                        <div class="stars-display" data-rating="4.5">★★★★★</div>
                        <span>(45 Reviews)</span>
                    </div>
                    <span class="detail-price">$89.99</span>
                    
                    <p class="description-text">
                        Our best-selling chino, engineered for comfort and a tailored fit. Perfect for the office or a casual weekend. Made with stretch cotton blend.
                    </p>
                    
                    <div class="options">
                        <h3>Size: </h3>
                        <div class="size-selector">S | M | L | XL</div>
                        <h3>Color: </h3>
                        <div class="color-selector">Blue | Tan | Black</div>
                    </div>
                    
                    <button class="add-to-cart-btn large-btn">Add to Cart</button>
                    <button class="wishlist-btn">Save to Wishlist</button>
                </div>
            </section>
        </main>
    `;
};
