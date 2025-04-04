import React from "react";
import icon from "../img/icon1.jpg";
import devgen from "../img/DevGen.png";
import { FaHome } from "react-icons/fa";
import "./Header.css"; 


const Header = () => {
  return (
    <header className="header">
  {/* Logo và Banner */}
  <div className="header-left">
    <img src={icon} alt="Exam Banner" className="w-12 h-12" />
    <img src={devgen} alt="Banner" className="w-[80px] h-[50px]" />
  </div>

  {/* Menu chính */}
  <nav className="header-nav">
    <ul>
      <li>
        <a href="/" className="flex items-center">
          <FaHome className="mr-2 text-lg" /> TRANG CHỦ
        </a>
      </li>
      <li><a href="/gioithieu">GIỚI THIỆU</a></li>
      <li><a href="/chuong-trinh-hoc">CHƯƠNG TRÌNH HỌC ▼</a></li>
      <li><a href="/blog">BLOG</a></li>
      <li><a href="./Register">KÍCH HOẠT TÀI KHOẢN</a></li>
    </ul>
  </nav>

  {/* Nút đăng nhập */}
  <a href="./Login">
    <button className="login-button">ĐĂNG NHẬP</button>
  </a>
</header>

    
    
  );
};

export default Header;
