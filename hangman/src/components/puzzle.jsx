function Puzzle({ word, guessedLetters }) {
    const displayWord = word.split('').map((letter) =>
      guessedLetters.includes(letter) ? letter : '_'
    ).join(' ')
  
    return <div id='displayword'>{displayWord}</div>
  }
  
  export default Puzzle;
  