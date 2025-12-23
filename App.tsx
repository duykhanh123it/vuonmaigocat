
import React, { useState } from 'react';
import { Page, Product } from './types';
import { products } from './data';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(products[0]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'products':
        return <ProductList setCurrentPage={setCurrentPage} setSelectedProduct={setSelectedProduct} />;
      case 'detail':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            setCurrentPage={setCurrentPage} 
            setSelectedProduct={setSelectedProduct} 
          />
        ) : <ProductList setCurrentPage={setCurrentPage} setSelectedProduct={setSelectedProduct} />;
      case 'booking':
        return <Booking />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={(page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
      }} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setCurrentPage={(page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
      }} />

      {/* Persistent Floating Call-to-Action */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 md:hidden">
         <button className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl animate-bounce">
            💬
         </button>
         <button className="w-14 h-14 bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl">
            📞
         </button>
      </div>
    </div>
  );
};

export default App;
