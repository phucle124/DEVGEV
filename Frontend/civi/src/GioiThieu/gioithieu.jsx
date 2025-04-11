import React from "react";
import images2 from "../img/image2.png";
import ico_start from "../img/ico_start.png";
import ico_clock from "../img/ico_clock.png";
import ico_update from "../img/ico_update.png";
import { ShoppingCart } from "lucide-react";
import "./gioithieu.css";

const Main = () => {
  return (
    <>
      {/* MAIN CONTENT */}
      <main>
        <section className="container">
          <div className="text-content">
            <h2 className="text-[#382A9C] text-xl font-bold text-center">
              DevGen - Nền tảng học tập trực tuyến uy tín, chắp cánh ước mơ thành công
            </h2>
            <p className="mt-3 font-semibold">
              Bạn đang ấp ủ hoài bão chinh phục những đỉnh cao tri thức? Bạn mong muốn trau dồi kỹ năng, nâng cao năng lực để thành công trong sự nghiệp?
            </p>
            <p className="mt-3">
              <span className="font-bold">DevGen</span> chính là chìa khóa mở ra cánh cửa ước mơ của bạn!
            </p>
            <p className="mt-3">
              <span className="font-bold">DevGen</span> - Nền tảng học tập trực tuyến uy tín hàng đầu Việt Nam, cung cấp kho tàng khóa học lập trình chất lượng cao.
            </p>

            <h2 className="text-[#382A9C] text-xl font-bold mt-6 text-center">Tại sao nên chọn DevGen?</h2>
            <ul className="mt-3">
              <li><span className="font-bold">Học tập mọi lúc mọi nơi:</span> Chỉ cần có internet, bạn có thể học bất cứ lúc nào, bất cứ nơi đâu.</li>
              <li className="mt-2"><span className="font-bold">Học phí hợp lý, nhiều ưu đãi:</span> Mức học phí tốt nhất, đi kèm nhiều chương trình ưu đãi.</li>
              <li className="mt-2"><span className="font-bold">Phương pháp hiện đại, hiệu quả:</span> Học tập trực tuyến với video sinh động, bài tập thực hành và kiểm tra năng lực.</li>
              <li className="mt-2"><span className="font-bold">Hỗ trợ tận tình 24/7:</span> Đội ngũ hỗ trợ viên sẵn sàng giúp đỡ bạn bất cứ lúc nào.</li>
            </ul>

            <button className="mt-6 flex items-center justify-center gap-2">
              <ShoppingCart size={20} /> Thêm vào giỏ hàng
            </button>
          </div>
          <img className="w-[300px] max-w-full" src={images2} alt="Hình ảnh 2" />
        </section>
      </main>

      {/* SECTION GIỚI THIỆU */}
      <div className="px-6 max-w-5xl mx-auto leading-relaxed">
        <h3>Sứ mệnh của chúng tôi</h3>
        <p>🌟Khóa Học Giá Rẻ là người bạn đồng hành giúp bạn phát triển bản thân và sự nghiệp với chi phí hợp lý...</p>

        <h3>Vì sao Khóa Học Giá Rẻ luôn là sự lựa chọn đầu tiên?</h3>
        <p>🌟 Thư viện khóa học đa lĩnh vực...</p>

        <h3>Lợi ích của việc sở hữu khóa học video trên Google Drive</h3>
        <h4>Bạn có thể?</h4>
        <h4>🌟Truy cập mọi lúc, mọi nơi giúp bạn tiết kiệm thời gian</h4>
        <p>Khi sở hữu khóa học trên Google Drive...</p>
        <h4>🌟Lưu trữ vĩnh viễn</h4>
        <p>Một trong những ưu điểm lớn nhất...</p>
        <h4>🌟Chia sẻ và thảo luận cùng cộng đồng</h4>
        <p>Google Drive còn cho phép bạn chia sẻ...</p>

        <h3>Vậy ai phù hợp với dịch vụ của Khóa học giá rẻ?</h3>
        <h4>Bạn có thể là?</h4>
        <p>🌟Sinh viên và học sinh: Tăng cường kiến thức chuyên môn...</p>
        <p>🌟Người đi làm: Bổ sung kỹ năng mới...</p>
        <p>🌟Người yêu thích học hỏi: Không ngừng khám phá tri thức...</p>
        <p>🌟Chủ doanh nghiệp: Cập nhật xu hướng kinh doanh...</p>

        <h3>Cách thức mua khóa học tại Khóa Học Giá Rẻ</h3>
        <p>🌟Bước 1: Truy cập website của chúng tôi https://khoahocdevgen.com</p>
        <p>🌟Bước 2: Chọn khóa học phù hợp - Thêm vào giỏ hàng hoặc Mua ngay</p>
        <p>🌟Bước 3: Thanh toán bằng phương thức chuyển khoản</p>
        <p>🌟Bước 4: Nhận khóa học trong phần Khóa học đã mua</p>
      </div>

      {/* FOOTER */}
      <div className="bg-white p-6 mt-10">
        <section className="container flex justify-around text-center">
          <div className="flex flex-col items-center">
            <img src={ico_start} alt="Start Icon" className="w-10 h-10" />
            <p className="font-bold mt-2">Uy tín, chất lượng</p>
            <p className="text-sm">Được kiểm tra trước khi mua.</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={ico_clock} alt="Clock Icon" className="w-10 h-10" />
            <p className="font-bold mt-2">Kích hoạt nhanh</p>
            <p className="text-sm">Tự động kích hoạt nhanh chóng.</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={ico_update} alt="Update Icon" className="w-10 h-10" />
            <p className="font-bold mt-2">Update nhanh chóng</p>
            <p className="text-sm">Update khóa học liên tục trong 2 tuần.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
