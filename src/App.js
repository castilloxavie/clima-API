import './assets/css/App.css';
import Navbar from './components/navbar';
import WeatherPanel from './components/WeatherPanel'



function App() {
  return (
    <div className="App">
      <Navbar />
      <WeatherPanel />
    </div>
  );
}

export default App;
