import { useState } from 'react'

function Card(props) {
  const truncateText = (text, length) => {
    return text && text.length > length
      ? text.substring(0, length) + '...'
      : text
  }

  const [cardTitle, setCardTtitle] = useState(props.post.title)

  const changeCardTitle = (event) => {
    const inputData = event.target.value
    if (inputData.length > 0) {
      setCardTtitle(inputData)
    } else {
      setCardTtitle(props.post.title)
    }
  }

  return (
    <div className="card mb-4">
      <img
        src={`https://picsum.photos/seed/image${props.index}/720/404`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {props.post.id}. {truncateText(cardTitle, 20)}
        </h5>
        <p className="card-text">{truncateText(props.post?.body, 100)}</p>
        <input
          type="text"
          className="form-control"
          placeholder="Print text here"
          onChange={changeCardTitle}
        ></input>
        <div className="d-flex justify-content-between mt-4">
          <span
            className="btn btn-outline-secondary"
            onClick={props.cardChangeBtnClick.bind(this, cardTitle)}
          >
            Go somewhere
          </span>
          <span
            className="btn btn-outline-danger"
            onClick={props.cardRemoveBtnClick}
          >
            Remove post
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
