import { useEffect, useState } from 'react'

// Neeche scroll karne par right-bottom mein upar jaane ka button aata hai
function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 100)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function goToTop(e) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#"
      id="scroll-top"
      className={'scroll-top d-flex align-items-center justify-content-center ' + (show ? 'active' : '')}
      onClick={goToTop}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  )
}

export default ScrollTop
