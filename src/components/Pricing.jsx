const lines = [
  'Quam adipiscing vitae proin',
  'Nec feugiat nisl pretium',
  'Nulla at volutpat diam uteera',
  'Pharetra massa massa ultricies',
  'Massa ultricies mi quis hendrerit',
]

const plans = [
  { name: 'Free Plan', icon: 'bi-box', price: 0, available: 3 },
  { name: 'Business Plan', icon: 'bi-rocket', price: 29, available: 5, featured: true },
  { name: 'Developer Plan', icon: 'bi-send', price: 49, available: 5 },
]

function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title animate">
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row g-4">
          {plans.map((plan) => (
            <div className="col-lg-4 animate" key={plan.name}>
              <div className={'pricing-item ' + (plan.featured ? 'featured' : '')}>
                <h3>{plan.name}</h3>
                <div className="icon">
                  <i className={'bi ' + plan.icon}></i>
                </div>
                <h4>
                  <sup>$</sup>
                  {plan.price}
                  <span> / month</span>
                </h4>
                <ul>
                  {lines.map((line, index) => {
                    const yes = index < plan.available
                    return (
                      <li className={yes ? '' : 'na'} key={line}>
                        <i className={'bi ' + (yes ? 'bi-check' : 'bi-x')}></i> <span>{line}</span>
                      </li>
                    )
                  })}
                </ul>
                <div className="text-center">
                  <a href="#" className="buy-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
