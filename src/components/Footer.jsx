const icons = ['twitter-x', 'facebook', 'instagram', 'skype', 'linkedin']

function Footer() {
  return (
    <footer className="footer dark-background">
      <div className="container">
        <h3 className="sitename">SoftLand</h3>
        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>

        <div className="social-links d-flex justify-content-center">
          {icons.map((icon) => (
            <a href="#" key={icon}>
              <i className={'bi bi-' + icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
