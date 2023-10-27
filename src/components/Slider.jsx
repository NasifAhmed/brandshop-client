// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Slider = () => {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Autoplay, Navigation]}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-full flex justify-center items-center">
                        <img
                            src="https://toyotapromodealer.com/wp-content/uploads/2022/10/home-banner-camry-1293x820-1.jpg"
                            className="max-h-96"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full flex justify-center items-center">
                        <img
                            src="https://www.honda.com.sg/images/cars/2021_All-New_Civic/Launch/All-New-Civic_Model-Page-Banner-v1---1920x888px.jpg"
                            className="max-h-96"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full flex justify-center items-center">
                        <img
                            src="https://oomdo.com/landingPageTool/Content/HCJD/2022/Nissan/Altima/ADHN_22ALTIMA_HERO_LP_1_2022.jpg"
                            className="max-h-96"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
