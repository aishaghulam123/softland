import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function Gallery() {
  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title animate">
        <h2>Gallery</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container-fluid animate">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          centeredSlides={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            992: { slidesPerView: 5, spaceBetween: 30 },
            1200: { slidesPerView: 7, spaceBetween: 30 },
          }}
        >
          {images.map((n) => (
            <SwiperSlide key={n}>
              <img src={'/img/app-gallery/app-gallery-' + n + '.png'} className="img-fluid" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Gallery
