import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "aabbccddeeffgg";//aabbccddeeffgghhiijjkkllmmnn
function App() {
  return (
    <div>
    <h2>จับคู่อักษรที่เหมือนกัน</h2>      
    จัดทำโดย นายจตุมงคล แสงพุ่ม 6110110050
    <WordCard value={word}/>
    </div>
    );
   
}

export default App;
