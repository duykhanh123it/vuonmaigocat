import React from "react";
import { Page } from "../types";

/**
 * Layout.tsx
 * - Navbar + Footer dùng chung
 * - Nút "Gọi Ngay": Mobile -> gọi tel:, Desktop/Laptop -> mở Zalo link
 * - Logo dùng file trong /public (VD: /public/logo.jpg) => src="/logo.jpg"
 */

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const PHONE_NUMBER = '0901234567';
  const ZALO_LINK = `https://zalo.me/${PHONE_NUMBER}`;

  const handleCallClick = () => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMobile = /android|iphone|ipad|ipod|iemobile|blackberry|bada|tizen|mobile/i.test(userAgent);

    if (isMobile) {
      window.location.href = `tel:${PHONE_NUMBER}`;
    } else {
      window.open(ZALO_LINK, '_blank', 'noopener,noreferrer');
    }
  };
  const navItems = [
    { id: 'home', label: 'Trang Chủ' },
    { id: 'products', label: 'Sản Phẩm' },
    { id: 'booking', label: 'Đặt Lịch Hẹn' },
    { id: 'contact', label: 'Liên Hệ' },
  // ✅ Đặt số điện thoại CHUẨN (không khoảng trắng) để dùng cho tel: và zalo.me
  // Ví dụ thật của bạn: 0922727277
  const PHONE_NUMBER = "0922727277";
  const ZALO_LINK = `https://zalo.me/${PHONE_NUMBER}`;

  const navItems: Array<{ id: Page; label: string }> = [
    { id: "home", label: "Trang Chủ" },
    { id: "products", label: "Sản Phẩm" },
    { id: "booking", label: "Đặt Lịch Hẹn" },
    { id: "contact", label: "Liên Hệ" },
  ];

  const handleCallClick = () => {
    // Detect mobile
    const ua = navigator.userAgent || (navigator as any).vendor || (window as any).opera;
    const isMobile = /android|iphone|ipad|ipod|iemobile|blackberry|bada|tizen|mobile/i.test(ua);

    if (isMobile) {
      window.location.href = `tel:${PHONE_NUMBER}`;
      return;
    }

    // Desktop/Laptop: mở Zalo web (hoặc sẽ hiện chọn app nếu máy có cài)
    window.open(ZALO_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
             <img src="/logo.jpg" alt="logo" className="rounded-full w-full h-full object-cover border-2 border-white" />
        <button
          type="button"
          className="flex items-center gap-3 cursor-pointer text-left"
          onClick={() => setCurrentPage("home")}
          aria-label="Về trang chủ"
        >
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold overflow-hidden">
            {/* Logo nằm trong /public/logo.jpg */}
            <img
              src="/logo.jpg"
              alt="logo"
              className="rounded-full w-full h-full object-cover border-2 border-white"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold font-serif text-secondary leading-none">Vườn Mai Gò Cát</h1>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Tinh hoa Mai Tết Miền Nam</p>
          </div>
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.id ? 'text-primary' : 'text-slate-600 hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleCallClick}
            aria-label={`Gọi ngay ${PHONE_NUMBER}`}
            className="bg-primary hover:bg-primary text-secondary font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-all shadow-sm active:scale-95 text-sm"
          {/* ✅ CHỈ DÙNG 1 BUTTON — không lồng <a> để tránh lỗi build/JSX */}
          <button
            type="button"
            onClick={handleCallClick}
            aria-label={`Gọi ngay ${PHONE_NUMBER}`}
            className="bg-primary hover:bg-primary text-secondary font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-all shadow-sm active:scale-95 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Gọi Ngay
          </button>

          {/* (Tuỳ chọn) icon khác nếu bạn đang dùng */}
          {/* <button type="button" aria-label="Giỏ hàng">...</button> */}
          {/* <button type="button" aria-label="Tài khoản">...</button> */}
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.jpg" alt="logo" className="rounded-full w-10 h-10 object-cover" />
            <h2 className="text-xl font-bold font-serif">Vườn Mai Gò Cát</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Hơn 25 năm kinh nghiệm trồng và chăm sóc Mai Tết cao cấp tại miền Nam Việt Nam. Cam kết chất lượng và sự hài lòng tuyệt đối.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-primary">Liên Kết Nhanh</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-primary transition-colors">Giới Thiệu</button></li>
            <li><button onClick={() => setCurrentPage('products')} className="hover:text-primary transition-colors">Sản Phẩm</button></li>
            <li><button onClick={() => setCurrentPage('booking')} className="hover:text-primary transition-colors">Đặt lịch hẹn</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-primary transition-colors">Liên hệ</button></li>
            <li>
              <button onClick={() => setCurrentPage("home")} className="hover:text-primary transition-colors">
                Giới Thiệu
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage("products")} className="hover:text-primary transition-colors">
                Sản Phẩm
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage("booking")} className="hover:text-primary transition-colors">
                Đặt lịch hẹn
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage("contact")} className="hover:text-primary transition-colors">
                Liên hệ
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-primary">Liên Hệ</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              56 Đường 882, P. Long Trường, Thành phố Hồ Chí Minh
            </li>

            <li className="flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0922 727 277
            </li>

            <li className="flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              vuonmaigocat@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-primary">Kết Nối Với Chúng Tôi</h3>
          <div className="flex gap-4 mb-6">
            <button className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all">
              f
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all text-xl">
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"
              aria-label="Facebook"
            >
              f
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all text-xl"
              aria-label="Chat"
            >
              💬
            </button>
          </div>
          <p className="text-xs text-slate-500">Giờ làm việc: 7:00 - 18:00 (Hàng ngày)</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
        <p>© 2024 Vườn Mai Gò Cát. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  );
};
