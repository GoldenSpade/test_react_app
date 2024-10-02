import { useEffect, useState } from 'react'

function Footer(props) {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => setCurrentYear(new Date().getFullYear()), [])

  return (
    <footer className={props.classList}>
      <p className="footer__text text-center text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        aliquam ipsa. Ullam, maxime ratione ipsum velit quia earum harum nobis
        aliquam magni. Suscipit labore laboriosam sunt rem. Quas, maiores vel!
      </p>
      <p className="text-center text-white">
        © MegaSite, All rights reserved, 2005 - {currentYear}
      </p>
    </footer>
  )
}

export default Footer
