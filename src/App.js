import logo from './logo.svg';
import './App.css';
import CityInput from './Components/CityInput/CityInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import CityWeather from './Components/CityWeather/CityWeather';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const apiKey = "52f15b89c53a03a1171aac50634a0192";
  const fetchWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(
      (res) => res.json()
    ).then(
      (result) => {
        console.log(result);
        setWeather(result);
      }
    ).catch(
      err => console.log("message", err)
    )
  }
  return (
    <div className="App">
      <h3>Weather App</h3>
      <CityInput city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {weather && <CityWeather weather={weather} />}
    </div>
  );
}

export default App;
