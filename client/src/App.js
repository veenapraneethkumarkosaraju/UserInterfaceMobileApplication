import './App.css';
import Loginform from './components/Loginform.js';
import Navigation from './components/Navigation';
import Registration from './components/Registration.js';


function App() {
  return (
    <div className="App">
     <h1 id="headerid"><b>UI Summer Project !!</b></h1>
<Navigation />
    <Loginform />
    <Registration />
    </div>
  );
}

export default App;
