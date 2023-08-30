import { useEffect, useState } from 'react'
import './App.css'
import flashcardsData from './data/flashcards.json';
import Flashcard from './components/Flashcard';

function App() {
  const [flashCards, setFlashCards] = useState([]);

  useEffect(() => {
    // Simulate loading flashcards from JSON data
    setFlashCards(flashcardsData)
  }, []);

  return (
    <div className="App">
      <h1>Language Learning Flashcards</h1>
      <p className="description">Practice vocabulary translation between English and Spanish with these colorful flashcards.</p>
      <div className='flashcard-container'>
      {flashCards.map((flashcard, index)=> (
        <Flashcard key={index} flashcard={flashcard} />
      ))}
      </div>
    </div>
  );
}

export default App
