
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Banner */}
      <section className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
           <h1 className="text-5xl font-bold font-serif mb-4">Liên Hệ Tư Vấn</h1>
           <p className="text-xl opacity-90">Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn 24/7</p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10">
        {/* Advisor Card */}
        <section className="max-w-4xl mx-auto mb-20">
           <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center space-y-8">
              <h2 className="text-3xl font-bold font-serif text-slate-900 uppercase tracking-widest">Đội Ngũ Tư Vấn Viên</h2>
              <div className="flex flex-col items-center">
                 <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-amber-50 shadow-inner mb-6">
                    <img src="/no-avatar.png" alt="advisor" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                 </div>
                 <h3 className="text-2xl font-bold font-serif text-amber-900">Ông <span className="text-amber-600">Lê Minh Quý</span></h3>
                 <p className="text-slate-500 mb-8 font-medium">Nghệ nhân Mai Vàng hơn 25 năm kinh nghiệm</p>
                 
                 <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
                   <button className="flex-1 bg-amber-400 hover:bg-amber-500 text-amber-950 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98]">
                      <span className="text-xl">📞</span> 092 272 7277
                   </button>
                   <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98]">
                      <span className="text-xl">💬</span> Chat Zalo
                   </button>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
           <div>
              <h3 className="text-2xl font-bold font-serif mb-8 border-l-4 border-amber-500 pl-4">Thông Tin Liên Hệ</h3>
              <div className="space-y-6">
                 <div className="p-6 bg-white rounded-2xl shadow-sm space-y-2">
                    <p className="font-bold flex items-center gap-2 text-amber-600 uppercase text-xs tracking-widest">📍 Địa Chỉ Vườn</p>
                    <p className="text-slate-700 leading-relaxed">56 Đường 882, P. Long Trường, Thành phố Hồ Chí Minh, Việt Nam</p>
                 </div>
                 <div className="p-6 bg-white rounded-2xl shadow-sm space-y-2">
                    <p className="font-bold flex items-center gap-2 text-amber-600 uppercase text-xs tracking-widest">📞 Hotline</p>
                    <div className="space-y-1 text-slate-700">
                       <p>0922 727 277: Lê Minh Quý</p>
                       <p>0908 019 236: Lê Hoàng Minh Phụng</p>
                    </div>
                 </div>
                 <div className="p-6 bg-white rounded-2xl shadow-sm space-y-2">
                    <p className="font-bold flex items-center gap-2 text-amber-600 uppercase text-xs tracking-widest">⏰ Giờ Làm Việc</p>
                    <p className="text-slate-700">Thứ 2 - Chủ Nhật: 7:00 - 18:00</p>
                 </div>
              </div>

              <div className="mt-8 flex gap-4">
                 <button className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center shadow-lg hover:rotate-12 transition-all">f</button>
                 <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:rotate-12 transition-all">💬</button>
                 <button className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg hover:rotate-12 transition-all text-white">📞</button>
              </div>
           </div>

           <div className="space-y-8">
              <h3 className="text-2xl font-bold font-serif mb-8 border-l-4 border-amber-500 pl-4">Bản Đồ Đường Đi</h3>
              <div className="bg-white p-4 rounded-3xl shadow-xl h-[400px] relative group overflow-hidden">
                 <img src="https://picsum.photos/id/10/800/800" className="w-full h-full object-cover brightness-75 rounded-2xl transition-transform duration-1000 group-hover:scale-110" alt="map" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20 p-6 text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">📍</div>
                    <p className="font-bold text-2xl mb-2">Vườn Mai Gò Cát</p>
                    <p className="text-sm opacity-80 mb-6 max-w-xs">Đường Gò Cát, Phú Hữu, Quận 9, TP.HCM</p>
                    <button className="bg-amber-400 text-amber-950 px-8 py-3 rounded-full font-bold shadow-xl transition-all hover:bg-amber-500 active:scale-95">Mở Google Maps</button>
                    <p className="mt-6 text-[10px] opacity-60">(Đây là vị trí mô phỏng - Tích hợp Google Maps thực tế khi triển khai)</p>
                 </div>
              </div>
           </div>
        </div>

        {/* CTA Footer */}
        <section className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 p-12 md:p-20 rounded-[40px] text-white text-center shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
           <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Cần Tư Vấn Ngay?</h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-light">Liên hệ hotline hoặc đặt lịch hẹn để được phục vụ tốt nhất cho mùa Tết này</p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 transition-all hover:bg-slate-50 active:scale-95">
                   <span className="text-2xl">📞</span> Gọi Ngay: 0922 727 277
                </button>
                <button className="bg-red-800/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all hover:bg-red-800/40 active:scale-95">
                   Đặt Lịch Hẹn
                </button>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
