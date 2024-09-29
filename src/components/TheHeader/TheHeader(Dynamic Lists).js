import { users } from '../../mocks/users.js'
import { posts } from '../../mocks/posts.js'
import { useState, useEffect } from 'react'

function TheHeader (props) {
  const divStyle = {
    color: 'red',
    border: 'solid 2px blue',
    marginBottom: '10px'
  }

  const [CurPosts, setCurPosts] = useState([])

  const listItems = CurPosts.map((post, id) => (
    <li key={post.id}>
      {id + 1}. {post.title} | {post.user.name} | {post.user.email}
    </li>
  ))

  const addUserToPosts = (posts, users) => {
    return posts.map(post => {
      const user = users.find(u => u.id === post.userId)
      return {
        ...post,
        user: user || null
      }
    })
  }

  useEffect(() => {
    const updatedPosts = addUserToPosts(posts, users)
    setCurPosts(updatedPosts)
  }, [])

  return (
    <div>
      <div className='header'>
        <div className='header__title' style={divStyle}>
          {props.title}
        </div>
        <div className='header__subtitle'>{props.subtitle}</div>
      </div>
      <ul className='list'>{listItems}</ul>
    </div>
  )
}

export default TheHeader
