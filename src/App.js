import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "aabbcc";//aabbccddeeffgghhiijjkkllmmnn
function App() {
  return (
    <div>
    <h2>จับคู่อักษรที่เหมือนกัน</h2>
    <WordCard value={word}/>
    </div>
    );
   
}

export default App;
