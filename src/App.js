import './App.css';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import ReminderPage from './components/ReminderPage';
import NotesPage from './components/NotesPage';
import ToDoPage from './components/ToDoPage';
import ProsConsPage from './components/ProsConsPage';
import AboutPage from './components/AboutPage';

function App() {

  const [pinnedNotes, setPinnedNotes] = useState(() => {
    const savedPins = localStorage.getItem("pinnedNotes");
    const initialValue = JSON.parse(savedPins);
    return initialValue || [];
  });

  const [pinnedReminders, setPinnedReminders] = useState(() => {
    const savedRems = localStorage.getItem("pinnedReminders");
    const initialValue = JSON.parse(savedRems);
    return initialValue || [];
  });

  const [crossedToDos, setCrossedToDos] = useState(() => {
    const savedCrossedToDos = localStorage.getItem("crossedToDos");
    const initialValue = JSON.parse(savedCrossedToDos);
    return initialValue || [];
  });

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={
          <Home 
            pinnedNotes={pinnedNotes} 
            setPinnedNotes={setPinnedNotes}
            pinnedReminders={pinnedReminders} 
            setPinnedReminders={setPinnedReminders}
            crossedToDos={crossedToDos}
            setCrossedToDos={setCrossedToDos}
          />
        }/>
        <Route path="/reminders" element={
          <ReminderPage pinnedReminders={pinnedReminders} setPinnedReminders={setPinnedReminders}/>
        }/>
        <Route path="/todo" element={
          <ToDoPage crossedToDos={crossedToDos} setCrossedToDos={setCrossedToDos}/>
        }/>
        <Route path="/proscons" element={
          <ProsConsPage/>
        }/>
        <Route path="/notes" element={
          <NotesPage pinnedNotes={pinnedNotes} setPinnedNotes={setPinnedNotes}/>
        }/>
        <Route path="/about" element={
          <AboutPage/>
        }/>
      </Routes>
    </div>

  );
}

export default App;
