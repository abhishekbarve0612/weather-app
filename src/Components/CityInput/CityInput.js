import {Container, Form, Button, Alert} from 'react-bootstrap';
import {useState, useEffect, useRef} from 'react';
import './style.css';
const CityInput = ({city, setCity, fetchWeather, setWeather}) => {
  const [error, setError] = useState(null);
  const inputRef = useRef();
  const handleInputClick = () => {
    console.log(inputRef.current.value);
    setCity(inputRef.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city){
      setError("City is Empty!");
      setWeather(null);
    } else {
      setError(null);
      fetchWeather();
    }
  }

  return ( 
    <Container>
      <Form>
      <Form.Group>
        <Form.Control className="city-input" type="text" placeholder="Enter City" name="city" id="city" value={city} onChange={handleInputClick} ref={inputRef} />
        <Button className="fetch-weather" onClick={handleSubmit} variant="success" type="submit">
          Fetch Weather
        </Button>
      </Form.Group>
      </Form>
      { error && <Alert variant="danger">{error}</Alert> }
    </Container>
   );
}
 
export default CityInput;