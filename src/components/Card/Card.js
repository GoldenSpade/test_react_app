function Card (props) {
  return (
    <div className='card mb-4'>
      <img
        src={`https://picsum.photos/seed/image${props.index}/720/404`}
        className='card-img-top'
        alt='...'
      ></img>
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  )
}

export default Card
