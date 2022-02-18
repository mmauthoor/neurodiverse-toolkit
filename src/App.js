import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

import Home from './components/Home';
import Reminders from './components/Reminders';
import Notes from './components/Notes';

function App() {

  // need use state for pinned here, or elsewhere? 


  return (
    <div className="App">
      {/* dashboard contacts button thingy for to do, alarm, etc */}
      {/* pinned stuff goes here */}
      {/* <Calendar /> */}
      {/* ideally renders date, but clicking on it opens up full calendar interface */}


      <Routes>
        <Route path="/" element={
          <Home />
        }/>
        <Route path="/reminders" element={
          <Reminders />
        }/>
        <Route path="/notes" element={
          <Notes />
        }/>

      
      </Routes>
    </div>

  );
}

export default App;
