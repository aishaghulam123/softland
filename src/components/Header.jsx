import { useState, useEffect } from 'react'

const links = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Features', id: 'features' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Contact', id: 'contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.onscroll = () => setScrolled(window.scrollY > 100)
  }, [])

  return (
    <header
      className={
        'header d-flex align-items-center fixed-top ' +
        (scrolled ? 'scrolled ' : '') +
        (open ? 'mobile-nav-active' : '')
      }
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center">
          <h1 className="sitename">SoftLand</h1>
        </a>

        <nav className="navmenu">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a href={'#' + link.id} onClick={() => setOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <i
            className={'mobile-nav-toggle d-xl-none bi ' + (open ? 'bi-x' : 'bi-list')}
            onClick={() => setOpen(!open)}
          ></i>
        </nav>
      </div>
    </header>
  )
}

export default Header
