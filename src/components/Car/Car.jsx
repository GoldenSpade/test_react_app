import './Car.css'
import { useState } from 'react'

export default function Car(props) {
  const [inputValue, setinputValue] = useState('')
  const inputClasses = ['input']

  const changeInput = (event) => setinputValue(event.target.value)

  if (inputValue !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  return (
    <div className="Car">
      <p>
        This is car component <strong>{props.name}</strong>.
      </p>
      <p>
        Year: <strong>{props.year}</strong>
      </p>
      <input
        type="text"
        value={inputValue}
        className={inputClasses.join(' ')}
        onChange={changeInput}
      />
      <button onClick={props.onChangeTitle}>Change title</button>
    </div>
  )
}
