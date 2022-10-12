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
<<<<<<< HEAD
        review="5.0"
        reviewCount={6}
        description="Life lessons with Katie Zaferes"
        price={136}
        country="USA"
=======
>>>>>>> 900682fd9d01f29be12611c51d44317e37db1cf9
      />
    </div>
  );
}

export default App;
