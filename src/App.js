import './App.css';
import NavTop from './components/Nav.js'
import BelowNav from './components/BelowNav.js'
import BelowNavText from './components/BelowNavText.js'
import AthleteData from './components/Group.js'
function App() {
  return (
    <div className="App">
      <NavTop />
      <BelowNav />
      <BelowNavText />
      <AthleteData
        img="/static/media/Athlete.1f930914506d68e6a2aa.png"
      />
    </div>
  );
}

export default App;
