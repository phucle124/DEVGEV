import React from 'react';
import './Blog.css';

const courses = [
  { title: "Phát triển Web", description: "Học cách xây dựng website từ đầu." },
  { title: "UI/UX Design", description: "Thành thạo nghệ thuật thiết kế giao diện người dùng." },
  { title: "JavaScript Cơ Bản", description: "Hiểu rõ các nguyên lý cơ bản của JavaScript." },
  { title: "React cho người mới bắt đầu", description: "Bắt đầu với việc xây dựng ứng dụng React." }
];

const Blog = () => {
  return (
    <div className="courses-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>🔥 Khóa Học Lập Trình Online – Bước Đầu Trở Thành Developer Chuyên
          Nghiệp!</h1>
          <p>🚀 Bạn Muốn Học Lập Trình Nhưng Không Biết Bắt Đầu Từ Đâu?</p>
          <p>Tham gia các khóa học online để thành thạo kỹ năng lập trình và thiết kế giao diện.</p>
          <button className="cta-button">Bắt đầu học ngay</button>
        </div>
      </section>

      {/* Danh sách Khóa Học */}
      <section className="courses">
        <h2>Khóa học phổ biến</h2>
        <div className="course-list">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="cta-button">Tìm hiểu thêm</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;