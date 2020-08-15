import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "aabbccddeeffgghhiijjkkllmmnn";
function App() {
  return (
    <div>
    <h2>เลือกตัวอักษรที่เหมือนกัน</h2>
    <WordCard value={word}/>
    </div>
    );
   
}

export default App;
