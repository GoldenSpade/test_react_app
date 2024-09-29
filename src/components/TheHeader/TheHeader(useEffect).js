import { useState, useEffect } from 'react'

function TheHeader (props) {
  const [user, setUser] = useState({
    userId: '001',
    id: '001',
    title: 'delectus aut autem',
    completed: false
  })

  const divStyle = {
    color: 'red',
    border: 'solid 2px blue',
    padding: '10px'
  }

  async function getData () {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await res.json()
    return json
  }

  useEffect(() => {
    async function fetchData () {
      const data = await getData()

      setUser({
        userId: data.userId,
        id: data.id,
        title: data.title
      })
    }

    fetchData()
  }, [])

  return (
    <div className='header'>
      <div className='header__title' style={divStyle}>
        {props.title}
      </div>
      <div className='header__subtitle'>{props.subtitle}</div>
      <div>ID: {user.id}</div>
      <div>User ID: {user.userId}</div>
      <div>User title: {user.title}</div>
    </div>
  )
}

export default TheHeader
