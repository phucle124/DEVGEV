import React, { useState } from "react";
import "./giaodienReg.css";

const Register = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Đăng ký thành công! Hãy đăng nhập.");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          <h2 className="register-title">Đăng ký</h2>
          {message && <div className="register-alert">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label">Tên người dùng</label>
              <input className="input-field" type="text" placeholder="Nhập tên người dùng" required />
            </div>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input className="input-field" type="email" placeholder="Nhập email" required />
            </div>
            <div className="input-group">
              <label className="input-label">Mật khẩu</label>
              <input className="input-field" type="password" placeholder="Nhập mật khẩu" required />
            </div>
            <button className="register-button" type="submit">Đăng ký</button>
          </form>
          <p className="register-text">
            Đã có tài khoản? <a href="/login" className="register-link">Đăng nhập ngay</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
