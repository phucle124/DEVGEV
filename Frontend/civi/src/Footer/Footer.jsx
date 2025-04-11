import React from "react";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaInstagram, FaFacebook, FaYoutube 
} from "react-icons/fa";
import "./Footer.css"; 



const Footer = () => {
  return (
    
    <footer className="bg-gray-200 text-gray-700 py-6 px-8">
       <div className="image-container">
  </div>
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
          <p className="flex items-center"><FaYoutube className="mr-2" /> <a href="https://youtube.com/DevGenYTB" className="hover:text-blue-600">DevGenYTB</a></p>
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
  );
};

export default Footer;
