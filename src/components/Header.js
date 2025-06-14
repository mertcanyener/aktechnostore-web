import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingBag } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <motion.div 
          className="logo-container"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img 
            src="/images/Logo.jpg" 
            alt="Logo" 
            className="site-logo"
            whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
          />
          <Link to="/" className="logo">
            <FaShoppingBag className="logo-icon" />
            <h1>TechnoStore</h1>
          </Link>
        </motion.div>
        
        <nav className="desktop-nav">
          <ul>
            <motion.li whileHover={{ y: -3 }}>
              <Link to="/">Anasayfa</Link>
            </motion.li>
            <motion.li className="dropdown" whileHover={{ y: -3 }}>
              <span>Kategoriler</span>
              <div className="dropdown-content">
                <Link to="/category/smartphone">Akıllı Telefon</Link>
                <Link to="/category/accessories">Telefon Aksesuarları</Link>
                <Link to="/category/tablet">Akıllı Tablet</Link>
                <Link to="/category/speaker">Bluetooth Hoparlör</Link>
                <Link to="/category/apple">Apple Ürünleri</Link>
                <Link to="/category/android">Android Telefonlar</Link>
                <Link to="/category/laptop">Laptoplar</Link>
                <Link to="/category/playstation">Playstation</Link>
                <Link to="/category/router">Router</Link>
              </div>
            </motion.li>
            <motion.li whileHover={{ y: -3 }}>
              <Link to="/about">Hakkımızda</Link>
            </motion.li>
            <motion.li whileHover={{ y: -3 }}>
              <Link to="/contact">İletişim</Link>
            </motion.li>
          </ul>
        </nav>
        
        <motion.button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>
      
      {isMenuOpen && (
        <motion.div 
          className="mobile-nav"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Anasayfa</Link></li>
            <li><Link to="/category/smartphone" onClick={toggleMenu}>Akıllı Telefon</Link></li>
            <li><Link to="/category/accessories" onClick={toggleMenu}>Telefon Aksesuarları</Link></li>
            <li><Link to="/category/tablet" onClick={toggleMenu}>Akıllı Tablet</Link></li>
            <li><Link to="/category/speaker" onClick={toggleMenu}>Bluetooth Hoparlör</Link></li>
            <li><Link to="/category/apple" onClick={toggleMenu}>Apple Ürünleri</Link></li>
            <li><Link to="/category/android" onClick={toggleMenu}>Android Telefonlar</Link></li>
            <li><Link to="/category/laptop" onClick={toggleMenu}>Laptoplar</Link></li>
            <li><Link to="/category/playstation" onClick={toggleMenu}>Playstation</Link></li>
            <li><Link to="/category/router" onClick={toggleMenu}>Router</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>Hakkımızda</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>İletişim</Link></li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
