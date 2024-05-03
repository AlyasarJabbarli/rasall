import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from '../components/SectionTitle';
import HomeSlider from '../components/HomeSlider';
import Categories from '../components/Categories';
import { Link } from 'react-router-dom';

function Construction() {
    return (
        <main>
            <section>
                <div className='h-[250px] md:h-[500px] [&_img]:object-cover [&_img]:w-full [&_img]:h-full construction_main'>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        style={{ height: '100%' }}
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        dots={true}

                    >
                        <SwiperSlide>
                            <Link>
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9bbd4e83160697.5d3420358c8d5.jpg" alt="" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link>
                                <img src="https://www.chicagobooth.edu/-/media/project/chicago-booth/chicago-booth-review/2023/july/chicago-booth-construction.jpg?cx=0.57&cy=0.6&cw=1880&ch=783&hash=09773F3EA628E4B3A0FB87D0B079A0E7" alt="" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link>
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c00d2783160697.5d3420358e747.jpg" alt="" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link>
                                <img src="https://www.chicagobooth.edu/-/media/project/chicago-booth/chicago-booth-review/2023/july/chicago-booth-construction.jpg?cx=0.57&cy=0.6&cw=1880&ch=783&hash=09773F3EA628E4B3A0FB87D0B079A0E7" alt="" />
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <Categories />

            <section>
                <div className='max-w-screen-xl mx-auto [&_img]:object-cover [&_img]:w-full [&_img]:h-full construction2 mt-[43px]'>
                    <SectionTitle title={"Endirim kampaniyaları"} path={"discount"} />
                    <div className='h-[280px]'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            style={{ height: '100%', padding: '40px 50px' }}
                            modules={[Navigation, Autoplay]}
                            navigation
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                768 : {
                                    slidesPerView : 2
                                },
                                1024 : {
                                    slidesPerView : 3, 
                                    spaceBetween : 50
                                },
                            }}
                        >
                            <SwiperSlide>
                                <Link>
                                    <img src="https://www.oracle.com/a/ocom/img/rc24-bsa-construction-scheduling.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link>
                                    <img src="https://www.chicagobooth.edu/-/media/project/chicago-booth/chicago-booth-review/2023/july/chicago-booth-construction.jpg?cx=0.57&cy=0.6&cw=1880&ch=783&hash=09773F3EA628E4B3A0FB87D0B079A0E7" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link>
                                    <img src="https://www.oracle.com/a/ocom/img/rc24-bsa-construction-scheduling.jpg" alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link>
                                    <img src="https://www.chicagobooth.edu/-/media/project/chicago-booth/chicago-booth-review/2023/july/chicago-booth-construction.jpg?cx=0.57&cy=0.6&cw=1880&ch=783&hash=09773F3EA628E4B3A0FB87D0B079A0E7" alt="" />

                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link>
                                    <img src="https://www.chicagobooth.edu/-/media/project/chicago-booth/chicago-booth-review/2023/july/chicago-booth-construction.jpg?cx=0.57&cy=0.6&cw=1880&ch=783&hash=09773F3EA628E4B3A0FB87D0B079A0E7" alt="" />
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </section>
            <section>
                <div className='max-w-screen-xl mx-auto [&_img]:object-cover [&_img]:w-full [&_img]:h-full'>
                    <SectionTitle title={"İnşaat materialları"} path={"construction-materials"} />
                    <HomeSlider />
                </div>
            </section>
            <section>
                <div className='max-w-screen-xl mx-auto [&_img]:object-cover [&_img]:w-full [&_img]:h-full'>
                    <SectionTitle title={"Əmlak"} path={"real-estate"} />
                    <HomeSlider />
                </div>
            </section>
        </main>
    );
}

export default Construction;