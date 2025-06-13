document.addEventListener('DOMContentLoaded', function() {
    // URL'den kategori parametresini al
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('cat');
    
    if (categoryParam) {
        // Kategori başlığını güncelle
        const categoryTitle = document.getElementById('category-title');
        if (categoryTitle) {
            categoryTitle.textContent =