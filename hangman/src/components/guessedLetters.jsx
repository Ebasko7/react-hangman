function Guessed({ guessedLetters }) {
    return (
      <div id='guess'>
        <div>
          <h3>Previous Guesses:</h3>{guessedLetters.join(', ')}</div>
      </div>
    )
  }
  
  export default Guessed;
  