function DoubleText (props) {
  return (
    <p className={props.classList} style={{ textAlign: 'justify' }}>
      {props.children}
    </p>
  )
}

export default DoubleText
