// import React from "react";
// import "./Auth.css";

// const Login = () => {
//   return (
//     <div className="container">
//       <h2>Đăng nhập</h2>
//       <form>
//         <label>Email</label>
//         <input type="email" placeholder="Nhập email" required />

//         <label>Mật khẩu</label>
//         <input type="password" placeholder="Nhập mật khẩu" required />

//         <button type="submit">Đăng nhập</button>
//       </form>
//       <p>
//         Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
//       </p>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      setMessage(response.data.message);
      setError("");
      // Có thể lưu token vào localStorage nếu cần
      // localStorage.setItem("token", response.data.token);
    } catch (err) {
      setError(err.response?.data?.error || "Có lỗi xảy ra khi đăng nhập");
      setMessage("");
    }
  };

  return (
    <div className="container">
      <h2>Đăng nhập</h2>
      {message && <div className="alert success">{message}</div>}
      {error && <div className="alert error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Nhập email" 
          required 
        />

        <label>Mật khẩu</label>
        <input 
          type="password" 
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Nhập mật khẩu" 
          required 
        />

        <button type="submit">Đăng nhập</button>
      </form>
      <p>
        Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
      </p>
    </div>
  );
};

export default Login;
