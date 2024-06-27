import { useState } from 'react'

function textInput({ onGuess }) {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 1) {
      onGuess(input)
    }
    setInput('')
  }

  return (
    <>
    <h1 id='title'>Guess a Letter!</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} maxLength="1" />
      <button type="submit">Guess</button>
    </form>
    </>
  )
}

export default textInput;
