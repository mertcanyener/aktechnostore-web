import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  
  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{categoryNames[categoryId] || 'Kategori'}</h1>
        <p>{categoryProducts.length} ürün bulundu</p>
      </div>
      
      {categoryProducts.length > 0 ? (
        <div className="product-grid">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-products">
          <p>Bu kategoride ürün bulunamadı.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;