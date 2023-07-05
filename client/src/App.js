import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Loginform from './components/pages/Loginform.js';
import Navigation from './components/pages/Navigation.js';
import Registration from './components/pages/Registration.js';
import Profile from './components/pages/Profile.js';


function App() {
  return (
    <div className="App">
      <h1 id="headerid"><b>UI Summer Project !!</b></h1>
      <BrowserRouter>
          <Routes>
          <Route path='/' element={ <Navigation />}>
      
              <Route path="login" element={<Loginform />}/>
              
              <Route path="register" element={<Registration />}/>

              <Route path="profile" element={<Profile />}/>
              
              </Route>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
