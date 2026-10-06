const boxes = [
  {
    icon: 'bi-buildings',
    title: 'Eius provident',
    text: 'Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem',
  },
  {
    icon: 'bi-clipboard-pulse',
    title: 'Rerum aperiam',
    text: 'Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia',
  },
  {
    icon: 'bi-command',
    title: 'Veniam omnis',
    text: 'Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Delares sapiente',
    text: 'Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda',
  },
]

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row align-items-xl-center gy-5">
          <div className="col-xl-5 content animate">
            <h3>About Us</h3>
            <h2>Ducimus rerum libero reprehenderit cumque</h2>
            <p>
              Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis
              minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt
              voluptatem tempora deleniti soluta.
            </p>
            <a href="#" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="col-xl-7">
            <div className="row gy-4 icon-boxes">
              {boxes.map((box) => (
                <div className="col-md-6 animate" key={box.title}>
                  <div className="icon-box">
                    <i className={'bi ' + box.icon}></i>
                    <h3>{box.title}</h3>
                    <p>{box.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
