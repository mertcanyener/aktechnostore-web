// Ürün veritabanı
const products = [
    {
        id: 1,
        name: "iPhone 13 Pro",
        description: "Apple iPhone 13 Pro, 128GB, Grafit rengi, A15 Bionic çip, Pro kamera sistemi",
        image: "images/products/iphone13pro.jpg",
        category: "smartphone",
        categories: ["smartphone", "apple"],
        inStock: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S22",
        description: "Samsung Galaxy S22, 128GB, Phantom Black, 8GB RAM, 120Hz ekran yenileme hızı",
        image: "images/products/samsungs22.jpg",
        category: "smartphone",
        categories: ["smartphone", "android"],
        inStock: true
    },
    {
        id: 3,
        name: "iPad Pro 12.9",
        description: "Apple iPad Pro 12.9 inç, M1 çip, 256GB, Space Gray, Liquid Retina XDR ekran",
        image: "images/products/ipadpro.jpg",
        category: "tablet",
        categories: ["tablet", "apple"],
        inStock: false
    },
    {
        id: 4,
        name: "JBL Flip 5",
        description: "JBL Flip 5 Bluetooth Hoparlör, Su geçirmez, 12 saat çalma süresi, Siyah",
        image: "images/products/jblflip5.jpg",
        category: "speaker",
        categories: ["speaker"],
        inStock: true
    },
    {
        id: 5,
        name: "MacBook Pro 14",
        description: "Apple MacBook Pro 14 inç, M1 Pro çip, 16GB RAM, 512GB SSD, Space Gray",
        image: "images/products/macbookpro.jpg",
        category: "laptop",
        categories: ["laptop", "apple"],
        inStock: true
    },
    {
        id: 6,
        name: "PlayStation 5",
        description: "Sony PlayStation 5, 825GB SSD, 4K HDR, 120fps, DualSense kablosuz kontrol cihazı",
        image: "images/products/ps5.jpg",
        category: "playstation",
        categories: ["playstation"],
        inStock: false
    },
    {
        id: 7,
        name: "AirPods Pro",
        description: "Apple AirPods Pro, Aktif gürültü önleme, Şeffaf mod, MagSafe şarj kutusu",
        image: "images/products/airpodspro.jpg",
        category: "accessories",
        categories: ["accessories", "apple"],
        inStock: true
    },
    {
        id: 8,
        name: "TP-Link Archer AX50",
        description: "TP-Link Archer AX50 Wi-Fi 6 Router, Dual-Band, 2402Mbps 5GHz + 574Mbps 2.4GHz",
        image: "images/products/tplinkrouter.jpg",
        category: "router",
        categories: ["router"],
        inStock: true
    }
];

// Kategori isimleri
const categoryNames = {
    "smartphone": "Akıllı Telefon",
    "accessories": "Telefon Aksesuarları",
    "tablet": "Akıllı Tablet",
    "speaker": "Bluetooth Hoparlör",
    "apple": "Apple Ürünleri",
    "android": "Android Telefonlar",
    "laptop": "Laptoplar",
    "playstation": "Playstation",
    "router": "Router"
};

// Ürün kartı HTML'i oluşturan fonksiyon
function createProductCard(product) {
    return `
        <div class="product-card">
            <a href="product.html?id=${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="stock ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                        ${product.inStock ? 'Stokta var' : 'Stokta yok'}
                    </p>
                </div>
            </a>
        </div>
    `;
}