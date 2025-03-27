import React from "react";
import anh2 from "./img/dauhoi.jpg"; // Import ảnh từ src
import icon from "./img/icon1.jpg";
import { 
  FaHome, FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaInstagram, FaFacebook, FaYoutube 
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="dev">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <img src={icon} alt="Exam Banner" className="w-12 h-12" />
        <h1 className="text-xl font-bold">DEVGEN</h1>
        <nav>
          <ul className="flex space-x-6 font-medium">
            <li>
              <a href="/" className="flex items-center hover:text-blue-600">
                <FaHome className="mr-2 text-lg" /> TRANG CHỦ
              </a>
            </li>
            <li><a href="/gioithieu" className="hover:text-blue-600">GIỚI THIỆU</a></li>
            <li><a href="/chuong-trinh-hoc" className="hover:text-blue-600">CHƯƠNG TRÌNH HỌC ▼</a></li>
            <li><a href="/blog" className="hover:text-blue-600">BLOG</a></li>
            <li><a href="./Register" className="hover:text-blue-600">KÍCH HOẠT TÀI KHOẢN</a></li>
          </ul>
        </nav>
        <a href="./Login">

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Đăng nhập</button>
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-blue-700">LUYỆN ĐỀ ONLINE </h1>
          <h2 className="text-4xl font-bold text-blue-700">KHÔNG GIỚI HẠN</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Khoá học phong phú: Java, C++, HTML, CSS</li>
            <li className="mb-2">Giao diện giống thi thật, thân thiện với người dùng.</li>
            <li className="mb-2">Tự chọn đăng ký lịch học và quản lý thời gian học tập phù hợp</li>
            <li className="mb-2">Đa dạng công cụ: highlight, ghi chú, từ điển...</li>
            <li className="mb-2">Report điểm tự động + đánh giá chi tiết bài làm</li>
          </ul>
        </div>
        <div className="anh">
          <img src={anh2} alt="Exam Banner" className="aa" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 py-6 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Thông tin liên hệ */}
          <div>
            <h3 className="font-bold text-lg mb-2">Thông tin liên hệ:</h3>
            <p className="flex items-center"><FaPhone className="mr-2" /> 02814567890</p>
            <p className="flex items-center"><FaEnvelope className="mr-2" /> devgen@gmail.com</p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 180 Cao Lỗ, Phường 5, Quận 8, Tp. Hồ Chí Minh</p>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h3 className="font-bold text-lg mb-2">Hỗ trợ:</h3>
            <p className="flex items-center"><FaInstagram className="mr-2" /> <a href="https://instagram.com/dev_gen" className="hover:text-blue-600">Dev_gen</a></p>
            <p className="flex items-center"><FaFacebook className="mr-2" /> <a href="https://facebook.com/DevGenFB" className="hover:text-blue-600">DevGenFB</a></p>
            <p className="flex items-center"><FaYoutube className="mr-2" /> <a href="https://youtube.com/DevGenYTB"  className="hover:text-blue-600">DevGenYTB</a></p>
          </div>

          {/* Danh mục */}
          <div>
            <h3 className="font-bold text-lg mb-2">Danh mục:</h3>
            <p><a href="/ngon-ngu-lap-trinh" className="hover:text-blue-600">➤ Ngôn ngữ lập trình</a></p>
            <p><a href="/bai-thi-thu" className="hover:text-blue-600">➤ Bài thi thử</a></p>
            <p><a href="/thanh-toan" className="hover:text-blue-600">➤ Thanh toán</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
