import React, { useState } from "react";
import "./giaodienlogin.css"; // Đảm bảo file CSS được import đúng

const Login = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Đăng nhập thành công!");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Đăng nhập</h2>
          {message && <div className="login-alert">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input className="input-field" type="email" placeholder="Nhập email" required />
            </div>
            <div className="input-group">
              <label className="input-label">Mật khẩu</label>
              <input className="input-field" type="password" placeholder="Nhập mật khẩu" required />
            </div>
            <button className="login-button" type="submit">Đăng nhập</button>
          </form>
          <p className="register-text">
            Chưa có tài khoản? <a href="/register" className="register-link">Đăng ký ngay</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
