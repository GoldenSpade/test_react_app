import { useState } from 'react'

function LoginForm() {
  //! Переменные для записи и хранения почты и пароля
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isChecked, setIsChecked] = useState(false) //# Состояние для чекбокса
  //! Функция обработки инпута с почтой
  const changeEmailInput = (event) => {
    setEmail(event.target.value)
  }
  //! Функция обработки инпута с паролем
  const changePasswordInput = (event) => {
    setPassword(event.target.value)
  }
  //# Функция обработки чекбокса
  const checkboxInput = (event) => {
    setIsChecked(event.target.checked) //# Обновление состояния чекбокса
  }

  //! Функция для отправки инпута с паролем
  const sendData = (event) => {
    event.preventDefault() //! Отменяем днйствие браузера по умолчанию (обновление страницы)
    //! Формируем объект для отправки с данными из формы
    const data = {
      email: email,
      password: password,
      isChecked: isChecked, //# Добавляем значение чекбокса в данные
    }
    //! Для теста выводим данные в консоль (вместо отправки)
    console.log(data)
    //! Сбрасываеи поля формы
    setEmail('')
    setPassword('')
    setIsChecked(false)
  }
  //! Шаблон формы из Бутстрап 5
  return (
    <div className="container-fluid">
      <div className="row" style={{ justifyContent: 'center' }}>
        <form className="pb-4">
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email} //! Привязываем значение поля email к его state
              onChange={changeEmailInput} //! Назначаем функцию обработки инпута с почтой
            ></input>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password} //! Привязываем значение поля password к его state
              onChange={changePasswordInput} //! Назначаем функцию обработки инпута с password
            ></input>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={isChecked} //# Привязка чекбокса к его состоянию
              onChange={checkboxInput} //# Функция для передачи данных в состояние чекбокса
            ></input>
            <label className="form-check-label">Check me out</label>
          </div>
          <button
            type="submit"
            className="btn btn-dark w-100"
            onClick={sendData} //! Выполнить функцию для отправки данных
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
