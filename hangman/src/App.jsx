import { useState, useEffect } from 'react';
import Puzzle from './components/puzzle'
import WordInput from './components/textInput'
import Guessed from './components/guessedLetters'
import jsonWords from './data/words.json'
import './App.css'

function App() {
  const [word, setWord] = useState(jsonWords[0])
  const [guessedLetters, setGuessedLetters] = useState([])

  useEffect(() => {
    setWord(randomWord())
  }, [])

  const randomWord = () => jsonWords[Math.floor(Math.random() * jsonWords.length)]

  const handleGuess = (letter) => {
    setGuessedLetters([...guessedLetters, letter])
  }

  return (
    <>
      <WordInput onGuess={handleGuess} />
      <Puzzle word={word} guessedLetters={guessedLetters} />
      <Guessed guessedLetters={guessedLetters} />
    </>
  );
}

export default App;
