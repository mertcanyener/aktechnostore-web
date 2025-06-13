document.addEventListener('DOMContentLoaded', function() {
    // Mobil menü toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Anasayfada öne çıkan ürünleri göster
    const featuredProductsContainer = document.querySelector('.product-grid');
    if (featuredProductsContainer) {
        // Rastgele 4 ürün seç
        const featuredProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
        
        let productsHTML = '';
        featuredProducts.forEach(product => {
            productsHTML += createProductCard(product);
        });
        
        featuredProductsContainer.innerHTML = productsHTML;
    }
});