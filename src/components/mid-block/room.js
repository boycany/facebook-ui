import Avator from "../avator";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import users from "../../data/users";

const Room = () => {
  return (
    <div className="card pr-0 flex">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={"auto"}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <button
            className="
              flex 
              px-4 
              items-center
              h-[40px] 
              rounded-full
              ring-gray-600 
              ring-2 
              mr-4 
              focus:outline-none
              hover:bg-fb-input
              active:bg-fb-active"
          >
            <div className="w-[24px]">
              <img src="https://bruce-fe-fb.web.app/image/video.svg" alt="" />
            </div>
            <p className="ml-2 text-sm text-fb">建立包廂</p>
          </button>
        </SwiperSlide>
        {users.map((user) => {
          return (
            <SwiperSlide key={user.id}>
              <div className="w-[55px]">
                <Avator divSize={40} greenPointSize={10} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Room;
