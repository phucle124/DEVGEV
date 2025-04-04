import React from 'react';
import anh1 from "../img/c++.jpg";
import anh2 from "../img/c.jpg";
import anh3 from "../img/html.jpg";
import anh4 from "../img/react-js.png";
import anh5 from "../img/node-js.png";
import anh6 from "../img/javascript.png";
import "./KhoaHoc.css"; 

const KhoaHoc = () => {
  return (
    <>
    <div></div>
      <section className="flex flex-col items-center text-center px-8 py-16">
        <div className="max-w-lg">
          <ul>
            <li>
              <a href="/gioi-thieu" className="hover:text-blue-600">
                Khóa Học Lập Trình C Cơ Bản Đến Nâng Cao
              </a>
            </li>
          </ul>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Thời lượng: 40 - 60 giờ học (tùy tốc độ học)</li>
            <li className="mb-2">Tổng số bài học: ~15 bài + 1 dự án cuối khóa</li>
            <li className="mb-2">Bài tập thực hành: ~30 bài</li>
            <li className="mb-2">Dự án thực tế: 1 dự án lớn (Quản lý sinh viên)</li>
            <li className="mb-2">Hình thức: Online hoặc Offline</li>
          </ul>
        </div>
        <div className="anh mt-6">
          <img src={anh2} alt="C Course Banner" className="w-full max-w-sm" />
        </div>
      </section>

      {/* Khóa học C++ */}
      <section className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="max-w-lg">
          <ul>
            <li>
              <a href="/gioi-thieu" className="hover:text-blue-600">
                Khóa Học Lập Trình C++ Cơ Bản Đến Nâng Cao
              </a>
            </li>
          </ul>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Thời gian học: 50-70 giờ</li>
            <li className="mb-2">Tổng số bài học: ~15 bài + 1 dự án thực tế</li>
            <li className="mb-2">Bài tập thực hành: ~30 bài</li>
            <li className="mb-2">Dự án thực tế: 1 dự án lớn (Quản lý sinh viên)</li>
            <li className="mb-2">Hình thức: Online hoặc Offline</li>
          </ul>
        </div>
        <div className="anh">
          <img src={anh1} alt="C++ Course Banner" className="w-full max-w-sm" />
        </div>
      </section>

      {/* Khóa học HTML */}
      <section className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="max-w-lg">
          <ul>
            <li>
              <a href="/gioi-thieu" className="hover:text-blue-600">
                Khóa Học Lập Trình HTML Cơ Bản Đến Nâng Cao
              </a>
            </li>
          </ul>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Thời gian học: 20-30 giờ</li>
            <li className="mb-2">Tổng số bài học: ~8 bài + 1 dự án cuối khóa</li>
            <li className="mb-2">Bài tập thực hành: ~20 bài</li>
            <li className="mb-2">Dự án thực tế: 1 dự án lớn (Trang web cá nhân)</li>
            <li className="mb-2">Hình thức: Online hoặc Offline</li>
          </ul>
        </div>
        <div className="anh">
          <img src={anh3} alt="HTML Course Banner" className="w-full max-w-sm" />
        </div>
      </section>

      {/* Khóa học ReactJS */}
      <section className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="max-w-lg">
          <ul>
            <li>
              <a href="/gioi-thieu" className="hover:text-blue-600">
                Khóa Học Lập Trình REACT JS Cơ Bản Đến Nâng Cao
              </a>
            </li>
          </ul>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Thời gian học: 50-80 giờ</li>
            <li className="mb-2">Xây dựng UI động với Component & Hooks</li>
            <li className="mb-2">Quản lý State với Redux, Context API</li>
            <li className="mb-2">Dự án thực tế ReactJS: Website thương mại điện tử</li>
            <li className="mb-2">Gọi API với Axios, React Router</li>
          </ul>
        </div>
        <div className="anh">
          <img src={anh4} alt="ReactJS Course Banner" className="w-full max-w-sm" />
        </div>
      </section>

      {/* Khóa học JavaScript */}
      <section className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="max-w-lg">
          <ul>
            <li>
              <a href="/gioi-thieu" className="hover:text-blue-600">
                Khóa Học Lập Trình JavaScript Cơ Bản Đến Nâng Cao
              </a>
            </li>
          </ul>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Thời gian học: 50-80 giờ</li>
            <li className="mb-2">Tổng số bài học: ~15 bài + 2 dự án thực tế</li>
            <li className="mb-2">Bài tập thực hành: ~30 bài</li>
            <li className="mb-2">Dự án thực tế: 2 dự án lớn (To-Do List, Weather App)</li>
            <li className="mb-2">Gọi API với Axios, React Router</li>
          </ul>
        </div>
        <div className="anh">
          <img src={anh6} alt="JavaScript Course Banner" className="w-full max-w-sm" />
        </div>
      </section>

      {/* Khóa học NodeJS */}
      <section className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="max-w-lg">
          <ul>
            <li>
              <a href="/gioi-thieu" className="hover:text-blue-600">
                Khóa Học Lập Trình NodeJs Cơ Bản Đến Nâng Cao
              </a>
            </li>
          </ul>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Yêu cầu đầu vào: Biết JavaScript cơ bản (ES6, Fetch API)</li>
            <li className="mb-2">Thời lượng: 50-80 giờ</li>
            <li className="mb-2">Xây dựng API với Express.js</li>
            <li className="mb-2">Kết nối Database với MongoDB</li>
            <li className="mb-2">Xác thực người dùng với JWT</li>
            <li className="mb-2">Dự án thực tế: API backend cho website bán hàng</li>
          </ul>
        </div>
        <div className="anh">
          <img src={anh5} alt="NodeJS Course Banner" className="w-500px max-w-sm" />
        </div>
      </section>
    </>
  );
};

export default KhoaHoc;
