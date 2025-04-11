import React from "react";
import anh2 from "../img/dauhoi.jpg";
import "./Main.css"; 

const Main = () => {
  return (
    <section className="div-mau hero-section">
      {/* Nội dung bên trái */}
      <div className="hero-content">
        <h1 className="text-4xl font-bold text-orange-600">LUYỆN ĐỀ ONLINE</h1>
        <h2 className="text-4xl font-bold text-orange-600">KHÔNG GIỚI HẠN KHÓA HỌC</h2>
        <ul className="list-disc pl-5 text-gray-700 mt-2">
          <li className="mb-2">Khoá học phong phú: Java, C++, HTML, CSS</li>
          <li className="mb-2">Giao diện giống thi thật, thân thiện với người dùng.</li>
          <li className="mb-2">Tự chọn đăng ký lịch học và quản lý thời gian học tập phù hợp</li>
          <li className="mb-2">Đa dạng công cụ: highlight, ghi chú, từ điển...</li>
          <li className="mb-2">Report điểm tự động + đánh giá chi tiết bài làm</li>
        </ul>
      </div>
      {/* Hình ảnh bên phải */}
        <img src={anh2} alt="Exam Banner" className="aa" />
    </section>
    
   
  );
};

export default Main;
