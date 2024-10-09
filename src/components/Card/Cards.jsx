import Card from './Card'

function Cards(props) {
  const limitedPosts = props.posts.slice(props.posts, props.postsLimit)

  return (
    <div className="container-fluid">
      <div className="row">
        {limitedPosts.map((_, index) => (
          <div className="col-12 col-sm-6 col-md-6 col-xl-3" key={index}>
            <Card
              index={index}
              post={limitedPosts[index]}
              cardChangeBtnClick={(newTitle) =>
                props.handleCardChangeClick(
                  limitedPosts[index].id,
                  limitedPosts[index].title,
                  newTitle // Передаем новый заголовок
                )
              }
              cardRemoveBtnClick={props.handleCardRemoveBtnClick.bind(
                this,
                index
              )}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
