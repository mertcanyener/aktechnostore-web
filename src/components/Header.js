import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingBag } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <FaShoppingBag className="logo-icon" />
          <h1>TechnoStore</h1>
        </Link>
        
        <nav className="desktop-nav">
          <ul>
            <li><Link to="/">Anasayfa</Link></li>
            <li className="dropdown">
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
            </li>
            <li><Link to="/about">Hakkımızda</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
          </ul>
        </nav>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="mobile-nav">
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
        </div>
      )}
    </header>
  );
};

export default Header;