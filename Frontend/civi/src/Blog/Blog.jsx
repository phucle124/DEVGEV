import React from 'react';
import './Blog.css';
import blog1 from '../img/blog1.jpg';
import blog2 from '../img/blog2.jpg';
import blog3 from '../img/blog3.jpg';
import blog4 from '../img/blog4.jpg';
import blog5 from '../img/blog5.png';

// Danh sách khóa học đơn giản (hiện ở phần trên)
const introCourses = [
  { title: "Phát triển Web", description: "Học cách xây dựng website từ đầu." },
  { title: "UI/UX Design", description: "Thành thạo nghệ thuật thiết kế giao diện người dùng." },
  { title: "JavaScript Cơ Bản", description: "Hiểu rõ các nguyên lý cơ bản của JavaScript." },
  { title: "React cho người mới bắt đầu", description: "Bắt đầu với việc xây dựng ứng dụng React." }
];

// Danh sách khóa học có ảnh (phần bên dưới)

// Danh sách bài viết
const posts = [
  {
    image: blog1,
    date: "27-01-2025",
    author: "Admin Website",
    title: "Hành trang cần chuẩn bị trước khi “nhảy ngành”"
  },
  {
    image: blog2,
    date: "25-01-2025",
    author: "Admin Website",
    title: "Bạn đã biết cách chạy quảng cáo Facebook Ads chưa?"
  },
  {
    image: blog3,
    date: "25-01-2025",
    author: "Admin Website",
    title: "Có nên đầu tư vào tiền ảo không? Những kênh đầu tư hấp dẫn năm..."
  },
  {
    image: blog4,
    date: "25-01-2025",
    author: "Admin Website",
    title: "Khóa học về Digital Online từ cơ bản đến chuyên nghiệp!"
  },
  {
    image:blog5,
    date: "25-01-2025",
    author: "Admin Website",
    title: "Mua Khóa học Lập trình Front-end mới nhất ở đâu?"
  }
];

const Blog = () => {
  return (
    <div className="courses-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>🔥 Khóa Học Lập Trình Online – Bước Đầu Trở Thành Developer Chuyên Nghiệp!</h1>
          <p>🚀 Bạn Muốn Học Lập Trình Nhưng Không Biết Bắt Đầu Từ Đâu?</p>
          <p>Tham gia các khóa học online để thành thạo kỹ năng lập trình và thiết kế giao diện.</p>
          <button className="cta-button">Bắt đầu học ngay</button>
        </div>
      </section>

      {/* Danh sách Khóa học - Phần 1 */}
      <section className="courses">
        <h2>Khóa học :</h2>
        <div className="course-list">
          {introCourses.map((course, index) => (
            <div className="course-card" key={index}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="cta-button">Tìm hiểu thêm</button>
            </div>
          ))}
        </div>
      </section>

 

      {/* Bài viết nổi bật */}
      <section className="blog-section">
        <div className="blog-grid">
          {posts.map((post, index) => (
            <div className="blog-card" key={index}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-info">
                <div className="blog-meta">
                  <span>📅 {post.date}</span>
                  <span>👤 {post.author}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                {/* <a href="#" className="blog-link">Xem thêm →</a> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
