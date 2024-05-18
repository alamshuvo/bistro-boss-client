import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../../public/assets/home/slide1.jpg";
import img2 from "../../../../public/assets/home/slide2.jpg";
import img3 from "../../../../public/assets/home/slide3.jpg";
import img4 from "../../../../public/assets/home/slide4.jpg";
import img5 from "../../../../public/assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Categories = () => {
  return (
    <div className="mb-24">
        <SectionTitle subHeading={"From 11 to 10 pm"} heading={"Order Online"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        // autoplay={true}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="uppercase text-center -mt-20 text-white font-bold">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="uppercase text-center -mt-20 text-white font-bold">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="uppercase text-center -mt-20 text-white font-bold">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="uppercase text-center -mt-20 text-white font-bold">
            Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="uppercase text-center -mt-20 text-white font-bold">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
