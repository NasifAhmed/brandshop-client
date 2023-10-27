import Banner from "../components/Banner";
import Brands from "../components/Brands";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const home = () => {
    return (
        <>
            <Banner></Banner>
            <h1 className="text-center font-bold text-6xl mt-10">Our Brands</h1>
            <Brands></Brands>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
                <div>
                    <h1 className="text-5xl font-bold mb-5">Best Offers</h1>
                    <p>We offer regular crazy offers and discounts !</p>
                </div>
                <img
                    src="https://toyotapromodealer.com/wp-content/uploads/2022/10/home-banner-camry-1293x820-1.jpg"
                    alt=""
                    className="h-96"
                />
            </div>
            <div>
                <h1 className="text-center font-bold text-3xl mt-40 mb-5">
                    Reviews from our customers
                </h1>
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
                        <div className="flex justify-center items-center gap-5">
                            <p className="italic font-bold w-60">
                                &quot;I recently purchased a used sedan from
                                this website, and I couldn't be happier. The car
                                drives like a dream, and the price was
                                incredibly reasonable. The whole process was
                                smooth and hassle-free. I highly recommend this
                                site for quality cars. &quot;
                            </p>
                            <span className="text-right">-Happy Customer</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center gap-5">
                            <p className="italic font-bold w-60">
                                &quot;I've bought several cars from this website
                                over the years, and they never disappoint. Their
                                customer service is exceptional, and the variety
                                of cars available is impressive. Whether you're
                                looking for a family car or a sporty ride,
                                you'll find it here.&quot;
                            </p>
                            <span className="text-right">-Happy Customer</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center gap-5">
                            <p className="italic font-bold w-60">
                                &quot;I was a bit skeptical about buying a car
                                online, but this website changed my mind. I
                                found my dream SUV, and the online purchase was
                                seamless. The car arrived in perfect condition,
                                and I've been loving every moment on the road.
                                Trustworthy and reliable!&quot;
                            </p>
                            <span className="text-right">-Happy Customer</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default home;
