export default function Click ({ onClick, btnText }) {
  const handleButtonClick = () => {
    const data = 'Some data from child'
    onClick(data)
  }

  return (
    <div>
      <h2>Дочерний компонент</h2>
      <button onClick={handleButtonClick}>{btnText}</button>
    </div>
  )
}
