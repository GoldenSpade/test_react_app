import { useEffect, useState } from 'react'

function Footer() {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => setCurrentYear(new Date().getFullYear()), [])

  return (
    <footer className="footer bg-dark fs-6 mt-4 pt-5 pb-5">
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
