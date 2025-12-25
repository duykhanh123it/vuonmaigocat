
import React from 'react';
import { Page } from '../types';
import anhMai1 from '../img/anhmai1_tc.png';
import anhMai2 from '../img/anhmai2_tc.png';
import anhMai3 from '../img/anhmai3_tc.png';
import anhMai4 from '../img/anhmai4_tc.png';
import anhBiaHeader from '../img/anhBiaHeader.png';
import anhBiaHeadr from '../img/anhBiaHeader.png';


interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const images = [
    anhMai1,
    anhMai2,
    anhMai3,
    anhMai4,
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <img 
          src={anhBiaHeader}
          alt="hero" 
          className="absolute inset-0 w-full h-full object-cover brightness-50" 
        />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">Vườn Mai Gò Cát</h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-slate-200">
            Tinh Hoa Mai Tết Miền Nam - Hơn 25 Năm Khẳng Định Chất Lượng
          </p>
          <button 
            onClick={() => setCurrentPage('products')}
            className="bg-primary hover:bg-primary text-secondary px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg active:scale-95"
          >
            Khám Phá Bộ Sưu Tập
          </button>
        </div>
      </section>

      {/* Intro Info */}
      <section className="bg-slate-50 pb-20">
        <div className="container mx-auto px-4">
          <div className="relative z-10 -mt-10 md:-mt-14 lg:-mt-20">
            <div className="max-w-4xl mx-auto bg-primary/10 rounded-2xl shadow-xl overflow-hidden md:flex">
               <div className="p-8 md:p-12 text-center flex-1">
                  <h2 className="text-3xl font-bold font-serif text-secondary mb-6 uppercase tracking-wider">Hơn 25 Năm Khẳng Định Chất Lượng</h2>
            <div className="max-w-4xl mx-auto bg-secondary/10 rounded-2xl shadow-xl overflow-hidden md:flex">
               <div className="p-8 md:p-12 text-center flex-1">
                  <h2 className="text-3xl font-bold font-serif text-secondary mb-6 uppercase tracking-wider">Hơn 25 Năm Khẳng Định Chất Lượng</h2>
                    Vườn Mai Gò Cát tự hào là địa chỉ uy tín hàng đầu trong việc cung cấp mai Tết cao cấp tại miền Nam. 
                    Với kinh nghiệm trên 25 năm, chúng tôi mang đến những cây mai đẹp nhất, được chăm sóc tỉ mỉ từ nghệ nhân giàu tâm huyết, 
                    đảm bảo mỗi khách hàng đều có một mùa Tết thật trọn vẹn và ý nghĩa.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 pt-28 md:pt-32 lg:pt-36 pb-20">
        <h2 className="text-3xl font-bold font-serif text-center mb-12">Khám phá Vườn Mai Gò Cát</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
           {images.map((img, i) => (
             <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-md group cursor-pointer">
                <img src={img} alt={`gallery-${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
             </div>
           ))}
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl font-bold font-serif mb-6">Đặt Lịch Tham Quan Vườn</h2>
           <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
             Hãy đến trực tiếp vườn để trải nghiệm không gian mai vàng rực rỡ và được tư vấn tận tình nhất.
           </p>
           <button 
             onClick={() => setCurrentPage('booking')}
             className="bg-white text-secondary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl active:scale-95"
           >
             Đặt Lịch Hẹn Ngay
           </button>
        </div>
      </section>

      {/* Mini Info & Map */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold font-serif mb-8 border-l-4 border-primary pl-4">Thông Tin Liên Hệ</h3>
            <div className="space-y-6">
               <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">📍</div>
                  <div>
                    <p className="font-bold">Địa Chỉ Vườn</p>
                    <p className="text-slate-500 text-sm">56 Đường 882, P. Long Trường, Thành phố Hồ Chí Minh</p>
                  </div>
               </div>
               <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">📞</div>
                  <div>
                    <p className="font-bold">Hotline</p>
                    <p className="text-slate-500 text-sm">0922 727 277: Lê Minh Quý</p>
                    <p className="text-slate-500 text-sm">0908 019 236: Lê Hoàng Minh Phụng</p>
                  </div>
               </div>
               <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">⏰</div>
                  <div>
                    <p className="font-bold">Giờ Làm Việc</p>
                    <p className="text-slate-500 text-sm">Thứ 2 - Chủ Nhật: 7:00 - 18:00</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-80 relative group">
            <img src="https://picsum.photos/id/10/800/400" className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700" alt="map" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20">
               <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">📍</div>
               <p className="font-bold text-xl mb-4">Vườn Mai Gò Cát</p>
               <button className="bg-primary text-secondary px-6 py-2 rounded-lg font-bold text-sm">Mở Google Maps</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
