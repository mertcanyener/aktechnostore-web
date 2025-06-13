// Ürün veritabanı
export const products = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    description: "Apple iPhone 13 Pro, 128GB, Grafit rengi, A15 Bionic çip, Pro kamera sistemi ile olağanüstü fotoğraflar çekin. Super Retina XDR ekran ve uzun pil ömrü ile premium bir deneyim sunuyor.",
    image: "/images/products/iphone13pro.jpg",
    category: "smartphone",
    categories: ["smartphone", "apple"],
    inStock: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    description: "Samsung Galaxy S22, 128GB, Phantom Black, 8GB RAM, 120Hz ekran yenileme hızı ile akıcı bir deneyim. Güçlü kamera sistemi ve şık tasarımıyla dikkat çekiyor.",
    image: "/images/products/samsungs22.jpg",
    category: "smartphone",
    categories: ["smartphone", "android"],
    inStock: true
  },
  {
    id: 3,
    name: "iPad Pro 12.9",
    description: "Apple iPad Pro 12.9 inç, M1 çip, 256GB, Space Gray, Liquid Retina XDR ekran ile profesyonel iş ve yaratıcılık için mükemmel bir tablet. ProMotion teknolojisi ve güçlü performansıyla öne çıkıyor.",
    image: "/images/products/ipadpro.jpg",
    category: "tablet",
    categories: ["tablet", "apple"],
    inStock: false
  },
  {
    id: 4,
    name: "JBL Flip 5",
    description: "JBL Flip 5 Bluetooth Hoparlör, Su geçirmez, 12 saat çalma süresi, Siyah. Güçlü bas ve net ses kalitesi ile her ortamda müziğin keyfini çıkarın.",
    image: "/images/products/jblflip5.jpg",
    category: "speaker",
    categories: ["speaker"],
    inStock: true
  },
  {
    id: 5,
    name: "MacBook Pro 14",
    description: "Apple MacBook Pro 14 inç, M1 Pro çip, 16GB RAM, 512GB SSD, Space Gray. Profesyonel kullanıcılar için tasarlanmış güçlü bir dizüstü bilgisayar. Olağanüstü ekran kalitesi ve performans sunuyor.",
    image: "/images/products/macbookpro.jpg",
    category: "laptop",
    categories: ["laptop", "apple"],
    inStock: true
  },
  {
    id: 6,
    name: "PlayStation 5",
    description: "Sony PlayStation 5, 825GB SSD, 4K HDR, 120fps, DualSense kablosuz kontrol cihazı ile yeni nesil oyun deneyimi. Hızlı yükleme süreleri ve gerçekçi grafikleriyle oyun dünyasında devrim yaratıyor.",
    image: "/images/products/ps5.jpg",
    category: "playstation",
    categories: ["playstation"],
    inStock: false
  },
  {
    id: 7,
    name: "AirPods Pro",
    description: "Apple AirPods Pro, Aktif gürültü önleme, Şeffaf mod, MagSafe şarj kutusu ile premium bir kulaklık deneyimi. Uzun pil ömrü ve konforlu tasarımıyla günlük kullanım için ideal.",
    image: "/images/products/airpodspro.jpg",
    category: "accessories",
    categories: ["accessories", "apple"],
    inStock: true
  },
  {
    id: 8,
    name: "TP-Link Archer AX50",
    description: "TP-Link Archer AX50 Wi-Fi 6 Router, Dual-Band, 2402Mbps 5GHz + 574Mbps 2.4GHz hızlarıyla güçlü internet bağlantısı. Geniş kapsama alanı ve güvenlik özellikleriyle öne çıkıyor.",
    image: "/images/products/tplinkrouter.jpg",
    category: "router",
    categories: ["router"],
    inStock: true
  }
];

// Kategori isimleri
export const categoryNames = {
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