const features = [
  {
    image: '/img/features-1.svg',
    title: 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    list: [
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
      'Ullam est qui quos consequatur eos accusamus.',
    ],
  },
  {
    image: '/img/features-2.svg',
    title: 'Corporis temporibus maiores provident',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    image: '/img/features-3.svg',
    title: 'Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas',
    intro:
      'Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.',
    list: [
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
      'Facilis ut et voluptatem aperiam. Autem soluta ad fugiat',
    ],
  },
  {
    image: '/img/features-4.svg',
    title: 'Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
]

function Features() {
  return (
    <section id="features" className="features section">
      <div className="container section-title animate">
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        {features.map((item, index) => {
          const reverse = index % 2 === 1
          return (
            <div className="row gy-4 align-items-center features-item animate" key={item.title}>
              <div className={'col-md-5 d-flex align-items-center ' + (reverse ? 'order-1 order-md-2' : '')}>
                <img src={item.image} className="img-fluid" alt="" />
              </div>
              <div className={'col-md-7 ' + (reverse ? 'order-2 order-md-1' : '')}>
                <h3>{item.title}</h3>
                <p className="fst-italic">{item.intro}</p>
                {item.text && <p>{item.text}</p>}
                {item.list && (
                  <ul>
                    {item.list.map((line) => (
                      <li key={line}>
                        <i className="bi bi-check"></i> <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
