import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Home/>
      <LandingPage/>
    </div>
  );
}

export default App;
