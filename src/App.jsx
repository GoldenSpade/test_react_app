import Header from './components/Header/Header'
import DoubleText from './components/Text/DoubleText'
import BlockTitle from './components/Text/BlockTitle'
import Accordion from './components/Accordion'
import Cards from './components/Card/Cards'
import Footer from './components/Footer/Footer'
import Car from './components/Car/Car'
import { posts } from './mocks/posts'

import { useEffect, useState } from 'react'

function App() {
  const [statePosts, setStatePosts] = useState([])
  const [cardsTitle, setCardsTitle] = useState('Cards')

  useEffect(() => {
    setStatePosts(posts)
  }, [])

  const changeCardsTitle = (postId, postTitle, newTitle) => {
    if (newTitle.length === 0) {
      setCardsTitle(`${postId}. ${postTitle}`)
    } else {
      setCardsTitle(`${postId}. ${newTitle}`)
    }
  }

  const removePost = (index) => {
    const postsCopy = [...statePosts]
    postsCopy.splice(index, 1)
    setStatePosts(postsCopy)
  }

  const [classes, setClasses] = useState(['ms-3'])

  const toggleClass = () => {
    if (classes.length === 1) {
      const newClasses = [
        ...classes,
        ...['bg-danger', 'p-2', 'fw-bold', 'text-white', 'rounded'],
      ]
      setClasses(newClasses)
    } else {
      setClasses(['ms-3'])
    }
  }
  return (
    <div className="app">
      <Header />

      <div className="d-flex justify-content-center align-items-center mb-3">
        <button className="btn btn-primary" onClick={toggleClass}>
          Change class
        </button>
        <span className={classes.join(' ')}>Dynamic classes</span>
      </div>

      <Car />
      <BlockTitle
        classList={'text-center mt-4 mt-lg-5'}
        titleText="Title text"
      />
      <div className="container-fluid">
        <div className="row">
          <DoubleText classList="col-sm-6 mt-6 mt-lg-5 mb-0" txtALign="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            eius error, quisquam inventore sapiente quae atque doloremque! Cum
            rerum eum delectus, doloribus quae, nisi et voluptate tenetur
            laboriosam autem itaque odit, nesciunt ex id corrupti atque earum
            officia at natus iure? Iste qui eum fugiat quibusdam ad, voluptate
            harum veritatis iusto neque? Adipisci accusantium voluptatibus est
            autem numquam repellendus expedita quod eveniet illo, odio id
            veritatis mollitia quibusdam dolorum doloremque voluptas eligendi
            reiciendis dolore alias rerum aperiam aliquid ab fuga! Nulla quia,
            perspiciatis nostrum, animi amet id placeat facilis atque autem
            architecto quibusdam quae accusamus magnam tenetur ullam deleniti
            asperiores.
          </DoubleText>
          <DoubleText classList="col-sm-6 mt-6 mt-lg-5 mb-0" txtALign="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            eius error, quisquam inventore sapiente quae atque doloremque! Cum
            rerum eum delectus, doloribus quae, nisi et voluptate tenetur
            laboriosam autem itaque odit, nesciunt ex id corrupti atque earum
            officia at natus iure? Iste qui eum fugiat quibusdam ad, voluptate
            harum veritatis iusto neque? Adipisci accusantium voluptatibus est
            autem numquam repellendus expedita quod eveniet illo, odio id
            veritatis mollitia quibusdam dolorum doloremque voluptas eligendi
            reiciendis dolore alias rerum aperiam aliquid ab fuga! Nulla quia,
            perspiciatis nostrum, animi amet id placeat facilis atque autem
            architecto quibusdam quae accusamus magnam tenetur ullam deleniti
            asperiores.
          </DoubleText>
          <BlockTitle
            classList={'text-center mt-4 mt-lg-5'}
            titleText="F.A.Q."
          />
          <Accordion />

          {/* Cards title */}
          <BlockTitle
            classList={'text-center mt-4 mb-4 mt-lg-5'}
            titleText={cardsTitle}
          />
          <Cards
            posts={statePosts}
            postsLimit={16}
            handleCardChangeClick={changeCardsTitle}
            handleCardRemoveBtnClick={removePost}
          />
          <Footer classList={'footer bg-dark fs-6 mt-3 pt-5 pb-5'} />
        </div>
      </div>
    </div>
  )
}

export default App
