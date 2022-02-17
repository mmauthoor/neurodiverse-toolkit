import './App.css';
// need react router dom to have routes to diff components

import MainNav from './components/MainNav';
import Pinboard from './components/Pinboard';

import Remind from './components/Remind';

function App() {

  // need use state for pinned here, or elsewhere? 


  return (
    <div className="App">
      <MainNav />
      {/* dashboard contacts button thingy for to do, alarm, etc */}
      <Pinboard />
      <Remind />
      {/* pinned stuff goes here */}
      {/* <Calendar /> */}
      {/* ideally renders date, but clicking on it opens up full calendar interface */}
    </div>
  );
}

export default App;
