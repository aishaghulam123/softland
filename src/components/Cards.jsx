const steps = [
  {
    number: '01',
    title: 'Sign Up',
    text: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat',
  },
  {
    number: '02',
    title: 'Repellat Nihil',
    text: 'Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest',
  },
  {
    number: '03',
    title: 'Ad ad velit qui',
    text: 'Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis',
  },
]

function Cards() {
  return (
    <section id="cards" className="cards section">
      <div className="container">
        <div className="text-center mb-4 steps-img animate">
          <img src="/img/steps.svg" alt="" />
        </div>

        <div className="row gy-4">
          {steps.map((step) => (
            <div className="col-lg-4 animate" key={step.number}>
              <div className="card-item">
                <span>{step.number}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
