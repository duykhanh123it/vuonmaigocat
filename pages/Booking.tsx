
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    note: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-primary via-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
           <h1 className="text-5xl font-bold font-serif mb-4">Đặt Lịch Tham Quan</h1>
           <p className="text-xl opacity-90 max-w-2xl mx-auto">Hãy đến trực tiếp vườn để trải nghiệm và chọn lựa cây mai ưng ý</p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Info Column */}
           <div className="space-y-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://picsum.photos/id/10/800/600" alt="garden" className="w-full h-full object-cover aspect-[4/3]" />
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm space-y-8">
                 <h3 className="text-2xl font-bold font-serif text-slate-900 border-l-4 border-primary pl-4">Thông Tin Vườn</h3>
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <div className="text-primary font-bold">📍</div>
                       <div>
                          <p className="font-bold">Địa Chỉ</p>
                          <p className="text-slate-500 text-sm">56 Đường 882, P. Long Trường, Thành phố Hồ Chí Minh</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="text-primary font-bold">⏰</div>
                       <div>
                          <p className="font-bold">Giờ Làm Việc</p>
                          <p className="text-slate-500 text-sm">Hàng ngày: 7:00 - 18:00</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl">
                 <p className="font-bold text-primary flex items-center gap-2 mb-4">💡 Gợi Ý Cho Bạn</p>
                 <ul className="text-secondary/80 text-sm space-y-3 leading-relaxed">
                    <li>• Nên đến vườn vào buổi sáng để chọn mai trong điều kiện ánh sáng tốt nhất.</li>
                    <li>• Mang theo ảnh không gian đặt mai để được tư vấn kích thước phù hợp.</li>
                    <li>• Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn tại vườn.</li>
                 </ul>
              </div>
           </div>

           {/* Form Column */}
           <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl h-fit sticky top-24">
              <h3 className="text-2xl font-bold font-serif text-slate-900 mb-10">Thông Tin Đặt Lịch</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Họ và Tên <span className="text-primary">*</span></label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary bg-slate-50"
                          placeholder="Nguyễn Văn A"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Số Điện Thoại <span className="text-primary">*</span></label>
                        <input 
                          type="tel" 
                          required
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary bg-slate-50"
                          placeholder="090 123 4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary bg-slate-50"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Ngày Tham Quan <span className="text-primary">*</span></label>
                          <input type="date" required className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary bg-slate-50" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Giờ Hẹn <span className="text-primary">*</span></label>
                          <input type="time" required className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary bg-slate-50" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Ghi Chú</label>
                        <textarea 
                          rows={3} 
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary bg-slate-50 resize-none"
                          placeholder="Nhu cầu cụ thể của bạn..."
                        />
                      </div>
                   </div>

                   <button 
                     type="submit"
                     className="w-full bg-secondary hover:bg-secondary text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-[0.98] mt-4"
                   >
                     Xác Nhận Đặt Lịch Hẹn
                   </button>
                   <p className="text-[10px] text-slate-400 text-center mt-4">
                     Bằng việc đặt lịch, bạn đồng ý với các điều khoản dịch vụ của chúng tôi.
                   </p>
                </form>
              ) : (
                <div className="text-center py-20 space-y-6 animate-in fade-in zoom-in duration-500">
                   <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-5xl mx-auto mb-8 border-4 border-secondary/20">
                      ✓
                   </div>
                   <h4 className="text-2xl font-bold text-slate-900">Đặt Lịch Thành Công!</h4>
                   <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">
                     Chúng tôi đã nhận được yêu cầu của bạn. Đội ngũ sẽ liên hệ xác nhận trong thời gian sớm nhất.
                   </p>
                   <button 
                     onClick={() => setIsSubmitted(false)}
                     className="text-primary font-bold hover:underline"
                   >
                     Đặt một lịch hẹn khác
                   </button>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
