// Ürün veritabanı
const products = [
    {
        id: 1,
        name: "iPhone 13 Pro Max",
        description: "Apple iPhone 13 Pro, 128GB, Grafit rengi, A15 Bionic çip, Pro kamera sistemi",
        image: "img/Ipone13promax.jpg",
        category: "smartphone",
        categories: ["smartphone", "apple"],
        inStock: true
    },
    {
        id: 2,
        name: "İpad Pro",
        description: "İpad Pro 13 inç, 128GB, Phantom Black, 8GB RAM, 120Hz ekran yenileme hızı",
        image: "img/İpadPro.jpg",
        category: "tablet",
        categories: ["tablet", "Akıllı Tablet"],
        inStock: true
    },
    {
        id: 3,
        name: "iPhone 16 Pro Max",
        description: "Apple iPhone 16 Pro Max, M1 çip, 256GB, Space Gray, Liquid Retina XDR ekran",
        image: "img/Iphone16promax.jpg",
        category: "smartphone",
        categories: ["smartphone", "apple"],
        inStock: true
    },
    {
        id: 4,
        name: "Dualsense 5",
        description: "Sony Dualsense 5, Playstation 5 gamepad, Siyah",
        image: "img/DualSense5.jpg",
        category: "Playstation",
        categories: ["Playstation"],
        inStock: true
    },
    {
        id: 5,
        name: "MacBook Pro 14",
        description: "Apple MacBook Pro 14 inç, M1 Pro çip, 16GB RAM, 512GB SSD, Space Gray",
        image: "img/macbookprom4chip14inch.jpg",
        category: "laptop",
        categories: ["laptop", "apple"],
        inStock: true
    },
    {
        id: 6,
        name: "PlayStation 5 Pro",
        description: "Sony PlayStation 5, 825GB SSD, 4K HDR, 120fps, DualSense kablosuz kontrol cihazı",
        image: "img/PlayStation5Pro.jpg",
        category: "playstation",
        categories: ["playstation"],
        inStock: false
    },
    {
        id: 7,
        name: "AirPods 4 ANC",
        description: "Apple AirPods 4 ANC, Aktif gürültü önleme, Şeffaf mod, MagSafe şarj kutusu",
        image: "img/Airpods4.jpg",
        category: "accessories",
        categories: ["accessories", "apple"],
        inStock: true
    },
    {
        id: 8,
        name: "Mi 4C Router",
        description: "Xiaomi 4C Rotuer, Dual-Band, 2402Mbps 5GHz + 574Mbps 2.4GHz",
        image: "img/MiRouter4C.jpg",
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