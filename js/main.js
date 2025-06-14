document.addEventListener('DOMContentLoaded', function() {
    // Mobil menü toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Sidebar animasyonu
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.opacity = '0';
        sidebar.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            sidebar.style.transition = 'opacity 0.5s, transform 0.5s';
            sidebar.style.opacity = '1';
            sidebar.style.transform = 'translateX(0)';
        }, 300);
    }
    
    // Öne çıkan ürünler başlık animasyonu
    const featuredTitle = document.querySelector('.one-cikan-urunler');
    if (featuredTitle) {
        featuredTitle.style.opacity = '0';
        featuredTitle.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            featuredTitle.style.transition = 'opacity 0.5s, transform 0.5s';
            featuredTitle.style.opacity = '1';
            featuredTitle.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Öne çıkan ürünleri göster
    const productGrid = document.querySelector('.product-grid');
    if (productGrid && (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '')) {
        // Rastgele 4 ürün seç
        const featuredProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
        
        // Ürünleri ekle
        featuredProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = createProductCardWithFavorite(product);
            productCard.style.opacity = '0';
            productCard.style.transform = 'translateY(20px)';
            
            productGrid.appendChild(productCard);
            
            // Sıralı animasyon için gecikme
            setTimeout(() => {
                productCard.style.transition = 'opacity 0.5s, transform 0.5s';
                productCard.style.opacity = '1';
                productCard.style.transform = 'translateY(0)';
            }, 600 + (index * 100));
        });
    }
    
    // Favorilere ekleme işlevi
    setupFavorites();
    
    // Arama işlevi
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
    
    // Ürün resmi büyütme işlevi
    setupProductImageModal();
});

// Favori butonu içeren ürün kartı HTML'i oluşturan fonksiyon
function createProductCardWithFavorite(product) {
    return `
        <div class="product-image" data-img="${product.image}">
            <img src="${product.image}" alt="${product.name}">
            <p class="stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                ${product.inStock ? 'Stokta var' : 'Stokta yok'}
            </p>
        </div>
        <div class="product-info">
            <a href="product.html?id=${product.id}">
                <h3>${product.name}</h3>
            </a>
            <p class="product-description">${product.description.substring(0, 60)}...</p>
        </div>
        <button class="favorite-btn" data-id="${product.id}">
            <i class="far fa-heart"></i>
        </button>
    `;
}

// Favorilere ekleme işlevi
function setupFavorites() {
    // LocalStorage'dan favorileri al
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Tüm favori butonlarını seç
    const favButtons = document.querySelectorAll('.favorite-btn');
    
    favButtons.forEach(btn => {
        const productId = btn.getAttribute('data-id');
        
        // Eğer ürün favorilerdeyse, butonu aktif yap
        if (favorites.includes(parseInt(productId))) {
            btn.classList.add('active');
            btn.querySelector('i').classList.remove('far');
            btn.querySelector('i').classList.add('fas');
        }
        
        // Buton tıklama olayı
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const id = parseInt(productId);
            
            if (favorites.includes(id)) {
                // Favorilerden çıkar
                favorites = favorites.filter(favId => favId !== id);
                btn.classList.remove('active');
                btn.querySelector('i').classList.remove('fas');
                btn.querySelector('i').classList.add('far');
            } else {
                // Favorilere ekle
                favorites.push(id);
                btn.classList.add('active');
                btn.querySelector('i').classList.remove('far');
                btn.querySelector('i').classList.add('fas');
                
                // Animasyon
                btn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 300);
            }
            
            // LocalStorage'ye güncellenmiş favorileri kaydet
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
}

// Arama işlevi
function performSearch(query) {
    if (!query.trim()) return;
    
    query = query.toLowerCase();
    
    // Arama sonuçlarını göstereceğimiz container
    const content = document.querySelector('.content');
    
    // Önceki arama sonuçlarını temizle
    const oldResults = document.querySelector('.search-results');
    if (oldResults) {
        oldResults.remove();
    }
    
    // Arama sonuçlarını filtrele
    const results = products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        (product.categories && product.categories.some(cat => cat.toLowerCase().includes(query)))
    );
    
    // Arama sonuçları container'ı oluştur
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    
    // Başlık ekle
    const resultsTitle = document.createElement('h2');
    resultsTitle.textContent = `"${query}" için arama sonuçları (${results.length})`;
    searchResults.appendChild(resultsTitle);
    
    if (results.length > 0) {
        // Sonuçları grid içinde göster
        const resultsGrid = document.createElement('div');
        resultsGrid.className = 'product-grid';
        
        results.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = createProductCardWithFavorite(product);
            productCard.style.opacity = '0';
            productCard.style.transform = 'translateY(20px)';
            
            resultsGrid.appendChild(productCard);
            
            // Sıralı animasyon için gecikme
            setTimeout(() => {
                productCard.style.transition = 'opacity 0.5s, transform 0.5s';
                productCard.style.opacity = '1';
                productCard.style.transform = 'translateY(0)';
            }, 100 + (index * 100));
        });
        
        searchResults.appendChild(resultsGrid);
    } else {
        // Sonuç bulunamadı mesajı
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <p>Aramanızla eşleşen ürün bulunamadı.</p>
            <p>Farklı anahtar kelimelerle tekrar deneyin veya kategorilere göz atın.</p>
        `;
        searchResults.appendChild(noResults);
    }
    
    // Arama sonuçlarını sayfaya ekle (önemli ürünlerden önce)
    const featuredProducts = document.querySelector('.featured-products');
    if (featuredProducts) {
        content.insertBefore(searchResults, featuredProducts);
    } else {
        content.appendChild(searchResults);
    }
    
    // Favorileri ayarla
    setupFavorites();
    
    // Ürün resmi büyütme işlevi
    setupProductImageModal();
}

// Ürün resmi büyütme işlevi
function setupProductImageModal() {
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');
    
    if (!modal || !modalImg || !closeModal) return;
    
    // Tüm ürün resimlerini seç
    const productImages = document.querySelectorAll('.product-image');
    
    productImages.forEach(imgContainer => {
        imgContainer.addEventListener('click', function(e) {
            // Eğer tıklanan favori butonu değilse
            if (!e.target.closest('.favorite-btn')) {
                e.preventDefault();
                
                const img = imgContainer.querySelector('img');
                modalImg.src = img.src;
                modal.classList.add('active');
                
                // Animasyon
                modalImg.style.opacity = '0';
                modalImg.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    modalImg.style.transition = 'opacity 0.3s, transform 0.3s';
                    modalImg.style.opacity = '1';
                    modalImg.style.transform = 'scale(1)';
                }, 100);
            }
        });
    });
    
    // Modal kapatma
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    
    // Modal dışına tıklayarak kapatma
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // ESC tuşu ile kapatma
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}
