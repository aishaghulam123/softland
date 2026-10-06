import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

const testimonials = [
  {
    image: '/img/testimonials/testimonials-1.jpg',
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  },
  {
    image: '/img/testimonials/testimonials-2.jpg',
    name: 'Sara Wilsson',
    role: 'Designer',
    text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
  {
    image: '/img/testimonials/testimonials-3.jpg',
    name: 'Jena Karlis',
    role: 'Store Owner',
    text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
  },
  {
    image: '/img/testimonials/testimonials-4.jpg',
    name: 'Matt Brandon',
    role: 'Freelancer',
    text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
  },
  {
    image: '/img/testimonials/testimonials-5.jpg',
    name: 'John Larson',
    role: 'Entrepreneur',
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title animate">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container animate">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="testimonial-item">
                <img src={item.image} className="testimonial-img" alt="" />
                <h3>{item.name}</h3>
                <h4>{item.role}</h4>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <i className="bi bi-star-fill" key={n}></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{item.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
