import Card from './Card'

function Cards(props) {
  const limitedSposts = props.posts.slice(props.posts, props.postsLimit)

  return (
    <div className="container-fluid">
      <div className="row">
        {limitedSposts.map((_, index) => (
          <div className="col-12 col-sm-6 col-md-6 col-xl-3" key={index}>
            <Card index={index} post={limitedSposts[index]} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
