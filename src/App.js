import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';

export default function App() {
  const [ cities, setCities ] = useState([]);
 

  let apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  const onSearch = (city) => {
     
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
          .then(res => res.json()) 
          .then(res => { 
              if(res.main !== undefined){ 
              const city = { 
                    min: Math.round(res.main.temp_min),
                    max: Math.round(res.main.temp_max),
                    name: res.name,
                    id: res.id,
                    img: res.weather[0].icon
                };
                if(cities.find(el => el.id === city.id)){
                    alert('Ciudad ya agregada');
                    } else {
                    setCities(oldCities => [...oldCities, city]); 
                }
              } else {
                  alert('Ciudad no encontrada')
              }
          });
  }

  const onClose = (id) => {
    setCities(c => c.filter(el => el.id !== id)); 
  }

  return (
      <div className="App">
        <Nav onSearch={onSearch}/>
        <Cards cities={cities} onClose={onClose}/>
      </div>
  );
}