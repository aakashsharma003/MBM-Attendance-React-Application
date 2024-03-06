import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import "./Attendence.css";

const Attendence = () => {
  return (
    <div className="attendence-container">
      <div className="attendence">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="images/img2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/img3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/img4.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/img5.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/img6.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/img7.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/img11.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Attendence;
