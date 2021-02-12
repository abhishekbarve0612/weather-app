import { Container, Table, Alert } from "react-bootstrap";

const CityWeather = ({weather, errorMessage}) => {
  console.log(errorMessage, "AAAAAAAAAAAAAAA");
  return ( 
    <Container>
      
      { errorMessage && <Alert variant="danger">{errorMessage}</Alert> }
       {weather && <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Info Type</th>
              <th>Info Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <th>Weather</th>
              <td>
                {weather.weather[0].main}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <th>Humidity</th>
              <td>
                {weather.main.humidity}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <th>Temperature</th>
              <td>
                {weather.main.temp} <sup>o</sup>C
              </td>
            </tr>
            <tr>
              <td>4</td>
              <th>Pressure</th>
              <td>
                {weather.main.pressure} hpa
              </td>
            </tr>
            <tr>
              <td>5</td>
              <th>Wind Speed</th>
              <td>
                {weather.wind.speed} m/s
              </td>
            </tr>
            <tr>
              <td>6</td>
              <th>Clouds</th>
              <td>
                {weather.clouds.all} %
              </td>
            </tr>
          </tbody>
        </Table>
    }</Container>
   );
}
 
export default CityWeather;