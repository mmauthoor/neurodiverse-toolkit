import './App.css';
import { useState } from "react";
import {Routes, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import Reminders from './components/Reminders';
import Notes from './components/Notes';

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
  })


  return (
    <div className="App">
      {/* dashboard contacts button thingy for to do, alarm, etc */}
      {/* pinned stuff goes here */}
      {/* <Calendar /> */}
      {/* ideally renders date, but clicking on it opens up full calendar interface */}


      <Routes>
        <Route path="/" element={
          <Home 
            pinnedNotes={pinnedNotes} 
            setPinnedNotes={setPinnedNotes}
            pinnedReminders={pinnedReminders} 
            setPinnedReminders={setPinnedReminders}
          />
        }/>
        <Route path="/reminders" element={
          <Reminders pinnedReminders={pinnedReminders} setPinnedReminders={setPinnedReminders}/>
        }/>
        <Route path="/notes" element={
          <Notes pinnedNotes={pinnedNotes} setPinnedNotes={setPinnedNotes}/>
        }/>

      
      </Routes>
    </div>

  );
}

export default App;
