import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Main1 from "./Main/Main1";
import GioiThieu from "./GioiThieu/gioithieu";
import KhoaHoc from "./KhoaHoc/KhoaHoc";  // Fixed import name
import Blog from "./Blog/Blog";
import ChatWidget from "./ChatWidget/ChatWidget";

// Wrapper component for pages with common Header and Footer
const PageWithLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Các trang Đăng nhập & Đăng ký sẽ không có Header, Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Trang Giới thiệu có Header và Footer */}
        <Route
          path="/gioithieu"
          element={
            <PageWithLayout>
              <GioiThieu />
            </PageWithLayout>
          }
        />

        {/* Trang chính có Header và Footer */}
        <Route
          path="/"
          element={
            <PageWithLayout>
              <Main />
              <Main1 />              
            </PageWithLayout>
          }
        />

        {/* Add route for KhoaHoc if needed */}
        <Route
          path="/chuong-trinh-hoc"
          element={
            <PageWithLayout>
              <KhoaHoc />
            </PageWithLayout>
          }
        />
           <Route
          path="/blog"
          element={
            <PageWithLayout>
              <Blog />
            </PageWithLayout>
          }
        />
      </Routes>
      
      {/* 👇 Widget đặt ở ngoài Routes để luôn hiển thị */}
      <ChatWidget />
    </Router>
  );
}

export default App;
