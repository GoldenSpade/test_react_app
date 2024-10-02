import LoginForm from '../Login/LoginForm'
import RegistrationForm from '../Login/RegistrationForm'
import MainModal from '../Modal/MainModal'

import { useState } from 'react'

function LoginRegistrationBlock() {
  const [isRegistered, setisRegistered] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  const goToLogin = () => {
    setisRegistered(true)
    setModalTitle('Login')
  }
  const goToRegistration = () => {
    setisRegistered(false)
    setModalTitle('Registration')
  }

  return (
    <div>
      <p className="fs-6 text-center text-white pt-2 pb-2">
        <span
          data-bs-toggle="modal"
          data-bs-target="#mainModal"
          className="text-white"
          style={{ cursor: 'pointer' }}
          onClick={goToLogin}
        >
          Login
        </span>
        {'  '} / {'  '}
        <span
          data-bs-toggle="modal"
          data-bs-target="#mainModal"
          className="text-white"
          style={{ cursor: 'pointer' }}
          onClick={goToRegistration}
        >
          Registration
        </span>
      </p>

      <MainModal title={modalTitle}>
        {isRegistered ? <LoginForm /> : <RegistrationForm />}
      </MainModal>
    </div>
  )
}

export default LoginRegistrationBlock
