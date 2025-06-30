import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <h1>Click Counter App</h1>
       <Counter />
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
     
    </div>
  );
}

export default App;
