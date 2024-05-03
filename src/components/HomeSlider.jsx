import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import HomeSliderCard from './HomeSliderCard';

function HomeSlider() {
    return (
        <div className='h-[330px] home_slider'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ height: '100%' , padding: '40px 0px'}}
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    400 : {
                        slidesPerView : 2
                    },
                    800: {
                        slidesPerView: 3,
                    },
                    1024 : {
                        slidesPerView : 5, 
                    }
                }}

            >
                <SwiperSlide>
                    <HomeSliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HomeSliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HomeSliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HomeSliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HomeSliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HomeSliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HomeSliderCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HomeSliderCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HomeSlider;