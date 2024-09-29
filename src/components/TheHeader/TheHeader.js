export default function TheHeader (props) {
  const divStyle = {
    color: 'red',
    marginBottom: '10px'
  }

  return (
    <div>
      <div className='header'>
        <div className='header__title' style={divStyle}>
          {props.title}
        </div>
        <div className='header__subtitle'>{props.subtitle}</div>
      </div>
    </div>
  )
}
