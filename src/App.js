import logo from './logo.svg';
import './App.css';
import CityInput from './Components/CityInput/CityInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import CityWeather from './Components/CityWeather/CityWeather';
import {Alert} from 'react-bootstrap';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [err, setErr] = useState(null);
  const apiKey = "52f15b89c53a03a1171aac50634a0192";
  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(
      (res) => res.json()
    ).then(
      (result) => {
        if (result.cod == "404"){
          console.log(result);
          setWeather(null);
          setErr(result.message);
        } else {
        console.log(result.message);
        setWeather(result);
        }
      }
    )
  }
  return (
    <div className="App">
      <h3>Weather App</h3>
      <CityInput city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <CityWeather weather={weather} errorMessage={err} />
    </div>
  );
}

export default App;
