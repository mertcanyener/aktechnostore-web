import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="product-card"
      whileHover={{ 
        y: -10,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className={`stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
            {product.inStock ? 'Stokta var' : 'Stokta yok'}
          </div>
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="product-category">{product.category}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;