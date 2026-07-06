
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { reviews } from '../../utils/reviews';
import { FcRating } from 'react-icons/fc';
const Testimonials = () => {
    return (
        <section className="section-container px-15 ">
             <div className="text-center ">
                <h1 className="uppercase font-semibold text-amber-300 mt-6">Testimonials</h1>
                <h2 className="capitalize font-bold text-3xl pb-10">what your clients Say</h2>
             </div>
             <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            reviews.map((review,index)=>(
              <SwiperSlide key={index} className="bg-no-repeat bg-cover rounded-lg "style={{backgroundImage:`url(${review.coverImg})`}}>
                <div className=" md:h-130 flex items-center justify-center mb-4">
                    <div className='mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative'>
                        <img src={review.image} alt="" className="size-20 absolute -top-7 left-1/2 -translate-x-1/2" />
                        <div className="mt-12 text-center">
                        <h3 className="text-lg font-semibold">{review.name}</h3>
                        <p className="mb-3">verified customer</p>
                        <p className="text-gray-500 mb-4">{review.review}</p>
                        <div className=" flex items-center justify-center">
                          <FcRating rating={review.rating}/>
                        </div>

                    </div>
                    </div>
                    
                </div>
              </SwiperSlide>
            ))
        }
        
      </Swiper>
        </section>
    );
};

export default Testimonials;
