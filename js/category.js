document.addEventListener('DOMContentLoaded', function() {
    // URL'den kategori parametresini al
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('cat');
    
    if (categoryParam) {
        // Kategori başlığını güncelle
        const categoryTitle = document.getElementById('category-title');
        if (categoryTitle) {
            categoryTitle.textContent = categoryNames[categoryParam] || 'Kategori';
            
            // Başlık animasyonu
            categoryTitle.style.opacity = '0';
            categoryTitle.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                categoryTitle.style.transition = 'opacity 0.5s, transform 0.5s';
                categoryTitle.style.opacity = '1';
                categoryTitle.style.transform = 'translateY(0)';
            }, 100);
        }
        
        // Kategoriye göre ürünleri filtrele
        const categoryProducts = products.filter(product => 
            product.categories.includes(categoryParam)
        );
        
        // Ürün sayısını göster
        const productCountElement = document.createElement('p');
        productCountElement.className = 'product-count';
        productCountElement.textContent = `${categoryProducts.length} ürün bulundu`;
        
        // Breadcrumb ekle
        const breadcrumbElement = document.createElement('div');
        breadcrumbElement.className = 'category-breadcrumb';
        breadcrumbElement.innerHTML = `<a href="index.html">Anasayfa</a> / <span>${categoryNames[categoryParam]}</span>`;
        
        // Kategori bilgisi container'ı
        const categoryInfoElement = document.createElement('div');
        categoryInfoElement.className = 'category-info';
        categoryInfoElement.appendChild(productCountElement);
        categoryInfoElement.appendChild(breadcrumbElement);
        
        // Kategori header'a ekle
        const categoryHeader = document.querySelector('.category-header');
        if (categoryHeader) {
            categoryHeader.appendChild(categoryInfoElement);
        }
        
        // Ürünleri göster
        const categoryProductsContainer = document.getElementById('category-products');
        if (categoryProductsContainer) {
            if (categoryProducts.length > 0) {
                let productsHTML = '';
                
                // Ürünleri sırayla ekle ve animasyon için gecikme ekle
                categoryProducts.forEach((product, index) => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';
                    productCard.innerHTML = createProductCard(product);
                    productCard.style.opacity = '0';
                    productCard.style.transform = 'translateY(20px)';
                    
                    categoryProductsContainer.appendChild(productCard);
                    
                    // Sıralı animasyon için gecikme
                    setTimeout(() => {
                        productCard.style.transition = 'opacity 0.5s, transform 0.5s';
                        productCard.style.opacity = '1';
                        productCard.style.transform = 'translateY(0)';
                    }, 100 + (index * 100));
                });
            } else {
                // Ürün bulunamadı mesajı
                const noProductsElement = document.createElement('div');
                noProductsElement.className = 'no-products';
                noProductsElement.innerHTML = `
                    <p>Bu kategoride ürün bulunamadı.</p>
                    <a href="index.html" class="back-button">Anasayfaya Dön</a>
                `;
                
                categoryProductsContainer.appendChild(noProductsElement);
                
                // Animasyon
                noProductsElement.style.opacity = '0';
                setTimeout(() => {
                    noProductsElement.style.transition = 'opacity 0.5s';
                    noProductsElement.style.opacity = '1';
                }, 300);
            }
        }
    }
});
