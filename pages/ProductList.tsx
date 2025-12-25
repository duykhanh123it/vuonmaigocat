
import React, { useState } from 'react';
import { Product, Page } from '../types';
import { products } from '../data';

interface ProductListProps {
  setCurrentPage: (page: Page) => void;
  setSelectedProduct: (p: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ setCurrentPage, setSelectedProduct }) => {
  const [filterType, setFilterType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(p => {
    const matchesType = filterType === 'All' || p.category === filterType;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Banner */}
      <section className="bg-gradient-to-r from-secondary via-secondary to-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Sản Phẩm Mai Tết</h1>
           <p className="text-lg opacity-90">Khám phá bộ sưu tập mai đa dạng, chất lượng cao</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filter */}
        <aside className="space-y-8">
           <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                 </svg>
                 Bộ Lọc
              </h3>

              <div className="space-y-6">
                <div>
                   <label className="text-sm text-slate-500 block mb-3">Loại Mai</label>
                   <div className="flex flex-col gap-2">
                      {['All', 'Mai Tán', 'Mai Bonsai'].map(type => (
                        <button 
                          key={type}
                          onClick={() => setFilterType(type)}
                          className={`text-left px-4 py-2 rounded-lg text-sm transition-all ${filterType === type ? 'bg-primary text-secondary font-bold' : 'hover:bg-primary/10 text-slate-600'}`}
                        >
                          {type === 'All' ? 'Tất Cả' : type}
                        </button>
                      ))}
                   </div>
                </div>

                <div>
                   <label className="text-sm text-slate-500 block mb-3">Mức Giá</label>
                   <div className="flex flex-col gap-2">
                      <button className="text-left px-4 py-2 rounded-lg text-sm bg-primary text-secondary font-bold">Tất Cả Mức Giá</button>
                      <button className="text-left px-4 py-2 rounded-lg text-sm hover:bg-primary/10 text-slate-600">Dưới 5 triệu</button>
                      <button className="text-left px-4 py-2 rounded-lg text-sm hover:bg-primary/10 text-slate-600">5 - 10 triệu</button>
                      <button className="text-left px-4 py-2 rounded-lg text-sm hover:bg-primary/10 text-slate-600">10 - 20 triệu</button>
                      <button className="text-left px-4 py-2 rounded-lg text-sm hover:bg-primary/10 text-slate-600">Trên 20 triệu</button>
                   </div>
                </div>

                <div>
                   <label className="text-sm text-slate-500 block mb-3">Chiều cao</label>
                   <button className="w-full text-left px-4 py-2 rounded-lg text-sm bg-primary text-secondary font-bold mb-2">Tất Cả Chiều cao</button>
                   <div className="grid grid-cols-2 gap-2 text-xs">
                      <button className="p-2 border rounded hover:border-primary">Dưới 1m</button>
                      <button className="p-2 border rounded hover:border-primary">1m - 2m</button>
                      <button className="p-2 border rounded hover:border-primary">2m - 3m</button>
                      <button className="p-2 border rounded hover:border-primary">3m - 4m</button>
                   </div>
                </div>
              </div>
           </div>
        </aside>

        {/* Product Grid */}
        <main className="md:col-span-3">
           <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full max-w-lg">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm mã/tên sản phẩm..." 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-slate-500 text-sm">{filteredProducts.length} sản phẩm</p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(p => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase text-primary shadow-sm">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-slate-800 mb-2 line-clamp-1">{p.name}</h3>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase">Giá thuê (5 - 10 ngày)</p>
                          <p className="text-lg font-bold text-primary">{p.rentPrice.toLocaleString('vi-VN')}đ</p>
                        </div>
                        <button 
                          onClick={() => { setSelectedProduct(p); setCurrentPage('detail'); }}
                          className="bg-primary hover:bg-primary text-secondary px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-all"
                        >
                          Chi Tiết
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;
