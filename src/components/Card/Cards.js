import Card from './Card'

function Cards (props) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        {props.cards.map((_, index) => (
          <div className=' col-12 col-sm-6 col-md-6 col-xl-3'>
            <Card index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
