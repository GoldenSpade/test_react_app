export default function Car (props) {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    borderBottom: 'dotted 1px #252525'
  }

  return (
    <div style={divStyle}>
      <p>
        This is car component <strong>{props.name}</strong>.
      </p>
      <p>
        Year: <strong>{props.year}</strong>
      </p>
      <button onClick={props.onChangeTitle}>Change title</button>
    </div>
  )
}
