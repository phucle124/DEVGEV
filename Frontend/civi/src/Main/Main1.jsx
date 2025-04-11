import React from "react";
import "./Main1.css"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import anh1 from "../img/combo.jpg";
import anh2 from "../img/combo1.png";
import anh3 from "../img/all.jpg";
import anh4 from "../img/sale.jpg";
import anh5 from "../img/laptrinh.jpg";
import anh6 from "../img/dohoa.jpg";
import anh7 from "../img/amnhac.png";


const Main1 = () => {
  return (
    <section className="main1-wrapper">
  <div className="hero-section">
    {/* Slider */}
    <div className="slider-container">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={anh1} alt="slide 1" className="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={anh2} alt="slide 2" className="slider-img" />
        </SwiperSlide>
      </Swiper>
    </div>

    {/* Nội dung mô tả */}
    <div className="hero-content">
      <h2>Chia sẻ khoá học  DEVGEN</h2>
      <p>
        Web <strong>DEVGENDEVGEN</strong> là website hàng đầu về chia sẻ khoá học
        online được học qua Google Drive. Mọi khoá học mua tại đây sẽ được học
        vĩnh viễn, luôn có đội ngũ hỗ trợ 24/7.
      </p>
    </div>

    {/* Danh mục nổi bật */}
    <h2 className="section-title">Danh mục nổi bật</h2>
    <div className="categories-container">
      {[
        { img: anh3, title: "Tất Cả Khoá Học", count: "203 khoá học" },
        { img: anh4, title: "Combo Giá Rẻ", count: "13 khoá học" },
        { img: anh5, title: "Khoá Học Lập Trình", count: "111 khoá học" },
        { img: anh6, title: "Thiết Kế Đồ Hoạ", count: "24 khoá học" },
        { img: anh7, title: "Âm nhạc", count: "16 khoá học" },
      ].map((item, index) => (
        <div className="category-item" key={index}>
          <img src={item.img} alt={item.title} className="category-img" />
          <h3 className="category-title">{item.title}</h3>
          <p className="category-count">{item.count}</p>
        </div>
      ))}
    </div>
    <div>
      <h1  >Sản Phẩm Nổi Bật </h1>
    </div>
    <div className="featured-products">
  {[
    {
      title: "FULL COMBO Khóa Học AI - Trí Tuệ Nhân Tạo",
      price: "299.000₫",
      oldPrice: "50.000.000₫",
      discount: "-99%",
      image: require("../img/sp1.jpg"),
    },
    {
      title: "Combo 9 Khóa Học Lập Trình 28Tech",
      price: "199.000₫",
      oldPrice: "30.000.000₫",
      discount: "-99%",
      image: require("../img/sp2.jpg"),
    },
    {
      title: "Khóa Học Kobe Media – Capcut 13 Ngày",
      price: "49.000₫",
      oldPrice: "999.000₫",
      discount: "-95%",
      image: require("../img/sp3.jpg"),
    },
    {
      title: "Combo 6 Khóa Của Việt Nguyễn AI",
      price: "199.000₫",
      oldPrice: "15.000.000₫",
      discount: "-98%",
      image: require("../img/sp4.png"),
    },
  ].map((product, index) => (
    <div className="product-card" key={index}>
      <img src={product.image} alt={product.title} className="product-img" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">
        <span className="price">{product.price}</span>{" "}
        <span className="old-price">{product.oldPrice}</span>
      </p>
      <p className="discount-badge">{product.discount}</p>
      <button className="buy-btn">Mua ngay</button>
    </div>
  ))}
</div>
<div className="reason-section">
  <h2 className="reason-title">LÝ DO BẠN NÊN MUA KHOÁ HỌC CỦA CHÚNG TÔI</h2>
  <div className="reason-list">
    {[
      {
        icon: "👥",
        title: "Giảng viên uy tín",
        desc: "Bài giảng chất lượng",
      },
      {
        icon: "💰",
        title: "Thanh toán 1 lần",
        desc: "Học mãi mãi",
      },
      {
        icon: "💻",
        title: "Học trên Google Drive",
        desc: "Dễ dàng tiện lợi",
      },
      {
        icon: "🔄",
        title: "Update Liên Tục",
        desc: "Cập Nhật Khóa Học Mỗi Ngày",
      },
    ].map((item, i) => (
      <div className="reason-box" key={i}>
        <div className="reason-icon">{item.icon}</div>
        <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
        <h4 className="reason-heading">{item.title}</h4>
        <p className="reason-desc">{item.desc}</p>
      </div>
    ))}
  </div>
</div>


  </div>
</section>

  );
};

export default Main1;
