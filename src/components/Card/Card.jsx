function Card(props) {
  const truncateText = (text, length) => {
    return text && text.length > length
      ? text.substring(0, length) + '...'
      : text
  }

  return (
    <div className="card mb-4">
      <img
        src={`https://picsum.photos/seed/image${props.index}/720/404`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        {/* Обрезаем title до 20 символов с проверкой на существование */}
        <h5 className="card-title">{truncateText(props.post?.title, 20)}</h5>
        {/* Обрезаем body до 100 символов с проверкой на существование */}
        <p className="card-text">{truncateText(props.post?.body, 100)}</p>
        <span className="btn btn-secondary" onClick={props.cardBtnClick}>
          Go somewhere
        </span>
      </div>
    </div>
  )
}

export default Card
