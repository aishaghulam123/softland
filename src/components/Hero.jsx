function Hero() {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 order-lg-last hero-img animate">
            <img src="/img/phone_1.png" alt="" className="phone-1" />
            <img src="/img/phone_2.png" alt="" className="phone-2" />
          </div>

          <div className="col-lg-8 d-flex flex-column justify-content-center text-center text-md-start animate">
            <h2>Promote Your App with SoftLand</h2>
            <p>We are team of talented designers making websites with Bootstrap</p>
            <div className="d-flex mt-4 justify-content-center justify-content-md-start">
              <a href="#" className="download-btn">
                <i className="bi bi-google-play"></i> <span>Google Play</span>
              </a>
              <a href="#" className="download-btn">
                <i className="bi bi-apple"></i> <span>App Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
