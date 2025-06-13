import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, categoryNames } from '../data/products';
import ProductCard from '../components/ProductCard';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    // Ürünü ID'ye göre bul
    const foundProduct = products.find(p => p.id === parseInt(productId));
    setProduct(foundProduct);
    
    // İlgili ürünleri bul (aynı kategoriden)
    if (foundProduct) {
      const related = products
        .filter(p => p.id !== foundProduct.id && p.categories.some(cat => foundProduct.categories.includes(cat)))
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [productId]);
  
  if (!product) {
    return <div className="loading">Ürün yükleniyor...</div>;
  }
  
  return (
    <div className="product-page">
      <div className="breadcrumb">
        <Link to="/">Anasayfa</Link> / 
        <Link to={`/category/${product.category}`}>{categoryNames[product.category]}</Link> / 
        <span>{product.name}</span>
      </div>
      
      <div className="product-detail">
        <motion.div 
          className="product-detail-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={product.image} alt={product.name} />
        </motion.div>
        
        <motion.div 
          className="product-detail-info"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{product.name}</h1>
          <div className={`stock-info ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
            {product.inStock ? 'Stokta var' : 'Stokta yok'}
          </div>
          <p className="description">{product.description}</p>
          
          <div className="categories">
            {product.categories.map(cat => (
              <Link key={cat} to={`/category/${cat}`} className="category-tag">
                {categoryNames[cat]}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      
      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h2>Benzer Ürünler</h2>
          <div className="product-grid">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;