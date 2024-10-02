import Carousel from './HeaderCarousel'
import LoginRegistrationBlock from '../Login/LoginRegistrationBlock'

function Header() {
  return (
    <header className="bg-dark">
      <Carousel />
      <LoginRegistrationBlock />
    </header>
  )
}

export default Header
