import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categoryNames } from '../data/products';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/HomePage.css';

const HomePage = () => {
  // Rastgele 6 ürün seç
  const featuredProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 6);
  
  // Kategorileri grupla
  const categories = Object.keys(categoryNames);
  
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>En Yeni Teknoloji Ürünleri</h1>
          <p>TechnoStore'da en son teknoloji ürünlerini keşfedin</p>
          <Link to="/category/smartphone" className="cta-button">
            Ürünleri Keşfet
          </Link>
        </div>
      </section>
      
      <section className="featured-section">
        <div className="section-header">
          <h2>Öne Çıkan Ürünler</h2>
          <Link to="/category/smartphone" className="view-all">
            Tümünü Gör <FaArrowRight />
          </Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      <section className="categories-section">
        <h2>Kategoriler</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <Link 
              to={`/category/${category}`} 
              className="category-card" 
              key={category}
            >
              <h3>{categoryNames[category]}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;