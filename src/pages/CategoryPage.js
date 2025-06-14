import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products, categoryNames } from '../data/products';
import '../styles/CategoryPage.css';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  
  useEffect(() => {
    // Kategoriye göre ürünleri filtrele
    const filtered = products.filter(product => 
      product.categories.includes(categoryId)
    );
    setCategoryProducts(filtered);
  }, [categoryId]);
  
  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className="category-page">
      <motion.div 
        className="category-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{categoryNames[categoryId] || 'Kategori'}</h1>
        <div className="category-info">
          <span className="product-count">{categoryProducts.length} ürün bulundu</span>
          <div className="category-breadcrumb">
            <Link to="/">Anasayfa</Link> / <span>{categoryNames[categoryId]}</span>
          </div>
        </div>
      </motion.div>
      
      {categoryProducts.length > 0 ? (
        <motion.div 
          className="product-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categoryProducts.map(product => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          className="no-products"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p>Bu kategoride ürün bulunamadı.</p>
          <Link to="/" className="back-button">Anasayfaya Dön</Link>
        </motion.div>
      )}
    </div>
  );
};

export default CategoryPage;
