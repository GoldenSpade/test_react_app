import Header from './components/Header/Header'
import DoubleText from './components/Text/DoubleText'
import BlockTitle from './components/Text/BlockTitle'
import Accordion from './components/Accordion'
import Cards from './components/Card/Cards'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'

import { posts } from './mocks/posts'

import { useEffect, useState } from 'react'

function App() {
  const [statePosts, setStatePosts] = useState([])
  const [blockTitle, setBlockTitle] = useState('Часть для тестирования')

  const changeTitleHandler = (newTitle) => setBlockTitle(newTitle)

  useEffect(() => {
    setStatePosts(posts)
  }, [])

  return (
    <div className="app">
      <Header />
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
          <BlockTitle
            classList={'text-center mt-4 mb-4 mt-lg-5'}
            titleText="Cards"
          />
          <Cards posts={statePosts} postsLimit={16} />

          {/* Часть для тестирования */}

          <BlockTitle
            classList={'text-center mt-4 mb-4 mt-lg-5'}
            titleText={blockTitle}
          />

          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                <Card
                  post={statePosts[0]}
                  index={0}
                  cardBtnClick={changeTitleHandler.bind(
                    this,
                    statePosts[0]?.title
                  )}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                <Card
                  post={statePosts[1]}
                  index={1}
                  cardBtnClick={changeTitleHandler.bind(
                    this,
                    statePosts[1]?.title
                  )}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                <Card
                  post={statePosts[2]}
                  index={2}
                  cardBtnClick={changeTitleHandler.bind(
                    this,
                    statePosts[2]?.title
                  )}
                />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
