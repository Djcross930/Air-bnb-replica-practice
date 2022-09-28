import './App.css';
import NavTop from './components/Nav.js'
import BelowNav from './components/BelowNav.js'
import BelowNavText from './components/BelowNavText.js'
import AthleteData from './components/Group.js'

function App() {
  return (
    <div className="App">
      <NavTop />
      <AthleteData />
      {/* <BelowNav />
      <BelowNavText /> */}
    </div>
  );
}

export default App;
