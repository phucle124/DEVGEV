import React from "react";
import images1 from "../img/image.png";
import images2 from "../img/image2.png";
import ico_start from "../img/ico_start.png";
import ico_clock from "../img/ico_clock.png";
import ico_update from "../img/ico_update.png";
import "./gioithieu.css";

const Main = () => {
  return (
    <>
      {/* MAIN CONTENT */}
      <main>
        <section className="container flex justify-center items-center gap-10 py-10">
          <img className="w-1/4 max-w-[150px]" src={images1} alt="Hình ảnh 1" />

          <div className="text-center max-w-lg">
            <h2 className="text-[#382A9C] text-xl font-bold">
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

            <h2 className="text-[#382A9C] text-xl font-bold mt-6">Tại sao nên chọn DevGen?</h2>
            <ul className="mt-3 text-left">
              <li><span className="font-bold">Học tập mọi lúc mọi nơi:</span> Chỉ cần có internet, bạn có thể học bất cứ lúc nào, bất cứ nơi đâu.</li>
              <li className="mt-2"><span className="font-bold">Học phí hợp lý, nhiều ưu đãi:</span> Mức học phí tốt nhất, đi kèm nhiều chương trình ưu đãi.</li>
              <li className="mt-2"><span className="font-bold">Phương pháp hiện đại, hiệu quả:</span> Học tập trực tuyến với video sinh động, bài tập thực hành và kiểm tra năng lực.</li>
              <li className="mt-2"><span className="font-bold">Hỗ trợ tận tình 24/7:</span> Đội ngũ hỗ trợ viên sẵn sàng giúp đỡ bạn bất cứ lúc nào.</li>
            </ul>
          </div>

          <img className="w-1/4 max-w-[150px]" src={images2} alt="Hình ảnh 2" />
        </section>
      </main>

      {/* FOOTER */}
      <div className="bg-red p-6 mt-10">
        <section className="container flex justify-between text-center">
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
