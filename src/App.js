import './App.css'
import TheHeader from './components/TheHeader/TheHeader'
import Car from './components/Car/Car'
import Click from './components/Click/Click'
import { useState } from 'react'

function App () {
  const [cars] = useState([
    { id: 1, name: 'Audi', year: 2010 },
    { id: 2, name: 'BMW', year: 2015 },
    { id: 3, name: 'Mazda', year: 2020 }
  ])

  const [pageTitle, setTitle] = useState('Hello World!')

  const changeTitleHandler = newTitle => {
    setTitle(newTitle)
  }

  const handleClick = data => console.log(data)

  return (
    <div className='App'>
      <TheHeader title={pageTitle} subtitle='This is the new site!' />

      {cars.map(car => (
        <Car
          key={car.id}
          name={car.name}
          year={car.year}
          onChangeTitle={changeTitleHandler.bind(this, car.name)}
        />
      ))}

      <Click btnText='Click me!' onClick={handleClick} />
    </div>
  )
}

export default App
